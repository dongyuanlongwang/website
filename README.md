安装说明：
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
公司最近更新一版网站，换成vue做的，静态模板，没有后台，pc端已经自适用手机端，宣传够用了，废话少说，直接上图，拿去，仅有主页，其他页面随后更新，需要的话联系qq:568149471
部署步骤
前期安装nodejs，vue
执行
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
cnpm run dev
如果部署服务器出现404错误，修改
处理vue部署404错误
server {
listen 80;
server_name testwx.wangshibo.com;
root /Data/app/axe_ds/dist;## 自己的目录
index index.html;
access_log /var/log/testwx.log main;
## 注意从这里开始
location / {
try_files $uri KaTeX parse error: Expected 'EOF', got '}' at position 55: …html; }̲ locati… /index.html last;
}
}
![![![输入图片说明](https://images.gitee.com/uploads/images/2020/0514/123028_9a139979_810825.png "搜狗截图20200514105808.png")](https://images.gitee.com/uploads/images/2020/0514/123015_df92d7c2_810825.png "搜狗截图20200514105710.png")](https://images.gitee.com/uploads/images/2020/0514/122954_2070dbb8_810825.png "搜狗截图20200514105648.png")