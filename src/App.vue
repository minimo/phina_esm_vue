<template>
  <div id="app">
    <div class="phina-wrap">
      <div class="console-left">
        <ConsoleLeft />
      </div>
      <div class="console-center">
        <PhinaCanvas />
      </div>
      <div class="console-right">
        <ConsoleRight />
      </div>
    </div>
  </div>
</template>

<script>
import PhinaCanvas from './components/PhinaCanvas'
import ConsoleLeft from './components/ConsoleLeft'
import ConsoleRight from './components/ConsoleRight'

export default {
  components: {
    PhinaCanvas,
    ConsoleLeft,
    ConsoleRight,
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
  min-width: 100px;
}
.console-center {
  width: 80%;
  height: 100%;
  min-width: 400px;
}
.console-right {
  width: 10%;
  height: 100%;
  min-width: 100px;
}
</style>
