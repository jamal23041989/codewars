# 1
# def count(string):
#     d = dict()
#     if string == '':
#         return {}
#
#     for x in string:
#         if x not in d:
#             d[x] = 1
#         else:
#             d[x] += 1
#
#     return d

# 2
# from collections import Counter
#
# def count(string):
#     return Counter(string)

# 3
def count(string):
    return {i: string.count(i) for i in string}


print(count('aba'))  # {'a': 2, 'b': 1}
print(count(''))  # {}
