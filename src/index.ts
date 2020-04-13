import * as env from './core/env'

import { mixin } from './tools/index'

function initUtils() {
  const instance = Object.create(null)
  const arr = [env]

  mixin(instance, arr)

  return instance
}

const _utils = initUtils()

export default _utils
