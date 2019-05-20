drop table if exists users;
create table users(
    id serial primary key,
    email varchar(64) not null UNIQUE,
    username varchar(64) not null UNIQUE,
    password varchar(64) not null,
    f_name varchar(64) not null,
    l_name varchar(64) not null,
    social integer,
    mom_m varchar(64) not null,
    about text,
    age integer,
    gender varchar(1),
    profile_pic text
);
create table comics(
    comic_id serial primary key,
    title varchar(64) not null,
    comic text,
    users_id integer references users(id)
);