# Trie（前缀树）
主要用于**字符串存储、快速查找、自动补全**等场景，适用于**搜索框、输入法、敏感词检测**等功能。


## 搜索框智能提示（Autocomplete）
🔶 在搜索框输入时，实时提供匹配的单词建议，如**搜索引擎、商品搜索、站内搜索**。  

```ts
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");

function getAutoCompleteSuggestions(trie: Trie, prefix: string): boolean {
    return trie.startsWith(prefix);
}

console.log(getAutoCompleteSuggestions(trie, "ap")); // true
console.log(getAutoCompleteSuggestions(trie, "banana")); // false
```


## **输入法 / 拼写建议**
🔶  在**输入法、表单**中，Trie 结构可以用于提供**拼写建议、单词推荐**。  

```ts
const trie = new Trie();
trie.insert("hello");
trie.insert("help");
trie.insert("hero");

function spellCheck(trie: Trie, word: string): boolean {
    return trie.search(word);
}

console.log(spellCheck(trie, "hello")); // true
console.log(spellCheck(trie, "helo")); // false
```


## **过滤敏感词**
 🔶  在社交平台、评论系统等，过滤**敏感词、违禁词**。  

```ts
const trie = new Trie();
trie.insert("badword");
trie.insert("curse");

function containsSensitiveWord(trie: Trie, text: string): boolean {
    for (let i = 0; i < text.length; i++) {
        if (trie.startsWith(text.slice(i))) {
            return true;
        }
    }
    return false;
}

console.log(containsSensitiveWord(trie, "This is a badword.")); // true
console.log(containsSensitiveWord(trie, "Nothing wrong here.")); // false
```


## **关键词高亮（代码编辑器 / 文本编辑器）**
 🔶  在**代码编辑器、Markdown 解析器、富文本编辑器**中，Trie 可以用来匹配**关键词**，高亮显示。  

```ts
const trie = new Trie();
trie.insert("function");
trie.insert("const");
trie.insert("let");

function highlightKeywords(trie: Trie, text: string): string {
    return text.split(" ").map(word => {
        return trie.search(word) ? `<span class="highlight">${word}</span>` : word;
    }).join(" ");
}

console.log(highlightKeywords(trie, "const x = function() {};"));
// 输出: "<span class='highlight'>const</span> x = <span class='highlight'>function</span>() {};"
```


## **网址前缀匹配（广告拦截 / 路由匹配）**
 🔶  Trie 适用于**网址前缀匹配、广告屏蔽、URL 解析**。  

```ts
const adBlocker = new Trie();
adBlocker.insert("ads.example.com");
adBlocker.insert("tracker.example.com");

function isBlockedURL(trie: Trie, url: string): boolean {
    return trie.startsWith(url);
}

console.log(isBlockedURL(adBlocker, "ads.example.com/banner.jpg")); // true
console.log(isBlockedURL(adBlocker, "example.com")); // false
```


## **处理标签和分类（Tag / Category）**
 🔶  用于**博客、商品分类、文章标签**等场景，快速检索是否已有标签。  

```ts
const tagsTrie = new Trie();
tagsTrie.insert("javascript");
tagsTrie.insert("typescript");
tagsTrie.insert("vue");

console.log(tagsTrie.search("vue")); // true
console.log(tagsTrie.search("react")); // false
```


Trie 在前端非常实用，适用于**搜索、过滤、匹配等任务**，可以显著提高字符串处理的效率！ 🚀