"use strict";
/**
Разбить предложение
Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. 
Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны добавлять пробелы между каждым словом. 
Будьте внимательны, не должно быть пробела ни в начале, ни в конце предложения!

Пример
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

 */

function smash(words) {
    return words.join(" ");
}

console.log(smash([])); // ""
console.log(smash(["hello"])); // "hello"
console.log(smash(["hello", "world"])); // "hello world"
console.log(smash(["hello", "amazing", "world"])); // "hello amazing world"
console.log(smash(["this", "is", "a", "really", "long", "sentence"])); // "this is a really long sentence"
