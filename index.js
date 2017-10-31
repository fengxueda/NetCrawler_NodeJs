//request获取网页
const request = require('request');
const fs = require('fs');

let url = 'https://www.zhihu.com';

let opt = {url:url};
let callback = function (err,res,body) {
    if(err) throw err;
    fs.writeFile('body.html',body,(err)=>{
        if(err) throw err;
        console.log('写入成功');
    });
};

request(opt,callback);
