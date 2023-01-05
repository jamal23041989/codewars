"use strict";
/**
 * Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность 
 * и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом 
 * и с сохранением исходного порядка элементов.

Например:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array

    // let arr = [];
    // for (let i = 0; i < iterable.length; i++) {
    //     if (iterable[i] != iterable[i + 1]) {
    //         arr.push(iterable[i]);
    //     }
    // }

    // return arr;

    return [...iterable].filter((val, i) => val !== iterable[i - 1]);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B"]
