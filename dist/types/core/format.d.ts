/**
 *
 * @ignore
 * @return {string} 不满两位前位补0
 *
 */
export declare function formatAddZero(value: number | string): string;
/**
 *
 * @ignore
 * @return {string} 手机号脱敏处理
 *
 */
export declare function dstMobile(mobile: string): string;
/**
 *
 * @ignore
 * @return {number} 最大最小值之间取随机数
 *
 */
export declare function random(max: number, min?: number): number;
/**
 *
 * @ignore
 * @return {string} 生产随机手机号
 *
 */
export declare function creatMobile(dst?: boolean): string;
/**
 *
 * @ignore
 * @return {number} 格式化手机号格式 132 5555 6666
 *
 */
export declare function formatPhone(phone: string): string;
/**
 *
 * @ignore
 * @return {object} 解析url拼接参数 返回一个params 对象
 *
 */
export declare function parseParams(value: string): object;
/**
 *
 * @ignore
 * @return {object} 解析params对象返回一个url拼接参数
 *
 */
export declare function formatParams(params: any): string;
/**
 * @ignore
 * @return {object} 十六进制颜色转rgba
 */
export declare function hexToRgba(hex: string, opacity?: number | string): string;
