import Vue from 'vue'
import Router from 'vue-router'
import {baseRouters} from "./config"

Vue.use(Router);

const options = {
    base: 'admin/',
    mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: baseRouters,
}

export default new Router(options)
