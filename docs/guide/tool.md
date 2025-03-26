# ArayTS 类型生成工具

## 简介

ArayTS 提供了一个强大的工具，可以根据 JSON 数据自动生成 TypeScript 类型定义文件。

## 特性

- 支持复杂的嵌套 JSON 结构
- 自动识别数组类型
- 智能处理可选属性
- 生成可读性强的类型声明

## 使用方法
### 安装
> 1.3.14版本开始支持该工具
```bash
npm install -g arayts
```

### 基础用法

1. 根目录下创建 `test.json`，准备你的 JSON 数据：

```json
{
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "hobbies": ["reading", "gaming"]
}
```
2. 运行命令:
```bash
arayts generate ./test.json
```
3. 生成的类型定义文件将保存在当前目录下的types.ts文件中。


### 高阶用法
1. 在根目录下创建 `arayts.config.ts`，配置你的生成选项：
```ts
const config = {
    input: {
        path: "./example/data.json",
        watch: false
    },
    output: {
        path: "./example/generated.ts",
        typeName: "Generated",
        namespace: "Types"
    },
    options: {
        generateInterface: true,
        interfacePrefix: "I",
        addComments: true
    }
};

module.exports = config;
```

2. 根据配置文件的导入路径（`./example/data.json`）创建相应文件。
3. 运行命令:
```bash
arayts generate ./test.json
```
4. 生成的类型定义文件将保存在配置文件的导出路径（`./example/generated.ts`）。