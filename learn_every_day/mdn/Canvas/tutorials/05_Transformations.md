#### more powerful ways to `translate` the origin to a different position, `rotate` the grid and even `scale` it.

## Saving and restoring state
* [save()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save) 入栈  
Saves the entire state of the canvas.  
* [restore()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore) 出栈  
Restores the most recently saved canvas state.  
> Each time the restore() method is called, the last saved state is popped off the stack and all saved settings are restored.
#### A drawing state consists of:
1. The transformations that have been applied (i.e. translate, rotate and scale – see below).
2. The current values of the following attributes: strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled.
3. The current [clipping path](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing#Clipping_paths)

## Translating
[translate(x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate):  
Moves the canvas and its origin on the grid.    
![](https://mdn.mozillademos.org/files/234/Canvas_grid_translate.png)

## Rotating
[rotate(angle)]():  
Rotates the canvas clockwise around the current origin by the angle number of `radians`.  
![](https://mdn.mozillademos.org/files/233/Canvas_grid_rotate.png)
> 旋转的中心点始终是 canvas 的原点,或translate后的原点

## Scaling: increase or decrease the units in our canvas grid
[scale(x, y)]():  
`< 1.0` reduce the unit size. `> 1.0` increase the unit size. `= 1.0` leave the units the same size.  
#### axis mirroring: 
`translate(0,canvas.height); scale(1,-1);` => you will have the well-known Cartesian coordinate system, with the origin in the bottom left corner  

## Transforms: modifications directly to the transformation matrix.变形矩阵
1. [transform(a, b, c, d, e, f)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform)
Multiplies乘 the current transformation matrix with the matrix described by its arguments. The transformation matrix is described by:   
`\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]`
> If any of the arguments are [Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) the transformation matrix must be marked as infinite instead of the method throwing an exception.

#### parameters:  
a (m11): Horizontal scaling.  
b (m12): Horizontal skewing.(歪曲)  
c (m21): Vertical skewing.  
d (m22): Vertical scaling.  
e (dx): Horizontal moving.  
f (dy): Vertical moving.  

2. [setTransform(a, b, c, d, e, f)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform):  
undoes the current transformation, then sets the specified transform, all in one step.

3. [resetTransform()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/resetTransform):
等同于`ctx.setTransform(1, 0, 0, 1, 0, 0)`;

