import Vuex from 'vuex';

const createStore = () =>
  new Vuex.Store ({
    state: {
      counter: 0,
      user: null
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      SET_USER (state, user) {
        state.user = user
      }
    }
})

export default createStore;