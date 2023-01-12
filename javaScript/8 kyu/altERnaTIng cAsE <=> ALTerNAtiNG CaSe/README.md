## en

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.

---

## ru

Определите String.prototype.toAlternatingCase (или аналогичную функцию/метод, например to_alternating_case/toAlternatingCase/ToAlternatingCase на выбранном вами языке; подробности см. в исходном решении), чтобы каждая строчная буква становилась прописной, а каждая прописная буква становилась строчной. Например:

"привет, мир".toAlternatingCase() === "ЗДРАВСТВУЙ, МИР"
"ПРИВЕТ, МИР".toAlternatingCase() === "привет, мир"
"привет, МИР".toAlternatingCase() === "ЗДРАВСТВУЙ, мир"
"Привет, мир".toAlternatingCase() === "Привет, мир"
"12345".toAlternatingCase() === "12345" // Неалфавитные символы не затрагиваются
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "STRING.PROTOTYPE.TOaALTERNATINGcASE"

Как обычно, ваша функция/метод должна быть чистой, т.е. она не должна изменять исходную строку.
