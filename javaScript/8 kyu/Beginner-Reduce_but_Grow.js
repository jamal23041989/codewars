"use strict";
/**
 * Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку. Пример:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

function grow(x) {
    return x.reduce((res, el) => res * el, 1);
}

console.log(grow([1, 2, 3])); // 6
console.log(grow([4, 1, 1, 1, 4])); // 16
console.log(grow([2, 2, 2, 2, 2, 2])); // 64
