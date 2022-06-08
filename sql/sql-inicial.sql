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

INSERT INTO cadastro VALUES(1, "root", "ec2022@yopmail.com", "999.999.999-99", "63A9F0EA7BB98050796B649E85481845"); ##facilitar a vida

CREATE TABLE IF NOT EXISTS produtos (
	id INT AUTO_INCREMENT, 
	imagem VARCHAR(255) NOT NULL,
	nome VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO produtos (nome, imagem) 
VALUES 
('MEN.S BETTER THAN NAKED&trade; JACKET','http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png'),
('WOMEN.S BETTER THAN NAKED&trade; JACKET','http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png'),
('Enduro Boa&reg; Hydration Pack','http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png'),('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
('Mens Casual Premium Slim Fit T-Shirts ','https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'),
('Mens Cotton Jacket','https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'),
('Mens Casual Slim Fit','https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'),
('John Hardy Women.s Legends Naga Gold & Silver Dragon Station Chain Bracelet','https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'),('Solid Gold Petite Micropave','https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg'),
('White Gold Plated Princess','https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'),
('Pierced Owl Rose Gold Plated Stainless Steel Double','https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'),
('DANVOUY Women.s T Shirt Casual Cotton Short','https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'),
('Opna Women.s Short Sleeve Moisture','https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'),
('MBJ Women.s Solid Short Sleeve Boat Neck V','https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'),
('Rain Jacket Women Windbreaker Striped Climbing Raincoats','https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'),
('BIYLACLESEN Women.s 3-in-1 Snowboard Jacket Winter Coats','https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg');