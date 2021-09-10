/*
 * @Author: 崔佳华
 * @Date: 2021-03-17 16:41:38
 * @LastEditors: zihao.chen
 * @LastEditTime: 2021-09-10 15:09:46
 * @Description:
 * @Props:
 * @Emit:
 */
import utils from '../../../src/index'

Object.defineProperty(window, 'location', {
  value: {
    hostname: '192.168.1.1',
    href: '123',
  },
})

describe('Index test', () => {
  test('json must be a string, def is not required', () => {
    expect(utils.json('{"password":"123456","username":"张三"}', {})).toEqual({
      password: '123456',
      username: '张三',
    })
    expect(utils.json('{"password":"123456","username":"张三"}')).toEqual({
      password: '123456',
      username: '张三',
    })
    expect(utils.json('{"neme":4}')).toEqual({ neme: 4 })
    expect(utils.json('aa', 11)).toBe(11)
    expect(utils.json('aa')).not.toBeFalsy()
  })

  test('检测是否是钉钉环境', () => {
    expect(utils.isDingTalk()).toBeFalsy()
  })

  test('是否为开发环境', () => {
    expect(utils.isDevEnv()).toBeTruthy()
    expect(utils.isDevEnv()).toBeTruthy()
  })

  test('计算字符长度：汉字为1，英文字母为0.5，结果取整', () => {
    expect(utils.getByteLen('哈哈哈')).toBe(3)
    expect(utils.getByteLen('aa')).toBe(1)
    expect(utils.getByteLen(undefined)).toBe(0)
  })

  test('深拷贝', () => {
    expect(utils.deepClone([{ name: 1 }])).toContainEqual({ name: 1 })
    expect(utils.deepClone(1)).toBe(1)
    expect(utils.deepClone([{ name: 1 }, 2, undefined, null], null)).toEqual([
      { name: 1 },
      2,
      null,
      null,
    ])
    expect(utils.deepClone('121221')).toBe('121221')
    expect(utils.deepClone({ arr: [1] })).toEqual({ arr: [1] })
    expect(utils.deepClone({ a: undefined, b: null }, null)).toEqual({ a: null, b: null })
    const obj = Object.create({ a: 1 })
    Object.defineProperty(obj, 'c', {
      writable: false,
      value: 2,
    })
    expect(utils.deepClone(obj)).toEqual({})
  })

  test('json返回指定列', () => {
    expect(
      utils.getParamValues(2, [
        [1, 2, 3],
        [2, 4, 6],
      ])
    ).toContain(3)
  })

  test('1和0互相转换，取反函数', () => {
    expect(utils.reverseNum(1)).toBe(0)
    expect(utils.reverseNum(0)).toBe(1)
    expect(utils.reverseNum('a')).toBeUndefined()
  })

  test('对象数组去重', () => {
    expect(
      utils.noRepeatArray(
        [
          { name: '24', id: 1, status: 'success' },
          { name: '张三', id: 2, status: 'success' },
          { name: '李四', id: 1, status: 'false' },
        ],
        'id'
      )
    ).toMatchObject([
      { name: '24', id: 1, status: 'success' },
      { name: '张三', id: 2, status: 'success' },
    ])
    expect(utils.noRepeatArray([], 'id')).toMatchObject([])
  })

  test('检测对象类型', () => {
    expect(utils.getObjectType('我是一个字符串')).toBe('String')
    expect(utils.getObjectType(1314)).toBe('Number')
    expect(utils.getObjectType(true)).toBe('Boolean')
    expect(utils.getObjectType({ name: '张三', age: 18 })).toBe('Object')
    expect(utils.getObjectType([13, 324, 56])).toBe('Array')
  })

  test('判断当前是否在外链表单页面中', () => {
    expect(utils.isOuterLinkEnv()).toBeFalsy()
  })
  test('判断系统内核', () => {
    Object.defineProperty(navigator, 'userAgent', {
      writable: true,
      value:
        'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Mobile Safari/537.36',
    })
    expect(utils.browser()).toBe('Android')
    // @ts-ignore
    window.navigator.userAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
    expect(utils.browser()).toBe('ios')
    // @ts-ignore
    window.navigator.userAgent = 'DingTalk'
    expect(utils.browser()).toBe('pc')
    // @ts-ignore
    window.navigator.userAgent = ''
    expect(utils.browser()).toBe('')
  })
  test('获取图片地址', () => {
    expect(utils.thumbnail('', 40)).toBe('')
    expect(utils.thumbnail('aaa?1123131', 90)).toBe('aaa_100x100.jpg')
    expect(utils.thumbnail(['aaa?1123131'], 80)).toBe('aaa_80x80.jpg')
    expect(utils.thumbnail(['aaa?1123131'])).toBe('aaa_100x100.jpg')
  })

  test('将秒数转为HH:MM:SS格式', () => {
    expect(utils.formatSecond(10)).toBe('00:00:10')
    expect(utils.formatSecond(60)).toBe('00:01:00')
    expect(utils.formatSecond(3000)).toBe('00:50:00')
    expect(utils.formatSecond(3600)).toBe('01:00:00')
    expect(utils.formatSecond(4215)).toBe('01:10:15')
    expect(utils.formatSecond(3660)).toBe('01:01:00')
    expect(utils.formatSecond(3670)).toBe('01:01:10')
    expect(utils.formatSecond(3610)).toBe('01:00:10')
  })

  test('移动端判断是否当前多平台环境', () => {
    expect(utils.envInfo(['wx'])).toBeFalsy()
    expect(utils.isThirdPC([''])).toBeFalsy()
    expect(utils.isThirdPC(['123'])).toBeFalsy()
  })

  test('判断是否第三方pc端', () => {
    expect(utils.isThirdPC(['wx'])).toBeFalsy()
    expect(utils.isThirdPC([''])).toBeFalsy()
    expect(utils.isThirdPC(['123'])).toBeFalsy()
  })
})
