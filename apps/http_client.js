// http_client.js
const http = require('http');
const fs = require('fs');
const https = require('https');

module.exports = HttpClient;

function HttpClient(option, body) {
    this.option = option;
    this.Get = function () {
        this.option.headers.method = 'GET';
        http_client.getRequest(this.option);
    }
    this.Post = function () {
        this.option.headers.method = 'POST';
        http_client.postRequest(this.option, this.body);
    }
}

var http_client = {

    perHandler: function (message) {
        return;
    },

    getFilename: function (path) {
        if (-1 == path.lastIndexOf('?')) {
            return (path.substring(path.lastIndexOf('/') + 1, path.end));
        } else {
            return (path.substring(path.lastIndexOf('/')) + 1, path.lastIndexOf('?'));
        }
    },

    getRequest: function (option) {

        var protocol = (option.type == 'https:' ? https : http);
        req = protocol.request(option, function (res) {
            console.log('STATUS:' + res.statusCode);
            console.log('HEADERS:' + JSON.stringify(res.headers));

            var data = '';
            res.on('error', function (err) {
                console.log('Error message : ' + err);
            });

            res.on('data', function (chunk) {
                data += chunk;
            });

            if (res.statusCode > 300) {
                return;
            }

            res.on('end', function () {
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
                        console.log('写入错误 : ' + err);
                        return;
                    }
                    console.log('成功写入' + filename);
                });
            });
        });
        req.end();
    },

    postRequest: function (option, body) {
        var protocol = (option.type == 'https:' ? https : http);
        req = protocol.request(option, function (res) {
            res.setEncoding('utf8');
            console.log('STATUS:' + res.statusCode);
            console.log('HEADERS:' + JSON.stringify(res.headers));

            var data = '';
            res.on('error', function (err) {
                console.log('Error message : ' + err);
            });

            res.on('data', function (chunk) {
                data += chunk;
            });

            if (res.statusCode > 300) {
                return;
            }

            res.on('end', function () {
                console.log('Post成功');
            });
        });

        if (body != null) {
            req.write(body);
        }
        req.end();
    },
}
