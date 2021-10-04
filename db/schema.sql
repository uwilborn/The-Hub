DROP DATABASE IF EXISTS bookexchange_db;
CREATE DATABASE bookexchange_db;

USE bookexchange_db;

CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    author VARCHAR(30),
    title VARCHAR(30),
    donated_by INTEGER REFERENCES user(id),
    claimed_by INTEGER REFERENCES user(id)
);

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL, 
    email INTEGER NOT NULL,
    password varchar(30)
);

 