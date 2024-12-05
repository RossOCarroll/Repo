CREATE TABLE birds (
  id SERIAL PRIMARY KEY,
  name varchar(25),
  age int,
  species varchar(15)
);

INSERT INTO birds (name, age, species)
VALUES 
  ('Charlie', 3, 'Finch'),
  ('Allie', 5, 'Owl'),
  ('Jennifer', 3, 'Magpie'),
  ('Jamie', 4, 'Owl'),
  ('Roy', 8, 'Crow');
  
SELECT * FROM birds WHERE age < 5;

UPDATE birds 
SET species = 'Hawk'
WHERE name = 'Jamie';

DELETE FROM birds 
WHERE age = 3 AND species = 'Finch';

ALTER TABLE birds 
ADD CONSTRAINT no_negative_numbers CHECK (age >= 0);

INSERT INTO birds (name, age, species)
VALUES ('Bill', -3, 'bird');

'canoe'
'a long road'
'weren''t'
'"No way!"'