```ts
declare type WithRouterProps = {
    router: string;
};
declare type ExcludeRouterProps<P> = Pick<P, Exclude<keyof P, keyof WithRouterProps>>;
declare type ExcludeRouterProps2<P> = Exclude<keyof P, keyof WithRouterProps>;
const a: ExcludeRouterProps<{router: string, name: string}> = {name: "a"}
const a2: ExcludeRouterProps2<{router: string, name: string, age: number}> = 'age'

console.log(a, a2)
```
报错：  
1. router:'r'处提示
```ts
const a: ExcludeRouterProps<{router: string, name: string}> = {router:'r', name: "a"}
```
(property) router: string  
Type '{ router: string; name: string; }' is not assignable to type 'Pick<{ router: string; name: string; }, "name">'.  
  Object literal may only specify known properties, and 'router' does not exist in type 'Pick<{ router: string; name: string; }, "name">'. ts(2322)  
  
2. a2处提示
```ts
const a2: ExcludeRouterProps2<{router: string, name: string, age: number}> = {router:'r',name: "a"}
```
const a2: "name" | "age"  
Type '{ name: string; age: number; }' is not assignable to type '"name" | "age"'.  
  Type '{ name: string; age: number; }' is not assignable to type '"age"' .ts(2322)  
