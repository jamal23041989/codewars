"use strict";
/**
Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).
Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
 */

function findShort(s) {
    // const arr = s.split(" ");
    // let count = 1000;
    // for (let i = 0; i < arr.length; i++) {
    //     count > arr[i].length ? (count = arr[i].length) : count;
    // }
    // return count;

    return Math.min(...s.split(" ").map((w) => w.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // 3
console.log(findShort("Let's travel abroad shall we")); // 2
