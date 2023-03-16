/*

Övning 2
• Skapa skript som läser in antalet minuter man i
genomsnitt ringer per månad samt kostnaden per minut
(via 2 prompt).
• Som resultat skall programmet visa en dialogruta (alert) 
där det anges hur stor den beräknade kostnaden per månad blir.

*/

let min = prompt("Pris mer minut?");
console.log(min);
let month = prompt("Antal minuter per månad?");
console.log(month);
console.log(min*month);
alert("Du behöver betala " + min * month + " kr per månad");

console.error("Felmeddelande");
