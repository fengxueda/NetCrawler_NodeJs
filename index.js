// index.js is the entry of the project. 
const http = require('http');
const fs = require('fs');


//获取http网站数据
var url = '';
http.get(url,function (res) {
    var data = '';
    res.on('data',function (chunk) {
        data += chunk;
    });

    res.on('end',function () {
        console.log('成功获取');

        fs.writeFile('data.txt',data,function (err) {
            if(err){
                console.log('写入错误');
                return;
            }

            console.log('成功写入data.txt')
        });
    });
});
