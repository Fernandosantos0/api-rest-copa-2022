const express = require('express');
const bodyParser = require('body-parser');

// importando o arquivo de conexão com o banco de dados
const conexao = require('./infra/conexao');

const app = express();

// indicar para o express ler body
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

// retornar o objeto por id
function buscarSelecaoPorId(id) {
    return selecoes.find(selecao => selecao.id == id);
}

// pegar a posição ou index do elemento no array por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id);
}

// ROTAS
app.post('/selecoes', (req, res, next) => {
    const selecao = req.body;
    const sql = 'INSERT INTO selecoes SET ?';

    conexao.query(sql, selecao, (erro, resultado) => {
        if(erro) {
            console.error(erro);
            return res.status(404).json({
                erro: erro
            });
        }

        res.status(201).json(resultado);
    })
});

app.get('/selecoes', (req, res, next) => {
    const sql = 'SELECT * FROM selecoes';

    conexao.query(sql, (erro, resultado) => {
        if(erro) {
            console.error(erro);
            return res.status(404).json({
                erro: erro
            });
        }

        res.status(200).json(resultado);
    });
});

app.get('/selecoes/:id', (req, res, next) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM selecoes WHERE ?? = ?';

    conexao.query(sql, ['id', id] ,(erro, resultado) => {
        if(erro) {
            console.error(erro);
            return res.status(404).json({
                erro: erro
            });
        }

        const linha = resultado[0];
        res.status(200).json(linha);
    });
});

app.put('/selecoes/:id', (req, res, next) => {
    const { id } = req.params;
    const selecao = req.body;

    const sql = 'UPDATE selecoes SET ? WHERE ?? = ?';
    conexao.query(sql, [selecao, 'id', id] ,(erro, resultado) => {
        if(erro) {
            console.error(erro);
            return res.status(404).json({
                erro: erro
            });
        }
        
        res.status(200).json(resultado);
    });    
});


app.delete('/selecoes/:id', (req, res, next) => {
    const { id } = req.params;
    const sql = 'DELETE FROM selecoes WHERE ?? = ?';

    conexao.query(sql, ['id', id] ,(erro, resultado) => {
        if(erro) {
            console.error(erro);
            return res.status(404).json({
                erro: erro
            });
        }

        res.status(200).json(resultado);
    });
});

module.exports = app;
