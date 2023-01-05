"use strict";
/**
 * Добро пожаловать.

В этой ката вы должны, учитывая строку, заменить каждую букву ее позицией в алфавите.

Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.

"a" = 1, "b" = 2, и т.д.

Пример
alphabetPosition("The sunset sets at twelve o' clock.")
Должен возвращаться "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(в виде строки)
 */

function alphabetPosition(text) {
    // return text;
    const arr = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const arr2 = text.toLowerCase().split(" ").join("").split("");
    const arr3 = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr2[i]) {
                arr3.push(arr.indexOf(arr[j]) + 1);
            }
        }
    }

    return arr3.join(" ");

    // function alphabetPosition(text) {
    //     return text
    //         .toUpperCase()
    //         .match(/[a-z]/gi)
    //         .map((c) => c.charCodeAt() - 64)
    //         .join(" ");
    // }
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
