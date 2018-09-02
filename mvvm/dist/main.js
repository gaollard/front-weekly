/* arraybuffer */
'use strict';

/**
 * virtual dom abstract
 * @param { String } type
 * @param { Object } props
 * @param { Arrary } children
 * For Exmaple: 
 */

function vnode(type, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return { type: type, props: props, children: children };
}

function removeBooleanProp($target, name) {
  $target.removeAttribute(name);
  $target[name] = false;
}

function removeProp($target, name, value) {
  if (typeof value === 'boolean') {
    removeBooleanProp($target, name);
  } else {
    $target.removeAttribute(name);
  }
}

function setBooleanProp($target, name, value) {
  if (value) {
    $target.setAttribute(name, value);
    $target[name] = true;
  } else {
    $target[name] = false;
  }
}

function setProp($target, name, value) {
  if (typeof value === "boolean") {
    setBooleanProp($target, name, value);
  } else {
    $target.setAttribute(name, value);
  }
}

function isEventProp(name) {
  return (/^on/.test(name)
  );
}

function extractEventName(name) {
  return name.slice(2).toLowerCase();
}

function updateProp($target, name, newVal, oldVal) {
  if (!newVal) {
    if (isEventProp(name)) {
      $target.removeEventListener(extractEventName(name), oldVal);
    } else {
      removeProp($target, name, oldVal);
    }
  } else if (!oldVal || newVal !== oldVal) {
    if (isEventProp(name)) {
      $target.addEventListener(extractEventName(name), newVal);
    } else {
      setProp($target, name, newVal);
    }
  }
}

function updateProps($target, newProps) {
  var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var props = Object.assign({}, newProps, oldProps);
  Object.keys(props).forEach(function (name) {
    updateProp($target, name, newProps[name], oldProps[name]);
  });
}

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  var $element = document.createElement(node.type);
  updateProps($element, node.props);

  node.children.forEach(function (element) {
    $element.appendChild(createElement(element));
  });

  return $element;
}

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isChanged(newVnode, oldVNode) {
  var result = newVnode.type !== oldVNode.type;
  if (result) {
    return result;
  }

  if ((typeof newVnode === 'undefined' ? 'undefined' : _typeof$1(newVnode)) !== (typeof oldVNode === 'undefined' ? 'undefined' : _typeof$1(oldVNode))) {
    return true;
  }

  if (typeof newVnode === 'string') {
    if (newVnode !== oldVNode) {
      return true;
    }
  }

  var _props = Object.assign({}, oldVNode.props, newVnode.props);

  for (var key in _props) {
    if (_props.hasOwnProperty(key)) {
      if (newVnode.props[key] !== oldVNode.props[key]) {
        return true;
      }
    }
  }
  return false;
}

function updateElement($parentNode, newNode, oldNode) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!newNode) {
    $parentNode.removeChild($parentNode.childNodes[index]);
  } else if (!oldNode) {
    $parentNode.appendChild(createElement(newNode));
  } else if (isChanged(newNode, oldNode)) {
    $parentNode.replaceChild(createElement(newNode), $parentNode.childNodes[index]);
  } else if (newNode.type) {
    var newLength = newNode.children.length;
    var oldLength = oldNode.children.length;
    updateProps($parentNode.childNodes[index], newNode.props, oldNode.props);
    for (var i = 0; i < newLength || i < oldLength; i++) {
      updateElement($parentNode.childNodes[index], newNode.children[i], oldNode.children[i], i);
    }
  }
}

var oldNode = vnode(
    'div',
    { id: '_Q5', style: 'border: 1px solid red;' },
    vnode(
        'div',
        { style: 'text-align: center; margin: 36px auto 18px; width: 160px; line-height: 0;' },
        vnode('img', { src: 'http://mall.airtlab.com/static/img/b3.f4be826.png', width: '100%', style: 'border: none; margin: 8px 0px;' }),
        vnode(
            'p',
            { onClick: function onClick() {
                    console.log(1);
                } },
            'hello world!'
        )
    )
);

function test() {
    console.log(this);
}
var newTest = test.bind(window);

// const newNode = (
//   <div id="_Q6" style="border: 1px solid blue;">
//       <div style="text-align: center; margin: 36px auto 18px; width: 160px; line-height: 0;">
//           <img src="http://mall.airtlab.com/static/img/b1.524e4cf.jpg" width="100%" style="border: none; margin: 8px 0px;"></img>
//           <p onClick={ newTest }>hello world!</p>
//       </div>
//   </div>
// )

var newNode = vnode(
    'div',
    { id: '_Q6', style: 'border: 1px solid blue;' },
    vnode(
        'div',
        { style: 'text-align: center; margin: 36px auto 18px; width: 160px; line-height: 0;' },
        vnode('img', { src: 'http://mall.airtlab.com/static/img/b1.524e4cf.jpg', width: '100%', style: 'border: none; margin: 8px 0px;' }),
        vnode(
            'p',
            null,
            'hello world!'
        )
    )
);

var app = document.querySelector('#app');
app.appendChild(createElement(oldNode));

setTimeout(function () {
    updateElement(app, newNode, oldNode, 0);
}, 3000);
