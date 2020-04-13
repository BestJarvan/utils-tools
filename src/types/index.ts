interface Env {
  /**
   *
   *  返回当前浏览器所在系统
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

/**
 *
 * @ignore
 *
 */
export interface Types extends Env {}
