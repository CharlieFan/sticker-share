const path = require('path')
const User = require(path.resolve('app/model/user'))
const tokenMethod = require(path.resolve('app/middleware/token'))
const redis = require(path.resolve('app/model/redis'))

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

        await next()
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
                    let token = tokenMethod.generateToken(user)
                    await redis.set(user.id, token, 'EX', 6 * 3600)
                    ctx.response.set('x-auth', token.token)
                    ctx.response.status = 200
                    ctx.response.message = `signin successfully ${user.id}`
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

        await next()
    }

    static async authentication(ctx, next) {
        let token = ctx.request.header['x-auth']
        
        if (!token) {
            ctx.throw(401, 'authentication failed')
        }

        let info = tokenMethod.decodeToken(token)

        try {
            let res = JSON.parse(await redis.get(info.id))
            if (res.token !== token) {
                ctx.throw(401, 'autntication failed')
            }
        } catch (err) {
            ctx.throw(401, 'autntication failed')
        }
        
        await next()
    }
}

module.exports = UserController
