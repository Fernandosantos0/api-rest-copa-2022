import app from './src/app.js';
import colors from 'colors';

// escutar a porta 3000
const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando no endereço http://${HOST}:${PORT}`.green.bold);
});
