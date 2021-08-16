/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:28:50
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2020-12-17 15:59:57
 * @Description:
 */
/**
 * @ignore
 */
export function mixin<T, U>(to: T, from: Array<U>): T {
  from.forEach(obj => {
    Object.getOwnPropertyNames(obj).forEach(key => {
      to[key] = obj[key]
    })
  })
  return to
}
