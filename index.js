var development = require('./knexfile').development
var knex = require('knex')(development)

knex('users')
.insert({
  name: "Daisy",
  occupation: "supreme dog"
})

.into('users')
.then(getNames)
.then(showNames)
.catch(displayError)

// .then(console.log)
// .catch(console.error)


// var result = knex('users').select('name').then(function (a) {
//
// })

function getNames() {
return knex('users').select('name')
}

function showNames (names) {
  console.log(names);
}

function displayError (err) {
  console.error(err);
}
