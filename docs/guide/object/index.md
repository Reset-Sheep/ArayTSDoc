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