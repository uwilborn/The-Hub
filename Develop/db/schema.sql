CREATE DATABASE bookexchange_db;


USE bookexchange_db;


CREATE TABLE books (
    id integer Primary key Auto_increment, 
    author varchar(30),
    title varchar(30),
    donated_by  integer references user(id),
    claimed_by integer references user(id));


create table user (
    id integer Primary key Auto_increment,
    name varchar(30), 
    email integer null,
    password varchar(30),
    );

 