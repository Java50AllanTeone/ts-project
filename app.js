"use strict";
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i));
// }
let num;
num = 12;
let str = "string";
str = "lmn";
let style;
//style = "abc"; error
let color;
function f1(n1, n2) {
    return n1 + n2;
}
//f1(1, "1"); error
function f2(array) {
    return array.reduce((res, cur) => res + cur);
}
function stringNumberAction(strNum) {
    let res;
    if (typeof strNum == "string") {
        res = strNum.length;
    }
    else {
        res = strNum * 2;
    }
    return res;
}
console.log(stringNumberAction("10"));
let ar;
ar = [1, 2, 3];
ar = ["a", "b", "c"];
let ar1;
ar1 = [1, "a", 2, "b"];
let someColor;
let someComparator;
someComparator = (n1, n2) => n1 - n2;
const person = { id: 11, name: "Vasya", age: 23 };
//hw-29
function shiftRound(str, shift = 1) {
    return "";
    //adds shift  to ascii codes of lower case letters 
    //if the shidted code will be greater then code of "z"
    //going by the circle from "a"
}
function unshiftRound(str, shift = 1) {
    return "";
}
//# sourceMappingURL=app.js.map