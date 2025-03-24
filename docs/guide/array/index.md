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

## `weightedRandom`
**作用**：根据给定的权重数组，随机选择源数组中的一个元素。

**示例**：
```ts
const items = ['apple', 'banana', 'cherry'];
const weights = [0.1, 0.3, 0.6];
console.log(ArrayUtils.weightedRandom(items, weights)); // 可能输出 'banana' 或 'cherry'
```

 

## `longestConsecutive`
**作用**：查找给定数字数组中的最长连续序列的长度。

**示例**：
```ts
const nums = [100, 4, 200, 1, 3, 2];
console.log(ArrayUtils.longestConsecutive(nums)); // 4, 连续序列是 [1, 2, 3, 4]
```

 

## `maxSlidingWindow`
**作用**：返回每个滑动窗口的最大值。

**示例**：
```ts
const nums = [1,3,-1,-3,5,3,6,7];
const k = 3;
console.log(ArrayUtils.maxSlidingWindow(nums, k)); // [3, 3, 5, 5, 6, 7]
```

 

## `groupByWithAggregates`
**作用**：对数组进行分组，并执行带条件的聚合操作（如求和、平均值、最大值等）。

**示例**：
```ts
const data = [
  { category: 'A', value: 10 },
  { category: 'A', value: 20 },
  { category: 'B', value: 5 }
];
const aggregates = {
  sumValue: { field: 'value', operation: 'sum' },
  avgValue: { field: 'value', operation: 'avg' }
};
console.log(ArrayUtils.groupByWithAggregates(data, 'category', aggregates));
/* 
{
  A: { sumValue: 30, avgValue: 15 },
  B: { sumValue: 5, avgValue: 5 }
}
*/
```

 

## `cartesianProduct`
**作用**：计算多个数组的笛卡尔积。

**示例**：
```ts
const nums = [1, 2];
const letters = ['a', 'b'];
console.log(ArrayUtils.cartesianProduct(nums, letters));
// [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```

 

## `rotate`
**作用**：将数组元素按照指定位置进行旋转。

**示例**：
```ts
const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(ArrayUtils.rotate(arr, k)); // [4, 5, 1, 2, 3]
```

 

## `median`
**作用**：计算数字数组的中位数。

**示例**：
```ts
const nums = [1, 3, 2];
console.log(ArrayUtils.median(nums)); // 2
```

 

## `filterDynamic`
**作用**：动态过滤数组，支持多条件查询。

**示例**：
```ts
const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const conditions = [
  { field: 'age', operator: '>', value: 28 }
];
console.log(ArrayUtils.filterDynamic(data, conditions)); 
// [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
```

 

## `move`
**作用**：移动数组中的元素，从一个索引移动到另一个索引。

**示例**：
```ts
const arr = [1, 2, 3, 4];
console.log(ArrayUtils.move(arr, 1, 3)); // [1, 3, 4, 2]
```

 

## `findPeakElement`
**作用**：查找数组中的峰值元素的索引，峰值元素满足其相邻元素比它小。

**示例**：
```ts
const arr = [1, 3, 2, 1];
console.log(ArrayUtils.findPeakElement(arr)); // 1
```

 

## `runningSum`
**作用**：返回数组的运行时累加和。

**示例**：
```ts
const arr = [1, 2, 3, 4];
console.log(ArrayUtils.runningSum(arr)); // [1, 3, 6, 10]
```

 

## `findClosest`
**作用**：查找数组中最接近目标值的元素。

**示例**：
```ts
const arr = [1, 3, 7, 10];
const target = 5;
console.log(ArrayUtils.findClosest(arr, target)); // 3
```

`ArrayUtils` 提供了一系列强大的数组操作方法，能够帮助开发者更高效地处理数组数据。希望本手册能帮助你更好地理解和使用这些方法，提高开发效率！

