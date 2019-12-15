[background_attackment mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)  
fixed  
此关键字表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。  
local  
此关键字表示背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动， 并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。  
scroll  
此关键字表示背景相对于元素本身固定， 而不是随着它的内容滚动（对元素边框是有效的）。  

tips:多个
```css
background: url(/media/examples/lizard.png) right 3rem top 1rem/15rem no-repeat,url(/media/examples/moon.jpg) center/10rem;
background-attachment: scroll, local;
```
