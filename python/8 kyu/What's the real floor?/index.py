def get_real_floor(n):
    if n <= 0:
        return n
    if n < 13:
        return n - 1
    if n > 13:
        return n - 2


print(get_real_floor(1))  # 0
print(get_real_floor(5))  # 4
print(get_real_floor(15))  # 13
print(get_real_floor(-242))  # 13
