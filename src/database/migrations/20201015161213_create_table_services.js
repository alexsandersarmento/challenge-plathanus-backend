
exports.up = function (knex) {
    return knex.schema.createTable('services', (table) => {
        table.increments('id'),
            table.string('image'),
            table.string('title'),
            table.string('description'),
            table.timestamp('created_at').defaultTo(knex.fn.now()),
            table.timestamp('update_at').defaultTo(knex.fn.now())
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('services')
};
