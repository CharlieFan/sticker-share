const path = require('path')
const User = require(path.resolve('app/model/user'))
const jwt = require('jsonwebtoken')

const generateToken = function(user) {
    let access = 'auth'
    let token = jwt.sign({
        id: user.id,
        access
    }, '#charlieHasSalt2017').toString()

    return {
        access,
        token
    }
}

class UserController {
    static async getUser(ctx, next) {
        // let token = ctx.request.header['x-auth']
        // let decode = jwt.verify(token, '#charlieHasSalt2017')
        // console.log(decode)
        ctx.response.type = 'json'
        ctx.response.body = {
            "username": "charlie"
        }
    }

    static async signup (ctx, next) {
        // console.log(ctx.request.body)
        let newUser = new User({
            username: ctx.request.body.username,
            email: ctx.request.body.email,
            password: ctx.request.body.password
        })
        
        try {
            let res = await newUser.save()
            console.log(res)
            
            ctx.response.status = 200
            ctx.response.message = 'saved successfully'
            ctx.response.type = 'json'
            ctx.response.body = {
                "user_id": res.id
            }
        } catch (err) {
            ctx.response.status = 400
            if (err.code === 11000) {
                ctx.response.message = 'This user exists already'
                
            } else {
                ctx.response.message = err.message
            }
        }
    }

    static async signin (ctx, next) {
        // console.log(ctx.request.body)
        
        let email = ctx.request.body.email
        let password = ctx.request.body.password
        
        try {
            let user = await User.findOne({
                email: email
            })
            
            if (user) {
                if (password === user.password) {
                    let token = generateToken(user)
                    user.tokens.push(token)
                    user.save()
                    ctx.response.set('x-auth', token.token)
                    ctx.response.status = 200
                    ctx.response.message = `signin successfully ${user.id}`
                    ctx.session.uid = user.id
                    ctx.response.type = 'json'
                    ctx.response.body = {
                        user_id: user.id,
                        username: user.username,
                        email: user.email
                    }
                } else {
                    ctx.response.status = 200
                    ctx.response.message = 'wrong password'
                }
                
            } else {
                ctx.throw(400, 'user does not exist')
            }
        } catch (err) {
            ctx.response.status = 400
            ctx.response.message = err.message
        }
        
    }
}

module.exports = UserController
