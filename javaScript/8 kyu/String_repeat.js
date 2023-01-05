"use strict";
/**
 * Напишите функцию, которая принимает целое число n и строку s в качестве параметров и возвращает строку,
 *  s повторяющуюся ровно столько n раз.

Примеры (ввод -> вывод)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
 */

function repeatStr(n, s) {
    // let str = "";
    // for (let i = 0; i < n; i++) {
    //     str += s;
    // }
    // return str;
    return s.repeat(n);
}

console.log(repeatStr(3, "*")); // "***"
console.log(repeatStr(5, "#")); // "#####"
console.log(repeatStr(2, "ha ")); // "ha ha "
