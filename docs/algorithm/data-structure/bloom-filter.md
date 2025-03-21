# 布隆过滤器
一种空间效率非常高的**概率型数据结构**，用于判断一个元素是否在集合中。它具有**误判**的概率，但不会漏判，适用于需要**快速检查是否存在**但不需要准确结果的场景。

## **前端缓存和快速检查**
🔶  前端中使用布隆过滤器来**判断资源是否已经被缓存**，例如缓存的图片、API 请求的响应等。

```ts
const imageCache = new BloomFilter(1000, 3);

// 添加图片 URL
imageCache.add("https://example.com/image1.jpg");
imageCache.add("https://example.com/image2.jpg");

// 检查图片是否在缓存中
if (imageCache.test("https://example.com/image1.jpg")) {
    console.log("图片已缓存");
} else {
    console.log("图片未缓存");
}
```
## **搜索引擎的 URL 去重**
🔶  布隆过滤器可以用于**去重**，例如在**搜索引擎**中防止重复抓取已访问的网页 URL。

```ts
const urlFilter = new BloomFilter(10000, 5);

// 添加已访问的 URL
urlFilter.add("https://example.com/page1");
urlFilter.add("https://example.com/page2");

// 检查 URL 是否已访问
if (urlFilter.test("https://example.com/page1")) {
    console.log("此页面已抓取过");
} else {
    console.log("此页面未抓取过");
}
```

## **用户身份验证（防止重复提交）**
🔶  布隆过滤器可用于防止**重复提交**，例如防止用户多次提交相同的表单。

```ts
const submitFilter = new BloomFilter(5000, 3);

// 用户提交的表单 ID
const formId = "userForm123";

// 检查是否已经提交过
if (submitFilter.test(formId)) {
    console.log("表单已提交");
} else {
    submitFilter.add(formId);
    console.log("表单提交成功");
}
```

## **推荐系统（去重已推荐项）**
🔶  在推荐系统中，布隆过滤器可以用来避免向用户推荐**相同的内容**或**商品**。

```ts
const recommendedFilter = new BloomFilter(1000, 4);

// 添加已推荐商品
recommendedFilter.add("product_001");
recommendedFilter.add("product_002");

// 检查是否已推荐
if (recommendedFilter.test("product_001")) {
    console.log("商品已推荐过");
} else {
    recommendedFilter.add("product_001");
    console.log("推荐新商品");
}
```

## **防止重复用户请求（防刷）**
🔶  在防止**恶意刷票、刷单**等行为时，可以使用布隆过滤器来检测用户是否重复提交请求。

```ts
const requestFilter = new BloomFilter(10000, 5);

// 用户请求 ID
const userRequestId = "user_001";

// 检查是否重复请求
if (requestFilter.test(userRequestId)) {
    console.log("请求已被处理");
} else {
    requestFilter.add(userRequestId);
    console.log("请求处理成功");
}
```

## **防垃圾邮件检测**
🔶  在**邮件系统**中，布隆过滤器可以用来检测某个邮箱地址是否已经发送过垃圾邮件。

```ts
const spamFilter = new BloomFilter(5000, 3);

// 添加已发送的垃圾邮件地址
spamFilter.add("spam@example.com");

// 检查是否为垃圾邮件发送者
if (spamFilter.test("spam@example.com")) {
    console.log("此邮箱地址已被标记为垃圾邮件");
} else {
    console.log("邮箱地址未被标记为垃圾邮件");
}
```

## **分布式系统的去重操作**
🔶  在**分布式系统**中，布隆过滤器可用于多个节点之间的去重操作，避免多个节点重复存储相同的数据。

```ts
const distributedFilter = new BloomFilter(100000, 10);

// 节点 A 添加数据
distributedFilter.add("data_001");

// 节点 B 检查数据
if (distributedFilter.test("data_001")) {
    console.log("数据已经存在");
} else {
    console.log("数据不存在");
}
```

布隆过滤器在前端的使用主要体现在**空间效率**、**数据去重**、**快速判断**等场景。它适合那些不要求绝对准确，但对性能和空间要求高的场景 🚀。