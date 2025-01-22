CREATE TABLE customers (
  id serial PRIMARY KEY,
  name text NOT NULL,
  payment_token varchar(8) NOT NULL UNIQUE CHECK (payment_token ~ '^[A-Z]{8}$')
);

CREATE TABLE services (
  id serial PRIMARY KEY,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL CHECK (price >= 0.00)
);

CREATE TABLE customers_services (
  id serial PRIMARY KEY,
  customer_id int REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  service_id int REFERENCES services(id) NOT NULL,
  UNIQUE (customer_id, service_id)
);

SELECT DISTINCT customers.* FROM customers 
JOIN customers_services ON customers.id = customers_services.customer_id;

SELECT customers.* FROM customers
LEFT OUTER JOIN customers_services ON customers.id = customers_services.customer_id
WHERE service_id IS NULL;

SELECT * FROM customers_services;

SELECT services.description FROM customers_services
RIGHT OUTER JOIN services 
  ON services.id = customers_services.service_id
WHERE service_id IS NULL;

SELECT customers.name, STRING_AGG(services.description, ', ') AS services 
FROM customers 
LEFT OUTER JOIN customers_services ON customers.id = customers_services.customer_id
LEFT OUTER JOIN services ON services.id = customers_services.service_id
GROUP BY customers.name
ORDER BY customers.name;

SELECT services.description, COUNT(customers_services.service_id)
FROM services
INNER JOIN customers_services ON services.id = customers_services.service_id
GROUP BY services.description
HAVING COUNT(customers_services.service_id) >= 3;

SELECT SUM(services.price) FROM services 
JOIN customers_services ON services.id = customers_services.service_id;


INSERT INTO customers (name, payment_token)
VALUES ('John Doe', 'EYODHLCN');

INSERT INTO customers_services (customer_id, service_id)
VALUES (7, 1), (7, 2), (7, 3);

SELECT SUM(services.price) FROM services 
JOIN customers_services ON services.id = customers_services.service_id
WHERE services.price > 100;

SELECT SUM(price) * (SELECT count(id) FROM customers) AS sum
FROM services 
WHERE price > 100;

SELECT count(id) FROM customers;

DELETE FROM customers_services WHERE service_id = 7;

DELETE FROM services WHERE description = "Bulk Email";

DELETE FROM services
WHERE description = 'Bulk Email';

