import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import Router from 'vue-router'
import store from './store/index'
import VueResource from 'vue-resource'

import { post, get } from './utils/api.js'

Vue.use(ElementUI)

Vue.prototype.getRequest = get
Vue.prototype.postRequest = post

new Vue({
  el: '#app',
  router,
  store,
  VueResource,
  render: h => h(App)
})
