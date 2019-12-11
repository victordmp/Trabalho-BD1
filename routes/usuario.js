const app = require('../connection/connection.js');
const express = require('express');
const router = express.Router();


router.post('/',(req, res)=>{
    const { nome, email, senha, telefone } = req.body;
    const usuario = { nome, email, senha, telefone };

    let filter = `INSERT INTO USUARIO ( nome, email, senha, telefone ) VALUES ( "${(usuario.nome)}" , "${(usuario.email)}", "${(usuario.senha)}", "${(usuario.telefone)}")`;

    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.get('/',(req, res)=>{
    const {email,senha} = req.body;
    const usuario = {email,senha};

    let filter = `SELECT const(*) FROM USUARIO WHERE email = "${(usuario.email)}" AND senha = "${(usuario.senha)}"`;
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("É tóis!\n");
})

router.get('/',(req, res)=>{
    app.query('SELECT * FROM USUARIO', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("É tóis!\n");
})

router.get('/:idUser', (req, res) => {

    let filter = `SELECT * FROM USUARIO WHERE idUser = "${(parseInt(req.params.idUser))}"`;
    app.query(filter, (err, rows, fields) => {
        if (!err){
            res.send(rows);
        }else
            console.log(err);
    })
})

router.get('/nome',(req, res)=>{
    let filter = `SELECT * FROM USUARIO WHERE nome = "${(req.body.nome)}"`;
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.put('/',(req, res)=>{
    const { idUser, nome, email, senha, telefone} = req.body;
    const UserAlt= { idUser, nome, email, senha, telefone};

    let filter = `UPDATE USUARIO SET nome = "${(UserAlt.nome)}", email = "${(UserAlt.email)}", senha = "${(UserAlt.senha)}", telefone = "${(UserAlt.telefone )}" WHERE idUser =  "${(parseInt(UserAlt.idUser))}"`;
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})


router.delete('/idUser', (req, res)=>{
    let filter = `DELETE FROM USUARIO WHERE idUser ="${(parseInt(req.body.idUser))}"`;

    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})



module.exports = router;