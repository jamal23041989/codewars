"use strict";
/**
 * Очень просто, по заданному целому числу или числу с плавающей запятой найти его противоположность.

    Примеры:
    1: -1
    14: -14
    -34: 34
 */

function opposite(number) {
    //your code here
    return number === 0 ? 0 : number * -1;
    // return -number;
}

console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(4.25));
console.log(opposite(3.3333333));
console.log(opposite(-12525220.3325));
console.log(opposite(-5));
