EXPLAIN SELECT name FROM items
JOIN bids ON items.id = bids.item_id
WHERE amount > 100 AND amount < 120;


EXPLAIN SELECT name FROM items
WHERE items.id =
(SELECT item_id FROM bids
WHERE amount > 100 AND amount < 120)

CREATE TABLE authors (
  id serial PRIMARY KEY,
  name varchar(100) NOT NULL
);

CREATE TABLE books (
  id serial PRIMARY KEY,
  title varchar(100) NOT NULL,
  isbn char(13) UNIQUE NOT NULL,
  author_id int REFERENCES authors(id)
);

CREATE INDEX ON books (author_id);

INSERT INTO books (title, author)
VALUES 
  ()

SELECT items.name AS "Bid on Items"
FROM items WHERE items.id IN (SELECT DISTINCT item_id FROM bids);

SELECT items.name AS "Not Bid On"
FROM items WHERE items.id NOT IN (SELECT DISTINCT item_id FROM bids);

SELECT name FROM bidders 
WHERE EXISTS (SELECT * FROM bids WHERE bidders.id = bids.bidder_id);

SELECT DISTINCT bidders.name FROM bidders 
JOIN bids 
ON bidders.id = bids.bidder_id
ORDER BY bidders.name ASC;

SELECT MAX(bid_counts.count) FROM 
(SELECT count(bidder_id) FROM bids 
GROUP BY item_id) AS bid_counts;

SELECT name FROM items 
WHERE id = (SELECT)

SELECT  items.name, count(bids.item_id) FROM items
LEFT OUTER JOIN bids ON items.id = bids.item_id
GROUP BY item_id, items.name;

SELECT name, (SELECT COUNT(item_id) FROM bids WHERE item_id = items.id)
FROM items;

SELECT id FROM items 
WHERE ROW('Painting', 100.00, 250.00) =
  ROW(name, initial_price, sales_price);

EXPLAIN ANALYZE SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);