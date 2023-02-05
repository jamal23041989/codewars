def people_with_age_drink(age):
    if age > 20: return 'drink whisky'
    if age > 17: return 'drink beer'
    if age > 13: return 'drink coke'
    return 'drink toddy'


print(people_with_age_drink(17)) # 'drink coke'
print(people_with_age_drink(15)) # 'drink coke'
print(people_with_age_drink(14)) # 'drink coke'
print(people_with_age_drink(20)) # 'drink beer'
print(people_with_age_drink(18)) # 'drink beer'
print(people_with_age_drink(22)) # 'drink whisky'
print(people_with_age_drink(21)) # 'drink whisky'