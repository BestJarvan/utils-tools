/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:27:51
 * @LastEditors: weimin.wei
 * @LastEditTime: 2021-08-16 10:37:20
 * @Description:
 */
import utils from '../../../src/index'

describe('Method test', () => {
  it('throttle must return a function', done => {
    const mockFn = jest.fn()
    utils.throttle(res => {
      expect(res).toBe(3)
      done()
    }, 100)(3)

    expect(typeof utils.throttle(mockFn)).toBe('function')
  })

  it('mockFn must be called once', () => {
    const mockFn = jest.fn()
    const thr = utils.throttle(mockFn)
    thr()
    expect(thr()).toBe(undefined)

    setTimeout(() => {
      expect(mockFn).toBeCalledTimes(1)
    }, 400)
  })

  it('The throttle functions should not affect each other', done => {
    const mockFnA = jest.fn()
    const mockFnB = jest.fn()
    const thrA = utils.throttle(() => {
      mockFnA()
      done()
    })
    const thrB = utils.throttle(() => {
      mockFnB()
      done()
    })
    thrA()
    thrB()
    setTimeout(() => {
      expect(mockFnA).toBeCalledTimes(1)
      expect(mockFnB).toBeCalledTimes(1)
    }, 400)
  })

  it('debounce must return a function', () => {
    const mockFn = jest.fn()
    expect(typeof utils.debounce(mockFn)).toBe('function')

    const deb = utils.debounce(mockFn)

    deb()
    deb()
    setTimeout(() => {
      expect(mockFn).toBeCalledTimes(1)
    }, 400)
  })

  it('debounce must has a callback', done => {
    utils.debounce(res => {
      expect(res).toBe(2)
      done()
    }, 100)(2)
  })

  it('The debounce functions should not affect each other', done => {
    const mockFnA = jest.fn()
    const mockFnB = jest.fn()
    const thrA = utils.debounce(() => {
      mockFnA()
      done()
    })
    const thrB = utils.debounce(() => {
      mockFnB()
      done()
    })
    thrA()
    thrB()
    setTimeout(() => {
      expect(mockFnA).toBeCalledTimes(1)
      expect(mockFnB).toBeCalledTimes(1)
    }, 400)
  })
})
