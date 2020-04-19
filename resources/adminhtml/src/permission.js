import Vue from 'vue'
import router from './router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css';

const whiteList = ['login', 'register']

router.beforeEach((to, from, next)=>{
    Nprogress.start();
    const token = "";
    console.log(to)
    if (whiteList.includes(to.name)) {
        next()
    } else {
        next({ path: '/auth/login', query: { redirect: to.fullPath } })
    }

})

router.afterEach((to, from)=>{
    Nprogress.done();
})
