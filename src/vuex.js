import Vue from "vue";
import Vuex from 'vuex'; 

Vue.use(Vuex);

const state = {
    username: null
};

const store = new Vuex.Store({
    state,
    //forgetting the current state value:
    getters: {
        username: (state) => {
            return state.username;
        }
    },
    //changing the value of the state:
    actions: {
        username(context, username){
            context.commit('username', username);
        }
    },
    //changed on the mutations: before actions
    mutations: {
        username(state, username){
            state.username = username;
        }
    }

});

export default store;