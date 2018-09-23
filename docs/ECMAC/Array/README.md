![title](https://leanote.com/api/file/getImage?fileId=5ba2e90cab64413139001239)

### 自有属性

- length属性
- 表示下标元素的属性: 下标元素的个数 = length

### Array.prototype

- [x] constructor
funtion Array 构造函数

- [x] concat 
连接单个或者多个数组

- [x] copyWithin
改变当前数组

- [x] entries
返回Iterator对象

- [x] every
是否每个元素都满足条件

- [x] fill
填充数据

- [x] filter
按照指定条件进行数组过滤

- [x] find
返回满足条件的第一个元素

- [x] findIndex
返回满足条件的第一个元素的索引

- [x] forEach 循环
遍历数组并对每一个元素使用指定函数

- [x] includes
includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
`some` 接受的判断条件为函数，`includes` 接受的为元素项。而且判断符为: `===`。

- [x] indexOf
indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。而且判断符为: `===`。

- [x] join

join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串

```javascript
var elements = ['Fire', 'Wind', 'Rain', ["czxcz", "zzzz"], {"name": "gaollard"}];
console.log(elements.join()); // "Fire,Wind,Rain,czxcz,zzzz,[object Object]"
```

- [x] keys
keys() 方法返回一个包含数组中每个索引键的Array Iterator对象

```javascript
// keys
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr); // 索引迭代器会包含那些没有对应元素的索引
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]

// entries
var array1 = ['a', 'b', 'c'];
var iterator1 = array1.entries();
console.log(iterator1.next().value); // expected output: Array [0, "a"]
console.log(iterator1.next().value); // expected output: Array [1, "b"]
```

- [x] lastIndexOf
lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

```javascript
// arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo')); // expected output: 3
console.log(animals.lastIndexOf('Tiger')); // expected output: 1
```

- [x] map

map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```javascript
var array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
- pop

pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度

- [x] push

push() 方法将一个或多个元素添加到数组的末尾，并返回新数组的长度

- [x] reduce

reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。

- [x] reduceRight

reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

- [x] reverse

reverse() 方法将数组中元素的位置颠倒。第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。

- [x] shift

shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

- [x] slice

slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。

- [x] some

some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试

- [x] sort

sort() 方法用原地算法对数组的元素进行排序，并返回数组。排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。

由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。

- [x] splice

splice() 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。

- toLocalString:
- toString

对数组的每一个元素

- unshift:
- Symbol(Symbol.iterator):
- Symbol(Symbol.unscopables): 