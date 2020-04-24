import utils from '../../src/index'

Object.defineProperty(navigator, 'userAgent', {
  writable: true,
  value: '',
})

describe('Utils test', () => {
  test('getEnv must return a boolean', () => {
    const resolve = utils.getEnv()
    expect(typeof resolve).toBe('boolean')

    // @ts-ignore
    window.navigator.userAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    expect(utils.getEnv()).toBe(false)

    // @ts-ignore
    window.navigator.userAgent = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
    expect(utils.getEnv()).toBe(true)
  })

  describe('getOs test', () => {
    test('getOs must return a string', () => {
      expect(typeof utils.getOs()).toBe('string')

      expect(utils.getOs()).toBe('unknown')

      // @ts-ignore
      window.navigator.userAgent =
        'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Mobile Safari/537.36'
      expect(utils.getOs()).toBe('android')

      // @ts-ignore
      window.navigator.userAgent =
        'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Titan)'
      expect(utils.getOs()).toBe('winPhone')

      // @ts-ignore
      window.navigator.userAgent =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
      expect(utils.getOs()).toBe('ios')
    })
  })

  describe('getIEVersion test', () => {
    test('getIEVersion must return a number or string', () => {
      // @ts-ignore
      window.navigator.userAgent = ''
      expect(utils.getIEVersion()).toBe(-1)
      // @ts-ignore
      window.navigator.userAgent = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
      expect(utils.getIEVersion()).toBe(11)
      // @ts-ignore
      window.navigator.userAgent = 'Mozilla/5.0 Edge'
      expect(utils.getIEVersion()).toBe('edge')
      // @ts-ignore
      window.navigator.userAgent =
        'Mozilla/4.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/4.0)'
      expect(utils.getIEVersion()).toBe(10)
      // @ts-ignore
      window.navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/4.0)'
      expect(utils.getIEVersion()).toBe(9)
      // @ts-ignore
      window.navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)'
      expect(utils.getIEVersion()).toBe(8)
      // @ts-ignore
      window.navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/4.0)'
      expect(utils.getIEVersion()).toBe(7)
      // @ts-ignore
      window.navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 6.1; Trident/4.0)'
      expect(utils.getIEVersion()).toBe(6)
    })
  })
})
