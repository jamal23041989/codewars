def diamond(n):
    if n < 1 or not n % 2:
        return None

    s = ''
    for i in range(n):
        st = '*' * (i*2 + 1) if i <= n/2 else '*' * ((n-i)*2 - 1)
        s += f"{' '*((n-len(st)) // 2)}{st}\n"
    return s


print(diamond(1))  # "*\n"
print(diamond(2))  # None
print(diamond(3))  # expected
print(diamond(5))  # "  *\n ***\n*****\n ***\n  *\n"
print(diamond(0))  # None
print(diamond(-3))  # None
print(diamond(15))  # None


