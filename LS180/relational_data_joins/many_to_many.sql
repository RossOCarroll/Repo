ALTER TABLE IF EXISTS ONLY public.books_categories DROP CONSTRAINT IF EXISTS books_categories_category_id_fkey;
ALTER TABLE IF EXISTS ONLY public.books_categories DROP CONSTRAINT IF EXISTS books_categories_book_id_fkey;
ALTER TABLE IF EXISTS ONLY public.categories DROP CONSTRAINT IF EXISTS categories_pkey;
ALTER TABLE IF EXISTS ONLY public.books DROP CONSTRAINT IF EXISTS books_pkey;
ALTER TABLE IF EXISTS public.categories ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.books ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE IF EXISTS public.categories_id_seq;
DROP TABLE IF EXISTS public.categories;
DROP SEQUENCE IF EXISTS public.books_id_seq;
DROP TABLE IF EXISTS public.books_categories;
DROP TABLE IF EXISTS public.books;


CREATE TABLE books (
    id integer NOT NULL,
    title character varying(32) NOT NULL,
    author character varying(32) NOT NULL
);

CREATE TABLE books_categories (
    book_id integer,
    category_id integer
);

CREATE SEQUENCE books_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE categories (
    id integer NOT NULL,
    name character varying(32) NOT NULL
);

CREATE SEQUENCE categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE ONLY books ALTER COLUMN id SET DEFAULT nextval('books_id_seq'::regclass);

ALTER TABLE ONLY categories ALTER COLUMN id SET DEFAULT nextval('categories_id_seq'::regclass);

INSERT INTO books VALUES (1, 'A Tale of Two Cities', 'Charles Dickens');
INSERT INTO books VALUES (2, 'Harry Potter', 'J. K. Rowling');
INSERT INTO books VALUES (3, 'Einstein: His Life and Universe', 'Walter Isaacson');


INSERT INTO books_categories VALUES (1, 2);
INSERT INTO books_categories VALUES (1, 4);
INSERT INTO books_categories VALUES (2, 2);
INSERT INTO books_categories VALUES (2, 3);
INSERT INTO books_categories VALUES (3, 1);
INSERT INTO books_categories VALUES (3, 5);
INSERT INTO books_categories VALUES (3, 6);

SELECT pg_catalog.setval('books_id_seq', 3, true);


INSERT INTO categories VALUES (1, 'Nonfiction');
INSERT INTO categories VALUES (2, 'Fiction');
INSERT INTO categories VALUES (3, 'Fantasy');
INSERT INTO categories VALUES (4, 'Classics');
INSERT INTO categories VALUES (5, 'Biography');
INSERT INTO categories VALUES (6, 'Physics');

SELECT pg_catalog.setval('categories_id_seq', 6, true);



ALTER TABLE ONLY books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);

ALTER TABLE ONLY categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);

ALTER TABLE ONLY books_categories
    ADD CONSTRAINT books_categories_book_id_fkey FOREIGN KEY (book_id) REFERENCES books(id);

ALTER TABLE ONLY books_categories
    ADD CONSTRAINT books_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id);



ALTER TABLE books_categories 
ALTER COLUMN book_id SET NOT NULL,
ALTER COLUMN category_id SET NOT NULL;

Foreign-key constraints:
    "books_categories_book_id_fkey" FOREIGN KEY (book_id) REFERENCES books(id)
    "books_categories_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id)

ALTER TABLE books_categories
DROP CONSTRAINT books_categories_book_id_fkey,
DROP CONSTRAINT books_categories_category_id_fkey;

ALTER TABLE books_categories 
ADD CONSTRAINT books_categories_book_id_fkey FOREIGN KEY (book_id)
REFERENCES books(id) ON DELETE CASCADE;

ALTER TABLE books_categories 
ADD CONSTRAINT books_categories_category_id_fkey FOREIGN KEY (category_id)
REFERENCES categories(id) ON DELETE CASCADE;

SELECT books.id, books.author, STRING_AGG(categories.name, ', ')
FROM books 
INNER JOIN books_categories ON books.id = books_categories.book_id
INNER JOIN categories ON books_categories.category_id = categories.id
GROUP BY books.id ORDER BY books.id;

ALTER TABLE books 
ALTER COLUMN author TYPE text;

INSERT INTO books (author, title)
VALUES ('Lynn Sherr', 'Sally Ride: America''s First Woman in Space' ),
       ('Charlotte Brontë', 'Jane Eyre'),
       ('Meeru Dhalwala and Vikram Vij', 'Vij''s: Elegant and Inspired Indian Cuisine');

INSERT INTO categories (name)
VALUES ('Space Exploration'), ('Cookbook'), ('South Asia');

INSERT INTO books_categories (book_id, category_id)
VALUES (4, 5),
        (4, 1),
        (4, 7),
        (5, 2),
        (5, 4),
        (6, 8),
        (6, 1),
        (6, 9);

ALTER TABLE books_categories
ADD CONSTRAINT unique_book_category UNIQUE (book_id, category_id);

SELECT categories.name, 
count(books.title) AS book_count,
STRING_AGG(books.title, ', ') AS book_titles
FROM books
INNER JOIN books_categories ON books.id = books_categories.book_id 
INNER JOIN categories ON books_categories.category_id = categories.id 
GROUP BY categories.name ORDER BY categories.name;