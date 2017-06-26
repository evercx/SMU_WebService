const router = require('koa-router')()

router.get('/', async (ctx, next) => {

  if (ctx.protocol === "https"){
    await ctx.render('index', {
      title: 'Hello World!(HTTPS)',
      subtitle: 'You have succeeded in running this web service.'
    })
  }else{
    await ctx.render('index', {
      title: 'Hello World!(HTTP)',
      subtitle: 'You have succeeded in running this web service.'
    })
  }

})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router;
