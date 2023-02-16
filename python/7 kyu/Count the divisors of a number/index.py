def divisors(n):
    count = 1
    i = 1
    while i <= n/2:
        if n % i == 0:
            count += 1
        i += 1
    return count


print(divisors(1))  # 1
# print(divisors(4))  # 3
# print(divisors(5))  # 2
# print(divisors(12))  # 6
# print(divisors(30))  # 8
# print(divisors(4096))  # 13
