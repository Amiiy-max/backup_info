所有路径都指向[https://cdn.buybuystore.cn/h5/test/index.html](https://cdn.buybuystore.cn/h5/test/index.html)
```
    location / {
        proxy_pass https://cdn.buybuystore.cn/h5/test/;
        try_files $uri $uri @router;
        //try_files $uri $uri/ @router;  ---> 直接访问https://h5.buybuystore.cn无效,https://h5.buybuystore.cn/post有效
    }

    location @router {
       rewrite ^/(.*) /index.html last;
    }
```
