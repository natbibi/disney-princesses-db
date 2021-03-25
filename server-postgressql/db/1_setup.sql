DROP TABLE IF EXISTS princesses;

CREATE TABLE princesses (
    id serial PRIMARY KEY, 
    name varchar(20) NOT NULL,
    age int NOT NULL,
    feature_film varchar(50) NOT NULL,
    fave_color varchar(10)
);