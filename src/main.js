import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VModal from 'vue-js-modal'
import Dropdown from 'hsy-vue-dropdown'
var VueD3 = require('vue-d3')
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";
Vue.use(VModal)
Vue.use(Dropdown)
Vue.use(VueD3)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
