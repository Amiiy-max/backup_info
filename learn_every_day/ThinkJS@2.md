http://localhost:8082/member/consume/history
http://localhost:8082/member/consume 有indexAction，但返回页面被ufo截走了



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

## thinkjs module (每个模块有独立的配置、控制器、视图、模型等文件)
`thinkjs module hello`
```
  create : src/hello/config
  create : src/hello/config/config.js
  create : src/hello/controller
  create : src/hello/controller/base.js
  create : src/hello/controller/index.js
  create : src/hello/logic
  create : src/hello/logic/index.js
  create : src/hello/model
  create : src/hello/model/index.js
  create : view/hello
  create : view/hello/index_index.html
```
### 控制器
1. 一个 Action 代表一个要执行的操作。  
如： url 为 `/home/article/detail`，解析后的模块为 `/home`，控制器为 `article`， Action 为 `detail`

2. this作用域问题
- 2.1 使用 Generator Function
```es6
export default class extends think.controller.base {
  * indexAction(){
    let data = yield this.model('user').find();
    let result = yield this.model('article').where({user_id: data.id}).select();
    this.success(result);
  }
}
```
- 2.2 使用 Arrow Function
```es6
module.exports = think.controller({
  indexAction: function(){
    this.model('user').find().then(data => {
      return this.model('article').where({user_id: data.id}).select();
    }).then(data => {
      this.success(data);
    })
  }
})
```

3. 获取参数  
```es6
//通过 get 方法获取 GET 参数
export default class extends think.controller.base {
  indexAction(){
    let name = this.get('name');
    let allParams = this.get(); //获取所有 GET 参数
  }
}
//参数不存在，那么值为空字符串。

//通过 post 方法获取 POST 参数
export default class extends think.controller.base {
  indexAction(){
    let name = this.post('name');
    let allParams = this.post(); //获取所有 POST 参数
  }
}
```

## View
### 视图文件
视图文件默认的命名规则为 `模块/控制器_操作.html`。

假如 URL `home/article/detail` 解析后的模块是 home，控制器是 article，操作是 detail，那么对应的视图文件为 `home/article_detail.html`。

### 视图配置`src/common/config/view.js`
```es6
export default {
  type: 'ejs', //模版引擎
  content_type: 'text/html', //输出模版时发送的 Content-Type
  file_ext: '.html', //文件的扩展名
  file_depr: '_', //控制器和操作之间的连接符
  root_path: think.ROOT_PATH + '/view', //视图文件的根目录
  adapter: { //模版引擎需要的配置项
    ejs: {}, //使用 ejs 模板引擎时额外配置
    nunjucks: {} //使用 nunjucks 模板引擎时额外配置
  } 
};
```
> [jade模版文档](https://github.com/pugjs/pug)

### 模版相关
```es6
export default class extends think.controller.base {
  async indexAction(){
    //this.assign({
    //  title: 'ThinkJS 官网',
    //  author: 'thinkjs'
    //});
    this.assign('title', 'ThinkJS 官网');
    let title = this.assign('title');
    
    let content = await this.fetch(); // 获取渲染后的内容
    this.display();                   // render home/index_index.html
  }
}
> 框架自动向模版里注册了 http, controller, config 等变量，这些变量可以在模版里直接使用。
```

## 路由 （默认的解析，多种形式的自定义路由）
1. URL 解析为 pathname
当用户访问服务时，服务端首先拿到的是一个完整的 URL `http://www.thinkjs.org/zh-cn/doc/2.0/route.html`  
将 URL 进行解析得到的 pathname 为 `/zh-cn/doc/2.0/route.html`
2. pathname 过滤
```
export default {
  pathname_prefix: '', 
  pathname_suffix: '.html',
}
```
==> `zh-cn/doc/2.0/route`  

3. 路由解析  

4. [自定义路由`route_on: true`](https://thinkjs.org/zh-cn/doc/2.2/route.html)  
路由配置文件为： `src/common/config/route.js`  
自定义路由的匹配规则为：从前向后逐一匹配，如果命中到了该项规则，则不再向后匹配。  
```
export default [
  ["规则1", "需要识别成的pathname"],
  ["规则2", {
    get: "get请求下需要识别成的pathname",
    post: "post请求下需要识别成的pathname"
  }]
];
```
