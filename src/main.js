import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import mathplugin from './plugins/math'

Vue.config.productionTip = false

Vue.use(mathplugin)

Vue.filter('lowercase' , (key) => {return key.toLowerCase()})
Vue.filter('doublestr' , (key) => {return key + ' ' + key})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
