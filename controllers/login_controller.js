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

            let resultObj = await login_jwxt.getUseridFromJwxt(userNumber,userPassword);
            console.log(resultObj.token_id);
            ctx.body = {
                "status":"200",
                "msg":"登陆成功",
                "token_id":resultObj.token_id,
                "userName":resultObj.userName
            };

        } catch (err) {
            ctx.body = {
                "status": "401",
                "msg": err.message
            };
        }


    }

}