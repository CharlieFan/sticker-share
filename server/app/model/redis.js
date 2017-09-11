const Redis = require('ioredis')
const config = require('../../config')

// connect to redis
module.exports = new Redis(config.redisConfig)
