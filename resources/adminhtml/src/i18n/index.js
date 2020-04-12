import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLang from 'vuetify/es5/locale/en';
import zhLang from 'vuetify/es5/locale/zh-Hans';


Vue.use(VueI18n)

const messages = {
    en: {
        ...require('./locales/en.json'),
        $vuetify: enLang,
    },
    zhEn:{
        ...require('./locales/zh-en.json'),
        $vuetify: zhLang,
    }
}

export default new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'zhEn',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zhEn',
    messages,
})
