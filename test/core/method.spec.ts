import utils from '../../src/index'

describe('Method test', () => {
  it('throttle must return a function', done => {
    let mockFn = jest.fn()
    utils.throttle(res => {
      expect(res).toBe(3)
      done()
    }, 100)(3)

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

  it('debounce must return a function', () => {
    let mockFn = jest.fn()
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
})
