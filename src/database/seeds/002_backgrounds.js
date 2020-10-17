
exports.seed = function (knex) {

  return knex('backgrounds').del()
    .then(function () {

      return knex('backgrounds').insert([
        { image: 'http://localhost:3333/files/background.jpg', key: 1 },
        { image: 'http://localhost:3333/files/wallhaven.jpg', key: 2 }
      ]);
    });
};
