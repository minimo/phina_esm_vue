import { DisplayElement } from "phina.js/build/phina.esm";

export class GameObject extends DisplayElement {
  constructor(options) {
    super(options);
    this.time = 0;
    this.on('enterframe', () => this.time++);
  }
}
