const redis = require('./redis')

class SessionStore {
    async get(key, maxAge, { rolling }) {
        // console.log('get:', key)
        let res = await redis.get(`session-${key}`)
        try {
            return JSON.parse(res)
        } catch (err) {
            return {}
        }
    }

    async set(key, sess, maxAge, { rolling, changed }) {
        // console.log('set:', key)
        let res = await redis.set(`session-${key}`, JSON.stringify(sess), 'PX', maxAge)
        return key
    }

    async destroy(key) {
        // console.log('delelt', key)
        let res = await redis.del(`session-${key}`)
        return res
    }
}

module.exports = SessionStore
