interface loginData {
  tab: 'phone' | 'email'
  isPwd: boolean
  form: loginForm
}

interface loginForm {
  username: string | number
  password: string
}

export type { loginData, loginForm }
