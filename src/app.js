import express from 'express';

const app = express();

// mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 1, selecao: 'Suíça', grupo: 'G'},
    {id: 1, selecao: 'Sérvia', grupo: 'G'},
    {id: 1, selecao: 'Camarões', grupo: 'G'},
];

// criar rota padão ou raiz
app.get('/', (req, res, next) => {
    res.status(200).send('Curso de Node');
});

app.get('/selecoes', (req, res, next) => {
    res.status(200).json(selecoes);
});

export default app;
