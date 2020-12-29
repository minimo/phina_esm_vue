import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

console.log('Version: 0.0.1 (Date 2020-12-25, Commit #3392a31)');
if (process.env.NODE_ENV !== 'production') {
  console.log('##### Development mode #####');
}

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
