/**
 * @ignore
 * 方法类
 */
/**
 * @ignore
 * 防抖函数
 * 默认调用在防抖开始后
 */
export declare function debounce(fn: any, delay?: number, option?: {}): import("lodash").DebouncedFunc<any>;
/**
 * @ignore
 * 防抖装饰器
 * 默认调用在防抖开始后
 */
export declare function debounceWrap(delay?: number, option?: {}): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * @ignore
 * 节流函数
 * 默认调用在节流开始前
 */
export declare function throttle(fn: any, delay?: number, option?: {}): import("lodash").DebouncedFunc<any>;
/**
 * @ignore
 * 节流装饰器
 * 默认调用在节流开始前
 */
export declare function throttleWrap(delay?: number, option?: {}): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
