# LRU 缓存（小型缓存）
主要用于提升前端性能、减少不必要的计算或请求。根据你的前端使用场景，它可能适用于：  

## **API 数据缓存**
   🔶 缓存后端接口数据，减少重复请求，提高响应速度：
   ```ts
   const apiCache = new LRUCache<string, any>(50);
   
   async function fetchWithCache(url: string) {
       if (apiCache.get(url)) {
           return apiCache.get(url);
       }
       const response = await fetch(url);
       const data = await response.json();
       apiCache.put(url, data);
       return data;
   }
   ```

## **组件状态缓存**
   🔶 在 Vue、React 组件中，缓存计算结果，避免重复计算：
   ```ts
   const computedCache = new LRUCache<string, number>(10);

   function getComputedValue(key: string, compute: () => number) {
       if (computedCache.get(key)) {
           return computedCache.get(key);
       }
       const result = compute();
       computedCache.put(key, result);
       return result;
   }
   ```

## **图片/资源预加载**
   🔶 缓存加载过的图片，避免重复请求：
   ```ts
   const imageCache = new LRUCache<string, HTMLImageElement>(20);

   function loadCachedImage(src: string) {
       if (imageCache.get(src)) {
           return Promise.resolve(imageCache.get(src));
       }
       return new Promise<HTMLImageElement>((resolve) => {
           const img = new Image();
           img.src = src;
           img.onload = () => {
               imageCache.put(src, img);
               resolve(img);
           };
       });
   }
   ```

## **表单输入建议（搜索框）**
   🔶 缓存用户输入，提高搜索建议的响应速度：
   ```ts
   const searchCache = new LRUCache<string, string[]>(10);

   function getSuggestions(query: string, fetchSuggestions: (q: string) => Promise<string[]>) {
       if (searchCache.get(query)) {
           return Promise.resolve(searchCache.get(query));
       }
       return fetchSuggestions(query).then((suggestions) => {
           searchCache.put(query, suggestions);
           return suggestions;
       });
   }
   ```

## **路由 & 组件缓存**
   🔶 缓存最近访问的 Vue/React 组件，减少重新渲染：
   ```ts
   const pageCache = new LRUCache<string, any>(5);
   ```

如果你的前端项目是 **Vue** 或 **React**，可以直接集成到状态管理（如 `pinia`、`react-query`）中，进一步优化性能。🚀