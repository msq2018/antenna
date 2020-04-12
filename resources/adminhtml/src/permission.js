import Vue from 'vue'
import router from './router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next)=>{
    Nprogress.start();
    next()
})

router.afterEach((to, from)=>{
    Nprogress.done();
})
