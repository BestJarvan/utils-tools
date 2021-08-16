/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:27:51
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2020-12-17 16:47:29
 * @Description:
 */
import utils from '../../../src/index'

describe('Verify test', () => {
  test('verifyHttp must return a boolean', () => {
    let url = 'http://www.jiangyh.cn'
    expect(utils.verifyHttp(url)).toBeTruthy()

    url = 'https://www.jiangyh.cn'
    expect(utils.verifyHttp(url)).toBeTruthy()

    url = 'jiangyh.cn'
    expect(utils.verifyHttp(url)).toBeFalsy()
  })

  test('verifyMobile must return a boolean', () => {
    let mobile = '13222222222'
    expect(utils.verifyMobile(mobile)).toBeTruthy()

    mobile = '1111111'
    expect(utils.verifyMobile(mobile)).toBeFalsy()
  })

  test('verifyCode must return a boolean', () => {
    let code = '567890'
    expect(utils.verifyCode(code)).toBeTruthy()

    code = '123'
    expect(utils.verifyCode(code)).toBeFalsy()
  })

  test('verifyEmail must return a boolean', () => {
    let email = 'j532547613@gamil.com'
    expect(utils.verifyEmail(email)).toBeTruthy()

    email = '123456'
    expect(utils.verifyEmail(email)).toBeFalsy()
  })
})
