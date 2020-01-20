
### 1. 服务端redux数据通过`<script id="__NEXT_DATA__" type="application/json" crossorigin="anonymous">`传给前端
[`const data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent)`](https://github.com/zeit/next.js/blob/552f3b43020471fc112a978662d2a34396d55cd8/packages/next/client/index.js#L26)
