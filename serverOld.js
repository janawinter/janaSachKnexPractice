var express = require('express')
var app = express()
var PORT = process.env.PORT || 3000
var path = require('path')

var development = require('./knexfile').development
var knex = require('knex')(development)

var route = require('./routes')

app.get('/', function(req, res){
  knex('users')
  .select().where('id','<','3')
  .then(function (data) {
    res.send(data)
  })
  .catch(function (err) {
    console.error(err.message);
    res.status(500).send("Couldn't show you the users!")
  })
})

app.listen(PORT, function () {
  console.log("Server is listening on port, ", PORT);
})
