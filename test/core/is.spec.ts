import utils from '../../src/index'

describe('Is test', () => {
  test('isArray must return a boolean', () => {
    expect(utils.isArray([])).toBe(true)
    expect(utils.isArray(1)).toBe(false)
  })

  test('isObject must return a boolean', () => {
    expect(utils.isObject([])).toBe(true)
    expect(utils.isObject({})).toBe(true)
    expect(utils.isObject(1)).toBe(false)
    expect(utils.isObject('1')).toBe(false)
  })

  test('isPlainObject must return a boolean', () => {
    expect(utils.isPlainObject({})).toBe(true)
    expect(utils.isPlainObject([])).toBe(false)
    expect(utils.isPlainObject(null)).toBe(false)
    expect(utils.isPlainObject(1)).toBe(false)
    expect(utils.isPlainObject('1')).toBe(false)
  })

  test('isNum must return a boolean', () => {
    expect(utils.isNum(1)).toBe(true)
    expect(utils.isNum('1')).toBe(false)
  })

  test('isFunc must return a boolean', () => {
    function test() {
      return 1
    }
    expect(utils.isFunc(test)).toBe(true)
    expect(utils.isFunc('1')).toBe(false)
  })

  test('isUndefined must return a boolean', () => {
    expect(utils.isUndefined(undefined)).toBe(true)
    expect(utils.isUndefined('undefined')).toBe(false)
  })

  test('isNull must return a boolean', () => {
    expect(utils.isNull(null)).toBe(true)
    expect(utils.isNull('null')).toBe(false)
  })
})
