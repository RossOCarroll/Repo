SELECT state, count(id) FROM people
GROUP BY state
ORDER BY count(id) DESC 
LIMIT 10;

SELECT SUBSTR(email, STRPOS(email, '@') + 1) AS domain,
count(id) 
FROM people
GROUP BY domain
ORDER BY count(id) DESC;

DELETE FROM people WHERE id = 3999;

DELETE FROM people WHERE state = 'CA';

UPDATE people 
SET given_name = UPPER(given_name)
WHERE email LIKE '%teleworm.us%';

DELETE FROM people;

