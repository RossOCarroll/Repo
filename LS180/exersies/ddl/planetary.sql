CREATE TABLE stars (
  id serial PRIMARY KEY,
  name varchar(25),
  distance integer NOT NULL CHECK (distance > 0),
  spectral_type varchar(1) CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
  companions integer NOT NULL CHECK (companions >= 0)
);

CREATE TABLE planets (
  id serial PRIMARY KEY,
  designation varchar(1) UNIQUE,
  mass integer
)

ALTER TABLE stars ADD CONSTRAINT unique_name UNIQUE(name);
ALTER TABLE planets ADD CONSTRAINT valid_designation UNIQUE(designation);

ALTER TABLE planets ADD COLUMN star_id integer NOT NULL;

ALTER TABLE planets ADD CONSTRAINT fk_star_id 
FOREIGN KEY (star_id) REFERENCES stars(id);

ALTER TABLE stars ALTER COLUMN name TYPE varchar(50);

ALTER TABLE stars
ALTER COLUMN name TYPE varchar(25);

ALTER TABLE stars 
ALTER COLUMN distance TYPE NUMERIC;

ALTER TABLE stars 
ALTER COLUMN spectral_type SET NOT NULL;

DELETE FROM stars
WHERE name = 'Lacaille 9352';

CREATE TYPE spectral_type AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');

ALTER TABLE stars 
ALTER COLUMN spectral_type TYPE spectral_type
USING spectral_type::spectral_type;

ALTER TABLE planets 
ALTER COLUMN mass TYPE numeric;

ALTER TABLE planets 
ADD CONSTRAINT valid_mass CHECK (mass > 0);

ALTER TABLE planets 
ALTER COLUMN designation SET NOT NULL;

ALTER TABLE planets
ADD COLUMN semi_major_axis numeric NOT NULL;

CREATE TABLE moons (
  id serial PRIMARY KEY,
  designation integer NOT NULL,
  semi_major_axis numeric CHECK (semi_major_axis > 0),
  mass numeric CHECK (mass > 0),
  planet_id integer REFERENCES planets(id)
);