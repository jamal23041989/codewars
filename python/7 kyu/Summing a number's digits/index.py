# 1
def sum_digits(number):
    s = 0
    n = abs(number)
    while n > 0:
        s += n % 10
        n //= 10
    return s


# 2
def sum_digits2(number):
    return sum(map(int, str(abs(number))))


print(sum_digits(10))  # 1
print(sum_digits(99))  # 18
print(sum_digits(-32))  # 5
print(sum_digits(45))  # 9
print(sum_digits(5))  # 0

