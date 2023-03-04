def is_pangram(s):
    lst = list()
    for x in s.lower():
        if x.isalpha():
            if x not in lst:
                lst.append(x)
    return len(lst) == 26



print(is_pangram("The quick, brown fox jumps over the lazy dog!"))  # True
print(is_pangram("1bcdefghijklmnopqrstuvwxyz"))  # False
