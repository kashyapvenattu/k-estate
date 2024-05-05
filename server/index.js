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

app.listen(3000, () => {
    console.log('Server running on PORT: 3000!!!')
})


