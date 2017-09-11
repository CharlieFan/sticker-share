const session = require('koa-session')
const SessionStore = require('../model/sessionStore')

sessionConfig = {
    key: 'koa:sess',
    maxAge: 360000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    store: new SessionStore() 
}
module.exports = function(app) {
    return session(sessionConfig, app)
}
