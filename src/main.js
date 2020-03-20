import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Router)

console.log('docref1', document.referrer);

const router = new Router({
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
