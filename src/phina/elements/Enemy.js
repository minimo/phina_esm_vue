import { CircleShape, RectangleShape } from "phina.js/build/phina.esm";
import { $safe } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class Enemy extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, { width: 16, height: 16 });
    super(options);

    this.sprite = new CircleShape({ fill: 'blue', stroke: '#aaa', strokeWidth: 1, radius: 16 }).addChildTo(this);

    this.collision = new RectangleShape({ width: 16, height: 16 }).addChildTo(this);
    this.collision.alpha = 0.0;
  }
}
