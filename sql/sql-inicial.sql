DROP DATABASE IF EXISTS dbstore;
CREATE DATABASE  IF NOT EXISTS dbstore;

USE dbstore;

CREATE TABLE IF NOT EXISTS cadastro(
	id INT AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(16) NOT NULL,
    senhaHash VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO cadastro VALUES(1, "root", "ec2022@yopmail.com", "999.999.999-99", "63A9F0EA7BB98050796B649E85481845") ##facilitar a vida

