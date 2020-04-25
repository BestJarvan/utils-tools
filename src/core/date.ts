import { formatNumber } from './format'

/**
 *
 * @ignore
 * 定义regexp
 *
 */
const token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g

/**
 *
 * @ignore
 * @return {number} 处理时间格式
 *
 */
const formatFlags = {
  D: function (dateObj) {
    return dateObj.getDay()
  },
  DD: function (dateObj) {
    return formatNumber(dateObj.getDay())
  },
  d: function (dateObj) {
    return dateObj.getDate()
  },
  dd: function (dateObj) {
    return formatNumber(dateObj.getDate())
  },
  M: function (dateObj) {
    return dateObj.getMonth() + 1
  },
  MM: function (dateObj) {
    return formatNumber(dateObj.getMonth() + 1)
  },
  yy: function (dateObj) {
    return String(dateObj.getFullYear()).substr(2)
  },
  yyyy: function (dateObj) {
    return dateObj.getFullYear()
  },
  h: function (dateObj) {
    return dateObj.getHours() % 12 || 12
  },
  hh: function (dateObj) {
    return formatNumber(dateObj.getHours() % 12 || 12)
  },
  H: function (dateObj) {
    return dateObj.getHours()
  },
  HH: function (dateObj) {
    return formatNumber(dateObj.getHours())
  },
  m: function (dateObj) {
    return dateObj.getMinutes()
  },
  mm: function (dateObj) {
    return formatNumber(dateObj.getMinutes())
  },
  s: function (dateObj) {
    return dateObj.getSeconds()
  },
  ss: function (dateObj) {
    return formatNumber(dateObj.getSeconds())
  },
}

/**
 *
 * @ignore
 * @return {number} 格式化时间 支持自定义分隔符
 *
 */
export function formatTime(value: number, format: string = 'yyyy-MM-dd HH:mm:ss'): string {
  if (value.toString().length === 10) {
    value = value * 1000
  }
  const dateObj: Date = new Date(value)
  return format.replace(token, $0 =>
    $0 in formatFlags ? formatFlags[$0](dateObj) : $0.slice(1, $0.length - 1)
  )
}

/**
 *
 * @ignore
 * @return {string} 返回格式化后的时间
 *
 */
export function formatHourTime(value: number, hasHour?: boolean): string {
  if (value.toString().length === 10) {
    value = value * 1000
  }
  const date: Date = new Date(value)

  const year: number = date.getFullYear()
  const month: number = date.getMonth() + 1
  const day: number = date.getDate()

  if (hasHour) {
    const hour: number = date.getHours()
    const minute: number = date.getMinutes()
    const second: number = date.getSeconds()
    return (
      [year, month, day].map(formatNumber).join('-') +
      ' ' +
      [hour, minute, second].map(formatNumber).join(':')
    )
  } else {
    return [year, month, day].map(formatNumber).join('-')
  }
}

/**
 *
 * @ignore
 * @return {number} 返回当前系统时间戳 13位 | 10位
 *
 */
export function now(long: boolean = false): number {
  let date: number
  if (long) {
    date = new Date().getTime()
  } else {
    let str = new Date().getTime().toString().substr(0, 10)
    date = parseInt(str, 0)
  }
  return date
}
