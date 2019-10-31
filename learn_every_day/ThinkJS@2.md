## qietv
gulp watch 3000端口  ==>  proxy: 8360端口  
node www/development.js --> new thinkjs().run()监听8360, thinkjs内部代理 http://www.dev.qi-e.tv  
nginx 监听8020，反响代理http://www.dev.qi-e.tv  

## 项目结构
1. /src (es6)    ==>    /app (es5)
2. src/home 项目默认模块   ==>    src/common/config/config.js default_module 修改默认值
3. src/home/controller 控制器。一个 url 对应一个 controller 下的 action
4. view 视图目录，存放对应的模版文件
5. www 项目的可访问根目录，nginx 里的根目录会配置到此目录下

## 代码规范
1. ThinkJS 提供了 init 方法来代替 constrcutor 方法
```es6
export default class think.base {
  constructor(){
    ...
  }
}

export default class think.base {
  /**
   * 初始化方法，类实例化时自动被调用
   * @return {} []
   */
  init(){
    ...
  }
}
```

### 用async await
相对 async/await，*/yield 有以下的缺陷：

1、*/yield 调用后返回一个迭代器，需要借助第三方模块来执行。如：co

2、*/yield 无法和 Arrow Function 一起使用。

3、*/yield 调用另一个 */yield 时，需要使用 yield *，带来不便。

4、目前 V8 对 */yield 还没有做优化，最好也通过 Babel 来编译。
