import mysql from 'mysql2';

const conexao =  mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'americalatina',
    database: 'db_copa',
    timezone: 'America/Sao_Paulo',
    charset: 'utf8mb4'
});

// conectando
conexao.connect();

// JSDoc
/**
 * Executa um código sql com o sei valores
 * @param {string} sql - instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores - valorem a serem passadas para o sql
 * @param {*} mensagemReject - mensagem a ser exibida
 * @returns objeto da Promise
 */
export const consulta = (sql, valores = '', mensagemReject) => {

    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if(erro) return reject(mensagemReject);

            const rows = JSON.parse(JSON.stringify(resultado));
            return resolve(rows);
        });
    });

};

export default conexao;
