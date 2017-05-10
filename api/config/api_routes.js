var express = require('express'),
  router = express.Router(),
  {index, create} = require('../controllers/cats_controller')

router.route('/')
  .get(function(req, res) {
    res.json('React Cats API')
  })

router.route('/cats')
  .get(index)
  .post(create)

module.exports = router
