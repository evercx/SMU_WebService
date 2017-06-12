/**
 * Created by EVERCX on 2017/6/12.
 */

const login_jwxt = require('../lib/core/login_jwxt');


module.exports = {

    login: async function(ctx, next){

        const userNumber = ctx.request.body.userNumber || null;
        const userPassword = ctx.request.body.userPassword || null;

        if(!userNumber || !userPassword){
            ctx.body = {
                "status":"401",
                "msg":"用户信息填写有误"
            };
            return;
        }

        try {

            let token_id = await login_jwxt.getSessionidFromJwxt(userNumber,userPassword);
            console.log(token_id);
            ctx.body = {
                "status":"200",
                "msg":"登陆成功",
                "token_id":token_id
            };

        } catch (err) {
            ctx.body = {
                "status": "401",
                "msg": err.message
            };
        }


    }

}