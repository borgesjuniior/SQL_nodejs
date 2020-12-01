const express = require('express');
const app = express();
const Routes = require('./routes/routes');


app.use(express.json()); //Fazer que o express enteda json
app.use(Routes); //Importação das rotas

/*Midlleware*/

app.use((error, req, res, next ) => {
    res.status(error.status ||  500);
    res.json({ error: error.message })
})

/*Servidor*/
app.listen(3333, () => { 
    console.log('Server started!') 
})