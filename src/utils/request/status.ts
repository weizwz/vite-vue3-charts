export const ErrMessage = (status: number | string): string => {
  let message: string = ''
  switch (status) {
    case 400:
      message = '请求错误！请您稍后重试'
      break
    case 401:
      message = '未授权！请您重新登录'
      break
    case 403:
      message = '当前账号无访问权限！'
      break
    case 404:
      message = '访问的资源不存在！请您稍后重试'
      break
    case 405:
      message = '请求方式错误！请您稍后重试'
      break
    case 408:
      message = '请求超时！请您稍后重试'
      break
    case 500:
      message = '服务异常！请您稍后重试'
      break
    case 501:
      message = '不支持此请求！请您稍后重试'
      break
    case 502:
      message = '网关错误！请您稍后重试'
      break
    case 503:
      message = '服务不可用！请您稍后重试'
      break
    case 504:
      message = '网关超时！请您稍后重试'
      break
    default:
      message = '请求失败！请您稍后重试'
  }
  return message
}
