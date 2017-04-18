var React = require('react'),
  catList = require('catList')

var Cat = React.createClass({
  getInitialState: function() {
    var cat = catList[Math.floor(Math.random() * catList.length)]
    return {
      name: cat.name,
      imageUrl: cat.imageUrl
    }
  },
  render: function() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.imageUrl}></img>
      </div>
    )
  }
})

module.exports = Cat
