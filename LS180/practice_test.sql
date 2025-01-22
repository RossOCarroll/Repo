CREATE TABLE employees (
    employee_id serial PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    department_id INT
);

INSERT INTO employees (first_name, last_name, date_of_birth, department_id)
VALUES
('John', 'Smith', '1985-04-12', 101),
('Jane', 'Doe', '1990-06-23', 102),
('Michael', 'Johnson', '1978-11-05', 103),
('Emily', 'Davis', '1989-02-17', 101),
('Daniel', 'Brown', '1995-09-30', 104);

UPDATE employees
SET department_id = 105
WHERE employee_id = 4;

SELECT * FROM employees WHERE department_id = 104;

DELETE FROM employees WHERE employee_id = 3;

SELECT first_name, last_name FROM employees WHERE department_id >= 103;

INSERT INTO employees (first_name, last_name, date_of_birth, department_id)
VALUES ('Sarah', 'Miller', '1992-07-18', 102);

UPDATE employees SET department_id = 106 WHERE employee_id = 5;

DELETE FROM employees WHERE department_id = 105;

ALTER TABLE employees ADD COLUMN vacation_remaining integer;

ALTER TABLE employees ALTER COLUMN date_of_birth SET NOT NULL;

ALTER TABLE employees DROP COLUMN vacation_remaining;

ALTER TABLE employees RENAME COLUMN employee_id TO id;

CREATE TABLE salaries (
    id serial PRIMARY KEY,
    employee_id integer REFERENCES employees (id) UNIQUE NOT NULL,
    salary decimal(10,2) NOT NULL
);

INSERT INTO salaries (employee_id, salary)
VALUES 
    (1, 55000.00),
    (2, 62000.00),
    (3, 72000.00),
    (4, 58000.00),
    (5, 47000.00),
    (6, 63000.00);

SELECT SUM(salary) FROM salaries
JOIN employees ON salaries.employee_id = employees.id
GROUP BY employees.department_id;

SELECT last_name, first_name, salary FROM salaries
JOIN employees ON salaries.employee_id = employees.id
ORDER BY salary DESC;

SELECT last_name, first_name FROM employees
WHERE department_id > 102;

SELECT department_id, COUNT(*) AS num_employees 
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 1;

SELECT department_id, string_agg(first_name || ' ' || last_name, ', ') AS employees
FROM employees
GROUP BY department_id;

ALTER TABLE employees ALTER COLUMN department_id SET NOT NULL;

ALTER TABLE employees ALTER COLUMN department_id DROP NOT NULL;

ALTER TABLE salaries DROP CONSTRAINT salaries_employee_id_fkey;

ALTER TABLE salaries ADD CONSTRAINT fk_employee_id
FOREIGN KEY (employee_id) REFERENCES employees (id);

ALTER TABLE employees ADD CONSTRAINT valid_name CHECK (length(first_name) > 1);

SELECT first_name, last_name FROM employees
WHERE id IN ( SELECT employee_id FROM salaries WHERE salary > 60000);

SELECT first_name, last_name
FROM employees e
WHERE EXISTS (
    SELECT 1
    FROM salaries s
    WHERE s.employee_id = e.id
);

SELECT first_name, last_name FROM employees
WHERE id NOT IN ( SELECT employee_id FROM salaries WHERE salary > 60000);

SELECT first_name, last_name, department_id
FROM employees e
WHERE e.id IN (
    SELECT employee_id
    FROM salaries
    WHERE salary > ANY (
        SELECT salary
        FROM salaries
    )
);

CREATE SEQUENCE employee_seq
START WITH 1 
INCREMENT BY 1;


