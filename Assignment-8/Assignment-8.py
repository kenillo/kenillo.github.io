# Part A
myList = [1,2,3,4,5,6,7,8]

myList2 =  [9,10,11,12,13,14,15,16]
myList2.append(["Money"])
myList2.remove(11)

myList3 = myList2
print(myList3) 


# Part B
# count (sub,[start,[end]])
# The count() method returns the number of elements with the specified value
cars = [1, 4, 2, 9, 7, 8, 9, 3, 1]
x = cars.count(9)
print(x)

# endswith (suffix,[start,[end]])
# The endswith() method returns True if the string ends with the specified value, otherwise False
txt = "Hello, I enjoy scary movies."
x = txt.endswith("movies.")
print(x)

# find/index (sub,[start,[end]])
# The find() method finds the first occurrence of the specified value
# The find() method returns -1 if the value is not found
# The find() method is almost the same as the index() method, the only difference is that the index() method raises an exception if the value is not found
txt = "Hello, welcome to my world."
print(txt.find("q"))
print(txt.index("q"))

# join()
# The join() method takes all items in an iterable and joins them into one string
carTypes = ("Ferrari", "Toyota", "BMW")
x = ", ".join(carTypes)
print(x)

# replace (old,new[,count])
# The replace() method replaces a specified phrase with another specified phrase.
txt = "I collect legos."
x = txt.replace("legos", "cars")
print(x)

# split ([sep[,maxsplit]])
# The split() method splits a string into a list.
txt = "I love it when it rains"
x = txt.split()
print(x)

# splitlines ([keepends])
# The splitlines() method splits a string into a list. The splitting is done at line breaks.
txt = "I love playing music\nI enjoy the hot weather"
x = txt.splitlines()
print(x)

# startswith (prefix[,start[,end]])
# The startswith() method returns True if the string starts with the specified value, otherwise False.
txt = "Hello, I like to play LEGO Batman."
x = txt.startswith("Hello")
print(x)

# strip ([chars])
# The strip() method removes any leading (spaces at the beginning) and trailing (spaces at the end) characters (space is the default leading character to remove)
txt = "oranges"
x = txt.strip()
print("Of all fruits", x, "is my favorite")


# Part C
if __name__ == '__main__':
    v_num = int(input("Enter a number: "))

    if v_num <=1:
        print("Enter a number greater than 1")

    flag_prime =  False
    for i in range(2,v_num):
        v_rem = v_num % i

        if v_rem == 0:
            flag_prime = True
            break

    if flag_prime:
        print("{} is not a prime number".format(v_num))
    else:
        print("{} is a prime number".format(v_num))
 

# Part D
# Arguments example: 10001,'John','Petter, Smith='jSmith@gmail.com',Potter="Petter@yahoo.com", JackLast="j@gmail.com"
def disStuInfo():
    students = {
                'ID 1':  {'schoolID': '10001', 'firstName': 'John', 'lastName': 'Smith', 'email': 'jSmith@gmail.com\n'},
                'ID 2':  {'schoolID': '10001', 'firstName': 'Petter', 'lastName': 'Potter', 'email': 'Petter@yahoo.com\n'},
                'ID 3':  {'schoolID': '10001', 'firstName': "'unmatched'", 'lastName': 'JackLast', 'email': 'j@gmail.com'},
              
                }

    def print_all_pairs(dict_obj):
        for key, value in dict_obj.items():
            if isinstance(value, dict):
                print_all_pairs(value)
            else:
                print(value)
                
    print_all_pairs(students)

disStuInfo()
