export interface pathVirtualNodeData {
  index: number
  nodeName: string
  value: number[]
  from?: number
  to?: number[]
  symbol?: string
  svgPath?: string
  symbolSize?: number
  symbolOffset?: number[]
  itemStyle?: {
    color: string
  }
  label?: {
    show?: boolean
    position?: string
  }
  rippleEffect?: {
    scale: number
    number: number
  }
}

export interface pathVirtualLineData {
  coords: number[number[]]
  from: string
  formIdx: number
  to: string
  toIdx: number
  attr?: string
}

export interface Point {
  x: number
  y: number
}
