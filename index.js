function OstraScript(ostraCode) {
  // Nahrazení "fárat" za "for"
  let jsCode = ostraCode.replace(/\bfárat\b/g, "for");

  // Nahrazení "piča" za ";"
  jsCode = jsCode.replace(/ \bpiča\b/g, ";");

  // Nahrazení "fajne" za "true"
  jsCode = jsCode.replace(/\bfajne\b/g, "true");

  // Nahrazení "nyt" za "false"
  jsCode = jsCode.replace(/\bnyt\b/g, "false");

  // Nahrazení "chuj" za "null"
  jsCode = jsCode.replace(/\bchuj\b/g, "null");

  // Nahrazení "typ" za "let"
  jsCode = jsCode.replace(/\btyp\b/g, "let");

  // Přidání tříd Citac a Konzola
  const classDefinitions = `
class Citac {
    constructor(filePath) {
        this.filePath = filePath;
    }

    cistSoubor() {
        try {
            return fs.readFileSync(this.filePath, 'utf-8');
        } catch (err) {
            console.error('Chyba při čtení souboru:', err);
        }
    }
}

class Konzola {
    static vypis(text) {
        console.log(text);
    }
}
    `;

  // Přidání tříd do přeloženého kódu
  jsCode = classDefinitions + jsCode;

  return jsCode;
}

module.exports = {
  OstraScript,
};
