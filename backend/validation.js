const Joi = require('joi');

//register validation
const registerValidationSchema = Joi.object({
    user_login: Joi.string().min(6).required().max(200).trim(),
    password: Joi.string().min(3).required().max(1024).trim()
})

const loginValidationSchema = Joi.object({
    user_login: Joi.string().min(6).required().max(200).trim(),
    password: Joi.string().min(3).required().max(1024).trim()
})

const songAddValidationSchema = Joi.object({
    title: Joi.string().min(3).required().max(200).trim(),
    artist: Joi.string().min(3).required().max(200).trim(),
    album_cover: Joi.string().min(3).required().max(1024).trim()
})

const songEditValidationSchema = Joi.object({
    title: Joi.string().min(3).required().max(200).trim(),
    artist: Joi.string().min(3).required().max(200).trim(),
    album_cover: Joi.string().min(3).max(1024).trim()
})

module.exports.registerValidationSchema = registerValidationSchema
module.exports.loginValidationSchema = loginValidationSchema
module.exports.songAddValidationSchema = songAddValidationSchema
module.exports.songEditValidationSchema = songEditValidationSchema