# OstraScript

OstraScript je jednoduchý překladač z OstraScriptu do JavaScriptu. OstraScript je humoristický programovací jazyk, který nahrazuje slovo `for` slovem `fárat` a středníky `;` slovem `piča`.

## Instalace

Nainstalujte OstraScript pomocí npm:

```bash
npm install ostrascript
```

## Použití
Ukázka použití knihovny OstraScript:

```bash
const { ostraScriptToJavaScript } = require('ostrascript');

let ostraCode = `
fárat (let i = 0 piča i < 5 piča i++) {
    console.log(i) piča
}
`;

let jsCode = ostraScriptToJavaScript(ostraCode);
console.log("Přeložený kód:");
console.log(jsCode);

eval(jsCode);
```

## Přispívání
Pokud máte zájem přispět do projektu, neváhejte vytvořit pull request nebo nahlásit problém na GitHubu.

## Licence
Tento projekt je licencován pod MIT licencí.