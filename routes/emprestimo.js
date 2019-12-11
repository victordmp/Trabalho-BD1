const app = require('../connection/connection.js');
const express = require('express');
const router = express.Router();


router.post('/',(req, res)=>{
    const {idLivro, idUser, DataEmp, DataDev} = req.body;
    const novoEmprestimo = {idLivro, idUser, DataEmp, DataDev};

    let filter = `INSERT INTO EMPRESTIMO(idLivro, idUser, DataEmp, DataDev) VALUES ("${(parseInt(novoEmprestimo.idLivro))}","${(parseInt(novoEmprestimo.idUser))}","${(novoEmprestimo.DataEmp)}","${(novoEmprestimo.DataDev)}")`;
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("Foi mesmo");
})

router.get('/',(req, res)=>{
    app.query('SELECT * FROM EMPRESTIMO', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("É tóis!\n");
})

router.get('/id',(req, res)=>{
    const idLivro = req.body.idLivro;
    const idUser = req.body.idUser;

    let filter =`SELECT * FROM EMPRESTIMO WHERE idLivro =" ${parseInt(idLivro)} " AND idUser = "${parseInt(idUser)}"`;
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})


router.put('/',(req, res)=>{
    const { idLivro, idUser, DataEmp, DataDev} = req.body;
    const EmpAlt = { idLivro, idUser, DataEmp, DataDev};

    let filter = `UPDATE  EMPRESTIMO SET DataDev = "${(EmpAlt.DataDev)}" WHERE idLivro = "${(parseInt(EmpAlt.idLivro))}" AND idUser = "${(parseInt(EmpAlt.idUser))}"`;

    app.query(filter , (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})


router.delete('/',(req, res)=>{
    const idLivro = req.body.idLivro;
    const idUser = req.body.idUser;

    let filter =`DELETE FROM EMPRESTIMO WHERE idLivro ="${(parseInt(idLivro))}" AND idUser = "${(parseInt(idUser))}"`;

    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})


module.exports = router;
