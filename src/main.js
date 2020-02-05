import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VModal from 'vue-js-modal'

import Dropdown from 'hsy-vue-dropdown'
Vue.use(VModal)
Vue.use(Dropdown)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
