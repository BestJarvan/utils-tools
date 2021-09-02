/*
 * @Author: Yahui.Jiang
 * @Date: 2020-05-08 09:59:17
 * @LastEditors: pengfei.li
 * @LastEditTime: 2021-09-02 11:34:57
 * @Description:
 */
import utils from '../../../src/index'

describe('Date test', () => {
  describe('formatTime must return a string date', () => {
    it('function formatTime must return a string time with hours, minutes and seconds', () => {
      expect(utils.formatTime(1587823200000)).toBe('2020-04-25 22:00:00')
      expect(utils.formatTime(1587823200)).toBe('2020-04-25 22:00:00')
    })
    it('function formatTime must return a formatted string time', () => {
      expect(utils.formatTime(1587823200000, 'yyyy/M/d HH-mm-ss')).toBe('2020/4/25 22-00-00')
      expect(utils.formatTime(1587769200000, 'yyyy/M/d hh-mm-ss')).toBe('2020/4/25 07-00-00')
      expect(utils.formatTime(1587769200000, 'yyyy/M/d h-mm-ss')).toBe('2020/4/25 7-00-00')
      expect(utils.formatTime(1587823200000, 'yyyy/MM/dd')).toBe('2020/04/25')
      expect(utils.formatTime(1587823200000, 'yyyy/MM/DD')).toBe('2020/04/06')
      expect(utils.formatTime(1587823200000, 'yyyy/M/D')).toBe('2020/4/6')
      expect(utils.formatTime(1587823200, 'yyyy/M/d')).toBe('2020/4/25')
      expect(utils.formatTime(1587823200, 'yyyy/M/d HH-mm-ss')).toBe('2020/4/25 22-00-00')
      expect(utils.formatTime(1587823200, 'yyyy/M/d hh-mm-ss')).toBe('2020/4/25 10-00-00')
      expect(utils.formatTime(1587823200, 'yyyy/M/d H:m:s')).toBe('2020/4/25 22:0:0')
      expect(utils.formatTime(1587823200, 'yyyyy/MMM/ddd H:m:s')).toBe('2020y/M/d 22:0:0')
      expect(utils.formatTime(1587769200, 'yy/M/d hh:m:s')).toBe('20/4/25 07:0:0')
      expect(utils.formatTime(1587769200, 'h-m:s')).toBe('7-0:0')
      expect(utils.formatTime(1587769200, 'hh-m:s')).toBe('07-0:0')
      expect(utils.formatTime(1587787200, 'h-m:s')).toBe('12-0:0')
      expect(utils.formatTime(1587787200, 'hh-m:s')).toBe('12-0:0')
      expect(utils.formatTime(1588903200, 'h A')).toBe('10 AM')
      expect(utils.formatTime(1588903200, 'h a')).toBe('10 am')
      expect(utils.formatTime(1588917600, 'h A')).toBe('2 PM')
      expect(utils.formatTime(1588917600, 'h a')).toBe('2 pm')
    })
  })

  describe('formatHourTime must return a string date', () => {
    it('function formatHourTime must return a time with hours, minutes and seconds', () => {
      expect(utils.formatHourTime(1587823200000, true)).toBe('2020-04-25 22:00:00')
      expect(utils.formatHourTime(1587823200, true)).toBe('2020-04-25 22:00:00')
    })
    it('function formatHourTime must return a time without hours, minutes and seconds', () => {
      expect(utils.formatHourTime(1587823200000)).toBe('2020-04-25')
      expect(utils.formatHourTime(1587823200)).toBe('2020-04-25')
    })
  })

  describe('now must return a string date', () => {
    it('function now must return a 10-length string time', () => {
      expect(utils.now().toString()).toMatch(/^\d{10}$/)
    })

    it('function now must return a 13-length string time', () => {
      expect(utils.now(true).toString()).toMatch(/^\d{13}$/)
    })
  })

  test('拷贝日期对象', () => {
    const n = new Date('2012-12-14')
    expect(utils.cloneDate(n).getTime()).toBe(n.getTime())
  })

  test('因为toIOSString默认转为格林尼治时间，所以在转换之前需要额外加上8个小时', () => {
    const n = new Date('2014.4.5')
    expect(utils.timeZone(n)).toEqual(new Date(new Date('2014.4.5').getTime() + 28800000))
  })

  test('判断日期格式是否正确,有效返回new date()日期格式，无效返回当前日期', () => {
    expect(utils.formatEffectiveDate(11).getTime()).toBeLessThanOrEqual(new Date().getTime())
    expect(utils.formatEffectiveDate(1555599999)).toEqual(new Date(1555599999000))
    expect(utils.formatEffectiveDate().getTime()).toBeLessThanOrEqual(new Date().getTime())
    expect(utils.formatEffectiveDate({})).toBeTruthy()
    expect(utils.formatEffectiveDate({ length: 2 })).toEqual(new Date())
    expect(Math.floor(utils.formatEffectiveDate('').getTime() / 1000)).toBe(
      Math.floor(new Date().getTime() / 1000)
    )
    expect(utils.formatEffectiveDate('2012.4.6')).toEqual(new Date('2012.4.6'))
    expect(utils.formatEffectiveDate('20012.4.6').getTime()).toBeLessThanOrEqual(
      new Date().getTime()
    )
  })

  test('格式化时间', () => {
    expect(utils.formatDate('2021-12-12')).toBe(
      utils.timeZone(utils.formatEffectiveDate('2021-12-12')).toISOString().slice(0, 10)
    )
    expect(utils.formatDate(1555599999, 'datetime')).toBe(
      utils
        .timeZone(utils.formatEffectiveDate(1555599999))
        .toISOString()
        .substring(0, 16)
        .replace('T', ' ')
    )
    expect(utils.formatDate(1555599999, 'seconds')).toBe(
      utils
        .timeZone(utils.formatEffectiveDate(1555599999))
        .toISOString()
        .substring(0, 19)
        .replace('T', ' ')
        .substring(11, 19)
    )
    expect(utils.formatDate('2014.4.1', 'datetime')).toBeTruthy()
    expect(utils.formatDate('2014.4.1', 'seconds')).toBeTruthy()
    expect(utils.formatDate(new Date('2015.6.4'), 'datetime')).toBe(
      utils
        .timeZone(utils.formatEffectiveDate(new Date('2015.6.4')))
        .toISOString()
        .substring(0, 16)
        .replace('T', ' ')
    )
    expect(utils.formatDate(new Date('2015.6.4'), 'seconds')).toBeTruthy()
  })

  test('与现在时间作比较', () => {
    expect(utils.formatTimeCompare()).toBeFalsy()
    expect(
      utils.formatTimeCompare(parseInt(`${new Date('2021.3.16').getTime() / 1000}`))
    ).not.toBeFalsy()
    expect(utils.formatTimeCompare(parseInt(`${new Date().getTime() / 1000}`))).toBe('刚刚')
    expect(utils.formatTimeCompare(parseInt(`${new Date().getTime() / 1000 - 1000}`))).toBe(
      '16分钟前'
    )
    expect(utils.formatTimeCompare(parseInt(`${new Date().getTime() / 1000 - 10000}`))).toBe(
      '2小时前'
    )
    expect(
      utils.formatTimeCompare(parseInt(`${new Date('2021.3.17 1:57').getTime() / 1000}`))
    ).toBe('2021-03-17 01:57')
    expect(
      utils.formatTimeCompare(parseInt(`${new Date().getTime() / 1000 + 43200000}`))
    ).toBeTruthy()
    expect(utils.formatTimeCompare(parseInt(`${new Date().getTime() / 1000 + 1000}`))).toBeTruthy()
    expect(
      utils.formatTimeCompare(parseInt(`${new Date('2021.3.01 11:00').getTime() / 1000}`))
    ).toBe('2021-03-01 11:00')
  })

  test('获取指定日期前后n天的日期,如果没有指定日期，则是当前日期n天的前后', () => {
    expect(utils.getDay(2, '2014.12.4')).toBe('2014-12-06')
    expect(utils.getDay(2, '2014.12.4', 'datetime')).toBe('2014-12-06 00:00')
  })

  test('获取指定日期前后n个月的日期,如果没有指定日期，则是当前日期的前后n个月', () => {
    expect(utils.getMonthDay(1, '2019.12.7')).toBe('2020-01-07')
    expect(utils.getMonthDay(11, '2019.7.31')).toBe('2020-06-30')
    expect(utils.getMonthDay(1, '2019.1.7')).toBe('2019-02-07')
    expect(utils.getMonthDay(-3, '2021.1.7')).toBe('2020-10-07')
    expect(utils.getMonthDay(1, '2019.12.7', 'datetime')).toBe('2020-01-07 00:00')
  })

  test('获取指定日期前后n年的日期,如果没有指定日期，则是当前日期n年的前后', () => {
    expect(utils.getYearDay(2, '2021.3.17')).toBe('2023-03-17')
    expect(utils.getYearDay(2, '2021.3.17', 'datetime')).toBe('2023-03-17 00:00')
  })

  test('将时间戳转换为日期格式', () => {
    expect(utils.timestampToTime(new Date('2021.3.8').getTime())).toEqual({
      year: 2021,
      month: '03',
      day: '08',
      hours: '00',
      minutes: '00',
    })
    expect(utils.timestampToTime(new Date('2021.3.16 15:14').getTime())).toEqual({
      year: 2021,
      month: '03',
      day: 16,
      hours: 15,
      minutes: 14,
    })
    expect(utils.timestampToTime(new Date('2021.10.16').getTime())).toEqual({
      year: 2021,
      month: 10,
      day: 16,
      hours: '00',
      minutes: '00',
    })
    expect(utils.timestampToTime(new Date('2021.3.16').getTime().toString().slice(0, 10))).toEqual({
      year: 2021,
      month: '03',
      day: 16,
      hours: '00',
      minutes: '00',
    })
    expect(utils.timestampToTime('dsad')).toBe('dsad')
  })

  test('将时间戳转成指定的格式', () => {
    expect(utils.timestampToTimeString(new Date('2021.3.16').getTime(), 'yyyy-MM-dd')).toBe(
      '2021-03-16'
    )
    expect(utils.timestampToTimeString(new Date('2021.3.16').getTime(), 'yyyy-MM-dd HH:mm')).toBe(
      '2021-03-16 00:00'
    )
  })

  test('将日期转换为时间戳的格式', () => {
    expect(utils.timeToTimestamp(new Date('2021.3.16').getTime().toString())).toBe(
      new Date('2021.3.16').getTime().toString()
    )
    expect(utils.timeToTimestamp('2021.3.16')).toBe(Date.parse('2021.3.16') / 1000)
    expect(utils.timeToTimestamp('')).toBe('')
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
})
