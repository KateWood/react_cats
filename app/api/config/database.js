var mongoose = require('mongoose'),
  mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/react-cats'

mongoose.connect(mongoUri)

module.exports = mongoose
