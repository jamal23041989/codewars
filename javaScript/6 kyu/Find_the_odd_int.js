"use strict";
/**
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//ru

Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.
Всегда будет только одно целое число, которое встречается нечетное количество раз.

Примеры
[7] должен вернуть 7, потому что это происходит 1 раз (что нечетно).
[0] должен возвращать 0, потому что это происходит 1 раз (что нечетно).
[1,1,2] должен вернуть 2, потому что он встречается 1 раз (что нечетно).
[0,1,0,1,0] должен вернуть 0, потому что он встречается 3 раза (что нечетно).
[1,2,2,3,3,3,4,3,3,3,2,2,1] должен вернуть 4, потому что он появляется 1 раз (что нечетно).
 */

function findOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        const count = arr.filter((value) => value === arr[i]).length;
        if (count % 2 == 1) {
            return arr[i];
        }
    }
    return -1;
}

findOdd([7]);
findOdd([0]);
findOdd([1, 1, 2]);
findOdd([0, 1, 0, 1, 0]);
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
console.log(findOdd([7]));
