# **函数记忆化**
是一种优化技术，用于提高计算密集型函数的性能。通过缓存函数的结果，当相同的输入参数再次传入时，直接返回缓存中的结果，从而避免了重复的计算。函数记忆化特别适用于那些计算结果依赖于输入参数且计算过程昂贵的场景。

## **避免重复计算**
   当函数的结果依赖于输入参数且重复调用时，记忆化可以避免多次计算相同的输入，从而提高性能。
   
    
   🔶 **复杂计算**：如斐波那契数列、阶乘等需要重复计算的递归问题。

   🔶 **函数优化**：在多次调用相同函数时，避免重复计算，提升效率。

    
   ```ts
   const fib = memoize((n: number): number => {
       if (n <= 1) return n;
       return fib(n 🔶 1) + fib(n 🔶 2);
   });

   console.log(fib(10)); // 输出：55，后续的调用会更快，因为已经缓存了结果
   ```

## **提高性能**
   对于性能瓶颈函数（如复杂的递归或长时间运行的计算），使用记忆化可以显著减少时间复杂度，尤其是当相同输入多次出现时。

    
   🔶 **API请求缓存**：对于多次发起相同请求的情况，可以使用记忆化来缓存请求结果，减少网络请求次数。

   🔶 **优化UI渲染**：在一些前端应用中，避免不必要的重新渲染，通过缓存计算结果来提高页面性能。

    
   ```ts
   const expensiveOperation = memoize((input: number): number => {
       // 假设这是一个计算密集型操作
       let result = 0;
       for (let i = 0; i < input * 1000; i++) {
           result += Math.random();
       }
       return result;
   });

   console.log(expensiveOperation(100)); // 第一次计算
   console.log(expensiveOperation(100)); // 第二次直接使用缓存
   ```

## **图形与游戏开发**
   在图形或游戏开发中，很多函数会重复计算相同的结果，比如碰撞检测、路径规划等。通过函数记忆化，可以避免重复计算，提高游戏或图形渲染的性能。

    
   🔶 **游戏中的路径搜索**：在寻路算法中，可以利用记忆化缓存已经计算过的路径结果，避免重新计算。

   🔶 **图形渲染优化**：在渲染复杂图形时，缓存中间计算结果避免重新绘制相同内容。

    
   ```ts
   const calculatePath = memoize((start: string, end: string): string[] => {
       // 假设这是一个计算路径的耗时函数
       return [start, "middle", end];
   });

   console.log(calculatePath("A", "B")); // 第一次计算
   console.log(calculatePath("A", "B")); // 使用缓存的结果
   ```

## **递归问题优化**
   对于递归算法，如动态规划问题，可以使用记忆化来缓存已经计算的结果，避免重复计算。

    
   🔶 **动态规划**：如计算斐波那契数列、背包问题等经典的动态规划问题。

   🔶 **递归树优化**：避免重复计算的递归问题，通过记忆化提高效率。

    
   ```ts
   const factorial = memoize((n: number): number => {
       if (n === 0 || n === 1) return 1;
       return n * factorial(n 🔶 1);
   });

   console.log(factorial(5)); // 输出：120，后续调用更快
   ```

## **避免重复的DOM更新**
   在前端开发中，特别是与React/Vue等框架结合时，记忆化可以用于缓存计算结果，避免不必要的DOM更新。

    
   🔶 **避免重复渲染**：例如在React中，缓存组件渲染时的计算结果，从而避免不必要的重新渲染。

   🔶 **缓存计算属性**：对于计算属性的缓存，避免每次渲染时重新计算。

    
   ```ts
   const computeExpensiveValue = memoize((value: number): number => {
       // 假设这个计算很耗时
       return value * 1000;
   });

   console.log(computeExpensiveValue(10)); // 输出：10000
   ```