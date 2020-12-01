const knex = require('../database/connection');

module.exports = {
    async index(req, res) {
        const results = await knex('users');

        return res.json(results);
    },
    
    async insert(req, res, next) {
        
        
        try {

            const { username } = req.body
            await knex('users').insert({username});

            //Retorna o status de criado com sucesso!
            return res.status(201).send()

        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next) {

        try {
            const { username } = req.body;
            const { id } = req.params;
          
            await knex('users')
            .update({ username })
            .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }      
          
    },

    async delete(req, res, next) {


        try {
            const { id } = req.params

            await knex('users')
            .del()
            .where({ id }) 
             
            
            return res.send()
        } catch (error) {
            next(error)    
        }
            
    }
}

