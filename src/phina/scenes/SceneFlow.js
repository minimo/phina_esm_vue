import { LoadingScene, ManagerScene } from "phina.js/build/phina.esm";
import { AssetCatalog } from "../assets/AssetCatalog";
import { GameTitleScene } from "./GameTitleScene";
import { MainScene } from "./MainScene";

export class SceneFlow extends ManagerScene {
  constructor() {
    super({
      startLabel: "loading",
      scenes: [{
        label: "loading",
        className: LoadingScene,
        nextLabel: "title",
        arguments: {
          assets: AssetCatalog,
        },
      },{
        label: "title",
        className: GameTitleScene,
        nextLabel: "main",
        arguments: {
          title: "PHINAPY BIRD!"
        },
      },{
        label: "main",
        className: MainScene,
        nextLabel: "title",
      }],
    });
  }
}
