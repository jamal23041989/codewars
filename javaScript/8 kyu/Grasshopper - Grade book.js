"use strict";
/**
Зачетная книжка
Завершите функцию, чтобы она нашла среднее значение трех переданных ей баллов и вернула буквенное значение, связанное с этой оценкой.

Числовая оценка	Письмо Оценка
90 <= оценка <= 100	«А»
80 <= оценка < 90	'Б'
70 <= оценка < 80	'С'
60 <= оценка < 70	'Д'
0 <= оценка < 60	'Ф'

Все проверенные значения находятся в диапазоне от 0 до 100. 
Нет необходимости проверять наличие отрицательных значений или значений, превышающих 100.
 */

function getGrade(s1, s2, s3) {
    // Code here
    let res = (s1 + s2 + s3) / 3;
    if (res >= 90 && res <= 100) return "A";
    if (res >= 80 && res < 90) return "B";
    if (res >= 70 && res < 80) return "C";
    if (res >= 60 && res < 70) return "D";
    if (res >= 0 && res < 60) return "F";
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(100, 85, 96)); // "A"
console.log(getGrade(92, 93, 94)); // "A"

console.log(getGrade(70, 70, 100)); // "B"
console.log(getGrade(82, 85, 87)); // "B"
console.log(getGrade(84, 79, 85)); // "B"
console.log(getGrade(89, 89, 90)); // "B"

console.log(getGrade(70, 70, 70)); // "C"
console.log(getGrade(75, 70, 79)); // "C"
console.log(getGrade(60, 82, 76)); // "C"

console.log(getGrade(65, 70, 59)); // "D"
console.log(getGrade(66, 62, 68)); // "D"
console.log(getGrade(58, 62, 70)); // "D"

console.log(getGrade(44, 55, 52)); // "F"
console.log(getGrade(48, 55, 52)); // "F"
console.log(getGrade(58, 59, 60)); // "F"
