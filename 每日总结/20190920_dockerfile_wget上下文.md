* 在Dockerfile中向镜像保存url文件:  
RUN wget -c http://gosspublic.alicdn.com/ossutil/1.6.7/ossutil64 && mv ossutil64 /opt/resource  

* COPY ossutil64 /opt/resource/ossutil64是从build上下文环境复制到deamon环境  
* ADD 从url拷贝文件到镜像中 [官方文档的最佳实践](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy)中却强烈建议不要这么用!!
docker 官方建议我们当需要从远程复制文件时，最好使用 curl 或 wget 命令来代替 ADD 命令。原因是，当使用 ADD 命令时，会创建更多的镜像层，当然镜像的 size 也会更大
