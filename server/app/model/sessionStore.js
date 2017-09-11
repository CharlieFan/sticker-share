const redis = require('./redis')

class SessionStore {
    async get(key, maxAge, { rolling }) {
        console.log('get:', key)
        let res = await redis.get(`session-${key}`)
        console.log(res, typeof(res))
    }

    async set(key, sess, maxAge, { rolling, changed }) {
        console.log('set:', key)
        let res = await redis.set(`session-${key}`, JSON.stringify(sess))

        return key
    }

    async destroy(key) {
        console.log('delelt', key)
    }
}

module.exports = SessionStore
