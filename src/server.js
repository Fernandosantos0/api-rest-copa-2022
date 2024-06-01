import app from './app.js';
import colors from 'colors';

/* Subindo o servidor */
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando no endereço http://${HOST}:${PORT}`.green.bold);
});
