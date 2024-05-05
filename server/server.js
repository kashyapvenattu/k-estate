import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user-routes.js'
import authRouter from './routes/auth-routes.js'
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.MONGO_CONNECTION)
    .then(console.log('Connected to Mongo'))
    .catch((err) => console.log(err))

const app = express()
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500
    const message = error.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(3000, () => {
    console.log('Server running on PORT: 3000!!!')
})




