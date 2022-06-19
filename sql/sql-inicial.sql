DROP DATABASE IF EXISTS dbstore;
CREATE DATABASE IF NOT EXISTS dbstore;

USE dbstore;

CREATE TABLE IF NOT EXISTS cadastro(
	id INT AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(16) NOT NULL,
    senhaHash VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO cadastro VALUES(1, "root", "ec2022@yopmail.com", "999.999.999-99", "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2"); ##facilitar a vida

CREATE TABLE IF NOT EXISTS produtos (
	id INT AUTO_INCREMENT, 
	imagem VARCHAR(255) NOT NULL,
	nome VARCHAR(255) NOT NULL,
    preco FLOAT NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO produtos (nome, imagem, preco) 
VALUES 
("Men's Jacket","http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png", 19.00),
("Women's Jacket","http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png", 29.00),
("Hydration Pack",'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png', 124.00),
("Men's Slim Fit Shirt","https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", 19.00),
("Mens Cotton Jacket",'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', 139.00),
("Men's Casual Slim Fit",'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', 23.00),
("Women's Bracelet",'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', 12.00),
("Women's T-Shirt",'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg', 44.00),
("Women's Shirt",'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg', 42.00),
("Women's Shirt",'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg', 87.00),
("Women's Rain Jacket",'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg', 99.00),
("Women's Biylaclesen",'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg', 253.00);


CREATE TABLE IF NOT EXISTS(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ID_USUARIO INT,
    ID_PRODUTO INT,
    FOREIGN KEY (ID_USUARIO) REFERENCES CADASTRO(ID),
    FOREIGN KEY (ID_PRODUTO) REFERENCES PRODUTOS(ID)
);