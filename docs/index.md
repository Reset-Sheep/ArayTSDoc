---
layout: home

hero:
  name: ArayTS
  text: 让 TypeScript 开发如丝般顺滑
  tagline: 高效、优雅的 TypeScript 算法工具集，为您的项目注入算法力量。
  image:
    src: /logo.png
    alt: ArayTS Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/Reset-Sheep/ArayTSDoc

features:
  - icon: 📝
    title: 全面的算法工具集
    details: 经典数据结构实现、高效搜索算法、实用排序与查找、高级缓存策略等等
  - icon: 🚀
    title: 优雅的异步处理
    details: 异步操作封装、并发控制、错误处理机制
  - icon: 🛠️
    title: 实用的工具函数
    details: 模糊搜索过滤、时间日期处理、对象操作工具、文件处理工具等等
  - icon: 🔓
    title: 开发体验优化
    details: 完整的 TypeScript 类型支持、详尽的文档和示例、零依赖核心功能
  - icon: 👍
    title: 强大的验证工具
    details: 内置邮箱、手机号验证、灵活的自定义验证规则、链式验证支持
  - icon: ✅
    title: 易用性
    details: 模块化设计、简洁的 API 设计、支持按需引入
---

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #61DAFB 50%, #E6F3FF 50%);
  --vp-home-hero-image-filter: blur(40px);
}

.VPFeatures .container {
  max-width: 1152px !important;
}
/* .VPImage{
  width: 100px;
  height: 100px;
} */
.VPFeatures .items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.VPFeatures .item {
  width: calc(33.33% - 20px) !important;
  margin: 0 10px 20px !important;
}

</style>