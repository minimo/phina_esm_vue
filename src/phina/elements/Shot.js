import { CircleShape, RectangleShape, Sprite } from "phina.js/build/phina.esm";
import { $safe } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class Shot extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, { width: 16, height: 16 });
    super(options);

    // this.sprite = new Sprite("", 64, 64).addChildTo(this);
    this.sprite = new CircleShape({ fill: 'red', stroke: '#aaa', strokeWidth: 1, radius: 16 }).addChildTo(this);

    this.collision = new RectangleShape({ width: 16, height: 16 }).addChildTo(this);
    this.collision.alpha = 0.0;
  }

  update(app) {
    this.x += 6;
  }
}
