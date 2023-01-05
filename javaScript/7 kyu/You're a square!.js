"use strict";
/**
Квадрат из квадратов
Вам нравятся строительные блоки. Вам особенно нравятся квадратные строительные блоки. 
А что вам еще больше нравится, так это собирать их в квадрат из квадратных строительных блоков!

Однако иногда вы не можете расположить их в квадрат. Вместо этого у вас получится обычный прямоугольник! 
Эти проклятые вещи! Если бы у вас был способ узнать, не зря ли вы сейчас работаете… Подождите! Вот и все! 
Вам просто нужно проверить, является ли количество строительных блоков идеальным квадратом .

Задача
Учитывая целое число, определите, является ли оно квадратным числом :

В математике квадратное число или идеальный квадрат — это целое число, являющееся квадратом целого числа; 
другими словами, это произведение некоторого целого числа на самого себя.

В тестах всегда будет использоваться некоторое целое число, так что не беспокойтесь об этом в языках с динамической типизацией.

Примеры
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
 */

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0 ? true : false;
};

console.log(isSquare(-1)); // false, "-1: Negative numbers cannot be square numbers"
console.log(isSquare(0)); // true, "0 is a square number (0 * 0)"
console.log(isSquare(3)); // false, "3 is not a square number"
console.log(isSquare(4)); // true, "4 is a square number (2 * 2)"
console.log(isSquare(25)); // true, "25 is a square number (5 * 5)"
console.log(isSquare(26)); // false, "26 is not a square number"
