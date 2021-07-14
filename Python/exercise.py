import os
os.system('clear')
my_english_dict = {}

# add_to_dict


def add_to_dict(dictionary={}, word="", definition=""):
    if type(dictionary) is not dict:
        What_is_dictionary = type(dictionary)
        print(f"You need to send a dictionary. You sent: {What_is_dictionary}")
    elif word == "" or definition == "":
        print("You need to send a word and a definition.")
    elif word in dictionary:
        print(f"{word} is already on the dictionary. Won't add.")
    else:
        dictionary[word] = definition
        print(f"{word} has been added.")


add_to_dict("hello", "kimchi")
add_to_dict(my_english_dict, "kimchi")
add_to_dict(my_english_dict, "kimchi", "The source of life.")
add_to_dict(my_english_dict, "kimchi", "My fav. food")

# get_from_dict


def get_from_dict(dictionary={}, word=""):
    if type(dictionary) is not dict:
        What_is_dictionary = type(dictionary)
        print(f"You need to send a dictionary. You sent: {What_is_dictionary}")
    elif word == "":
        print("You need to send a word to search for.")
    elif word not in dictionary:
        print(f"{word} was not found in this dict.")
    else:
        print(f"{word}: {my_english_dict[word]}")


get_from_dict("hello", "kimchi")
get_from_dict(my_english_dict)
get_from_dict(my_english_dict, "galbi")
get_from_dict(my_english_dict, "kimchi")

# update_word


def update_word(dictionary={}, word="", new_definition=""):
    if type(dictionary) is not dict:
        What_is_dictionary = type(dictionary)
        print(f"You need to send a dictionary. You sent: {What_is_dictionary}")
    elif word == "" or new_definition == "":
        print("You need to send a word and a definition to update.")
    elif word not in dictionary:
        print(f"{word} is not on the dict. Can't update non-existing word.")
    else:
        dictionary[word] = new_definition
        print(f"{word} has been updated to: {new_definition}")


update_word("hello", "kimchi")
update_word(my_english_dict, "kimchi")
update_word(my_english_dict, "galbi", "Love it.")
update_word(my_english_dict, "kimchi", "Food from the gods.")
get_from_dict(my_english_dict, "kimchi")

# delete_from_dict


def delete_from_dict(dictionary={}, word=""):
    if type(dictionary) is not dict:
        What_is_dictionary = type(dictionary)
        print(f"You need to send a dictionary. You sent: {What_is_dictionary}")
    elif word == "":
        print("You need to speicify a word to delete.")
    elif word not in dictionary:
        print(f"{word} is not in this dict. Won't delete.")
    else:
        del dictionary[word]
        print(f"{word} has been deleted.")


delete_from_dict("hello", "kimchi")
delete_from_dict(my_english_dict)
delete_from_dict(my_english_dict, "galbi")
delete_from_dict(my_english_dict, "kimchi")
get_from_dict(my_english_dict, "kimchi")


import requests

print("Welcome to IsItDown.py!")
print("Please write a URL or URLs you want to check. (separated by comma)")
a = []
b = input().lower()
c = b.split(",")
d = "http://"
e = "https://"
f = []
for element in c:
  a.append(element.strip())
for element in a:
  if d in element or e in element:
    f.append(element)
  else:
    f.append(d+element)
print(f)
for element in f:
  r = requests.get(element)
  r.raise_for_status()


for element in f:
  r = requests.get(element)
  if r.status_code == 200:
    print(element, " is up!")
  elif r.status_code == 404:
    print(element, " is down!")
  else:
    print("Please write a valid address!")

