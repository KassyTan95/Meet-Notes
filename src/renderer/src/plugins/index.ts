import _ from 'lodash'
import { App } from 'vue'
import setupPinia from './pinia'
import setupElementPlus from './elementplus'

/**
 * 自动注册组件
 * @param app
 */
const autoRegisterComponet = (app: App): void => {
  const components: Record<string, any> = import.meta.glob('../components/**/*.vue', { eager: true })
  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift() as string
    app.component(_.camelCase(name), components[key].default)
  })
}

export const setupPlugins = (app: App): void => {
  autoRegisterComponet(app)
  setupPinia(app)
  setupElementPlus(app)
}
