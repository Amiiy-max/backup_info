# [Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)
## 一、为什么要用require.js？
（1）实现js文件的异步加载，避免网页失去响应；  
（2）管理模块之间的依赖性，便于代码的编写和维护

## 二、require.js的加载
```
  <script src="js/require.js" defer async="true" ></script>
  <script src="js/require.js" data-main="js/main"></script>
```
## 三、主模块的写法
```
　　// main.js

　　require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){

　　　　// some code here

　　});
```
> require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。

## 四、模块的加载
使用require.config()方法，我们可以对模块的加载行为进行自定义. 写在主模块（main.js）的头部
```
require.config({
      baseUrl: "js/lib",
      paths: {

　　　　　　"jquery": "jquery.min",
　　　　　　"underscore": "underscore.min",
　　　　　　"backbone": "backbone.min"

　　　　}

　　});
```

## 五、AMD模块的写法
```
　　// math.js

　　define(['myLib'], function (myLib){

　　　　var add = function (x,y){

　　　　　　return x+y;

　　　　};
    
　　　　function foo(){

　　　　　　myLib.doSomething();

　　　　}

　　　　return {
　　　　　　foo : foo,
　　　　　　add : add
　　　　};

　　});
  ```
  ```
  　　// main.js

　　require(['math'], function (math){

　　　　alert(math.add(1,1));

　　});
  ```
  
  ## 七、require.js插件
  domready text image json mdown
