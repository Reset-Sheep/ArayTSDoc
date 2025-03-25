# 验证
提供了两个主要的验证函数：
- `Email(email: string, domains?: string[] | string)`: 用于验证电子邮件地址的格式，并可选地检查域名是否匹配。
- `Phone(phoneNumber: string, regions?: string | string[])`: 用于验证电话号码是否符合指定国家/地区的格式。

## 1. Email 函数

### 1.1 方法签名
```typescript
Email(email: string, domains?: string[] | string): boolean
```

### 1.2 参数说明
| 参数       | 类型                  | 说明 |
|------------|----------------------|------|
| `email`    | `string`              | 需要验证的邮箱地址 |
| `domains`  | `string[] | string`（可选） | 允许的邮箱域名（可以是单个字符串或字符串数组） |

### 1.3 返回值
返回 `true` 表示邮箱格式正确，且（如果提供 `domains`）邮箱域名在允许的范围内；否则返回 `false`。

### 1.4 使用示例
```typescript
import { Email } from './emailValidator';

console.log(Email('test@example.com')); // true
console.log(Email('invalid-email')); // false
console.log(Email('user@gmail.com', 'gmail.com')); // true
console.log(Email('user@yahoo.com', ['gmail.com', 'yahoo.com'])); // true
console.log(Email('user@outlook.com', ['gmail.com', 'yahoo.com'])); // false
```

---

## 2. Phone 函数

### 2.1 方法签名
```typescript
Phone(phoneNumber: string, regions?: string | string[]): boolean
```

### 2.2 参数说明
| 参数           | 类型                  | 说明 |
|---------------|----------------------|------|
| `phoneNumber` | `string`              | 需要验证的电话号码 |
| `regions`     | `string[] | string`（可选） | 允许的国家/地区代码（可以是单个字符串或字符串数组） |

### 2.3 返回值
返回 `true` 表示电话号码格式正确，且（如果提供 `regions`）电话号码符合指定国家/地区的格式；否则返回 `false`。

### 2.4 使用示例
```typescript
import { Phone } from './emailValidator';

console.log(Phone('13800138000')); // true (默认中国大陆号码)
console.log(Phone('+8613800138000', 'zh-CN')); // true
console.log(Phone('+14155552671', 'en-US')); // true
console.log(Phone('+441234567890', ['en-GB', 'en-US'])); // true
console.log(Phone('123456', 'en-US')); // false
```

## 4. 错误处理
如果传递的 `email` 或 `phoneNumber` 为空或格式错误，函数将返回 `false`，并在控制台打印错误信息（仅在异常情况下）。

