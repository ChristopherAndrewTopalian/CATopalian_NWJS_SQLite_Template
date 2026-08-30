// makeInterface.js

function makeInterface()
{
    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_NWJS_SQLite_Template';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian NWJS SQLite Template';
    theTitle.style.fontSize = '17px';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.fontFamily = 'Arial';
    theTitle.style.color = 'rgb(170, 170, 170)';
    theTitle.style.textDecoration = 'none';
    theTitle.className = 'center';
    ba(theTitle);

    ba(ce('hr'));

    let militaryTitle = ce('div');
    militaryTitle.textContent = 'MILITARY WAREHOUSE INVENTORY';
    militaryTitle.style.color = 'white';
    militaryTitle.style.fontSize = '25px';
    militaryTitle.style.fontWeight = 'bold';
    militaryTitle.style.color = 'rgb(0, 200, 200)';
    militaryTitle.style.marginBottom = '0px';
    ba(militaryTitle);

    let output = ce('pre');
    output.id = 'output';
    output.style.fontFamily = 'Arial';
    output.style.fontSize = '20px';
    output.style.fontWeight = 'bold';
    output.style.color = 'rgb(170, 170, 170)';
    output.style.border = 'solid 3px rgb(170, 170, 170)';
    output.style.padding = '4px 8px';
    output.style.marginTop = '0px';
    output.style.height = '80vh';
    output.style.overflowY = 'scroll';
    ba(output);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting

