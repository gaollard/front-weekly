function debounce (func, wait, option) {

  let timeId,
    lastCallTime,
    lastInvokeTime

  wait = +wait || 0

  function shouldInvoke (time) {
    const timeSinceLastCall = time - lastCallTime
    return (
      (lastCallTime === undefined) ||
      (timeSinceLastCall >= wait)
    )
  }

  function refreshTimeId () {
    timerId = setTimeout(() => {
      func()
      timerId = undefined
    }, wait)
  }

  function debounced () {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastCallTime = time
    if (isInvoking) {
      refreshTimeId()
    } else {
      clearTimeout(timerId)
      refreshTimeId()
    }
  }
  return debounced
}