const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_login: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 200
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 1024
    },
}, {
    timestamps: true,
})

const User = mongoose.model('User', UserSchema)

module.exports = User;