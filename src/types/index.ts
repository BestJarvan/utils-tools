interface Env {
  /**
   *
   * 返回当前浏览器所在系统
   * @return {string} ios | android | winPhone | unknown
   * @author Jarvan
   * ``` typescript
   * const systemOs = utils.getOs()
   * ```
   *
   */
  getOs(): string

  /**
   *
   * 判断当前浏览器是移动端还是pc端
   * @return {boolean} pc: true; mobile: false
   * @author Jarvan
   * ``` typescript
   * const env = utils.getEnv()
   * ```
   */
  getEnv(): boolean

  /**
   *
   * 判断IE版本
   * @return {number | string} -1: 非IE; 6 - 11: IE6-IE11版本; edge: Edge浏览器;
   * @author Jarvan
   * ``` typescript
   * const ieVersion = utils.getIEVersion()
   * ```
   */
  getIEVersion(): string | number
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
   * utils.formatNumber(1)    // '01'
   * utils.formatNumber('1')  // '01'
   * utils.formatNumber(12)   // '12'
   * utils.formatNumber('12') // '12'
   * ```
   *
   */
  formatNumber(value: number | string): string

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

interface Date {
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
   * 格式化时间 支持自定义格式 参考element-ui的时间格式
   * @param long 是否需要 10位或者13位时间戳 默认为 10位时间戳
   * @return {string} '2020-04-25 22:00:00'
   * @author Jarvan
   * ``` typescript
   * utils.now()      // 1587823200
   * utils.now(true)  // 1587823200000
   * ```
   *
   */
  now(long?: boolean): string
}

/**
 *
 * @ignore
 *
 */
export interface Types extends Env, Verify, Format, Is, Date {}
