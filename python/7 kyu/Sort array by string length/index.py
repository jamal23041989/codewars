def sort_by_length(arr):
    return sorted(arr, key=len)


print(sort_by_length(["Телескопы", "Очки", "Глаза", "Монокли"]))
print(sort_by_length(["i", "to", "beg", "life"])) # ["beg", "life", "i", "to"]
print(sort_by_length(["", "pizza", "brains", "moderately"])) # ["", "moderately", "brains", "pizza"]
print(sort_by_length(["short", "longer", "longest"])) # ["longer", "longest", "short"]
print(sort_by_length(["a", "of", "dog", "food"])) # ["dog", "food", "a", "of"]
print(sort_by_length(["", "bees", "eloquent", "dictionary"])) # ["", "dictionary", "eloquent", "bees"]
