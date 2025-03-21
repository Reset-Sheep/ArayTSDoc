# 其他工具集
## `fuzzyFilter`

**作用**

用于对一个数据数组进行模糊过滤，根据用户输入的字符串在数组中每个对象的指定字段里进行匹配，然后根据匹配度对结果进行排序，最后返回匹配度最高的前 `maxResults` 个对象。

**示例**
```typescript
// ... existing code ...

// 示例数据
const data = [
  { name: 'Apple iPhone 14' },
  { name: 'Samsung Galaxy S23' },
  { name: 'Google Pixel 7' },
  { name: 'OnePlus 11' },
  { name: 'Xiaomi 13' }
];

// 用户输入
const userInput = 'iPhone';
// 指定字段名
const fieldName = 'name';
// 最大结果数量
const maxResults = 2;

// 调用模糊过滤函数
const filteredResults = fuzzyFilter(userInput, data, fieldName, maxResults);

// 输出过滤结果
console.log(filteredResults);

// ... existing code ...
```

## `applyStyles `

**作用**

该函数接收一个 `HTMLElement` 作为参数，遍历该元素的所有样式属性，为每个属性添加前缀，并将添加前缀后的样式对象重新应用到该元素上,解决浏览器对CSS的兼容性问题。

**示例**
```typescript
// 引入 applyStyles 函数
import applyStyles from './compatible';

// 创建一个 HTML 元素
const divElement = document.createElement('div');
// 设置元素的样式
divElement.style.display = 'flex';
divElement.style.transition = 'all 0.3s';

// 应用带前缀的样式
applyStyles(divElement);

// 将元素添加到文档中
document.body.appendChild(divElement);

// 打印元素的样式
console.log(divElement.style.cssText);
```

## `random `

**作用**
定义了一个名为 random 的函数，其主要作用是生成一个指定位数的随机整数，并且可以指定随机数的范围。具体功能如下：

- 参数检查：函数会检查传入的 digit 是否为正整数，以及 min 是否小于 max，如果不满足条件，会抛出错误。
- 生成随机数：在 min 和 max 之间生成一个随机整数。
- 位数处理：如果生成的随机数的位数小于指定的 digit，会在前面补零，确保最终返回的数字是 digit 位。

**示例**
```typescript
// 导入 random 函数
import random from './random';

// 生成一个 4 位的随机数，范围是 0 到 9999
const randomNumber1 = random(4);
console.log('4 位随机数:', randomNumber1);

// 生成一个 3 位的随机数，范围是 100 到 999
const randomNumber2 = random(3, 100, 999);
console.log('3 位随机数（范围 100 - 999）:', randomNumber2);

// 生成一个 5 位的随机数，范围是 10000 到 99999
const randomNumber3 = random(5, 10000, 99999);
console.log('5 位随机数（范围 10000 - 99999）:', randomNumber3);
```

## `base64ToFile `

**作用**
定义了一个名为 random 的函数，其主要作用是生成一个指定位数的随机整数，并且可以指定随机数的范围。具体功能如下：

`base64ToFile` 函数的主要作用是将 Base64 编码的数据转换为文件，并触发浏览器的文件下载功能。它接收三个参数：

- `base64Data`：Base64 编码的字符串数据。
- `fileName`：下载文件时使用的文件名。
- `mimeType`：文件的 MIME 类型，默认为空字符串。

**示例**
```typescript
// 假设这是一个 Base64 编码的图片数据
const base64ImageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
const fileName = 'example.png';
const mimeType = 'image/png';

// 调用 base64ToFile 函数
base64ToFile(base64ImageData, fileName, mimeType)
  .then((success) => {
    if (success) {
      console.log('文件下载成功');
    } else {
      console.log('文件下载失败');
    }
  });
```