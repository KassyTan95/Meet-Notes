import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: '/main',
    component: () => import('@renderer/views/layout/main.vue')
  }
] as RouteRecordRaw[]
