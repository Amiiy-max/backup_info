## [globalCompositeOperation (12 compositing operations)](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing)  :wink:
 
#### 1. ***source-over***: default

#### 2. ***source-in***: drawn overlap, otherwise transparent

#### 3. ***source-out***: drawn not overlap

#### 4. ***source-atop***: 

#### 5. ***destination-over***: 

#### 6. ***destination-in***:

#### 7. ***destination-out***:

#### 8. ******:

#### 9. ******:

#### 10. ******:

#### 11. ******:

#### 12. ******:

#### 13. ******:

#### 14. ******:

#### 15. ******:

#### 16. ******:

## Clipping paths: (normal canvas but act as a mask to hide unwanted parts of shapes)  
![](https://mdn.mozillademos.org/files/209/Canvas_clipping_path.png)
> 五角星红线就是clipping path  
> `source-in` and `source-atop`  
> clipping path 不画出来  
> clipping path 不受新画的shape影响  
> By default the `<canvas>` element has a clipping path that's the exact same size as the canvas itself.

### paths' method: stroke() fill() clip()
[clip()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip)  
Turns the path currently being built into the current clipping path.
> You use `clip()` instead of `closePath()` to close a path and turn it into a clipping path instead of `stroking` or `filling` the path.

五角星:
```html
<html>

<body onload="draw();">
    <canvas id="canvas" width="300" height="300"></canvas>
</body>

<script>
    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.translate(150, 150);

        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.rotate(- Math.PI / 2);
        const r = 60;
        ctx.moveTo(r, 0);
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                ctx.rotate(Math.PI / 5);
                if (i % 2 === 0) {
                    ctx.lineTo((r / 0.525731) * 0.200811, 0);
                } else {
                    ctx.lineTo(r, 0);
                }
                ctx.stroke();
            }, 100 * i);
        }
    }
</script>

</html>
```



