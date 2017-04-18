var React = require('react'),
  ReactDOM = require('react-dom'),
  {Route, Router, IndexRoute, hashHistory} = require('react-router'),
  Main = require('Main'),
  Cat = require('Cat'),
  About = require('About')

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="cats" component={Cat}/>
      <IndexRoute component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
