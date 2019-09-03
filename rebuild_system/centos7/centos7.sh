##[zsh oh-my-zsh](https://www.jianshu.com/p/27c8088dc8f7)   
##[在Linux系统安装Nodejs 最简单步骤](https://www.cnblogs.com/Logan626/p/11191894.html)
##agnoster [solarized](https://ethanschoonover.com/solarized/) powerline font     
##[nginx](http://nginx.org/en/docs/beginners_guide.html)   


mkdir /app
mkdir /app/software
mkdir /download

##node
yum -y install gcc gcc-c++ kernel-devel git
cd /download
wget https://npm.taobao.org/mirrors/node/v12.9.1/node-v12.9.1-linux-x64.tar.xz
tar -xvf node-v12.9.1-linux-x64.tar.xz -C /app/software
cd /app/software/
mv node-v12.9.1-linux-x64 node-v12.9.1
ln -s /app/software/node-v12.9.1/bin/npm /usr/local/bin/
ln -s /app/software/node-v12.9.1/bin/node /usr/local/bin/
echo "export NODE_HOME=/app/software/node-v12.9.1"  >> /etc/profile
echo -e "export PATH=\$NODE_HOME/bin:\$PATH"  >> /etc/profile
source /etc/profile
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g live-server

##nginx
yum -y install make zlib zlib-devel gcc gcc-c++ libtool  openssl openssl-devel
cd /download
wget http://nginx.org/download/nginx-1.16.1.tar.gz
tar zxvf nginx-1.16.1.tar.gz -C /app/
cd /app/nginx-1.16.1
./configure --with-http_ssl_module --with-pcre
make
make install
cd /usr/local/nginx/conf
wget https://raw.githubusercontent.com/gugegev5/backup_info/master/rebuild_system/centos7/nginx.conf -O nginx.conf
/usr/local/nginx/sbin/nginx

#extras
mkdir -p /data/gupeng/love/lihongjia
mkdir -p /data/lihongjia/love/gupeng
yum install -y tree

##last: zsh
yum -y update && yum -y install zsh 
chsh -s $(which zsh)
cd /download
git clone https://github.com/powerline/fonts.git --depth=1
cd /download/fonts
./install.sh
cd /
rm -rf /download/fonts
echo y | sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
sed -i 's/ZSH_THEME="robbyrussell"/ZSH_THEME="agnoster"/' ~/.zshrc
zsh
