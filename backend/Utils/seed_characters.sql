-- Create table for Dragon Ball protagonists
CREATE TABLE IF NOT EXISTS characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert main protagonists
INSERT INTO characters (name, description, created_at, updated_at) VALUES
('Goku', 'Protagonista principal, Saiyajin criado en la Tierra', NOW(), NOW()),
('Vegeta', 'Príncipe de los Saiyajin', NOW(), NOW()),
('Piccolo', 'Guerrero Namekiano', NOW(), NOW()),
('Gohan', 'Hijo de Goku', NOW(), NOW()),
('Krillin', 'Mejor amigo de Goku', NOW(), NOW()),
('Bulma', 'Científica y amiga de Goku', NOW(), NOW()),
('Trunks', 'Hijo de Vegeta y Bulma', NOW(), NOW()),
('Frieza', 'Villano principal en la saga de Namek', NOW(), NOW());
