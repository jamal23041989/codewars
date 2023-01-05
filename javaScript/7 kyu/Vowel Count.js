"use strict";
/**
Возвращает количество (количество) гласных в заданной строке.
Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y).
Входная строка будет состоять только из строчных букв и/или пробелов.
 */

function getCount(str) {
    const a = str.split(" ").join("");
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u") count++;
    }
    return count;
}

console.log(getCount("abracadabra")); // 5
