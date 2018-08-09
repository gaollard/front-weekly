class Store {
  constructor (options) {
    this.receivers = []
    this.state = options.state
    this.actions = options.actions
  }

  listen (receiver) {
    this.receivers.push(receiver)
  }

  dispatch (actionType) {
    console.log(this)
    const action = this.actions[actionType].bind(this)
    action()
  }
}

const store = new Store({
  state: {
    count: 0
  },
  actions: {
    increase: (params) => {
      console.log(this)
      // ++this.state.count
    },
    decrease: (params) => {
      --this.state.count
    }
  },
  commit: {
    increase: (params) => {
      ++this.state.count
    },
    decrease: (params) => {
      --this.state.count
    }
  }
})

const obj1 = {
  name: 'obj1'
}

const obj2 = {
  name: 'obj2'
}

store.dispatch('increase')
store.listen(obj1)

// console.log(store)