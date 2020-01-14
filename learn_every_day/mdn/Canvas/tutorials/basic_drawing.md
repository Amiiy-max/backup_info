# Basic usage
<canvas> 最早由Apple引入WebKit，用于Mac OS X 的 Dashboard  
creates graphics on the fly  

## `<canvas>` 元素
### 1. `<canvas>` 只有两个属性—— width和height (300像素 150像素)
css: 伸缩以适应它的框架尺寸
>如果你绘制出来的图像是扭曲的, 尝试用width和height属性为<canvas>明确规定宽高，而不是使用CSS。

### 2. Fallback content
```
<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```
不支持<canvas>的浏览器将会忽略容器并在其中渲染后备内容。而支持<canvas>的浏览器将会忽略在容器中包含的内容，并且只是正常渲染canvas。
>`<canvas>` 元素需要结束标签(`</canvas>`)。如果结束标签不存在，则文档的其余部分会被认为是替代内容，将不会显示出来。

## The rendering context 渲染上下文
[getContext:](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) `('2d')=>`
[CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)


# Drawing shapes

## Working with paths is essential
>intersecting rectangles交叉的长方形
>rectangles, triangles, lines, arcs弧形 and curves曲线,

## The grid
canvas grid (coordinate space): Normally 1 unit in the grid corresponds to 1 pixel on the canvas.   
The origin of this grid is positioned in the top left corner at coordinate (0,0)  
we can translate the origin to a different position, rotate the grid and even scale it  
![grid](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)

## Drawing rectangles
只支持2中基本形状: *rectangles* and *paths* (lists of points connected by lines).  
* [fillRect(x, y, width, height)](): Draws a filled rectangle.
* [strokeRect(x, y, width, height)](): Draws a rectangular outline.
* [clearRect(x, y, width, height)](): Clears the specified rectangular area, making it fully transparent.

## Drawing paths
### 画形状步骤:
1. create the path
2. [drawing commands](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#Paths)
3. stroke or fill the path to render it.
### API:
beginPath()
新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。  
closePath()
闭合路径之后图形绘制命令又重新指向到上下文中。  
stroke()
通过线条来绘制图形轮廓。  
fill()
通过填充路径的内容区域生成实心的图形。  

> the first path construction command is always treated as a `moveTo()`

1. line  
[moveTo(x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo):Moving the pen  
[lineTo(x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo):Draws a line  
2. arcs  
[arc(x, y, radius, startAngle, endAngle, anticlockwise)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc):
Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise (defaulting to clockwise).  
[arcTo(x1, y1, x2, y2, radius)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo):
Draws an arc with the given control points and radius, connected to the previous point by a straight line.  
> ***radians not degrees***: `radians = (Math.PI/180)*degrees.`
3. Bezier and quadratic curves 贝塞尔曲线 cubic三次方 and quadratic二次方 varieties  
[quadraticCurveTo(cp1x, cp1y, x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo): 
Draws a quadratic Bézier curve from the current pen position to the end point specified by x and y, using the control point specified by cp1x and cp1y.  
[bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo): 
Draws a cubic Bézier curve from the current pen position to the end point specified by x and y, using the control points specified by (cp1x, cp1y) and (cp2x, cp2y).  
![differences](https://mdn.mozillademos.org/files/223/Canvas_curves.png)  
4. Rectangles  
[rect(x, y, width, height)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect)
adds a rectangular path to a currently open path.  
> the `moveTo()` method is automatically called with the parameters (x,y)

## Path2D objects:  cache or record drawing commands.
[Path2D()](https://developer.mozilla.org/en-US/docs/Web/API/Path2D/Path2D)
The Path2D() constructor returns a newly instantiated Path2D object, optionally with another path as an argument (creates a copy), or optionally with a string consisting of SVG path data.  

### Using SVG paths
`var p = new Path2D('M10 10 h 80 v 80 h -80 Z');`
>The path will move to point (M10 10) and then move horizontally 80 points to the right (h 80), then 80 points down (v 80), then 80 points to the left (h -80), and then back to the start (z).


