# 对象

`ObjectUtils` 是一个工具类，提供了一些常用的对象操作方法，包括深拷贝、对象合并、获取对象属性、判断对象是否为空，以及剔除指定属性。以下是每个方法的详细说明及代码示例：。

##  `deepClone`

**作用：**
深拷贝一个对象。该方法会递归复制对象的所有属性，保证拷贝后的对象与原对象不共享内存空间。

**参数**
- `obj`: 需要拷贝的对象。

**返回值：**
返回一个新的深拷贝对象。

**示例：**
```typescript
const original = { a: 1, b: { c: 2 } };
const cloned = ObjectUtils.deepClone(original);
cloned.b.c = 3;

console.log(original.b.c); // 2
console.log(cloned.b.c); // 3
```

##  `merge`

**作用：**
将一个或多个源对象的属性合并到目标对象中。若属性冲突，后面的源对象的属性会覆盖前面的属性。

**参数**
- `target`: 目标对象，合并后的对象将会覆盖此对象。
- `sources`: 一个或多个源对象。

**返回值：**
返回合并后的对象。

**示例：**
```typescript
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { d: 5 };

const merged = ObjectUtils.merge(target, source1, source2);
console.log(merged); // { a: 1, b: 3, c: 4, d: 5 }
```

## `get`

**作用：**
获取对象指定路径的值。支持通过点 `.` 符号访问嵌套的属性。如果路径不存在，则返回 `defaultValue`。

**参数**
- `obj`: 源对象。
- `path`: 需要获取的路径，可以是多个层级，通过 `.` 分隔。
- `defaultValue`: 如果路径不存在，返回的默认值。

**返回值：**
返回路径对应的值，若路径不存在，则返回 `defaultValue`。

**示例：**
```typescript
const obj = { a: { b: { c: 3 } } };
const value = ObjectUtils.get(obj, 'a.b.c');
console.log(value); // 3

const nonExistingValue = ObjectUtils.get(obj, 'a.b.d', 'default');
console.log(nonExistingValue); // default
```

## `isEmpty`

**作用：**
判断对象是否为空。若对象没有任何可枚举的属性，则认为对象为空。

**参数**
- `obj`: 需要判断的对象。

**返回值：**
返回一个布尔值，`true` 表示对象为空，`false` 表示对象不为空。

**示例：**
```typescript
const obj1 = {};
console.log(ObjectUtils.isEmpty(obj1)); // true

const obj2 = { a: 1 };
console.log(ObjectUtils.isEmpty(obj2)); // false
```

##  `omit`

**作用：**
剔除对象中的指定属性，或只保留指定的属性。可以通过 `exclude` 参数选择剔除或保留指定的属性。

**参数**
- `obj`: 源对象。
- `props`: 要剔除或保留的属性数组。
- `exclude`: 如果为 `true`，则剔除指定属性；如果为 `false`，则只保留指定属性。

**返回值：**
返回一个新对象，包含剔除或保留后的属性。

**示例：**
```typescript
const obj = { a: 1, b: 2, c: 3 };

const withoutB = ObjectUtils.omit(obj, ['b']);
console.log(withoutB); // { a: 1, c: 3 }

const onlyB = ObjectUtils.omit(obj, ['b'], false);
console.log(onlyB); // { b: 2 }
```

## `isEqual`

**作用：**
比较两个对象是否相等，支持深度比较。

**参数**
- `obj1`: 第一个对象。
- `obj2`: 第二个对象。

**返回值：**
返回 `true` 表示对象相等，`false` 表示不相等。

**示例：**
```typescript
console.log(ObjectUtils.isEqual({ a: 1 }, { a: 1 })); // true
console.log(ObjectUtils.isEqual({ a: 1 }, { a: 2 })); // false
```



## `flatten`

**作用：**
将嵌套对象扁平化，并使用指定的分隔符连接键。

**参数**
- `obj`: 需要扁平化的对象。
- `delimiter`: 用于分隔嵌套键的字符串，默认为 `.`。
- `prefix`: 递归时的前缀，默认 `''`。

**返回值：**
返回一个扁平化后的对象。

**示例：**
```typescript
const obj = { a: { b: { c: 1 } } };
console.log(ObjectUtils.flatten(obj)); // { 'a.b.c': 1 }
```



## `toQueryString`

**作用：**
将对象转换为 URL 查询字符串。

**参数**
- `obj`: 需要转换的对象。

**返回值：**
返回 URL 查询字符串。

**示例：**
```typescript
const obj = { a: 1, b: 2 };
console.log(ObjectUtils.toQueryString(obj)); // "a=1&b=2"
```



## `renameKeys`

**作用：**
重命名对象的属性。

**参数**
- `obj`: 源对象。
- `keysMap`: 旧键名与新键名的映射关系。

**返回值：**
返回一个新对象，其中的属性名称已更改。

**示例：**
```typescript
const obj = { a: 1, b: 2 };
console.log(ObjectUtils.renameKeys(obj, { a: 'x', b: 'y' })); // { x: 1, y: 2 }
```



## `filterProperties`

**作用：**
根据提供的回调函数筛选对象的属性。

**参数**
- `obj`: 需要筛选的对象。
- `predicate`: 过滤条件回调，接收属性值和键作为参数。

**返回值：**
返回筛选后的新对象。

**示例：**
```typescript
const obj = { a: 1, b: 2, c: 3 };
console.log(ObjectUtils.filterProperties(obj, (value) => value > 1)); // { b: 2, c: 3 }
```



## `deepMerge`

**作用：**
深度合并多个对象。

**参数**
- `target`: 目标对象。
- `...sources`: 需要合并的源对象。

**返回值：**
返回合并后的对象。

**示例：**
```typescript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 } };
console.log(ObjectUtils.deepMerge(obj1, obj2)); // { a: 1, b: { c: 2, d: 3 } }
```



## `toArray`

**作用：**
将对象转换为键值对数组。

**参数**
- `obj`: 需要转换的对象。

**返回值：**
返回一个包含键值对的数组。

**示例：**
```typescript
const obj = { a: 1, b: 2 };
console.log(ObjectUtils.toArray(obj)); // [['a', 1], ['b', 2]]
```



## `fromArray`

**作用：**
将键值对数组转换回对象。

**参数**
- `arr`: 包含键值对的数组。

**返回值：**
返回转换后的对象。

**示例：**
```typescript
const arr = [['a', 1], ['b', 2]];
console.log(ObjectUtils.fromArray(arr)); // { a: 1, b: 2 }
```



## `sort`

**作用：**
根据键对对象进行排序。

**参数**
- `obj`: 需要排序的对象。
- `compareFn`: 自定义排序函数，默认为按照键名的字母顺序排序。

**返回值：**
返回排序后的对象。

**示例：**
```typescript
const obj = { b: 2, a: 1 };
console.log(ObjectUtils.sort(obj)); // { a: 1, b: 2 }
```

## `isObject`

**作用：**
判断是否为对象。

**参数**
- `item`: 需要检查的值。

**返回值：**
如果 `item` 是对象且不是数组，则返回 `true`，否则返回 `false`。

**示例：**
```typescript
console.log(ObjectUtils.isObject({})); // true
console.log(ObjectUtils.isObject([])); // false
console.log(ObjectUtils.isObject(null)); // false
```