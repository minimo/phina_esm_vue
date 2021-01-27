// @ts-nocheck
import { Collision, DisplayElement, DisplayScene, Label, Sprite } from "phina.js/build/phina.esm";
import { CountDown } from "../elements/CountDown";
import { Player } from "../elements/Player";
import { Score } from "../elements/Score";
import { Shot } from "../elements/Shot";
import { Tube } from "../elements/Tube";
import { $safe, randint } from "../extensions/Utils";

export class MainScene extends DisplayScene {

  constructor(options) {
    options = $safe.call({}, options, { backgroundColor: 'black' });
    super(options);

    this.isStart = false;
    this.isGameOver = false;
    this.tubes = [];
    this.time = 0;

    //バックグラウンド
    this.bg = new Sprite("background").addChildTo(this).setOrigin(0, 0);

    this.backgroundLayer = new DisplayElement().addChildTo(this);
    this.objectLayer = new DisplayElement().addChildTo(this);
    this.foregroundLayer = new DisplayElement().addChildTo(this);

    //プレイヤー
    this.player = new Player()
      .setPosition(this.width / 4, this.height / 2)
      .addChildTo(this.objectLayer);

    this.player.one('dead_end', () => {
      this.gameover();
      this.time = 0;
    });

    //スコア表示
    this.score = new Score()
      .setPosition(this.width / 2, 60)
      .addChildTo(this.foregroundLayer);

    //カウントダウン
    this.countDown = new CountDown()
      .setPosition(this.width / 2, this.height / 2)
      .addChildTo(this);

    this.countDown.on('countdown_end', () => {
      this.isStart = true;
      this.player.flare('start');
    });
  }

  update(app) {
    if (!this.isStart) return;

    if (this.isGameOver) {
      if (this.time > 120 && (app.pointer.getPointingStart() || app.keyboard.getKey("space"))) {
        this.exit();
      }
      return;
    }
    if(this.time % 40 == 0) this.enterTube();

    this.tubes.forEach(tube => {
      tube.x -= 4;
      if (tube.point > 0 && tube.x < this.width / 4) {
        this.score.add(tube.point);
        window.vueApp.$store.commit('incrementScore');
        tube.point = 0;
      }
      if (tube.x < -50) {
        tube.remove();
      }
      if (Collision.testRectRect(this.player, tube)) {
        this.player.flare('dead');
      }
    });
    // this.objectLayer.children.forEach((i, e) => {
    //   if (typeof e == 'Shot') {
    //     console.log('found shot', e);
    //     return;
    //   }
    //   if (typeof e == 'Tube') {
    //     console.log('found tube', e);
    //   }
    // })
    const index = window.vue.$store.state.character;
    this.player.changeCharacter(index);
    const ct = app.mouse;
    if (ct.getPointing()) {
      let pt = ct.deltaPosition;
      this.player.x += ~~(pt.x * 1.4);
      this.player.y += ~~(pt.y * 1.4);
      this.enterShot();
    }

    this.time++;
  }

  enterTube() {
    const tube1 = new Tube({ isBottom: false, point: 1 });
    tube1.setPosition(this.width + 30, this.height / 2 - tube1.height / 2 - randint(10, 200)).addChildTo(this.backgroundLayer);
    this.tubes.push(tube1);

    const tube2 = new Tube({ isBottom: true, point: 0 });
    tube2.setPosition(this.width + 30, this.height / 2 + tube2.height / 2 + randint(10, 200)).addChildTo(this.backgroundLayer);
    this.tubes.push(tube2);
  }

  enterShot() {
    new Shot().setPosition(this.player.x, this.player.y).addChildTo(this.objectLayer);
  }

  gameover() {
    this.isGameOver = true;
    console.log("game over");      

    const labelOptions = {
      text: "GAME OVER",
      fill: 'white',
      stroke: 'black',
      strokeWidth: 6,
      fontSize: 100,
    }
    this.gameoverLabel = new Label(labelOptions)
      .setPosition(this.width / 2, this.height / 2)
      .addChildTo(this.foregroundLayer);
    
    this.gameoverLabel.tweener.clear()
      .wait(2000)
      .call(() => {
        const labelOptions = {
          text: "TOUCH SCREEN",
          fill: 'white',
          stroke: 'black',
          strokeWidth: 6,
          fontSize: 50,
        }
        new Label(labelOptions)
          .setPosition(this.width / 2, this.height * 0.7)
          .addChildTo(this.foregroundLayer);
      });
  }
}
