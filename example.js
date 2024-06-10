const fs = require('fs');
const { OstraScript } = require('./index.js');

let ostraCode = `
typ citac = new Citac("test.txt") piča
typ obsah = citac.cistSoubor() piča
Konzola.vypis(obsah) piča

Konzola.vypis("Ahoj, světe!") piča
`;

let jsCode = OstraScript(ostraCode);
console.log("Přeložený kód:");
console.log(jsCode);

eval(jsCode);