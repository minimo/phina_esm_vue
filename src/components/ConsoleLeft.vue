<template>
  <div id="console-left">
    <div>スコア</div>
    <div>{{$store.state.score}}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      score: 0,
    }
  },
  mounted() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
