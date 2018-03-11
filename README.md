### docker容器下的judge core
+ 先下载安装docker，之后在docker里执行 docker image build -t nkujudge 'url'(你的路径)
+ 之后docker container run -p 8000:3000 -it nkujudge /bin/bash
+  然后npm install再 npm start即可运行
+ 接口只有一个/submit（访问192.168.99.100:8000/submit)，内核还没有写
