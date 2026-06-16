// src/data/pythonCodingQA.js
export const pythonCodingQA = [
  {
    question: "What is the best way to debug a Python program?",
    answer: "Use the command: `python -m pdb python-script.py` to debug a Python program using the built-in pdb debugger."
  },
  {
    question: "What does the `yield` keyword imply?",
    answer: "`yield` converts a Python function into a generator. It returns a generator object and can be used multiple times in a function. Example: `def creating_gen(index): months = ['jan','feb',...]; yield months[index]; yield months[index+2]`"
  },
  {
    question: "How can I make a tuple out of a list?",
    answer: "Use the `tuple()` method: `converting_list = tuple(month)`. This converts a list into an immutable tuple."
  },
  {
    question: "What exactly is a NumPy array?",
    answer: "NumPy arrays are more versatile than Python lists. Reading and writing objects is quicker and more efficient using NumPy arrays."
  },
  {
    question: "In Python, in what ways can you make an empty NumPy array?",
    answer: "Method 1: `numpy.array([])`. Method 2: `numpy.empty(shape=(3,3))` creates an array with uninitialized values."
  },
  {
    question: "In Python, what is a negative index?",
    answer: "Negative indexing reads items from the end of an array or list. For example, `a[-1]` returns the last element, `a[-3]` returns the third-to-last element."
  },
  {
    question: "Tell the output of the code: `a = [4,6,8,3,1,7]; print(a[-3]); print(a[-5]); print(a[-1])`",
    answer: "Output: 3, 6, 7. Negative indexing retrieves elements from the end: -3 gives third-to-last (3), -5 gives fifth-to-last (6), -1 gives last (7)."
  },
  {
    question: "What is the Python data type SET, and how can I use it?",
    answer: "A set is a collection of distinct and immutable items with no particular order. It's been part of Python since version 2.4."
  },
  {
    question: "In Python, how do you create random numbers?",
    answer: "Use `random()` (float 0 to 1), `uniform(X, Y)` (float between X and Y), or `randint(X, Y)` (random integer between X and Y)."
  },
  {
    question: "How do you print the summation of all the numbers from 1 to 101?",
    answer: "`print(sum(range(1, 102)))` → Output: 5151."
  },
  {
    question: "In a function, how do you create a global variable?",
    answer: "Use the `global` keyword inside the function: `global global_var` then assign a value. This allows modification of global variable from within function."
  },
  {
    question: "Is it possible to construct a Python program that calculates the mean of numbers in a list?",
    answer: "Yes: `average = sum(l) / n` where `l` is the list and `n` is the count. Example provided in the original content."
  },
  {
    question: "Is it possible to build a Python program that reverses a number?",
    answer: "Yes. Use a while loop: `while n>0: digit = n%10; reverse = reverse*10+digit; n = n//10`."
  },
  {
    question: "In Python, what is the distinction between a list and a tuple?",
    answer: "Lists are mutable (editable) and slower. Tuples are immutable (cannot be changed) and more efficient. List syntax: `[100, 'Itika', 200]`. Tuple syntax: `(100, 'Itika', 200)`."
  },
  {
    question: "Is Python a programming language or scripting language?",
    answer: "Python is a programming language frequently used for scripting due to its simplicity. It is versatile for small scripts to large-scale development."
  },
  {
    question: "Python is an interpreted programming language. Explain.",
    answer: "Python code is executed line by line by the interpreter without a separate compilation step, offering flexibility, ease of development, and portability."
  },
  {
    question: "What is the meaning of PEP 8?",
    answer: "PEP 8 is a style guide for Python code outlining best practices for indentation, naming conventions, whitespace, etc., to improve code consistency and readability."
  },
  {
    question: "What are the advantages of Python?",
    answer: "Easy to learn and use, interpreted, dynamically typed, free and open-source, extensive library support (pip), portable, simple data structures, requires less coding."
  },
  {
    question: "In Python, what are decorators?",
    answer: "Decorators add layout patterns to a method without affecting its structure. They are identified with the `@` symbol placed before the function definition."
  },
  {
    question: "How is a Python Dictionary different from List comprehensions?",
    answer: "List comprehensions create lists: `[i for i in range(4)]`. Dictionary comprehensions create dictionaries: `{i: i+2 for i in range(10)}`."
  },
  {
    question: "What is the most prevalent Python built-in data types?",
    answer: "Numbers (int, float, complex), List, Tuple, String, Set, Dictionary, Boolean (True/False)."
  },
  {
    question: "What's the distinction between .py and .pyc files?",
    answer: ".py files contain source code. .pyc files contain bytecode generated from imported .py files, reducing processing time."
  },
  {
    question: "How is a local variable different from a global variable?",
    answer: "Global variables declared outside functions, accessible anywhere. Local variables declared inside functions, only accessible within that function."
  },
  {
    question: "What is the distinction between Python Arrays and Python Lists?",
    answer: "Arrays can only have one data type per array (homogeneous). Lists can contain mixed data types (heterogeneous)."
  },
  {
    question: "What exactly is `__init__`?",
    answer: "`__init__` is a constructor method in Python classes. It is automatically called when a new object is created to initialize the instance."
  },
  {
    question: "What is a lambda function, and how does it work?",
    answer: "A lambda function is an anonymous function that can take any number of parameters but only one expression. Example: `sum_ = lambda x, y, z: x + y + z`."
  },
  {
    question: "In Python, what is `self`?",
    answer: "`self` represents the class instance. It is explicitly provided as the first argument in Python methods to differentiate between class attributes and local variables."
  },
  {
    question: "How do these commands work: break, pass, and continue?",
    answer: "`break` terminates the loop. `pass` is a null operation (syntactic placeholder). `continue` skips the rest of the current iteration and moves to the next."
  },
  {
    question: "In Python, how would you randomise the elements of a list while it's running?",
    answer: "Use `random.shuffle(list_)` from the random module. Example: `random.shuffle(list_)` randomly reorders the list in place."
  },
  {
    question: "What is the difference between pickling and unpickling?",
    answer: "Pickling converts a Python object to a string representation and dumps it to a file. Unpickling recovers the original Python object from the saved string."
  },
  {
    question: "What method will you use to turn the string's all characters into lowercase letters?",
    answer: "Use the `lower()` method: `string.lower()`."
  },
  {
    question: "How do you comment on multiple lines at once in Python?",
    answer: "Use `#` at the beginning of each line, or use triple quotes `'''` or `\"\"\"` for multi-line comments (though these are technically docstrings)."
  },
  {
    question: "In Python, what are docstrings?",
    answer: "Documentation strings enclosed in triple quotation marks. They are not assigned to variables and can serve as multi-line comments or documentation."
  },
  {
    question: "Explain the split(), sub(), and subn() methods of the Python 're' module.",
    answer: "`split()` splits a string into a list using a regex pattern. `sub()` replaces substrings matching a pattern. `subn()` does the same but also returns the number of replacements."
  },
  {
    question: "What is the best way to add items to a Python array?",
    answer: "Use `append()` (adds one element at end), `extend()` (adds multiple elements), or `insert(i, x)` (inserts at index i)."
  },
  {
    question: "What is the best way to remove values from a Python array?",
    answer: "Use `pop()` (removes and returns element, default last), `pop(index)` (removes and returns at index), or `remove(value)` (removes first occurrence)."
  },
  {
    question: "In Python, what is monkey patching?",
    answer: "Monkey patching refers to dynamically altering a module at runtime, e.g., replacing a class method with a custom function."
  },
  {
    question: "In Python, how do you make an empty class?",
    answer: "Use the `pass` keyword: `class my_class: pass`. Then you can dynamically add attributes to instances."
  },
  {
    question: "Write a Python script to implement the Bubble sort algorithm.",
    answer: "`def bubble_Sort(array): n = len(array); for i in range(n-1): for j in range(0, n-i-1): if array[j] > array[j+1]: array[j], array[j+1] = array[j+1], array[j]`"
  },
  {
    question: "In Python, create a program that generates a Fibonacci sequence.",
    answer: "Initialize first=0, second=1, then loop to compute next = previous two sum, append to series."
  },
  {
    question: "Make a Python script that checks if a given number is prime.",
    answer: "Loop from 2 to n-1; if n % i == 0, it's composite; else prime. Handle special cases n=2 (prime) and n=1 (not prime)."
  },
  {
    question: "Create a Python program that checks if a given sequence is a Palindrome.",
    answer: "Reverse the string using slicing: `reverse = sequence[::-1]`. Compare with original; if equal, it's a palindrome."
  },
  {
    question: "In a NumPy array, how do I extract the indices of N maximum values?",
    answer: "Use `array.argsort()[-N:][::-1]`. Example: `array.argsort()[-2:][::-1]` returns indices of two largest values in descending order."
  },
  {
    question: "Using Python/NumPy, write code to compute percentiles.",
    answer: "`numpy.percentile(array, percentile_value)`. Example: `numpy.percentile(array, 45)` returns the 45th percentile."
  },
  {
    question: "Write a Python program to determine whether a number is binary.",
    answer: "Iterate through digits: if any digit not 0 or 1, it's not binary. Use `while num>0: digit = num%10; if digit not in (0,1): print('not binary'); break`."
  },
  {
    question: "Using the Iterative technique, calculate factorial in Python.",
    answer: "Initialize fact=1; loop `for i in range(1, num+1): fact *= i`. Then print fact."
  },
  {
    question: "Compute the LCM of two given numbers using Python code.",
    answer: "Find greater number, then loop while True: if greater % num1 == 0 and greater % num2 == 0, LCM = greater, break; else greater++."
  },
  {
    question: "Write a Python program that removes vowels from a string.",
    answer: "Iterate through string, if character not in 'aeiouAEIOU', append to result. Example provided in original content."
  },
  {
    question: "Write a Python code to reverse a given list.",
    answer: "Use slicing: `reversed_list = original_list[::-1]` or loop in reverse: `for i in range(len(array)-1, -1, -1): print(array[i])`."
  }
];