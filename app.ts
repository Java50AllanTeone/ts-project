// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i));
// }

let num: number;
num = 12;

let str: string = "string";
str = "lmn";

let style: "backgroundColor" | "color";
//style = "abc"; error

let color: "red" | "blue" | "green";

function f1(n1: number, n2: number): number {
    return n1 + n2;
}
//f1(1, "1"); error

function f2(array: number[]): number {
    return array.reduce((res, cur) => res + cur)
}

function stringNumberAction(strNum: string | number) : number {
    let res: number;
    if (typeof strNum == "string") {
        res = strNum.length;
    } else {
        res = strNum * 2;
    }
    return res;
}

console.log(stringNumberAction("10"));

let ar: number[] | string[];
ar = [1, 2, 3];
ar = ["a", "b", "c"];

let ar1: (number | string)[];
ar1 = [1, "a", 2, "b"];

type Color = "red"| "green"| "blue" | "grey" | "yellow";
let someColor: Color;

type Comparator = (num1: number, num2: number) => number;

let someComparator: Comparator;
someComparator = (n1, n2) => n1 - n2;

type Person = {
    id: number;
    name: string;
    age?: number; //not required
}

const person:Person = {id: 11, name: "Vasya", age: 23};

//hw-29

function shiftRound(str: string,  shift: number = 1): string {
    return "";

    //adds shift  to ascii codes of lower case letters 
    //if the shidted code will be greater then code of "z"
    //going by the circle from "a"
}

function unshiftRound(str: string,  shift: number = 1): string {
    return "";
}