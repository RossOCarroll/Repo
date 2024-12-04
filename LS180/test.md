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