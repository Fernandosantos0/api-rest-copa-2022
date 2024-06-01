// importando a conexão com o MySQL
import conexao from '../database/conexao.js';

class SelecaoRepository {
    // CRUD
    create(selecoes) {
        const sql = 'INSERT INTO db_copa.selecoes SET ?';

        return new Promise((resolve, reject) => {
            conexao.query(sql, selecoes, (erro, resultado) => {
                if(erro) return reject('Não foi possível cadastrar');

                // fazer o parser dos resultados
                const rows = JSON.parse(JSON.stringify(resultado));
                return resolve(rows);
            });
        });
    }

    findAll() {
        const sql = 'SELECT * FROM db_copa.selecoes';

        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar');

                // fazer o parser dos resultados
                const rows = JSON.parse(JSON.stringify(resultado));
                return resolve(rows);
            });
        });
    }

    findById(id) {
        const sql = 'SELECT * FROM db_copa.selecoes WHERE ?? = ?';
        const valores = ['id', id];

        return new Promise((resolve, reject) => {
            conexao.query(sql, valores, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar');

                const [ row ] = JSON.parse(JSON.stringify(resultado));
                return resolve(row);
            })
        });
    }

    update(selecao, id) {
        const sql = 'UPDATE selecoes SET ? WHERE ?? = ?';
        const valores = [selecao, 'id', id]

        return new Promise((resolve, reject) => {
            conexao.query(sql, valores, (erro, resultado) => {
                if(erro) return reject('Não foi possível atualizar');

                const row= JSON.parse(JSON.stringify(resultado));
                return resolve(row);
            })
        });
    }

    delete(id) {
        const sql = 'DELETE FROM selecoes WHERE ?? = ?';
        const valores = ['id', id];

        return new Promise((resolve, reject) => {
            conexao.query(sql, valores, (erro, resultado) => {
                if(erro) return reject('Não foi possível apagar');

                const row = JSON.parse(JSON.stringify(resultado));
                return resolve(row);
            });
        });
    }
}

export default new SelecaoRepository();
