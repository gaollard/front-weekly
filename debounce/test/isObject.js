// 函数科里化应用

function isType (type) {
  return function (value) {
    const currentType = typeof value
    if (type === 'object') {
      return currentType !== null && (currentType === 'object' || currentType === 'function')
    } else {
      return currentType === type
    }
  }
}

/**
 * Checks if `value` is the `object`
 * @param { String } type `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 * @returns { Boolean } Returns `true` if `value` is an object, else `false`.
 * @example
 * 
 * isObject({})
 * // true
 * 
 * isObject([1, 2, 3])
 * // true
 * 
 * isObject(Function)
 * // true
 * 
 * isObject(null)
 * // false
 */
const isObject = isType('object')