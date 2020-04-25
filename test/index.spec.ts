import utils from '../src/index'

// 判断Utils是否挂载对应的方法
describe('Utils test', () => {
  // env模块
  describe('Env test', () => {
    test('Utils must have a getEnv function', () => {
      expect(typeof utils.getEnv).toBe('function')
    })

    test('Utils must have a getOs function', () => {
      expect(typeof utils.getOs).toBe('function')
    })

    test('Utils must have a getIEVersion function', () => {
      expect(typeof utils.getIEVersion).toBe('function')
    })
  })

  // format模块
  describe('Format test', () => {
    test('Utils must have a formatNumber function', () => {
      expect(typeof utils.formatNumber).toBe('function')
    })

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
})
