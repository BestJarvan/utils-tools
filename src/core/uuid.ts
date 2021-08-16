/*
 * @Author: 陈祖康
 * @Date: 2021-03-19 13:35:58
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2021-07-01 16:47:22
 * @Description: 随机码
 * @Props:
 * @Emit:
 */

/**
 * @ignore
 * @description 生成唯一码uuid
 */
export function guid(): string {
  // 生成随机码
  function S4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}

/**
 * @ignore
 * @description guid
 */
export function getGuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
