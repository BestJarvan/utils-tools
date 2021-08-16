/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:28:50
 * @LastEditors: weimin.wei
 * @LastEditTime: 2021-08-16 10:39:48
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
export function throttle(fn: Function, delay = 300): Function {
  let execute = false
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
export function debounce(fn: Function, delay = 300): Function {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      // @ts-ignore
      fn.apply(this, args)
    }, delay)
  }
}
