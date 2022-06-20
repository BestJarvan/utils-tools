import { _debounce, _throttle } from './lodash-tool'

/**
 * @ignore
 * 方法类
 */

/**
 * @ignore
 * 防抖函数
 * 默认调用在防抖开始后
 */
export function debounce(fn: any, delay = 500, option = {}) {
  return _debounce(fn, delay, option)
}

/**
 * @ignore
 * 防抖装饰器
 * 默认调用在防抖开始后
 */
export function debounceWrap(delay = 500, option = {}) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = _debounce(descriptor.value, delay, option)
    return descriptor
  }
}

/**
 * @ignore
 * 节流函数
 * 默认调用在节流开始前
 */
export function throttle(fn: any, delay = 500, option = {}) {
  return _throttle(fn, delay, option)
}

/**
 * @ignore
 * 节流装饰器
 * 默认调用在节流开始前
 */
export function throttleWrap(delay = 500, option = {}) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = _throttle(descriptor.value, delay, option)
    return descriptor
  }
}
