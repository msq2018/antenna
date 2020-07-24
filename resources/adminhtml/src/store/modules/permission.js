import Vue from "vue";
import {asyncRoutes,baseRouters} from '@/router/config'

function filterAsyncRouter (routerMap, roles) {
    const accessedRouters = routerMap.filter(route => {
        return true
    })
    return accessedRouters
}

export default {
    state:{
        routers: baseRouters,
        accessRouters: []
    },
    mutations:{
        setRouters: (state,routers) => {
            state.accessRouters = routers
            state.routers = baseRouters.concat(routers)
        }
    },
    actions:{
        generateRoutes({ commit }){
            return new Promise(resolve => {
                //@todo add routes filter
                commit('setRouters', filterAsyncRouter(asyncRoutes))
                resolve()
            })
        }
    }
}
