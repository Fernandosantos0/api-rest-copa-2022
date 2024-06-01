const mysql = require('mysql2');

const conexao =  mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'americalatina',
    database: 'db_copa',
    timezone: 'America/Sao_Paulo',
    charset: 'utf8mb4' 
});

conexao.connect();

module.exports = conexao;
