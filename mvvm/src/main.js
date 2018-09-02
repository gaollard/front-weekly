import { vnode } from './core/vnode/node'
import { createElement } from './core/vnode/createElement'
import { updateElement } from './core/vnode/updateElement'
import { updateProps } from './core/vnode/updateProps'

const oldNode = (
  <div id="_Q5" style="border: 1px solid red;">
      <div style="text-align: center; margin: 36px auto 18px; width: 160px; line-height: 0;">
          <img src="http://mall.airtlab.com/static/img/b3.f4be826.png" width="100%" style="border: none; margin: 8px 0px;"></img>
          <p onClick={ () => { console.log(1) }}>hello world!</p>
      </div>
  </div>
)

function test () {
  console.log(this)
}
const newTest = test.bind(window)

// const newNode = (
//   <div id="_Q6" style="border: 1px solid blue;">
//       <div style="text-align: center; margin: 36px auto 18px; width: 160px; line-height: 0;">
//           <img src="http://mall.airtlab.com/static/img/b1.524e4cf.jpg" width="100%" style="border: none; margin: 8px 0px;"></img>
//           <p onClick={ newTest }>hello world!</p>
//       </div>
//   </div>
// )

const newNode = (
  <div id="_Q6" style="border: 1px solid blue;">
      <div style="text-align: center; margin: 36px auto 18px; width: 160px; line-height: 0;">
          <img src="http://mall.airtlab.com/static/img/b1.524e4cf.jpg" width="100%" style="border: none; margin: 8px 0px;"></img>
          <p>hello world!</p>
      </div>
  </div>
)

let app = document.querySelector('#app')
app.appendChild(createElement(oldNode))

setTimeout(() => {
  updateElement(app, newNode, oldNode, 0)
}, 3000)