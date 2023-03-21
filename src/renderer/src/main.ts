import '@renderer/styles/tailwindcss.css'
import '@renderer/styles/global.scss'

import '@icon-park/vue-next/styles/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugins'
import { router, setupRoute } from './router'

const bootstrap = async (): Promise<void> => {
  const app = createApp(App)
  

  // 加载组件
  setupPlugins(app)
  // 设置路由
  setupRoute(app)
  await router.isReady()
  app.mount('#app')
}
bootstrap()
