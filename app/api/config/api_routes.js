var express = require('express'),
  router = express.Router()

router.route('/')
  .get(function(req, res) {
    res.json('React Cats API')
  })

module.exports = router
