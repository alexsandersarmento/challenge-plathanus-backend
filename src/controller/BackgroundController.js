const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('backgrounds');

        return res.json(results);
    },

    async show(req, res) {
        try {
            const { key } = req.params;

            const result = await knex('backgrounds')
                .where({ key })

            return res.send(result);
        } catch (error) {
            next(error);
        };
    },

    async create(req, res, next) {

        try {
            const {key } = req.body;
            const { filename } = req.file;

            const url = `http://localhost:3333/files/${filename}`;

            await knex('backgrounds').insert({
                image: url,
                key
            });

            return res.status(201).send()
        } catch (error) {
            next(error);
        };
    },

    async update(req, res, next) {
        try {
            const { filename } = req.file;
            const { id } = req.params;

            const url = `http://localhost:3333/files/${filename}`;

            await knex('services')
                .update({ image: url })
                .where({ id });

            return res.send();

        } catch (error) {
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            await knex('backgrounds')
                .delete()
                .where({ id })

            return res.send();
        } catch (error) {
            next(error);
        };
    }
}