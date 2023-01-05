"use strict";
/**
 * Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки.
 * Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.
 */

function removeChar(str) {
    console.log(str.length);
    //You got this!
    // return str
    //     .split("")
    //     .filter((val, ind, arr) => ind !== 0 && ind !== arr.length - 1)
    //     .join("");

    return str.slice(1, -1);
}

console.log(removeChar("eloquent")); // "loquen"
console.log(removeChar("country")); // "ountr"
console.log(removeChar("person")); // "erso"
console.log(removeChar("place")); // "lac"
console.log(removeChar("ooopsss")); // "oopss"
