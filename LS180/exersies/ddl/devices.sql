CREATE TABLE devices (
  id serial PRIMARY KEY,
  name text NOT NULL,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE parts (
  id serial PRIMARY KEY,
  part_number int UNIQUE NOT NULL,
  device_id int REFERENCES devices(id)
);

INSERT INTO devices (name)
VALUES ('Accelerometer'), ('Gyroscope');


INSERT INTO parts (part_number, device_id)
VALUES (7894, 1),
       (5772, 1),
       (6783, 1),
       (4618, 2),
       (4619, 2),
       (1516, 2),
       (3262, 2),
       (6481, 2);


INSERT INTO parts (part_number)
VALUES (432),
       (2518),
       (3639);

SELECT devices.name, parts.part_number 
FROM devices 
JOIN parts ON devices.id = parts.device_id;

SELECT * FROM parts 
WHERE part_number::text LIKE ('3%');

SELECT devices.name, COUNT(device_id) AS parts_count
FROM devices 
LEFT OUTER JOIN parts ON parts.device_id = devices.id
GROUP BY devices.name
ORDER BY parts_count DESC;

SELECT parts.part_number, parts.device_id 
FROM parts 
WHERE parts.device_id IS NOT NULL;

SELECT parts.part_number, parts.device_id 
FROM parts 
WHERE parts.device_id IS NULL;

INSERT INTO devices (name) VALUES ('Magnetometer');
INSERT INTO parts (part_number, device_id) VALUES (42, 3);

SELECT devices.name 
FROM devices
WHERE created_at = (SELECT MIN(created_at) FROM devices);

SELECT name FROM devices MIN(created_at) FROM devices

SELECT name AS oldest_device 
FROM devices 
ORDER BY created_at ASC
LIMIT 1;

UPDATE parts 
SET device_id = 1 
WHERE id = 4;

UPDATE parts 
SET device_id = 2
WHERE min(part_number);

DELETE FROM parts 
WHERE device_id = 1;

DELETE FROM devices
WHERE name = 'Accelerometer';