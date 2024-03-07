/*
* File: main.js
* Author: Teleki Panna
* Copyright: 2024 , Teleki Panna
* Group: Szoft I-1-N
* Date: 2024-03-07
* Github: https://github.com/itspanna
* Licenc: GNU GPL
*/

function hurnegyszog() {
    let a = parseFloat(document.getElementById('side1').value);
    let b = parseFloat(document.getElementById('side2').value);
    let c = parseFloat(document.getElementById('side3').value);
    let d = parseFloat(document.getElementById('side4').value);
}
calcButton.addEventListener('click', ()=> {
    startCalc();
});

function hurnegyszog (a, b, c, d)
{
    let s= (a + b + c + d) / 2;
    let terulet = Math.sqrt((s - a) * (s - b) * (s - c) * (s - d));
    return terulet;
}
