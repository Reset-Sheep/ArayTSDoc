# 类型工具集合

该文档为类型工具集合提供了详细的说明。每个工具函数用于在 TypeScript 中处理和转换类型，提升开发效率。下面将介绍每个函数的用途，并通过示例展示其应用及预期结果。

## **`UnwrapPromise`**
   - **作用**: 提取 `Promise` 类型的返回值类型。
    用于提取 `Promise` 类型中返回值的类型。

   ```typescript
   type Result = UnwrapPromise<Promise<string>>; // Result 类型为 string
   ```

   **预期结果**: `Result` 类型是 `string`，因为 `Promise<string>` 的返回值类型是 `string`。


##  **`Optional`**
   - **作用**: 将类型中的所有属性转换为可选类型。
    用于使类型中的所有属性变为可选。

   ```typescript
   type Person = { name: string; age: number };
   type OptionalPerson = Optional<Person>; 
   // 结果: { name?: string; age?: number }
   ```

   **预期结果**: `OptionalPerson` 类型是 `{ name?: string; age?: number }`，所有属性变成可选。


## **`Required `**
   - **作用**: 将类型中的所有属性转换为必选。
    用于将类型中的所有属性变为必选，适用于原本可能有可选属性的类型。

   ```typescript
   type Person = { name?: string; age?: number };
   type RequiredPerson = Required<Person>; 
   // 结果: { name: string; age: number }
   ```

   **预期结果**: `RequiredPerson` 类型是 `{ name: string; age: number }`，所有属性变为必选。

 

##  **`Readonly `**
   - **作用**: 将类型中的所有属性变为只读。
    用于将一个类型的所有属性设为只读。

   ```typescript
   type Person = { name: string; age: number };
   type ReadonlyPerson = Readonly<Person>; 
   // 结果: { readonly name: string; readonly age: number }
   ```

   **预期结果**: `ReadonlyPerson` 类型是 `{ readonly name: string; readonly age: number }`，所有属性不可修改。
 

##  **`ReturnTypeOf `**
   - **作用**: 提取函数的返回值类型。
    用于提取函数返回值的类型。

   ```typescript
   function getPerson() {
     return { name: 'John', age: 30 };
   }
   type PersonType = ReturnTypeOf<typeof getPerson>;
   // 结果: { name: string; age: number }
   ```

   **预期结果**: `PersonType` 类型是 `{ name: string; age: number }`，即 `getPerson` 函数的返回值类型。
 

## **`ArrayElement `**
   - **作用**: 提取数组类型中的元素类型。
    用于提取数组类型中单个元素的类型。

   ```typescript
   type Numbers = number[];
   type NumberType = ArrayElement<Numbers>; 
   // 结果: number
   ```

   **预期结果**: `NumberType` 类型是 `number`，即 `Numbers` 数组中元素的类型。

## **`Merge`**
   - **作用**: 合并两个类型，去除重复的属性。
    用于合并两个类型，如果有重复属性，第二个类型会覆盖第一个类型。

   ```typescript
   type A = { name: string };
   type B = { age: number };
   type AB = Merge<A, B>; 
   // 结果: { name: string; age: number }
   ```

   **预期结果**: `AB` 类型是 `{ name: string; age: number }`，两个类型合并。

 

## **`UnionToIntersection`**
   - **作用**: 将联合类型转换为交叉类型。
    用于将联合类型转换为交叉类型，这在某些需要从多个类型中组合属性的场景中很有用。

   ```typescript
   type A = { name: string };
   type B = { age: number };
   type C = UnionToIntersection<A | B>; 
   // 结果: { name: string; age: number }
   ```

   **预期结果**: `C` 类型是 `{ name: string; age: number }`，通过将联合类型 `A | B` 转换为交叉类型。



## `NonNullableProperties`

- **作用**: 提取对象类型中非 `null` 或 `undefined` 的属性类型。

 
```typescript
type MyType = { a: number; b: string | null; c: undefined; d: boolean };

type NonNullableType = NonNullableProperties<MyType>;
// 结果: { a: number; d: boolean }
```

 **预期结果**: `NonNullableProperties` 去除了 `null` 和 `undefined` 的属性，从而返回一个新类型。

 

## `Pick`

- **作用**: 从类型 `T` 中选取某些属性 `K`，并返回一个新类型。

 
```typescript
type MyType = { a: number; b: string; c: boolean };

type PickedType = Pick<MyType, 'a' | 'b'>;
// 结果: { a: number; b: string }
```

 **预期结果**: 通过 `Pick` 工具选择了类型 `MyType` 中的 `a` 和 `b` 属性，并创建了新类型 `PickedType`。

 

## `Exclude`

- **作用**: 从类型 `T` 中排除掉类型 `U`，返回一个新的类型。

 
```typescript
type MyType = string | number | boolean;

type ExcludedType = Exclude<MyType, number>;
// 结果: string | boolean
```

 **预期结果**: `Exclude` 排除了类型 `number`，结果为 `string | boolean`。

 

## `Parameters`

- **作用**: 提取函数 `T` 的参数类型，并返回一个元组类型。

 
```typescript
type MyFunction = (a: number, b: string) => void;

type Params = Parameters<MyFunction>;
// 结果: [number, string]
```

 **预期结果**: `Parameters` 提取了 `MyFunction` 的参数类型 `[number, string]`。

 

## `MethodsOf`

- **作用**: 提取类型 `T` 中所有方法的名称。

 
```typescript
type MyType = { a: number; b: string; c: () => void };

type MethodNames = MethodsOf<MyType>;
// 结果: "c"
```

 **预期结果**: `MethodsOf` 提取了 `MyType` 中的所有方法名称，并返回了 `"c"`，因为 `c` 是唯一的方法。

 

## `KeysOf`

- **作用**: 提取类型 `T` 中所有键名，并返回一个联合类型。

 
```typescript
type MyType = { a: number; b: string };

type Keys = KeysOf<MyType>;
// 结果: "a" | "b"
```

 **预期结果**: `KeysOf` 返回了类型 `MyType` 中的所有键名联合类型，结果为 `"a" | "b"`。

 

## `ValuesOf`

- **作用**: 提取类型 `T` 中所有的值类型，并返回一个联合类型。

 
```typescript
type MyType = { a: number; b: string };

type Values = ValuesOf<MyType>;
// 结果: number | string
```

 **预期结果**: `ValuesOf` 返回了类型 `MyType` 中的所有值类型的联合类型，结果为 `number | string`。

 

## `Record`

- **作用**: 创建一个具有指定键 `K` 和指定值类型 `T` 的对象类型。

 
```typescript
type MyRecord = Record<'a' | 'b', number>;
// 结果: { a: number; b: number }
```

 **预期结果**: `Record` 创建了一个键为 `'a' | 'b'`，值为 `number` 的对象类型。

 

## `UnionToTuple`

- **作用**: 将联合类型转换为元组类型。

 
```typescript
type MyUnion = 'a' | 'b' | 'c';

type MyTuple = UnionToTuple<MyUnion>;
// 结果: ['a', 'b', 'c']
```

 **预期结果**: `UnionToTuple` 将 `MyUnion` 联合类型转换成了一个元组类型，`['a', 'b', 'c']`。

 

## `PublicProperties`

- **作用**: 提取类中的公共属性。

 
```typescript
class MyClass {
    private privateProp: string;
    public publicProp: number;
}

type PublicProps = PublicProperties<MyClass>;
// 结果: { publicProp: number }
```

 **预期结果**: `PublicProperties` 提取了类 `MyClass` 中的公共属性 `publicProp`。

 

## `NonNullable`

- **作用**: 移除 `null` 和 `undefined` 类型。

 
```typescript
type MyType = string | null | undefined;

type NonNullableType = NonNullable<MyType>;
// 结果: string
```

 **预期结果**: `NonNullable` 将 `MyType` 中的 `null` 和 `undefined` 移除，结果为 `string`。

 

## `StringLiteral`

- **作用**: 创建一个字符串字面量类型。

 
```typescript
type MyLiteral = StringLiteral<'a'>;
// 结果: 'a'
```

 **预期结果**: `StringLiteral` 创建了一个类型 `'a'`，表示具体的字符串字面量类型。

 

## `TypedEventEmitter`

- **作用**: 创建一个类型安全的事件发射器类型，确保事件和数据类型一致。

 
```typescript
interface Events {
    message: string;
    error: Error;
}

const emitter: TypedEventEmitter<Events> = {
    on(event, listener) {
        // 事件监听器实现
    },
    emit(event, data) {
        // 事件触发实现
    }
};

emitter.emit('message', 'Hello World');  // 正常
emitter.emit('error', new Error('Oops'));  // 正常
emitter.emit('message', new Error('Oops'));  // 错误: 参数类型不匹配
```

 **预期结果**: `TypedEventEmitter` 确保事件名与传递的数据类型匹配，提供类型安全的事件发射器接口。
