import { RectangleShape, Sprite } from "phina.js/build/phina.esm";
import { $safe } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class Player extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, { width: 32, height: 32 });
    super(options);
    this.sprite = new Sprite("player1", 64, 64)
      .addChildTo(this)
      .setFrameIndex(1);
    this.character = 0;

    this.collision = new RectangleShape({ width: 16, height: 16 }).addChildTo(this);
    this.collision.alpha = 0.0;

    this.animationSeq = [1, 2, 3];
    this.animationSeqIndex = 0;

    this.isStart = false;
    this.isDead = false;

    this.on('start', () => {
      this.isStart = true;
    });

    this.one('dead', () => {
      this.isDead = true;
    });
  }

  update(app) {
    if (!this.isDead && this.time % 5 == 0) {
      this.animationSeqIndex++;
      if (this.animationSeqIndex == this.animationSeq.length) this.animationSeqIndex = 0;
      const idx = this.animationSeq[this.animationSeqIndex];
      this.sprite.setFrameIndex(idx);
    }
    if (!this.isStart) return;
    
    if (this.isDead) {
      this.sprite.setFrameIndex(4);
      return;
    }
    
    const ct = app.mouse;
    if (ct.getPointing()) {
      let pt = ct.deltaPosition;
      this.x += ~~(pt.x * 1.4);
      this.y += ~~(pt.y * 1.4);
    }

    this.time++;
  }

  changeCharacter(v) {
    if (this.character === v) return;
    this.character = v;
    this.sprite.setImage(`player${v}`, 64, 64)
      .setFrameIndex(0);
  }
}
