require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: process.env.CLIENT_URL, credentials: true, optionSuccessStatus: 200,}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(port, () => console.log(`Приложение на порту ${port}!`))
    } catch (error) {
        console.log(error);
    }
}

start()