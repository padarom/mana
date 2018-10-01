import Vue from 'vue'
import Vuex from 'vuex'
import axios from '~/plugins/axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    authUser: null
  },

  mutations: {
    SET_USER: (state, user) => {
      state.authUser = user
    }
  },

  actions: {
    nuxtServerInit ({ commit }, { req }) {
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    },

    login ({ commit }, { username, password }) {
      return axios.post('/api/login', {
        username,
        password
      }).then((res) => {
        if (res.status === 401) {
          throw new Error('Bad Credentials')
        } else {
          return res.data
        }
      }).then((authUser) => {
        commit('SET_USER', authUser)
      })
    },

    logout ({ commit }) {
      return axios.post('/api/logout').then(() => {
        commit('SET_USER', null)
      })
    }
  }
})

export default store
