import Cookies from 'js-cookie'

export const TokenKey = 'weiz-token'

type ExpiresData = Date | number
export interface TokenInfo {
  token: string
  expires: ExpiresData
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(data: TokenInfo) {
  const { token, expires } = data
  return expires ? Cookies.set(TokenKey, token, { expires: expires }) : Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
