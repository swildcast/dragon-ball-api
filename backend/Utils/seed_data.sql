-- Seed data for spaces table with Dragon Ball planets

INSERT INTO spaces (name, description, location, capacity, created_at, updated_at) VALUES
('Planeta Vegeta', 'Planeta natal de los Saiyajin', 'Sistema Vegeta', 1000000, NOW(), NOW()),
('Planeta Namek', 'Planeta de los Namekianos', 'Sistema Namek', 500000, NOW(), NOW()),
('Planeta Tierra', 'Planeta donde viven la mayoría de los personajes', 'Sistema Solar', 7000000000, NOW(), NOW()),
('Planeta Kaiosama', 'Planeta del Kaio del Norte', 'Sistema Kaiosama', 1000, NOW(), NOW()),
('Planeta del Dragón', 'Planeta legendario donde habita el dragón Shenlong', 'Sistema Dragón', 100, NOW(), NOW());
