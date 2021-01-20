// @ts-nocheck
import { CanvasApp } from "phina.js/build/phina.esm"

export class MainApp extends CanvasApp {

  constructor(options) {
    super(options);
    if (options.parent) {
      this.parentDomElement = document.getElementById(options.parent);
      console.log("parentElement", this.parentDomElement);
      this.fitScreen();
    }
    window.vue.$store.commit('setScreenInfo', {
      id: this.parentDomElement.id,
      width: options.width,
      height: options.height,
    });
  }

  fitScreen(isEver) {
    isEver = isEver === undefined ? true : isEver;

    const _fitFunc = function() {
      const e = this.domElement;
      const s = e.style;
      
      s.position = "absolute";
      s.margin = "auto";
      s.left = "0px";
      s.top  = "0px";
      s.bottom = "0px";
      s.right = "0px";

      const parent = this.parentDomElement || window;
      const rateWidth = e.width / (parent.innerWidth || parent.clientWidth);
      const rateHeight= e.height / (parent.innerHeight || parent.clientHeight);
      const rate = e.height / e.width;
      const divWidth = parent.clientWidth;
      const divHeight = parent.clientHeight;
      
      if (rateWidth > rateHeight) {
        s.width  = Math.floor(divWidth) + "px";
        s.height = Math.floor(divWidth * rate) + "px";
      }
      else {
        s.width  = Math.floor(divHeight / rate)+"px";
        s.height = Math.floor(divHeight) + "px";
      }
    }.bind(this);
    
    // 一度実行しておく
    _fitFunc();

    // リサイズ時のリスナとして登録しておく
    if (isEver) {
      parent.addEventListener("resize", _fitFunc, false);
    }
  }
}
