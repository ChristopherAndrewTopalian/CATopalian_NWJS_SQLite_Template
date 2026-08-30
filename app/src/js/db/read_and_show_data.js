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
Item: Field Medical Kit | Price: $75.25
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting

