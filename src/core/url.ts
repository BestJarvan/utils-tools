/*
 * @Author: 陈祖康
 * @Date: 2021-03-16 14:09:21
 * @LastEditors: yuhang.xiao
 * @LastEditTime: 2021-05-20 17:28:42
 * @Description: 针对url的一些方法
 * @Props:
 * @Emit:
 */

/**
 *
 * @ignore
 * @return {Array} 过滤出url的非空值
 *
 */
export function cleanArray(actual: any): Array<any> {
  const newArray: Array<any> = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 *
 * @ignore
 * @return {string} 对象转成url的param
 *
 */
export function param(json: Record<string, any>): string {
  if (JSON.stringify(json) === '{}') return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 *
 * @ignore
 * @return {object}
 *
 */

/**
 *
 * @ignore
 * @return {object} 解析url中的参数
 *
 */
export function param2Obj(search: string): Record<string, any> {
  const str: string = search || window.location.search
  const objURL: object = {}

  str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3): any => {
    // 明明没有返回为啥不能定义成void
    objURL[$1] = $3
  })
  return objURL
}
