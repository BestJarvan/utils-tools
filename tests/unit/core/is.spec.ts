import utils from '../../../src/index'

describe('Is test', () => {
  test('isArray must return a boolean', () => {
    expect(utils.isArray([])).toBeTruthy()
    expect(utils.isArray(1)).toBeFalsy()
  })

  test('isObject must return a boolean', () => {
    expect(utils.isObject([])).toBeTruthy()
    expect(utils.isObject({})).toBeTruthy()
    expect(utils.isObject(1)).toBeFalsy()
    expect(utils.isObject('1')).toBeFalsy()
  })

  test('isPlainObject must return a boolean', () => {
    expect(utils.isPlainObject({})).toBeTruthy()
    expect(utils.isPlainObject([])).toBeFalsy()
    expect(utils.isPlainObject(null)).toBeFalsy()
    expect(utils.isPlainObject(1)).toBeFalsy()
    expect(utils.isPlainObject('1')).toBeFalsy()
  })

  test('isNum must return a boolean', () => {
    expect(utils.isNum(1)).toBeTruthy()
    expect(utils.isNum('1')).toBeFalsy()
  })

  test('isFunc must return a boolean', () => {
    function test() {
      return 1
    }
    expect(utils.isFunc(test)).toBeTruthy()
    expect(utils.isFunc('1')).toBeFalsy()
  })

  test('isUndefined must return a boolean', () => {
    expect(utils.isUndefined(undefined)).toBeTruthy()
    expect(utils.isUndefined('undefined')).toBeFalsy()
  })

  test('isNull must return a boolean', () => {
    expect(utils.isNull(null)).toBeTruthy()
    expect(utils.isNull('null')).toBeFalsy()
  })
})
