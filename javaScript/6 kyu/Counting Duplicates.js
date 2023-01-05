"use strict";
/**
Подсчитайте количество дубликатов
Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр, не зависящих от регистра, 
которые встречаются во входной строке более одного раза. Можно предположить, 
что входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
 */

function duplicateCount(text) {
    //...
    return Object.values(
        text
            .toLowerCase()
            .split("")
            .reduce((acc, el) => {
                acc[el] = (acc[el] || 0) + 1;
                return acc;
            }, {})
    ).filter((n) => n > 1).length;
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2, "should ignore case"
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2, "characters may not be adjacent"
