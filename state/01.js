/**
 * 假设我是前端小白，完全没有接触过状态管理。
 * 我只是希望当数据发生变化时，我的依赖部分会自动收到通知，类似于观察者模式
 */

class Store {

  constructor () {
    this.state = {
      count: 0
    }
    this.receivers = []
    this.actions = {
      increase: (params) => {
        ++this.state.count
        this.notify('count')
      },
      decrease: (params) => {
        --this.state.count
        this.notify('count')
      }
    }
  }

  /**
   * 触发事件
   */
  dispatch (action) {
    this.actions[action](...[].splice.call(arguments, 1))
  }

  /**
   * 添加接受者
   */
  listen (receiver) {
    this.receivers.push(receiver)
  }

  /**
   * 通知依赖方
   */
  notify (key) {
    for (let i = 0; i < this.receivers.length; i++) {
      this.receivers[i][key] = this.state[key]
      this.receivers[i].render()
    }
  }
}

const store = new Store()

const instance1 = {
  name: 'instance1',
  render () {
    console.log('instance1 receive data', this)
  }
}

const instance2 = {
  name: 'instance2',
  render () {
    console.log('instance2 receive data', this)
  }
}

store.listen(instance1)
store.dispatch('increase')

// 我现在，我的最初目的完成了，但是Store里面大部分方法都是写死的