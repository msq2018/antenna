import Vue from 'vue'
import Router from 'vue-router'
import {baseRouters} from "./config"

Vue.use(Router)

const createRouter = () => new Router({
    base: 'admin/',
    mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: baseRouters,
})

const router = createRouter()


export default router
