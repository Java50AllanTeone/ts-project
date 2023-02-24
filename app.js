"use strict";
function shiftRound(str, shift = 1) {
    let arr = Array.from(str);
    let res = arr.map(letter => shiftLetter(letter, shift)).join("");
    return res;
}
function unshiftRound(str, shift = 1) {
    let arr = Array.from(str);
    let res = arr.map(letter => shiftLetter(letter, -shift)).join("");
    return res;
}
function shiftLetter(letter, shift) {
    const A_CODE = "a".charCodeAt(0);
    const Z_CODE = "z".charCodeAt(0);
    const LETTERS_COUNT = Z_CODE - A_CODE + 1;
    let code = letter.charCodeAt(0);
    if (code >= A_CODE && code <= Z_CODE) {
        code += shift % LETTERS_COUNT;
        if (code > Z_CODE) {
            code -= LETTERS_COUNT;
        }
        else if (code < A_CODE) {
            code += LETTERS_COUNT;
        }
    }
    return String.fromCharCode(code);
}
//# sourceMappingURL=app.js.map