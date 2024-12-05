```sql

INSERT INTO albums (album_name, released, genre, label, singer_id)
VALUES ('Born to Run', '1975-08-25', 'Rock and roll', 'Columbia', 3),
('Purple Rain', '1984-06-25', 'Pop, R&B, Rock', 'Warner Bros', 8),
('Born in the USA', '1984-06-04', 'Rock and roll, pop', 'Columbia', 3),
('Madonna', '1983-07-27', 'Dance-pop, post-disco', 'Warner Bros', 7),
('True Blue', '1986-06-30', 'Dance-pop, Pop', 'Warner Bros', 7),
('Elvis', '1956-10-19', 'Rock and roll, Rhythm and Blues', 'RCA Victor', 10),
('Sign ''o'' the Times', '1987-03-30', 'Pop, R&B, Rock, Funk', 'Paisley Park, Warner Bros', 8),
('G.I. Blues', '1960-10-01', 'Rock and roll, Pop', 'RCA Victor', 10);

CREATE TABLE customers (
  customer_id serial PRIMARY KEY,
  customer_name varchar(100)
)

CREATE TABLE email_addresses (
  customer_id int,
  customer_email varchar(100),
  PRIMARY KEY (customer_id),
  FOREIGN KEY (customer_id)
    REFERENCES customers(customer_id)
    ON DELETE CASCADE
);


INSERT INTO customers (customer_name)
VALUES 
  ('Natasha ''O''Shea'),
  ('James Bergman'),
  ('Aaron Muller');

INSERT INTO email_addresses (customer_id, customer_email)
VALUES 
  (1, 'natasha@osheafamily.com'),
  (2, 'james1998@email.com'),
  (3, NULL);

  CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name varchar(50),
    product_cost numeric(5,2),
    product_type varchar(20),
    product_loyalty_points int
  );

  INSERT INTO products (product_name, product_cost, product_type, product_loyalty_points)
  VALUES 
    ('LS Burger', 3.00, 'Burger', 10),
    ('LS Cheeseburger', 3.50, 'Burger', 15),
    ('LS Chicken Burger', 4.50, 'Burger', 20),
    ('LS Double Deluxe Burger', 6.00, 'Burger', 30),
    ('Fries', 1.20, 'Side', 3),
    ('Onion Rings', 1.50, 'Side', 5),
    ('Cola', 1.50, 'Drink', 5),
    ('Lemonade', 1.50, 'Drink', 5),
    ('Vanilla Shake', 2.00, 'Drink', 7),
    ('Chocolate Shake', 2.00, 'Drink', 7),
    ('Strawberry Shake', 2.00, 'Drink', 7);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id int,
  order_status varchar(20),
  FOREIGN KEY (customer_id)
  REFERENCES customers (customer_id)
  ON DELETE CASCADE
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id int NOT NULL,
  product_id int NOT NULL,
  FOREIGN KEY (order_id)
  REFERENCES orders (id)
  ON DELETE CASCADE,
  FOREIGN KEY (product_id)
  REFERENCES products (id)
  ON DELETE CASCADE
);

INSERT INTO orders (customer_id, order_status)
VALUES (1, 'In Progress'),
(2, 'Placed'),
(2, 'Complete'),
(3, 'Placed');

INSERT INTO order_items (order_id, product_id)
VALUES (1, 3),
(1, 5),
(1, 6),
(1, 8),
(2, 2),
(2, 5),
(2, 7),
(3, 4),
(3, 2),
(3, 5),
(3, 5),
(3, 6),
(3, 10),
(3, 9),
(4, 1),
(4, 5);



SELECT reviews.book_id, reviews.content, reviews.rating, reviews.published_date,
        books.id, books.title, books.author
        FROM reviews
        RIGHT JOIN books
          ON reviews.book_id = books.id;
      
SELECT users.full_name, books.title, 
        checkouts.checkout_date
        FROM users 
        INNER JOIN checkouts
          ON users.id = checkouts.user_id
        INNER JOIN books 
          ON books.id = checkouts.book_id;


SELECT u.full_name, b.title, c.checkout_date
  FROM users AS u
  INNER JOIN checkouts AS c
    ON u.id = c.user_id
  INNER JOIN books AS b
    ON b.id = c.book_id;

SELECT u.full_name FROM users u
  WHERE u.id NOT IN (
    SELECT c.user_id FROM checkouts c
  );

SELECT u.full_name
  FROM users u
  LEFT JOIN checkouts c ON u.id = c.user_id
  WHERE c.user_id IS NULL;

SELECT countries.name, continents.continent_name
    FROM countries
    JOIN continents
    ON countries.continent_id = continents.id;

SELECT countries.name, countries.capital
  FROM countries
  JOIN continents
  ON countries.continent_id = continents.id
  WHERE continents.continent_name = 'Europe';

SELECT singers.first_name
  FROM singers JOIN albums
  ON singers.id = albums.singer_id 
  WHERE albums.label = 'Warner Bros';

SELECT singers.first_name, singers.last_name, albums.album_name, albums.released
  FROM singers JOIN albums
  ON singers.id = albums.singer_id 
  WHERE EXTRACT(YEAR FROM albums.released) BETWEEN 1980 AND 1989
  AND singers.deceased = false
  ORDER BY singers.date_of_birth DESC;

SELECT singers.first_name, singers.last_name
  FROM singers LEFT JOIN albums
  ON singers.id = albums.singer_id
  WHERE albums.id is NULL OR albums.album_name = '';

SELECT singers.first_name, singers.last_name
  FROM singers
  WHERE singers.id NOT IN (
    SELECT albums.singers_id FROM albums
  );

SELECT orders.*, products.*
  FROM orders JOIN order_items
  ON orders.id = order_items.order_id
  JOIN products
  ON order_items.product_id = products.id;

SELECT orders.id
  FROM orders JOIN order_items
  ON orders.id = order_items.order_id
  JOIN products
  ON order_items.product_id = products.id
  WHERE products.product_name = 'Fries';

SELECT DISTINCT c.customer_name AS "Customers who like Fries"
FROM customers AS c JOIN orders as o
ON c.id = o.id
JOIN order_items AS oi
ON o.id = oi.order_id
JOIN products AS p
ON oi.product_id = p.id
WHERE p.product_name = 'Fries';

