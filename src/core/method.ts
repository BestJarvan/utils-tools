/*
 * @Author: Yahui.Jiang
 * @Date: 2020-04-25 13:27:11
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2020-05-09 15:53:40
 * @Description:
 */
/**
 * @ignore
 * 方法类
 */

/**
 * @ignore
 * 节流函数
 */
export function throttle(fn: Function, delay: number = 300): Function {
  let execute: boolean = false
  return function (...args): void {
    if (execute) return
    execute = true
    setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args)
      execute = false
    }, delay)
  }
}

/**
 * @ignore
 * 防抖函数
 */
export function debounce(fn: Function, delay: number = 300): Function {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args)
    }, delay)
  }
}
