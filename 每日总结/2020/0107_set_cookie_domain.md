### 背景:  
登陆时调用后端login接口,response header里set-cookie: httponly 使得cookie对js不可见, domain返回qi-e.tv,  
但本地hosts文件设置的地址是qie.tv,导致登陆时cookie设置失败，报错：  
`this set-cookie's domain attribute was invalid`
[InvalidCookieDomain MDN](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Errors/InvalidCookieDomain)  

### 解决办法:  
[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)
option.cookieDomainRewrite: rewrites domain of set-cookie headers
```js
'/api/account': {
  target: LARAVEL,
  cookieDomainRewrite: 'test.qie.tv'
},
```
