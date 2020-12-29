<template>
  <div id="app">
    <PhinaCanvas />
  </div>
</template>

<script>
import PhinaCanvas from './components/PhinaCanvas.vue'

export default {
  name: 'App',
  components: {
    PhinaCanvas,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
