CREATE TABLE customers (
  id serial PRIMARY KEY,
  name text NOT NULL,
  payment_token varchar(8) UNIQUE NOT NULL CHECK (payment_token ~ '^[A-Z]{8}$')
);

CREATE TABLE services (
  id serial PRIMARY KEY,
  description text NOT NULL,
  price numeric(10,2) NOT NULL CHECK (price >= 0.00)
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
      ('One-to-one Trainingg', 999.00);

CREATE TABLE customers_services (
  id serial PRIMARY KEY,
  customer_id int REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  service_id int REFERENCES services(id) NOT NULL,
  UNIQUE (customer_id, service_id)
);

SELECT DISTINCT customers.* FROM customers
JOIN customers_services ON customer_id = customers.id;

SELECT DISTINCT customers.* FROM customers
LEFT OUTER JOIN customers_services ON customer_id = customers.id
WHERE service_id IS NULL;

SELECT description FROM customers_services
RIGHT OUTER JOIN services ON services.id = service_id
WHERE service_id IS NULL;

SELECT customers.name, STRING_AGG(services.description, ', ') AS services
FROM customers 
LEFT OUTER JOIN customers_services ON customers.id = customers_services.customer_id
LEFT OUTER JOIN services ON services.id = customers_services.service_id
GROUP BY customers.id;

SELECT services.description, COUNT(customers_services.service_id) AS count
FROM services 
JOIN customers_services ON services.id = customers_services.service_id
GROUP BY services.id
HAVING COUNT(customers_services.service_id) >= 3;

SELECT SUM(services.price) AS gross
FROM customers_services 
JOIN services ON customers_services.service_id = services.id;

INSERT INTO customers (name, payment_token)
VALUES ('John Doe', 'EYODHLCN');

INSERT INTO customers_services (customer_id, service_id)
VALUES 
    (7, 1),
    (7, 2),
    (7, 3);

SELECT sum(services.price) AS sum 
FROM services 
JOIN customers_services ON services.id = customers_services.service_id
WHERE services.price > 100;

SELECT sum(services.price) AS sum 
FROM customers
CROSS JOIN services
WHERE price > 100;

DELETE FROM customers
WHERE id = 4;

DELETE FROM customers_services
WHERE service_id = 7;

DELETE FROM services
WHERE id = 7;