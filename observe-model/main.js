class Observer {

  constructor (options) {
    this._eventListeners = {}
  }

  on (eventType, handler) {
    let handlerArray = []
    let index
    if (typeof handler !== 'function') {
      handlerArray = handler
    } else {
      handlerArray = [handler]
    }
    if (this._eventListeners[eventType]) {
      for (index = 0; index < handlerArray.length; index++) {
        this._eventListeners[eventType].push(handlerArray[index])
      }
    } else {
      this._eventListeners[eventType] = handlerArray
    }
    return this
  }

  once (eventType, handler) {
    const that = this
    const proxyHandler = function (...args) {
      handler(...args)
      that.off(eventType, proxyHandler)
    }
    return this.on(eventType, proxyHandler)
  }

  emit(eventType) {
    let args = [...arguments]
    args.splice(0, 1)
    const handlers = this._eventListeners[eventType]
    if (handlers && handlers.length) {
      handlers.forEach(handler => {
        handler(...args)
      })
    }
    return this
  }

  off (eventType, handler) {
    let handlers = this._eventListeners[eventType]
    if (handlers.length === 0) {
      return
    }
    if (typeof handler === 'function') {
      for (let index = 0; index < handlers.length; index++) {
        if (handlers[index] === handler) {
          handlers.splice(index, 1)
        }
      }
    } else {
      this._eventListeners[eventType] = []
    }
    return this
  }
}

class Vue {

  constructor (options) {
    this._init(options)
    this.render()
  }

  _init (options) {
    this.observer = new Observer()
    this.observer.on('render', () => {
      this.render()
    })
    this.template = options.template
    this.el = options.el
    for (let key in options.data) {
      this['_' + key] = options.data[key]
      Object.defineProperty(this, key, {
        get () {
          return this['_' + key]
        },
        set (val) {
          this['_' + key] = val
          this.observer.emit('render')
        }
      })
    }    
  }

  render () {
    if (!this.$el) {
      this.$el = document.querySelector(this.el)
    }
    this.$el.innerHTML = this.template.replace(/{ name }/, this.name)
  }
}

const vm = new Vue({
  el: '#app',
  template: '<div>{ name }</div>',
  data: {
    name: 'gaollard'
  },
  methods: {

  }
})