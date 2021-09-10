/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:28:50
 * @LastEditors: zihao.chen
 * @LastEditTime: 2021-09-10 14:10:35
 * @Description:
 */

interface Index {
  /**
   *
   * 解析JSON Object，并加入异常处理
   * @param {string} str 要解析的字符串
   * @param {any} def 如果解析失败，所返回的默认值，不填则返回一个空数组
   * @return 如果解析失败，所返回的默认值，不填则返回一个空数组
   * json('{key: value}', {})
   *
   */
  json(str: string, def?: any): any

  /**
   * 检测是否是钉钉环境
   * if (utils.isDingTalk()) {
   *  // todo
   * }
   */
  isDingTalk(): boolean

  /**
   * 是否为开发环境
   * if (utils.isDevEnv()) {
   *  // todo
   * }
   */
  isDevEnv(): boolean

  /**
   * 计算字符长度：汉字为1，英文字母为0.5，结果取整
   * @param {String} val input value
   * @return {number} output value
   */
  getByteLen(val: string | undefined | null): number

  /**
   *
   * @param {any} source 需要深拷贝的任意类型值
   * @param {null} nullVal 可选值，null
   * @return {any} 如果是非引用类型，直接返回该类型的值，引用类型则按类型返回
   */
  deepClone(source: any, nullVal?: null): any

  /**
   * @description 返回指定列
   * @param {number} name
   * @param {array} arr
   * @return
   */
  getParamValues(name: number, arr: Array<any[]>): Array<any>

  /**
   * @description 1和0互相转换，取反函数
   * @param num
   * @return
   */
  reverseNum(num: number | string): number | void

  /**
   * @description: 检测对象类型
   * @param obj 需要检测的参数
   * @return
   */
  getObjectType(obj: any): string

  /**
   * @description: 对象数组去重
   * @param {Array} [repeatArray] 需要处理的数组，每一项是对象
   * @param {String} [attr] 判断是否重复的唯一值
   * @return: Array 不再重复的数组
   */
  noRepeatArray(repeatArray: Array<any>, attr: string): Array<any>

  /**
   * @description: 判断当前是否在外链表单页面中
   * @return: Boolean 当前是否为外链表单相关页面
   */
  isOuterLinkEnv(): boolean

  /**
   * @description  获取浏览器信息
   * @return {string} 返回当前系统的类型 ios | Android | pc
   */
  browser(): string

  /**
   * @description  获取图片地址
   * @param {string|string[]} img 图片数据
   * @param {number} size 可选参数 图片大小
   * @return {string} 图片地址
   */
  thumbnail(img: string | string[], size?: number): string

  /**
   * @description  是否企微图片
   * @param {string} img 图片数据
   * @return {string} 图片地址
   */
  isWxImg(img: string): string

  /**
   * @description  移动端-判断是否当前多平台
   * @param {string[]} name 平台名称：[wx,lark,h5,dd]
   * @return {boolean}
   */
  envInfo(name: string[]): boolean

  /**
   * @description  是否多平台pc端
   * @param {string[]} name 平台名称：[wx,lark,h5,dd]
   * @return {boolean}
   */
  isThirdPC(name: string): boolean
}
interface Verify {
  /**
   *
   * 判断是否是合法链接
   * @param value 传入需要验证的url
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * if (utils.verifyHttp(url)) {
   *    // do sth.
   * }
   * ```
   *
   */
  verifyHttp(value: string): boolean

  /**
   *
   * 判断是否是合法手机号
   * @param mobile 传入需要验证的手机号
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * if (utils.verifyMobile(mobile)) {
   *    // do sth.
   * }
   * ```
   *
   */
  verifyMobile(mobile: string): boolean

  /**
   *
   * 判断是否是6位纯数字验证码
   * @param code 传入需要验证的验证码
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * if (utils.verifyCode(code)) {
   *    // do sth.
   * }
   * ```
   *
   */
  verifyCode(code: string): boolean

  /**
   *
   * 判断是否是合法邮箱格式
   * @param email 传入需要验证的邮箱
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * if (utils.verifyEmail(email)) {
   *    // do sth.
   * }
   * ```
   *
   */
  verifyEmail(email: string): boolean
}

interface Format {
  /**
   *
   * 不满两位补0
   * @param value 传入需要补充的数字或字符
   * @return {string} 01 | 11
   * @author Jarvan
   * ``` typescript
   * utils.formatAddZero(1)    // '01'
   * utils.formatAddZero('1')  // '01'
   * utils.formatAddZero(12)   // '12'
   * utils.formatAddZero('12') // '12'
   * ```
   *
   */
  formatAddZero(value: number | string): string

  /**
   *
   * 手机号脱敏处理
   * @param mobile 传入手机号
   * @return {string} 132****3333
   * @author Jarvan
   * ``` typescript
   * utils.dstMobile('13211113333')    // '132****3333'
   * ```
   *
   */
  dstMobile(mobile: string): string

  /**
   *
   * 生成随机手机号
   * @param dst 可选参数 默认不脱敏处理
   * @return {string} 132****3333 | 13211113333
   * @author Jarvan
   * ``` typescript
   * utils.creatMobile(true)    // '132****3333'
   * utils.creatMobile()    // '13211113333'
   * ```
   *
   */
  creatMobile(dst?: boolean): string

  /**
   *
   * 最大最小值中取随机数 [0, 1)
   * @param max 最大值(不包括)
   * @param min 可选参数 最小值 (包括  默认0)
   * @return {string}
   * @author Jarvan
   * ``` typescript
   * utils.random(9)      // [0, 8]
   * utils.random(9， 7)  // [7, 8]
   * ```
   *
   */
  random(max: number, min?: number): number

  /**
   *
   * 格式化手机号
   * @param mobile 传入11位手机号 必须11位
   * @return {string} 132 3333 4444
   * @author Jarvan
   * ``` typescript
   * utils.formatPhone('13233334444') // 132 3333 4444
   * ```
   *
   */
  formatPhone(mobile: string): string

  /**
   *
   * 解析url参数
   * @param url 传入待解析的url
   * @return {object}
   * @author Jarvan
   * ``` typescript
   * utils.parseParams('id=1&page=1&pageSize=20') // { id: 1, page: 1, pageSize: 20 }
   * ```
   *
   */
  parseParams(url: string): object

  /**
   *
   * 拼接url参数
   * @param params
   * @return {string}
   * @author Jarvan
   * ``` typescript
   * utils.parseParams({ id: 1, page: 1, pageSize: 20 }) // '?id=1&page=1&pageSize=20'
   * ```
   *
   */
  formatParams(params: any): string
}

interface Is {
  /**
   *
   * 判断是否是数组
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * utils.isArray([1, 2])    // true
   * ```
   *
   */
  isArray(value: any): boolean

  /**
   *
   * 判断是否是对象 ([], object) 都为true
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * utils.isObject([1, 2])    // true
   * ```
   *
   */
  isObject(value: any): boolean

  /**
   *
   * 判断是否是绝对的对象
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * utils.isArray({})    // true
   * ```
   *
   */
  isPlainObject(value: any): boolean

  /**
   *
   * 判断是否是数字
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * utils.isNum(1)    // true
   * ```
   *
   */
  isNum(value: any): boolean

  /**
   *
   * 判断是否是函数
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * utils.isFunc(function () {})    // true
   * ```
   *
   */
  isFunc(value: any): boolean

  /**
   *
   * 判断是否是undefined
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * utils.isUndefined(判断是否是undefined)    // true
   * ```
   *
   */
  isUndefined(value: any): boolean

  /**
   *
   * 判断是否是null
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * utils.isNull(null)    // true
   * ```
   *
   */
  isNull(value: any): boolean
}

interface Datefromat {
  /**
   *
   * 格式化时间 支持自定义格式 参考element-ui的时间格式
   * @param value 传入时间戳 10位 | 13位
   * @param format 可选参数 传入目标时间格式 默认'yyyy-MM-dd HH:mm:ss'
   * @return {string} '2020-04-25 22:00:00'
   * @author Jarvan
   *
   * | 格式 | 含义 | 备注 | 举例 |
   * | --- | --- | ---  |      |
   * | yy | 年 |   | 20 |
   * | yyyy | 年 |   | 2020 |
   * | M | 月 | 不补0 | 5 |
   * | MM | 月 |  | 05 |
   * | d | 日 | 不补0 | 1 |
   * | dd | 日 |  | 01 |
   * | D | 日 | 一周第几天 周日-周六(0 - 6) 不补0 | 3 |
   * | DD | 日 |  | 03 |
   * | h | 小时 | 12小时制,须和 A 或 a 使用;不补0	 | 9 |
   * | hh | 小时 | 12小时制,须和 A 或 a 使用 | 09 |
   * | H | 小时 | 24小时制;不补0 | 3 |
   * | HH | 小时 | 24小时制 | 03 |
   * | m | 分 | 不补0 | 4 |
   * | mm | 分 |  | 04 |
   * | s | 秒 | 不补0 | 05 |
   * | ss | 秒 |  | 05 |
   * | a | am/pm |  | am |
   * | A | AM/PM |  | AM |
   *
   * ``` typescript
   * utils.formatTime(1587823200000, 'yyyy-MM-dd HH:mm:ss')    // '2020-04-25 22:00:00'
   * utils.formatTime(1587823200000, 'yyyy-MM-dd')    // '2020-04-25'
   * utils.formatTime(1587823200, 'yyyy-M-d')    // '2020-4-25'
   * ```
   *
   */
  formatTime(value: number, format?: string): string

  /**
   *
   * 格式化时间 支持自定义格式 参考element-ui的时间格式
   * @param value 传入时间戳 10位 | 13位
   * @param hour 可选参数 是否需要小时、分钟、秒钟
   * @return {string} '2020-04-25 22:00:00'
   * @author Jarvan
   * ``` typescript
   * utils.formatHourTime(1587823200000, true)    // '2020-04-25 22:00:00'
   * utils.formatHourTime(1587823200000)    // '2020-04-25'
   * ```
   *
   */
  formatHourTime(value: number, hour?: boolean): string

  /**
   *
   * 返回当前系统时间
   * @param long 是否需要 10位或者13位时间戳 默认为 10位时间戳
   * @return {string} '1587823200'
   * @author Jarvan
   * ``` typescript
   * utils.now()      // 1587823200
   * utils.now(true)  // 1587823200000
   * ```
   *
   */
  now(long?: boolean): string

  /**
   *
   * @param  {Date} val 需要深拷贝的原始时间对象
   * @return {Date} 新的时间对象
   * ``` typescript
   * utils.cloneDate(new Date('2012-11-21'))
   * ```
   */
  cloneDate(val: Date): Date

  /**
   * @param {Date} time 需要转化的时间
   * @return {Date} 格林尼治时间对象
   * ```typescript
   * utils.timeZone(new Date('2012-12-21'))
   * ```
   *
   */
  timeZone(time: Date): Date

  /**
   * @param {any} date 需要判断格式是否正确的日期
   * @return {Date} 返回正确的当前时间对象
   */
  formatEffectiveDate(date?: any): Date

  /**
   *
   * @param {Date|String|Number} d 传入时间
   * @param {String} type 需要转化为什么格式
   * @return {String}
   * ```typescript
   * formatDate()  "2017-03-28"
   * formatDate(new Date(), 'datetime') "2017-03-15 15:34"
   * ```
   */
  formatDate(d: Date | string | number, type?: string): string

  /**
   * 与现在时间做比较
   * @param {Number} time 需要比较的时间（秒）
   * @return {String}
   * ``` typescript
   * 1分钟内： '刚刚'
   * 1小时内： 'xx分钟前'
   * 5小时内： 'xx小时前'
   * 超过5小时但在今日内： '今日 hh:mm'
   * 其他时间：'DD-MM hh:mm'
   * ```
   */
  formatTimeCompare(time?: number | string): string | void

  /**
   * 获取指定日期前后n天的日期,如果没有指定日期，则是当前日期n天的前后
   * @param {string|number|Date} appointedDate 指定日期
   * @param {number} addDayCount 前后n天
   * @param {string} type 返回时间类型，可选
   * @return {string}
   */
  getDay(addDayCount: number, appointedDate: number | string | Date, type?: string): string

  /**
   * 获取指定日期前后n个月的日期,如果没有指定日期，则是当前日期的前后n个月
   * @param {number} monthNum 前后n月
   * @param {string|number|Date} appointedDate 指定日期
   * @param {string} type 返回时间类型，可选
   * @return {string}
   */
  getMonthDay(monthNum: number, appointedDate: string | number | Date, type?: string): string

  /**
   * 获取指定日期前后n年的日期,如果没有指定日期，则是当前日期n年的前后
   * @param {number} addYearCount 前后的n年
   * @param {any}appointedDate 指定日期
   * @param {string} type 返回日期格式
   * @return {Date}
   */
  getYearDay(addYearCount: number, appointedDate: any, type?: string): string

  /**
   * 将时间戳转换为日期格式
   * @param {string|number} timestamp
   * @return {object}
   */
  timestampToTime<T>(timestamp: T): object | T

  /**
   * @description: 将时间戳转成指定的格式
   * @param {string} type :'yyyy-MM-dd HH:mm', 'yyyy-MM-dd' 这两种格式
   * @param {string} timestamp 时间戳
   * @return {string}
   */
  timestampToTimeString(timestamp: string | number, type: string): string

  /**
   * 将日期转换为时间戳的格式
   * @param {string} time
   * @return {string|number}
   */
  timeToTimestamp(time: string): string | number

  /**
   * 将秒数转为HH:MM:SS格式
   * @param {number} s :秒数，不是毫秒
   * @return {string}
   */
  formatSecond(s: number): string
}

interface Method {
  /**
   *
   * 节流函数
   * @param fn 需要节流的方法
   * @param delay 可选参数 下次运行时间间隔 单位毫秒ms 默认300
   * @author Jarvan
   * ```typescript
   * window.onscroll = utils.throttle(() => {
   *   console.log(123)
   * }, 1000)
   *
   * inputEnter(e) {
   *   utils.throttle(() => {
   *     console.log(e)
   *   }, 800)() // 返回的是一个函数所以需要自调
   * }
   * ```
   *
   */
  throttle(fn: Function, delay?: number): Function

  /**
   *
   * 防抖函数
   * @param fn 需要防抖的方法
   * @param delay 可选参数 停顿多久执行 单位毫秒ms 默认300
   * @author Jarvan
   * ```typescript
   * window.onscroll = utils.debounce(() => {
   *   console.log(123)
   * }, 1000)
   *
   * inputEnter(e) {
   *   utils.debounce(() => {
   *     console.log(e)
   *   }, 800)() // 返回的是一个函数所以需要自调
   * }
   * ```
   *
   */
  debounce(fn: Function, delay?: number): Function
}
interface Url {
  /**
   * 过滤出url的非空值
   * @params actual 传入的url
   * @return Array<string>
   */
  cleanArray(actual: any): Array<any>

  /**
   * 对象转成url的param
   * @params json 传入的json对象
   * @return string
   */
  param(json: Record<string, any>): string

  /**
   * 解析url中的参数
   * @params search 传入的url
   * @return object
   */
  param2Obj(search: string): Record<string, any>
}

interface Math {
  /**
   *
   * 加法
   * @param num1 需要进行加法运算的参数1
   * @param num2 需要进行加法运算的参数2
   * @param n 精确的精度
   * @return {number | string} 计算结果
   * ``` typescript
   * utils.plus(1, 1) // 2
   * ```
   *
   */
  plus(num1: number | string, num2: number | string, n?: number): number | string

  /**
   *
   * 减法
   * @param num1 需要进行减法运算的参数1
   * @param num2 需要进行减法运算的参数2
   * @param n 精确的精度
   * @return {number | string} 计算结果
   * ``` typescript
   * utils.subtract(1, 1) // 0
   * ```
   *
   */
  subtract(num1: number | string, num2: number | string, n?: number): number | string

  /**
   *
   * 乘法
   * @param num1 需要进行乘法运算的参数1
   * @param num2 需要进行乘法运算的参数2
   * @param n 精确的精度
   * @return {number | string} 计算结果
   * ``` typescript
   * utils.multiply(1, 3) // 3
   * ```
   *
   */
  multiply(num1: number | string, num2: number | string, n?: number): number | string

  /**
   *
   * 除法
   * @param num1 需要进行除法运算的参数1
   * @param num2 需要进行除法运算的参数2
   * @param n 精确的精度
   * @return {number | string} 计算结果
   * ``` typescript
   * utils.divide(2, 2) // 1
   * ```
   *
   */
  divide(num1: number | string, num2: number | string, n?: number): number | string

  /**
   * 科学记数法正常显示
   * @param num 需要处理的数字
   * @return {number | string} 计算结果
   */
  scientificNumber(num: number | string): number | string

  /**
   * @description: 用于资金金额的计算（去除'，'）
   * @param {Number|String} num 传进来的金额
   * @return {Number} 纯净的数值类型
   */
  formatToNumber(num): number

  /**
   * @description: 千分符，数字三位一隔开 （1000000 => 1,000,000)
   * @param {number|string} num 传进来的金额
   * @return {number|string} 格式化后的数字
   */
  dealNumber(num: number | string): number | string
}

interface Uuid {
  /**
   * @description 生成唯一码uuid
   * @return {string} uuid
   */
  guid(): string

  /**
   * @description guid
   * @return {string}
   */
  getGuid(): string
}
/**
 *
 * @ignore
 *
 */
export interface Types extends Index, Verify, Format, Is, Datefromat, Method, Url, Math, Uuid {}
