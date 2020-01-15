* [fillText(text, x, y [, maxWidth])](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText)
Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.
* [strokeText(text, x, y [, maxWidth])](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText)
Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.

## Styling text
font = value  
textAlign = value  
> start, end, left, right or center. The default value is start.
textBaseline = value  
> top, hanging, middle, alphabetic, ideographic, bottom. The default value is alphabetic
direction = value  
> ltr, rtl, inherit. The default value is inherit

![http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png)  

## Advanced text measurements
measureText()
Returns a TextMetrics object containing the width, in pixels, that the specified text will be when drawn in the current text style.
```
var ctx = document.getElementById('canvas').getContext('2d');
var text = ctx.measureText('foo'); // TextMetrics object
text.width; // 16;
```


  
