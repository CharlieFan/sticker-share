const path = require('path')
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const controllers = require(path.resolve(__dirname, 'controller'))

// console.log(controllers)
let authen = async function(ctx, next) {
    let a = false
    try {
        if (!a) {
            ctx.throw(403, 'authentication failed')
        }

        await next()
    } catch (err) {
        ctx.response.status = 403
        ctx.response.message = err.message
    }
}
// GET
router.get('/', function(ctx, next) {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(__dirname + '/views/index.html')
})

router.get('/date', function(ctx, next) {
    ctx.response.body = new Date()
})

router
    .get('getUserInfo', '/api/getUserInfo/:id', authen, controllers.UserController.getUser)

// POST
router
    .post('/api/signin', controllers.UserController.signin)
    .post('/api/signup', controllers.UserController.signup)

module.exports = router
