const Koa = require('koa')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const session = require('koa-session')
const router = require('./app/router')
const config = require('./config')
const statics = serve('./app/public')
const app = new Koa()

// connect to database
mongoose.Promise = global.Promise
mongoose.connect(config.dbString, {
    useMongoClient: true
})

app.keys = ['i have a secret and i do not want to tell you']

app
    .use(async function(ctx, next) {
        console.log(`Loading ${ctx.method} ${ctx.url}`)
        await next()
    })
    .use(session(config.sessionConfig, app))
    .use(bodyParser()) // bodyParser should be registered before router
    .use(statics)
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3001)