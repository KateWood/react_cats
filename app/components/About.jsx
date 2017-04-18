var React = require('react')

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center">React Cat App</h1>
        <p className="text-center">This is a simple app built with React. It uses ReactRouter to render two pages. Click "See a Cat" in the nav bar to, well, see a cat :)</p>
      </div>
    )
  }
})

module.exports = About
