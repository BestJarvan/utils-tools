/**
 * 判断是否为对象类型, 这里 和 isPlainObject 的区别是 isObject 为数组、FormData 都会返回 true
 * @param value 需要检测的值
 * @return 返回 true 或者 false
 * @author jarvan
 * ```typescript
 *
 * const flag = inyUtils.isObject({})
 * // flag === true
 * ```
 */
interface Us {
  name: string
  age?: string | number
}
function hello(obj: Us): void {
  console.log(`Hello from ${obj.name}, ${obj.age}asdsad`)
  const s = 1223213232132
  console.log(s + 1)
}
let obj = { name: 'sss', age: 2 }
hello(obj)
