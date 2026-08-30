// seed_data_uniform.js

const { DatabaseSync } = require('node:sqlite');

const db = new DatabaseSync('military_warehouse.db');

// Recreate the table so we start clean
db.exec("DROP TABLE IF EXISTS Inventory");
db.exec(`
CREATE TABLE IF NOT EXISTS Inventory (
    id INTEGER PRIMARY KEY,
    part_name TEXT,
    quantity INTEGER,
    price REAL,
    delivery_date TEXT
);
`);

// Same 10 items, now with price added alongside the uniform ISO dates
db.exec(`
INSERT INTO Inventory (part_name, quantity, price, delivery_date) 
VALUES 
    ('Kevlar Vest', 150, 450.50, '2025-11-15'),
    ('Night Vision Goggles', 45, 2500.00, '2026-02-10'),
    ('Combat Boots', 220, 89.99, '2026-01-05'),
    ('Tactical Radio', 60, 320.00, '2025-12-01'),
    ('MRE Case', 500, 45.00, '2026-03-22'),
    ('Ammunition Crate', 80, 180.00, '2026-01-30'),
    ('Portable Generator', 12, 1200.00, '2025-10-09'),
    ('Camouflage Netting', 95, 60.00, '2026-04-02'),
    ('Titanium Grappling Hook', 25, 145.00, '2026-05-12'),
    ('Thermal Imaging Drone', 8, 3500.00, '2026-06-18'),
    ('Ballistic Helmet', 110, 320.75, '2026-07-22'),
    ('Heavy Breach Door Ram', 15, 450.00, '2026-08-05'),
    ('Waterproof GPS Navigator', 70, 210.50, '2026-09-11'),
    ('Armored Plate Carrier', 140, 195.00, '2026-10-01'),
    ('Laser Rangefinder', 40, 280.99, '2026-10-15'),
    ('Paracord Rescue Rope', 300, 25.00, '2026-11-20'),
    ('Ghillie Suit', 35, 120.00, '2026-12-05'),
    ('Drop-Leg Holster', 85, 45.50, '2026-12-10'),
    ('Carbon Fiber Crossbow', 20, 850.00, '2027-01-14'),
    ('Tactical Tomahawk', 50, 95.00, '2027-02-28');
`);

console.log("Military Warehouse inventory seeded with uniform-date items (with pricing) successfully!");

db.close();

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting

