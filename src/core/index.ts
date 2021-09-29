/*
 * @Author: 崔佳华
 * @Date: 2021-03-16 15:09:35
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2021-09-29 09:33:59
 * @Description:
 * @Props:
 * @Emit:
 */
import { isArray } from './is'
import { System } from '../enum/system'
/**
 * @ignore
 * @description 解析JSON Object，并加入异常处理
 */
export function json(str: string, def?: any): any {
  try {
    return JSON.parse(str)
  } catch (e) {
    return def || []
  }
}

/**
 * @ignore
 * @description 检测是否是钉钉环境
 */
export function isDingTalk(): boolean {
  return /DingTalk/i.test(window.navigator.userAgent)
}

/**
 * @ignore
 * @description 是否为开发环境
 */
export function isDevEnv(): boolean {
  const hostname: string = window.location.hostname
  const isLocalhost: boolean = hostname === 'localhost'
  const isIp: boolean = /^\d+\.\d+\.\d+\.\d+$/.test(hostname)
  return process.env.NODE_ENV === 'development' || isLocalhost || isIp
}

/**
 * @ignore
 * @description 计算字符长度：汉字为1，英文字母为0.5，结果取整
 */
export function getByteLen(val: string | undefined | null): number {
  if (val !== undefined && val !== null) {
    let len = 0
    for (const item of val) {
      if (item.match(/[^\\x00-\\xff]/gi) !== null) {
        len += 1
      } else {
        len += 0.5
      }
    }
    return Math.floor(len)
  } else {
    return 0
  }
}
/**
 * @ignore
 */
const hasOwnProperty = Object.prototype.hasOwnProperty
/**
 * @ignore
 * @description 深拷贝
 */
export function deepClone(source: any, nullVal?: null | undefined): any {
  if (!source || typeof source !== 'object') {
    return source
  }
  const targetObj: object | any[] = source.constructor === Array ? [] : {}
  for (const keys in source) {
    if (hasOwnProperty.call(source, keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = deepClone(source[keys])
      } else {
        // 传null防止undefined被过滤
        if (nullVal === null) {
          targetObj[keys] = source[keys] === undefined ? nullVal : source[keys]
        } else {
          targetObj[keys] = source[keys]
        }
      }
    }
  }
  return targetObj
}

/**
 * @ignore
 * @description json 返回指定列
 */
export function getParamValues(name: number, arr: Array<any[]>): Array<any> {
  return arr.map(item => item[name])
}

/**
 * @ignore
 * @description 1和0互相转换，取反函数
 */
export function reverseNum(num: number | string): number | void {
  const newNum = Number(num)
  if (isNaN(newNum)) {
    return
  } else {
    return Math.abs(newNum - 1)
  }
}
/**
 * @ignore
 * @description 检测对象类型
 */
export function getObjectType(obj: any): string {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

/**
 * @ignore
 * @description 对象数组去重
 */
export function noRepeatArray(repeatArray: Array<any>, attr: string): any[] {
  const result: any[] = []
  const repeatObj: object = {}
  repeatArray.forEach(item => {
    if (!repeatObj[item[attr]]) {
      result.push(item)
      repeatObj[item[attr]] = true
    }
  })
  return result
}

/**
 * @ignore
 * @description 判断当前是否在外链表单页面中
 */
export function isOuterLinkEnv(): boolean {
  const href = window.location.href
  return href.indexOf('/outer-form.html#/') >= 0
}

/**
 *
 * @ignore
 * @description 获取浏览器信息
 */
export function browser(): string {
  // 移动终端浏览器版本信息
  const u = navigator.userAgent
  const ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  const android = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // android终端或者uc浏览器
  const pc = /DingTalk/i.test(u)
  if (ios) {
    return 'ios'
  }
  if (android) {
    return 'Android'
  }
  if (pc) {
    return 'pc'
  }
  return ''
}

/**
 * @ignore
 * @description 是否企微图片
 */
export function isWxImg(img: string): string {
  if (img.indexOf('wework.qpic.cn') > -1) return img.slice(0, -1) + '100'
  if (/rescdn.qqmail.com|wx.qlogo.cn/.test(img)) return img
  return ''
}
/**
 * @ignore
 */
type PrivateDeployInfo = {
  oss: number
  sms: number
}
/**
 * @ignore
 * @description 获取图片地址
 */
export function thumbnail(img: string | string[], size?: number, oss?: number): string {
  let imgUrl: any = isArray(img) && img[0] ? img[0] : img
  // 判断imgURL格式
  if (!imgUrl || typeof imgUrl !== 'string') return ''
  // 企业微信头像的判断
  const wxImg: string = isWxImg(imgUrl)
  if (wxImg) return wxImg
  // 兼容老数据
  imgUrl = imgUrl.replace(/\?\d+$/, '')
  // 处理 OSS 信息，优先从入参处取，如果入参没有从 LS 里读
  const privateDeployObj = window.localStorage.getItem('privateDeployInfo') || '{"oss":1,"sms":1}'
  const privateDeployInfo: PrivateDeployInfo = JSON.parse(privateDeployObj)
  const ossType: number = oss || privateDeployInfo.oss
  // ossType: 1阿里 2minio 3七牛
  switch (ossType) {
    case 2:
    case 4:
      // minio
      return imgUrl
    case 1:
    case 3:
    default:
      // 阿里 oss 和七牛
      // 判断size是否有效
      if (!size || ![40, 50, 80, 100, 150, 200, 250].includes(size)) {
        size = 100
      }
      return `${imgUrl}_${size}x${size}.jpg`
  }
}

/**
 * @ignore
 * @description 移动端判断是否当前多平台环境
 */
export function envInfo(name: string[]): boolean {
  const navigator: string = window.navigator.userAgent
  return name.some(item => navigator.indexOf(System[item]) > -1)
}

/**
 * @ignore
 * @description 判断是否第三方pc端
 */
export function isThirdPC(name: string[], inBrowser: boolean): boolean {
  const navigator: string = window.navigator.userAgent
  // 企微windows容器 不一样
  const winPC = name.indexOf('wx') > -1 ? 'WindowsWechat' : 'Windows'
  const regStr = `${winPC}|Macintosh`
  const reg = new RegExp(regStr)
  const env: string = window.localStorage.getItem('env') || ''
  // 兼容在外部浏览器的第三方判断
  return (envInfo(name) && reg.test(navigator)) || (inBrowser && name.indexOf(env) > -1)
}
