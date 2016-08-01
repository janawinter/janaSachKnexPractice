var express = require('express')
var app = express()
var PORT = process.env.PORT || 3000
var hbs = require('express-handlebars')
var path = require('path')

var development = require('./knexfile').development
var knex = require('knex')(development)

var route = require('./db')

// Templating engine
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

// app.get('/', function(req, res) {
//   res.send(
//     'Hello, Table is on /table, Form is on /form'
//   )
// })

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/indexGet.html'))
})

app.get('/greetings', function(req, res) {
  console.log(req.query);
  var firstN = req.query.FirstName
  var lastN = req.query.LastName
  res.send('<p>' + 'Hello ' + firstN + ' ' + lastN + ' ' +'</p>')
})

// app.get('/table', function(req, res){
//   route.getNames().then(doThis)
//
//   function doThis(data) {
//     res.send(data)
//   }
// })


app.listen(PORT, function () {
  console.log("Server is listening on port, ", PORT);
})
