def series_sum(n):
    return '{:.2f}'.format(sum(1.0/(3 * i + 1) for i in range(n)))


print(series_sum(1)) # "1.00"
print(series_sum(2)) # "1.25"
print(series_sum(3)) # "1.39"

