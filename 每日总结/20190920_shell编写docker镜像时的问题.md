### 在Dockerfile中向镜像保存url文件:  
RUN wget -c http://gosspublic.alicdn.com/ossutil/1.6.7/ossutil64 && mv ossutil64 /opt/resource  

* COPY ossutil64 /opt/resource/ossutil64是从build上下文环境复制到deamon环境  
* ADD 从url拷贝文件到镜像中 [官方文档的最佳实践](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy)中却强烈建议不要这么用!!
docker 官方建议我们当需要从远程复制文件时，最好使用 curl 或 wget 命令来代替 ADD 命令。原因是，当使用 ADD 命令时，会创建更多的镜像层，当然镜像的 size 也会更大

docker alpine:edge 1.运行不了64位程序,要下载32位版本ossutil32 2.默认sh是busybox. => 会造成 `/bin/sh: ./ossutil64: not found`
```
cd /bin/
ls -lh sh # sh -> /bin/busybox
```

### 善用Dockerfile缓存
不易变的部分放前边，可以使用缓存的layer
```
Step 1/5 : FROM alpine:edge
 ---> 70997d35b3ed
Step 2/5 : MAINTAINER gup <1725763838@qq.com>
 ---> Using cache
 ---> 1cf6f1a6e19a
Step 3/5 : RUN apk update && apk upgrade && apk add --update bash jq && \
 wget -c http://gosspublic.alicdn.com/ossutil/1.6.7/ossutil32 && \
 mkdir -p /util_modules && mv ossutil32 /util_modules && \
	chmod 777 /util_modules/ossutil32
 ---> Using cache
 ---> 95310bfbda81
Step 4/5 : COPY ./assets/* /opt/resource/
 ---> 00261ef5c958
Step 5/5 : RUN chmod 777 -R /opt/resource
 ---> Running in da554c1943bb
Removing intermediate container da554c1943bb
 ---> 3de772386902
Successfully built 3de772386902
Successfully tagged ssl.gupengblog.cn/aliyun-oss-resource:2.6
```
> 修改第4步的文件重新build,push时总是有8M的layer，因为step 3 chmod 777 /opt/resource/ossutil32, step 5 chmod 777 -R /opt/resource, 第五层layer又包含了一次ossutil,
改成另一个路径/util_modules/ossutil32就可以了

### $PATH下目录简介 /bin, /usr/bin, /sbin, /usr/sbin
./bin:

bin为binary的简写主要放置一些系统的必备执行档案。如：cat,cp, chmod df, dmesg, gzip, kill, ls, mkdir, more, mount, rm, su, tar 等。

/usr/bin:

主要放置一些应用软体工具的必备执行档例。如：c++、g++、gcc、chdrv、diff、dig、du、eject、elm、free、gnome*、 gzip、htpasswd、kfm、ktop、last、less、locale、m4、make、man、mcopy、ncftp、 newaliases、nslookup passwd、quota、smb*、wget等。 

/sbin:

主要放置一些系统管理的必备程式例。如：cfdisk、dhcpcd、dump、e2fsck、fdisk、halt、ifconfig、ifup、 ifdown、init、insmod、lilo、lsmod、mke2fs、modprobe、quotacheck、reboot、rmmod、 runlevel、shutdown等。 

/usr/sbin:

放置一些网路管理的必备程式例。如:dhcpd、httpd、imap、in.*d、inetd、lpd、named、netconfig、nmbd、samba、sendmail、squid、swap、tcpd、tcpdump等。

### shell 遍历数组时字符串空格问题
(将分隔符的字符串转为数组的几种方法)[https://blog.csdn.net/Jerry_1126/article/details/83930956]
```shell
arr=("hello world" "hello China");
for e in ${arr[@]}; do echo $e; done;
#hello world
#hello China
```
```shell
arrstr='"hello world" "hello China"';
arr=($arrstr);
for e in ${arr[@]}; do echo $e; done;
#"hello
#world"
#"hello
#China"
```
```shell
IFS=,
arrstr='hello world,hello China';
arr=($arrstr);
for e in ${arr[@]}; do echo $e; done;
#hello world
#hello China
```

### Shell脚本中$0、$?、$!、$$、$*、$#、$@等的意义说明
```shell
$$
Shell本身的PID（ProcessID，即脚本运行的当前进程ID号）
$!
Shell最后运行的后台Process的PID(后台运行的最后一个进程的进程ID号)
$?
最后运行的命令的结束代码（返回值）即执行上一个指令的返回值 (显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误)
$-
显示shell使用的当前选项，与set命令功能相同
$*
所有参数列表。如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数，此选项参数可超过9个。
$@
所有参数列表。如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。
$@ 跟$*类似，但是可以当作数组用
$#
添加到Shell的参数个数
$0
Shell本身的文件名
$1～$n
添加到Shell的各参数值。$1是第1参数、$2是第2参数…。
```

### EOF
```shell
body="$(cat <<EOF
{
  "attachments": [
      {
          "title":      "${BUILD_TEAM_NAME}/pipelines/${BUILD_PIPELINE_NAME}/jobs/${BUILD_JOB_NAME}",
          "title_link": "${ATC_EXTERNAL_URL}/teams/${BUILD_TEAM_NAME}/pipelines/${BUILD_PIPELINE_NAME}/jobs/${BUILD_JOB_NAME}/builds/${BUILD_NAME}"
      }
  ],
  "channel":    "${channel}",
  "text":       "${message}",
  "avatar":     "https://concourse-ci.org/images/trademarks/concourse-black.png",
  "alias":      "${alias}"
}
EOF
)"
```
