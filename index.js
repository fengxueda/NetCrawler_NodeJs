// index.js is the entry of the project. 
const http = require('http');
const fs = require('fs');
const https = require('https');//使用request可能会更简单点

var url = 'http://www.imooc.com/video/15316';
getUrlData(url);



function getUrlData(url) {
    var h = http;
    if(/^https/.test(url)){
        h = https;
    }

    h.get(url,function (res) {
        var data = '';
        res.on('data',function (chunk) {
            data += chunk;
        });

        res.on('end',function () {
            console.log('成功获取');

            fs.writeFile('data.html',data,function (err) {
                if(err){
                    console.log('写入错误');
                    return;
                }

                console.log('成功写入data.txt')
            });
        });
    });
}
