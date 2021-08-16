/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:28:50
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2020-12-17 16:12:43
 * @Description:
 */
/**
 *
 * @ignore
 * @return {boolean} 判断是否是合法链接
 *
 */
export function verifyHttp(value: string): boolean {
  return /^http[s]?:\/\/.*/.test(value.trim())
}

/**
 *
 * @ignore
 * @return {boolean} 验证合法手机号
 *
 */
export function verifyMobile(mobile: string): boolean {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(mobile.trim())
}

/**
 *
 * @ignore
 * @return {boolean} 判断验证码是否6位
 *
 */
export function verifyCode(code: string): boolean {
  const reg = /^\d{6}$/
  return reg.test(code)
}

/**
 *
 * @ignore
 * @return {boolean} 验证是否是合法邮箱格式
 *
 */
export function verifyEmail(email: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.trim())
}
