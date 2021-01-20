import { Label } from "phina.js/build/phina.esm";
import { $safe } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class Score extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, { initialScore: 0 });
    super(options);

    this._score = options.initialScore;

    const labelOptions = {
      text: `${this._score}`,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 4,
      fontSize: 64,
    }
    this.label = new Label(labelOptions).addChildTo(this);
  }

  add(value) {
    this._score += value;
    this.label.text = `${this._score}`;
  }

  set(value) {
    this._score = value;
    this.label.text = `${this._score}`;
  }
}
