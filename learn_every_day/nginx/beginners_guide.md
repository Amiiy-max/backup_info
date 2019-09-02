ps -ax | grep nginx

nginx consists of modules which are controlled by directives specified in the configuration file. 
Directives are divided into ***simple directives*** and ***block directives***.
If a block directive can have other directives inside braces, it is called a ***context*** (examples: ***events***, ***http***, ***server***, and ***location***).
>block directive也可以有参数

***main context***.    
The events and http directives reside in the main context, server in http, and location in server.

server blocks distinguished by ***ports*** on which they [listen]() to and by [***server names***]().

### Serving Static Content
For matching requests, the URI will be added to the path specified in the [root](http://nginx.org/en/docs/http/ngx_http_core_module.html#root) directive, 
that is, to /data/www, to form the path to the requested file on the local file system   
If there are several matching location blocks nginx selects the one with the ***longest prefix***.   
```
server {
    location / {
        root /data/www;
    }

    location /images/ {
        root /data;
    }
}
```   
***(In response to requests with URIs starting with /images/, the server will send files from the /data/images directory. )***

### Setting Up a Simple Proxy Server
```
server {
    location / {
        proxy_pass http://localhost:8080;
    }

    location ~ \.(gif|jpg|png)$ { # A regular expression should be preceded with ~.
        root /data/images;
    }
}

server {
    listen 8080;
    root /data/up1; # Note that the root directive is placed in the server context.

    location / {
    }
}
```
查找顺序: 1.prefixed 2 regular ex
regular expression > longest prefix;

### Setting Up FastCGI Proxying
```
server {
    location / {
        fastcgi_pass  localhost:9000;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param QUERY_STRING    $query_string;
    }

    location ~ \.(gif|jpg|png)$ {
        root /data/images;
    }
}
```
