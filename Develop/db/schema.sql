DROP DATABASE IF EXISTS aabooks_db;
CREATE DATABASE aabooks_db;


USE aabooks_db;


CREATE TABLE books (
    id integer Primary key Auto_increment, 
    author_lastname varchar(30),
    author_firstname varchar(30),
    title varchar(30)
    );

create table role (
    id integer primary key Auto_increment  , 
    title varchar(30), 
    salary decimal(10,2),
    department_id integer,
    foreign key fk1(department_id) references department(id)
);

create table scholar (
    id integer primary key,
    first_name varchar(30), 
    last_name varchar(30),
    role_id integer,
       mentor_id integer null,
    foreign key fk2(role_id) references role(id)
    );