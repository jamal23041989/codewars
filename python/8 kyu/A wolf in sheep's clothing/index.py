def warn_the_sheep(queue):
    if queue[::-1].index('wolf') != 0:
        return f"Oi! Sheep number {queue[::-1].index('wolf')}! You are about to be eaten by a wolf!"
    else:
        return "Pls go away and stop eating my sheep"


print(warn_the_sheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']))  # 'Oi! Sheep number 2! You are about to be eaten by a wolf!'
print(warn_the_sheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']))  # 'Oi! Sheep number 5! You are about to be eaten by a wolf!'
print(warn_the_sheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']))  # 'Oi! Sheep number 6! You are about to be eaten by a wolf!'
print(warn_the_sheep(['sheep', 'wolf', 'sheep']))  # 'Oi! Sheep number 1! You are about to be eaten by a wolf!'
print(warn_the_sheep(['sheep', 'sheep', 'wolf']))  # 'Pls go away and stop eating my sheep'
