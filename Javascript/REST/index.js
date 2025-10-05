// import {app} from './app.js';
import express from 'express';
import { routes } from './Routes/index.js';

const app = express();
routes(app);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}!`);
});