#### 图像操作能力 can be used to do `dynamic photo compositing` or as `backdrops of graphs`, for `sprites` in games, and so forth
#### 浏览器支持的图片格式(PNG,GIF,JPEG) / canvas
#### 引入图像到canvas里需要以下两步基本操作：
1. [HTMLImageElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)对象/另一个canvas元素的引用 作为源，或通过URL使用图片
2. 使用`drawImage()`函数将图片绘制到画布上

## Data types as an image source
* [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)  
These are images created using the `Image()` constructor, as well as any `<img>` element.  
* [SVGImageElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement)  
These are images embedded using the `<image>` element.  
* [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)  
Using an HTML `<video>` element as your image source grabs the current frame from the video and uses it as an image.  
* [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)  
You can use another `<canvas>` element as your image source.  
> collectively referred to by the type [CanvasImageSource](https://developer.mozilla.org/en-US/docs/Web/API/CanvasImageSource).

## several ways to Get images for use on a canvas
* ### Using images from the same page
1. The [document.images](https://developer.mozilla.org/en-US/docs/Web/API/Document/images) collection
2. The [document.getElementsByTagName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName) method
3. [document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) to retrieve that specific image

* ### Using images from other domains
`<img crossorigin></img>`([HTMLImageElement.crossOrigin](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin))
> 不允许跨域时: [taint the canvas](https://developer.mozilla.org/en-US/docs/HTML/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F)
* ### Using other canvas elements
One of the more practical uses of this would be to use a second canvas element as a thumbnail view of the other larger canvas.
* ### 

* ### 
