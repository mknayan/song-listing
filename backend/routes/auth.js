const router = require('express').Router();
const User = require('../models/user.model')
const { registerValidationSchema, loginValidationSchema } = require('../validation');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.route('/users').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .then(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post(async (req, res) => {

    // validate
    const { error } = registerValidationSchema.validate(req.body);
    if (error) {
        let error_data = error.details[0]
        error_data.status = 'error'
        return res.status(400).send(error_data)
    } else {
        const user_login = req.body.user_login;
        const password = req.body.password;

        //check if already in database
        const user_exists = await User.findOne({ user_login })
        if (user_exists) return res.status(400).send(
            {
                "status": "error",
                "message": "User already exists",
                "path": [
                    "user_login"
                ]
            }
        )

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({ user_login, password: hashedPassword })

        try {
            await newUser.save()
            res.send({ status: 'success', message: "User successfully created" })
        } catch (err) {
            res.status(400).send({ status: 'error', message: "Unable to save user", 'error': err })
        }
    }
})

//LOGIN
router.post('/login', async (req, res) => {
    // validate
    const { error } = loginValidationSchema.validate(req.body);
    if (error) {
        let error_data = error.details[0]
        error_data.status = 'error'
        return res.status(400).send(error_data)
    } else {
        const user_login = req.body.user_login;
        const password = req.body.password;

        //check user exists
        const user = await User.findOne({ user_login })
        if (!user) return res.status(400).send(
            {
                "status": "error",
                "message": "User does not exists",
                "path": [
                    "user_login"
                ]
            }
        )

        //password checking
        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass) return res.status(400).send(
            {
                "status": "error",
                "message": "Invalid Password",
                "path": [
                    "password"
                ]
            }
        )

        //create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET)
        res.header('auth-token', token).send({
            "status": "success",
            "message": "Login successful",
            "token": token
        })
    }
})

module.exports = router;