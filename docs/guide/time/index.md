# 时间

`TimeUtils` 是一个用于处理时间和日期的工具类，提供日期格式化、范围判断、时间差计算等功能。

## `get`
**作用：**
返回当前本地日期的格式化字符串。

**示例：**
```typescript
console.log(TimeUtils.get()); // 输出示例: "2025/03/21"
console.log(TimeUtils.get("DD-MM-YYYY")); // 输出示例: "21-03-2025"
```

## `range`
**作用：**
判断 `verifiedDate` 是否在 `previousDate` 和 `laterDate` 之间。

**示例：**
```typescript
console.log(TimeUtils.range("2025/03/15", "2025/03/10", "2025/03/20")); // true
console.log(TimeUtils.range("2025/03/25", "2025/03/10", "2025/03/20")); // false
```

## `days`
**作用：**
计算 `previousDate` 和 `laterDate` 之间的天数。


**示例：**
```typescript
console.log(TimeUtils.days("2025/03/01")); // 假设当前是2025/03/21，输出 20
console.log(TimeUtils.days("2025/03/01", "2025/03/10")); // 输出 9
```

## `months`
**作用：**
计算 `previousDate` 和 `laterDate` 之间的完整月份数。

**示例：**
```typescript
console.log(TimeUtils.months("2024/03/01")); // 假设当前是2025/03/21，输出 12
console.log(TimeUtils.months("2024/03/01", "2024/06/15")); // 输出 3
```

## `years`
**作用：**
计算 `previousDate` 和 `laterDate` 之间的完整年份数。


**示例：**
```typescript
console.log(TimeUtils.years("2020/03/01")); // 假设当前是2025/03/21，输出 5
console.log(TimeUtils.years("2020/03/01", "2023/02/28")); // 输出 2
```

## `order`
**作用：**
判断 `previousDate` 是否早于或等于 `laterDate`。

**示例：**
```typescript
console.log(TimeUtils.order("2025/03/10")); // 假设当前是2025/03/21，输出 true
console.log(TimeUtils.order("2025/03/25", "2025/03/20")); // 输出 false
```
## `timestamp`
**作用：**
获取当前时间戳（毫秒）。

**示例：**
```typescript
console.log(TimeUtils.timestamp()); // 输出当前时间戳
```

## `getTimestamp`
**作用：**
获取指定日期的时间戳（毫秒）。

**示例：**
```typescript
console.log(TimeUtils.getTimestamp("2025-03-25")); // 输出指定日期的时间戳
console.log(TimeUtils.getTimestamp(new Date())); // 输出当前时间戳
```

## `formatDate`
**作用：**
格式化时间为指定格式，支持 `YYYY-MM-DD HH:mm:ss`。

**示例：**
```typescript
console.log(TimeUtils.formatDate("2025-03-25", "YYYY-MM-DD")); // 输出 "2025-03-25"
console.log(TimeUtils.formatDate(new Date(), "YYYY-MM-DD HH:mm:ss")); // 输出当前时间格式化后的字符串
```

## `isSameDay`
**作用：**
判断两个日期是否为同一天。

**示例：**
```typescript
console.log(TimeUtils.isSameDay("2025-03-25", "2025-03-25")); // 输出 true
console.log(TimeUtils.isSameDay("2025-03-25", "2025-03-24")); // 输出 false
```

## `getWeekDay`
**作用：**
获取指定日期是星期几，返回值 `0-6`（0 表示星期日）。

**示例：**
```typescript
console.log(TimeUtils.getWeekDay("2025-03-25")); // 输出 2（星期二）
```

## `getRelativeTime`
**作用：**
获取相对时间描述，如 "刚刚"、"2小时前"、"5天前" 等。

**示例：**
```typescript
console.log(TimeUtils.getRelativeTime("2025-03-24 12:00:00")); // 根据当前时间输出相对时间描述
```

## `addTime`
**作用：**
向指定日期添加时间。

**示例：**
```typescript
console.log(TimeUtils.addTime("2025-03-25", 5, "day")); // 输出 "2025-03-30"
console.log(TimeUtils.addTime(new Date(), 1, "month")); // 输出一个月后的日期
```
