
const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const app = express();
const port = 3000; //porta padrão
const bodyParser = require('body-parser');
const db = require('./connection/connection.js');
const React = require('react');
const ReactDOM = require('react-dom');
// const App  = require('../pages/login');
const cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
// app.listen(80,function(){
//     console.log('servidor da web habilitado para C atendendo na porta 80');
// })
app.use('/', router);


const User = require('./routes/usuario');
app.use('/User', User);
const Emprestimo = require('./routes/emprestimo');
app.use('/Emprestimo', Emprestimo);
const Livro = require('./routes/livro');
app.use('/Livro', Livro);




app.listen(port, () => console.log('servidor da web habilitado para C atendendo na porta ' + port));
console.log('API funcionando!');