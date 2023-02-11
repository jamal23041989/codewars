def remove_url_anchor(url):
    return url.split("#")[0]

print(remove_url_anchor("www.codewars.com#about"))# "www.codewars.com"
print(remove_url_anchor("www.codewars.com/katas/?page=1#about"))# "www.codewars.com/katas/?page=1"
print(remove_url_anchor("www.codewars.com/katas/"))# "www.codewars.com/katas/"
