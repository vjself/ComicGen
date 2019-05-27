drop table if exists comics;
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
    age integer,
    gender varchar(1),
    profile_pic text
);

create table comics(
    comic_id serial primary key,
    title varchar(64) not null,
    comic text,
    username text references users(username),
    users_id integer references users(id)
);

insert into comics (comic_id, title, comic, users_id) 
values (1, 'Funny Comic', 'https://i.ytimg.com/vi/gd5yB9Vmd6I/hqdefault.jpg', 2);
insert into comics (comic_id, title, comic, users_id)
values (2, 'AZ Comic', 'https://www.demilked.com/magazine/wp-content/uploads/2016/12/funny-comics-unexpected-endings-warandpeas-23.jpeg', 3)
insert into comics (comic_id, title, comic, users_id)
values (3, 'AZ Comic', 'https://www.demilked.com/magazine/wp-content/uploads/2016/12/funny-comics-unexpected-endings-warandpeas-23.jpeg', 6)
