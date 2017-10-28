note : 
这个是用node.js来写的一个网络爬虫项目.

安装依赖模块 : 
$ npm init                                    //初始化node.js工程，生成package.json
$ npm install express request cheerio --save  //下载模块包(下载的包都存放在node_module中, 当前工程已经下载)

目录:
app         : 存放应用模块(业务逻辑部分API)
node_mudule : 存放系统模块(系统API)

index.js    : 程序入口 
