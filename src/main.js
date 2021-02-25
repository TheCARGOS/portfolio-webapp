import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'


Vue.use(VueFullPage)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
