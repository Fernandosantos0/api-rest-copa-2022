const express = require('express');
const colors = require('colors');
const app = express();

// criar rota padão ou raiz
app.get('/', (req, res, next) => {
    res.status(200).send('Curso de Node');
});

// escutar a porta 3000
const port = 3000;
const host = 'localhost';
app.listen(port, host, () => {
    console.log(`Servidor rodando no endereço http://${host}:${port}`.green.bold);
});
