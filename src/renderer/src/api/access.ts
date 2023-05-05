import { http } from '@renderer/plugins/axios'
import { LoginForm, LoginResult } from '@renderer/types/login'

/**
 * 登录
 * @param data
 * @returns
 */
export function login(data: LoginForm) {
  return http.request<LoginResult>({
    url: `access/login`,
    method: 'get',
    data
  })
}
