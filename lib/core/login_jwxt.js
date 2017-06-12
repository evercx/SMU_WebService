/**
 * Created by EVERCX on 2017/6/12.
 */

const axios = require('axios');
const superagent = require('superagent');
const cheerio = require('cheerio');
const qs = require('querystring');




let m = {

    getSessionidFromJwxt: async function(userNumber,userPassword){


        let indexResult = await axios.get('https://cas.shmtu.edu.cn/cas/login?service=http%3A%2F%2Fjwxt.shmtu.edu.cn%2Fshmtu%2Fhome.action')
            .then((response)=>{
                return  {
                    html: response.data,
                    cookie: response.headers['set-cookie'][0]
                };
            });
        
        let $ = cheerio.load(indexResult.html);
        let lt = $("input[name=lt]").attr('value');
        let execution = $("input[name=execution]").attr('value');
        let postFormData = {
            username:userNumber,
            password:userPassword,
            lt:lt,
            execution:execution,
            "_eventId":"submit",
            "signin":"登录"
        };
        let postLoginHeaders = {
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Encoding':'gzip, deflate, br',
                'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
                'Cache-Control':'max-age=0',
                'Connection':'keep-alive',
                'Host':'cas.shmtu.edu.cn',
                'Content-Type':'application/x-www-form-urlencoded',
                'Cookie':'',
                'Origin':'https://cas.shmtu.edu.cn',
                'Referer':'https://cas.shmtu.edu.cn/cas/login?service=http%3A%2F%2Fjwxt.shmtu.edu.cn%2Fshmtu%2Fhome.action',
                'Upgrade-Insecure-Requests':1,
                'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'
            };

        postLoginHeaders['Cookie'] = indexResult.cookie;
        postLoginHeaders['Content-Length'] = qs.stringify(postFormData).length;
        
        let postResult = axios({
            url: 'https://cas.shmtu.edu.cn/cas/login?service=http%3A%2F%2Fjwxt.shmtu.edu.cn%2Fshmtu%2Fhome.action',
            method: 'post',
            data: qs.stringify(postFormData),
            headers: postLoginHeaders,
            maxRedirects: 1
        });

        return await postResult.then((response)=>{

            if(response.headers['set-cookie']) return response.headers['set-cookie'][0];

            throw new Error("用户信息有误");

        });

    }



};

//m.getSessionidFromJwxt(201310311034,222114);

module.exports = m;