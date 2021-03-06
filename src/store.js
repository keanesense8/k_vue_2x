import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import {MUTATION_TYPES} from './mutation_type'
import api from './api'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 0,
    msg: "vuex_state_value",
    count: 0,
    shop_list: []
  },
  mutations: {
    [MUTATION_TYPES.CHANGE_MSG](state, msg){
      state.msg = msg
    },
    [MUTATION_TYPES.INCREMENT_COUNTER](state){
      state.count++
    },
    [MUTATION_TYPES.POPULATE_SHOPPING_LISTS](state , list){
      state.shop_list = list
    },
    [MUTATION_TYPES.USER_LOGIN](state){
      state.status = 1
    },
    [MUTATION_TYPES.USER_LOGOUT](state){
      state.status = 0
    }
  },
  /**
   * use this.$store.dipatch('log') to call
   * u can write the action methods in action.js then import is here
   * action.js
   * export default {
      changeMessage ({commit} , msg) {
                                    
      },
      incrementCounter ({commit} ) {
                                      
      } }
        */
  actions: {
      login({commit , state} , username){
        console.log("login:" + username)
        /**
         * do some real login here , use the api
         */
        commit(MUTATION_TYPES.USER_LOGIN)
        // let promise = new Promise(
        //   (resolve , reject) => {
        //     console.log("router:" + router.push('/loading'))
        //     setTimeout(() => resolve('done') , 3000)
        //     console.log('promise')
        // }).then(() => {
         
        //   console.log('done!')
        //   console.log("router:" + router.push('/'))
        // })
        // console.log("router:" + router.push('/'))
        router.push('/')
        
      },
      logout({commit} ){
        console.log("logout")
        commit(MUTATION_TYPES.USER_LOGOUT)
      },
      logined({state}){
        console.log("logined:" + (state.status === 1))
        return state.status === 1
      },
      log({commit} , msg){
        console.log('action : ' + msg)
        commit(MUTATION_TYPES.INCREMENT_COUNTER)
      },
      work({commit , state} ){
        console.log("action state:" + state.shop_list[0].title)
        console.log('working' + Math.floor(Math.random() * Math.floor(10)))
      },
      /**
       * save the api data to store.state
       */
      populateList: ({commit}) => {
          api.fetchShoppingLists().then(
            res => {commit(MUTATION_TYPES.POPULATE_SHOPPING_LISTS , res.data)})
      },
      updateList: ( {commit} ,data ) => {
        console.log('action : ' + data.id)
        api.updateShoppingList(data).then(
          res => console.log('update api : ' + res.body)
        )
      },
      showstate: ( {commit , state} ) => {
        console.log('action state : ' + state.msg)
        
      }

  },
  getters
})
