var cats = require('../cats.js')

function index(req, res) {
  res.json(cats)
}

module.exports = {
  index: index
}
