export interface ResponeResult<T> {
  code: number
  msg: string
  result: T
  timestamp: number
}
