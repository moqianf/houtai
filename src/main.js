import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import './assets/less/index.less'
import store from './store'
import axios from 'axios'
import '@/api/mock.js'

Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.prototype.$axios = axios




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
