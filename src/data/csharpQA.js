// src/data/csharpQA.js
export const csharpQA = [
  {
    question: "What is C#?",
    answer: `C# is a simple, modern, general-purpose programming language. It is an object-oriented programming language developed by Microsoft. It is a safe and managed language that is compiled by the .NET framework to generate Microsoft intermediate language (machine code).`
  },
  {
    question: "What is the reason behind the invention of C#?",
    answer: `C# is designed for Common Language Infrastructure (CLI). It contains the executable code and runtime environment that makes the users able to use various high-level languages on different computer platforms and architectures.`
  },
  {
    question: "What are the main reasons to use C# language?",
    answer: `These are the top reasons to use C# language:\n\n- Easy to learn\n- General purpose and object-oriented programming language\n- Component oriented\n- Structured language\n- It can be compiled on a variety of computer platforms\n- Produces efficient programs\n- Part of the .net framework`
  },
  {
    question: "What is the difference between public, static and void?",
    answer: `You can access public declared variables anywhere in the application.\n\nStatic declared variables are globally accessible without creating an instance of the class.\n\nVoid is a type modifier that specifies that the method doesn't return any value.`
  },
  {
    question: "What are constructors in C#?",
    answer: `A constructor is a member function in the class and has the same name as its class. Whenever the object class is created, the constructor is automatically invoked. It constructs the value of data members while initializing the class.`
  },
  {
    question: "What are the different types of constructors in C#?",
    answer: `Basically, there are five types of constructors:\n\n- Static constructor\n- Private constructor\n- Copy constructor\n- Default constructor\n- Parameterized constructor`
  },
  {
    question: "What is static constructor?",
    answer: `Static constructor is used to initialize static data members as soon as the class is referenced first time.`
  },
  {
    question: "What is method overloading in C#?",
    answer: `Method overloading is mechanism to create multiple methods with the same name and unique signature in the same class. When you go for compilation, the compiler uses overload resolution to determine the specific method to be invoked.`
  },
  {
    question: "Is overriding of a function possible in the same class?",
    answer: `No`
  },
  {
    question: "What is array?",
    answer: `Array is a set of related instances either value or reference types.\n\nThere are three types of array supported by C#:\n\n- Single Dimensional Array: It contains a single row. It is also known as vector array.\n- Multi Dimensional Array: It is rectangular and contains rows and columns.\n- Jagged Array: It also contains rows and columns but it has an irregular shape.`
  },
  {
    question: "What is ArrayList?",
    answer: `ArrayList is a dynamic array. You can add and remove the elements from an ArrayList at runtime. In the ArrayList, elements are not automatically sorted.`
  },
  {
    question: "What is a collection?",
    answer: `A collection works as a container for instances of other classes. All classes implement ICollection interface.`
  },
  {
    question: "What is an interface?",
    answer: `Interface is an abstract class that has only public abstract method. These methods only have declaration not the definition. These abstract methods must be implemented in the inherited classes.`
  },
  {
    question: "What is the lock statement in C#?",
    answer: `A lock statement is used to ensure that one thread doesn't enter a critical section of code while another thread is in the critical section. If another thread attempts to enter a locked code it will wait, block, until the object is released.`
  },
  {
    question: "What is serialization?",
    answer: `If you want to transport an object through network then you have to convert the object into a stream of bytes. The process of converting an object into a stream of bytes is called serialization.`
  },
  {
    question: "How to declare a property in a class?",
    answer: `int m_PersonID = 0;  \npublic int PersonID  \n{  \n    get { return m_PersonID; }  \n    set { m_PersonID = value; }  \n}`
  },
  {
    question: "What is the difference between early binding and late binding in C#?",
    answer: `Early binding and late binding are the concept of polymorphism. There are two types of polymorphism in C#.\n\n- Compile Time Polymorphism: It is also known as early binding.\n- Run Time Polymorphism: It is also known as late binding or method overriding or dynamic polymorphism.`
  },
  {
    question: "Which are the access modifiers available in C#?",
    answer: `Following are the access modifiers generally used for accessibility:\n\n- Public: If you define an attribute or method as public, it can be accessed from any code of the project.\n- Private: A private defined attribute or method can be accessed by any code within the containing class only.\n- Protected: If you define the method or attribute as protected it can be accessed by any method in the inherited classes and any method within the same class.\n- Internal: If you define an attribute or a method as internal, it is restricted to classes within the current position assembly.\n- Protected internal: If you define an attribute or method as protected internal, access is restricted to classes within the current project assembly or types derived from the containing class.`
  },
  {
    question: "What is the difference between abstract class and interface in C#?",
    answer: `Abstract class can have abstract and concrete methods whereas interface has only abstract methods.`
  },
  {
    question: "What is the difference between dispose() and finalize() methods in C#?",
    answer: `The dispose() method is explicitly called by the user to free unmanaged resources such as files, database connections, etc, whereas the finalize() garbage collector implicitly calls a method to free unmanaged resources like files, database connections, etc.\n\nThe dispose() method belongs to the IDisposable interface, whereas the finalize() method belongs to the Object class.`
  },
  {
    question: "What is the difference between method overloading and method overriding in C#?",
    answer: `Method parameters must be different in method overloading, whereas it must be the same in method overriding.\n\nInheritance is not required in method overloading, and it occurs within the same class. But inheritance is required in method overriding.`
  },
  {
    question: "What is object pool in .Net?",
    answer: `An object pool is a container of ready-to-use objects. It reduces the overhead of creating new objects.`
  },
  {
    question: "What is delegate in C#?",
    answer: `A delegate in C# is an object that holds the reference to a method. It is like function pointer in C++.`
  },
  {
    question: "What is Hashtable?",
    answer: `A Hashtable is a collection of key/value pairs. It contains values based on the key.`
  },
  {
    question: "What is Reflection?",
    answer: `Reflection allows us to get metadata and assemblies of an object at runtime.`
  },
  {
    question: "What is Garbage Collection?",
    answer: `Garbage Collection is a process of releasing memory automatically occupied by objects, which are no longer accessible.`
  },
  {
    question: "What is a namespace and is required in C#?",
    answer: `A namespace is a mechanism that organizes classes from the same group or functionality under the same name. We can consider it as a module. However, it is not required to include class in a namespace. As we can see in the following syntax:\n\n\`\`\`\nnamespace TpointTech  \n{  \n    class Tpoint  \n    {  \n        public static void someMethod()  \n        {  \n            Console.WriteLine("Creating my namespace");  \n        }  \n    }  \n}\n\`\`\``
  },
  {
    question: "Explain types of Comments in C#.",
    answer: `There are mainly three types of comments in C#. These are as follows:\n\n1. Single Line Comments\n   \`\`\`\n   //Hello! This is a single line comment\n   \`\`\`\n\n2. Multiline Comments\n   \`\`\`\n   /* Hello! This is a \n   Multiline Comment */\n   \`\`\`\n\n3. XML Comments\n   \`\`\`\n   /// Summary  \n   /// Here, we can write code or anything else  \n   /// Summary\n   \`\`\``
  },
  {
    question: "What are indexers in C#?",
    answer: `An indexer enables us to access instances of a class or struct using an index like arrays. These are also known as smart arrays. When we specify an indexer for a class, the class acts as a virtual array. After that, we can utilize the array access operator ([]) to access the instance of this class.`
  },
  {
    question: "What is the Partial Class in C#?",
    answer: `A partial class is an essential feature of C#. It offers the unique capability of implementing a single class’s functionality across numerous files, and when the application is compiled, and all files are merged into a single class file. A partial keyword is used to create a partial class. It is very useful to divide the functionality of interfaces, methods, and structures into numerous files.\n\nSyntax:\n\`\`\`\npublic partial Class_name  \n{  \n    // Write the code  \n}\n\`\`\``
  },
  {
    question: "What are sealed classes in C#?",
    answer: `In C#, sealed classes are created to restrict the need for the class that requires to be inherited. A sealed modifier prevents any derivation from a class. Once a class is designated as sealed, it cannot be inherited. Compile time errors arise when a sealed class is defined as a base class.\n\n\`\`\`\n// Sealed class  \nsealed class SealedClass  \n{  \n}\n\`\`\``
  },
  {
    question: "How can we inherit a class into another class in C#?",
    answer: `In C#, we may utilize a colon as an inheritance operator to inherit a class into another class. We are required to utilize a colon and follow it with the name of the class.`
  },
  {
    question: "What is the main difference between “is” and “as” operators in C#?",
    answer: `The main difference between “is” and “as” operators in C# is that an “is” operator checks an object is of a specific type or not, and it returns a Boolean value. It does not perform any type conversion. On the other hand, the “as” operator may be used to cast an object to a specified type or class.`
  },
  {
    question: "What is the mean by throw statement in C#?",
    answer: `This statement lets us to manually throw an exception during the execution of the C# program.`
  },
  {
    question: "What occurs if there are conflicts between the method names in the inherited interfaces?",
    answer: `When the method from several interfaces needs different data, the issue can occur. However, there should be no issue with the compiler itself.`
  },
  {
    question: "What is tuple in C#?",
    answer: `A Tuple in C# is a data structure that collects multiple values of numerous types into a single unit. It is very useful for returning multiple values from a method without making a custom class or struct.`
  },
  {
    question: "What is the “using” statement in C#?",
    answer: `The keyword “using” statement in C# is utilized to manage resources efficiently by ensuring that objects implementing IDisposable are disposed of automatically when they go out of scope. This statement is very useful when we are working with files, network connections, streams, database connections, and several unmanaged resources.`
  },
  {
    question: "What is the mean by Race condition in C#?",
    answer: `In C#, the race condition arises when multiple threads access the same resource and wish to modify it at the same time.`
  },
  {
    question: "What does it mean by Jagged Array in C#?",
    answer: `In C#, the jagged array is an array of arrays, where each sub-array can have a varying length for each row. Unlike a multidimensional array, a jagged array enables each row to have a different number of elements, which makes it more flexible in cases where uniformity is not needed.`
  },
  {
    question: "What is the IEnumerable<> in C#?",
    answer: `In C#, an IEnumerable is an interface that represents a group of objects that may be enumerated one at a time. IEnumerable is an interface with one method, GetEnumerator, that returns an IEnumerator interface. It enables readonly access to a collection, which can be utilized with a for-each statement on an IEnumerable collection.`
  },
  {
    question: "What are the main differences between constant and Read-only in C#?",
    answer: `**Constant:**\n- Defined via the const keyword.\n- Value allocated at compile-time, may not be altered.\n- Compile-time constant value.\n- Can be used in any scenario (e.g., array sizes).\n\n**Read-Only:**\n- Defined via the readonly keyword.\n- Value allocated at runtime, may not be changed later.\n- Class instance; values may vary between instances.\n- Used for instance-level constant values defined at runtime.`
  },
  {
    question: "What is the File Handling in C#?",
    answer: `In C#, file handling is the technique of working with files like reading or writing. C# language offers several classes and methods in the System.IO namespace to perform numerous file operations. It allows us to read, write, delete, and manipulate files. It enables efficient management of data that are stored in the files.`
  },
  {
    question: "What are the boxing and unboxing processes in C#?",
    answer: `**Boxing:** Conversion of value type variable to reference type variable (object). Implicit conversion.\n\nExample:\n\`\`\`\nint x = 20;\nobject obj = x; // Boxing\n\`\`\`\n\n**Unboxing:** Conversion of reference type (Object) variable into a value type. Explicit conversion.\n\nExample:\n\`\`\`\nint x = 18;\nObject Obj = x; // Boxing\nint a = (int)Obj; // Unboxing\n\`\`\``
  },
  {
    question: "Write a program to reverse a string in C#.",
    answer: `\`\`\`\nusing System;  \nclass TtechPoint  \n{  \n    static void Main()  \n    {  \n        Console.Write("Enter a string to Reverse: ");  \n        string input = Console.ReadLine();  \n  \n        char[] charArr = input.ToCharArray(); // Convert string to char array  \n        Array.Reverse(charArr); // Reverse the array  \n  \n        string reversed = new string(charArr);  \n        Console.WriteLine("Reversed String: " + reversed);  \n    }  \n}\n\`\`\`\n\n**Output:**\n\`\`\`\nEnter a string to Reverse: Hello! This is TtechPoint\nReversed String: tnioPhcetT si sihT !olleH\n\`\`\``
  },
  {
    question: "Write a program to check if a given string is palindrome or not in C#.",
    answer: `\`\`\`\nusing System;  \n  \nclass TtechPoint  \n{  \n    static void Main()  \n    {  \n        Console.Write("Enter a String: ");  \n        string input = Console.ReadLine();  \n  \n        bool isPalindrome = true;  \n        int len = input.Length;  \n  \n        for (int x = 0; x < len / 2; x++)  \n        {  \n            if (input[x] != input[len - x - 1])  \n            {  \n                isPalindrome = false;  \n                break;  \n            }  \n        }  \n  \n        if (isPalindrome)  \n            Console.WriteLine("The String is a palindrome.");  \n        else  \n            Console.WriteLine("The String is not a palindrome.");  \n    }  \n}\n\`\`\`\n\n**Output:**\n\`\`\`\nEnter a String: 64\nThe String is not a palindrome.\n\nEnter a String: 77\nThe String is a palindrome.\n\`\`\``
  },
  {
    question: "What is the use of Async and Await in C#?",
    answer: `In C#, async and await are utilized for asynchronous programming, which enables non-blocking execution of tasks. They help improve application responsiveness by freeing up resources while waiting for long-running operations, such as file I/O, database access, and web requests. The Async and Await keywords create the asynchronous methods.`
  },
  {
    question: "What is the LINQ in C#?",
    answer: `LINQ stands for Language Integrated Query. It is an important feature in C# that enables us to query and manipulate the different types of data, including collections, arrays, data sets, SQL Server, and XML, in a consistent, readable, and concise way using SQL-like syntax. It lets us write SQL-like queries directly in C#, which provides strong and efficient data querying capabilities. It simplifies data manipulation and retrieval, which improves productivity and readability in C# development.`
  },
  {
    question: "What does it mean by the Constructor Chaining in C#?",
    answer: `Constructor chaining is a process where a constructor invokes another constructor within the base class or the same class of the program. It enables us to avoid code duplication in the same class and ensure proper initialization. It makes object initialization easier by offering numerous ways to create objects with varied parameters, increasing code flexibility and clarity.`
  },
  {
    question: "Write a program to find the third largest integer in an array using only one loop in C#.",
    answer: `\`\`\`\nusing System;  \n  \nclass TtechPoint  \n{  \n    static void Main()  \n    {  \n        int[] array = { 17, 65, 42, 87, 6, 12, 72, 56 };  \n  \n        int first = int.MinValue, sec = int.MinValue, third = int.MinValue;  \n  \n        foreach (int num in array)  \n        {  \n            if (num > first)  \n            {  \n                third = sec;  \n                sec = first;  \n                first = num;  \n            }  \n            else if (num > sec && num < first)  \n            {  \n                third = sec;  \n                sec = num;  \n            }  \n            else if (num > third && num < sec)  \n            {  \n                third = num;  \n            }  \n        }  \n  \n        if (third == int.MinValue)  \n            Console.WriteLine("The Third largest number not found in the array!");  \n        else  \n            Console.WriteLine("The Third largest number in the array is: " + third);  \n    }  \n}\n\`\`\`\n\n**Output:**\n\`\`\`\nThe Third largest number in the array is: 65\n\`\`\``
  },
  {
    question: "What keyword is used to perform duck typing in C#?",
    answer: `Dynamic Keyword is utilized to implement duck typing in C#.`
  }
];