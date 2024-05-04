const users = require("../Models/Usermodel")
const jwt = require('jsonwebtoken')

// register
exports.register = async (req, res) => {
    console.log("Inside register request!!");
    const { username, email, password } = req.body
    console.log(username, email, password);
    try {
        // check email is present db or not
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("user Already Exists!!")
        } else {
            const newUser = new users({
                username, email, password 
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// login
exports.login = async (req, res) => {
    console.log("inside login request!!");
    const { email, password } = req.body
    console.log(email, password);
    try {
        // check email passwrd
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET)
            res.status(200).json({
                existingUser,
                token
            })
        } else {
            res.status(404).json("incorrect email/password")
        }

    } catch (err) {
        res.status(401).json(err)
    }
}

 