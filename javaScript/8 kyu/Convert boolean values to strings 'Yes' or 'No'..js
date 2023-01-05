"use strict";
/**
Завершите метод, который принимает логическое значение и возвращает строку «Да» для значения «истина» 
или строку «Нет» для значения «ложь».
 */

function boolToWord(bool) {
    //...
    return bool === true ? "Yes" : "No";
}

console.log(boolToWord(true)); // "Yes"
console.log(boolToWord(false)); // "No"
