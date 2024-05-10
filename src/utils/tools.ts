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
