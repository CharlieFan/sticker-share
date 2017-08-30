const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank ']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: {
            validator: function(v) {
                // return /\d{3}-\d{3}-\d{4}/.test(v);
                return v.length > 8
            },
            message: 'Pasword does not meet the requirment!'
        }
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email cannot be blank!']
    }
})

module.exports = mongoose.model('users', UserSchema)