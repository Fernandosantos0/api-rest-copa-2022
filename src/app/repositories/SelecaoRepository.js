// importando a conexão com o MySQL
import { consulta } from '../database/conexao.js';

class SelecaoRepository {
    // CRUD
    create(selecoes) {
        const sql = 'INSERT INTO selecoes SET ?';
        return consulta(sql, selecoes, 'Não foi possível cadastrar');
    }

    findAll() {
        const sql = 'SELECT * FROM selecoes';
        return consulta(sql, 'Não foi possível localizar');
    }

    findById(id) {
        const sql = 'SELECT * FROM selecoes WHERE ?? = ?';
        const valores = ['id', id];
        return consulta(sql, valores, 'Não foi possível localizar');
    }

    update(selecao, id) {
        const sql = 'UPDATE selecoes SET ? WHERE ?? = ?';
        const valores = [selecao, 'id', id]
        return consulta(sql, valores, 'Não foi possível atualizar');
    }

    delete(id) {
        const sql = 'DELETE FROM selecoes WHERE ?? = ?';
        const valores = ['id', id];
        return consulta(sql, valores, 'Não foi possível apagar');
    }
}

export default new SelecaoRepository();
