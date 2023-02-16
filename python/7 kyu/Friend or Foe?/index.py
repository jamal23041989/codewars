def friend(x):
    return [f for f in x if len(f) == 4]


print(friend(["Ryan", "Kieran", "Mark", ]))  # ["Ryan", "Mark"]
print(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))  # ["Ryan"]
print(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))  #["Jimm", "Cari", "aret"]