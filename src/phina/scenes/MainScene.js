import { Collision, DisplayElement, DisplayScene, Label, Sprite } from "phina.js/build/phina.esm";
import { CountDown } from "../elements/CountDown";
import { Player } from "../elements/Player";
import { Score } from "../elements/Score";
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

    this.background = new DisplayElement().addChildTo(this);
    this.foreground = new DisplayElement().addChildTo(this);

    //プレイヤー
    this.player = new Player()
      .setPosition(this.width / 4, this.height / 2)
      .addChildTo(this.foreground);

    this.player.one('dead_end', () => {
      this.gameover();
      this.time = 0;
    });

    //スコア表示
    this.score = new Score()
    .setPosition(this.width / 2, 60)
    .addChildTo(this.foreground);

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

    if (!this.isGameOver) {
      if(this.time % 120 == 0) this.enterTube();

      this.tubes.forEach(tube => {
        tube.x -= 2;
        if (tube.point > 0 && tube.x < this.width / 4) {
          this.score.add(tube.point);
          tube.point = 0;
        }
        if (tube.x < -50) {
          tube.remove();
        }
        if (Collision.testRectRect(this.player, tube)) {
          this.player.flare('dead');
        }
      });
    } else {
      if (this.time > 120 && (app.pointer.getPointingStart() || app.keyboard.getKey("space"))) {
        this.exit();
      }
    }

    this.time++;
  }

  enterTube() {
    const gap = randint(90, 200);
    const center = randint(-130, 130);
    const tube1 = new Tube({ isBottom: false });
    tube1.setPosition(this.width + 30, this.height / 2 - tube1.height / 2 - gap / 2 + center).addChildTo(this.background);
    const tube2 = new Tube({ isBottom: true, point: 0 });
    tube2.setPosition(this.width + 30, this.height / 2 + tube2.height / 2 + gap / 2 + center).addChildTo(this.background);
    this.tubes.push(tube1);
    this.tubes.push(tube2);
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
      .addChildTo(this.foreground);
    
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
          .addChildTo(this.foreground);
      });
  }
}

//ManagerSceneで使用出来る様にする為
// window.MainScene = MainScene;
