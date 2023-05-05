export interface LoginData {
  tab: 'phone' | 'email'
  type: 'wechat' | 'form'
  isPwd: boolean
  form: LoginForm
}

export interface LoginForm {
  username: string | number
  password: string
}

export interface LoginResult {
  token_type: string
  expires_in: number
  access_token: string
  refresh_token: string
}
