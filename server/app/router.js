const path = require('path')
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const controllers = require(path.resolve(__dirname, 'controller/apicontrollers'))

router.get('/', function(ctx, next) {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(__dirname + '/views/index.html')
    // ctx.response.type = 'json'
    // ctx.body = ctx
    console.log(ctx.session)
})

router.get('/date', function(ctx, next) {
    ctx.response.body = new Date()
})

router.get('/api/getUsersInfo', function(ctx, next) {
    ctx.response.type = 'json'
    ctx.response.body = {
        "username": "charlie"
    }
})

router.post('/api/signin', controllers.signin)
router.post('/api/signup', controllers.signup)

module.exports = router