import * as env from './core/env'
import * as verify from './core/verify'
import { mixin } from './tools/index'
import { Types } from './types'

export * from './types/index'

/**
 * @ignore
 */
function initUtils(): Types {
  const instance = Object.create(null)
  const arr = [env, verify]

  mixin(instance, arr)

  return instance as Types
}

/**
 * @ignore
 */
const _utils = initUtils()

export default _utils
