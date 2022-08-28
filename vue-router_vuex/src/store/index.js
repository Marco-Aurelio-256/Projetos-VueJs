import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: 'Lynn Domar',
      email: 'marco@gmail.com',
      password: '12345'
    },

    products: [
      {
        id: 1,
        name: 'Produto 1',
        price: 100
      },
      {
        id: 2,
        name: 'Produto 2',
        price: 200
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 300
      }
    ],

    cart: []
  },
  getters: {
    getTotal(state) {
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    },

    addProduct(state, data) {
      state.cart.push(data)
    },

    removeProduct(state, id) {
      const idx = state.cart.findIndex(o => o.id === id)
      state.cart.splice(idx, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
