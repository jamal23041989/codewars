"use strict";
/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 * Implement a function that determines whether a string that contains only letters is an isogram. 
 * Assume the empty string is an isogram. Ignore letter case.
 * 
 * Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
 * Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. 
 * Предположим, что пустая строка является изограммой. Игнорировать регистр букв.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */

function isIsograma(str) {
    const arr = str.toLowerCase().split("");
    return arr.length === new Set(arr).size;
}

// function isIsogram(str) {
//     return new Set(str.toUpperCase()).size == str.length;
// }

console.log(isIsograma("Dermatoglyphics"));
console.log(isIsograma("aba"));
console.log(isIsograma("moOse"));
