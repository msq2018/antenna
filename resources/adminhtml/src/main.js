import Vue from 'vue'

import vuetify from "@/plugins/vuetify";
import App from './App'
import router from './router'


new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
})
