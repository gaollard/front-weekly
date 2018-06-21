# only

Return whitelisted properties of an object

## Usage

```
var obj = {
  name: 'lard',
  age: 25,
  email: 'tobi@learnboost.com'
};

var user = only(obj, 'name age');

// or

var user = only(obj, ['name', 'age']);
```

**yields**

```
{
  name: 'age',
  last: 25,
}
```