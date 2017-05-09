var express = require('express'),
  mongoose = require('./api/config/database'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  path = require('path')

// Create our app
var app = express()
const PORT = process.env.PORT || 3000
var apiRoutes = require('./api/config/api_routes')

app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

app.use(express.static('public'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/api', apiRoutes)

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT)
})
