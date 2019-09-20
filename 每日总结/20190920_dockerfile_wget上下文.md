### 在Dockerfile中向镜像保存url文件:  
RUN wget -c http://gosspublic.alicdn.com/ossutil/1.6.7/ossutil64 && mv ossutil64 /opt/resource  

* COPY ossutil64 /opt/resource/ossutil64是从build上下文环境复制到deamon环境  
* ADD 从url拷贝文件到镜像中 [官方文档的最佳实践](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy)中却强烈建议不要这么用!!
docker 官方建议我们当需要从远程复制文件时，最好使用 curl 或 wget 命令来代替 ADD 命令。原因是，当使用 ADD 命令时，会创建更多的镜像层，当然镜像的 size 也会更大

docker alpine:edge 默认sh是busybox,会造成 `/bin/sh: ./ossutil64: not found`
```
cd /bin/
ls -lh sh # sh -> /bin/busybox
```

### 善用Dockerfile缓存
不易变的部分放前边，可以使用缓存的layer
```
Step 1/9 : FROM alpine:edge
 ---> 70997d35b3ed
Step 2/9 : MAINTAINER gup <1725763838@qq.com>
 ---> Using cache                                     # *Using cache*
 ---> 1cf6f1a6e19a
Step 3/9 : RUN apk update && apk upgrade && apk add --update bash jq
 ---> Using cache                                     # *Using cache*
 ---> f65a8033db31
Step 4/9 : COPY ./assets/* /opt/resource/
 ---> cdd4735df143
Step 5/9 : RUN wget -c http://gosspublic.alicdn.com/ossutil/1.6.7/ossutil32 && mv ossutil32 /opt/resource
 ---> Running in 99ec8b3011b5
Connecting to gosspublic.alicdn.com (101.37.183.186:80)
saving to 'ossutil32'
ossutil32              8% |**                              |  717k  0:00:11 ETA
ossutil32            100% |********************************| 8625k  0:00:00 ETA
'ossutil32' saved
Removing intermediate container 99ec8b3011b5
 ---> ac8f50777aad
Step 6/9 : RUN chmod 777 /opt/resource/ossutil32
 ---> Running in 51529cd6a9aa
Removing intermediate container 51529cd6a9aa
 ---> a45a50888e14
Step 7/9 : RUN chmod 777 /opt/resource/in
 ---> Running in 826cf09d91ec
Removing intermediate container 826cf09d91ec
 ---> f3f055a53d1d
Step 8/9 : RUN chmod 777 /opt/resource/out
 ---> Running in b333eb6d39a9
Removing intermediate container b333eb6d39a9
 ---> 8c159bc4e555
Step 9/9 : RUN chmod 777 /opt/resource/check
 ---> Running in e7089c5c0f62
```

### $PATH下目录简介 /bin, /usr/bin, /sbin, /usr/sbin
./bin:

bin为binary的简写主要放置一些系统的必备执行档案。如：cat,cp, chmod df, dmesg, gzip, kill, ls, mkdir, more, mount, rm, su, tar 等。

/usr/bin:

主要放置一些应用软体工具的必备执行档例。如：c++、g++、gcc、chdrv、diff、dig、du、eject、elm、free、gnome*、 gzip、htpasswd、kfm、ktop、last、less、locale、m4、make、man、mcopy、ncftp、 newaliases、nslookup passwd、quota、smb*、wget等。 

/sbin:

主要放置一些系统管理的必备程式例。如：cfdisk、dhcpcd、dump、e2fsck、fdisk、halt、ifconfig、ifup、 ifdown、init、insmod、lilo、lsmod、mke2fs、modprobe、quotacheck、reboot、rmmod、 runlevel、shutdown等。 

/usr/sbin:

放置一些网路管理的必备程式例。如:dhcpd、httpd、imap、in.*d、inetd、lpd、named、netconfig、nmbd、samba、sendmail、squid、swap、tcpd、tcpdump等。
