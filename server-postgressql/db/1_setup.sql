DROP TABLE IF EXISTS princesses;

CREATE TABLE princesses (
    id serial PRIMARY KEY, 
    username varchar(20) NOT NULL UNIQUE,
    email varchar(100) NOT NULL UNIQUE,
    password_digest varchar(500) NOT NULL,
    profile_pic varchar(500)
);

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    user_id INT NOT NULL,
    body varchar(200) NOT NULL
);