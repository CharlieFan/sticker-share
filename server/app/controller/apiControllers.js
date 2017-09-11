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
            if (err.code === 11000) {
                ctx.response.message = 'This user exists already'

            } else {
                ctx.response.message = err.message
            }
        }
    },
    async signin (ctx) {
        console.log(ctx.request.body)
        let email = ctx.request.body.email
        let password = ctx.request.body.password

        try {
            let result = await User.findOne({
                email: email
            })

            if (result) {
                if (password === result.password) {
                    ctx.response.status = 200
                    ctx.response.message = `signin successfully ${result.id}`
                    ctx.session.uid = result.id
                } else {
                    ctx.response.status = 200
                    ctx.response.message = 'wrong password'
                }

            } else {
                ctx.response.message = 'User does not exist'
            }
        } catch (err) {
            ctx.response.status = 400
            ctx.response.message = err.message
        }
    
    }
}
