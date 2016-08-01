
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('users').del()
  return knex('users')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({name: 'Jana', occupation: 'Supreme Creature'}),
        knex('users').insert({name: 'Sach', occupation: 'Supreme Creature 2'}),
      ]);
    });
};
