/**
 * @ignore
 * 默认精度
 */
const MAX_PRECISION = 6

/**
 * @ignore
 */
interface FormatObj {
  max: number
  sum: number
  sub: number
}

/**
 * @ignore
 * 将科学技术法格式化为普通数字字符串
 */
function toNonExponential(num: number | string): string {
  num = +num
  try {
    const m: any = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]))
  } catch (e) {
    return '0'
  }
}

/**
 * @ignore
 * 计算两位数应该乘以的数，为加减乘数服务的函数
 */
function formatNumber(num1: number | string, num2: number | string): FormatObj {
  let r1: number
  let r2: number
  try {
    r1 = toNonExponential(num1).toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = toNonExponential(num2).toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  const sum: number = r1 + r2
  const sub: number = r2 - r1
  return { max: Math.pow(10, Math.max(r1, r2)), sum: Math.pow(10, sum), sub: Math.pow(10, sub) }
}

/**
 * @ignore
 * 优化过的toFixed方法
 */
function toFixed(num: number | string, n: number = MAX_PRECISION): number | string {
  const realNum: string = toNonExponential(num)
  const float: string = toNonExponential(num).toString().split('.')[1]
  const len: number = (float && float.length) || 0
  if (n >= len) {
    return +realNum
  } else {
    num = +num
    const adjust: number = num >= 0 ? 0.5 : -0.5
    return parseInt(num * Math.pow(10, n) + adjust + '', 0) / Math.pow(10, n)
  }
}

/**
 * @ignore
 * 加法
 */
export function plus(num1: number | string, num2: number | string, n?: number): number | string {
  num1 = +num1
  num2 = +num2
  const formatNum: number = formatNumber(num1, num2).max
  const result: number = (num1 * formatNum + num2 * formatNum) / formatNum
  return toFixed(result, n)
}

/**
 * @ignore
 * 减法
 */
export function subtract(
  num1: number | string,
  num2: number | string,
  n?: number
): number | string {
  num1 = +num1
  num2 = +num2
  const formatNum: number = formatNumber(num1, num2).max
  const result: number = (num1 * formatNum - num2 * formatNum) / formatNum
  return toFixed(result, n)
}

/**
 * @ignore
 * 乘法
 */
export function multiply(
  num1: number | string,
  num2: number | string,
  n?: number
): number | string {
  const sum: number = formatNumber(num1, num2).sum
  const s1 = Number(toNonExponential(num1).toString().replace('.', ''))
  const s2 = Number(toNonExponential(num2).toString().replace('.', ''))
  const result: number = (s1 * s2) / sum
  return toFixed(result, n)
}

/**
 * @ignore
 * 除法
 */
export function divide(num1: number | string, num2: number | string, n?: number): number | string {
  const sub: number = formatNumber(num1, num2).sub
  const r1 = Number(toNonExponential(num1).toString().replace('.', ''))
  const r2 = Number(toNonExponential(num2).toString().replace('.', ''))
  const result: number = (r1 / r2) * sub
  return toFixed(result, n)
}

/**
 * @ignore
 * 科学记数法正常显示
 */
export function scientificNumber(num: number | string): number | string {
  if (!num) return num
  const str = num.toString()
  const reg = /^(\d+)(\.\d+)?(e)([+]?\d+)$/
  const reg2 = /^(\d+)(\.\d+)?(e)([-]?\d+)$/
  let arr: any
  let len: number
  let zero = ''
  if (reg.test(str)) {
    arr = reg.exec(str)
    // 保留小数位数
    const arr2 = arr[2] ? arr[2].replace('.', '') : ''
    // 此处减去arr2的长度为了兼容有小数情况
    len = Math.abs(arr[4]) - (arr2.length || 0)
    for (let i = 0; i < len; i++) {
      zero += '0'
    }
    return arr[1] + arr2 + zero
  } else if (reg2.test(str)) {
    arr = reg2.exec(str)
    len = Math.abs(arr[4]) - 1
    const arr2 = arr[2] ? arr[2].replace('.', '') : ''
    for (let index = 0; index < len; index++) {
      zero += '0'
    }
    return '0.' + zero + arr[1] + arr2
  } else {
    return num
  }
}

/**
 * @ignore
 * @description: 用于资金金额的计算（去除'，'）
 */
export function formatToNumber(num: number | string): number {
  const v: number | string = Number(String(num).replace(/,/g, ''))
  if (isNaN(v)) {
    return 0
  } else {
    return v
  }
}

/**
 * @ignore
 * @description 千分符，数字三位一隔开 （1000000 => 1,000,000)
 */
export function dealNumber(num: number | string): number | string {
  if (num) {
    const num2 = String(num)
    const left = num2.split('.')[0]
    const right = num2.split('.')[1]
    return left.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (right ? '.' + right : '')
  } else {
    return num
  }
}
