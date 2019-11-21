[大概区别](http://meiminjun.github.io/import%E5%92%8Cexport%E7%AC%94%E8%AE%B0/)  
[import mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)  
[模块系统演进 webpack](http://shouce.jb51.net/webpack/module-system.html)
[require import](https://segmentfault.com/a/1190000014434944)
[JS 中的require 和 import 区别](https://www.cnblogs.com/liaojie970/p/7376682.html)

## [module.exports与exports，export与export default的区别](https://www.cnblogs.com/yangwenbo/p/11447405.html)
Node使用CommonJS规范，定义每个模块的内部，module变量代表当前模块，exports是module的属性，表示对外的接口。加载某个模块，实际上是加载该模块的module.exports属性。
Node为每隔模块提供了一个exports变量，指向module.exports，这等同于每个模块头部有这样的一行代码：var exports = module.exports
ES6使用export和import来导出/导入模块。
3.1 export与export default均可用于导出常量/函数/文件/模块等；
3.2 在一个文件或模块中，export/import可以有多个，export default只有一个；
3.3 通过export方式导出，在导入时需要加{}，export default不需要；
3.4 export能导出变量/表达式，export default不可以。
CommonJS模块输出是一个值的拷贝，ES6模块输出是值的引用。
CommonJS模块是运行时加载，ES6模块是编译时输出接口。
CommonJS模块无论require多少次，都只会在第一次加载时运行一次，然后保存到缓存中，下次在require，只会去从缓存取。


module.exports与exports ，是CommonJS的规范，被使用于Node.js中。export与export default ，是ES6规范，被使用于React或Vue中。
