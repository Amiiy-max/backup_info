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

### 可选值
lineCap: butt，round 和 square。默认是 butt  
lineJoin: round, bevel 和 miter。默认是 miter  
miterLimit: 设定外延交点与连接点的最大距离，如果交点距离大于此值，连接效果会变成了 bevel。

## Gradients 渐变
fill and stroke shapes using linear and radial gradients线性或者径向的渐变来填充或描边  
assign [CanvasGradient object](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) to the fillStyle or strokeStyle properties  

[createLinearGradient(x1, y1, x2, y2)]()
Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).  
[createRadialGradient(x1, y1, r1, x2, y2, r2)]()
Creates a radial gradient. The parameters represent two circles  

[gradient.addColorStop(position, color)]()
Creates a new color stop on the gradient object. position: 0 ~ 1  
> You can add as many color stops to a gradient as you need

## Patterns
[createPattern(image, type)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern): 
Creates and returns a new canvas pattern object. image is a [CanvasImageSource](https://developer.mozilla.org/en-US/docs/Web/API/CanvasImageSource) (that is, an [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement), another canvas, a [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) element, or the like. type is a string indicating how to use the image.  

> type: repeat repeat-x repeat-y no-repeat   
> assign [CanvasPattern object](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern) to the fillStyle or strokeStyle properties  

## Shadows 
* shadowOffsetX = float shadowOffsetY = float  
shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。

* shadowBlur = float  
shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。

* shadowColor = color  
shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。
> Note: Shadows are only drawn for source-over [compositing operations](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing).

## Canvas fill rules
* "nonzero": The [non-zero winding rule](http://en.wikipedia.org/wiki/Nonzero-rule), which is the default rule.
* "evenodd": The [even-odd winding rule](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).
