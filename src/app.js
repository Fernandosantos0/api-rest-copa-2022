import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 1, selecao: 'Suíça', grupo: 'G'},
    {id: 1, selecao: 'Sérvia', grupo: 'G'},
    {id: 1, selecao: 'Camarões', grupo: 'G'},
];

// indicar para o express ler body
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

// criar rota padão ou raiz
app.get('/', (req, res, next) => {
    res.status(200).send('Curso de Node');
});

app.get('/selecoes', (req, res, next) => {
    res.status(200).json(selecoes);
});

app.post('/selecoes', (req, res, next) => {
    selecoes.push(req.body);
    res.status(201).send('Seleção cadastrada com sucesso!');
});

export default app;
