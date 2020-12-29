<template>
  <canvas id="phina-canvas"></canvas>
</template>

<script>
import { phina, CanvasApp } from "phina.js/build/phina.esm";

export default {
  data() {
    return {
    }
  },
  beforeCreate() {
    phina.main(()=> {
      const appOption = {
        width: 960,
        height: 640,
        fps: 60,
        query: "#phina-canvas",
      };
      const app = new CanvasApp(appOption);
      app.run();
    });
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
