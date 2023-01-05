"use strict";
/**
 * Ваша задача — создать функцию, которая выполняет четыре основные математические операции.

Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
Функция должна возвращать числовой результат после применения выбранной операции.

Примеры(Оператор, значение1, значение2) --> вывод
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
 */

function basicOp(operation, value1, value2) {
    // Code

    if (operation === "+") return value1 + value2;
    if (operation === "-") return value1 - value2;
    if (operation === "*") return value1 * value2;
    if (operation === "/") return value1 / value2;
}

console.log(basicOp("+", 4, 7)); // 11
console.log(basicOp("-", 15, 18)); // -3
console.log(basicOp("*", 5, 5)); // 25
console.log(basicOp("/", 49, 7)); // 7
