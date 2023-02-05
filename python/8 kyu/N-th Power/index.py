# 1
def index(array, n):
    if len(array) <= n:
        return -1
    return 1 if n == 0 else array[n]**n

# 2
def index(array, n):
    return array[n]**n if n < len(array) else -1


print(index([1, 2, 3, 4], 2)) # 9
print(index([5, 6], 0)) # 1
print(index([1, 3, 10, 100], 3)) # 1000000