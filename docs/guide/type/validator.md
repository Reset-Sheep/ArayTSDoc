# 类型验证

## **`DataValidator`**

- **作用**: 用于验证数据是否符合预设的规则，包括类型验证、必填验证、转换等功能。能够确保数据的有效性，并且可以根据定义的规则进行自动转换。

### **功能介绍**:
- **`validate` 方法**: 
  - 校验数据 (`data`) 是否符合传入的验证规则。返回一个包含验证结果 (`isValid`) 和错误信息 (`errors`) 的对象。
  - 如果数据未通过验证，会返回相应的错误信息，包含字段名和错误描述。

- **`isValidType` 方法**: 
  - 用于检查某个值是否符合指定的类型验证规则（`string`, `number`, `boolean`, `date`, `array`, `object`）。

### **示例**:

```typescript
const validationRules: any = {
  userId: { type: 'string', required: true },
  age: { type: 'number', required: true, transform: (value: any) => Math.floor(Number(value)) },
  email: { type: 'string', required: false },
  createdAt: { type: 'date', required: true },
};

const dataValidator = new DataValidator(validationRules);

const inputData = {
  userId: '123',
  age: '29.9',
  email: 'example@example.com',
  createdAt: '2023-03-25T12:00:00Z',
};

const result = dataValidator.validate(inputData);

if (!result.isValid) {
  console.log('Validation failed:', result.errors);
} else {
  console.log('Validation passed:', inputData);
}
```

## **`DataConverter`**

- **作用**: 提供数据类型之间的转换功能，包括常见的类型转换如字符串转数字、数字转字符串等。支持转换为目标类型时的异常处理。

### **功能介绍**:

- **`convert` 方法**:
  - 将给定的值转换为目标类型（`targetType`）。支持的目标类型包括：`string`、`number`、`boolean`、`date`、`array`。
  
- **`handleError` 方法**:
  - 当转换过程中发生错误时，能够捕获并记录错误信息，便于追踪问题。

### **示例**:

```typescript
try {
  const convertedDate = DataConverter.convert('2023-03-25', 'date');
  console.log('Converted Date:', convertedDate);
} catch (error) {
  DataConverter.handleError(error, 'Date conversion');
}
```