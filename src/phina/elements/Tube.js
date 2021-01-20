import { Sprite } from "phina.js/build/phina.esm";
import { $safe } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class Tube extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, {
      width: 52,
      height: 320,
      isBottom: false,
      point: 1,
    });
    super(options);
    this.sprite = new Sprite(`tube${options.isBottom ? "2" : "1"}`).addChildTo(this);
    this._point = options.point;
  }

  get point() { return this._point; }
  set point(value) { this._point = value; }
}
