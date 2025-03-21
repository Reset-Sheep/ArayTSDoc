# 异步

## `retry`

**作用**

当异步操作失败时，自动重试指定次数。

**参数**
- `fn: () => Promise<T>` - 需要重试的异步函数。
- `maxAttempts: number` - 最大重试次数，默认 `3`。
- `delay: number` - 每次重试间隔（毫秒），默认 `1000`。

**示例**
```typescript
async function fetchData() {
    return fetch('https://api.example.com/data').then(res => res.json());
}

try {
    const result = await Async.retry(fetchData, 5, 2000);
    console.log(result);
} catch (error) {
    console.error(error);
}
```

 

## `withTimeout`

**作用**

为异步操作添加超时限制。

**参数**
- `promise: Promise<T>` - 需要添加超时的 Promise。
- `timeout: number` - 超时时间（毫秒）。

**示例**
```typescript
const fetchWithTimeout = Async.withTimeout(fetchData(), 5000);
fetchWithTimeout.then(console.log).catch(console.error);
```

 

## `parallel`

**作用**

限制并发执行的任务数量。

**参数**
- `tasks: (() => Promise<T>)[]` - 任务数组。
- `limit: number` - 并发限制数，默认 `3`。

**示例**
```typescript
const tasks = [
    () => fetchData(),
    () => fetchData(),
    () => fetchData(),
    () => fetchData()
];

const results = await Async.parallel(tasks, 2);
console.log(results);
```

 

## `debounce`

**作用**

防抖函数：将短时间内的多次调用合并为一次。

**参数**
- `fn: (...args: any[]) => Promise<any>` - 需要防抖的异步函数。
- `wait: number` - 等待时间（毫秒），默认 `300`。

**示例**
```typescript
const debouncedFn = Async.debounce(fetchData, 500);
debouncedFn();
```

 

## `throttle`

**作用**

节流函数：限制函数调用频率。

**参数**
- `fn: (...args: any[]) => Promise<any>` - 需要节流的异步函数。
- `wait: number` - 等待时间（毫秒），默认 `300`。

**示例**
```typescript
const throttledFn = Async.throttle(fetchData, 1000);
throttledFn();
```

 

## `memoize`

**作用**

缓存异步操作结果。

**参数**
- `fn: (...args: any[]) => Promise<any>` - 需要缓存的异步函数。
- `ttl: number` - 缓存有效期（毫秒），默认 `5000`。

**示例**
```typescript
const cachedFetch = Async.memoize(fetchData, 10000);
cachedFetch();
cachedFetch(); // 使用缓存结果
```

 

## `waitUntil`

**作用**

等待异步条件满足。

**参数**
- `condition: () => Promise<boolean> | boolean` - 条件判断函数。
- `options: { timeout?: number; interval?: number; timeoutMessage?: string; }`
  - `timeout`: 超时时间（默认 `30000` 毫秒）。
  - `interval`: 检查间隔（默认 `1000` 毫秒）。
  - `timeoutMessage`: 超时提示信息。

**示例**
```typescript
await Async.waitUntil(async () => {
    return (await fetchData()).status === 'ready';
}, { timeout: 10000, interval: 500 });
```

