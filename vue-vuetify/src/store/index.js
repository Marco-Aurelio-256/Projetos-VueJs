import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      email: '',
      password: ''
    },
    userValid: false
  },
  getters: {
  },
  mutations: {
    storeUser(state, data){
      state.user = data
    }
  },
  actions: {
    validateUser(context, data) {
      if(data.email == 'asd@asd.com' && data.password == 'asd'){
        context.state.userValid = true 
      } else {
        context.state.userValid = false
      }
    }
  },
  modules: {
  }
})
