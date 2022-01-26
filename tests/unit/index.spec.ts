/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:27:51
 * @LastEditors: zihao.chen
 * @LastEditTime: 2021-09-10 15:05:56
 * @Description:
 */
import utils from '../../src/index'

// 判断Utils是否挂载对应的方法
describe('Utils test', () => {
  // format模块
  describe('Format test', () => {
    test('Utils must have a dstMobile function', () => {
      expect(typeof utils.dstMobile).toBe('function')
    })

    test('Utils must have a creatMobile function', () => {
      expect(typeof utils.creatMobile).toBe('function')
    })

    test('Utils must have a random function', () => {
      expect(typeof utils.random).toBe('function')
    })

    test('Utils must have a formatPhone function', () => {
      expect(typeof utils.formatPhone).toBe('function')
    })

    test('Utils must have a parseParams function', () => {
      expect(typeof utils.parseParams).toBe('function')
    })

    test('Utils must have a formatParams function', () => {
      expect(typeof utils.formatParams).toBe('function')
    })

    test('Utils must have a hexToRgba function', () => {
      expect(typeof utils.hexToRgba).toBe('function')
    })
  })

  // is模块
  describe('Is test', () => {
    test('Utils must have a isArray function', () => {
      expect(typeof utils.isArray).toBe('function')
    })

    test('Utils must have a isObject function', () => {
      expect(typeof utils.isObject).toBe('function')
    })

    test('Utils must have a isPlainObject function', () => {
      expect(typeof utils.isPlainObject).toBe('function')
    })

    test('Utils must have a isNum function', () => {
      expect(typeof utils.isNum).toBe('function')
    })

    test('Utils must have a isFunc function', () => {
      expect(typeof utils.isFunc).toBe('function')
    })

    test('Utils must have a isUndefined function', () => {
      expect(typeof utils.isUndefined).toBe('function')
    })

    test('Utils must have a isNull function', () => {
      expect(typeof utils.isNull).toBe('function')
    })
  })

  // verify模块
  describe('Verify test', () => {
    test('Utils must have a verifyHttp function', () => {
      expect(typeof utils.verifyHttp).toBe('function')
    })

    test('Utils must have a verifyMobile function', () => {
      expect(typeof utils.verifyMobile).toBe('function')
    })

    test('Utils must have a verifyCode function', () => {
      expect(typeof utils.verifyCode).toBe('function')
    })

    test('Utils must have a verifyEmail function', () => {
      expect(typeof utils.verifyEmail).toBe('function')
    })
  })

  // date模块
  describe('Date test', () => {
    test('Utils must have a formatTime function', () => {
      expect(typeof utils.formatTime).toBe('function')
    })

    test('Utils must have a formatHourTime function', () => {
      expect(typeof utils.formatHourTime).toBe('function')
    })

    test('Utils must have a now function', () => {
      expect(typeof utils.now).toBe('function')
    })
  })

  // method模块
  describe('Method test', () => {
    test('Utils must have a throttle function', () => {
      expect(typeof utils.throttle).toBe('function')
    })

    test('Utils must have a debounce function', () => {
      expect(typeof utils.debounce).toBe('function')
    })
  })

  // math模块
  describe('Math test', () => {
    test('Utils must have a plus function', () => {
      expect(typeof utils.plus).toBe('function')
    })

    test('Utils must have a subtract function', () => {
      expect(typeof utils.subtract).toBe('function')
    })

    test('Utils must have a multiply function', () => {
      expect(typeof utils.multiply).toBe('function')
    })

    test('Utils must have a divide function', () => {
      expect(typeof utils.divide).toBe('function')
    })

    test('Utils must have a scientificNumber function', () => {
      expect(typeof utils.scientificNumber).toBe('function')
    })

    test('Utils must have a dealNumber function', () => {
      expect(typeof utils.dealNumber).toBe('function')
    })
  })

  // url模块
  describe('Url test', () => {
    test('Utils must have a cleanArray function', () => {
      expect(typeof utils.cleanArray).toBe('function')
    })

    test('Utils must have a param function', () => {
      expect(typeof utils.param).toBe('function')
    })

    test('Utils must have a param2Obj function', () => {
      expect(typeof utils.param2Obj).toBe('function')
    })
  })

  // uuid模块
  describe('Uuid test', () => {
    test('Utils must have a guid function', () => {
      expect(typeof utils.guid).toBe('function')
    })

    test('Utils must have a getGuid function', () => {
      expect(typeof utils.getGuid).toBe('function')
    })
  })

  // index模块
  describe('index test', () => {
    test('Utils must hava json function', () => {
      expect(typeof utils.json).toBe('function')
    })

    test('Utils must hava isDingTalk function', () => {
      expect(typeof utils.isDingTalk).toBe('function')
    })

    test('Utils must hava isDevEnv function', () => {
      expect(typeof utils.isDevEnv).toBe('function')
    })

    test('Utils must hava getByteLen function', () => {
      expect(typeof utils.getByteLen).toBe('function')
    })

    test('Utils must hava deepClone function', () => {
      expect(typeof utils.deepClone).toBe('function')
    })

    test('Utils must hava getParamValues function', () => {
      expect(typeof utils.getParamValues).toBe('function')
    })

    test('Utils must hava reverseNum function', () => {
      expect(typeof utils.reverseNum).toBe('function')
    })

    test('Utils must hava getObjectType function', () => {
      expect(typeof utils.getObjectType).toBe('function')
    })

    test('Utils must hava noRepeatArray function', () => {
      expect(typeof utils.noRepeatArray).toBe('function')
    })

    test('Utils must hava isOuterLinkEnv function', () => {
      expect(typeof utils.isOuterLinkEnv).toBe('function')
    })

    test('Utils must hava browser function', () => {
      expect(typeof utils.browser).toBe('function')
    })

    test('Utils must hava thumbnail function', () => {
      expect(typeof utils.thumbnail).toBe('function')
    })

    test('Utils must hava isThirdPC function', () => {
      expect(typeof utils.isThirdPC).toBe('function')
    })

    test('Utils must hava envInfo function', () => {
      expect(typeof utils.envInfo).toBe('function')
    })
  })
})
