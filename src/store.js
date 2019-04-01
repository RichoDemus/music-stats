import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    state: {
        accessToken: null,
        username: null
    },
    mutations: {
        loggedIn(state, accessToken) {
            state.accessToken = accessToken
        },
        SET_USERNAME(state, username) {
            state.username = username;
        }
    },
    actions: {
        loggedIn: (context, accessToken) => {
            console.log("loggedIn Action:", accessToken, context);
            context.commit('loggedIn', accessToken);
            fetch("https://api.spotify.com/v1/me", {
                headers: new Headers({
                    "Authorization": "Bearer " + accessToken
                })
            })
                .then(response => response.json())
                .then(myJson => {
                    console.log(myJson);
                    context.commit("SET_USERNAME", myJson.id)
                });

        }
    },
    getters: {
        loggedIn: state => !!state.accessToken //check if non-null and non-empty
    },
    plugins: [
        vuexLocal.plugin,
        store => {
            store.subscribe((mutation, state) => {
                console.log("State change:", mutation, {accessToken: state.accessToken});
            })
        }]
})
