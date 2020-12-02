const knex = require('../database/connection');

module.exports = {
    async index(req, res, next) {

        try {

            const results = await knex('projects');
            return res.json(results);
            
        } catch (error) {
            next(error);   
        }
    }
}

