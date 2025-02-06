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

CREATE TABLE books (
  id serial PRIMARY KEY,
  title text NOT NULL,
  year_published integer NOT NULL CHECK (year_published BETWEEN 1000 AND 9999),
  page_count integer
);

INSERT INTO books (title, year_published, page_count) 
  VALUES
    ('A Closed and Common Orbit', 2016, NULL),
    ('A Fall of Moondust', 1961, 224),
    ('Cat''s Cradle', 1963, 304),
    ('Dune', 1965, 412),
    ('Project Hail Mary', 2021, 496),
    ('Record of a Spaceborn Few', 2018, NULL),
    ('The Difference Engine', 1990, 383),
    ('The Dispossessed', 1974, 341),
    ('The Galaxy, and the Ground Within', 2021, NULL),
    ('The Lathe of Heaven', 1971, 184),
    ('The Left Hand of Darkness', 1969, 286),
    ('The Long Tomorrow', 1955, 222),
    ('The Sirens of Titan', 1959, 319);

SELECT title AS "Book Title", year_published AS Published, page_count AS "Page Count"
FROM books
WHERE page_count IS NOT NULL AND year_published <= 2017 
ORDER BY page_count DESC
LIMIT 4;

CREATE TABLE authors (
  id serial PRIMARY KEY,
  name text NOT NULL
);

INSERT INTO authors (name) 
  VALUES
    ('Arthur C. Clarke'),
    ('Becky Chambers'),
    ('Bruce Sterling'),
    ('Frank Herbert'),
    ('Kurt Vonnegut, Jr.'),
    ('Leigh Brackett'),
    ('Ursula K. Le Guin'),
    ('Victoria Aveyard'),
    ('William Gibson');

CREATE TABLE books_authors (
    id SERIAL PRIMARY KEY,
    book_id INT NOT NULL,
    author_id INT NOT NULL
);


INSERT INTO books_authors (book_id, author_id) 
  VALUES
    (1, 2),
    (2, 1),
    (3, 5),
    (4, 4),
    (6, 2), 
    (7, 9),
    (7, 3),
    (8, 7),
    (9, 2),
    (10, 7),
    (11, 7),
    (12, 6),
    (13, 5);

ALTER TABLE books_authors 
  ADD CONSTRAINT fk_books FOREIGN KEY (book_id) REFERENCES books (id)
  ON DELETE CASCADE;

ALTER TABLE books_authors 
  ADD CONSTRAINT fk_authors FOREIGN KEY (author_id) REFERENCES authors (id)
  ON DELETE CASCADE;


SELECT title FROM books WHERE id IN (
  SELECT book_id FROM books_authors
    WHERE author_id = (
        SELECT id
        FROM authors
        WHERE name = 'Becky Chambers'
    )
);

SELECT authors.name AS "Author", count(books_authors.id) AS "Number of Books" FROM authors 
JOIN books_authors ON authors.id = books_authors.author_id
GROUP BY authors.name
HAVING count(books_authors.id) >= 2;

SELECT authors.name AS "Author", 
  count(books_authors.id) AS "Number of Books",
  round(avg(books.page_count)) AS "Average Page Count"
  FROM authors
LEFT JOIN books_authors ON authors.id = books_authors.author_id
LEFT JOIN books ON books_authors.book_id = books.id
GROUP BY authors.name
ORDER BY count(books_authors.id) DESC, authors.name;


ALTER TABLE books
ADD CONSTRAINT check_year_published
CHECK (year_published <= date_part('YEAR', current_date));


SELECT title FROM books 
  WHERE id IN (
    SELECT book_id FROM books_authors 
    WHERE author_id = (SELECT id FROM authors WHERE name = "Becky Chambers" ));

SELECT authors.name FROM authors
  JOIN books_authors ON authors.id = books_authors.author_id
  JOIN books ON books_authors.book_id = books.id 
  WHERE books.title = 'The Difference Engine';

SELECT books.title AS "Book Title"
FROM books
LEFT JOIN books_authors ON books.id = books_authors.book_id
LEFT JOIN authors ON books_authors.author_id = authors.id
WHERE books_authors.author_id IS NULL;

ALTER TABLE books 
DROP CONSTRAINT check_year_published;

