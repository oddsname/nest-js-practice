import Vue from 'vue'
import Vuex from 'vuex'
import {authModule} from "@/store/auth";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        authModule
    },
    state: {},
    getters: {},
    mutations: {},
})

export {
    store
}
