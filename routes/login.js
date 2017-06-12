/**
 * Created by EVERCX on 2017/6/12.
 */


const config = require('config');
const router = require('koa-router')();
const login_controller = require('../controllers/login_controller')

router.prefix(config.get("api_url"));


router.post('/login', login_controller.login);

module.exports = router;