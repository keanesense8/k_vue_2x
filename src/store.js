import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import {MUTATION_TYPES} from './mutation_type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: "vuex_state_value",
    count: 0
  },
  mutations: {
    [MUTATION_TYPES.CHANGE_MSG](state, msg){
      state.msg = msg
    },
    [MUTATION_TYPES.INCREMENT_COUNTER](state){
      state.count++
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
      log({commit} , msg){
        console.log('action : ' + msg)
        commit(MUTATION_TYPES.INCREMENT_COUNTER)
      },
      work({commit} ){
        console.log('working' + Math.floor(Math.random() * Math.floor(10)))
      }
  },
  getters
})
