var only = function (obj, keys) {
  obj = obj || {}
  if (typeof keys === 'string') {
    keys = keys.split(/ +/)
  }
  return keys.reduce(function(accumulator, key) {
    if (null == obj[key]) {
      return accumulator
    } else {
      accumulator[key] = obj[key]
      return accumulator
    }
  }, {})
}