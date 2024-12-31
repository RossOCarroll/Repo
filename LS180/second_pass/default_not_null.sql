INSERT INTO employees VALUES ('Leonardo', 'Ferreira', 'finance', 14);
INSERT INTO employees VALUES ('Sara', 'Mikaelsen', 'operations', 14);
INSERT INTO employees VALUES ('Lian', 'Ma', 'marketing', 13);

ALTER TABLE employees ALTER COLUMN vacation_remaining SET NOT NULL;

ALTER TABLE employees ALTER COLUMN vacation_remaining SET DEFAULT 0;

ALTER TABLE employees ALTER COLUMN department SET DEFAULT 'unassigned';

UPDATE employees SET department = 'unassigned' WHERE department IS NULL;

CREATE TABLE temperatures (
    date DATE NOT NULL,
    low INT NOT NULL,
    high INT NOT NULL
);

SELECT date, round((high + low) /  2.0, 1)AS average FROM temperatures
WHERE date BETWEEN '2016-03-02' AND '2016-03-08';

ALTER TABLE temperatures
      ADD COLUMN rainfall integer
                 DEFAULT 0;

UPDATE temperatures 
SET rainfall = (high + low) / 2 - 35
WHERE (high + low) /  2.0 > 35;

UPDATE temperatures SET rainfall = 0;

ALTER TABLE temperatures RENAME TO weather;

pg_dump -d sql-course -t weather --inserts > dump.sql