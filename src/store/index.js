import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    character: 0,
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
  },
  actions: {
  },
  modules: {
  }
})
