#### [Syntax:	alias path;](http://nginx.org/en/docs/http/ngx_http_core_module.html#alias) Default:	—;   Context:	location;
  The path value can contain variables, except $document_root and $realpath_root.   

  ```
  # regular expression should contain captures and alias should refer to these captures (0.7.40)

  location ~ ^/users/(.+\.(?:gif|jpe?g|png))$ {
    alias /data/w3/images/$1;
  }
  ```

#### [Syntax:	root path;](http://nginx.org/en/docs/http/ngx_http_core_module.html#root) Default:	root html;   Context:	http, server, location, if in location
  A path to the file is constructed by merely adding a URI to the value of the root directive.
