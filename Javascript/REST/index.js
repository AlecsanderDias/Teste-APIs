import {app} from './app.js';

const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}!`);
});