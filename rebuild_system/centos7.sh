##[zsh oh-my-zsh](https://www.jianshu.com/p/27c8088dc8f7)   
##agnoster [solarized](https://ethanschoonover.com/solarized/) powerline font   
##nodejs   
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
wget https://ftp.pcre.org/pub/pcre/pcre2-10.33.tar.gz
tar zxvf pcre2-10.33.tar.gz -C /app/software/
cd /app/software/pcre2-10.33
./configure
make && make install
cd /download
wget http://nginx.org/download/nginx-1.16.1.tar.gz
tar zxvf nginx-1.16.1.tar.gz -C /app/
cd /app/nginx-1.16.1
./configure --with-http_ssl_module --with-pcre=/app/software/pcre2-10.33
make
make install
/usr/local/nginx/sbin/nginx -v

##zsh
yum -y update && yum -y install zsh 
chsh -s $(which zsh)
cd /download
git clone https://github.com/powerline/fonts.git --depth=1
cd /download/fonts
./install.sh
cd /
rm -rf /download/fonts
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
