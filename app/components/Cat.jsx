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
  handleClick: function() {
    var cat = catList[Math.floor(Math.random() * catList.length)]
    this.setState({
      name: cat.name,
      imageUrl: cat.imageUrl
    })
  },
  render: function() {
    return (
      <div>
        <h1 className="text-center">{this.state.name}</h1>
        <button className="switchCat button hollow" onClick={this.handleClick}>See another cat</button>
        <img src={this.state.imageUrl}></img>
      </div>
    )
  }
})

module.exports = Cat
