/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:28:50
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2021-08-20 16:31:19
 * @Description:
 */
import { formatAddZero } from './format'

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
const formatFlags: object = {
  D: function (dateObj) {
    return dateObj.getDay()
  },
  DD: function (dateObj) {
    return formatAddZero(dateObj.getDay())
  },
  d: function (dateObj) {
    return dateObj.getDate()
  },
  dd: function (dateObj) {
    return formatAddZero(dateObj.getDate())
  },
  M: function (dateObj) {
    return dateObj.getMonth() + 1
  },
  MM: function (dateObj) {
    return formatAddZero(dateObj.getMonth() + 1)
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
    return formatAddZero(dateObj.getHours() % 12 || 12)
  },
  H: function (dateObj) {
    return dateObj.getHours()
  },
  HH: function (dateObj) {
    return formatAddZero(dateObj.getHours())
  },
  m: function (dateObj) {
    return dateObj.getMinutes()
  },
  mm: function (dateObj) {
    return formatAddZero(dateObj.getMinutes())
  },
  s: function (dateObj) {
    return dateObj.getSeconds()
  },
  ss: function (dateObj) {
    return formatAddZero(dateObj.getSeconds())
  },
  a: function (dateObj) {
    return dateObj.getHours() < 12 ? 'am' : 'pm'
  },
  A: function (dateObj) {
    return dateObj.getHours() < 12 ? 'AM' : 'PM'
  },
}

/**
 *
 * @ignore
 * @return {number} 格式化时间 支持自定义分隔符
 *
 */
export function formatTime(value: number, format = 'yyyy-MM-dd HH:mm:ss'): string {
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
      [year, month, day].map(formatAddZero).join('-') +
      ' ' +
      [hour, minute, second].map(formatAddZero).join(':')
    )
  } else {
    return [year, month, day].map(formatAddZero).join('-')
  }
}

/**
 *
 * @ignore
 * @return {number} 返回当前系统时间戳 13位 | 10位
 *
 */
export function now(long = false): number {
  let date: number
  if (long) {
    date = new Date().getTime()
  } else {
    const str = new Date().getTime().toString().substr(0, 10)
    date = parseInt(str, 0)
  }
  return date
}
/**
 * @ignore
 * @description 拷贝日期对象
 *
 */
export function cloneDate(val: Date): Date {
  return new Date(val.valueOf())
}
/**
 * @ignore
 * @description 因为toIOSString默认转为格林尼治时间，所以在转换之前需要额外加上8个小时
 */
export function timeZone(time: Date): Date {
  return new Date(time.getTime() + 28800000)
}

/**
 * @ignore
 * @description 判断日期格式是否正确,有效返回new date()日期格式， 无效返回当前日期
 */
export function formatEffectiveDate(date?: any): Date {
  let d: any = date
  if (!d) {
    return new Date()
  } else if (typeof d === 'object') {
    return d.length ? new Date() : cloneDate(d)
  } else if (typeof d === 'number') {
    if (d.toString().length === 10) {
      d = d * 1000
    }
    return d.toString().length === 13 ? new Date(d) : new Date()
  } else {
    // 判断所传入的日期是否为有效日期，如果不是，则返回当日时间x
    d = new Date(d)
    const isValidDate = d.getTime().toString() !== 'NaN'
    // 所传入的日期为有效日期，且年份不得大于9999
    return isValidDate && d.getYear() < 9999 ? d : new Date()
  }
}
/**
 *
 * @ignore
 * @description 转化时间格式
 */
type dateType = Date | string | number
export function formatDate(d: dateType, type?: string): string {
  d = timeZone(formatEffectiveDate(d))
  // 输出 datetime
  if (type === 'datetime') {
    return d.toISOString().substring(0, 16).replace('T', ' ')
  } else if (type === 'seconds') {
    return d.toISOString().substring(0, 19).replace('T', ' ').substring(11, 19)
  }
  // 输出 date
  return d.toISOString().slice(0, 10)
}

/**
 * @ignore
 * @description 与现在时间做比较
 */
export function formatTimeCompare(time?: number | string): string | void {
  time = Number(time)
  if (!time) return
  // 只需要精确到秒
  const curTime = parseInt(`${new Date().getTime() / 1000}`, 0)

  // 现在时间与传入的时间做比较
  const poor = curTime - time
  // 今日零点的时间戳（取的秒）
  const curDay = parseInt(`${new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000}`, 0)
  if (parseInt(`${poor / 60}`, 0) === 0) {
    // 1 分钟内
    return '刚刚'
  } else if (poor > 0 && parseInt(`${poor / 60}`, 0) < 60) {
    // 1小时内
    return `${parseInt(`${poor / 60}`, 0)}分钟前`
  } else if (poor > 0 && parseInt(`${poor / 3600}`, 0) < 5) {
    // 5小时内
    return `${parseInt(`${poor / 3600}`, 0)}小时前`
  } else if (curDay < time) {
    // 超过5小时但在今日内
    return `今日${formatDate(time, 'datetime').slice(11)}`
    // } else if (parseInt(poor) < (1 * 60 * 60 * 24 * 7)) {
    //   return '一周内'
    // } else if (parseInt(poor) < (2 * 60 * 60 * 24 * 7)) {
    //   return '二周内'
    // } else if (parseInt(poor) < (1 * 30 * 60 * 60 * 24)) {
    //   return '一个月内'
    // } else if (parseInt(poor) < (2 * 30 * 60 * 60 * 24)) {
    //   return '两个月内'
    // } else if (parseInt(poor) < (3 * 30 * 60 * 60 * 24)) {
    //   return '三个月内'
  } else {
    // 2017-03-15 15:34
    return formatDate(time, 'datetime')
  }
}

/**
 * @ignore
 * @description 获取指定日期前后n天的日期,如果没有指定日期，则是当前日期n天的前后
 */
export function getDay(
  addDayCount: number,
  appointedDate: number | string | Date,
  type?: string
): string {
  const paramsDate = formatEffectiveDate(appointedDate)
  paramsDate.setDate(paramsDate.getDate() + addDayCount)
  if (type === 'datetime') {
    return formatDate(paramsDate, 'datetime')
  }
  return formatDate(paramsDate)
}

/**
 * @ignore
 * @description 获取指定日期前后n个月的日期,如果没有指定日期，则是当前日期的前后n个月
 */
export function getMonthDay(
  monthNum: number,
  appointedDate: string | number | Date,
  type?: string
): string {
  let paramsDate: Date = formatEffectiveDate(appointedDate)
  const paramsDay = paramsDate.getDate()
  let paramsMonth: number = paramsDate.getMonth()
  paramsMonth = paramsMonth + monthNum
  if (paramsMonth > 11) {
    paramsDate.setFullYear(paramsDate.getFullYear() + 1)
    paramsDate.setMonth(paramsMonth - 12)
  } else if (paramsMonth < 0) {
    paramsDate.setFullYear(paramsDate.getFullYear() - 1)
    paramsDate.setMonth(paramsMonth + 12)
  } else {
    paramsDate.setMonth(paramsMonth)
  }
  if (paramsDate.getDate() !== paramsDay) {
    paramsDate = new Date(paramsDate.getFullYear(), paramsDate.getMonth(), 0)
  }
  if (type === 'datetime') {
    return formatDate(paramsDate, 'datetime')
  }
  return formatDate(paramsDate)
}
/**
 * @ignore
 * @description 获取指定日期前后n年的日期,如果没有指定日期，则是当前日期n年的前后
 */

export function getYearDay(addYearCount: number, appointedDate: any, type?: string): string {
  const paramsDate: Date = formatEffectiveDate(appointedDate)
  paramsDate.setFullYear(paramsDate.getFullYear() + addYearCount)
  if (type === 'datetime') {
    return formatDate(paramsDate, 'datetime')
  }
  return formatDate(paramsDate)
}

/**
 * @ignore
 * @description 将时间戳转换为日期格式
 */
export function timestampToTime<T>(timestamp: T): object | T {
  const res = /^-?[0-9]+$/
  if (res.test(String(timestamp))) {
    const date: Date = new Date(
      String(timestamp).length === 13 ? Number(timestamp) : Number(timestamp) * 1000
    )
    const year: number = date.getFullYear()
    const month: number | string =
      date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const day: number | string = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const hours: number | string = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes: number | string =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    return {
      year: year,
      month: month,
      day: day,
      hours: hours,
      minutes: minutes,
    }
  } else {
    return timestamp
  }
}
/**
 * @ignore
 * @description: 将时间戳转成指定的格式
 */
export function timestampToTimeString(timestamp: string | number, type: string): string {
  const timeObj: number | string | object = timestampToTime(timestamp)
  const typeMap: object = {
    yyyy: 'year',
    MM: 'month',
    dd: 'day',
    HH: 'hours',
    mm: 'minutes',
  }
  type = type.replace(/(yyyy)|(MM)|(dd)|(HH)|(mm)/g, matchStr => {
    return timeObj[typeMap[matchStr]]
  })
  return type
}

/**
 * @ignore
 * @description 将日期转换为时间戳的格式
 */
export function timeToTimestamp(time: string): string | number {
  if (!isNaN(Date.parse(time))) {
    return Date.parse(time) / 1000
  } else {
    return time
  }
}
