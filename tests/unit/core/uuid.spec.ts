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
