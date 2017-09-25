const path = require('path')
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const controllers = require(path.resolve(__dirname, 'controller'))

// console.log(controllers)

// GET
router.get('/', function(ctx, next) {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(__dirname + '/views/index.html')
})

router.get('/date', function(ctx, next) {
    ctx.response.body = new Date()
})

router.get('/api/getUsersInfo', controllers.UserController.getUser)

// POST
router
    .post('/api/signin', controllers.UserController.signin)
    .post('/api/signup', controllers.UserController.signup)

module.exports = router
