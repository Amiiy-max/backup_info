### Scoping rules
The key difference is not in the syntax, but in the semantics,   
 ***var*** : var-scoping or function-scoping   
 ***let*** : exical-scoping or block-scoping (not visible outside of their nearest containing block or for-loop.)
### Variable capturing quirks
```typescript
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

//9      ===>      10
//9                10
//9                10
//9                10
//9                10
//9                10
//9                10
//9                10
//9                10
// 9                10
```
more temporal dead zones, see relevant content on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)

### Re-declarations and Shadowing
The act of introducing a new name in a more nested scope is called *shadowing*.

### Block-scoped variable capturing
IIFE - an Immediately Invoked Function Expression   
Rather than just introducing a new ***environment*** to the loop itself, these declarations sort of create a new ***scope*** per iteration (like IIFE). 

### ***const*** declarations
TypeScript allows you to specify that members of an object are readonly (in [interface](http://www.typescriptlang.org/docs/handbook/interfaces.html) chapter)

### ***let*** vs. ***const***
Applying the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)

### [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
#### Array destructuring
```typescript
// destructuring assignment
let input = [1, 2];
let [first, second] = input;

// swap variables
[first, second] = [second, first];

// with parameters to a function
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}([1, 2])

// 扩展运算符 Spread syntax ... (字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)
let [first, ...rest] = [1, 2, 3, 4];        //rest=[2,3,4]
let [first] = [1, 2, 3, 4];                 //first=1
let [, second, , fourth] = [1, 2, 3, 4];    //second=2 fourth=4
```
#### Tuple destructuring
```typescript
let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple;          // error when beyond the range of its elements
let [a, ...bc] = tuple;         // bc: [string, boolean]
let [a, b, c, ...d] = tuple;    // d: [], the empty tuple
```
#### Object destructuring
```typescript
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

//have assignment without declaration
({ a, b } = { a: "baz", b: 101 });  // parentheses! JavaScript normally parses a { as the start of block.

let { a, ...passthrough } = o;
```
##### ***Property renaming***
```typescript
// Confusingly, the colon here does not indicate the type.
let { a: newName1, b: newName2 } = o;//a as newName1; b as newName2

let { a, b }: { a: string, b: number } = o;
```
##### ***Default values*** (in case a property is undefined)
```typescript
function keepWholeObject(wholeObject: { a: string, b?: number }) {  //b? indicates that b is optional, may be undefined
    let { a, b = 1001 } = wholeObject;
}
```
keepWholeObject now has a **variable for wholeObject**(有一个名为wholeObject的变量) as well as the properties a and b, even if b is undefined

##### ***Function declarations***
```typescript
type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}
```
> getting defaults right with destructuring
> ```typescript
> //1.put the pattern before the default value
> function f({ a="", b=0 } = {}): void {  //type inference类型推断
>     // ...
> }
> f();
>  //2.give a default for optional properties on the destructured property instead of the main initializer
>  function f({ a, b = 0 } = { a: "" }): void {
>      // ...
>  }
>  f({ a: "yes" }); // ok, default b = 0
>  f(); // ok, default to { a: "" }, which then defaults b = 0
>  f({}); // error, 'a' is required if you supply an argument
>```

##### ***Spread*** (the opposite of destructuring)  ***shallow copy!!!***
```typescript
//array
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5]; //[0, 1, 2, 3, 4, 5]

//object
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" }; //overwrite earlier
```
> only includes an objects’ own, enumerable properties (***lose methods***)   
> Typescript compiler doesn’t allow spreads of type parameters from generic functions(泛型函数).

tips: 字面量对象 object literals (also named object initializers)


