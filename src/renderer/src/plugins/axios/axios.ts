import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ResponeResult } from './ResponeResult'

export default class Axios {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  private interceptors(): void {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  request<T, R = ResponeResult<T>>(config: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return this.instance.request<R>(config)
  }

  /**
   * 请求拦截器
   */
  private interceptorsRequest(): void {
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  /**
   * 响应拦截器
   */
  private interceptorsResponse(): void {
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}
