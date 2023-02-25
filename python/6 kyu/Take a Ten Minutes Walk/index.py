def is_valid_walk(walk):
    return len(walk) == 10 and walk.count('n') == walk.count('s') and walk.count('e') == walk.count('w')


print(is_valid_walk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))  # True, 'should return True'
print(is_valid_walk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))  # False, 'should return False'
print(is_valid_walk(['w']))  # False, 'should return False')
print(is_valid_walk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))  # False, 'should return False'
