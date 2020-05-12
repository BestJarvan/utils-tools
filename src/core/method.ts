/**
 * @ignore
 * 方法类
 */

/**
 * @ignore
 * 节流函数
 */
let execute: boolean = false
export function throttle(fn: Function, delay: number = 300): Function {
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
let timer
export function debounce(fn: Function, delay: number = 300): Function {
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      // @ts-ignore
      fn.apply(this, args)
    }, delay)
  }
}
