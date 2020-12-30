import { Label } from "phina.js/build/phina.esm";
import { $safe, times } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class CountDown extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, { startCount: 3, interval: 1000, startScale: 1, endScale: 0.5 });
    super(options);

    this.count = options.startCount;

    const labelOptions = {
      text: `${this.count}`,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 6,
      fontSize: 128,
    }
    this.label = new Label(labelOptions)
      .setScale(options.startScale)
      .addChildTo(this);

    this.label.tweener.clear();
    times.call(options.startCount, () => {
      this.label.tweener
        .to({ scaleX: options.endScale, scaleY: options.endScale, alpha: 0 }, options.interval )
        .call(() => {
          this.count--;
          if (this.count > 0) {
            this.label.text = `${this.count}`;
          } else {
            this.label.text = "START";
          }
        })
        .wait(100)
        .call(() => {
          this.label.alpha = 1.0;
          this.label.setScale(options.startScale);
        })
    });
    this.label.tweener
      .wait(1000)
      .call(() => this.flare('countdown_end'))
      .to({ alpha: 0 }, options.interval / 2 );
  }
}
