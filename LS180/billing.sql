CREATE TABLE customers (
  id serial PRIMARY KEY,
  name text NOT NULL,
  payment_token char(8) NOT NULL UNIQUE CHECK (payment_token ~ '^[A-Z]{8}$')
);

CREATE TABLE services (
  id serial PRIMARY KEY,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL CHECK (price >= 0.00)
);

INSERT INTO customers (name, payment_token)
VALUES
  ('Pat Johnson', 'XHGOAHEQ'),
  ('Nancy Monreal', 'JKWQPJKL'),
  ('Lynn Blake', 'KLZXWEEE'),
  ('Chen Ke-Hua', 'KWETYCVX'),
  ('Scott Lakso', 'UUEAPQPS'),
  ('Jim Pornot', 'XKJEYAZA');

INSERT INTO services (description, price)
VALUES
  ('Unix Hosting', 5.95),
  ('DNS', 4.95),
  ('Whois Registration', 1.95),
  ('High Bandwidth', 15.00),
  ('Business Support', 250.00),
  ('Dedicated Hosting', 50.00),
  ('Bulk Email', 250.00),
  ('One-to-one Training', 999.00);

CREATE TABLE customers_services (
  id serial PRIMARY KEY,
  customer_id integer
    REFERENCES customers (id)
    ON DELETE CASCADE
    NOT NULL,
  service_id integer
    REFERENCES services (id)
    NOT NULL,
  UNIQUE(customer_id, service_id)
);

INSERT INTO customers_services (customer_id, service_id)
VALUES
  (1, 1), -- Pat Johnson/Unix Hosting
  (1, 2), --            /DNS
  (1, 3), --            /Whois Registration
  (3, 1), -- Lynn Blake/Unix Hosting
  (3, 2), --           /DNS
  (3, 3), --           /Whois Registration
  (3, 4), --           /High Bandwidth
  (3, 5), --           /Business Support
  (4, 1), -- Chen Ke-Hua/Unix Hosting
  (4, 4), --            /High Bandwidth
  (5, 1), -- Scott Lakso/Unix Hosting
  (5, 2), --            /DNS
  (5, 6), --            /Dedicated Hosting
  (6, 1), -- Jim Pornot/Unix Hosting
  (6, 6), --           /Dedicated Hosting
  (6, 7); --           /Bulk Email

SELECT DISTINCT customers.* FROM customers 
INNER JOIN customers_services ON customers.id = customers_services.customer_id;

SELECT DISTINCT customers.* FROM customers 
LEFT OUTER JOIN customers_services ON customers.id = customers_services.customer_id
WHERE customer_id IS NULL;

SELECT services.description FROM services 
  LEFT OUTER JOIN customers_services 
  ON services.id = customers_services.service_id
  WHERE customer_id IS NULL;

SELECT description FROM customers_services 
  RIGHT OUTER JOIN services
  ON services.id = customers_services.service_id
  WHERE service_id IS NULL;

SELECT customers.name, STRING_AGG(services.description, ', ') AS services
  FROM customers 
  LEFT OUTER JOIN customers_services ON customers.id = customers_services.customer_id
  LEFT OUTER JOIN services ON customers_services.service_id = services.id 
  GROUP BY customers.name
  ORDER BY customers.name;

SELECT services.description, count(customers_services.id) FROM services 
INNER JOIN customers_services ON customers_services.service_id = services.id
GROUP BY services.description
HAVING count(customers_services.id) >= 3;

SELECT SUM(services.price) AS gross FROM services 
JOIN customers_services ON services.id = customers_services.service_id;

INSERT INTO customers (name, payment_token)
VALUES ('John Doe', 'EYODHLCN');

INSERT INTO customers_services (customer_id, service_id)
VALUES (7, 1), (7, 2), (7, 3);

SELECT sum(services.price) FROM services 
JOIN customers_services ON services.id = customers_services.service_id
WHERE services.price >= 100;

SELECT sum(price) 
FROM customers
 CROSS JOIN services 
 WHERE services.price > 100;

DELETE FROM customers_services WHERE service_id = 7;
DELETE FROM services WHERE description = 'Bulk Email';
DELETE FROM customers WHERE name = 'Chen Ke-Hua';