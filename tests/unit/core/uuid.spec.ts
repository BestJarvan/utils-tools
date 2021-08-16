/*
 * @Author: 陈祖康
 * @Date: 2021-03-19 13:48:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 09:15:26
 * @Description: 生成唯一码的单元测试
 * @Props:
 * @Emit:
 */
import utils from '../../../src/index'

describe('uuid test', () => {
  test('cleanArray must return a string', () => {
    expect(typeof utils.guid()).toBe('string')
    expect(utils.guid()).toHaveLength(36)
  })
  test('guid', () => {
    expect(utils.getGuid()).toBeTruthy()
  })
})
