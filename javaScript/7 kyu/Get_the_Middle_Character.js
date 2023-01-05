"use strict";
/**
 * Вам дадут слово. Ваша задача — вернуть средний символ слова. 
 * Если длина слова нечетная, вернуть средний символ. 
 * Если длина слова четная, верните средние 2 символа.

#Примеры:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

#Вход
Слово (строка) длины 0 < str < 1000(в javascript вы можете получить чуть больше 1000
в некоторых тестовых примерах из-за ошибки в тестовых примерах). 
Вам не нужно тестировать для этого. Это только здесь, чтобы сказать вам, что вам не нужно беспокоиться о тайм-ауте вашего решения.

#Выход
Средний символ (символы) слова, представленного в виде строки.
 */

function getMiddle(s) {
    //Code goes here!
    // if (s.length % 2 === 1) return s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2));
    // if (s.length % 2 === 0)
    //     return s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2) + 1);

    return s.length % 2 === 1
        ? s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2))
        : s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2) + 1);
}

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"
