<template>
  <div id="app">
    <PhinaCanvas />
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
#app {
  width: 100%;
  height: 100%;
}
</style>
