// @ts-nocheck
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { DisplayScene } from 'phina.js/build/phina.esm'

Vue.config.productionTip = false;

DisplayScene.defaults.width = 960;
DisplayScene.defaults.height = 640;

console.log('Version: 0.1.0 (Date 2021-01-06, Commit #9fc57bb)');
if (process.env.NODE_ENV !== 'production') {
  console.log('##### Development mode #####');
}

window.vueApp = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
