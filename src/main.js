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


router.beforeEach((to , from , next) => {
  console.log("to:" + String(to.path.toLocaleLowerCase()).replace('/' ,'') + " from :" + from.path)
  console.log("status:" + store.state.status)
  if(store.state.status === 0 ){
    console.log('if login:' + String(to.path.toLocaleLowerCase()).replace('/' ,'') !== 'login')
    if(String(to.path.toLocaleLowerCase()).replace('/' ,'') !== 'login'){
      console.log('from login :' + String(to.from).toLocaleLowerCase().replace('/' ,'') === 'login')
      if(String(from.path).toLocaleLowerCase().replace('/' ,'') === 'login'){
        return
      }
      console.log(' go to login ')
      router.push('/Login')
 
    }
  }else{
    if(String(to.path.toLocaleLowerCase()).replace('/' ,'') === 'loading'){
      console.log('main loading')
    }
    else{
      let promise = new Promise(
        (resolve , reject) => {
          console.log("main router:" + router.push('/loading'))
          setTimeout(() => resolve('done') , 500)
          console.log('main promise')
      }).then(() => {
       
        console.log('main done!')
        // console.log("router:" + router.push())
        router.push(to.path)
      })
    
    }
  }
  console.log('next')
  next()
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
