# 二叉树结构
在**前端项目**中，二叉树结构和遍历算法主要用于处理**层级数据、搜索、排序、渲染优化**等场景。

## 处理树形菜单（Sidebar / 目录）
如果你的前端项目有**树形菜单、目录导航**（如后台管理系统、文档站点），可以用二叉树存储和遍历菜单项。  

```ts
interface MenuItem {
    id: number;
    title: string;
}

const menuTree = new TreeNode<MenuItem>(
    { id: 1, title: "首页" },
    new TreeNode({ id: 2, title: "文章" }, new TreeNode({ id: 4, title: "技术" })),
    new TreeNode({ id: 3, title: "关于" })
);

// 根据 ID 查找菜单项
function findMenuItem(root: TreeNode<MenuItem> | null, id: number): MenuItem | null {
    return treeTraversal.preorder(root).find(item => item.id === id) || null;
}

console.log(findMenuItem(menuTree, 4)); // { id: 4, title: "技术" }
```

## **前端权限管理**
 🔶   管理**权限树**，判断用户是否有访问权限。  

```ts
interface Permission {
    key: string;
    name: string;
}

const permissionTree = new TreeNode<Permission>(
    { key: "admin", name: "管理员" },
    new TreeNode({ key: "edit", name: "编辑" }),
    new TreeNode({ key: "view", name: "查看" })
);

// 判断用户是否拥有某个权限
function hasPermission(root: TreeNode<Permission> | null, key: string): boolean {
    return treeTraversal.preorder(root).some(p => p.key === key);
}

console.log(hasPermission(permissionTree, "edit")); // true
console.log(hasPermission(permissionTree, "delete")); // false
```


## **处理评论区 / 论坛帖子（树形结构）**
 🔶   前端处理**嵌套评论、回复、论坛帖子**，使用二叉树存储数据，前端遍历并渲染。  

```ts
interface Comment {
    id: number;
    text: string;
}

const commentsTree = new TreeNode<Comment>(
    { id: 1, text: "第一条评论" },
    new TreeNode({ id: 2, text: "回复1" }, new TreeNode({ id: 4, text: "回复1.1" })),
    new TreeNode({ id: 3, text: "回复2" })
);

// 转换为扁平列表
console.log(treeTraversal.preorder(commentsTree));
// [
//     { id: 1, text: "第一条评论" },
//     { id: 2, text: "回复1" },
//     { id: 4, text: "回复1.1" },
//     { id: 3, text: "回复2" }
// ]
```


## **虚拟滚动（Virtual Scroll）优化大数据列表**
 🔶   在**虚拟滚动**（Virtual Scrolling）中，前端渲染**可见部分数据**，使用二叉树存储可见节点，加快滚动计算。  

```ts
interface Item {
    id: number;
    content: string;
}

const virtualScrollTree = new TreeNode<Item>(
    { id: 1, content: "Item 1" },
    new TreeNode({ id: 2, content: "Item 2" }),
    new TreeNode({ id: 3, content: "Item 3" })
);

// 获取当前可见项
function getVisibleItems(root: TreeNode<Item> | null, visibleIds: number[]): Item[] {
    return treeTraversal.preorder(root).filter(item => visibleIds.includes(item.id));
}

console.log(getVisibleItems(virtualScrollTree, [2, 3])); 
// [{ id: 2, content: "Item 2" }, { id: 3, content: "Item 3" }]
```


## **游戏开发（四叉树 / 碰撞检测）**
 🔶   在**前端游戏**或**Canvas 动画**中，使用二叉树存储对象，用于**碰撞检测、层级管理**。  

```ts
interface GameObject {
    id: number;
    name: string;
}

const gameTree = new TreeNode<GameObject>(
    { id: 1, name: "Player" },
    new TreeNode({ id: 2, name: "Enemy1" }),
    new TreeNode({ id: 3, name: "Enemy2" })
);

// 判断游戏中是否有特定对象
function hasGameObject(root: TreeNode<GameObject> | null, id: number): boolean {
    return treeTraversal.preorder(root).some(obj => obj.id === id);
}

console.log(hasGameObject(gameTree, 2)); // true
```


这些应用在**Vue、React、Nuxt、Three.js、PixiJS**等前端框架中都能使用。你可以根据你的项目需求选择合适的二叉树数据结构来优化前端逻辑！ 🚀