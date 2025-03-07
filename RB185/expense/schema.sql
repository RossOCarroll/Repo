CREATE TABLE expenses (
  id serial PRIMARY KEY,
  amount numeric(6,2) NOT NULL,
  memo text NOT NULL,
  created_on date NOT NULL
);

ALTER TABLE expenses ADD CONSTRAINT positive_amount CHECK (amount >= 0.01);

INSERT INTO expenses (amount, memo, created_on)
VALUES 
    (14.56, 'Pencils', NOW()),
    (3.29, 'Coffee', NOW()),
    (49.99, 'Text Editor', NOW());

SELECT id, created_on, amount, memo FROM expenses WHERE memo ILIKE '%coffee%';

DELETE FROM expenses WHERE id = 5;

SELECT * FROM expenses WHERE id = 4;