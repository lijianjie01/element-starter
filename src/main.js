import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import Router from 'vue-router'
import store from './store/index'
import VueResource from 'vue-resource'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  VueResource,
  render: h => h(App)
})
