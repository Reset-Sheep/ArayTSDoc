import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ArayTS',
  description: 'A Technical Documentation Site',
  base: '/ArayTSDoc', // 添加这行，ArayTS 替换为你的仓库名
  lastUpdated: true, // 页面上展示最后更新的时间
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '算法', link: '/algorithm/' },  // 新增顶部导航
      { text: 'API', link: '/api/' },
    ],
    // 配置github地址
    socialLinks: [{ icon: "github", link: "https://github.com/Reset-Sheep/ArayTSDoc" }],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
          ]
        },
        {
          text: '基础',
          collapsed: false,
          items: [
            { text: '数组', link: '/guide/array/' },
            { text: '对象', link: '/guide/object/' },
            { text: '日期', link: '/guide/date/' },
            { text: '时间', link: '/guide/time/' },
            { text: '异步', link: '/guide/async/' },
            { text: '验证', link: '/guide/validator/' },
            { text: '类型', link: '/guide/type/' },
            { text: '其他工具集', link: '/guide/tools/' },
          ]
        },
        {
          text: '高阶',
          collapsed: false,
          items: [
            { text: '算法', link: '/algorithm/' }
          ]
        }
      ],
      '/algorithm/': [  // 新增算法路由的侧边栏配置
        {
          text: '数据结构',
          items: [
            // { text: '数据结构概述', link: '/algorithm/data-structure/' },  // 添加目录入口
            { text: 'LRU缓存（小型缓存）', link: '/algorithm/data-structure/lru' },
            { text: '前缀树', link: '/algorithm/data-structure/trie' },
            { text: '红黑树', link: '/algorithm/data-structure/red-black-tree' },
            { text: '布隆过滤器', link: '/algorithm/data-structure/bloom-filter' },
            { text: '并查集', link: '/algorithm/data-structure/union-find' },
          ]
        },
        {
          text: '搜索与排序',
          items: [
            { text: '快速排序', link: '/algorithm/search-sort/quick-sort' },
            { text: '二分查找', link: '/algorithm/search-sort/binary-search' },
            { text: '洗牌算法', link: '/algorithm/search-sort/shuffle' },
          ]
        },
        {
          text: '字符串处理',
          items: [
            { text: 'KMP字符串匹配', link: '/algorithm/string/kmp' },
            { text: '最长公共子序列', link: '/algorithm/string/lcs' },
            { text: '最短编辑距离', link: '/algorithm/string/edit-distance' },
          ]
        },
        {
          text: '动态规划',
          items: [
            { text: '函数记忆化', link: '/algorithm/dp/memoization' },
          ]
        },
        {
          text: '图论算法',
          items: [
            { text: '拓扑排序（Kahn算法）', link: '/algorithm/graph/topological-sort' },
            { text: 'A*寻路算法', link: '/algorithm/graph/a-star' },
          ]
        },
        {
          text: '树遍历',
          items: [
            { text: '二叉树遍历', link: '/algorithm/tree/traversal' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概览', link: '/api/' },
          ]
        }
      ]
    },
  }
})