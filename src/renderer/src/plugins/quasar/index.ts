import { App } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

export default function setupQuasar(app: App) {
  app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang
  })
}
