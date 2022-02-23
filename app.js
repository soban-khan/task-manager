const express = require('express')
const app = express()
const taskRouter = require('./routes/task')


// Middlewares
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', taskRouter)



let port = 3000

app.listen(port, () => {
    console.log('server started')
})