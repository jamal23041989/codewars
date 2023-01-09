## en

---

## ru

Вам будет дан массив целых чисел.
Ваша задача состоит в том, чтобы взять этот массив и найти индекс N,
где сумма целых чисел слева от N равна сумме целых чисел справа от N. Если такого индекса нет, верните -1.

Например:

Допустим, вам дан массив {1,2,3,4,3,2,1}:
ваша функция вернет индекс 3, потому что в 3-й позиции массива сумма левой части индекса ( {1,2,3}) и сумма правой части индекса ( {3,2,1}) равны 6.

Давайте посмотрим на другой.
Вам дан массив {1,100,50,-51,1,1}:
ваша функция вернет индекс 1, потому что в 1-й позиции массива сумма левой части индекса ( {1}) и сумма правой части индекса ( {50,-51,1,1}) равны 1.

Последний:
вам дан массив. {20,10,-80,10,10,15,35}
В индексе 0 левая сторона равна {}
Правая сторона равна {10,-80,10,10,15,35}
Они обе равны 0 при добавлении. (Пустые массивы равны 0 в этой задаче)
Индекс 0 - это место, где левая и правая части равны.

Примечание. Помните, что в большинстве языков программирования/скриптов индекс массива начинается с 0.

Вход:
Целочисленный массив длины 0 < arr < 1000. Числа в массиве могут быть любыми целыми положительными или отрицательными.

Выход:
наименьший индекс N, в котором сторона слева от N равна стороне справа от N.
Если вы не найдете индекс, соответствующий этим правилам, вы вернете -1.

Примечание.
Если вам дан массив с несколькими ответами, верните наименьший правильный индекс.