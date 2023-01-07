## en

---

## ru

Подсчитайте количество дубликатов
Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр, не зависящих от регистра,
которые встречаются во входной строке более одного раза. Можно предположить,
что входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
