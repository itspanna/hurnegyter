/*
* File: main.js
* Author: Teleki Panna
* Copyright: 2024 , Teleki Panna
* Group: Szoft I-1-N
* Date: 2024-03-07
* Github: https://github.com/itspanna
* Licenc: GNU GPL
*/

const calcButton = document.querySelector("#calcButton");

calcButton.addEventListener('click', () => {
    startCalc();
});

function startCalc() {
    let a = parseFloat(document.getElementById('side1').value);
    let b = parseFloat(document.getElementById('side2').value);
    let c = parseFloat(document.getElementById('side3').value);
    let d = parseFloat(document.getElementById('side4').value);

    let area = calculatearea(a,b,c,d);

    const perimeter = document.querySelector("#perimeter");
    perimeter.textContent = area;

}


function calculatearea (a, b, c, d)
{
    let s= (a+b+c+d) / 2;
    let area = Math.sqrt((s-a) * (s-b) * (s-c) * (s-d));
    return area;
}
