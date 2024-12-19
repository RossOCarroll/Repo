SELECT count(DISTINCT customer_id) FROM tickets;

SELECT round(count(DISTINCT tickets.customer_id) / count(customers.id)::decimal * 100, 2) 
AS percent
FROM customers 
LEFT JOIN tickets ON customers.id = tickets.customer_id;

SELECT events.name, count(tickets.id) AS popularity
FROM events 
LEFT JOIN tickets ON events.id = tickets.event_id
GROUP BY events.name
ORDER BY popularity DESC;

SELECT customers.id, customers.email, count(DISTINCT tickets.event_id)
FROM customers 
INNER JOIN tickets ON customers.id = tickets.customer_id
GROUP BY customers.id
HAVING count(DISTINCT tickets.event_id) = 3;

SELECT events.name AS event,
events.starts_at,
sections.name AS section, 
seats.row, 
seats.number AS seat
FROM tickets
INNER JOIN events 
  ON tickets.event_id = events.id
INNER JOIN customers 
  ON tickets.customer_id = customers.id
INNER JOIN seats
  ON tickets.seat_id = seats.id 
INNER JOIN sections
  ON seats.section_id = sections.id
WHERE customers.email = 'gennaro.rath@mcdermott.co';