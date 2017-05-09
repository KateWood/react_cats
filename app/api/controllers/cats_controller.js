var Cat = require('../models/cat')

function index(req, res) {
  Cat.find({}, function(err, cats) {
    if (err) throw err
    res.json(cats)
  })
}

module.exports = {
  index: index
}
