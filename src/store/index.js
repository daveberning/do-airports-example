import { createStore } from 'vuex'

import UserModule from './users.js'

export default createStore({
  state: {},
  modules: {
    user: UserModule
  },
  getters: {
    fullName (state) {
      return `${state.firstName} ${state.lastName}`
    }
  }
})