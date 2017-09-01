module.exports = {
    dbString: 'mongodb://admin:efemme123@ds127983.mlab.com:27983/my-node-lab',
    sessionConfig: {
        key: 'koa:sess',
        maxAge: 30000,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        store: {
            async get(key, maxAge, { rolling }) {
                console.log(key)
            },
            async set(key, sess, maxAge, { rolling, changed }) {
                console.log(key)
            },
            async destroy(key) {
                console.log(key)
            }
        }
    }
}