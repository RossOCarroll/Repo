CREATE TABLE people (
  name text,
  age integer,
  occupation text
);

INSERT INTO people 
VALUES
  ('Abby', 34, 'biologist'),
  ('Mu''nisah', 26, NULL),
  ('Mirabelle', 40, 'contractor');

SELECT * FROM people WHERE age = 26;
SELECT * FROM people WHERE name = 'Mu''nisah';
SELECT * FROM people WHERE occupation IS NULL;

CREATE TABLE birds (
  name varchar(50),
  length decimal(4, 1),
  wingspan decimal(4, 1),
  family varchar(50),
  extinct boolean
);

INSERT INTO birds
VALUES 
  ('Spotted Towhee', 21.6, 26.7, 'Emberizidae', false),
  ('American Robin', 25.5, 36.0, 'Turdidae', false),
  ('Greater Koa Finch', 19.0, 24, 'Fringillidae', true),
  ('Carolina Parakeet	', 33.0, 55.8, 'Psittacidae', true),
  ('Common Kestrel', 35.5, 73.5, 'Falconidae', false);

SELECT name, family FROM birds 
WHERE extinct = false
ORDER BY length ASC;

SELECT round(AVG(wingspan), 1), MIN(wingspan), MAX(wingspan) FROM birds;

CREATE TABLE menu_items (
  item varchar(50),
  prep_time integer,
  ingredient_cost decimal(4, 2),
  sales integer,
  menu_price decimal(4, 2)
);

INSERT INTO menu_items 
VALUES 
  ('omeltte', 10, 1.50, 182, 7.99),
  ('tacos', 5, 2.00, 254, 8.99),
  ('oatmeal', 1, 0.50, 79, 5.99);

SELECT item, ((menu_price - ingredient_cost) * sales) AS profit
FROM menu_items;

SELECT item, menu_price, ingredient_cost,
       round(prep_time/60.0 * 13.0, 2) AS labor,
       menu_price - ingredient_cost - round(prep_time/60.0 * 13.0, 2) AS profit
  FROM menu_items
  ORDER BY profit DESC;