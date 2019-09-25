### async defer
[HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)  
[script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)  
elimination: 淘汰；排除；消除；略去；

无顺序 async:　*should, if possible* load asynchronously, 下载后立即执行  
有顺序 defer:  be executed after the document has been parsed, but before firing DOMContentLoaded

This attribute allows the elimination of render-blocking JavaScript where the page would have to load and execute scripts before finishing to render the page. defer has a similar effect in this case.

### 浏览器执行顺序
1. initial HTML document loaded and parsed
2. DOMContentLoaded event
3. stylesheets, images, and subframes to finish loading

### sort
Array sort()不按照数值的大小对数字进行排序,而是按照字符编码的顺序进行排序
