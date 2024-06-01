const express = require('express');
const bodyParser = require('body-parser');

// importando o controller
const SelecaoController = require('./app/controllers/SelecaoController');

const app = express();

// indicar para o express ler body
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

// ROTAS
app.post('/selecoes', SelecaoController.store);
app.get('/selecoes', SelecaoController.index);
app.get('/selecoes/:id', SelecaoController.show);
app.put('/selecoes/:id', SelecaoController.update);
app.delete('/selecoes/:id', SelecaoController.delete);

module.exports = app;
