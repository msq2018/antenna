import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from "@/plugins/vuetify";
import i18n from '@/i18n'
import '@/permission'
import Storage from 'vue-ls'

Vue.use(Storage,{
    namespace: 'ante__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local', // storage name session, local, memory
})

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')
