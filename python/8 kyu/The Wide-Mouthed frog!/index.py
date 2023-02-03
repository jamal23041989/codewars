def mouth_size(animal): 
    return "small" if animal.lower() == "alligator" else "wide"


print(mouth_size("toucan")) #"wide"
print(mouth_size("ant bear")) #"wide"
print(mouth_size("alligator")) #"small"