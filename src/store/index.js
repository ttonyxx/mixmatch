import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      clothing: []
  },
  mutations: {
      setClothing(state, clothing) {
          state.clothing = clothing
      }
  },
  actions: {
  },
  modules: {
  }
})
