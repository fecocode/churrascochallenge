import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    accounts:[]

  },
  mutations: {

    addAccount(state,{email,firstname,lastname, avatar}){
      state.accounts.push({
        email,
        firstname,
        lastname,
        avatar
      });
    } 
  }
})
