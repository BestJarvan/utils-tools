/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:27:51
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2021-10-25 10:32:56
 * @Description:
 */
import utils from '../../../src/index'

describe('Method test', () => {
  describe('Throttle decorator test', () => {
    let mockT: any
    let mockTFuncA: jest.Mock
    let mockTFuncB: jest.Mock
    beforeEach(() => {
      mockTFuncA = jest.fn()
      mockTFuncB = jest.fn()
      class TestT {
        @utils.throttleWrap()
        fnA() {
          mockTFuncA()
          return 'hello world'
        }
        @utils.throttleWrap(500, {})
        fnB() {
          mockTFuncB()
        }
      }

      mockT = new TestT()
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('throttleWrap must return a function', () => {
      expect(typeof mockT.fnA).toBe('function')
      expect(typeof mockT.fnB).toBe('function')
    })

    it("throttleWrap shouldn't change function", () => {
      const res = mockT.fnA()
      setTimeout(() => {
        expect(res).toBe('hello world')
      }, 500)
    })

    it('the function that throttleWrap returns should be called once in the delay time', () => {
      mockT.fnA()
      expect(mockTFuncA).toBeCalledTimes(1)
      mockT.fnA()
      expect(mockTFuncA).toBeCalledTimes(1)
      let count = 3
      const timer = setInterval(() => {
        mockT.fnA()
        count -= 1
        if (count <= 0 && timer) clearInterval(timer)
      }, 500)
      setTimeout(() => {
        expect(mockTFuncA).toBeCalledTimes(4)
      }, 1500)
    })

    it('the function that throttleWrap returns should not affect each other', () => {
      mockT.fnA()
      mockT.fnB()
      expect(mockTFuncA).toHaveBeenCalledTimes(1)
      expect(mockTFuncB).toHaveBeenCalledTimes(1)
    })
  })

  describe('Throttle function test', () => {
    let mockTFuncA: jest.Mock
    let mockTFuncB: jest.Mock
    let throttleFuncA: Function
    let throttleFuncB: Function

    beforeEach(() => {
      mockTFuncA = jest.fn(() => 'hello world')
      mockTFuncB = jest.fn()
      throttleFuncA = utils.throttle(mockTFuncA, 300, {})
      throttleFuncB = utils.throttle(mockTFuncB)
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('throttle must return a function', () => {
      expect(typeof throttleFuncA).toBe('function')
      expect(typeof throttleFuncB).toBe('function')
    })

    it("throttle shouldn't change function", () => {
      const res = throttleFuncA()
      setTimeout(() => {
        expect(res).toBe('hello world')
      }, 500)
    })

    it('the function that throttle returns should be called once in the delay time', () => {
      throttleFuncA()
      expect(mockTFuncA).toBeCalledTimes(1)
      throttleFuncA()
      expect(mockTFuncA).toBeCalledTimes(1)
      let count = 3
      const timer = setInterval(() => {
        throttleFuncA()
        count -= 1
        if (count <= 0 && timer) clearInterval(timer)
      }, 500)
      setTimeout(() => {
        expect(mockTFuncA).toBeCalledTimes(4)
      }, 1500)
    })

    it('the functions that throttleWrap returns should not affect each other', () => {
      throttleFuncA()
      throttleFuncB()
      expect(mockTFuncA).toHaveBeenCalledTimes(1)
      expect(mockTFuncB).toHaveBeenCalledTimes(1)
    })
  })
  describe('Debounce decorator test', () => {
    let mockD: any
    let mockDFuncA: jest.Mock
    let mockDFuncB: jest.Mock
    beforeEach(() => {
      mockDFuncA = jest.fn()
      mockDFuncB = jest.fn()
      class TestD1 {
        @utils.debounceWrap()
        fnA() {
          mockDFuncA()
          return 'hello world'
        }
        @utils.debounceWrap(500, {})
        fnB() {
          mockDFuncB()
        }
      }
      mockD = new TestD1()
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('debounceWrap must return a function', () => {
      expect(typeof mockD.fnA).toBe('function')
    })

    it("debounceWrap shouldn't change function", () => {
      const res = mockD.fnA()
      setTimeout(() => {
        expect(res).toBe('hello world')
      }, 500)
    })

    it('the function that debounce returns should not be called before the delay time', () => {
      mockD.fnB()
      expect(mockDFuncB).toBeCalledTimes(0)

      let count = 3
      const timer = setInterval(() => {
        mockD.fnB()
        count -= 1
        if (count <= 0 && timer) clearInterval(timer)
      }, 400)
      setTimeout(() => {
        expect(mockDFuncB).toBeCalledTimes(0)
      }, 1200)
      setTimeout(() => {
        expect(mockDFuncB).toBeCalledTimes(1)
      }, 1700)
    })

    it('the functions that debounce returns should not affect each other', () => {
      mockD.fnA()
      mockD.fnB()
      setTimeout(() => {
        expect(mockDFuncA).toHaveBeenCalledTimes(1)
        expect(mockDFuncB).toHaveBeenCalledTimes(1)
      }, 500)
    })
  })

  describe('Debounce function test', () => {
    let mockDFuncA: jest.Mock
    let mockDFuncB: jest.Mock
    let debounceFuncA: Function
    let debounceFuncB: Function

    beforeEach(() => {
      mockDFuncA = jest.fn(() => 'hello world')
      mockDFuncB = jest.fn()
      debounceFuncA = utils.debounce(mockDFuncA, 300, {})
      debounceFuncB = utils.debounce(mockDFuncB)
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('debounce must return a function', () => {
      expect(typeof debounceFuncA).toBe('function')
      expect(typeof debounceFuncB).toBe('function')
    })

    it("debounce shouldn't change function", () => {
      const res = debounceFuncA()
      setTimeout(() => {
        expect(res).toBe('hello world')
      }, 500)
    })

    it('the function that debounce returns should be called once in the delay time', () => {
      debounceFuncA()
      expect(mockDFuncA).toBeCalledTimes(0)

      let count = 3
      const timer = setInterval(() => {
        debounceFuncA()
        count -= 1
        if (count <= 0 && timer) clearInterval(timer)
      }, 400)
      setTimeout(() => {
        expect(mockDFuncA).toBeCalledTimes(0)
      }, 1200)
      setTimeout(() => {
        expect(mockDFuncA).toBeCalledTimes(1)
      }, 1700)
    })

    it('the functions that debounce returns should not affect each other', () => {
      debounceFuncA()
      debounceFuncB()
      setTimeout(() => {
        expect(mockDFuncA).toHaveBeenCalledTimes(1)
        expect(mockDFuncB).toHaveBeenCalledTimes(1)
      }, 500)
    })
  })
})
