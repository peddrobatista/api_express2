const express = require('express');
const app = express();
const porta = process.env.PORT;

const status = () => {
    console.log("Servidor funcionando....")
}

app.get('/', (req, res) => {
    res.send('Olá mundo 2');
});

app.get('/canal', (req, res) => {
    res.json({apresentacao: 'Olá mundo!!'});
});

app.listen(porta || 3000, status);