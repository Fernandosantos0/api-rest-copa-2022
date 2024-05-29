import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'}
];

// retornar o objeto por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id);
}

// pegar a posição do index do elemento no array por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id);
}

// indicar para o express ler body
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

// criar rota padão ou raiz
app.get('/', (req, res, next) => {
    res.status(200).send('Curso de Node');
});

app.post('/selecoes', (req, res, next) => {
    selecoes.push(req.body);
    res.status(201).send('Seleção cadastrada com sucesso!');
});

app.get('/selecoes', (req, res, next) => {
    res.status(200).json(selecoes);
});

app.get('/selecoes/:id', (req, res, next) => {
    const { id } = req.params;

    res.status(200).json(buscarSelecaoPorId(id));
});

app.put('/selecoes/:id', (req, res, next) => {
    const { id } = req.params;
    let index = buscarIndexSelecao(id);

    // editando
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;

    res.status(200).json(selecoes[index]);
});


app.delete('/selecoes/:id', (req, res, next) => {
    const { id } = req.params;
    let index = buscarIndexSelecao(id);

    // remover o elemento
    selecoes.splice(index, 1);

    res.status(200).send(`Seleção com id ${id} excluída comsucesso`);
});

export default app;
