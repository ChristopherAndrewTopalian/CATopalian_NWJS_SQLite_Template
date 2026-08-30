// read_and_show_data.js

const path = require('path');

const { DatabaseSync } = require('node:sqlite');

function read_and_show_data()
{
    let dbPath = path.join(process.cwd(), 'src', 'js', '3data', 'military_warehouse.db');

    const db = new DatabaseSync(dbPath);

    // The SQL command to SELECT data
    const sql_select = "SELECT part_name, price FROM Inventory WHERE quantity > 1;";

    // Prepare and fetch the results
    const stmt = db.prepare(sql_select);
    const results = stmt.all();

    // Loop through the results (returned as plain JS objects)
    for (const row of results)
    {
        console.log(`Item: ${row.part_name} | Price: $${row.price}`);

        ge('output').textContent += `Item: ${row.part_name} | Price: $${row.price}\n`;
    }

    db.close();
}

/*
Item: Kevlar Vest | Price: $450.5
Item: Night Vision Goggles | Price: $2500
Item: Combat Boots | Price: $89.99
Item: Tactical Radio | Price: $320
Item: MRE Case | Price: $45
Item: Ammunition Crate | Price: $180
Item: Portable Generator | Price: $1200
Item: Camouflage Netting | Price: $60
Item: Titanium Grappling Hook | Price: $145
Item: Thermal Imaging Drone | Price: $3500
Item: Ballistic Helmet | Price: $320.75
Item: Heavy Breach Door Ram | Price: $450
Item: Waterproof GPS Navigator | Price: $210.5
Item: Armored Plate Carrier | Price: $195
Item: Laser Rangefinder | Price: $280.99
Item: Paracord Rescue Rope | Price: $25
Item: Ghillie Suit | Price: $120
Item: Drop-Leg Holster | Price: $45.5
Item: Carbon Fiber Crossbow | Price: $850
Item: Tactical Tomahawk | Price: $95
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting

