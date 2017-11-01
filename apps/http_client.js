// http_client.js
const http = require('http');
const fs = require('fs');
const https = require('https');

module.exports = HttpClient;

function HttpClient(option) {
    this.option = option;
    this.Get = function () {
        http_client.getRequest(this.option);
    }
    this.Post = function () {
    }
}

var http_client = {

    getFilename: function (path) {
        return (path.substring(path.lastIndexOf('/') + 1, path.end));
    },

    getRequest: function (option) {
        var h = http;
        if (/^https/.test(option)) {
            h = https;
        }

        h.get(option, function (res) {
            var data = '';
            res.on('data', function (chunk) {
                data += chunk;
                console.log('loading...');
            });

            res.on('end', function () {
                //FXIME : 收到4xx或者5xx之类的错误码，此时表示请求失败
                //...

                console.log('成功获取');
                try {
                    var filename = http_client.getFilename(option.path);
                } catch (err) {
                    console.log('Catch exception :')
                    console.log('[WARNING] ' + err);
                    console.log('Try another way...');
                    var filename = http_client.getFilename(option);
                }

                fs.writeFile(filename, data, function (err) {
                    if (err) {
                        console.log('写入错误');
                        return;
                    }
                    console.log('成功写入' + filename);
                });
            });
        });
    },
}
