"use strict";
/**
Создайте функцию, которая возвращает сумму двух наименьших положительных чисел 
для заданного массива минимум из 4 положительных целых чисел. 
Не будут переданы числа с плавающей запятой или неположительные целые числа.

Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.

[10, 343445353, 3453445, 3453545353453]должен вернуться 3453455.
 */

function sumTwoSmallestNumbers(numbers) {
    //Code here
    return numbers
        .sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((acc, el) => acc + el, 0);
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13, "Sum should be 13"
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6, "Sum should be 6"
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10, "Sum should be 10"
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24, "Sum should be 24"
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16, "Sum should be 16"
