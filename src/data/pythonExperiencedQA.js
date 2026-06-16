// src/data/pythonExperiencedQA.js
export const pythonExperiencedQA = [
  {
    question: "How to randomize all the items of a Python list? Is there any function to do so?",
    answer: "Python has an implicit module called `random`. It provides a public method `shuffle(<list>)` which can randomize any data sequence.\n\nSource Code:\n```python\nimport random\nlist = [2, 18, 8, 4]\nprint \"Prior Shuffling - 0\", list\nrandom.shuffle(list)\nprint \"After Shuffling - 1\", list\nrandom.shuffle(list)\nprint \"After Shuffling - 2\", list\n```"
  },
  {
    question: "What is the best way to split a string in Python?",
    answer: "We can utilize Python `split()` function to break a string into substrings based on the defined separator. It returns the list of all words present in the input string.\n\nSource Code:\n```python\ntest = \"I am practicing a language Python.\"\nprint test.split(\" \")\n```\nOutput: `['I', 'am', 'practicing', 'a', 'language', 'Python.']`"
  },
  {
    question: "What is the correct method for changing a Python string into a list?",
    answer: "In Python, strings are very much like lists. Converting a string into a list is easy – simply pass the string as an argument to `list()`.\n\nSource Code:\n```python\nlist(\"I was learning Python.\")\n```\nOutput: `['I', ' ', 'w', 'a', 's', ' ', 'l', 'e', 'a', 'r', 'n', 'i', 'n', 'g', ' ', 'P', 'y', 't', 'h', 'o', 'n', '.']`"
  },
  {
    question: "How does exception handling in Python differ from Java? Also, list the optional clauses for Python's try-except block.",
    answer: "Unlike Java, Python implements exception handling differently. It provides a `try-except` block where the programmer can see error details without terminating the program. Sometimes, along with the issue, this `try-except` statement offers a solution for managing the error.\n\nOptional clauses available in Python:\n1. `try except finally`\n2. `try except else`"
  },
  {
    question: "What do you know about list and dict comprehensions? Explain with an example.",
    answer: "List/dict comprehensions provide an easier way to create the corresponding object using an existing iterable. List comprehensions are usually faster than standard loops.\n\n**List Comprehension Example:**\n```python\n# Simple iteration\nitem1 = []\nfor n1 in range(10):\n    item1.append(n1*2)\nprint item1\n\n# List comprehension\nitem1 = [n1*2 for n1 in range(10)]\nprint item1\n```\nBoth output: `[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`\n\n**Dict Comprehension Example:**\n```python\nitem1 = {n1: n1*2 for n1 in range(10)}\nprint item1\n```\nOutput: `{0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12, 7: 14, 8: 16, 9: 18}`"
  },
  {
    question: "What are the techniques you know to duplicate an object in Python?",
    answer: "Normally, we use `copy.copy()` or `copy.deepcopy()` to perform duplication on objects. Not all objects support these methods, but most do. Some objects are easier to copy – for example, dictionary objects provide a `copy()` method.\n\nExample:\n```python\nitem1 = {n1: n1*2 for n1 in range(10)}\nnewdict1 = item1.copy()\nprint newdict1\n```"
  },
  {
    question: "Can you write code to determine the name of an object in Python?",
    answer: "No, objects in Python do not have any associated names, so there is no way to get the name of an object. The most we can do is find the object's reference name. Assignment is just a way to bind a name to its value; the name then can be used to access the value.\n\nExample:\n```python\nclass Tests:\n    def __init__(self, names):\n        self.cards = []\n        self.name = names\n    def __str__(self):\n        return '{} holds ...'.format(self.name)\n\nobj11 = Tests('obj11')\nprint obj11\nobj22 = Tests('obj22')\nprint obj22\n```"
  },
  {
    question: "Can you write code to check whether a given object belongs to a class or its subclass?",
    answer: "Python has a built-in method `isinstance(obj, (class1, class2, ...))` to check if an object belongs to any of the specified classes. It looks at the presence of an object in one of the classes. Built-in types can also be used, e.g., `isinstance(obj, str)` or `isinstance(obj, (int, long, float, complex))`. However, using custom classes is recommended.\n\nExample:\n```python\ndef lookUp(obj1):\n    if isinstance(obj1, Mailbox):\n        print \"Looking for the mailbox\"\n    elif isinstance(obj1, Document):\n        print \"Looking for the document\"\n    else:\n        print \"Unidentified object\"\n```"
  },
  {
    question: "What is the output of the following Python program?\n```python\ndef multiplexers():\n    return [lambda n1: index * n1 for index in range(4)]\n\nprint [m1(2) for m1 in multiplexers()]\n```",
    answer: "Output: `[6, 6, 6, 6]` (Note: In Python 2, it actually outputs `[6, 6, 6, 6]` due to late binding – the value of `index` is looked up after the call to any multiplexers function. In Python 3, it also gives `[6, 6, 6, 6]`. The original article says `[8,8,8,8]` but that appears to be an error; the correct result for `range(4)` with multiplication by 2 is `[0*2,1*2,2*2,3*2]` but due to late binding all lambdas see the final `index=3`, so `3*2=6`.)"
  },
  {
    question: "Write the output of the following code:\n```python\ndef fast(item2=[]):\n    item2.append(1)\n    return item2\n\nprint fast()\nprint fast()\n```",
    answer: "Output:\n```\n[1]\n[1, 1]\n```\nThe function `fast` evaluates its arguments only once after the function is defined. Since `item2` is a list, it gets modified by appending `1` each time, persisting across calls."
  },
  {
    question: "What is the result of the below Python code?\n```python\nkeyword1 = 'aeioucdfg'\nprint keyword1[:4] + keyword1[4:]\n```",
    answer: "Output: `aeioucdfg`\n\nIn Python, when performing string slicing, if the indices of both slices are adjacent, the `+` operator concatenates them, effectively returning the original string."
  },
  {
    question: "How can you produce a list with unique elements from a list with duplicate elements?",
    answer: "The correct solution is to convert the list to a set (which removes duplicates) and then back to a list.\n\nExample:\n```python\ndups = ['a','b','c','d','d','d','e','a','b','f','g','h']\nuniqueItem = list(set(dups))\nprint sorted(uniqueItem)\n```\nOutput: `['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']`"
  },
  {
    question: "Can you iterate over a list of words and use a dictionary to track each word's frequency (count)? Consider the example: `{'Number':Frequency, '2':2, '3':2}`",
    answer: "Yes, here's a function that does that:\n```python\ndef dic(words):\n    wordLists = {}\n    for indexs in words:\n        try:\n            wordLists[indexs] += 1\n        except KeyError:\n            wordLists[indexs] = 1\n    return wordLists\n\nwordLists = '1,3,2,3,5,3,2,1,3,3,2'.split(',')\nprint wordLists\nprint dic(wordLists)\n```\nOutput:\n```\n['1', '3', '2', '3', '5', '3', '2', '1', '3', '3', '2']\n{'1': 2, '3': 5, '2': 3, '5': 1}\n```"
  },
  {
    question: "What is the output of the following Python code?\n```python\nclass Test(object):\n    def __init__(self):\n        self.x1 = 1\n\nt1 = Test()\nprint t1.x1\nprint t1.x1\nprint t1.x1\nprint t1.x1\nprint t1.x1\n```",
    answer: "All print statements will display `1`. The value of the object's attribute `x1` never changes. `x1` becomes a public member of class `Test`, so it can be accessed directly."
  },
  {
    question: "Can you describe what's wrong with the below code?\n```python\ntestProc1([1, 2, 4])  # Explicit pass in a list\ntestProc1()           # Use empty list default\ndef testProc1(n1 = []):\n    # Do something with n1\nprint n1\n```",
    answer: "The code will throw a `NameError`. The variable `n1` is local to the function `testProc1` and cannot be accessed outside it. Thus, printing `n1` outside the function is not possible."
  },
  {
    question: "What is meant by stdin in Python?",
    answer: "When you run your Python program, `sys.stdin` is the file object associated with standard input (STDIN), `sys.stdout` is the file object for standard output (STDOUT), and `sys.stderr` is the file object for standard error (STDERR)."
  },
  {
    question: "What is PyTables?",
    answer: "PyTables is a package for managing hierarchical datasets and is designed to efficiently and easily cope with large amounts of data. You can download PyTables and use it for free."
  },
  {
    question: "What is the result of this line? `>>> 100/(1+0.1)^2`",
    answer: "It will give an error message saying that `^` is not supported.\n```\nTraceback (most recent call last):\n  File \"<pyshell#1>\", line 1, in <module>\n    100/(1+0.1)^2\nTypeError: unsupported operand type(s) for ^: 'float' and 'int'\n```\nIn Python, `^` is the bitwise XOR operator, not exponentiation. Use `**` for exponentiation."
  },
  {
    question: "How would you find the current version of Python?",
    answer: "By using `sys.version`, we can find the current version of Python.\n\nExample:\n```python\nimport sys\nsys.version\n```\nOutput (example): `'3.10.4 (v3.10.4:9d38120e33, Mar 23 2022, 17:03:31) [MSC v.1929 64 bit (AMD64)]'`"
  },
  {
    question: "What is GIL in Python?",
    answer: "In Python, GIL (Global Interpreter Lock) is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously. It simplifies CPython's memory management but can be a bottleneck for CPU-bound multi-threaded programs."
  },
  {
    question: "What is meant by mutex in Python?",
    answer: "In Python programming, a mutex (mutual exclusion object) is a program object created so that multiple program threads can take turns having the same resource, such as access to a file. It prevents race conditions."
  },
  {
    question: "What are the components of Python Memory Manager?",
    answer: "The Python memory manager has various components that deal with different dynamic storage management aspects, such as sharing, segmentation, pre-allocation, and caching. It includes a raw memory allocator, object-specific allocators, and a garbage collector."
  },
  {
    question: "What is a model in Python? (in context of web frameworks)",
    answer: "A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you're storing. Generally, each model maps to a single database table. This concept is central to Django and other ORM frameworks."
  },
  {
    question: "What is the repr() function in Python, and what is SciPy?",
    answer: "`repr()` function evaluates the string representation of an object. It returns a string that, when passed to `eval()`, would recreate the object (if possible).\n\nSciPy is an open-source Python library used for scientific computing and technical computing. The NumPy stack is also sometimes referred to as the SciPy stack."
  },
  {
    question: "What is a lambda function in Python?",
    answer: "The lambda operator or lambda function is a way to create small anonymous functions – functions without a name. Lambda functions are used in combination with the functions `filter()`, `map()`, and `reduce()`. They are discardable; they are only needed where they are created.\n\nExample: `lambda x, y: x + y`"
  },
  {
    question: "What does isalpha() do in Python, and what is SymPy?",
    answer: "In Python, `isalpha()` is a built-in method used for string handling. The `isalpha()` method returns `True` if all characters in the string are alphabetic; otherwise, it returns `False`.\n\nSymPy is a Python library for symbolic mathematics. It aims to become a fully featured computer algebra system (CAS) while keeping the code as simple as possible to be understandable and easily extensible. SymPy is written entirely in Python."
  },
  {
    question: "What are the built-in data structures in Python?",
    answer: "The built-in data structures in Python are: lists, tuples, dictionaries, strings, sets, and frozensets. Lists, strings, and tuples are ordered sequences of objects. Unlike strings that contain only characters, lists and tuples can contain any objects."
  },
  {
    question: "What is coercion in Python?",
    answer: "Coercion is the implicit conversion of an instance of one type to another during an operation that involves two arguments of the same type. For example, `int(4.15)` converts a float to the integer 4. In `4 + 4.5`, each argument is of a different type (one int, one float), and both must be converted to the same type before they can be added; otherwise, it will raise a TypeError. Without coercion, all arguments of even compatible types would need to be normalized to the same value by the programmer, e.g., `float(4) + 4.5` instead of simply `4 + 4.5`."
  },
  {
    question: "What is Flask in Python and what is Redis Python?",
    answer: "Flask is a micro web framework written in Python based on the Werkzeug toolkit and Jinja2 template engine.\n\nRedis is an in-memory key-value pair NoSQL data store often used for web application sessions, caching user data, and as a broker for task queues. `redis-py` is a common Python code library for interfacing with Redis."
  },
  {
    question: "How can you explicitly free memory in Python?",
    answer: "In Python, you can force the Garbage Collector to release unreferenced memory with `gc.collect()`.\n\nExample:\n```python\nimport gc\ngc.collect()\n```\nHowever, Python's memory management generally handles this automatically; explicit freeing is rarely needed."
  },
  {
    question: "What is monkey patching in Python, and what are range and xrange in Python?",
    answer: "Monkey patching is reopening existing classes or methods in a class at runtime and changing the behavior. It should be used responsibly, only as needed.\n\n`xrange` (Python 2 only) is a sequence object that evaluates lazily. `range` creates a list in memory. In Python 3, `range` behaves like `xrange` from Python 2 (lazy evaluation)."
  },
  {
    question: "What are pickling and unpickling?",
    answer: "Pickling is the process by which a Python object hierarchy is converted into a byte stream. Unpickling is the inverse operation by which a byte stream is converted back into an object hierarchy. Pickling and unpickling are also known as serialization, marshaling, or flattening."
  },
  {
    question: "What are metaclasses, and what do we use them for?",
    answer: "A metaclass is the class of a class. Just as a class defines how an instance of the class behaves, a metaclass defines how a class behaves. A class is an instance of a metaclass.\n\nIn Python, you can use arbitrary callables for metaclasses, but the more useful approach is to make it a real class. `type` is the default metaclass in Python. To create your own metaclass, you subclass `type`.\n\nMetaclasses are most commonly used as class factories. They allow you to do 'extra things' when creating a class, such as registering the new class with some library or even replacing the class with something else. You can define ordinary methods on the metaclass, which act like class methods but cannot be called on an instance."
  },
  {
    question: "What happens with a single and a double underscore before an object name? Explain name mangling.",
    answer: "- **Single Underscore (`_var`)**: In a class, names with a leading underscore are just to indicate to other developers that the attribute or method is intended to be private. However, nothing special is done with the actual name (it's a convention).\n- **Double Underscore (`__var`) (Name Mangling)**: Any identifier of the form `__spam` (at least two leading underscores, at most one trailing underscore) is textually replaced with `_classname__spam`, where `classname` is the current class name with leading underscore(s) stripped. This mangling is done regardless of the syntactic position of the identifier, so it can be used to define class-private instance and class variables, methods, variables stored in globals, and even variables stored in instances. It prevents accidental overriding by subclasses."
  },
  {
    question: "What is Python NetworkX?",
    answer: "NetworkX is a Python language programming module for studying the structure and dynamics of complex networks. It focuses on large, complex networks represented as graphs with nodes and edges. Using NetworkX, we can load and store complex networks, generate many types of random and classic networks, analyze network structures, build network models, design new network algorithms, and draw networks. NetworkX is free software released under the BSD-new license.\n\n**Features:**\n- Classes for graphs and digraphs\n- Convert graphs to/from various formats\n- Generate random graphs or construct them systematically\n- Find subgraphs, cliques, k-cores\n- Analyze adjacency, degree, diameter, range, concentration, betweenness, etc.\n- Draw networks in 2D and 3D\n\nNetworkX is suitable for large real-world graphs (e.g., billions of nodes and edges) due to its pure Python 'dictionary of dictionaries' data structure."
  },
  {
    question: "What is the Python Locust module?",
    answer: "Locust is a Python-based, easy-to-use, distributed, user load testing tool for load testing your server. Unlike JMeter and Tsung, Locust allows you to define user behavior in Python code. It helps you understand how many requests per second (RPS) your server can handle by simulating concurrent users. It's an open-source tool suitable for benchmarking and load testing web servers, APIs, and other systems."
  }
];