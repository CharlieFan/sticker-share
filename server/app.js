const Koa = require('koa')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const router = require('./app/router')
const config = require('./config')
const statics = serve('./app/public')
const app = new Koa()

// connect to database
mongoose.Promise = global.Promise
mongoose.connect(config.dbString, {
    useMongoClient: true
})

app
    .use(async function(ctx, next) {
        console.log(`Loading ${ctx.method} ${ctx.url}`)
        await next()
    })
    .use(bodyParser()) // bodyParser should be registered before router
    .use(router.routes())
    .use(router.allowedMethods())
    .use(statics)

app.listen(3001)