"use strict";
/**
 *Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.


Даны два массива строк a1 и a2, которые возвращают отсортированный массив r в лексикографическом порядке строк a1, 
которые являются подстроками строк a2.

Заметки:
Массивы записываются в «общей» нотации. См. «Ваши тестовые примеры» для примеров на вашем языке.
В Shell bash a1 и a2 являются строками. Возврат представляет собой строку, в которой слова разделены запятыми.
Осторожно: r не должно быть дубликатов.
 */

// Example 1:
const arr1 = ["arp", "strong", "live"];
const arr2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// returns ["arp", "live", "strong"]

// Example 2:
const arr3 = ["tarp", "mice", "bull"];
const arr4 = ["lively", "alive", "harp", "sharp", "armstrong"];
// returns []

function inArray(array1, array2) {
    return array1.filter((x) => array2.some((y) => y.includes(x))).sort();
}

console.log(inArray(arr1, arr2));
console.log(inArray(arr3, arr4));
