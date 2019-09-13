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

https http2
```
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile      on;
    keepalive_timeout  65;

    #gzip  on;
	
    server {
	listen          80;
        server_name     www.gupengblog.cn;
        return 301 https://$server_name$request_uri;
    }

    server {
	listen          443 ssl http2;
        server_name     www.gupengblog.cn;
        ssl_certificate         /ssl/1_www.gupengblog.cn_bundle.crt;
        ssl_certificate_key     /ssl/2_www.gupengblog.cn.key;
        ssl_protocols   TLSv1 TLSv1.1 TLSv1.2;
        ssl_session_cache	shared:SSL:50m;

        location / {
           proxy_pass  http://front.qiniu.gupengblog.cn/;
        }

	location = /test {
	  default_type	application/json;
          return 200 '{"name":"test", "type":"json", "usage":"test", "desc":"return stream directly"}';
        }

	location /images {
            proxy_pass  http://image.qiniu.gupengblog.cn/;	#最后一个/　决定相对路径还是绝对路径
        }
    }

    server {
        listen       80;
        server_name  49.235.239.177;
        access_log   logs/49.235.239.177.log;
        location /images {
            proxy_pass  http://image.qiniu.gupengblog.cn/;
        }
        
        location ~ ^/users/(.+\.(?:gif|jpe?g|png|html))$ {
           alias /data/images/$1;
        }
		
        location / {
           alias /data/;
           index        index12345.html;
           autoindex    on;            #允许nginx在浏览器以文件夹形式访问
           autoindex_exact_size  off;  #显示文件大小
           autoindex_localtime   on;   #显示文件时间
        }
		
        location = /test {
	  default_type	application/json;
          return 200 '{"name":"test", "type":"json", "usage":"test", "desc":"return stream directly"}';
        }
    }
}
```
反向代理静态网站(存在缓存问题)
```
server {
	listen          80;
	server_name     www.gupengblog.cn;

	location = / {
	  proxy_pass   http://front.qiniu.gupengblog.cn/model-viewer/index.html;
	}

	location / {
	   proxy_pass  http://front.qiniu.gupengblog.cn/model-viewer/;
	}
}
```
    

