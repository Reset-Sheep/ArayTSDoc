# 开始使用
ArayTS 是一个基于 TypeScript 的现代化开发工具，旨在提供高效、可靠的开发体验。
## 安装
> 1.3.12之前是测试版本，现已删除

使用 npm 安装：
```bash
npm install arayts
```

或使用 pnpm：
```bash
pnpm add arayts
```

## 基本使用
```typescript
import {ArrayUtils} from "arayts"

// 使用示例
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(ArrayUtils.unique(numbers)); // [1, 2, 3, 4, 5]
```

## 联系我们

- GitHub Issues: [https://github.com/Reset-Sheep/ArayTS/issues](https://github.com/Reset-Sheep/ArayTS/issues)


## 许可证

本项目采用 [MIT](https://github.com/Reset-Sheep/ArayTS/blob/HEAD/LICENSE) 许可证。

<!-- ## 更新日志
建议维护一个 CHANGELOG.md 文件，记录每个版本的变更内容。 -->