var Cat = require('../models/cat')

function index(req, res) {
  Cat.find({}, function(err, cats) {
    if (err) throw err
    res.json(cats)
  })
}

function create(req, res) {
  var cat = new Cat(req.body)

  cat.save(function(err, cat) {
    if (err) throw err

    res.json({message: 'Cat added!', cat: cat})
  })
}

module.exports = {
  index: index,
  create: create
}
