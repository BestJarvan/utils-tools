import utils from '../../src/index'

describe('Verify test', () => {
  test('verifyHttp must return a boolean', () => {
    let url = 'http://www.jiangyh.cn'
    expect(utils.verifyHttp(url)).toBe(true)

    url = 'https://www.jiangyh.cn'
    expect(utils.verifyHttp(url)).toBe(true)

    url = 'jiangyh.cn'
    expect(utils.verifyHttp(url)).toBe(false)
  })

  test('verifyMobile must return a boolean', () => {
    let mobile = '13222222222'
    expect(utils.verifyMobile(mobile)).toBe(true)

    mobile = '1111111'
    expect(utils.verifyMobile(mobile)).toBe(false)
  })

  test('verifyCode must return a boolean', () => {
    let code = '567890'
    expect(utils.verifyCode(code)).toBe(true)

    code = '123'
    expect(utils.verifyCode(code)).toBe(false)
  })

  test('verifyEmail must return a boolean', () => {
    let email = 'j532547613@gamil.com'
    expect(utils.verifyEmail(email)).toBe(true)

    email = '123456'
    expect(utils.verifyEmail(email)).toBe(false)
  })
})
