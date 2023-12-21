import { defRequest } from '../utils/request'

export const loginApi = (params: any) => {
  // 设置 showLoading，timeout 会覆盖index.ts里的默认值
  return defRequest.post<any>('/login', params, { showLoading: false, timeout: 1000 })
}
