var mongoose = require('./database'),
  Cat = require('../models/cat')

var cats = [
  {name: 'Mittens', imageUrl: 'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1455596221531/'},
  {name: 'Harvey Dent', imageUrl: 'https://assets.rbl.ms/9241419/980x.jpg'},
  {name: 'Snuggles', imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTq5WclSXtpbJuHff3tPgJki-jMzs1X0DVZSditLc2oi5mB0sxmfg'},
  {name: 'Buffy', imageUrl: 'http://www.gazetadopovo.com.br/blogs/ronrono/wp-content/uploads/sites/152/2016/10/kitten-tube-sock-sweater-hurricane-matthew-4.jpg?fc9e39'},
  {name: 'Ann and Nancy', imageUrl: 'http://thedesigninspiration.com/wp-content/uploads/2012/08/Cuddling-Kittens-002.jpg'},
]

Cat.remove({}, function(err) {
  if (err) throw err
  Cat.create(cats, function(err, cats) {
    if (err) {
      throw err
    } else {
      console.log('Cats added!')
      mongoose.disconnect()
    }
  })
})
