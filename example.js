const { OstraScript } = require('./index');

let ostraCode = `
fárat (let i = 0 piča i < 5 piča i++) {
    console.log(i) piča
}
`;

let jsCode = OstraScript(ostraCode);
console.log("Přeložený kód:");
console.log(jsCode);

eval(jsCode);