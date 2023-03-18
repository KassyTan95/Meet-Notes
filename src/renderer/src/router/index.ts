import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

// 自动加载模块路由
const autoloadModuleRoutes = (): void => {
  const modules: Record<string, any> = import.meta.glob('./module/*.ts', { eager: true })
  Object.keys(modules).forEach((key) => {
    modules[key].default.forEach((r: RouteRecordRaw) => router.addRoute(r))
  })
}

// 设置路由
const setupRoute = async (app: App): Promise<void> => {
  autoloadModuleRoutes()
  app.use(router)
}

export { router, setupRoute }
