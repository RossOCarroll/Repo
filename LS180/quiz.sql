-- Create Library Users table
CREATE TABLE library_users (
    id serial PRIMARY KEY,
    name text NOT NULL
);

-- Insert data into Library Users table
INSERT INTO library_users (id, name) VALUES
(1, 'Linda Phillips'),
(2, 'Natalie Bradley'),
(3, 'Javier Dean'),
(4, 'Alma Flores'),
(5, 'Jessie Meyer');

-- Create Books table
CREATE TABLE books (
    id serial PRIMARY KEY,
    name text NOT NULL,
    author text NOT NULL,
    isbn varchar(13) UNIQUE NOT NULL
);

-- Insert data into Books table
INSERT INTO books (id, name, author, isbn) VALUES
(1, 'On the Road', 'Jack Kerouac', '9780140283297'),
(2, 'A Game of Thrones', 'George R. R. Martin', '9780553593716'),
(3, 'The Da Vinci Code', 'Dan Brown', '9780307474278'),
(4, 'The Handmaid''s Tale', 'Margaret Atwood', '9780385490818'),
(5, 'Jazz', 'Toni Morrison', '9781400076215'),
(6, '1Q84', 'Haruki Murakami', '9780307476463');

-- Create Checkouts table
CREATE TABLE checkouts (
    id serial PRIMARY KEY,
    user_id int REFERENCES library_users(id) ON DELETE CASCADE NOT NULL,
    book_id int REFERENCES books(id) ON DELETE CASCADE NOT NULL,
    checkout_date date NOT NULL,
    return_date date
);

-- Insert data into Checkouts table
INSERT INTO checkouts (id, user_id, book_id, checkout_date, return_date) VALUES
(1, 3, 1, '2016-02-15', '2016-03-11'),
(2, 3, 2, '2016-03-11', '2016-05-02'),
(3, 5, 5, '2017-11-25', '2017-12-18'),
(4, 1, 4, '2017-12-22', NULL),
(5, 4, 6, '2018-01-02', NULL);
