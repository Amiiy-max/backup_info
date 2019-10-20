1. 原型链关系
```es6
Object.__proto__==Function.prototype==Function.__proto__
Object.prototype==Function.prototype.__proto__
Object.prototype.__proto__==null
Object.toString==Function.prototype.toString
```

2. 几种遍历的区别: 
[Object.getOwnPropertyNames()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

```es6
const obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }

console.log(obj) // {baz: 3, bar: 2}

Object.getOwnPropertyNames(obj) // ["bar", "baz"] //给定对象自身所有属性, 无论他是否可枚举

Object.keys(obj) // baz //给定对象自身可枚举属性名称的数组

for(let a in obj){console.log(a)} // baz foo //给定对象自身和原型链上的可枚举属性

for(let a of obj){console.log(a)} //VM2887:1 Uncaught TypeError: obj is not iterable at <anonymous>:1:14
```

3. typeof, isPrototypeOf, instanceof区别  
```es6
typeof null == 'object'
```
instanceof: tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
```es6
[] instanceof Array
```
prototypeObj.isPrototypeOf(object): 原型对象是否在指定对象的原型链上
```es6
Object.getPrototypeOf([]).isPrototypeOf([])
```

4. Object.create(), new区别

5. 原型相关的方法isPrototypeOf、Object.getPrototypeOf、hasOwnProperty、Object.getOwnPropertyName、Object.keys
```es6
function Person(){this.age = 100};
Person.prototype={title:"p"};
let person1 = new Person;
let log=console.log;

// isPrototypeOf()
log(Person.prototype.isPrototypeOf(person1));　　//true

// Object.getPrototypeOf
log(Object.getPrototypeOf(person1) == Person.prototype)

//hasOwnProperty
log(person1.hasOwnProperty("age"));　　//fales

//Object.keys();  //给定对象自身可枚举属性名称的数组
log(Object.keys(Person.prototype));

//Object.getOwnPropertyName() //如果你想要获得所有实例属性，无论他是否可枚举
log(Object.getOwnPropertyNames(Person.prototype));
```

6. parseInt(), Number()类型转换(隐式转换)
```es6
// 当字符串是由数字组成的时候 他们转换的数字一样的没有差别  
let numStr = '123'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))		//123

// 当字符串是由字母组成的时候 
let numStr = 'abc'
console.log(parseInt(numStr))   //NaN
console.log(Number(numStr))		//NaN

// 当字符串是由数字和字母组成的时候 
let numStr = '123a'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))		//NaN

// 当字符串是由0和数字
let numStr = '0123'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))		//123

// **当字符串包含小数点**
let numStr = '123.456'
console.log(parseInt(numStr))		//123
console.log(Number(numStr))			//123.456

// **当字符串为null时**
let numStr = null
console.log(parseInt(numStr))		//NaN
console.log(Number(numStr))			//0

// **当字符串为''(空)时**
let numStr = ''
console.log(parseInt(numStr))		//NaN
console.log(Number(numStr))			//0
```

7. Object.toString, Object.prototype.toString区别
```es6
Object构造函数本身没有toString方法。
依照原型链关系，Object构造函数的上游原型链是Function.prototype。
所以，你调用Object.toString.call(param)本质上是调用Function.prototype.toString.call(param)，这里需要的参数类型是函数，你传了对象，所以会报错。
```

8.
```es6
function fn(){
  this[Symbol.toStringTag]="FFF"
}
fn[Symbol.toStringTag]="FF"
Object.prototype.toString.call(new fn())  //"[object FFF]"
Object.prototype.toString.call(fn)        //"[object FF]"
Object.prototype.toString.call(new Map()) //"[object Map]"
```
