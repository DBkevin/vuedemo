const mongoose = require('mongoose')
const url = 'mongodb://192.168.100.204/movieServer'
mongoose.connect(url)
exports = module.exports = mongoose
