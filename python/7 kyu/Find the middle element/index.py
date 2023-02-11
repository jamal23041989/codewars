def gimme(input_array):
    return input_array.index(sorted(input_array)[1])


print(gimme([2, 3, 1])) # 0, 'Finds the index of middle element'
print(gimme([5, 10, 14])) # 1, 'Finds the index of middle element'