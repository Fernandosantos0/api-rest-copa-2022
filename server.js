import app from './src/app.js';
import colors from 'colors';

// importando a conexão com o banco de dados
import conexao from './infra/conexao.js';



// fazer a conexão
conexao.getConnection((erro) => {
    if(erro) {
        console.log('Não foi possível conectar com o banco de dados'.red.bold);
        console.error(erro);
    } else {
        console.log('Conexão como banco de dados realizado com sucesso'.blue.bold);

        /* Subindo o servidor */
        const PORT = 3000;
        const HOST = 'localhost';
        app.listen(PORT, HOST, () => {
            console.log(`Servidor rodando no endereço http://${HOST}:${PORT}`.green.bold);
        });
        
    }
});
