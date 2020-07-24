import Vue from 'vue'
import router from '@/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css';
import {ACCESS_TOKEN} from "@/store/constant";
import {asyncRoutes} from "@/router/config";
import store from '@/store';

const whiteList = ['login', 'register']

router.beforeEach((to, from, next)=>{
    Nprogress.start();
    const token = Vue.ls.get(ACCESS_TOKEN);
    if (token){
        if (store.getters.roles.length === 0){
            store.dispatch('getUserInfo').then(()=>{
                //todo get roles
                store.dispatch('generateRoutes').then(()=>{
                    router.addRoutes(store.getters.accessRouters)
                    const redirect = decodeURIComponent(from.query.redirect || to.path)
                    if (to.path === redirect) {
                        // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                        next({ ...to, replace: true })
                    } else {
                        // 跳转到目的路由
                        next({ path: redirect })
                    }
                })
            })

        }else{
            next();
        }
    }else{
        if (whiteList.includes(to.name)) {
            next()
        } else {
            next({ path: '/auth/login', query: { redirect: to.fullPath } })
        }
    }
})

router.afterEach((to, from)=>{
    Nprogress.done();
})
