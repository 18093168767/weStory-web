<!--
 * @Author: your name
 * @Date: 2021-10-12 17:51:50
 * @LastEditTime: 2021-10-14 18:02:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ourstory\README2.md
-->
http://192.168.43.142:8091



cd /usr/local/src

1：Nginx一般推荐安装到linux系统，而且要安装c语言的编译环境gcc。
nginx是C语言开发，建议在linux上运行，本教程使用Centos6.6作为安装环境。

 gcc

安装nginx需要先将官网下载的源码进行编译，编译依赖gcc环境，如果没有gcc环境，需要安装gcc：

yum -y install gcc

 PCRE

PCRE(Perl Compatible Regular Expressions)是一个Perl库，包括 perl 兼容的正则表达式库。nginx的http模块使用pcre来解析正则表达式，所以需要在linux上安装pcre库。

yum install -y pcre pcre-devel

注：pcre-devel是使用pcre开发的一个二次开发库。nginx也需要此库。

zlib

zlib库提供了很多种压缩和解压缩的方式，nginx使用zlib对http包的内容进行gzip，所以需要在linux上安装zlib库。

yum install -y zlib zlib-devel

 

 openssl

OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及SSL协议，并提供丰富的应用程序供测试或其它目的使用。

nginx不仅支持http协议，还支持https（即在ssl协议上传输http），所以需要在linux安装openssl库。

yum install -y openssl openssl-devel

2:编译安装
2.1
打开虚拟机，输入命令：
cd  /usr/local/src   进入下载目录
wget http://nginx.org/download/nginx-1.8.0.tar.gz
2.2 解压安装
tar -zxvf nginx-1.8.0.tar.gz
cd nginx-1.8.0.
2.3 将以下参数复制上去
./configure \

--prefix=/usr/local/nginx \

--pid-path=/var/run/nginx/nginx.pid \

--lock-path=/var/lock/nginx.lock \

--error-log-path=/var/log/nginx/error.log \

--http-log-path=/var/log/nginx/access.log \

--with-http_gzip_static_module \

--http-client-body-temp-path=/var/temp/nginx/client \

--http-proxy-temp-path=/var/temp/nginx/proxy \

--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \

--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \

--http-scgi-temp-path=/var/temp/nginx/scgi


2.4
make
make install
安装成功查看安装目录

3：启动
cd /usr/local/nginx/sbin

./nginx
4.停止
方式1，快速停止：

cd /usr/local/nginx/sbin

./nginx -s stop

此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。

 

方式2，完整停止(建议使用)：

cd /usr/local/nginx/sbin

./nginx -s quit

此方式停止步骤是待nginx进程处理任务完毕进行停止。

5.重启nginx
方式1，先停止再启动（建议使用）：

对nginx进行重启相当于先停止nginx再启动nginx，即先执行停止命令再执行启动命令。

如下：

./nginx -s quit

./nginx

 

方式2，重新加载配置文件：

当nginx的配置文件nginx.conf修改后，要想让配置生效需要重启nginx，使用-s reload不用先停止nginx再启动nginx即可将配置信息在nginx中生效，如下：

./nginx -s reload

附 ： 一些nginx有关基本命令

    -> /usr/local/nginx/sbin/nginx 启动
    -> /usr/local/nginx/sbin/nginx -t 测试配置文件
    -> /usr/local/nginx/sbin/nginx -s reload 重启
    -> /usr/local/nginx/sbin/nginx -v 查看nginx版本
    -> /usr/local/nginx/sbin/nginx -V 查看nginx版本，及配置信息
    -> netstat -antlp | grep 80     nginx占用80端口，检查是否启动
    -> ps -ef | grep nginx 命令ps查找nginx的主进程号，检查是否启动(假设主进程号为3514)
    -> kill -QUIT 3514     从容停止
    -> kill -TERM 3514     快速停止
    -> kill -9 3514         强制停止，只关闭一个主进程号，其余进程号仍在运行
    -> kill -9 3514 3515 3525     强制关闭nginx所有进程号
    -> kill -HUP 3514 平滑重启

    /usr/local/nginx/sbin

    ps -ef|grep nginx