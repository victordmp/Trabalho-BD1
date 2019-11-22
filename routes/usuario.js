const app = require('../connection/connection.js');
const express = require('express');
const router = express.Router();


//Cadastra cliente
router.post('/',(req, res)=>{
    let usuario = {};
    const { nome, email, senha, telefone } = req.body;
    // usuario = { nome, email, senha, telefone };
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    usuario.telefone = telefone;


    const strUser = 'INSERT INTO USUARIO ( nome, email, senha, telefone ) VALUES ( "'+ usuario.nome +' " , " '+ usuario.email +' ", " '+ usuario.senha + '", "' + usuario.telefone + '")';

    app.query(strUser, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Busca todos os Usuarios
router.get('/',(req, res)=>{
    app.query('SELECT * FROM USUARIO', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("É tóis!\n");
})

//Busca usuario por id
router.get('/:idUser?', (req, res) => {
    let filter = '';
    if(req.params.idUser) filter = ' WHERE idUser =' + parseInt(req.params.idUser);
    console.log(req.params.idUser);
    app.query('SELECT * FROM USUARIO' + filter, (err, rows, fields) => {
        if (!err){
            // console.log(rows);
            res.send(rows);
        }else
            console.log(err);
    })
})

//Busca usuario por nome
router.get('/nome/:nome',(req, res)=>{
    let filter = '';
    if (req.params.nome) filter = 'SELECT * FROM USUARIO WHERE nome ="' + req.params.nome+'"';
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Atualiza dados do Usuario
router.put('/',(req, res)=>{
    let usuario = {};
    const { idUser, nome, email, senha, telefone} = req.body;
    usuario.idUser = idUser;
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    usuario.telefone = telefone;

    let filter = '';
    console.log(req.body);
    if (req.body) filter = 'UPDATE USUARIO SET nome="' + usuario.nome + '" , email="'+ usuario.email + '" , senha="'+ usuario.senha + '", telefone="'+ usuario.telefone + '" WHERE idUser=  '+  parseInt(usuario.idUser)+'';
    console.log(filter);
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})


//Deleta usuario por id
router.delete('/:idUser?', (req, res)=>{
    let filter = '';
    console.log(req.params.idUser);
    if (req.params.idUser) filter = 'DELETE FROM USUARIO WHERE idUser ='+ parseInt(req.params.idUser);
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})



module.exports = router;