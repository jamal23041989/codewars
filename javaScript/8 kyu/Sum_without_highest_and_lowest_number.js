"use strict";
/**
 * Задача

Суммируйте все числа заданного массива (cq. list), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!).

Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре, 
даже если их несколько с одинаковым значением.

Помните о проверке ввода.

Пример
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Проверка ввода
Если вместо массива задано пустое значение ( null, None, Nothing и т.д.), 
или данный массив является пустым списком или списком, состоящим только из 1 элементов, вернуть 0.
 */

// function sumArray(array) {
//     if (array == null || array === [] || array.length <= 2) return 0;
//     const maxValue = array.reduce((sum, el) => (el > sum ? (sum = el) : sum));
//     const minValue = array.reduce((sum, el) => (el < sum ? (sum = el) : sum));

//     let maxCount = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === maxValue && maxCount < 1) {
//             array.splice(i, 1);
//             maxCount++;
//         }
//     }

//     let minCount = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === minValue && minCount < 1) {
//             array.splice(i, 1);
//             minCount++;
//         }
//     }

//     return array.reduce((sum, el) => sum + el);
// }

function sumArray(arr) {
    arr
        ? arr
              .sort((x, y) => x - y)
              .slice(1, -1)
              .reduce((s, e) => s + e, 0)
        : 0;
}

console.log(sumArray(null)); // 0
console.log(sumArray([])); // 0
console.log(sumArray([3])); // 0
console.log(sumArray([3, 5])); // 0
console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([0, 1, 6, 10, 10])); // 17
console.log(sumArray([-6, -20, -1, -10, -12])); // -28
console.log(sumArray([-6, 20, -1, 10, -12])); // 3
