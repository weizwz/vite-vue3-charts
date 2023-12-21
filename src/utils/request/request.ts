/**
 * 封装axios
 * axios 实例的类型为 AxiosInstance，请求需要传入的参数类型为 AxiosRequestConfig，响应的数据类型为 AxiosResponse，InternalAxiosRequestConfig 继承于 AxiosRequestConfig
 */
import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { ErrMessage } from './status'

// 自定义请求返回数据的类型
interface Data<T> {
  data: T
  code: string
  success: boolean
}

// 扩展 InternalAxiosRequestConfig，让每个请求都可以控制是否要loading
interface RequestInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  showLoading?: boolean
}

// 拦截器
interface InterceptorHooks {
  requestInterceptor?: (config: RequestInternalAxiosRequestConfig) => RequestInternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
// 扩展 AxiosRequestConfig，showLoading 给实例默认增加loading，interceptorHooks 拦截
interface RequestConfig extends AxiosRequestConfig {
  showLoading?: boolean
  interceptorHooks?: InterceptorHooks
}

class Request {
  config: RequestConfig
  instance: AxiosInstance
  loading?: boolean // 用loading指代加载动画状态

  constructor(options: RequestConfig) {
    this.config = options
    this.instance = axios.create(options)
    this.setupInterceptor()
  }

  // 类型参数的作用，T决定AxiosResponse实例中data的类型
  request<T = any>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, Data<T>>(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  // 封装常用方法
  get<T = any>(url: string, params?: object, _object = {}): Promise<T> {
    return this.request({ url, params, ..._object, method: 'GET' })
  }

  post<T = any>(url: string, params?: object, _object = {}): Promise<T> {
    return this.request({ url, params, ..._object, method: 'POST' })
  }

  delete<T = any>(url: string, params?: object, _object = {}): Promise<T> {
    return this.request({ url, params, ..._object, method: 'DELETE' })
  }

  patch<T = any>(url: string, params?: object, _object = {}): Promise<T> {
    return this.request({ url, params, ..._object, method: 'PATCH' })
  }

  put<T = any>(url: string, params?: object, _object = {}): Promise<T> {
    return this.request({ url, params, ..._object, method: 'PUT' })
  }

  // 自定义拦截器 https://axios-http.com/zh/docs/interceptors
  setupInterceptor(): void {
    /**
     * 通用拦截
     */
    this.instance.interceptors.request.use((config: RequestInternalAxiosRequestConfig) => {
      if (config.showLoading) {
        // 加载loading动画
        this.loading = true
      }
      return config
    })
    // 响应后关闭loading
    this.instance.interceptors.response.use(
      (res) => {
        if (this.loading) this.loading = false
        return res
      },
      (err) => {
        const { response, message } = err
        if (this.loading) this.loading = false
        // 根据不同状态码，返回不同信息
        const messageStr = response ? ErrMessage(response.status) : message || '请求失败，请重试'
        window.alert(messageStr)
        return Promise.reject(err)
      }
    )
    /**
     * 使用实例里的拦截，两个拦截都会生效，返回值以后一个执行的为准
     */
    // 请求拦截
    this.instance.interceptors.request.use(
      this.config?.interceptorHooks?.requestInterceptor,
      this.config?.interceptorHooks?.requestInterceptorCatch
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      this.config?.interceptorHooks?.responseInterceptor,
      this.config?.interceptorHooks?.responseInterceptorCatch
    )
  }
}

export default Request
