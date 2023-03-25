import env from '@renderer/utils/env'
import { Axios } from 'axios'

export const http = new Axios({
  baseURL: env.RENDERER_VITE_API_BASE_URL,
  timeout: env.RENDERER_VITE_API_TIMEOUT
})
