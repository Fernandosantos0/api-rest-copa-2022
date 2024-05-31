const app = require('./src/app.js');
const colors = require('colors');

/* Subindo o servidor */
const PORT = 3000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando no endereço http://${HOST}:${PORT}`.green.bold);
}); 
