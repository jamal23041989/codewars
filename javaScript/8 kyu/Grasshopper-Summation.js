"use strict";
/**
 * Суммирование
Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

Например:
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 */

var summation = function (num) {
    // Code here

    // let sum = 0;
    // for (let i = 0; i <= num; i++) {
    //     sum += i;
    // }
    // return sum;

    return (num * (num + 1)) / 2;
};

console.log(summation(1)); // 1
console.log(summation(8)); // 36
