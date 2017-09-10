const session = require('koa-session')

sessionConfig = {
    key: 'koa:sess',
    maxAge: 360000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    store: {
        async get(key, maxAge, { rolling }) {
            console.log('get:', key)
        },
        async set(key, sess, maxAge, { rolling, changed }) {
            console.log('set:', key)
        },
        async destroy(key) {
            console.log(key)
        }
    }
}
module.exports = function(app) {
    return session(sessionConfig, app)
}
