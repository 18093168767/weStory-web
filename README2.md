<!--
 * @Author: your name
 * @Date: 2021-10-12 17:51:50
 * @LastEditTime: 2021-10-14 11:26:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ourstory\README2.md
-->
http://192.168.43.142:8091

docker  exec  -it  aeb173c68446  /bin/bash
docker cp /opt/ROOT aeb173c68446:/usr/local/tomcat/webapps
aeb173c68446 /usr/local/tomcat/webapps
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /data/portainer:/data portainer/portainer
docker run -d -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --name prtainer-test portainer/portainer

docker cp /root/my-app/nginx.conf 16da366c727d:/etc/nginx
docker cp /root/my-app/nginx.conf 16da366c727d:/etc/nginx/conf.d/default.conf





================
在docker容器中安装vim
apt-get update
apt-get install vim
vim
：set number
底线命令模式

:0或:1跳到文件第一行

:$跳到文件最后一行

docker-compose up -d

