"use strict";
/**
Дезоксирибонуклеиновая кислота (ДНК) представляет собой химическое вещество, 
находящееся в ядре клеток и несущее «инструкции» по развитию и функционированию живых организмов.

Если вы хотите узнать больше: http://en.wikipedia.org/wiki/DNA

В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». 
Ваша функция получает одну сторону ДНК (строка, кроме Haskell); вам нужно вернуть другую дополнительную сторону. 
Нить ДНК никогда не бывает пустой или ДНК вообще не существует (опять же, кроме Haskell).

Другие подобные упражнения можно найти здесь: http://rosalind.info/problems/list-view/ (источник)

Пример: ( ввод --> вывод )
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
 */

function DNAStrand(dna) {
    //your code here

    // return dna
    //     .split("")
    //     .map((val, i, arr) => {
    //         if (val === "A") arr[i] = "T";
    //         else if (val === "T") arr[i] = "A";
    //         else if (val === "C") arr[i] = "G";
    //         else if (val === "G") arr[i] = "C";
    //         return arr[i];
    //     })
    //     .join("");

    var pairs = { A: "T", T: "A", C: "G", G: "C" };

    return dna
        .split("")
        .map(function (v) {
            return pairs[v];
        })
        .join("");
}

console.log(DNAStrand("AAAA")); // "TTTT", "String AAAA is"
console.log(DNAStrand("ATTGC")); // "TAACG", "String ATTGC is"
console.log(DNAStrand("GTAT")); // "CATA", "String GTAT is"
