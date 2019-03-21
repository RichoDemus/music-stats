import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        clicks: 0,
        accessToken: null
    },
    mutations: {
        increment(state) {
            state.clicks++
        },
        login(state, accessToken) {
            state.accessToken = accessToken
        }
    },
    actions: {
        // increment: ({commit}) => commit('increment')
    },
    getters: {
      loggedIn: state => !!state.accessToken //check if non-null and non-empty
    },
    plugins: [store => {
        store.subscribe((mutation, state) => {
            console.log("State change:", mutation, {accessToken: state.accessToken});
        })
    }]
})
