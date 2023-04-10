import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/login',
    name: '/login',
    component: () => import('@renderer/views/login.vue')
  }
] as RouteRecordRaw[]
