const path = require('path')
const User = require(path.resolve('app/model/user'))

class Api {
    async signup (ctx) {
        // console.log(ctx.request.body)
        let username = ctx.request.body.username
        let email = ctx.request.body.email
        let password = ctx.request.body.password

        let newUser = new User({
            username: username,
            email: email,
            password: password
        })

        try {
            let res = await newUser.save()
        } catch (err) {
            console.log(err.message)
            ctx.response.status = 400
            ctx.response.message = err.message
        }
    }

    async signin (ctx) {
        console.log(ctx)
    }
}

module.exports = new Api()