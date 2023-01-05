"use strict";
/**
Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.

Верните ответ в виде числа.
 */

function sumMix(x) {
    return x.map((val) => +val).reduce((val, cur) => val + cur);
}

console.log(sumMix([9, 3, "7", "3"])); // 22
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 42
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 41
