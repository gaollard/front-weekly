import { isChanged } from './isChanged'
import { createElement } from './createElement'
import { updateProps } from './updateProps'

export function updateElement ($parentNode, newNode, oldNode, index = 0) {
  if (!newNode) {
    $parentNode.removeChild(
      $parentNode.childNodes[index]
    )
  } else if (!oldNode) {
    $parentNode.appendChild(
      createElement(newNode)
    )
  } else if (isChanged(newNode, oldNode)) {
    $parentNode.replaceChild(
      createElement(newNode),
      $parentNode.childNodes[index]
    )
  } else if(newNode.type) {
    const newLength = newNode.children.length
    const oldLength = oldNode.children.length
    updateProps($parentNode.childNodes[index], newNode.props, oldNode.props)
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        $parentNode.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      )
    }
  }
}