const app = require('../connection/connection.js');
const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
    const { ISBN, titulo, Autor, Editora, Ano } = req.body;
    const livro = { ISBN, titulo, Autor, Editora, Ano };

    let filter = `INSERT INTO LIVRO ( ISBN, titulo, Autor, Editora, Ano) VALUES ( "${(livro.ISBN )}" , " ${(livro.titulo)} ", " ${(livro.Autor)} ", "${(livro.Editora)}", "${(livro.Ano)}")`;

    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.get('/',(req, res)=>{
    app.query('SELECT * FROM LIVRO', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("É tóis!\n");
})

router.get('/idLivro', (req, res) => {
    let filter = `SELECT * FROM Livro WHERE idLivro = "${(parseInt(req.body.idLivro))}"`;
    app.query(filter, (err, rows, fields) => {
        if (!err){
            res.send(rows);
        }else
            console.log(err);
    })
})

router.get('/nomelivro',(req, res)=>{
    let filter = `SELECT * FROM LIVRO WHERE titulo = "${(req.body.titulo)}"`;
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.put('/',(req, res)=>{
    const { idLivro ,ISBN, titulo, Autor, Editora, Ano } = req.body;
    const livro = { idLivro ,ISBN, titulo, Autor, Editora, Ano };

    let filter = `UPDATE LIVRO SET ISSN = "${(livro.ISBN)}", titulo="${(livro.titulo)}", Autor="${(livro.Autor)}", Editora="${(livro.Editora)}", Ano="${(livro.Ano)}" WHERE idLivro =  "${(parseInt(livro.idLivro))}"`;
    console.log(filter);
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})


router.delete('/idLivro', (req, res)=>{
    let filter = `DELETE FROM LIVRO WHERE idLivro = "${(parseInt(req.body.idLivro))}"`;
    app.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

module.exports = router;
