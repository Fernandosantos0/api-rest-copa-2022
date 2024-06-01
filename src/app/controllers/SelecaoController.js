// importando a conexão com o MySQL
const conexao = require('../database/conexao');

class SelecaoController {
    index(req, res, next) { // Listar tudo
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
    }

    show(req, res, next) { // Listar tudo por id
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
    }

    store(req, res, next) { // Criar dados
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
        });
    }

    update(req, res, next) { // Atualizar dados
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
    }

    delete(req, res, next) { // Apagar dados
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
    }
}

// padrão singleton
module.exports = new SelecaoController();
