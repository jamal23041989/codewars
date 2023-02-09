def paperwork(n, m):
    return 0 if n < 0 or m < 0 else n * m


print(paperwork(5, 5)) # 25 "Failed at Paperwork(5,5)")
print(paperwork(-5, 5)) # 0 "Failed at Paperwork(-5,5)")
print(paperwork(5, -5)) # 0 "Failed at Paperwork(5,-5)")
print(paperwork(-5, -5)) # 0 "Failed at Paperwork(-5,-5)")
print(paperwork(5, 0)) # 0 "Failed at Paperwork(5,0)")