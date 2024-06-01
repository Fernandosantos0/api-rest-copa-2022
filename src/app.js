import express from 'express';
import bodyParser from 'body-parser';

// importando o routes
import routes from './routes.js';

const app = express();

// indicar para o express ler body
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

// usar o routes
app.use('/selecoes', routes);
app.use((req, res, next) => {
    res.status(400).json({
        page: `not found`
    });
});

// exportando o app
export { app as default };
