const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('services');

        return res.json(results);
    },

    async show(req, res) {
        try {
            const { id } = req.params;

            const result = await knex('services')
                .where({ id })

            return res.send(result);
        } catch (error) {
            next(error);
        };
    },

    async create(req, res, next) {

        try {
            const { title, description } = req.body;
            const { filename } = req.file;

            const url = `http://localhost:3333/files/${filename}`;

            await knex('services').insert({
                image: url, title, description,
            });

            return res.status(201).send()
        } catch (error) {
            next(error);
        };
    },

    async update(req, res, next) {
        try {
            const { image, title, description } = req.body;
            const { id } = req.params;


            await knex('services')
                .update({ image, title, description })
                .where({ id });

            return res.send();

        } catch (error) {
            next(error);
        };
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            await knex('services')
                .delete()
                .where({ id })

            return res.send();
        } catch (error) {
            next(error);
        };
    }
}