import * as env from './core/env'
import * as verify from './core/verify'
import * as format from './core/format'
import * as is from './core/is'
import * as date from './core/date'
import { mixin } from './tools/index'
import { Types } from './types'

export * from './types/index'

/**
 * @ignore
 */
function initUtils(): Types {
  const instance = Object.create(null)
  const arr = [env, verify, format, is, date]

  mixin(instance, arr)

  return instance as Types
}

/**
 * @ignore
 */
const _utils = initUtils()

export default _utils
