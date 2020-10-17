
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('backgrounds').del()
    .then(function () {
      // Inserts seed entries
      return knex('backgrounds').insert([
        { image: 'http://localhost:3333/files/background.jpg', key: 1 },
      ]);
    });
};
