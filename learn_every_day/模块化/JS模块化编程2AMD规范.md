# [Javascript模块化编程（二）：AMD规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)

## 七，模块的规范
通行的Javascript模块规范共有两种：[CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1)和[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)

## 八、CommonJS
nodejs的出现标志着"Javascript模块化编程"正式诞生，node.js的[模块系统](https://nodejs.org/docs/latest/api/modules.html)参照CommonJS规范实现

有一个全局性方法require()，用于加载模块
```
    var math = require('math');
    math.add(2,3); // 5
```

## 九、浏览器环境
CommonJS重大局限：第二行math.add(2, 3)，在第一行require('math')之后运行，因此必须等math.js加载完成  
浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous） ==》 这就是AMD规范诞生的背景

## 十、AMD (Asynchronous Module Definition)
AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：
```
　　require([module], callback);
  
　　require(['math'], function (math) { // 浏览器不会发生假死
　　　　math.add(2, 3);
　　});
```
> 主要有两个Javascript库实现了AMD规范：[require.js](http://requirejs.org/)和[curl.js](https://github.com/cujojs/curl)
