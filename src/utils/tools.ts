import { Point } from '#/echart'

/**
 * 判断点c是否在ab组成的线段上
 * @param {x,y} a 点
 * @param {x,y} b 点
 * @param {x,y} c 点
 * @returns boolean
 */
export const isPointOnLineSegment = (a: Point, b: Point, c: Point) => {
  // 计算向量ab和ac的叉积
  const crossProduct = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
  // 如果不等于0，说明不共线，直接返回false
  if (crossProduct !== 0) {
    return false
  }
  // 否则，检查c点是否在ab线段的范围内
  return (
    Math.min(a.x, b.x) <= c.x && c.x <= Math.max(a.x, b.x) && Math.min(a.y, b.y) <= c.y && c.y <= Math.max(a.y, b.y)
  )
}

/**
 * 数组转换为点对象
 * @param arr 数组，包含两个元素
 * @returns 对象 {x:x, y:y}
 */
export const valueToPoint = (arr: number[]) => {
  return {
    x: arr[0],
    y: arr[1]
  }
}

/**
 * 获取路径方向
 * @param start [x,y]
 * @param end  [x,y]
 * @return true 顺方向 false 逆方向
 */
export const lineDirection = (start: number[], end: number[]) => {
  const x1 = start[0],
    y1 = start[1],
    x2 = end[0],
    y2 = end[1]
  console.log(x1, y1, x2, y2)
  if (
    (x2 === 400 && y2 === 10) || // 终点位置在起始点
    (x1 === 200 && x2 === 400) || // 从原料厂到初始点
    (x1 >= 1000 && y1 === 300 && x2 <= 1000) || // 从组装间之后的位置到组装件之前的位置
    (x1 < 200 && y2 < 400 && x2 <= 200 && y2 <= 400) // 汽车在加油站左侧，目的地在加油站之前的位置
  ) {
    return false
  } else if (
    (x1 === 400 && y1 === 10) || // 起始点
    (x1 === 1000 && y1 === 400 && y2 === 300) || // 从组装间上一个位置到组装间之后位置
    (x1 === 200 && y1 === 400 && x2 < 200) || // 加油站到加油站左侧
    (x1 === 100 && y1 === 400 && x2 === 0) // 维修站上一站到维修站
  ) {
    return true
  } else if (x1 < x2 || y1 < y2) {
    return true
  } else {
    return false
  }
}
