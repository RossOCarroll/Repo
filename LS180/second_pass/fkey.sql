ALTER TABLE orders
ADD CONSTRAINT orders_product_id_fkey
FOREIGN KEY (product_id) REFERENCES products (id);

INSERT INTO products (name)
VALUES ('small bolt'), ('large bolt');

INSERT INTO orders (quantity, product_id)
VALUES (10, 1), (25, 1), (15, 2);

SELECT orders.quantity, products.name 
FROM orders 
JOIN products ON orders.product_id = products.id;

INSERT INTO orders (quantity)
VALUES (13);

DELETE FROM orders 
WHERE product_id IS NULL;

ALTER TABLE orders 
ALTER COLUMN product_id 
SET NOT NULL;

CREATE TABLE reviews (
  id serial PRIMARY KEY,
  product_id integer REFERENCES products (id) NOT NULL,
  review text
);

INSERT INTO reviews (product_id, review)
VALUES 
  (1, 'a little small'),
  (1, 'very round!'),
  (2, 'could have been smaller');

INSERT INTO calls ("when", duration, contact_id)
VALUES ('2016-01-18 14:47:00', 632, 6);

SELECT calls.when, calls.duration, contacts.first_name 
FROM calls 
JOIN contacts ON calls.contact_id = contacts.id 
WHERE contacts.id != 6;

INSERT INTO contacts (first_name, last_name, number)
VALUES 
  ('Merve', 'Elk', 6343511126),
  ('Sawa', 'Fyodorov', 6125594874);

INSERT INTO calls ("when", duration, contact_id)
VALUES 
  ('2016-01-17 11:52:00', 175, 26),
  ('2016-01-18 21:22:00', 79, 27);

ALTER TABLE contacts 
ADD CONSTRAINT unique_number UNIQUE (number);

CREATE TABLE directors (
  id serial PRIMARY KEY,
  name text NOT NULL
);

ALTER TABLE films
ADD COLUMN director_id int REFERENCES directors (id);

ALTER TABLE films
ALTER COLUMN director_id SET NOT NULL;

ALTER TABLE films DROP COLUMN director;

ALTER TABLE directors 
ADD CONSTRAINT valid_director CHECK (length(name) > 0 AND position(' ' in name) > 0);

SELECT films.title, films.year, directors.name, films.duration 
FROM films 
INNER JOIN directors ON films.director_id = directors.id;

ALTER TABLE books_categories
ALTER COLUMN book_id 
SET NOT NULL;

ALTER TABLE books_categories
ALTER COLUMN category_id
SET NOT NULL;

ALTER TABLE books_categories
DROP CONSTRAINT books_categories_book_id_fkey;

ALTER TABLE books_categories
DROP CONSTRAINT books_categories_category_id_fkey;

ALTER TABLE books_categories
ADD CONSTRAINT books_categories_book_id_fkey FOREIGN KEY (book_id)
REFERENCES books(id) ON DELETE CASCADE;

ALTER TABLE books_categories
ADD CONSTRAINT books_categories_category_id_fkey FOREIGN KEY (category_id)
REFERENCES categories(id) ON DELETE CASCADE;

SELECT books.id, books.author, string_agg(categories.name, ', ') AS categories
FROM books 
INNER JOIN books_categories ON books.id = books_categories.book_id
INNER JOIN categories ON categories.id = books_categories.category_id 
GROUP BY books.id, books.author
ORDER BY books.id ASC;

ALTER TABLE books_categories
ADD UNIQUE (book_id, category_id);

SELECT categories.name, count(books.id) AS book_count,
      string_agg(books.title, ', ')
FROM books 
JOIN books_categories ON books.id = books_categories.book_id
JOIN categories ON categories.id = books_categories.category_id
GROUP BY categories.name
ORDER BY categories.name;


CREATE TABLE directors_films (
  id serial PRIMARY KEY,
  director_id int REFERENCES directors(id) ON DELETE CASCADE,
  film_id int REFERENCES films(id) ON DELETE CASCADE,
  UNIQUE (director_id, film_id)
);

ALTER TABLE films 
DROP COLUMN director_id;

SELECT films.title, directors.name 
FROM films 
JOIN directors_films ON films.id = directors_films.film_id
JOIN directors ON directors_films.director_id = directors.id
ORDER BY films.title;

SELECT directors.name, count(films.id) AS films
FROM directors 
JOIN directors_films ON directors.id = directors_films.director_id
JOIN films ON directors_films.film_id = films.id
GROUP BY directors.name
ORDER BY films DESC, directors.name ASC;

SELECT DISTINCT users.name FROM users 
JOIN checkouts ON users.id = checkouts.user_id 
WHERE checkouts.checkout_date IS NOT NULL;

SELECT library_users.name AS "User Name",
books.name AS "Books Checked Out"
FROM library_users 
FULL OUTER JOIN checkouts ON library_users.id = checkouts.user_id
FULL OUTER JOIN books ON books.id = checkouts.book_id;