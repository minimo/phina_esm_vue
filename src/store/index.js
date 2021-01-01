import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
  },
  mutations: {
    incrementScore(state, value) {
      value = value || 1;
      state.score += value;
    }
  },
  actions: {
  },
  modules: {
  }
})
