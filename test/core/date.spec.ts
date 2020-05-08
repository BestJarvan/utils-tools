/*
 * @Author: Yahui.Jiang
 * @Date: 2020-05-08 09:59:17
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2020-05-08 10:23:05
 * @Description:
 */
import utils from '../../src/index'

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
})
