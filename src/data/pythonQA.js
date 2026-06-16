// src/data/pythonQA.js
export const pythonQA = [
    {
        question: "What is Python?",
        answer: `
Python is a high-level, interpreted programming language known for its simplicity and readability. Python was created by Guido Van Rossum and first released in 1991.

It is an object-oriented high-level language that works equally well on Windows, Linux, UNIX, and Macintosh. its built-in high-level data structures, as well as dynamic binding and typing. Python is focused on code readability and expressiveness hence it attracts many developers to use it for multiple applications including web development, data analysis, artificial intelligence, scientific computing, etc.

It requires less code to develop applications and is simple to learn.

It is used extensively for:

development of the web (server-side).
Software creation.
Mathematics.
Scripting the system.
Data Analysis and Visualization.
Machine Learning and Artificial Intelligence.
Game Development.
Web Scraping.
Desktop GUI Applications.

`
    },
    {
        question: "Why Python?",
        answer: `
Python is a high-level, interpreted programming language that is object-oriented and has dynamic semantics.
Python works with Windows, Mac, Linux, Raspberry Pi, and other platforms.
Compared to other programming languages, Python lets developers write programs with fewer lines.
Big standard library provides less dependencies to external sources, thus development is simplified.
Python has an active and supportive community which features an abundance of resources, advice and a huge ecosystem of third-party packages.
The cross-platform compatibility of this software guarantees smooth functioning on different operating systems thus making it more accessible and usable.
Python's syntax which is user-friendly, makes easy learning, making it an awesome choice for both beginners and advanced developer.
Because Python runs on an interpreter system, the code can be run right after it is written. Providing a prototype quickly is helpful.
Python can be depicted as a procedural way, an item orientated way or a utilitarian way.
For all of the major platforms, the Python interpreter and the extensive standard library are free to distribute in binary or source form.
    `
    },

    {
        question: "What kinds of applications can Python be used for?",
        answer: `
Python is utilized in several software domains, some of which are listed below.
Games for the web and the internet Development of scientific and computational applications Language development
Applications for image processing and graphic design Development of enterprise and business applications
Development of operating systems graphical user interface (GUI) based desktop applications.
Development of web applications Django, Pyramid, and Flask are the most well-known Python web frameworks.
Processing e-mail, FTP, IMAP, and other Internet protocols are supported by Python's standard library.
SciPy and NumPy, two Python modules, aid in the creation of scientific and computational applications.
Python's Tkinter library supports to make a work area based GUI applications.
    `
    },

    {
        question: " What are the advantages of Python?",
        answer: `
Advantages of Python are:

Python is Interpreted language
Interpreted: Python is an interpreted language. It does not require prior compilation of code and executes instructions directly.

It is Free and open source
Free and open source: It is an open-source project which is publicly available to reuse. It can be downloaded free of cost.

It is Extensible
Extensible: It is very flexible and extensible with any module.

It is an Object-oriented programming language
Object-oriented: Python allows to implement the Object-Oriented concepts to build application solution.

It has Built-in data structure
Built-in data structure: Tuple, List, and Dictionary are useful integrated data structures provided by the language.

Readability
Readability: Python focuses on readability and thus makes code maintenance less expensive due to its simple and clear syntax. There is then no need for developers to struggle with code, for the code is made easier to write and understand, and as such programs are developed faster and errors are eliminated in incorporating a wider spectrum of exercises and fun to its practice.

High-Level Language
Cross-platform
Cross-Platform: Python code can execute on different platforms and operating systems without change such as Windows, macOS, Linux, and Unix. This cross-platform compatibility favors the choice of Python in app development that needs to run across different operating systems.

Portable: Python programs can run on cross platforms without affecting its performance.
    `
    },

    {
        question: " What do you mean by Python literals?",
        answer: `
Literals can be defined as a data which is given in a variable or constant. Python supports the following literals:

String Literals

Text can be enclosed in either single or double quotes to create string literals. String literals, for instance, are values for strings.

Example:

# in single quotes  
single = 'tpointtech'  
# in double quotes  
double = "tpointtech"  
# multi-line String  
multi = '''''Java  
           T  
               point'''  
    
print(single)  
print(double)  
print(multi)  
Output:

tpointtech
tpointtech
Java
T
point
Numeric Literals

Python supports three types of numeric literals integer, float and complex.

Example:

# Integer literal    
a = 10    
#Float Literal    
b = 12.3     
#Complex Literal     
x = 3.14j    
print(a)  
print(b)  
print(x)  
Output:

10
12.3
3.14j
Explanation:

In this code:
The variable 'a' stores the integer literal 10.
The variable 'b' stores the float literal 12.3.
The variable 'x' is the complex literal 3.14j.
Each variable when printed returns its value. If the complex literal x is concerned this stands for a complex number with a real part of 0.0 and an imaginary part of 3.14.
Boolean Literals

Boolean literals are used to denote Boolean values. It contains either True or False.

Example:

p = (1 == True)  
q = (1 == False)  
r = True + 3  
s = False + 7  
    
print("p is", p)  
print("q is", q)  
print("r:", r)  
print("s:", s)  
Output:

p is True
q is False
r: 4
s: 7
Explanation:

In the given Python code, p is True because 1 is Boolean type equivalent to True. q is False since 1 not equal to False. r = 4 and s = 7 as True is considered as 1 and False is considered as 0 in numeric contexts.
Special literals

Python contains one unique exacting, or at least, 'None'. This exceptional strict is utilized for characterizing an invalid variable. In the event that 'None' is contrasted and whatever else other than a 'None', it will get back to false.

Example:

word = None  
print(word)  
Output:

None
    `
    },

    {
        question: " What is Python Functions?",
        answer: `
        The Python functions are named blocks of code which perform a single operation. They are defined by the \`def\` keyword, which is followed by a function name, parameters inside parentheses, and a colon Within the body of the function, the code that gets executed when the function is invoked is indented. Functions can take input arguments, carry out operations and optionally return the results by using the 'return' statement. They encourage code reusability, organization, and abstraction.

Functions fall into three categories:

Built-In Functions: duplicate(), len(), count() are the a few implicit capabilities.

User-defined Functions: User-defined functions are functions that are defined by a user.

Anonymous functions: Because they are not declared using the standard def keyword, these functions are also referred to as lambda functions.

Example: A general syntax of user defined function is given below.

def function_name(parameters list):    
   
    return a_value    `
    },

    {
        question: " What is Python's paramter passing system?",
        answer: `
In Python, there are two mechanisms for passing parameters:

Pass by references

Pass by value

By default, all arguments (parameters) are passed to the functions "by reference." In this manner, in the event that you change the worth of the boundary inside a capability, the change is reflected in the calling capability too. It shows the first factor. For instance, if a variable is passed to a function with the declaration "a = 10" and its value is changed to "a = 20," The same value is represented by both variables.

Python Interview Questions

The pass by esteem is that at whatever point we pass the contentions to the capability just qualities pass to the capability, no reference passes to the capability. It makes it unchangeable, or immutable. The original value of either variable remains the same despite being modified in the function.

Python has a default contention idea which assists with calling a technique utilizing an erratic number of contentions.
    
        `
    },

    {
        question: " In Python, how do you overload methods or constructors?",
        answer: `
In Python method and constructor overloading are supported like they are in languages like Java or C++. However, you can achieve similar functionality using various techniques like:

By Using Default Arguments.
By Using Variable Arguments.
By Using Function Arguments.
Example:

class student:    
    def __init__(self, name):    
        self.name = name    
    def __init__(self, name, email):    
        self.name = name    
        self.email = email    
         
# This line will generate an error    
#st = student("rahul")    
    
# This line will call the second constructor    
st = student("rahul", "rahul@gmail.com")    
print("Name: ", st.name)  
print("Email id: ", st.email)  
Output:

Name: rahul
Email id: [email protected]
Explanation:

The code defines a class called 'Student'.
It tries to define two __init__ methods within the class, but only the last one is taken because of Python's method overriding behavior.
The last '__init__' method takes two parameters: 'name' and 'email', assigning the instance attributes accordingly.
When a Student object is created with both name and email arguments it initializes name and email variables.
If an object is created with only the name argument, it throws an error because the class doesn't have a default constructor.
To solve this you can use default argument values or variable arguments for constructor overloading-like behavior.
    
        `
    },
    {
        question: " What is the difference between remove() function and del statement?",
        answer: `
The user can use the remove() function to delete a specific object in the list.

Example:

list_1 = [ 3, 5, 7, 3, 9, 3 ]   
print(list_1)  
list_1.remove(3)   
print("After removal: ", list_1)  
Output:

[3, 5, 7, 3, 9, 3]
After removal: [5, 7, 3, 9, 3]
Explanation:

In this example, the first occurrence of 3 within the list list_1 is taken off at the index 0. The given list is modified after removal, which is subsequently printed out. The new list does not have value 3 at the beginning.

If you want to delete an object at a specific location (index) in the list, you can either use del or pop.

Example:

list_1 = [ 3, 5, 7, 3, 9, 3 ]   
print(list_1)  
del list_1[2]  
print("After deleting: ", list_1)  
Output:

[3, 5, 7, 3, 9, 3]
After deleting: [3, 5, 3, 9, 3]
Explanation:

Here, the element at the '2nd index' (value 7) is used index[0] is deleted from list_1. After deleting the element with the index 2 value '7', the list is printed and it no longer contains the value '7'.

Note: You don't need to import any extra module to use these functions for removing an element from the list.
We cannot use these methods with a tuple because the tuple is different from the list.
    
        `
    },
    {
        question: " What is swapcase() function in Python?",
        answer: `
The "swapcase()" function in Python is a string method that creates a new string, having characters that are uppercase converted to lowercase and those that are lowercase converted to uppercase. In no other words, it switches the case of every character in the string. The original string would be unaltered.

Here's an example demonstrating the usage of 'swapcase()':

# Original string  
original_string = "Hello World"  
# Applying swapcase() function  
swapped_string = original_string.swapcase()  
# Output  
print("Original string:", original_string)  # Output: Original string: Hello World  
print("Swapped string:", swapped_string)    # Output: Swapped string: hELLO wORLD  
Output:

Original String: Hello World
Swapped String: hELLO wORLD
Explanation:

Here the example shows that "swapcase()" function changes the uppercase letters to lowercase and lowercase letters to uppercase in the given string "Hello World" which becomes swapped string of "hELLO wORLD".

To read more: Python String swapcase() Method

    
        `
    },
    {
        question: "How to remove whitespaces from a string in Python?",
        answer: `
To eliminate the whitespaces and following spaces from the string, Python provides strip([str]) worked in capability. After removing any whitespaces that may be present, this function returns a copy of the string. If not, returns the original string.

Example:

string = "  dreamztouch "  
string2 = "    dreamztouch        "  
string3 = "       dreamztouch"  
print(string)  
print(string2)  
print(string3)  
print("After stripping all have placed in a sequence:")  
print(string.strip())  
print(string2.strip())  
print(string3.strip())  
Output:

dreamztouch
dreamztouch
dreamztouch
After stripping all have placed in a sequence:
dreamztouch
dreamztouch
dreamztouch
dreamztouch:

In this example:
Strings 'string', 'string2' and \`'string3'contain spaces before and/or after.
The 'strip()' method will chop these whitespace characters at the beginning and end of the strings off.
After calling to 'strip()', the altered strings are printed, and they are all laid out in a sequence, and neither start nor end of string are surrounded by whitespace.
    
        `
    },
    {
        question: " How to remove leading whitespaces from a string in the Python?",
        answer: `
We can make use of the lstrip() function to get rid of leading characters from a string. It is a Python string function with an optional parameter of the char type. In the event that a boundary is given, it eliminates the person. Otherwise, it strips the string of all leading spaces.

Example:

string = "  dreamztouch "   
string2 = "    dreamztouch        "  
print(string)  
print(string2)  
print("After stripping all leading whitespaces:")  
print(string.lstrip())  
print(string2.lstrip())  
Output:

dreamztouch
dreamztouch
After stripping all leading whitespaces:
dreamztouch
dreamztouch
Explanation:

In this example:
Strings 'string', 'string2' and \`'string3'contain spaces before and/or after.
The 'strip()' method will chop these whitespace characters at the beginning and end of the strings off.
After calling to 'strip()', the altered strings are printed, and they are all laid out in a sequence, and neither start nor end of string are surrounded by whitespace.

Python Interview Questions
After stripping, all the whitespaces are removed, and now the string looks like the below:

Python Interview Questions
To read more: How to Remove All Leading Whitespace in String in Python
    
        `
    },
    {
        question: " Why do we use join() function in Python?",
        answer: `
The join() is defined as a string method which returns a string value. It is concatenated with the elements of an iterable. It provides a flexible way to concatenate the strings. See an example below.

Example:

str = "Mohan"  
str2 = "ac"  
# Calling function    
str2 = str.join(str2)    
# Displaying result    
print(str2)  
Output:

aMohanc
Explanation:

In this example:
The concatenation of each character of "Mohan" with each element of "ac".
The string obtained is "amohanc", the characters of "Mohan" lying in between the characters of "ac".

    
        `
    },
    {
        question: "Example of shuffle() method?",
        answer: `
The given string or array is shuffled using this technique. The items in the array become random as a result. The random module includes this method. Therefore, we must import it before calling the function. It rearranges components each time when the capability calls and creates different result.

Example:

# import the random module  
import random  
# declare a list  
sample_list1 = ['Z', 'Y', 'X', 'W', 'V', 'U']  
print("Original LIST1: ")  
print(sample_list1)  
# first shuffle   
random.shuffle(sample_list1)  
print("\nAfter the first shuffle of LIST1: ")  
print(sample_list1)  
# second shuffle  
random.shuffle(sample_list1)  
print("\nAfter the second shuffle of LIST1: ")  
print(sample_list1)  
Output:

Original LIST1:
['Z', 'Y', 'X', 'W', 'V', 'U']

After the first shuffle of LIST1:
['V', 'U', 'W', 'X', 'Y', 'Z']

After the second shuffle of LIST1:
['Z', 'Y', 'X', 'U', 'V', 'W']
Explanation:

In this example:
The associated of the 'print' procedure performed on original 'sample_list1 is 'sample_list1.
The function 'shuffle()' is used to shuffle the elements in the 'sample_list1'.
The first shuffle results are printed.
The 'shuffle()' function is used again to give a random order to the elements of the list.
The list is printed one more time after the second shuffle occurs, each time showing a different permutation of elements.
    
        `
    },

    {
        question: " What is the use of the break statement?",
        answer: `
In Python, the break statement is used to exit or terminate a loop before a loop iteration is over when a specified condition is met. When used inside of a loop (eg "for" or "while"), the "break" statement causes a loop to terminate immediately, no matter what the condition of the loop or the sequence of iterations is.

Python Interview Questions
The primary use cases for the 'break' statement include:

Early Termination: Break statement is an essential element of the programming flow which helps break the loop when a specific condition is met during the loop execution, unnecessary further iterations are avoided.
Exiting Infinite Loops: The break statement is used to exit a loop when the loop is meant to run forever until a certain condition is successful.
Example:

list_1 = ['X', 'Y', 'Z']  
list_2 = [11, 22, 33]  
for i in list_1:  
    for j in list_2:  
        print(i, j)  
        if i == 'Y' and j == 33:  
            print('BREAK')  
            break  
    else:  
        continue  
    break  
Output:

2
X 11
X 22
X 33
Y 11
Y 22
Y 33
BREAK
Explanation:

The outer loop applies to the elements of 'list_1' with 'X' as the starting value.
The internal loop run through elements of 'list_2' one after another for each value of 'i'.
Between the loops, the 'i' j combination is printed first.
When i is 'Y' and 'j' is 33, the condition if i == 'Y' and j == 33: ur satisfied.
The code outputs 'BREAK' and continues with the outer loop by using a break statement.
The break statement exits out the inner loop only and not the outer. As a result, the outer loop remains active. The else block under the inner definition is not reached due to the loop termination through break.
The outer loop continues and hits the break, thus breaking the loop instantly.
    
        `
    },
    {
        question: " What is tuple in python?",
        answer: `
A built-in type of data collection is the tuple. It permits us to store values in a grouping. Because it cannot be changed, the original data do not reflect any changes. A tuple is created with () brackets rather than [] square brackets. We are unable to remove any element, but we can locate it in the tuple. Indexing allows us to obtain elements. It likewise permits navigating components in switch request by utilizing negative ordering. There are a variety of Tuple methods, including Len(), max(), sum(), and sorted().

To create a tuple, we can declare it as below.

Example:

# Declaring tuple  
tup = (2,4,6,8)  
# Displaying value  
print(tup)  
  
# Displaying Single value  
print(tup[2])  
Output:

(2, 4, 6, 8)
6
Explanaton:

The pair 'tup' of elements is 2, 4, 6, and 8.
The tuple that consists of '(2, 4, 6, 8)' is displayed when we execute the function 'print(tup)'.
The 'tup[2]' accessed a single value from the tuple using an index that gives 6 as the result, which is the element at index 2 in the tuple value.
Python Interview Questions
It is immutable. So updating tuple will lead to an error.

Example:

# Declaring tuple  
tup = (2,4,6,8)  
# Displaying value  
print(tup)  
  
# Displaying Single value  
print(tup[2])  
  
# Updating by assigning new value  
tup[2]=22  
# Displaying Single value  
print(tup[2])  
Output:

tup[2]=22
TypeError: 'tuple' object does not support item assignment
(2, 4, 6, 8)

Python Interview Questions
Explanation:

When print(tup) and tup[2] are called, they give the tuple and value of the index (6 at index 2), then the code switches index 2 to 22 by assigning the assignment tup[2] = 22.
Yet, this example generates a 'TypeError' since of not-modifiable nature of tuples, item elements cannot be changed as soon as they are created.
    
        `
    },
    {
        question: " What is an operator in Python?",
        answer: `
An operator is a specific symbol that is applied to some values and results in an output. Operands are the work of an operator. Operands are literals or variables with numbers that have some values. Administrators can be unary, double, or ternary. A ternary operator, a binary operator, a ternary operator, and a unary operator are all examples of operators that require three or more operands, respectively.

Python Interview Questions
Example:

# Unary Operator  
A = 12  
B = -(A)  
print (B)  
# Binary Operator  
A = 12  
B = 13  
print (A + B)  
print (B * A)  
#Ternary Operator  
A = 12  
B = 13  
min = A if A < B else B  
    
print(min)  
Output:

# Unary Operator
-12
# Binary Operator
25
156
# Ternary Operator
12
Explanation:

The Unary Operator- Assigns 'A' a negative value to 'B', setting 'B' to -12.
The binary operator performs sum multiplication operations on 'A' and 'B'. 'A + B 25', 'B * A 156', however.
Ternary operator - Checks if 'A' is less than 'B'. If true, a 'min_value' value of 'A' is given; Otherwise, a 'B' value is assigned. In this case, 'min_value' is 12 because 'A' is less than 'B'.
To read more: Python Operators

22) What are the different types of operators in Python?
The Python language has operators that can be classified broadly according to their functions. These comprise:

Arithmetic Operators
Assignment Operators
Relational Operators/Comparison Operator
Logical Operators
Membership Operators
Bitwise Operators
Identity Operators
1. Arithmetic Operators: Perform mathematical operations which include addition(+), subtraction(-), multiplication(*), division(/), modulus(%).

Example:

# Adding two values  
print(12+23)  
# Subtracting two values  
print(12-23)  
# Multiplying two values  
print(12*23)  
# Dividing two values  
print(12/23)  
Output:

35
-11
276
0.5217391304347826
Explanation:

The + operator adds the values 12 and 23, resulting the value of 35.
The - operator subtracts 12 from 23, resulting the value of -11.
The * operator multiplies the 12 with 23 and we obtain 276 as a result.
The / operator divides the 12 by 2, resulting the value of 0.5217391304347826.
2. Relational Operators: are used to compare values. These operators test the conditions and then return a boolean value either True or False.

Example:

a, b = 10, 12  
print(a==b) # False  
print(a<b) # True  
print(a<=b) # True  
print(a!=b) # True  
Output:

False
True
True
True
Explanation:

a== b checks if a is same to b, which evaluates to False.
a< b checks if a is much less than b, which evaluates to True.
a <= b tests if a is much less than or identical to b, which evaluates to True.
a!= b exams if a is not equal to b, which evaluates to True.
3. Assignment Operators Assign values to variables and modify their values. These include easy project (=) as well as compound project operators like =, -=, *=, /=, and others.

Example:

# Examples of Assignment operators  
a=12  
print(a) # 12  
a += 2  
print(a) # 14  
a -= 2  
print(a) # 12  
a *=2  
print(a) # 24  
a **=2  
print(a) # 576  
Output:

12
14
12
24
576
Explanation:

a = 2 increments the fee of a with the aid of 2, resulting in a being 14.
a-= 2 decrements the cost of a by 2, resulting in a being 12.
a *= 2 multiplies the fee of a through 2, resulting in a being 24.
a**= 2 increases the value of a to the energy of two, resulting in a being 576.
4. Logical operators are used to performing logical operations like And, Or, and Not. See the example below.

Example:

# Logical operator examples  
a = True  
b = False  
print(a and b) # False  
print(a or b) # True  
print(not b) # True  
Output:

False
True
True
5. Bitwise Operators: Perform operations on binary representations of integers, manipulating individual bits. See the example below:

Example:

a = 10   # Binary: 1010  
b = 12   # Binary: 1100  
# Bitwise AND  
print(a & b)  # Output: 8 (Binary: 1000)  
# Bitwise OR  
print(a | b)  # Output: 14 (Binary: 1110)  
# Bitwise XOR  
print(a ^ b)  # Output: 6 (Binary: 0110)  
# Bitwise NOT  
print(~a)     # Output: -11 (Binary: -1011)  
Output:

8 (Binary: 1000)
14 (Binary: 1110)
6 (Binary: 0110)
Explanation:

a & b: Performs bitwise AND operations on the binary representations of a and b.
a | B: Performs bitwise OR operations on the binary representations of a and b.
a^b: is a bitwise XOR operation on the binary representations of a and b.
~a: Performs a bitwise NOT operation on a, which shifts all bits and adds 1 to the result due to the complement representation of the two, resulting in -11.
    
        `
    },
    {
        question: " How to create a Unicode string in Python?",
        answer: `
In Python 3, the old Unicode type has been replaced by "str" type, and the string is treated as Unicode of course. Using the art.title.encode("utf-8") function, we can create a Unicode string.
Example:

unicode_1 = ("\u0123", "\u2665", "\U0001f638", "\u265E", "\u265F", "\u2168")  
print (unicode_1)  
Output:

 
unicode_1: ('ģ', '♥', '?', '♞', '♟', 'Ⅸ')
    
        `
    },
    {
        question: "Is Python interpreted language?",
        answer: `
Yes, python is an interpreted language. This means the code executed line by line by the python interpreter rather than being compiled into a machine code beforehand.

Python does not require compilation before running, unlike Java and C.
    
        `
    },
    {
        question: "What are the different file processing modes supported by Python?",
        answer: `
There are four ways to open files in Python. The read-write (rw), write-only (w), append (a), and read-only (r) modes. 'r' is used to open a file in read-only mode; 'w' is used to open a file in write-only mode; 'rw' is used to open in both read-only and write-only modes; and 'a' is used to open a file in append mode. In the event that the mode isn't determined, of course the document opens in read-just mode.

Read-only (r) mode: Read a file by opening it. It's the default setting.
Only write mode (w): Open a document for composing. On the off chance that the record contains information, information would be lost. A brand-new file is also created.
Read-Write (rw) mode: In write mode, open a file for reading. It implies refreshing mode.
Addition mode (a): If the file exists, open it for writing and append it to the end.
    
        `
    },
    {
        question: "Which are the file related libraries/modules in Python?",
        answer: `
You can manipulate binary and text files on the file system with the help of Python's libraries and modules. It makes it easier to create, edit, copy, and delete files.

The libraries are os, os.path, and shutil. Here, os and os.path - modules include a function for accessing the filesystem, while shutil - module enables you to copy and delete the files.

 `
    },
    {
        question: " What are the rules for a local and global variable in Python?",
        answer: `
Global Variables:

Variables declared outside a function or in global space are called global variables.

We must explicitly declare a variable as "global" whenever a new value is given to it within the function because it is implicitly local. The global keyword must be used to declare a variable in order to make it global.

Any function can access and alter the value of global variables, which are accessible anywhere in the program.

Example:

A = "tpointtech"  
def my_function():  
  print(A)  
my_function()  
Output:

tpointtech
Explanation:

The variable 'A' is assigned the value "tpointtech".
The function 'my_function()' is defined, which prints the value of the variable 'A'.
The function 'my_function()' is called.
The value of variable A is printed in the function 'my_function()', which is "tpointtech".
So, when you run the code, it will print "tpointtech" to the console.
Local Variables:

A local variable is any variable declared within a function. The local space, not the global space, contains this variable.

In the event that a variable is relegated to another worth anyplace inside the capability's body, being a local is expected.

Only the local body can access local variables.

Example:

def my_function2():  
    K = "tpointtech Local"  
    print(K)  
my_function2()   
Output:

tpointtech Local
Explanation:

The function 'my_function2()' is defined.
A local variable 'K' is defined with value "tpointtech Local" in 'my_function2()'.
The 'K' value of the local variable is printed.
The function 'my_function2()' is called.
During the function call, the value of the local variable K is printed, which is "tpointtech Local".
To read more: Difference Between Local and Global Variables in Python


    
        `
    },
    {
        question: " What is the namespace in Python?",
        answer: `
The namespace is a fundamental concept for organizing and structuring code that is more useful in large projects. However, if you're new to programming, it might be a little hard to understand. Subsequently, we attempted to make namespaces somewhat more obvious.

A namespace is characterized as a basic framework to control the names in a program. It ensures that there will be no conflict and that each name will be unique.

Additionally, Python executes namespaces as word references and keeps up with name-to-protest planning where names go about as keys and the articles as values.
    
        `
    },
    {
        question: " What is the Python decorator?",
        answer: `
Decorators is a useful Python tool that allows programmers to add functionality to existing code. They are very powerful. Because a component of the program attempts to modify another component at compile time, this is also known as metaprogramming. It permits the client to wrap one more capability to expand the way of behaving of the wrapped capability, without forever changing it.

Example:

def function_is_called():  
    def function_is_returned():  
        print("tpointtech")  
    return function_is_returned  
new_1 = function_is_called()  
# Outputs "tpointtech"  
new_1()  
Output:

tpointtech
Functions vs. Decorators

A function is a block of code that performs a specific task whereas a decorator is a function that modifies other functions.

Explanation:

'function_is_called()', the function is defined and presented.
In bounds of 'function_is_called()', there is another function that is to be 'function_is_returned()' defined.
After the nested function 'function_is_returned()' is used, the tpointtech is displayed.
'function_is_called()' function contains the 'function_is_returned()' function that is returned.
The returned function is pass 'new_1'.
function new_1() is called which later results in calling the 'function_is_returned()' function finally displaying the message "tpointtech".
Thus, after you type 'new_1', the console prints "tpointtech".
    
        `
    },
    {
        question: "What is a generator in Python?",
        answer: `
In Python, the generator is a way that determines how to execute iterators. Except for the fact that it produces expression in the function, it is a normal function. It eliminates the __itr__ and next() methods and reduces additional overheads.

On the off chance that a capability contains essentially a yield explanation, it turns into a generator. By saving its states, the yield keyword pauses the current execution and allows it to be resumed whenever necessary.
    
        `
    },
    {
        question: " What are iterators in Python?",
        answer: `
In python, Iterators are objects that represent a flow of data and which can be used to begin a process repeatedly. They extract a way for an iteration over elements which may be contained in pairs of things, tuple, dictionary, or string in one item at a time. Iterators implement the iterator protocol, which consists of two main methods:

__iter__(): This, too, will be the iterator object and is referred to as the init method for instance when an iterator is initialized.

__next__(): This method therefore gives the other element in the collection. It terminates the code further with a StopIteration exception(when there are no more items to return or the flow is disrupted).


    
        `
    },
    {
        question: " What is slicing in Python?",
        answer: `
Slicing is a technique that can be used in Python to cut out part of a sequence (such as a list, tuple or string) using a range of indices. Slicing will provide you with the ability to compose a new sequence, consisting of the elements extracted from the original one, starting at a prescribed start index and before the suggested end index.

Example:

my_list=[1,2,3,4,5]  
# Get a slice from index 1 to index 3 (exclusive)  
print(my_list[1:3])     
# Get a slice from index 2 to the end of the list  
print(my_list[2:])      
# Get a slice from the beginning to index 3 (exclusive)  
print(my_list[:3])     
# Get a slice of every second element  
print(my_list[::2])    
Output:

2 3
3 4 5
1 2
1 3 5
Explanation:

we begin with a list named 'my_list' which holds the elements [1, 2, 3, 4, 5].
The first 'print()' statement using slicing extracts elements from index 1 to index 3, prints and returns a new list.
The second 'print()' statement slices a part of the list from the element of index 2 to the end of the list using slicing and then prints the result.
The fourth 'print()' statement that slices the beginning elements of the list up to index 3 (exclusive) and print the result is 'List[:3]'.
The last 'print()' function excludes the second value of the list and uses slicing with a step size of 2 in order to print the result.
    
        `
    },
    {
        question: " What is a dictionary in Python?",
        answer: `
A built-in data type is the Python dictionary. A one-to-one relationship between keys and values is established by this. A pair of keys and their values are contained in dictionaries. It stores components in key and worth matches. Values can be duplicated, whereas keys are unique. The dictionary elements are accessed by the key.

Keys index dictionaries.

Example:

The following example contains some keys Country Hero & Cartoon. Their corresponding values are India, Modi, and Rahul respectively.

dict = {'Country': 'India', 'Hero': 'Modi', 'Cartoon': 'Rahul'}  
print ("Country: ", dict['Country'])    
print ("Hero: ", dict['Hero'])  
print ("Cartoon: ", dict['Cartoon'])  
Output:

Country: India
Hero: Modi
Cartoon: Rahul
Explanation:

A dictionary named 'dict' is shown as a dictionary with key-value pairs.
The 'print()' function is utilized to display the values for the keys in various dictionaries.
dict['Country'] gives the value of the key 'Country' and prints it on console.
dict['Hero'] returns the value connected with the key 'Hero' and the output is printed
dict['Cartoon'] retrieves the value associated with the key 'Cartoon' and displays it.
The outlet will display the values matching the keys 'Country', 'Hero', and 'Cartoon' in the dictionary.
    
        `
    },

    {
        question: "What is Pass in Python?",
        answer: `
Pass specifies an operation-free Python statement. It is in a compound statement as a placeholder. To make a vacant class or works, the pass catchphrase assists with passing the control without error.

Example:

class Student:   
    pass # Passing class    
class Student:    
    def info():  
        pass # Passing function  
Explanation:

Two class definitions are given under the name 'Student'. The first class is null and acts as a placeholder. The second class contains an empty method named 'info()', which is defined by the keyword 'def' followed by 'pass'. Both can be extended with materials and techniques if needed.
    
        `
    },
    {
        question: " Explain docstring in Python?",
        answer: `
The first statement in a module, function, class, or method definition is the Python docstring, a string literal. It makes it easier to link the documents together.

"Attribute docstrings" are string literals that occur immediately after a straightforward assignment at the top.

"Additional docstrings" are string literals that occur immediately after another docstring.

Despite fitting on a single line, docstrings are created by Python using triple quotes.

The phrase in docstring ends with a period (.) and may include several lines. It may include special characters like spaces.

Example:

# One-line docstrings  
def hello():  
    """A function to greet."""  
    return "hello"  
Explanation:

In the provided Python's function code, a single-line docstring is defined for the function 'hello()'. Inside the docstring, a single quoted text "A function to greet." is located directly above the function definition. It presents a short description of the functionality. The docstring accessor can be obtained with '__doc__' attribute.
    
        `
    },
    {
        question: " What is pickling and unpickling in Python?",
        answer: `
A module known as the Python pickle is one that transforms any Python object into a string representation. Utilizing the dump function, it copies the Python object to a file; this cycle is called Pickling.

Unpickling is the procedure of obtaining the original Python objects from the stored string representation.
    
        `
    },
    {
        question: " Which programming language is a good choice between Java and Python?",
        answer: `
Java and Python both are object-oriented programming languages. Let's compare both on some criteria given below:

Criteria            Java            Python

Ease of use        Good             Very Good

Coding Speed       Average          Excellent

Data types         Static type      Dynamic type

Data Science and 
Machine learning 
application         Average         Very Good
    
        `
    },
    {
        question: "What is a negative index in Python and why are they used?",
        answer: `
Python's sequences are indexed and contain both positive and negative numbers. The numbers that are positive purposes '0' that is utilizes as first record and '1' as the subsequent file and the cycle go on that way.

The negative number's index begins with '-1,' which denotes the sequence's final index, and ends with '-2,' which denotes the sequence's penultimate index.

The negative index is used to get rid of any new-line spaces in a string and make it possible for the string to contain all but the last character, S[:-1]. The negative index is also used to show the correct order in which the index represents the string.


    
        `
    },
    {
        question: "  What is the usage of help() and dir() function in Python?",
        answer: `
The 'help()' and 'dir()' functions in Python are used for introspection and documentation purposes:

help(): 'help()' is the function that usually gives you access to built-in Python documentation (docstrings) for modules, classes, functions, and methods. Called without arguments it starts an interactive help session Considering an object as the argument, it displays its documentation.
dir(): The 'dir()' call returns a list of all valid attributes that can be applied to the object given. It is the way to explore the attributes and methods an object has, including the built-in attributes - '__doc__' and '__name__' - and any user-defned attributes.
Both of them functions have benefits for the usage on the exploration and comprehension of Python objects, the modules, and the libraries. In fact, they are great tools for learning and debugging
    
        `
    },
    {
        question: " How Python does Compile-time and Run-time code checking?",
        answer: `
The majority of the checking for things like type, name, and so on is done at compile time in Python. are deferred until code execution. As a result, the Python code will compile successfully if it refers to a user-defined function that does not exist. With one exception, the Python code will fail when the execution path is missing.
    
        `
    },
    {
        question: " What is the shortest method to open a text file and display its content?",
        answer: `
The shortest way to open a text file is by using "with" command in the following manner:

Example:

with open("FILE NAME", "r") as fp:  
    fileData = fp.read()    
# To print the contents of the file     
print(fileData)  

Output:

"The data of the file will be printed."

Explanation:

The code of this command will make the target file named "FILE NAME" as read mode inside a context manager.
It reads the entire file content including the header information and stores it in variable fileData.
The last task is to print the content of the file (fileData) stored in the console.

Note: You should replace the "FILE NAME" with actual name (and path name if necessary) of the file you want to read.
    
        `
    },
    {
        question: "  What are the differences between Python 2.x and Python 3.x?",
        answer: `
Python 2.x is a previous version. Python 3.x is the most recent release. Python 2.x is inheritance now. This language is both now and in the future Python 3.x.

The most noticeable contrast somewhere in the range of Python2 and Python3 is on paper explanation (capability). It looks like print "Hello" in Python 2, and it looks like print ("Hello") in Python 3.

String in Python2 is ASCII verifiably, and in Python3 it is Unicode.

The xrange() technique has eliminated from Python 3 variant. Error handling introduces a brand-new keyword.
    
        `
    },
    {
        question: " What is the usage of enumerate () function in Python?",
        answer: `
The enumerate() function is used to iterate through the sequence and retrieve the index position and its corresponding value at the same time.

Example:

list_1 = ["A","B","C"]  
s_1 = "tpointtech"   
# creating enumerate objects  
object_1 = enumerate(list_1)  
object_2 = enumerate(s_1)  
   
print ("Return type:",type(object_1))  
print (list(enumerate(list_1)))  
print (list(enumerate(s_1)))  
Output:

Return type: <class 'enumerate'>
[(0, 'A'), (1, 'B'), (2, 'C')]
[(0, 'J'), (1, 'a'), (2, 'v'), (3, 'a'), (4, 't'), (5, 'p'), (6, 'o'), (7, 'i'), (8, 'n'), (9, 't')]
Explanation:

Two sequences are defined: 'list_1' list and 's_1' string.
enumerate() function makes object_1 and object_2 for the list and the string, respectively.
The 'type()' function helps to figure out the type of the enumerate objects, which are printed into the console.
The 'list()' function is employed to convert the enumerate objects into the lists while these lists are printed in the console.
The output indicates the creation of the elements, displayed in the list and in the string by pairs, where each element is indexed.
    
        `
    },
    {
        question: " What is type conversion in Python?",
        answer: `
Type conversion refers to the conversion of one data type iinto another.

int() - converts any data type into integer type

float() - converts any data type into float type

ord() - converts characters into integer

hex() - converts integers to hexadecimal

oct() - converts integer to octal

tuple() - This function is used to convert to a tuple.

set() - This function returns the type after converting to set.

list() - This function is used to convert any data type to a list type.

dict() - This function is used to convert a tuple of order (key,value) into a dictionary.

str() - Used to convert integer into a string.

complex(real,imag) - This functionconverts real numbers to complex(real,imag) number.
    
        `
    },



    {
        question: "   Give the output of this example: A[3] if A=[1,4,6,7,9,66,4,94].",
        answer: `
Since indexing starts from zero, an element present at 3rd index is 7. So, the output is 7.
        `
    },




];