SELECT upper(SUBSTR(name, 1, 1)) AS first_letter, count(*)
FROM people 
GROUP BY upper(SUBSTR(name, 1, 1))
ORDER BY upper(SUBSTR(name, 1, 1));

SELECT upper(left(name, 1)), count(id)
  FROM people GROUP BY upper(left(name, 1))
  ORDER BY upper(left(name, 1));

  SELECT upper(left(name, 1)) AS first_letter, count(id)
  FROM people GROUP BY first_letter
  ORDER BY first_letter;

SELECT left(upper(name), 1) AS first_letter, count(name)
  FROM people GROUP BY first_letter
  ORDER BY first_letter;

SELECT upper(substring(name from 1 for 1)) AS first_letter, count(id)
  FROM people GROUP BY first_letter
  ORDER BY first_letter;

SELECT name FROM users 
WHERE admin != false OR admin IS NULL;

-- Create the table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    admin boolean,
    last_login TIMESTAMP
);

-- Insert data into the table
INSERT INTO users (id, name, email, admin, last_login)
VALUES
    (1, 'Mike', 'mikeym@example.com', 'f', '2017-12-30 08:43:12'),
    (2, 'Gustavo', 'gus@example.com', 't', '2018-01-12 22:17:34'),
    (3, 'Tamara', 'tammy@example.com', 't', '2018-01-15 09:22:22'),
    (4, 'Arron', 'arronrose@example.com', NULL, '2018-01-29 21:37:46'),
    (5, 'Jane', 'jane@example.com', 'f', '2017-11-28 15:17:21');

SELECT favorite_flavor AS flavor, count(name) AS votes, round(avg(age)) AS age
FROM class_ice_cream_survey
GROUP BY favorite_flavor
ORDER BY age;

SELECT count(id) FROM tickets;

SELECT count(id) FROM customer
;

SELECT count(DISTINCT customer_id) FROM tickets;

SELECT round(count(DISTINCT tickets.customer_id) / 
        count(DISTINCT customers.id)::decimal *100, 2) AS percent 
FROM customers
LEFT OUTER JOIN tickets ON tickets.customer_id = customers.id;

SELECT events.name, count(tickets.event_id) AS popularity
FROM events
LEFT JOIN tickets ON events.id = tickets.event_id
GROUP BY events.name
ORDER BY popularity DESC;

SELECT customers.id, customers.email, count(DISTINCT tickets.event_id)
FROM customers 
INNER JOIN tickets ON customers.id = tickets.customer_id
GROUP BY customers.id
HAVING count(DISTINCT tickets.event_id) = 3;

SELECT events.name, events.starts_at, sections.name, seats.row, seats.number 
FROM events 
JOIN tickets ON events.id = tickets.event_id
JOIN seats ON tickets.seat_id = seats.id 
JOIN sections ON seats.section_id = sections.id
JOIN customers ON tickets.customer_id = customers.id
WHERE customers.email = 'gennaro.rath@mcdermott.co';