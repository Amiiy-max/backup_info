### add different colors, line styles, gradients梯度, patterns图样 and shadows to your drawings.

## Colors
[fillStyle = color] 
Sets the style used when filling shapes.  
[strokeStyle = color]
Sets the style for shapes' outlines.  

> color is a string representing a CSS <color>, a gradient object, or a pattern object  
> CSS 颜色值的字符串，渐变对象或者图案对象

```js
// 这些 fillStyle 的值均为 '橙色'
ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)";
```
> [CSS3 颜色值标准](https://www.w3.org/TR/css-color-3/)

## Transparency
1. [globalAlpha = transparencyValue](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalAlpha)  
这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0  
2. 指定透明颜色，用于描边和填充样式
```
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";
```

## Line styles
lineWidth = value 
设置线条宽度。  
lineCap = type 
设置线条末端样式。  
lineJoin = type 
设定线条与线条间接合处的样式。  
miterLimit = value 
限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。  
getLineDash() 
返回一个包含当前虚线样式，长度为非负偶数的数组。  
setLineDash(segments) 
设置当前虚线样式。   
lineDashOffset = value 
设置虚线样式的起始偏移量。  

#### 注意像素网格与路径位置之间的关系
![](https://mdn.mozillademos.org/files/201/Canvas-grid.png)
> 如果一个路径是通过closePath()来封闭的，它是没有起点和终点的；  
> 相反的情况下，路径上的所有端点都与上一个点相连，下一段路径使用当前的lineJoin设置（默认为miter），如果相连路径是水平和/或垂直的话，会导致相连路径的外轮廓根据相交点自动延伸，因此渲染出的路径轮廓会覆盖整个像素格。  
