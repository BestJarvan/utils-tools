import utils from '../src/index'

// 判断Utils是否挂载对应的方法
describe('Utils test', () => {
  // env模块
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
