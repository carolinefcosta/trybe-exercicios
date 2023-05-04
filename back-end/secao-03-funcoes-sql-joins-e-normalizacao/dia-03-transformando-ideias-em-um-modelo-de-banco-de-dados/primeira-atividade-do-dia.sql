CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE gerente(
	id_gerente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidador(
	id_cuidador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    id_gerente INT NOT NULL,
	FOREIGN KEY (id_gerente) REFERENCES gerente (id_gerente)
);

CREATE TABLE animal_cuidador(
    id_animal INT,
    id_cuidador INT,
    CONSTRAINT PRIMARY KEY (id_animal, id_cuidador),
    FOREIGN KEY (id_animal) REFERENCES animal (id_animal),
    FOREIGN KEY (id_cuidador) REFERENCES cuidador (id_cuidador)
);