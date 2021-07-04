import { createI18n } from 'vue-i18n'

const i18n = createI18n ({
  locale: 'en',
  messages: {
    cn: require ('./cn.js'),
    en: require ('./en.js')
  }
})

export default i18n;