"use strict";
/**
 * Дан массив целых чисел.

Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 
0 не является ни положительным, ни отрицательным.

Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.

Пример
Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] вы должны вернуть [10, -65].
 */

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
    // your code here
    const arr = [];
    if (input == null || input.length < 1) return [];
    const positive = input.filter((x) => x > 0);
    const negative = input.filter((x) => x <= 0).reduce((sum, el) => sum + el, 0);
    arr.push(positive.length, negative);
    return arr;
}

console.log(countPositivesSumNegatives(testData));
console.log(countPositivesSumNegatives([0, 0]));
