import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        admin:{}

    },
    mutations: { //sync
        me(state,admin){
            state.admin=admin;
        },



    },
    actions: { //async

    },
    getters:{

    },
    modules: {
    }
})

