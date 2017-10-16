const jwt = require('jsonwebtoken')
const salt = '#charlieHasSalt2017'

module.exports = {
    generateToken(user) {
        let access = 'auth'
        let token = jwt.sign({
            id: user.id,
            access: access
        }, salt).toString()

        let tokenObj = {
            access,
            token
        }

        return JSON.stringify(tokenObj)
    },

    decodeToken(token) {
        return jwt.decode(token, salt)
    }
}