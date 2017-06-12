/**
 * Created by EVERCX on 2017/6/12.
 */


const config = require('config');
const router = require('koa-router')();
router.prefix(config.get("api_url"));

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
});