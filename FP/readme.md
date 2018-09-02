### 编程范式：

- 命令式编程(Imperative)
- 声明式编程(Declarative)
- 函数式编程(Functional)

面向对象、泛型、元编程 也都是很主要的编程范式

**命令式编程**: 命令式编程的主要思想是关注计算机执行的步骤，即一步一步告诉计算机先做什么再做什么

**声明式编程**: 声明式编程是以数据结构的形式来表达程序执行的逻辑

**函数式编程**: 函数式编程和声明式编程是有所关联的，因为他们思想是一致的：即只关注做什么而不是怎么做

针对“将数组元素的的每项变为原来的2倍” 体验命令式编程和声明式编程的区别

```
// 命令式编程
const double = (list) => {
  let result = []
  for (let i = 0; i < list.length; i++) {
    result[i] = 2 * i
  }
  return result
}

// 声明式编程
const list = []
const result = list.map(item => 2 * item)
```

### 头等函数(first-class function)

### 高阶函数(high-order function)
- 接受一个或多个函数作为输入
- 或输出一个函数

### 纯函数(pure function)

满足纯函数的条件: 1⃣️ 函数的执行结果只依赖于它的参数, 2⃣️ 函数在执行过程里面没有副作用

```
const root = window
const reactive = (name => {
  console.log(name, root)
})

// reactive 不是纯函数，因为它的执行依赖函数的外部变量 root
```

DOM操作/数据库操作等具有副作用，因为它们改变了外部数据

**纯函数的优点**

- 可读性好: 可读性好来自于它的0耦合性
- 代码可测: 代码可测来自于它的0耦合性
- 易于复用: 纯函数作为计算单元, 0耦合性, 高内聚, 天生具有模块化的优点