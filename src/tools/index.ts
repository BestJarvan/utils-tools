export function mixin<T, U>(to: T, from: Array<U>): T {
  from.forEach(obj => {
    Object.getOwnPropertyNames(obj).forEach(key => {
      to[key] = obj[key]
    })
  })
  return to
}
