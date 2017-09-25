const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minlength: [8, '{PATH} must be at least 8 characters']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email cannot be blank!'],
        validate: {
            validator(value) {
                return validator.isEmail(value)
            },
            message: '{VALUE} is an invalid email'
        }
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]
})

module.exports = mongoose.model('users', UserSchema)
