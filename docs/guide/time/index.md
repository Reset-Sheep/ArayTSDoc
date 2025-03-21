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

