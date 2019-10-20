1.区别: 
[Object.getOwnPropertyNames()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

2.isPrototypeOf,instanceof区别

3.Object.create(), new区别

3.原型相关的方法isPrototypeOf、Object.getPrototypeOf、hasOwnProperty、Object.getOwnPropertyName、Object.keys
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

//Object.keys();
log(Object.keys(Person.prototype));

//Object.getOwnPropertyName() //如果你想要获得所有实例属性，无论他是否可枚举
log(Object.getOwnPropertyNames(Person.prototype));
```

parseInt(), Number()类型转换(隐式转换)
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
