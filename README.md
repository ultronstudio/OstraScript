# OstraScript

OstraScript je jednoduchý překladač z OstraScriptu do JavaScriptu. OstraScript je humoristický programovací jazyk pro programátory města Ostrava v České republice.

## Instalace

Nainstalujte OstraScript pomocí npm:

```bash
npm install ostrascript
```
## Test
Test knihovny provedete spuštěním příkazu `npm run test`. V konzoli byste měli vidět výsledný kód i výstup.

## Použití
Ukázka použití knihovny OstraScript:

```bash
const { OstraScript } = require('ostrascript');

let ostraCode = `
fárat (let i = 0 piča i < 5 piča i++) {
    console.log(i) piča
}
`;

let jsCode = OstraScript(ostraCode);
console.log("Přeložený kód:");
console.log(jsCode);

eval(jsCode);
```

## Přispívání
Pokud máte zájem přispět do projektu, neváhejte vytvořit pull request nebo nahlásit problém na GitHubu.

## Licence
Tento projekt je licencován pod MIT licencí.