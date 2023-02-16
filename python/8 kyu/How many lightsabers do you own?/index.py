def how_many_light_sabers_do_you_own(name=0):
    return 18 if name == "Zach" else 0


print(how_many_light_sabers_do_you_own("Zach"))  # 18
print(how_many_light_sabers_do_you_own())  # 0
print(how_many_light_sabers_do_you_own("zach"))  # 0
