const session = require('koa-session')
const SessionStore = require('../model/sessionStore')

sessionConfig = {
    key: 'koa:sess',
    maxAge: 30 * 60 * 1000, // expired after 30 minutes
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    store: new SessionStore() 
}
module.exports = function(app) {
    return session(sessionConfig, app)
}
