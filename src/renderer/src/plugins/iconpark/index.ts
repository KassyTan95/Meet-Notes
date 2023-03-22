import * as icons from '@icon-park/vue-next'
import '@icon-park/vue-next/styles/index.css'
import { App } from 'vue'

export default function setupIconPark(app: App): void {
  for (const icon in icons) {
    console.log('icon', icon)
    app.component(icon, icons[icon])
  }
}
