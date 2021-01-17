import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    character: 0,
    screenInfo: {
      id: "",
      width: 640,
      height: 480,
    }
  },
  mutations: {
    incrementScore(state, value) {
      value = value || 1;
      state.score += value;
    },
    setCharacter(state, value) {
      value = value || 0;
      state.character = value;
      console.log(value);
    },
    setScreenInfo(state, param) {
      state.screenInfo.id = param.id;
      state.screenInfo.width = param.width;
      state.screenInfo.height = param.height;
    },
  },
  actions: {
  },
  modules: {
  }
})
