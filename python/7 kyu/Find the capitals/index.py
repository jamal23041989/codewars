def capitals(word):
    lst = list()
    for i in range(len(word)):
        if word[i].isupper():
            lst.append(i)
    return lst


# 2
def capitals2(word):
    return [i for (i, c) in enumerate(word) if c.isupper()]


print(capitals('CodEWaRs'))  # [0, 3, 4, 6]