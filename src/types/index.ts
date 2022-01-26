/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:28:50
 * @LastEditors: zihao.chen
 * @LastEditTime: 2021-11-15 09:52:55
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
   * @param {number} oss 可选参数 oss类型 1阿里 2minio 3七牛
   * @return {string} 图片地址
   */
  thumbnail(img: string | string[], size?: number, oss?: number): string

  /**
   * @description  是否企微图片
   * @param {string} img 图片数据
   * @return {string} 图片地址
   */
  isWxImg(img: string): string

  /**
   * @description  移动端-判断是否当前多平台
   * @param {string[]} name 平台名称支持：['wx','lark','h5','dd']
   * @return {string | undefined} 返回对应的平台名称 或 undefined
   */
  envInfo(name: string[]): string | undefined

  /**
   * @description  是否多平台pc端
   * @param {string[]} name 平台名称支持：['wx','lark','h5','dd']
   * @param {boolean} inBrowser 在浏览器中判断环境 false:仅仅走容器，true:容器和浏览器
   * @return {string | undefined} 返回对应的平台名称 或 undefined
   */
  isThirdPC(name: string[], inBrowser: boolean): string | undefined
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

  /**
   *
   * 十六进制颜色转rgba
   * @param hex 十六进制颜色
   * @param opacity 透明度（默认为1）
   * @return {string} rgba格式颜色
   * @author Jarvan
   * ``` typescript
   * utils.hexToRgba('#00965e','0.5') // 'rgba(0,150,94,0.5)'
   * ```
   *
   */
  hexToRgba(hex: string, opacity?: number | string): string
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
   * @description 节流装饰器
   * @param { Number } [delay] 需要节流的毫秒数
   * @param { Object } [options] 可选参数
   * @param { Boolean } [options.leading] 指定调用在节流开始前，默认为 true
   * @param { Boolean } [options.trailing] 指定调用在节流结束后，默认为 false
   * @returns { Function }
   * @example
   * ```typescript
   * @utils.throttle(800) // 在需要节流的方法上添加装饰器进行包装
   * inputEnter(e) {}
   * ```
   */
  throttleWrap(delay?: number, option?: object): Function

  /**
   *
   * @description 节流函数
   * @param { Function } [fn] 需要节流的函数
   * @param { Number } [delay] 需要节流的毫秒数
   * @param { Object } [options] 可选参数
   * @param { Boolean } [options.leading] 指定调用在节流开始前，默认为 true
   * @param { Boolean } [options.trailing] 指定调用在节流结束后，默认为 false
   * @returns { Function }
   * @example
   * ```typescript
   * const func = () => { doSomething() }
   * const funcThrottle = utils.throttle(func)
   * ```
   */
  throttle(fn: Function, delay?: number, option?: object): Function

  /**
   *
   * @description 防抖装饰器
   * @param { Number } [delay] 需要延迟的毫秒数
   * @param { Object } [options] 可选参数
   * @param { Boolean } [options.leading] 指定调用在防抖开始前，默认为 false
   * @param { Number } [options.maxWait] 设置func允许被延迟的最大值
   * @param { Boolean } [options.trailing] 指定调用在防抖结束后，默认为 true
   * @returns { Function }
   * @example
   * ```typescript
   * @utils.decorator(800) // 在需要防抖的方法上添加装饰器进行包装
   * inputEnter(e) {}
   * ```
   *
   */
  debounceWrap(delay?: number, option?: object): Function

  /**
   *
   * @description 防抖装饰器
   * @param { Function } [fn] 需要防抖的函数
   * @param { Number } [delay] 需要延迟的毫秒数
   * @param { Object } [options] 可选参数
   * @param { Boolean } [options.leading] 指定调用在防抖开始前，默认为 false
   * @param { Number } [options.maxWait] 设置func允许被延迟的最大值
   * @param { Boolean } [options.trailing] 指定调用在防抖结束后，默认为 true
   * @returns { Function }
   * @example
   * ```typescript
   * const func = () => { doSomething() }
   * const funcThrottle = utils.debounce(func)
   * ```
   *
   */
  debounce(fn: Function, delay?: number, option?: object): Function
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

interface LodashTool {
  /**
   * @description get方法，用于解决a.b.c.d出现undefined导致代码保存不继续向下执行
   * @param {Object} [object] 目标对象
   * @param {String} [path] 需要取值路径
   * @param {*} [defaultVal] 值不存在时候的默认值
   * @return {any} 获取到的值
   * ``` typescript
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   * utils._get(object, 'a[0].b.c'); // => 3 （推荐使用）
   * utils._get(object, ['a', '0', 'b', 'c']); // => 3
   * utils._get(object, 'a.b.c', 'default'); // => 'default' （推荐使用）
   */
  _get(object: object, path: string, defaultVal?: any): any

  /**
   * @description 该方法类似find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
   * @param {Array} [array] 目标对象
   * @returns {Number} -1为没找到对应的值，其余为数组对应的index
   * @example
   * * array = [
   * *   { 'user': 'barney', 'active': false },
   * *   { 'user': 'fred', 'active': false },
   * *   { 'user': 'pebbles', 'active': true }
   * * ]
   * * utils._findIndex(array, function(o) { return o.user == 'barney'; }) => 0
   * * utils._findIndex(array, { 'user': 'fred', 'active': false }) => 1 （推荐使用）
   * * utils._findIndex(array, ['active', false]) => 0 （推荐使用）
   * * utils._findIndex(array, 'active') => 2 （推荐使用）
   */
  _findIndex(array: Array<any>, predicate: any, fromIndex?: number): number

  /**
   * @description 该方法类似find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
   * @param {Array} [array] 目标对象
   * @returns {Number} -1为没找到对应的值，其余为数组对应的index
   * @example
   * * array = [
   * *   { 'user': 'barney', 'active': false },
   * *   { 'user': 'fred', 'active': false },
   * *   { 'user': 'pebbles', 'active': true }
   * * ]
   * * utils._findLastIndex(array, function(o) { return o.user == 'pebbles'; }) => 2
   * * utils._findLastIndex(array, { 'user': 'barney', 'active': true }) => 0 （推荐使用）
   * * utils._findLastIndex(array, ['active', false]) => 2 （推荐使用）
   * * utils._findLastIndex(array, 'active') => 0 （推荐使用）
   */
  _findLastIndex(
    array: Array<any>,
    predicate: Array<any> | Function | object | string,
    fromIndex?: number
  ): number

  /**
   * @description 数组去重（纯数组）
   * @example
   * * var a =[1, 2, 1, 5, 1, 9]
   * * utils._uniq(a) => [1, 2, 5, 9]
   */
  _uniq(array: Array<any>): Array<any>

  /**
   * @description 创建一个从 object 中选中的 key 的对象。
   * @example
   * * var object = { 'a': 1, 'b': '2', 'c': 3 }
   * * utils._pick(object, ['a', 'c']) => { 'a': 1, 'c': 3 }
   */
  _pick(object: object, props: string | string[]): object

  /**
   * @description 反向版 pick
   * @example
   * * var object = { 'a': 1, 'b': '2', 'c': 3 }
   * * utils._pick(object, ['a', 'c']) => { 'b': '2' }
   */
  _omit(object: object, props: string | string[]): object

  /**
   * @description 判断是否为undefined
   * @returns 返回布尔值
   * @example
   * * var a
   * * utils._isUndefined(a) => true
   */
  _isUndefined(value: any): boolean

  /**
   * @description 判断是否为NaN
   * @returns 返回布尔值
   * @example
   * * var a = +'str'
   * * utils._isNaN(a) => true
   */
  _isNaN(value: any): boolean

  /**
   * @description 去除字符串首尾空格方法
   * @returns 返回去除后的字符串
   * @example
   * * var a = ' 123 '
   * * utils._Trim(a) = '123'
   */
  _trim(str: string, chars?: string): string

  /**
   * @description 检测是否是空对象
   * @returns { boolean }
   * @example
   * utils._isEmpty(null) true
   * utils._isEmpty([1, 2, 3]) true
   * utils._isEmpty({ 'a': 1 }) false
   *
   */
  _isEmpty(val: any): boolean

  /**
   * @description 对比两值是否相等
   * @returns { boolean }
   * @example
   * const a = {a:1}
   * const b = {a:1}
   * utils._isEqual(a, b) // true
   * a === b // false
   *
   */
  _isEqual(value: any, other: any): boolean

  /**
   * @description 防抖
   * @param { Function } [func] 需要执行的函数
   * @param { Number } [delay] 需要延迟的毫秒数
   * @param { Object } [options] 可选参数
   * @param { Boolean } [options.leading] 指定调用在节流开始前
   * @param { Number } [options.maxWait] 设置func允许被延迟的最大值
   * @param { Boolean } [options.trailing] 指定调用在节流结束后
   * @returns { Function }
   * @example
   * utils._debounce(calculateLayout, 150)
   */
  _debounce(func: Function, delay?: number, options?: object): Function

  /**
   * @description 节流
   * @param { Function } [func] 需要执行的函数
   * @param { Number } [delay] 需要节流的毫秒数
   * @param { Object } [options] 可选参数
   * @param { Boolean } [options.leading] 指定调用在节流开始前
   * @param { Boolean } [options.trailing] 指定调用在节流结束后
   * @returns { Function }
   * @example
   * utils._throttle(() => {}, 100)
   *
   */
  _throttle(func: Function, delay?: number, options?: object): Function
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
export interface Types
  extends Index,
    Verify,
    Format,
    Is,
    Datefromat,
    Method,
    Url,
    Math,
    Uuid,
    LodashTool {}
