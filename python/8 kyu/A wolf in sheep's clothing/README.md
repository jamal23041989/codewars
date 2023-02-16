## en

Wolves have been reintroduced to Great Britain. You are a sheep farmer,
and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten.
Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep".
Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!"
where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

## ru

Волки были вновь завезены в Великобританию. Вы овцевод,
и теперь их преследуют волки, которые притворяются овцами. К счастью, вы умеете их замечать.

Предупредите овцу перед волком, что ее вот-вот съедят.
Помните, что вы стоите в начале очереди, которая находится в конце массива:

[овца, овца, овца, овца, овца, волк, овца, овца] (ВЫ ЗДЕСЬ В НАЧАЛЕ ОЧЕРЕДИ)
   7 6 5 4 3 2 1

Если волк для вас самое близкое животное, ответьте «Пожалуйста, уходите и перестаньте есть моих овец».
В противном случае верните «Эй! Овца номер N! Вас вот-вот съест волк!»
где N — позиция овцы в очереди.

Примечание: в массиве всегда будет ровно один волк.

Примеры
Ввод: ["овца", "овца", "овца", "волк", "овца"]
Результат: "Ой! Овца номер 1! Тебя сейчас съест волк!"

Ввод: ["овца", "овца", "волк"]
Вывод: «Пожалуйста, уходите и перестаньте есть моих овец».