/**
 * @ignore
 * 加法
 */
export declare function plus(
  num1: number | string,
  num2: number | string,
  n?: number
): number | string
/**
 * @ignore
 * 减法
 */
export declare function subtract(
  num1: number | string,
  num2: number | string,
  n?: number
): number | string
/**
 * @ignore
 * 乘法
 */
export declare function multiply(
  num1: number | string,
  num2: number | string,
  n?: number
): number | string
/**
 * @ignore
 * 除法
 */
export declare function divide(
  num1: number | string,
  num2: number | string,
  n?: number
): number | string
/**
 * @ignore
 * 科学记数法正常显示
 */
export declare function scientificNumber(num: number | string): number | string
/**
 * @ignore
 * @description: 用于资金金额的计算（去除'，'）
 */
export declare function formatToNumber(num: number | string): number
/**
 * @ignore
 * @description 千分符，数字三位一隔开 （1000000 => 1,000,000)
 */
export declare function dealNumber(num: number | string): number | string
