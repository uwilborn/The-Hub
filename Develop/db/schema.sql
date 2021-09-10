DROP DATABASE IF EXISTS aabooks_db;
CREATE DATABASE aabooks_db;


USE aabooks_db;


CREATE TABLE books (
    id integer Primary key Auto_increment, 
    author_lastname varchar(30),
    author_firstname varchar(30),
    title varchar(30),
    price decimal(6,2),
    genre varchar(15),
    stock_qty integer,
    );

create table school_data (
    id integer primary key Auto_increment  , 
    school_name varchar(30), 
    school_level varchar(30), 
   );

create table user_data (
    id integer Primary key Auto_increment,
    first_name varchar(30), 
    last_name varchar(30),
    school_id integer,
    grade varchar(30),
    email integer null,
    pass_word varchar(30),
    foreign key fk1(school_id) references school_data(id)
    );

    create table exchange (
    id integer Primary key Auto_increment,
    user_id integer, 
    book_id integer,
    bookqty_needed integer,
    foreign key fk2(user_id) references user_data(id)
    foreign key fk3(book_id) references books(id)
    );