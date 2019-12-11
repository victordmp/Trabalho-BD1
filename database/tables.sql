drop table if exists EMPRESTIMO;
drop table if exists USUARIO;
drop table if exists LIVRO;

CREATE TABLE USUARIO(
	idUser integer NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(idUser),
    nome varchar(30),
    email varchar(30),
    senha varchar(30),
    telefone varchar(14)
);

CREATE TABLE LIVRO(
    idLivro integer NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(idLivro),
	ISBN varchar(30),
    titulo varchar(30),
    Autor varchar(30),
    Editora varchar(30),
	Ano year
);

CREATE TABLE EMPRESTIMO(
	idLivro integer,
    idUser integer,
    DataEmp date, 
    DataDev date,
	PRIMARY KEY(idLivro,idUser),
    FOREIGN KEY(idLivro) REFERENCES LIVRO(idLivro),
    FOREIGN KEY(idUser) REFERENCES USUARIO(idUser)
);
