// index.js is the entry of the project. 

var HttpClient = require('./apps/http_client');

// var option = {
//     hostname: '183.2.205.180',
//     path: '/6571F9406D33671E7AFFE4E58/03000A010059F7EA614FC711EF7458F62994FD-5A73-DAD7-7E38-79BB36B8901A.mp4',
//     headers: {
//         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//         'Accept-Encoding': 'gzip, deflate, sdch, utf-8',
//         'Accept-Language': 'zh-CN,zh;q=0.8',
//         'Connection': 'keep-alive',
//         'Host': '183.2.205.180',
//         'Referer': 'localhost',
//         'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
//     }
// };

var option = 'http://www.cnblogs.com/fangsmile/p/6245298.html';

var client = new HttpClient(option);
client.Get();
