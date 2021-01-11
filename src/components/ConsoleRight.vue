<template>
  <div id="wrapper">
    <div>Character</div>
    <div @click="onClick(0)">1</div>
    <div @click="onClick(1)">2</div>
    <div @click="onClick(2)">3</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    onClick(v) {
      this.$store.commit('setCharacter', v);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#console-right {
  display: flex;
}
</style>
