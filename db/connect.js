const mongoose = require('mongoose')

const conn = (url) => {
    return mongoose.connect(url)
}

module.exports = conn 