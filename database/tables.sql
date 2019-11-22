drop table if exists EMPRESTIMO;
drop table if exists USUARIO;
drop table if exists LIVRO;
drop table if exists ATENDENTE;

CREATE TABLE USUARIO(
	idUser integer NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(idUser),
    nome varchar(30),
    email varchar(30),
    senha varchar(30),
    telefone varchar(14)
);

CREATE TABLE LIVRO(
	ISSN varchar(30),
    PRIMARY KEY(ISSN),
    titulo varchar(30),
    Autor varchar(30),
    Editora varchar(30),
	Ano year
);

CREATE TABLE EMPRESTIMO(
	ISSN varchar(30),
    idUser integer,
    statusEmp varchar(10),
    DataEmp date, 
    DataDev date,
	PRIMARY KEY(ISSN,idUser),
    FOREIGN KEY(ISSN) REFERENCES LIVRO(ISSN),
    FOREIGN KEY(idUser) REFERENCES USUARIO(idUser)
);
