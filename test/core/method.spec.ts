/*
 * @Author: Yahui.Jiang
 * @Date: 2020-05-08 19:33:26
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2020-05-09 15:56:28
 * @Description:
 */
import utils from '../../src/index'

describe('Method test', () => {
  it('method must be a function', done => {
    let mockFn = jest.fn()
    utils.throttle(res => {
      expect(res).toBe(3)
      done()
    }, 1000)(3)

    expect(typeof utils.throttle(mockFn)).toBe('function')
  })

  it('mockFn must be called once', () => {
    let mockFn = jest.fn()
    const thr = utils.throttle(mockFn)
    thr()
    expect(thr()).toBe(undefined)

    setTimeout(() => {
      expect(mockFn).toBeCalledTimes(1)
    }, 400)
  })

  it('', () => {})
})
