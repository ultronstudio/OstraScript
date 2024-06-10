function OstraScript(ostraCode) {
    // Nahrazení "fárat" za "for"
    let jsCode = ostraCode.replace(/\bfárat\b/g, 'for');
    
    // Nahrazení "piča" za ";"
    jsCode = jsCode.replace(/ \bpiča\b/g, ';');
    
    return jsCode;
}

module.exports = {
    OstraScript
};