"use strict";
/**
Напишите функцию, которая разбивает строку и преобразует ее в массив слов.

Примеры (ввод ==> вывод):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

 */

function stringToArray(string) {
    // code code code
    return string.split(" ");
}

console.log(stringToArray("Robin Singh")); // ["Robin", "Singh"]
console.log(stringToArray("I love arrays they are my favorite")); //
