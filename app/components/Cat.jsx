var React = require('react')
  // catList = require('catList')

var Cat = React.createClass({
  getInitialState: function() {
    return {
      name: 'Mercury',
      imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/13263859_10104967170148009_136526232120974780_n.jpg?oh=39176ce2e6f959293c83e011cf23f5a3&oe=597E8203'
    }
  },
  handleClick: function() {
    var self = this
    $.getJSON('/api/cats').then(function(cats) {
      var cat = cats[Math.floor(Math.random() * cats.length)]
      self.setState({
        name: cat.name,
        imageUrl: cat.imageUrl
      })
    })
    // var cat = catList[Math.floor(Math.random() * catList.length)]
    // this.setState({
    //   name: cat.name,
    //   imageUrl: cat.imageUrl
    // })
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
