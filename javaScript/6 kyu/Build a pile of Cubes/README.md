## en

## ru

Ваша задача построить здание, которое будет состоять из n кубиков.
Куб внизу будет иметь объем n ^ 3, куб выше будет иметь объем (n-1) ^ 3 и так далее до вершины, которая будет иметь объем 1 ^ 3.

Вам дан общий объем m здания. Получив m, сможете ли вы найти количество n кубиков, которое вам нужно построить?

Параметром функции findNb (find_nb, find-nb, findNb, ...)будет целое число m,
и вы должны вернуть целое число n, такое как n^3 + (n-1)^3 + ... + 1^3 = m, если такое существует, или -1, если нет такого.

Примеры:
найтиNb(1071225) --> 45
найтиNb(91716553919377) --> -1