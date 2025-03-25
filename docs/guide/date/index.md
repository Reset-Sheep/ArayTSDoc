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
## `startOfDay`

**作用：**  
获取指定日期的开始时间，即 `00:00:00.000`。

**示例：**  
```ts
console.log(DateUtils.startOfDay(new Date())); 
// 输出示例：2025-03-21T00:00:00.000Z
```



## `endOfDay`

**作用：**  
获取指定日期的结束时间，即 `23:59:59.999`。

**示例：**  
```ts
console.log(DateUtils.endOfDay(new Date())); 
// 输出示例：2025-03-21T23:59:59.999Z
```



## `startOfMonth`

**作用：**  
获取指定日期所在月份的第一天，并将时间设为 `00:00:00.000`。

**示例：**  
```ts
console.log(DateUtils.startOfMonth(new Date())); 
// 输出示例：2025-03-01T00:00:00.000Z
```



## `endOfMonth`

**作用：**  
获取指定日期所在月份的最后一天，并将时间设为 `23:59:59.999`。

**示例：**  
```ts
console.log(DateUtils.endOfMonth(new Date())); 
// 输出示例：2025-03-31T23:59:59.999Z
```



## `getQuarter`

**作用：**  
获取指定日期所在的季度（1-4）。

**示例：**  
```ts
console.log(DateUtils.getQuarter(new Date())); 
// 输出示例：1（第一季度）
```



## `isWorkday`

**作用：**  
判断指定日期是否为工作日（周一至周五为 `true`，周末返回 `false`）。

**示例：**  
```ts
console.log(DateUtils.isWorkday('2025-03-21')); // true（星期五）
console.log(DateUtils.isWorkday('2025-03-23')); // false（星期日）
```



## `getWorkdayCount`

**作用：**  
计算两个日期之间的工作日数量（不包括周六、周日）。

**示例：**  
```ts
console.log(DateUtils.getWorkdayCount('2025-03-18', '2025-03-24')); 
// 输出示例：5（如果 18-22 是工作日，23-24 是周末）
```



## `startOfWeek`

**作用：**  
获取指定日期所在周的周一，并将时间设为 `00:00:00.000`。

**示例：**  
```ts
console.log(DateUtils.startOfWeek('2025-03-21')); 
// 输出示例：2025-03-17T00:00:00.000Z（如果 2025-03-21 是周五）
```



## `endOfWeek`

**作用：**  
获取指定日期所在周的周日，并将时间设为 `23:59:59.999`。

**示例：**  
```ts
console.log(DateUtils.endOfWeek('2025-03-21')); 
// 输出示例：2025-03-23T23:59:59.999Z（如果 2025-03-21 是周五）
```



## `getAge`

**作用：**  
计算基于当前日期的年龄（按年份计算）。

**示例：**  
```ts
console.log(DateUtils.getAge('2000-03-21')); 
// 输出示例：25（如果当前是 2025-03-21）
```






























