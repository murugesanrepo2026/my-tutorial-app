// src/data/oopsQA.js
export const oopsQA = [
  {
    question: "What do you understand by OOP?",
    answer: "OOP stands for object-oriented programming. It is a programming paradigm that revolves around objects rather than functions and procedures. It binds data and code together, and objects are real-world entities containing data and code."
  },
  {
    question: "Name any seven widely used OOP languages.",
    answer: "Python, Java, Go, Dart, C++, C#, Ruby."
  },
  {
    question: "What is the purpose of using OOPs concepts?",
    answer: "To implement real-world entities like inheritance, hiding, and polymorphism in programming, binding data and functions together so that no other part of code can access that data except the function."
  },
  {
    question: "What are the four main features of OOPs?",
    answer: "Inheritance, Encapsulation, Polymorphism, Data Abstraction."
  },
  {
    question: "Why OOP is so popular?",
    answer: "OOP helps write complex code easily, handle and maintain it easily, and its pillars (Abstraction, Encapsulation, Inheritance, Polymorphism) help solve complex scenarios."
  },
  {
    question: "What are the advantages and disadvantages of OOP?",
    answer: "Advantages: bottom-up approach, models real world, code reusability, abstraction hides unnecessary data, better design, decomposes complex problems, faster goal achievement, minimizes complexity, easy redesign. Disadvantages: requires proper planning, tricky design, skilled programmers, classes may be overly generalized."
  },
  {
    question: "What are the limitations of OOPs?",
    answer: "Requires intensive testing, takes more time than procedural programming, larger program size, substantial pre-work and planning, hard to understand without class documentation, can consume large memory, not suitable for small problems."
  },
  {
    question: "What are the differences between object-oriented programming and structural programming?",
    answer: "OOP: bottom-up, data hiding, solves complex problems, reusability, based on objects, more security, more abstraction, focuses on data. Structural: top-down, no data hiding, solves moderate problems, no reusability, based on functions, less security, less abstraction, focuses on process."
  },
  {
    question: "What do you understand by pure object-oriented language? Why Java is not a pure object-oriented programming language?",
    answer: "A pure OOP language treats everything as an object and satisfies encapsulation, inheritance, polymorphism, abstraction, all predefined/user-defined types as objects, and operations only through methods. Java is not pure because primitive data types are not treated as objects."
  },
  {
    question: "What do you understand by class and object? Also, give example.",
    answer: "Class is a blueprint/template (user-defined data type) that defines variables, constants, methods. It consumes no memory at runtime. Object is a real-world entity (instance of class) with attributes and behavior, occupies memory. Example: Class 'Car', objects 'BMW', 'Audi'."
  },
  {
    question: "What are the differences between class and object?",
    answer: "Class: logical entity, conceptual, binds data/methods, occupies no memory, declared once, uses keyword class. Object: real-world entity, real, variable of class, occupies memory, multiple objects can be declared, uses new keyword, cannot exist without class."
  },
  {
    question: "What are the key differences between class and structure?",
    answer: "Class: group of common objects, has data members and member functions, supports inheritance, members private by default, reference type, uses keyword class. Structure: collection of different data types, only data members, no inheritance, members public by default, value type, uses keyword struct."
  },
  {
    question: "What is the concept of access specifiers when should we use these?",
    answer: "Access specifiers (public, private, protected) set accessibility of classes, methods, and members, helping achieve encapsulation. Public: accessible everywhere. Private: only within class. Protected: within class and derived classes. (Java also has default: package-private.)"
  },
  {
    question: "What are the manipulators in OOP and how it works?",
    answer: "Manipulators are helper functions that modify input/output streams using insertion (<<) and extraction (>>) operators. Examples without arguments: endl, ws, flush. With arguments: setw(val), setfill(c), setbase(val), setiosflags(flag). Others: showpos, fixed, scientific, hex, dec, oct."
  },
  {
    question: "What are the rules for creating a constructor?",
    answer: "Cannot have a return type, must have same name as class, cannot be static/abstract/final, cannot be overridden."
  },
  {
    question: "What are the differences between the constructor and the method in Java?",
    answer: "Constructor: same name as class, initializes object, invoked implicitly, cannot be inherited, no return type, cannot be overridden, cannot be static, compiler provides default. Method: different name, executes code, invoked explicitly, can be inherited, must have return type, can be overridden, can be static, no default method."
  },
  {
    question: "How does procedural programming be different from OOP?",
    answer: "Procedural: based on functions, top-down, less secure, data visible globally, no code reuse, difficult modification. OOP: based on objects, bottom-up, more secure (encapsulation), data hidden, code reuse, easy modification."
  },
  {
    question: "What are the differences between error and exception?",
    answer: "Exception: recoverable (try-catch), occurs at compile/run time, belongs to java.lang.Exception, known to compiler for checked exceptions, caused by application. Error: irrecoverable, occurs at runtime, belongs to java.lang.Error, not known to compiler, caused by environment."
  },
  {
    question: "What are the characteristics of an abstract class?",
    answer: "Cannot be instantiated, must be inherited, can have abstract and non-abstract methods, must have at least one abstract method, always public, declared using abstract, provides common base class definition."
  },
  {
    question: "Is it possible for a class to inherit the constructor of its base class?",
    answer: "No."
  },
  {
    question: "Identify which OOPs concept should be used in the following scenario? A group of 5 friends, one boy never gives any contribution... Suddenly a beautiful girl joins... boy now spending a lot of money.",
    answer: "Runtime Polymorphism."
  },
  {
    question: "What is composition?",
    answer: "Composition models a 'has-a' association where a class references one or more objects of other classes in instance variables (e.g., a car has an engine). Benefits: reuse code, design clean APIs, change implementation without adapting external clients."
  },
  {
    question: "What are the differences between copy constructor and assignment operator?",
    answer: "Copy constructor: overloaded constructor, creates new object as copy of existing, used when creating new object, separate memory, compiler provides default if not defined. Assignment operator: operator, assigns value of one existing object to another existing object, both share same memory (reference), bitwise copy if not overloaded."
  },
  {
    question: "What is the difference between Composition and Inheritance?",
    answer: "Inheritance: 'is-a' relationship, derived object in memory, inherits reusable properties. Composition: 'has-a' relationship, parent object holds references of composed objects. Inheritance uses single object in memory; composition uses parent object with references."
  },
  {
    question: "What is constructor chaining?",
    answer: "Constructor chaining is invoking a sequence of constructors (overloaded) upon initializing an object, where one constructor calls another. In C++, called constructor delegation (from C++11)."
  },
  {
    question: "What are the limitations of inheritance?",
    answer: "Tight coupling between classes (cannot use independently), inherited functions work slower than normal functions, needs careful implementation to avoid improper solutions."
  },
  {
    question: "What are the differences between Inheritance and Polymorphism?",
    answer: "Inheritance: derived class inherits superclass features, uses structure/behavior of superclass, required for polymorphism, applied to classes, supports code reusability. Polymorphism: defining in different forms, changing behavior of superclass in subclass, not required for inheritance, applied to functions/methods, allows object to decide which form to invoke (compile/run time)."
  },
  {
    question: "What is Coupling in OOP and why it is helpful?",
    answer: "Coupling defines how closely two objects are connected. Loose coupling: objects independent, don't directly modify others, more flexible, changeable. Tight coupling: objects depend on others, modifying one requires changing others. Loose coupling is always a good habit."
  },
  {
    question: "Name the operators that cannot be overload.",
    answer: "Scope Resolution Operator (::), Ternary Operator (?:), Member Access or Dot Operator (.), Pointer to Member Operator (.*), sizeof operator."
  },
  {
    question: "What is the difference between new and override?",
    answer: "new: hides the original method (doesn't need to be virtual), allows accessing original by upcasting. override: overrides virtual method in base class, providing different functionality. virtual: indicates method may be overridden."
  },
  {
    question: "Explain overloading and overriding with example.",
    answer: "Overloading (compile-time polymorphism): multiple methods with same name but different signatures (e.g., add(int a, int b), add(int a, int b, int c)). Overriding (runtime polymorphism): same method signature in child and parent class, child method overrides parent (e.g., Dog class bark(), Hound subclass bark())."
  },
  {
    question: "What is Cohesion in OOP?",
    answer: "Cohesion measures how strongly elements inside a module belong together. High cohesion: robust, reliable, understandable. Low cohesion: difficult to maintain, test, reuse. High cohesion often associates with loose coupling."
  },
  {
    question: "Give a real-world example of polymorphism.",
    answer: "A person playing different roles: father/husband/son at home, boss/employee at office, passenger in transport, doctor/patient in hospital, customer at shop. Same person behaves differently in different situations."
  },
  {
    question: "What is the difference between a base class and a superclass?",
    answer: "Base class is the root class (most generalized). Superclass is the immediate parent class from which another class inherits."
  },
  {
    question: "What is data abstraction and how can we achieve data abstraction?",
    answer: "Data abstraction shows only essential information and hides implementation details. Achieved via abstract classes and abstract methods. Example: driving a car without knowing engine internals."
  },
  {
    question: "What are the levels of data abstraction?",
    answer: "Physical Level (lowest): how data is actually stored in memory. Logical Level: information stored in database tables and relationships. View Level (highest): actual database visible to user, eases availability."
  },
  {
    question: "What are the types of variables in OOP?",
    answer: "Instance Variable (object-level, inside class outside method, created with new), Static Variable (class-level, static keyword, stored in static memory), Local Variable (method-level, inside method/constructor/block, must be initialized before use), Reference Variable (points to object location)."
  },
  {
    question: "Is it possible to overload a constructor?",
    answer: "Yes, constructors can be overloaded by changing number of arguments or their data types. Example: Demo(), Demo(String str), Demo(double d)."
  },
  {
    question: "Can we overload the main() method in Java? Also give an example.",
    answer: "Yes, we can overload main() with different signatures. Example: public static void main(int a) and public static void main(String args[])."
  },
  {
    question: "Consider the following scenario: If a class Demo has a static block and a main() method, which one will first execute?",
    answer: "JVM executes static block first (priority basis) before looking for main() method. After static block, main() method executes."
  }
];