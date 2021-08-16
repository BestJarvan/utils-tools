/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:28:50
 * @LastEditors: 陈祖康
 * @LastEditTime: 2021-03-19 13:48:00
 * @Description:
 */
import * as index from './core/index'
import * as verify from './core/verify'
import * as format from './core/format'
import * as is from './core/is'
import * as date from './core/date'
import * as method from './core/method'
import * as math from './core/math'
import * as url from './core/url'
import * as uuid from './core/uuid'
import { mixin } from './tools/index'
import { Types } from './types'

/**
 * @ignore
 */
function initUtils(): Types {
  const instance: object = Object.create(null)
  const arr: Array<any> = [index, verify, format, is, date, method, math, url, uuid]

  mixin(instance, arr)

  return instance as Types
}

/**
 * @ignore
 */
const _utils = initUtils()

export default _utils
