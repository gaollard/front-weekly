export function isChanged (newVnode, oldVNode) {
  let result = newVnode.type !== oldVNode.type
  if (result) {
    return result
  }


  if (typeof newVnode !== typeof oldVNode) {
    return true
  }

  if (typeof newVnode === 'string') {
    if (newVnode !== oldVNode) {
      return true
    }
  }

  const _props = Object.assign({}, oldVNode.props, newVnode.props)

  for (let key in _props) {
    if (_props.hasOwnProperty(key)) {
      if (newVnode.props[key] !== oldVNode.props[key]) {
        return true
      }
    }
  }
  return false
}