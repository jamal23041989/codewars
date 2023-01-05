"use strict";
/**
 * Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.

Массив может содержать числа или строки. Х может быть любым.

Возврат true, если массив содержит значение, false если нет.
 */

function check(a, x) {
    // your code here
    return a.includes(x);
}

console.log(check([66, 101], 66)); // true
console.log(check([101, 45, 75, 105, 99, 107], 107)); // true
console.log(check(["t", "e", "s", "t"], "e")); // true
console.log(check(["what", "a", "great", "kata"], "kat")); // false
