import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import modules from "./modules";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: modules,
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    getters:{
        token: state => state.auth.token,
        roles: state => state.auth.roles,
        accessRouters: state=>state.permission.accessRouters
    }
})


