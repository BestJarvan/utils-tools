/**
 * @ignore
 * 类型判断方法
 */

/**
 * @ignore
 */
const toString = Object.prototype.toString

/**
 * @ignore
 */
export function isArray(value: any): value is Array<any> {
  return typeof value !== 'undefined' && value instanceof Array
}

/**
 * @ignore
 */
export function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === 'object'
}

/**
 * @ignore
 */
export function isPlainObject(value: any): value is Record<string, any> {
  return toString.call(value) === '[object Object]'
}

/**
 * @ignore
 */
export function isNum(value: any): value is number {
  return typeof value === 'number'
}

/**
 * @ignore
 */
export function isFunc(value: any): value is Function {
  return typeof value === 'function'
}

/**
 * @ignore
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined'
}

/**
 * @ignore
 */
export function isNull(value: any): value is null {
  return value === null
}
