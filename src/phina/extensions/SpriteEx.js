import { Sprite } from "phina.js/build/phina.esm";
export class SpriteEx extends Sprite {
  constructor(options) {
    super(options);
  }

  setFrameTrimming(x, y, width, height) {
    this._frameTrimX = x || 0;
    this._frameTrimY = y || 0;
    this._frameTrimWidth = width || this.image.domElement.width - this._frameTrimX;
    this._frameTrimHeight = height || this.image.domElement.height - this._frameTrimY;
    return this;
  }
  
  setFrameIndex(index, width, height) {
    const sx = this._frameTrimX || 0;
    const sy = this._frameTrimY || 0;
    const sw = this._frameTrimWidth  || (this.image.domElement.width - sx);
    const sh = this._frameTrimHeight || (this.image.domElement.height - sy);
  
    const tw  = width || this.width;      // tw
    const th  = height || this.height;    // th
    const row = ~~(sw / tw);
    const col = ~~(sh / th);
    const maxIndex = row * col;
    index = index % maxIndex;
   
    const x = index % row;
    const y = ~~(index / row);
    this.srcRect.x = sx + x * tw;
    this.srcRect.y = sy + y * th;
    this.srcRect.width  = tw;
    this.srcRect.height = th;
  
    this.frameIndex = index;
  
    return this;
  }
}
