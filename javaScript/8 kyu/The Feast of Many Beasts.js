"use strict";
/**
У всех животных праздник! Каждое животное приносит одно блюдо. 
Есть только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного. 
Например, большая голубая цапля приносит чесночный наан, а синица приносит шоколадный торт.

Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, 
чтобы указать, разрешено ли животному принести блюдо на пир.

Предположим, что beast и dish всегда строчные строки, и каждая из них состоит как минимум из двух букв. 
beast и dish может содержать дефисы и пробелы, но они не будут отображаться в начале или конце строки. Они не будут содержать цифр.
 */

function feast(beast, dish) {
    //your function here
    // const beasts = beast.split(" ").join("");
    // const dishs = dish.split(" ").join("");
    // return dishs[0] === beasts[0] && dishs[dishs.length - 1] === beasts[beasts.length - 1]
    //     ? true
    //     : false;

    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

console.log(feast("great blue heron", "garlic naan")); // true
console.log(feast("chickadee", "chocolate cake")); // true
console.log(feast("brown bear", "bear claw")); // false
