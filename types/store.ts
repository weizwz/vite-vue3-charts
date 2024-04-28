import { pathVirtualNodeData } from './echart'

export interface UserState {
  token: string
  userInfo: { name?: string; phone?: string }
}

export interface CarState {
  position: [number, number]
  to: pathVirtualNodeData
}
