const knex = require('../database/connection');

module.exports = {
    async index(req, res, next) {

        try { 
            const { user_id } = req.query; //Pega a query da url.

            const query = knex('projects'); //recebe os projetos.

            if (user_id) {  //Verfica se o user_id existe e faz a connsulta.
                query.where({user_id})
            }

            const results = await query; //recebe a consulta e coloca na variável.
            
            return res.json(results) //Retorna o json com os resultados.
            
        } catch (error) {
            next(error);   
        }
    }
}

