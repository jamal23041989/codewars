# 1
def check_exam(arr1, arr2):
    res = 0
    for i in range(len(arr1)):
        if arr1[i] == arr2[i]:
            res += 4
        elif arr2[i] == "":
            continue
        elif arr1[i] != arr2[i]:
            res -= 1
    return res if res > 0 else 0


# 2
def check_exam_1(arr1, arr2):
    return max(0, sum(4 if a == b else -1 for a, b in zip(arr1, arr2) if b))


print(check_exam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) # 6
print(check_exam(["a", "a", "c", "b"], ["a", "a", "b", ""])) # 7
print(check_exam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) # 16
print(check_exam(["b", "c", "b", "a"], ["", "a", "a", "c"])) # 0