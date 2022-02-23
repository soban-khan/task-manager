const conn = require('./db/connect')
const express = require('express')
const app = express()
const taskRouter = require('./routes/task')
require('dotenv').config()

// Middlewares
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', taskRouter)



let port = 3000

const start = async () => {
    try {
        await conn(process.env.MONGO_URI)
        app.listen(port, () => console.log('Server started in 3000'))
    } catch (err) {
        console.log(err)
    }
}

start()