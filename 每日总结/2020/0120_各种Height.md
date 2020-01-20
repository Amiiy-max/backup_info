### Web
[Window.innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight):  interior height of the window(horizontal scroll bar)  
[Window.outerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight): the height in pixels of the whole browser window, (sidebar, window chrome, and window-resizing borders/handles)  
![](https://developer.mozilla.org/@api/deki/files/213/=FirefoxInnerVsOuterHeight2.png)  
> To obtain the height of the window minus its horizontal scroll bar and any borders, 
use the root [`<html>`]() element's [clientWidth()](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth) property instead.


### 微信小程序
```
wx.getSystemInfoSync().windowHeight    // 获取当前窗口的高度
wx.getSystemInfoSync().screenHeight    // 获取当前屏幕的高度

wx.getSystemInfoSync().windowWidth   // 获取当前窗口的宽度
wx.getSystemInfoSync().model    // 获取当前采用的设备
wx.getSystemInfoSync().pixelRatio   
wx.getSystemInfoSync().language   // 获取当前所采用的的语言
wx.getSystemInfoSync().version    // 获取当前设备的版本
```
