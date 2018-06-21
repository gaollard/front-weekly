encodeURI
---

`encodeURI()`  函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 (该字符的 UTF-8 编码仅为四转义序列)由两个 "代理" 字符组成)。


### 语法

```
encodeURI(URI)
```

- 参数
  - URI 一个完整的URI
- 返回值 一个新字符串, 表示提供的字符串编码为统一资源标识符 (URI)


### 描述

假定一个URI是完整的URI，那么无需对那些保留的并且在URI中有特殊意思的字符进行编码。

> http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor

| 类型 | 包含 |
| - | - |
| 保留字符 | `; , / ? : @ & = + $` |
| 非转义的字符 | 字母 数字 - _ . ! ~ * ' ( ) |
| 数字符号 | # |