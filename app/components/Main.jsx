var React = require('react'),
  Nav = require('Nav')

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        {props.children}
      </div>
    </div>
  )
}

module.exports = Main
