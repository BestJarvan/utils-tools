/**
 * @ignore
 * @description 解析JSON Object，并加入异常处理
 */
export declare function json(str: string, def?: any): any
/**
 * @ignore
 * @description 检测是否是钉钉环境
 */
export declare function isDingTalk(): boolean
/**
 * @ignore
 * @description 是否为开发环境
 */
export declare function isDevEnv(): boolean
/**
 * @ignore
 * @description 计算字符长度：汉字为1，英文字母为0.5，结果取整
 */
export declare function getByteLen(val: string | undefined | null): number
/**
 * @ignore
 * @description 深拷贝
 */
export declare function deepClone(source: any, nullVal?: null | undefined): any
/**
 * @ignore
 * @description json 返回指定列
 */
export declare function getParamValues(name: number, arr: Array<any[]>): Array<any>
/**
 * @ignore
 * @description 1和0互相转换，取反函数
 */
export declare function reverseNum(num: number | string): number | void
/**
 * @ignore
 * @description 检测对象类型
 */
export declare function getObjectType(obj: any): string
/**
 * @ignore
 * @description 对象数组去重
 */
export declare function noRepeatArray(repeatArray: Array<any>, attr: string): any[]
/**
 * @ignore
 * @description 判断当前是否在外链表单页面中
 */
export declare function isOuterLinkEnv(): boolean
/**
 *
 * @ignore
 * @description 获取浏览器信息
 */
export declare function browser(): string
/**
 * @ignore
 * @description 获取图片地址
 */
export declare function thumbnail(img: string | string[], size?: number): string
