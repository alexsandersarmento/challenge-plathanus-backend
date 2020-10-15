
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        { image: 'http://localhost:3333/files/service01.jpg', title: 'Lorem Ipsum', description: 'Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus.' },
        { image: 'http://localhost:3333/files/service02.jpg', title: 'Lorem Ipsum', description: 'Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus.' },
        { image: 'http://localhost:3333/files/service03.jpg', title: 'Lorem Ipsum', description: 'Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus.' },
      ]);
    });
};
