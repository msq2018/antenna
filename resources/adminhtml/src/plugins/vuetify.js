import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { mdiSvg } from '@mdi/js'
import {ICONS_SVG} from "./icons/mdiSvg";

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdiSvg',
        values: ICONS_SVG
    }
}

export default new Vuetify(opts)
