import User from '../models/user-model.js'
import bcryptjs from 'bcryptjs'

export const postSignUp = async (req, res) => {
    const {username, email, password} = req.body
    const hashPass = bcryptjs.hashSync(password, 10)
    const newUser = new User({username, email, password: hashPass})
    await newUser.save()
    res.status(201).json('User Created Successfully!!!')
}