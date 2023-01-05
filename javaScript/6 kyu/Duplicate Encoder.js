"use strict";
/**
Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой строке соответствует тому, 
"(" если этот символ появляется только один раз в исходной строке или ")" если этот символ появляется в исходной строке более одного раза. 
Игнорировать заглавные буквы при определении, является ли символ дубликатом.

Примеры
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Заметки
Сообщения об утверждениях могут быть неясными в отношении того, что они отображают на некоторых языках. 
Если вы читаете "...It Should encode XXX", "XXX" это ожидаемый результат, а не ввод!
 */

function duplicateEncode(word) {
    // ...
    let letters = word.toLowerCase().split("");
    const obj = letters.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    return letters.map((letter) => (obj[letter] === 1 ? "(" : ")")).join("");
}

// function duplicateEncode(word) {
//     return word
//         .toLowerCase()
//         .split("")
//         .map(function (a, i, w) {
//             return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//         })
//         .join("");
// }

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())", "should ignore case"
console.log(duplicateEncode("(( @")); // "))(("
