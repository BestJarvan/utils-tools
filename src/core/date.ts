import { formatNumber } from './format'
/**
 *
 * @ignore
 * @return {string} 返回格式化后的时间
 *
 */
export function formatTime(value: number, hasHour?: boolean): string {
  if (value.toString().length === 10) {
    value = value * 1000
  }
  const date = new Date(value)

  let year: number = date.getFullYear()
  let month: number = date.getMonth() + 1
  let day: number = date.getDate()

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
export function now(long: boolean = true): number {
  let date: number
  if (long) {
    date = new Date().getTime()
  } else {
    let str = new Date().getTime().toString().substr(0, 10)
    date = parseInt(str, 0)
  }
  return date
}
