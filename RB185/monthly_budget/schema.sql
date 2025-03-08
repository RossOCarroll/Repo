CREATE TABLE users (
  id serial PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password_digest text NOT NULL,
  monthly_income numeric (10, 2) DEFAULT 0
);

CREATE TABLE expenses (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  amount numeric (10, 2) NOT NULL,
  category varchar(255),
  user_id int REFERENCES users(id)
);

INSERT INTO expenses (name, amount, category, user_id)
VALUES ('Rent', 1000.00, 'Housing', 1);

UPDATE users SET monthly_income = 3000.00 WHERE id = 1;