import F7 from './core/F7'

class HomeController extends F7.Controller {
  constructor () {
    super()
    this.init()
  }
  init () {
    console.log('init')
  }
}

class HomeModel extends F7.Model {

}

class HomeView extends F7.View {

}

var hc = new HomeController();

console.log(hc)