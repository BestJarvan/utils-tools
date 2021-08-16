/*
 * @Author: Yahui.Jiang
 * @Date: 2021-03-18 10:05:08
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2021-07-27 15:28:03
 * @Description:
 */
import utils from '../../../src/index'

describe('Math test', () => {
  it('plus method must return a number', () => {
    expect(utils.plus(1, 2, 0)).toBe(3)
    expect(utils.plus(1.2334, 1, 0)).toBe(2)
    expect(utils.plus(1.23456, 2, 2)).toBe(3.23)
    expect(utils.plus(14, 20)).toBe(34)
    expect(utils.plus(1e1, 2)).toBe(12)
    expect(utils.plus('a', 2)).toBe(NaN)
  })

  it('subtract method must return a number', () => {
    expect(utils.subtract(1, 2)).toBe(-1)
    expect(utils.subtract(1.322, 1, 0)).toBe(0)
    expect(utils.subtract(2.3314, 1, 3)).toBe(1.331)
    expect(utils.subtract(1e1, 2)).toBe(8)
  })

  it('multiply method must return a number', () => {
    expect(utils.multiply(1, 2)).toBe(2)
    expect(utils.multiply(1.33, 1, 0)).toBe(1)
    expect(utils.multiply(2.4456, 3, 2)).toBe(7.34)
    expect(utils.multiply(1.345, 2.6789, 5)).toBe(3.60312)
    expect(utils.multiply(1e1, 2)).toBe(20)
  })

  it('divide method must return a number', () => {
    expect(utils.divide(2, 1)).toBe(2)
    expect(utils.divide(3.2242, 3, 0)).toBe(1)
    expect(utils.divide(2.3312, 4, 2)).toBe(0.58)
    expect(utils.divide(-2.344, 4, 1)).toBe(-0.6)
    expect(utils.divide(1e1, 2)).toBe(5)
  })

  it('scientificNumber method must return a number or string', () => {
    expect(utils.scientificNumber(1e23)).toBe('100000000000000000000000')
    expect(utils.scientificNumber(1.33e23)).toBe('133000000000000000000000')
    expect(utils.scientificNumber(1e-23)).toBe('0.00000000000000000000001')
    expect(utils.scientificNumber(1.23e-23)).toBe('0.0000000000000000000000123')
    expect(utils.scientificNumber(100)).toBe(100)
    expect(utils.scientificNumber(1e10)).toBe(10000000000)
    expect(utils.scientificNumber(0)).toBe(0)
    expect(utils.scientificNumber('')).toBe('')
  })
  test("用于资金金额的计算（去除'，'）", () => {
    expect(utils.formatToNumber('999,882')).toBe(999882)
    expect(utils.formatToNumber('aa')).toBe(0)
  })
  test('千分符，数字三位一隔开 （1000000 => 1,000,000)', () => {
    expect(utils.dealNumber(10000000)).toBe('10,000,000')
    expect(utils.dealNumber(1000.54)).toBe('1,000.54')
    expect(utils.dealNumber(0)).toBe(0)
  })
})
