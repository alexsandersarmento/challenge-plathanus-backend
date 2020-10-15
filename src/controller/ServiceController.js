const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('services');

        return res.json(results);
    }
}