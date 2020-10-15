
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        { image: 'image', title: 'Lorem Ipsum', description: 'Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus.' },
        { image: 'image', title: 'Lorem Ipsum', description: 'Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus.' },
        { image: 'image', title: 'Lorem Ipsum', description: 'Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus.' },
      ]);
    });
};
