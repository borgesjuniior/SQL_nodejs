const express = require('express');
const routes = express.Router();
const userController = require('../controllers/UserController')
const ProjectController = require('../controllers/ProjectController')

/*Rota do usuário*/
routes.get('/users', userController.index);
routes.post('/users', userController.insert);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

/*Rota dos projetos*/

routes.get('/projects', ProjectController.index);





module.exports = routes;




