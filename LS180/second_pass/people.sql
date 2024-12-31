CREATE TABLE people (
  name varchar(255),
  age integer,
  occupation varchar(255)
)

INSERT INTO people (name, age, occupation)
VALUES ('Abby', 34, 'biologist'), ('Mu''nisah', 26, NULL), ('Mirabelle', 40, 'contractor');

SELECT * FROM people WHERE age = 26 AND name = 'Mu''nisah';

CREATE TABLE birds (
  name varchar(255),
  length decimal(4, 1),
  wingspan decimal(4, 1),
  family varchar(255),
  extinct boolean
);

INSERT INTO birds (name, length, wingspan, family, extinct)
VALUES
  ('Spotted Towhee', 21.6, 26.7, 'Emberizidae', 'f'),
  ('American Robin', 25.5, 36.0, 'Turdidae', 'f'),
  ('Greater Koa Finch', 19.0, 24.0, 'Fringillidae', 't'),
  ('Carolina Parakeet', 33.0, 55.8, 'Psittacidae', 't'),
  ('Common Kestrel', 35.5, 73.5, 'Falconidae', 'f');


SELECT name, family FROM birds WHERE extinct = false
ORDER BY length DESC;

SELECT ROUND(AVG(wingspan), 1), MIN(wingspan), MAX(wingspan) FROM birds;

CREATE TABLE menu_items (
  item varchar(255),
  prep_time int,
  ingredient_cost decimal(4, 2),
  sales int,
  menu_price decimal(4, 2)
);

INSERT INTO menu_items (item, prep_time, ingredient_cost, sales, menu_price)
VALUES
  ('omelette', 10, 1.50, 182, 7.99),
  ('tacos', 5, 2.00, 254, 8.99),
  ('oatmeal', 1, 0.50, 79, 5.99);

SELECT item, (menu_price - ingredient_cost) AS profit FROM menu_items
ORDER BY profit DESC LIMIT 1;

SELECT item, menu_price, ingredient_cost, 
  round(prep_time/60 * 13.0, 2) AS labor,
  menu_price - ingredient_cost - round(prep_time/60 * 13.0, 2) AS profit
  FROM menu_items
  ORDER BY profit DESC;

SELECT item, menu_price, ingredient_cost,
       round(prep_time/60.0 * 13.0, 2) AS labor,
       menu_price - ingredient_cost - round(prep_time/60.0 * 13.0, 2) AS profit
  FROM menu_items
  ORDER BY profit DESC;