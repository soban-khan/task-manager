const express = require('express')
const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    // console.log(req)
    res.status(201).send('Home Page')
})

app.listen(3000, () => {
    console.log('server started')
})