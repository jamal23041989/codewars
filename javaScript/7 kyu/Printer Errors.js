"use strict";
/**
На заводе принтер печатает этикетки для коробок. 
Для одного вида коробок принтер должен использовать цвета, которые для простоты названы буквами из a to m.

Цвета, используемые принтером, записываются в управляющую строку. 
Например, "хорошая" управляющая строка будет aaabbbbhaijjjm означать, 
что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a...

Иногда возникают проблемы: отсутствие цветов, технический сбой и выдается "плохая" управляющая строка, 
например, aaaxbbbbyyhwawiwjjjwwmс буквами не из a to m.

Вы должны написать функцию, printer_error которая по заданной строке будет возвращать частоту ошибок принтера в виде строки , 
представляющей рациональное число, числитель которого — количество ошибок, а знаменатель — длину контрольной строки. 
Не уменьшайте эту дробь до более простого выражения.

Строка имеет длину больше или равную единице и содержит только буквы от a до z.

Примеры:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
 */

function printerError(s) {
    // your code
    let arr2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
    let arr = s.split("");
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr2.includes(arr[i])) count++;
    }
    return `${count}/${s.length}`;
}

// const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s)); // "3/56"
s = "aaabbbbhaijjjm";
console.log(printerError(s)); //"0/14"

s = "aaaxbbbbyyhwawiwjjjwwm";
console.log(printerError(s)); //"8/22"
