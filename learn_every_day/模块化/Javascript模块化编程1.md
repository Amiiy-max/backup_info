# [Javascript模块化编程（一）：模块的写法](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)
网页越来越像桌面程序，需要一个团队分工协作、进度管理、单元测试等等......开发者不得不使用软件工程的方法，管理网页的业务逻辑。  
## 一，原始写法 (模块就是实现特定功能的一组方法)
```
   function m1(){
　　　　//...
　　}

　　function m2(){
　　　　//...
　　}
```
> "污染"了全局变量，无法保证不与其他模块发生变量名冲突，而且模块成员之间看不出直接关系。

## 二，对象写法
```
    var module1 = new Object({

　　　　_count : 0,

　　　　m1 : function (){
　　　　　　//...
　　　　},

　　　　m2 : function (){
　　　　　　//...
　　　　}

　　});
```
> 暴露所有模块成员，内部状态可以被外部改写。比如，外部代码可以直接改变内部计数器的值

## 三，立即执行函数写法 (不暴露私有成员)
```
   var module1 = (function(){

　　　　var _count = 0; //外部代码无法读取内部的_count变量

　　　　var m1 = function(){
　　　　　　//...
　　　　};

　　　　var m2 = function(){
　　　　　　//...
　　　　};

　　　　return {
　　　　　　m1 : m1,
　　　　　　m2 : m2
　　　　};

　　})();
```
> Javascript模块的基本写法

## 四，放大模式
如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"（augmentation）
```
　　var module1 = (function (mod){

　　　　mod.m3 = function () {
　　　　　　//...
　　　　};

　　　　return mod;

　　})(module1);
  ```
  
## 五，宽放大模式（Loose augmentation）
```
　　var module1 = ( function (mod){

　　　　//...

　　　　return mod;

　　})(window.module1 || {});
```
> 与"放大模式"相比，＂宽放大模式＂就是"立即执行函数"的参数可以是空对象

## 六，输入全局变量
独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互。
为了在模块内部调用全局变量，必须显式地将其他变量输入模块。
```
　　var module1 = (function ($, YAHOO) {

　　　　//...

　　})(jQuery, YAHOO);
```
> 好处：保证模块的独立性，还使得模块之间的依赖关系变得明显。[参见Ben Cherry的著名文章 JavaScript Module Pattern: In-Depth](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth)


