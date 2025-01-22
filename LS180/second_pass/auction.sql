SELECT items.name AS "Bid on Items" FROM items
WHERE id NOT IN (SELECT item_id FROM bids);



SELECT name FROM bidders 
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

SELECT MAX(count) FROM (SELECT bidder_id, COUNT(*) FROM bids GROUP BY bidder_id);

SELECT items.name, (SELECT COUNT(item_id) FROM bids WHERE bids.item_id = items.id) FROM items;

SELECT COUNT(item_id) FROM bids GROUP BY item_id;

SELECT id
FROM items
WHERE (name = 'Painting') * (initial_price = 100.00) * (sales_price = 250.00) = 1;

SELECT id
FROM items
WHERE (CASE WHEN name = 'Painting' THEN 1 ELSE 0 END) +
      (CASE WHEN initial_price = 100.00 THEN 1 ELSE 0 END) +
      (CASE WHEN sales_price = 250.00 THEN 1 ELSE 0 END) = 3;

SELECT id
FROM items
WHERE (name, initial_price, sales_price) = ('Painting', 100.00, 250.00);

EXPLAIN SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

EXPLAIN ANALYZE SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

EXPLAIN ANALYZE SELECT MAX(bid_counts.count) FROM
  (SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts;

EXPLAIN ANALYZE SELECT COUNT(bidder_id) AS max_bid FROM bids
  GROUP BY bidder_id
  ORDER BY max_bid DESC
  LIMIT 1;

