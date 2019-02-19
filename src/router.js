import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
    ,
    {
      path: '/2waybind',
      name: '2waybind',
      component: () => import( './views/2waybind.vue')
    },
    {
      path: '/selfplugin',
      name: 'selfplugin',
      component: () => import( './views/selfplugin.vue')
    }
    ,
    {
      path: '/reactivebinddata',
      name: 'reactivebinddata',
      component: () => import( './views/ReactiveBindData.vue')
    },
    {
      path: '/viewstate',
      name: 'viewstate',
      component: () => import( './views/ViewState.vue')
    },
    {
      path: '/eventtest',
      name: 'eventtest',
      component: () => import( './views/EventTest.vue')
    },
    {
      path: '/FormHandler',
      name: 'FormHandler',
      component: () => import( './views/FormHandler.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import( './views/Login.vue')
    },{
      path:'*',
      name: 'NotFound',
      component: () => import('./components/NotFound.vue')
    }
   

  ]
})
