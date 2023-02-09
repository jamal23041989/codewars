def enough(cap, on, wait):
    return 0 if cap >= on + wait else (on + wait) - cap


print(enough(10, 5, 5)) # 0
print(enough(100, 60, 50)) # 10
print(enough(20, 5, 5)) # 0
print(enough(89, 47, 63)) # 21
