<template>
  <div id="app">
    <div class="phina-wrap">
      <div class="console-left"/>
      <div class="console-center">
        <PhinaCanvas />
      </div>
      <div class="console-right"/>
    </div>
  </div>
</template>

<script>
import PhinaCanvas from './components/PhinaCanvas.vue'

export default {
  components: {
    PhinaCanvas,
  }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
}
.phina-wrap {
  display: flex;
  width: 100%;
  height: 100%;
}
.console-left {
  width: 10%;
  height: 100%;
}
.console-center {
  width: 80%;
  height: 100%;
}
.console-right {
  width: 10%;
  height: 100%;
}
</style>
