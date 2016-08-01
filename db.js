var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getNames: getNames,
  updNames: updNames,
  showNames: showNames
}

knex('users')
.insert({
  name: "Daisy",
  occupation: "Supreme Dog"
})

.into('users')

.then(getNames)
// .then(delNames)
.then(updNames)
.then(showNames)
.catch(displayError)

function getNames() {
  return knex('users').select('name: Daisy')
}

// function delNames() {
//   return knex('users').where('name', 'Daisy')
//   .del()
// }

function updNames() {
  return knex('users').where('name', 'Sach').update({
    occupation: 'Supreme Creature Two'
  })
}

function showNames (names) {
  console.log(names);
}

function displayError (err) {
  console.error(err);
}
