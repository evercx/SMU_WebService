var superagent =  require('superagent');
var cheerio = require('cheerio');

var postLoginHeaders = {
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate, sdch',
    'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
    'Cache-Control':'max-age=0',
    'Connection':'keep-alive',
    'Host':'jwxt.shmtu.edu.cn',
    //'Origin':'https://cas.shmtu.edu.cn',
    'Cookie':[ 'JSESSIONID=612C57B42147E07D5494DCDCEE501DE5; Path=/shmtu/; HttpOnly',
  'SVRNAME=xk13; path=/' ],
    'Referer':'http://jwc.shmtu.edu.cn/LinkText.aspx?id=b47acdbc-d1e4-41a5-a29b-e9c8d6437c31',
    //'Referer':'https://cas.shmtu.edu.cn/cas/login?service=http%3A%2F%2Fportal.shmtu.edu.cn%2Fdcp%2Findex.jsp',
    'Upgrade-Insecure-Requests':1,
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36'
}

superagent.get('http://jwxt.shmtu.edu.cn/shmtu/studentDetail.action')
	.set(postLoginHeaders)
    .end(function(err,res1){
    	console.log(res1.text);
    });