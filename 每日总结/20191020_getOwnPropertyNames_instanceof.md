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

//Object.keys();  //如果你想要获得所有实例属性，并仅需可枚举的，可以使用这个方法  其实和for in遍历出来的是一样的
log(Object.keys(Person.prototype));

//Object.getOwnPropertyName() //如果你想要获得所有实例属性，无论他是否可枚举，可以使用这个方法
log(Object.getOwnPropertyNames(Person.prototype));
```
