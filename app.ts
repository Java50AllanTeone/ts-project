function shiftRound(str: string,  shift: number = 1): string {
    let arr: string[] = Array.from(str);
    let res: string = arr.map(letter => shiftLetter(letter, shift)).join("");
    
    return res;
}

function unshiftRound(str: string,  shift: number = 1): string {
    let arr: string[] = Array.from(str);
    let res: string = arr.map(letter => shiftLetter(letter, -shift)).join("");
    
    return res;
}

function shiftLetter(letter: string, shift: number) : string {
    const A_CODE: number = "a".charCodeAt(0);
    const Z_CODE: number = "z".charCodeAt(0);
    const LETTERS_COUNT: number = Z_CODE - A_CODE + 1;

    let code: number = letter.charCodeAt(0);
        
        if (code >= A_CODE && code <= Z_CODE) {
            code += shift % LETTERS_COUNT;

            if (code > Z_CODE) {
                code -= LETTERS_COUNT;
            } else if (code < A_CODE) {
                code += LETTERS_COUNT;
            }
        }
    return String.fromCharCode(code);
}