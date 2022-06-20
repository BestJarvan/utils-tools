import utils from '../../../src/index'

describe('url test', () => {
  test('cleanArray must return a Array<any>', () => {
    expect(utils.cleanArray(['a=1', 'b=2', null, undefined])).toEqual(['a=1', 'b=2'])
    expect(utils.cleanArray(['a=1', 'b=2'])).toEqual(['a=1', 'b=2'])
  })

  test('param must return a string', () => {
    expect(typeof utils.param({})).toBe('string')
    expect(
      utils.param({
        id: '1',
        page: '2',
        pageSize: '20',
      })
    ).toEqual('id=1&page=2&pageSize=20')
    expect(
      utils.param({
        a: '1',
        b: '2',
        c: undefined,
      })
    ).toEqual('a=1&b=2')
    expect(
      utils.param({
        a: '1',
        b: null,
        c: undefined,
      })
    ).toEqual('a=1&b=null')
  })

  test('param2Obj must return a Record<string, any>', () => {
    expect(typeof utils.param2Obj('')).toBe('object')
    expect(typeof utils.param2Obj('a=1')).toBe('object')
    expect(utils.param2Obj('1')).toEqual({ 1: undefined })
    expect(utils.param2Obj('id=1&page=2&pageSize=20')).toEqual({
      id: '1',
      page: '2',
      pageSize: '20',
    })
    expect(utils.parseParams('a=1&b=2&c')).toEqual({
      a: '1',
      b: '2',
      c: undefined,
    })
  })
})
