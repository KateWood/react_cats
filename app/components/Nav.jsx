var React = require('react')
var {Link, IndexLink} = require('react-router')

var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Cat App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
            </li>
            <li>
              <Link to="/cats" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>See a Cat</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Nav
