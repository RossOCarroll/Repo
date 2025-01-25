CREATE TABLE employees (
    id serial PRIMARY KEY,
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
    (5, 47000.00);


CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  employee_id int REFERENCES employees(id) NOT NULL,
  project_name varchar(100) NOT NULL,
  start_date date NOT NULL,
  end_date date
);

INSERT INTO projects (employee_id, project_name, start_date, end_date)
VALUES
    (1, 'Project Alpha', '2023-01-01', '2023-06-30'),
    (1, 'Project Beta', '2023-07-01', NULL),
    (2, 'Project Gamma', '2023-02-15', '2023-08-15'),
    (3, 'Project Delta', '2023-03-01', NULL),
    (4, 'Project Epsilon', '2023-04-01', '2023-10-01');

SELECT e.first_name, e.last_name, p.project_name FROM employees e
LEFT JOIN projects p ON e.id = p.employee_id;

SELECT e.first_name, e.last_name, p.project_name FROM employees e
RIGHT JOIN projects p ON e.id = p.employee_id;

--Subquery using IN
SELECT first_name, last_name FROM employees
WHERE id IN (SELECT employee_id FROM projects);

SELECT first_name, last_name FROM employees
WHERE id NOT IN (SELECT employee_id FROM projects);

--Subquery using EXITS 
SELECT first_name, last_name FROM employees
WHERE EXISTS (SELECT 1 FROM projects WHERE employees.id = projects.employee_id);

--Subquery using ANY 
SELECT first_name, last_name FROM employees
WHERE id = ANY ( SELECT employee_id FROM salaries WHERE salary > 55000);