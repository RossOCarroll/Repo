CREATE TABLE airlines (
  id SERIAL PRIMARY KEY,
  airline_name varchar(30) NOT NULL,
  country_name varchar(50),
  iata_code varchar(2),
  icao_code varchar(3),
  website varchar(50)
);

CREATE TABLE flights (
  id SERIAL PRIMARY KEY,
  flight_code varchar(8) NOT NULL,
  departure_airport varchar(40),
  arrival_airport varchar(40),
  departure_date date,
  arrival_date date,
  departure_time time,
  arrival_time time,
  airline_id int REFERENCES airlines(id)
);

CREATE TABLE people (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL 
);

INSERT INTO people (id, name)
VALUES
    (1, 'Abedi'),
    (2, 'Allyssa'),
    (3, 'amy'),
    (4, 'ben'),
    (5, 'Becky'),
    (6, 'Christophe'),
    (7, 'Camilla'),
    (8, 'david'),
    (9, 'Elsa'),
    (10, 'frank'),
    (11, 'Felipe');

SELECT upper(left(name, 1)) AS first_letter,
  count(id)
  FROM people
  GROUP BY first_letter
  ORDER BY first_letter;

ALTER TABLE people RENAME TO names;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    admin BOOLEAN, -- true or false for admin status
    last_login TIMESTAMP
);

INSERT INTO users (id, name, email, admin, last_login)
VALUES
    (1, 'Mike', 'mikeym@example.com', FALSE, '2017-12-30 08:43:12'),
    (2, 'Gustavo', 'gus@example.com', TRUE, '2018-01-12 22:17:34'),
    (3, 'Tamara', 'tammy@example.com', TRUE, '2018-01-15 09:22:22'),
    (4, 'Arron', 'arronrose@example.com', NULL, '2018-01-29 21:37:46'),
    (5, 'Jane', 'jane@example.com', FALSE, '2017-11-28 15:17:21');


SELECT * FROM users WHERE admin = FALSE OR admin IS NULL;

CREATE TABLE class_ice_cream_survey (
    name VARCHAR(50),
    age INT,
    favorite_flavor VARCHAR(50)
);

INSERT INTO class_ice_cream_survey (name, age, favorite_flavor)
VALUES
    ('Afia', 6, 'Strawberry'),
    ('Ben', 6, 'Chocolate'),
    ('Clara', 6, 'Strawberry'),
    ('David', 7, 'Rocky Road'),
    ('Emma', 6, 'Vanilla'),
    ('Jian', 7, 'Chocolate'),
    ('Juana', 6, 'Chocolate'),
    ('Kayla', 7, 'Vanilla'),
    ('Michael', 6, 'Chocolate'),
    ('Sofia', 7, 'Chocolate'),
    ('Taylor', 6, 'Strawberry'),
    ('Zoe', 7, 'Chocolate');

SELECT favorite_flavor AS flavor, 
  count(name) AS votes,
  max(age) AS age
  FROM class_ice_cream_survey
  GROUP BY favorite_flavor
  ORDER BY age, votes DESC;

-- Create the Library Users table
CREATE TABLE library_users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO library_users (id, name)
VALUES
    (1, 'Linda Phillips'),
    (2, 'Natalie Bradley'),
    (3, 'Javier Dean'),
    (4, 'Alma Flores'),
    (5, 'Jessie Meyer');

-- Create the Books table
CREATE TABLE books (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    author VARCHAR(100),
    isbn VARCHAR(13)
);

-- Create the Library Users table
CREATE TABLE library_users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO library_users (id, name)
VALUES
    (1, 'Linda Phillips'),
    (2, 'Natalie Bradley'),
    (3, 'Javier Dean'),
    (4, 'Alma Flores'),
    (5, 'Jessie Meyer');

-- Create the Books table
CREATE TABLE books (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    author VARCHAR(100),
    isbn VARCHAR(13)
);

-- Create the Library Users table
CREATE TABLE library_users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO library_users (id, name)
VALUES
    (1, 'Linda Phillips'),
    (2, 'Natalie Bradley'),
    (3, 'Javier Dean'),
    (4, 'Alma Flores'),
    (5, 'Jessie Meyer');

-- Create the Books table
CREATE TABLE books (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    author VARCHAR(100),
    isbn VARCHAR(13)
);

CREATE TABLE library_users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO library_users (id, name)
VALUES
    (1, 'Linda Phillips'),
    (2, 'Natalie Bradley'),
    (3, 'Javier Dean'),
    (4, 'Alma Flores'),
    (5, 'Jessie Meyer');

-- Create the Books table
CREATE TABLE books (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    author VARCHAR(100),
    isbn VARCHAR(13)
);

INSERT INTO books (id, name, author, isbn)
VALUES
    (1, 'On the Road', 'Jack Kerouac', '9780140283297'),
    (2, 'A Game of Thrones', 'George R. R. Martin', '9780553593716'),
    (3, 'The Da Vinci Code', 'Dan Brown', '9780307474278'),
    (4, 'The Handmaid''s Tale', 'Margaret Atwood', '9780385490818'),
    (5, 'Jazz', 'Toni Morrison', '9781400076215'),
    (6, '1Q84', 'Haruki Murakami', '9780307476463');

-- Create the Checkouts table
CREATE TABLE checkouts (
    id INT PRIMARY KEY,
    user_id INT REFERENCES library_users(id),
    book_id INT REFERENCES books(id),
    checkout_date DATE,
    return_date DATE
);

INSERT INTO checkouts (id, user_id, book_id, checkout_date, return_date)
VALUES
    (1, 3, 1, '2016-02-15', '2016-03-11'),
    (2, 3, 2, '2016-03-11', '2016-05-02'),
    (3, 5, 5, '2017-11-25', '2017-12-18'),
    (4, 1, 4, '2017-12-22', NULL),
    (5, 4, 6, '2018-01-02', NULL);

SELECT DISTINCT library_users.name FROM library_users
JOIN checkouts ON checkouts.user_id = library_users.id;

SELECT library_users.name AS "User Name",
  books.name AS "Books checked out"
  FROM library_users 
  LEFT OUTER JOIN checkouts ON library_users.id = checkouts.user_id
  FULL OUTER JOIN books ON checkouts.book_id = books.id;