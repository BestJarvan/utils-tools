/**
 *
 * @ignore
 * @return {number} 格式化时间 支持自定义分隔符
 *
 */
export declare function formatTime(value: number, format?: string): string;
/**
 *
 * @ignore
 * @return {string} 返回格式化后的时间
 *
 */
export declare function formatHourTime(value: number, hasHour?: boolean): string;
/**
 *
 * @ignore
 * @return {number} 返回当前系统时间戳 13位 | 10位
 *
 */
export declare function now(long?: boolean): number;
/**
 * @ignore
 * @description 拷贝日期对象
 *
 */
export declare function cloneDate(val: Date): Date;
/**
 * @ignore
 * @description 因为toIOSString默认转为格林尼治时间，所以在转换之前需要额外加上8个小时
 */
export declare function timeZone(time: Date): Date;
/**
 * @ignore
 * @description 判断日期格式是否正确,有效返回new date()日期格式， 无效返回当前日期
 */
export declare function formatEffectiveDate(date?: any): Date;
/**
 *
 * @ignore
 * @description 转化时间格式
 */
declare type dateType = Date | string | number;
<<<<<<< HEAD
/**
 *
 * @ignore
 * @description 转化时间格式
 */
=======
>>>>>>> feature/lodash
export declare function formatDate(d: dateType, type?: string): string;
/**
 * @ignore
 * @description 与现在时间做比较
 */
export declare function formatTimeCompare(time?: number | string): string | void;
/**
 * @ignore
 * @description 获取指定日期前后n天的日期,如果没有指定日期，则是当前日期n天的前后
 */
export declare function getDay(addDayCount: number, appointedDate: number | string | Date, type?: string): string;
/**
 * @ignore
 * @description 获取指定日期前后n个月的日期,如果没有指定日期，则是当前日期的前后n个月
 */
export declare function getMonthDay(monthNum: number, appointedDate: string | number | Date, type?: string): string;
/**
 * @ignore
 * @description 获取指定日期前后n年的日期,如果没有指定日期，则是当前日期n年的前后
 */
export declare function getYearDay(addYearCount: number, appointedDate: any, type?: string): string;
/**
 * @ignore
 * @description 将时间戳转换为日期格式
 */
export declare function timestampToTime<T>(timestamp: T): object | T;
/**
 * @ignore
 * @description: 将时间戳转成指定的格式
 */
export declare function timestampToTimeString(timestamp: string | number, type: string): string;
/**
 * @ignore
 * @description 将日期转换为时间戳的格式
 */
export declare function timeToTimestamp(time: string): string | number;
<<<<<<< HEAD
/**
 * @ignore
 * @description 将秒数转为HH:MM:SS格式
 */
export declare function formatSecond(s: number): string;
=======
>>>>>>> feature/lodash
export {};
