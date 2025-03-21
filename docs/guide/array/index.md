# 数组

`ArrayUtils` 是一个实用的 JavaScript/TypeScript 数组操作工具类，提供了常见的数组处理方法，如去重、分组、排序、交集、差集、分页等。适用于日常开发中处理数组数据，提高代码可读性和开发效率。

## `unique`
**作用**：对数组去重，返回一个不包含重复元素的新数组。

**示例**：
```ts
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(ArrayUtils.unique(numbers)); // [1, 2, 3, 4, 5]
```


## `flatten`
**作用**：将多维数组转换为一维数组。

**示例**：
```ts
const nestedArray = [1, [2, [3, 4]], 5];
console.log(ArrayUtils.flatten(nestedArray)); // [1, 2, 3, 4, 5]
```

## `groupBy`
**作用**：根据对象数组中的指定字段对数据进行分组。

**示例**：
```ts
const users = [
  { id: 1, group: 'A' },
  { id: 2, group: 'B' },
  { id: 3, group: 'A' }
];
console.log(ArrayUtils.groupBy(users, 'group'));
/* 输出：
{
  A: [{ id: 1, group: 'A' }, { id: 3, group: 'A' }],
  B: [{ id: 2, group: 'B' }]
}
*/
```

## `sortBy`
**作用**：按指定字段排序，可支持多字段排序。

**示例**：
```ts
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 23 }
];
console.log(ArrayUtils.sortBy(users, 'age'));
/* 输出：
[
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 23 },
  { id: 1, name: 'Alice', age: 25 }
]
*/
```


## `intersection`
**作用**：计算多个数组的交集，即返回同时存在于所有数组中的元素。

**示例**：
```ts
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 5];
console.log(ArrayUtils.intersection(arr1, arr2)); // [2, 3]
```


## `difference`
**作用**：计算两个数组的差集，即返回在第一个数组中但不在第二个数组中的元素。

**示例**：
```ts
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3];
console.log(ArrayUtils.difference(arr1, arr2)); // [1, 4]
```


## `chunk`
**作用**：将数组按指定大小进行分块，返回一个二维数组。

**示例**：
```ts
const numbers = [1, 2, 3, 4, 5, 6];
console.log(ArrayUtils.chunk(numbers, 2));
/* 输出：
[
  [1, 2],
  [3, 4],
  [5, 6]
]
*/
```


##  `shuffle`
**作用**：随机打乱数组顺序。

**示例**：
```ts
const numbers = [1, 2, 3, 4, 5];
console.log(ArrayUtils.shuffle(numbers)); // 结果随机
```


##  `toTree`
**作用**：将扁平化数组转换为树形结构，适用于存储层级关系的数据。

**示例**：
```ts
const items = [
  { id: 1, parentId: null, name: 'Root' },
  { id: 2, parentId: 1, name: 'Child 1' },
  { id: 3, parentId: 1, name: 'Child 2' }
];
console.log(ArrayUtils.toTree(items));
/* 输出：
[
  {
    id: 1,
    parentId: null,
    name: 'Root',
    children: [
      { id: 2, parentId: 1, name: 'Child 1', children: [] },
      { id: 3, parentId: 1, name: 'Child 2', children: [] }
    ]
  }
]
*/
```

`ArrayUtils` 提供了一系列强大的数组操作方法，能够帮助开发者更高效地处理数组数据。希望本手册能帮助你更好地理解和使用这些方法，提高开发效率！

