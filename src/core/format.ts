import { isObject, isUndefined, isNull, isPlainObject } from './is'
/**
 *
 * @ignore
 * @return {string} 不满两位前位补0
 *
 */
export function formatNumber(value: number | string): string {
  let str: string = ''
  if (typeof value === 'number') {
    str = value.toString()
  } else {
    str = value
  }
  return str[1] ? str : `0${str}`
}

/**
 *
 * @ignore
 * @return {string} 手机号脱敏处理
 *
 */
export function dstMobile(mobile: string): string {
  return mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 *
 * @ignore
 * @return {string} 生产随机手机号
 *
 */
export function creatMobile(dst: boolean = false): string {
  let mobile: string = '1'
  const middle: number[] = [3, 5, 6, 7, 8, 9]
  const len = dst ? '****' : '' + random(9) + random(9) + random(9) + random(9)
  mobile =
    mobile +
    middle[random(middle.length)] +
    random(9) +
    len +
    random(9) +
    random(9) +
    random(9) +
    random(9)
  return mobile
}

/**
 *
 * @ignore
 * @return {number} 最大最小值之间取随机数
 *
 */
export function random(max: number, min: number = 0): number {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 *
 * @ignore
 * @return {number} 格式化手机号格式 132 5555 6666
 *
 */
export function formatPhone(phone: string): string {
  if (phone.length !== 11) return ''
  return phone.substring(0, 3) + ' ' + phone.substring(3, 7) + ' ' + phone.substring(7)
}

/**
 *
 * @ignore
 * @return {object} 解析url拼接参数 返回一个params 对象
 *
 */
export function parseParams(value: string): object {
  if (!value || value.indexOf('&') === -1) return {}

  const arr: string[] = value.split('&')

  const params: {
    [prop: string]: any
  } = {}

  let i = 0

  while (i < arr.length) {
    if (arr[i].indexOf('=') !== -1) {
      const cur = arr[i].split('=')
      params[cur[0]] = cur[1]
    }
    i++
  }

  return params
}

/**
 *
 * @ignore
 * @return {object} 解析params对象返回一个url拼接参数
 *
 */
export function formatParams(params: any): string {
  if (!isPlainObject(params)) return ''

  let str: string = ''

  const keys: string[] = Object.keys(params)

  for (let i = 0; i < keys.length; i++) {
    if (isNull(params[keys[i]]) || isUndefined(params[keys[i]])) {
      continue
    }

    if (isObject(params[keys[i]])) {
      str += `&${keys[i]}=${JSON.stringify(params[keys[i]])}`
    } else {
      str += `&${keys[i]}=${params[keys[i]]}`
    }
  }

  return str.length ? '?' + str.substr(1) : str
}
