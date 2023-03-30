import _ from 'lodash'
import { App } from 'vue'
import setupPinia from './pinia'
import setupIconPark from './iconpark'
import setupQuasar from './quasar'

/**
 * 自动注册组件
 * @param app
 */
const autoRegisterComponet = (app: App): void => {
  const components: Record<string, any> = import.meta.glob('../components/**/*.vue', { eager: true })
  Object.keys(components).forEach((key) => {
    const nameArr = key.split('/')
    let name = nameArr.pop()?.split('.').shift() as string
    if (name === 'index') {
      name = nameArr.pop()!
    }
    app.component(_.camelCase(name), components[key].default)
  })
}

export const setupPlugins = (app: App): void => {
  autoRegisterComponet(app)
  setupPinia(app)
  setupIconPark(app)
  setupQuasar(app)
}
