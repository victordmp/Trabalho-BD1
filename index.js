const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const app = express();
const port = 3000; //porta padrão
const bodyParser = require('body-parser');
const db = require('./connection/connection.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);


const User = require('./routes/usuario');
app.use('/User', User);
const Emprestimo = require('./routes/emprestimo');
app.use('/Emprestimo', Emprestimo);
const Livro = require('./routes/livro');
app.use('/Livro', Livro);


app.listen(port);
console.log('API funcionando!');