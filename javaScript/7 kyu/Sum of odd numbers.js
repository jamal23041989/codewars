"use strict";
/**
Дан треугольник последовательных нечетных чисел:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Вычислите сумму чисел в n -й строке этого треугольника (начиная с индекса 1), например: ( Ввод --> Вывод )

1 -->  1
2 --> 3 + 5 = 8
 */

function rowSumOddNumbers(n) {
    // TODO
    return Math.pow(n, 3);
}

console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(42)); // 74088
