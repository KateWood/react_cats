var mongoose = require('mongoose')

var catSchema = new mongoose.Schema({
  name: String,
  imageUrl: String
})

var Cat = mongoose.model('Cat', catSchema)

module.exports = Cat
