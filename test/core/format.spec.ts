import utils from '../../src/index'

describe('Format test', () => {
  test('formatNumber must return a string', () => {
    expect(utils.formatNumber(1)).toBe('01')
    expect(utils.formatNumber('1')).toBe('01')
    expect(utils.formatNumber(11)).toBe('11')
  })

  test('dstMobile must return a string', () => {
    expect(utils.dstMobile('13233334444')).toBe('132****4444')
  })

  test('creatMobile must return a string', () => {
    expect(utils.creatMobile()).toMatch(/^1[3456789]\d{9}$/)
    expect(utils.creatMobile(true)).toMatch(/(\d{3})\*{4}(\d{4})/)
  })

  test('random must return a number', () => {
    const resolve: number = utils.random(9)
    expect(resolve >= 0 && resolve < 9).toBe(true)
    expect(resolve >= 9).toBe(false)

    const resolve2: number = utils.random(6, 2)
    expect(resolve2 >= 2 && resolve2 < 6).toBe(true)
    expect(resolve2 >= 6).toBe(false)
  })

  test('formatPhone must return a string', () => {
    expect(utils.formatPhone('13233334444')).toBe('132 3333 4444')
    expect(utils.formatPhone('132333344')).toBe('')
  })

  test('parseParams must return a object', () => {
    expect(typeof utils.parseParams('a=1')).toBe('object')
    expect(utils.parseParams('1')).toEqual({})
    expect(utils.parseParams('id=1&page=2&pageSize=20')).toEqual({
      id: '1',
      page: '2',
      pageSize: '20',
    })
    expect(utils.parseParams('a=1&b=2&c')).toEqual({
      a: '1',
      b: '2',
    })
  })

  test('formatParams must return a string', () => {
    expect(utils.formatParams({ id: 1, page: 2, pageSize: 20 })).toBe('?id=1&page=2&pageSize=20')
    expect(utils.formatParams('1')).toBe('')
    expect(utils.formatParams({ c: null, d: undefined })).toBe('')
    expect(utils.formatParams({ id: 1, page: { num: 1, size: 20 } })).toBe(
      '?id=1&page={"num":1,"size":20}'
    )
  })
})
