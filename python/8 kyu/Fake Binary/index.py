def fake_bin(x):
    return ''.join('0' if c < '5' else '1' for c in x)

print(fake_bin("509321967506747"))
