# 日期

`DateUtils` 是一个用于处理日期和时间的工具类，提供了多种方法来格式化、解析、比较和操作日期。


## `format`

**作用：**
将日期对象、时间戳或日期字符串格式化为指定格式的字符串。

**示例：**
```ts
console.log(DateUtils.format(new Date(), 'YYYY-MM-DD HH:mm:ss'));
console.log(DateUtils.format(1700000000000, 'YYYY/MM/DD'));
console.log(DateUtils.format('2025-03-21', 'MM-DD-YYYY'));
```


## `parse`

**作用：**
将符合指定格式的字符串解析为 `Date` 对象。

**示例：**
```ts
const date = DateUtils.parse('2025/03/21', 'YYYY/MM/DD');
console.log(date);
```


## `compare`

**作用：**
比较两个日期的时间先后，返回正数、负数或 0。

**示例：**
```ts
console.log(DateUtils.compare('2025-03-21', '2025-03-22')); // -86400000
console.log(DateUtils.compare(new Date(), new Date())); // 0
```


## `add`

**作用：**
对指定日期进行加减运算。

**示例：**
```ts
console.log(DateUtils.add('2025-03-21', 1, 'day')); // 增加 1 天
console.log(DateUtils.add(new Date(), -1, 'month')); // 减少 1 个月
```


## `diff`

**作用：**
计算两个日期之间的差值。

**示例：**
```ts
console.log(DateUtils.diff('2025-03-21', '2025-03-22', 'day')); // 1
console.log(DateUtils.diff('2025-01-01', '2025-12-31', 'month')); // 11
```


##  `isValid`

**作用：**
检查给定的值是否是有效日期。

**示例：**
```ts
console.log(DateUtils.isValid('2025-03-21')); // true
console.log(DateUtils.isValid('invalid-date')); // false
```


## `isLeapYear`

**作用：**
判断某一年是否为闰年。

**示例：**
```ts
console.log(DateUtils.isLeapYear(2024)); // true
console.log(DateUtils.isLeapYear(2025)); // false
```


## `getDaysInMonth`

**作用：**
获取指定年月的天数。

**示例：**
```ts
console.log(DateUtils.getDaysInMonth(2024, 1)); // 29（闰年 2 月）
console.log(DateUtils.getDaysInMonth(2025, 2)); // 28
```


##  `getDateRange`

**作用：**
返回两个日期之间的所有日期数组。

**示例：**
```ts
console.log(DateUtils.getDateRange('2025-03-21', '2025-03-25'));
```


##  `getRelativeTime`

**作用：**
返回基于当前时间的相对时间描述，例如“刚刚”、“3 天前”。

**示例：**
```ts
console.log(DateUtils.getRelativeTime(new Date())); // 刚刚
console.log(DateUtils.getRelativeTime('2025-03-19')); // 2 天前
```






























