const path = require('path')
const User = require(path.resolve('app/model/user'))

const printsomething = function() {
    console.log('hahah')
}

module.exports = {
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
            await newUser.save()
            ctx.response.status = 200
            ctx.response.message = 'saved successfull'
        } catch (err) {
            ctx.response.status = 400
            ctx.response.message = err.message
        }
    },
    async signin (ctx) {
        console.log(ctx)
    }
}
