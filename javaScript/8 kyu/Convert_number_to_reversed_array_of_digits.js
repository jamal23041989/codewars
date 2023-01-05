"use strict";
/**
 * Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
 * 
    35231 => [1,3,2,5,3]
    0 => [0]
 */

function digitize(n) {
    //code here
    return String(n)
        .split("")
        .map((el) => +el)
        .reverse();
}

console.log(digitize(35231)); // [1, 3, 2, 5, 3]
console.log(digitize(0)); // [0]
