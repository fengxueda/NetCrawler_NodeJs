// index.js is the entry of the project. 

var HttpClient = require('./apps/http_client');
var querystring = require('querystring');
var url = require('url');

getArgs = {
};

var postData = {
};

var content = querystring.stringify(getArgs);

var url_src = 'http://183.2.205.180/6571F9406D33671E7AFFE4E58/03000A010059F7EA614FC711EF7458F62994FD-5A73-DAD7-7E38-79BB36B8901A.mp4';
// var url_src = 'http://www.cnblogs.com/fangsmile/p/6245298.html';

// GET option
var get_option = {
    type: url.parse(url_src).protocol,
    hostname: url.parse(url_src).hostname,
    port: !url.parse(url_src).port ? url.parse(url_src).port : 80,
    path: url.parse(url_src).path + (content != '' ? '?' + content : ''),
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, sdch, utf-8',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Host': url.parse(url_src).hostname,
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    }
};

var post_option = {
    type: url.parse(url_src).protocol,
    hostname: url.parse(url_src).hostname,
    port: !url.parse(url_src).port ? url.parse(url_src).port : 80,
}

client = new HttpClient(get_option);
client.Get();
// client = new HttpClient(post_option, querystring.stringify(postData));
// client.Post();