// src/data/cppQA.js
export const cppQA = [
    {
        question: "What is C++?",
        answer: `
C++ is an object-oriented programming language that allows programmers to work in the world of objects and classes and makes it easy to deal with and understand better. The C++ programming language was designed and implemented by Bjarne Stroustrup, a professor of Computer Science at Columbia University in New York, and was released in the year 1985.

Basically, C++ is an advanced version of the C programming language where it is completely based on procedural programming, and C++ supports key OOP concepts such as encapsulation, inheritance, and polymorphism. Hence, we can conclude C++ as the superset of the C programming language.
`
    },
    {
        question: "What are the advantages of C++?",
        answer: `
Several advantages of C++ programming languages are as follows:

C++ not only maintains all aspects of the C programming language, it also simplifies memory management and adds several features to the code.
C++ is a highly portable language means that the software developed using C++ language can run on any platform.
C++ is an object-oriented programming language that includes the OOPs concepts, such as classes, objects, inheritance, polymorphism, and abstraction.
C++ uses a technique called message passing that is used for making communication between the objects.
C++ contains a rich function library that we can use in our code and brings in the dependency in the user's code.
`
    },
    {
        question: "What is the difference between C and C++?",
        answer: `
There are several differences between C and C++. Some of them are as follows:

C                                                                                         C++

C language was developed by Dennis Ritchie.                             C++ language was developed by Bjarne Stroustrup.

C is a structured programming language.                                     C++ supports both structural and object-oriented programming language.

C is a subset of C++.                                                                     C++ is a superset of C.

In C language, data and functions are free entities.                     In the C++ language, both data and functions are encapsulated together in the form of a project.

C does not support data hiding. Therefore, the data can be used by the outside world.    C++ supports data hiding. Therefore, the data cannot be accessed by the outside world.

C supports neither function nor operator overloading.                     C++ supports both function and operator overloading.

In C, the function cannot be implemented inside the structures.           In C++, the function can be implemented inside the structures.

Reference variables are not supported in C language.                       C++ supports the reference variables.

C language does not support the virtual and friend functions.              C++ supports both virtual and friend functions.

In C, scanf() and printf() are mainly used for input/output.               C++ mainly uses stream cin and cout to perform input and output operations.


`
    },
    {
        question: "What is the difference between a Reference and a Pointer?",
        answer: `
There are several difference between reference and pointer in C++. Some main differences are as follows:

Reference
Pointer
Reference behaves like an alias for an existing variable, i.e., it is a temporary variable.
The pointer is a variable that stores the address of a variable.
Reference variable does not require any indirection operator to access the value. A reference variable can be used directly to access the value.
Pointer variable requires an indirection operator to access the value of a variable.
Once the reference variable is assigned, then it cannot be reassigned with different address values.
The pointer variable is an independent variable means that it can be reassigned to point to different objects.
A null value cannot be assigned to the reference variable.
A null value can be assigned to the reference variable.
It is necessary to initialize the variable at the time of declaration.
It is not necessary to initialize the variable at the time of declaration.

To Read More: Difference between Reference and Pointer
`
    },
    {
        question: "What is a Class in C++?",
        answer: `
In C++, the class is a user-defined data type. The class is declared using the class keyword class. The class contains the data members and member functions whose access is defined by the three modifiers private, public, and protected. The class defines the type definition of the category of things. It defines a datatype, but it does not define the data. It just specifies the structure of the data.

If we want to use the data of that class, we create n number of objects inside the class and invoke the methods and variables.

Syntax

It has the following syntax:

class < class name >  
{  
< access modifier > ( private, public, protected ) :  
// data member  
// member method  
} ;  

C++ Class Example

Let us take an example to illustrate the class in C++.

Example
#include <iostream>  
using namespace std;  

class Test {  
public:  
    // data members  
    int sum;  
    int a = 2;  
    int b = 3;  

    // member method  
    void add(int a, int b) {  
        sum = a + b;  
        cout << "The sum of a and b is: " << sum << endl;  
    }  
};  

int main() {  
    Test obj;  
    obj.add(obj.a, obj.b);  
    return 0;  
}  

Output:

The sum of a and b is: 5

To Read More: C++ Classes
`
    },
    {
        question: "What are the various OOP concepts in C++?",
        answer: `
Several OOP concepts in C++ are as follows:

Class

In C++, the class is a user-defined data type that defines its properties and functions. For example, Human beings are a class. The body parts of a human being are its properties, and the actions performed by the body parts are known as functions. The class does not occupy any memory space. Therefore, we can say that the class is the only logical representation of the data.

Syntax

It has the following syntax:

class student    
{    
//data members;    
//Member functions    
}    

Object

In C++, an object is a run-time entity. An object is the instance of the class. An object can represent a person, place or any other item. An object can operate on both data members and member functions. The class does not occupy any memory space.

When an object is created using a new keyword, the space is allocated for the variable in a heap, and the starting address is stored in the stack memory. When an object is created without a new keyword, the space is not allocated in the heap memory, and the object contains the null value in the stack.

Syntax

It has the following syntax:

Student s = new Student();   

Inheritance

In C++, inheritance provides reusability. Reusability means that we can use the functionalities of the existing class. It eliminates the redundancy of code. Inheritance is a technique of deriving a new class from the old class. The old class is known as the base class, and the new class is known as the derived class.

Syntax

It has the following syntax:

class derived_class :: visibility-mode base_class;     

Note: The visibility mode can be public, private, or protected

To Read More: C++ Inheritance

Encapsulation

In C++, encapsulation is a technique of wrapping the data members and member functions in a single unit. It binds the data within a class, and no outside method can access the data. If the data member is private, the member function can only access the data.

To Read More: C++ Encapsulation

Abstraction

In C++, abstraction is a technique of showing only essential details without representing the implementation details. If the members are defined with a public keyword, the members are accessible outside also. If the members are defined with a private keyword, the members are not accessible by outside methods.

To Read More: C++ Abstraction

Polymorphism

In C++, polymorphism means multiple forms. Polymorphism means having more than one function with the same name but with different functionalities. Polymorphism is of two types:

Static polymorphism is also known as early binding.
Dynamic polymorphism is also known as late binding.
`
    },
    {
        question: "What are the different types of Polymorphism in C++?",
        answer: `
In C++, polymorphism means multiple forms. It means having more than one function with the same function name but with different functionalities.

Polymorphism is mainly of two types:

Runtime Polymorphism
Runtime polymorphism is also known as dynamic polymorphism. Function overriding is an example of runtime polymorphism. Function overriding means when the child class contains the method that is already present in the parent class. Hence, the child class overrides the method of the parent class. In the case of function overriding, the parent and child class both contain the same function with different definitions. The call to the function is determined at runtime is known as runtime polymorphism.

C++ Runtime Polymorphism Example

Let us take an example to illustrate the Runtime Polymorphism in C++.

Example
#include <iostream>    
using namespace std;   //using standard namespace  
class Base    
{    
    public:    
    virtual void show()    
    {    
        cout<<"tpointtech";    
     }    
};    
class Derived:public Base    
{    
    public:    
    void show()    
    {    
        cout<<"tpointtech tutorial";    
    }    
};    

int main()   //main function  
{    
    Base* b;    
    Derived d;    
    b=&d;    
    b->show();    
                return 0;    
}    

Output:

tpointtech tutorial

Compile time Polymorphism
In C++, compile-time polymorphism is also known as static polymorphism. The polymorphism which is implemented at the compile time is known as compile-time polymorphism. Method overloading is an example of compile-time polymorphism.

To Read More: C++ Polymorphism
`
    },
    {
        question: "What is Method Overloading in C++?",
        answer: `
In C++, method overloading is a technique that allows us to contain multiple function with the same function name but with different functionality.

Method overloading can be possible on the following basis:

The return type of the overloaded function.
The type of the parameters passed to the function.
The number of parameters passed to the function.

Method Overloading Example

Example
#include <iostream>    
using namespace std;  //using standard namespace  
class Multiply    
{     
   public:    
   int mul(int a,int b)    
   {    
       return(a*b);    
   }    
   int mul(int a,int b,int c)    
   {    
       return(a*b*c);    
  }    
 };    
int main()   //main function  
{    
    Multiply multi;    
    int res1,res2;    
    res1=multi.mul(2,3);    
    res2=multi.mul(2,3,4);    
    cout<<"\\n";    
    cout<<res1;    
    cout<<"\\n";    
    cout<<res2;    
    return 0;    
}    

Output:

6
24

Explanation:

In the above example, null() is an overloaded function with a different number of parameters.
`
    },
    {
        question: "What is the Namespace in C++?",
        answer: `
The namespace is a logical division of the code that is designed to stop the naming conflict.
The namespace defines the scope where the identifiers, such as variables, classes, and functions, are declared.
The main purpose of using namespace in C++ is to remove the ambiguity. Ambiguity occurs when a different task occurs with the same name.
For example, if there are two functions that exist with the same name, such as add(). The namespace is used to prevent this ambiguity. Functions are declared in different namespaces.
C++ consists of a standard namespace, i.e., std which contains inbuilt classes and functions. So, by using the statement "using namespace std;" includes the namespace "std" in our program.

Syntax of Namespace:

namespace namespace_name    
{    
 //body of namespace;    
}    

Syntax of Accessing the Namespace Variable:

namespace_name::member_name;  

C++ Namespace Example

Let's take an example to illustrate the namespace in C++.

Example
#include <iostream>    
using namespace std;   //using standard namespace  
namespace addition    
{     
    int a=5;    
    int b=5;    
    int add()    
    {    
        return(a+b);    
    }    
}    

int main() {   //main function  
int result;    
result=addition::add();    
cout<<result;    
return 0;    
}    

Output:

10

To Read More: C++ Namespace
`
    },
    {
        question: "What is Token in C++?",
        answer: `
Tokens are the smallest individual units of a C++ program, which are used by the compiler during lexical analysis to analyze and interpret the code. Using these tokens, we can recognize, understand, process, and form the syntax of the programming language. The token can be a keyword, identifier, literal, constant, and symbol.

To Read More: Tokens in C++
`
    },
    {
        question: "Which operations are permitted on Pointers?",
        answer: `
There are several operations that can be performed on pointers in C++. Some main operations are as follows:

Incrementing or decrementing a pointer: Incrementing a pointer means that we can increment the pointer by the size of the data type to which it points.
There are two types of increment pointers:

1. Pre-Increment pointer: The pre-increment operator increments the operand by 1, and the value of the expression becomes the resulting value of the incremented. If ptr is a pointer, the pre-increment pointer is represented as ++ptr.

C++ Pre-Increment Pointer Example

Let us take an example to illustrate the pre-increment pointer in C++.

Example
#include <iostream>    
using namespace std;   //using standard namespace  
int main()  //main function  
{    
int a[5]={1,2,3,4,5};    
int *ptr;    
ptr=&a[0];    
cout<<"Value of *ptr is : "<<*ptr<<"\\n";    
cout<<"Value of *++ptr : "<<*++ptr;    
return 0;    
}    

Output:

Value of *ptr is : 1
Value of *++ptr : 2

2. Post-increment pointer: The post-increment operator increments the operand by 1, but the value of the expression will be the value of the operand prior to the incremented value of the operand. If ptr is a pointer, the post-increment pointer is represented as ptr++.

C++ Post-Increment Example

Let's take an example to illustrate the post-increment in C++.

Example
#include <iostream>    
using namespace std;   //using standard namespace  
int main()  //main function  
{    
int a[5]={1,2,3,4,5};    
int *ptr;    
ptr=&a[0];    
cout<<"Value of *ptr is : "<<*ptr<<"\\n";    
cout<<"Value of *ptr++ : "<<*ptr++;    
return 0;    
}    

Output:

Value of *ptr is : 1
Value of *ptr++ : 1

Subtracting a pointer from another pointer: When two pointers pointing to the members of an array are subtracted, the number of elements present between the two members are returned.
`
    },
    {
        question: "What is the 'std' in C++?",
        answer: `
The std is the default namespace standard that is used in C++. It contains all the identifiers (classes, functions, objects, etc.) defined in the C++ Standard Library.

When we use the features like cout, cin, string, vector, sort, etc., they are all part of the std namespace. It helps to avoid name conflicts and keeps standard library identifiers organized.
`
    },
    {
        question: "Which programming language's unsatisfactory performance led to the discovery of C++?",
        answer: `
C++ was discovered to manage with the disadvantages of C.
`
    },
    {
        question: "How delete[] is different from delete?",
        answer: `
In C++, delete is used to release a unit of memory, whereas the delete[] method is used to release an array.
`
    },
    {
        question: "What is the full form of STL in C++?",
        answer: `
In C++, the STL stands for Standard Template Library.

To Read More: C++ STL
`
    },
    {
        question: "What is an Object in C++?",
        answer: `
In C++, an object is the instance of a class by which we can invoke the properties and behavior of the class n number of times by creating n number of objects. The fundamental concept of the object-oriented programming language is object because it allows a programmer to reuse the code several times.

The objects of a class are declared with the same sort of declaration that we declare variables of basic types. We create the objects inside a class using the class name and then name the object. We can create an object dynamically as well using new keywords, and for dynamic objects, the memory is allocated in the heap area. We use the dot operator to access the object.

C++ Object Example

Let us take an example to illustrate the Object in C++.

Example
#include <iostream>    
using namespace std;  //using standard namespace  
class Test {  
public:  
    string str = " Hello ";  
    void display ( ) {  
        cout << str << endl;  
    }  
};  

int main( ) {  
// create the object  
Test obj;  
// Invoking the method using the dot operator.  
obj.display ( );  
    return 0;  
}  

Output:

Hello
`
    },
    {
        question: "What are the C++ Access Specifiers?",
        answer: `
In C++, the access specifiers are used to define how the functions and variables can be accessed outside the class. These specifiers are mainly used to define a level to access the methods and variables outside of a class.

We have the following three types of access specifiers:

Private Access Specifier: If we use the private specifier over a method or variable, it can be accessed only within the same class and cannot be accessed outside the class. They become private to the class where they have been created and initialized.
Public Access Specifier: If we use the public specifier over a method or variable, it can be accessed from anywhere.
Protected Access Specifier: Functions and variables declared as protected that cannot be accessed outside the class except a child class. It is generally used in the concept of inheritance, where if we create a parent class and a child class, the methods and variables of the parent class can be accessed by its child class if we have used the protected specifier in the parent class.

To Read More: C++ Access Specifiers
`
    },
    {
        question: "What is Object Oriented Programming (OOP)?",
        answer: `
In C++, OOP is a methodology or paradigm that allows programmers to work with real-world entities that is easy to understand. The concept of object-oriented programming is related to creating objects to execute the given tasks. We have the basic concepts that together contribute to building the OOP.

Classes and Objects: Classes are used to specify the structure of the data. We create and initialize the methods and variables inside a class that brings in the structure of the data. We can also specify the access levels of a class either public, private or protected.

On the other hand, objects are the instances of classes that we use for calling the defined methods and variables of the class. We can call the method or variables of a class n a number of times by creating n number of objects and applying it to different scenarios.

Encapsulation: A mechanism that binds the data and associated operations together and thus hides the data from the outside world. Encapsulation is also known as data hiding. In C++, it is achieved using the access specifiers, i.e., public, private and protected.

When we create a class, we wrap data members and member functions in one place, i.e. we encapsulate them into a class to form a structure and creating a class is an easy-to-understand example for learning about encapsulation. When we wrap our data into a class, only the required components are visible to the user, and all other data remains hidden.

Abstraction: Abstraction is used to hide the internal implementations and show only the necessary details to the outer world. There are different ways to perform abstraction. Data abstraction is implemented using interfaces and abstract classes in C++.

Inheritance: Inheritance is used to inherit the property of one class into another class. It facilitates us to define one class in terms of another class. It creates an IS-A relationship between two or more classes, makes a dependency, and allows programmers to reuse the same methods and variables in more than one class.

In inheritance, we have a base class (also called Parent class) and one or more child classes. If we want to use any method of a parent class in our child class, we can create the objects and invoke the method and vice versa.

To Read More: OOPs Concept in C++
`
    },
    {
        question: "What are the differences between an Array and a List?",
        answer: `
There are several differences between an array and a list. Some main differences between them are as follows:

An Array is a collection of homogeneous elements, while a list is a collection of heterogeneous elements.
Array memory allocation is static and continuous, while List memory allocation is dynamic and random.
In Array, users don't need to keep track of the next memory allocation, while In the list, the user has to keep track of the next location where memory is allocated.
`
    },
    {
        question: "What are the differences between new() and malloc()?",
        answer: `
There are several differences between a new() and a malloc(). Some main differences between them are as follows:

The new() operator is a preprocessor , malloc() is a function.
There is no need to allocate the memory while using "new", but in malloc(), we have to use the sizeof() function.
The "new" initializes the new memory to 0, while malloc() gives a random value in the newly allotted memory location.
The new() operator allocates the memory and calls the constructor for the object initialization, and the malloc() function allocates the memory but does not call the constructor for the object initialization.
The new() operator is faster than the malloc() function because the operator is faster than the function.

To Read More: Difference between new() and malloc()
`
    },
    {
        question: "What are the methods of exporting a function from a DLL?",
        answer: `
There are two ways:

By using the DLL's type library.
Taking a reference to the function from the DLL instance.
`
    },
    {
        question: "Define Friend Function in C++.",
        answer: `
In C++, the friend function acts as a friend of the class. It can access the private and protected members of the class. The friend function is not a member of the class, but it must be listed in the class definition.

The non-member function cannot access the private data of the class. Sometimes, it is necessary for the non-member function to access the data. The friend function is a non-member function and has the ability to access the private data of the class.

If we want to make an outside function friendly to the class, we need to declare the function as a friend of the class, as shown below:

class sample    
{    
   // data members;    
 public:    
friend void abc(void);    
};    

C++ Friend Function Example

Let us take an example to illustrate the friend function in C++.

Example
#include <iostream>    
using namespace std;   //using standard namespace  
class Addition    
{    
 int a=5;    
 int b=6;    
 public:    
 friend int add(Addition a1)    
 {    
     return(a1.a+a1.b);    
 }    
};    
int main()   //main function  
{    
int result;    
Addition a1;    
 result=add(a1);    
 cout<<result;    
return 0;    
}    

Output:

11

To read More: Friend Function in C++
`
    },
    {
        question: "What is a Virtual Function?",
        answer: `
In C++, a virtual function is used to replace the implementation provided by the base class. The replacement is always called whenever the object in question is actually of the derived class, even if the object is accessed by a base pointer rather than a derived pointer.
It is a member function that is present in the base class and redefined by the derived class.
When we use the same function name in both the base and derived classes, the function in the base class is declared with a keyword virtual.
When the function is made virtual, C++ determines at run-time which function is to be called based on the type of the object pointed by the base class pointer. Therefore, we can execute different versions of the virtual functions by making the base class pointer to point to different objects.

Rules of a virtual function:

The virtual functions should be a member of some class.
The virtual function cannot be a static member.
Virtual functions are called by using the object pointer.
It can be a friend of another class.
C++ does not contain virtual constructors but can have a virtual destructor.

To Read More: C++ Virtual Function
`
    },
    {
        question: "When should we use Multiple Inheritance?",
        answer: `
In C++, multiple Inheritance should be used when a class is required to inherit features (data members and member functions) from more than one base class, and each base class offers a different functionality or behavior that is logically required in the derived class.

To Read More: Multiple Inheritance in C++
`
    },
    {
        question: "What is a Destructor in C++?",
        answer: `
In C++, a destructor is an instance data function that is used to delete any extra resources allocated by the object. A destructor function is called automatically once the object goes out of the scope and destroys the class objects.      

Rules of destructor:

Destructors have the same name as the class name, and it is preceded by a tilde.
It does not contain any argument and no return type.
We cannot have more than one destructor defined.
We cannot overload a destructor.
A destructor cannot be declared as static or const.

Syntax of a Destructor:

~ < class name > ( )  {  
// destructor message  
}  

Example of a Destructor

Example
#include <iostream>    
using namespace std;   //using standard namespace  
class Test {  
public:  
    // Creating constructor  
    Test() {  
 cout <<  "Constructor Created" <<endl ;  
}  
// Creatibg destructor  
    ~Test( ) {  
 cout << "Destructor Created";  
 }  
};  
int main()  //main function  
{  
Test obj;  
 return 0;  
}  

Output:

Constructor Created
Destructor Created

To Read More: C++ Destructor
`
    },
    {
        question: "What is an Overflow Error?",
        answer: `
In C++, an overflow error is a type of arithmetic error that occurs when the result of an arithmetic operation exceeds the storage capacity of the data type or memory region. It can occur with integers, floating-point types, or the program stack.

In C++, every data type has a defined range. An overflow occurs when a calculation produces a value greater than the maximum limit of that range.
`
    },
    {
        question: "What is Overloading in C++?",
        answer: `
The concept of overloading is when a function has the same name with different arguments, i.e., the single object behaves in different ways and provides different versions of the same function.
C++ facilitates the programmer to specify more than one definition for a function name or an operator in the same scope.
When we overload a method, it is called Method Overloading, and when we overload an operator, it is called Operator Overloading.
So, basically, C++ provides two types of overloading, which are function overloading and operator overloading.

1. Operator Overloading: It is a compile-time polymorphism in which a standard operator is overloaded to provide a user-defined definition to it. For example, the '+' operator is overloaded to perform the addition operation on data types such as int, float, etc.

Syntax of Operator Overloading:

return_type classname :: Operator Operator_symbol(argument_list)    
{    
      // body_statements;    
}    

To Read More: Operator Overloading in C++

2. Function Overloading: In C++, function overloading is also a type of compile-time polymorphism that can define a family of functions with the same name. The function would perform different operations based on the argument list in the function call. The function to be invoked depends on the number of arguments and the type of the arguments in the argument list.

To Read More: Function Overloading in C++
`
    },
    {
        question: "What is Function Overriding?",
        answer: `
If we inherit a class into a derived class and provide a definition for one of the base class's functions again inside the derived class, this function is called an overridden function, and this mechanism is known as function overriding. Overriding helps to achieve polymorphism. We have two types of function overriding available :

Compile Time Overriding: Here, the overriding of the method happens at the compile time itself. The compile-time polymorphism is also known as Early Binding or static binding.
Runtime Function Overriding: Here, the overriding of the method happens at the runtime. The runtime polymorphism is also known as Dynamic Binding or Late binding. We achieve runtime polymorphism with the help of Virtual functions.

To Read More: C++ Function Overriding
`
    },
    {
        question: "What is Virtual Inheritance?",
        answer: `
In C++, virtual inheritance facilitates the programmer to create only one copy of each object, even if the object appears more than one in the hierarchy.
`
    },
    {
        question: "What is a Constructor?",
        answer: `
In C++, a constructor is a special method that initializes an object. Its name must be the same as the class name. These constructors are called automatically whenever we create an object of a class.

Syntax of C++ Constructor

< class name > ( ) {  
// initialize the variables or print the message.  
}  

Basically, there are four types of C++ constructors which are :

Default Constructor: It is an automatic constructor that is generated by the compiler if we do not create one. Otherwise, it is not generated if we explicitly create our own constructor. With this, it does not carry any parameter and only initializes the objects with their default values.
Parameterized Constructor: In this constructor, we pass the parameters to the constructor and using these parameters we initialize the objects of the class. However, if we create a parameterized constructor, a non-parameterized constructor should also be defined because when we make our own constructor, the compiler will not create the default constructor.
Copy Constructor: The constructor that takes a reference to an object of the same class and initializes an object of a class by taking the help of another object of the same class.
Move Constructor: It is similar to the copy constructor, which creates an object from the existing object. It does not copy the object in the new memory and uses move semantics for transferring the ownership of the created object to the new one without the need to make any extra copies. The process of the move constructor is similar to stealing the resources from the other objects.

To Read More: C++ Constructor
`
    },
    {
        question: "What is the purpose of the \"delete\" operator?",
        answer: `
The "delete" operator is used to release the dynamic memory created by the "new" operator. The return type of the delete operator is void, and it does not return any value. When we use the delete operator, the pointer pointing to the object does not get destroyed; only the value that is pointed by the object pointer gets destroyed.
`
    },
    {
        question: "Explain \"this\" pointer.",
        answer: `
In C++, "this" pointer is a keyword that holds the address of the current object. The objects are of the same class where they are declared.

To Read More: C++ this Pointer
`
    },
    {
        question: "What does the Scope Resolution operator do?",
        answer: `
The scope resolution operator, which is represented by double colons (::), is used for accessing data members and member functions defined in some other class into the current class. For example, if we have two variables, v1 and v2, defined in class A, and if we want to access these variables in class B, we can make use of the scope resolution operator and access v1 and v2 in class B as well.

Syntax of scope resolution operator

Classname:: < variable name or method name >.  

If we want to access global variables or static variables, define a method outside its class, or refer to a parent class variable in the child class. In that case, scope resolution helps in fulfilling all these.

To Read More: Scope Resolution Operator in C++
`
    },
    {
        question: "What is a Pure Virtual Function?",
        answer: `
In C++, a pure virtual function is a virtual function that does not contain any definition. The normal function is preceded by the keyword virtual. The pure virtual function ends with 0.

Syntax of a pure virtual function

virtual void abc()=0;   //pure virtual function.  

C++ Pure Virtual Function Example

Let us take an example to illustrate the Pure Virtual Function in C++.

Example
#include<iostream>    
using namespace std;  //using standard namespace  
class Base    
{    
    public:    
    virtual void show()=0;    
};    

class Derived:public Base    
{    
    public:    
    void show()    
    {    
        cout<<"tpointtech";    
    }    
};    
int main()   //main function  
{    
    Base* b;    
    Derived d;    
    b=&d;    
    b->show();    
    return 0;    
}    

Output:

tpointtech
`
    },
    {
        question: "What is the difference between struct and class?",
        answer: `
Structures
class
A structure is a user-defined data type that contains variables of dissimilar data types.
The class is a user-defined data type that contains member variables and member functions.
The variables of a structure are stored in the stack memory.
The variables of a class are stored in the heap memory.
We cannot initialize the variables directly.
We can initialize the member variables directly.
If the access specifier is not specified, then by default, the access specifier of the variable is "public".
If the access specifier is not specified, then by default, the access specifier of a variable is "private".
Declaration of a structure:
struct structure_name
{
// body of structure;
} ;
Declaration of class:
class class_name
{
// body of class;
}
A structure is declared by using a struct keyword.
The class is declared by using a class keyword.
The structure does not support the inheritance.
The class supports the concept of inheritance.
The type of a structure is a value type.
The type of a class is a reference type.

To Read More: Difference between Structure and Class in C++
`
    },
    {
        question: "What is a class template?",
        answer: `
In C++, a class template is used to create a family of classes and functions. For example, we can make a template of an array class, which will enable us to create an array of various types, such as int, float, char, etc. Similarly, we can make a template for a function; suppose we have a function add(); and then we can create multiple versions of add().

Syntax of a class template:

template<class T>    
class classname    
{    
  // body of class;    
};    

Syntax of an object of a template class:

classname<type> objectname(arglist);
`
    },
    {
        question: "What is the difference between function overloading and operator overloading?",
        answer: `
Several differences between function overloading and operator overloading in C++ are as follows:

Function overloading: Function overloading is defined as we can have more than one version of the same function. The versions of a function will have different signatures means that they have a different set of parameters.
Operator overloading: Operator overloading is defined as the standard operator that can be redefined so that it has a different meaning when applied to the instances of a class.
`
    },
    {
        question: "What is a Virtual Destructor?",
        answer: `
In C++, a virtual destructor is used in the base class so that the derived class object can also be destroyed. A virtual destructor is declared by using the ~ tilde operator and then the virtual keyword before the constructor.

Note: The constructor cannot be virtual, but the destructor can be virtual.

C++ Virtual Destructor Example

Let us take an example to illustrate the virtual destructor in C++.

Example
#include <iostream>    
using namespace std;    
class Base    
{    
    public:    
    Base()    
    {    
        cout<<"Base constructor is called"<<"\\n";    
    }    
    virtual ~Base()    
    {    
        cout<<"Base class object is destroyed"<<"\\n";    
    }    
};    
class Derived:public Base    
{    
    public:    
    Derived()    
    {    
        cout<<"Derived class constructor is called"<<"\\n";    
    }    
    ~Derived()    
    {    
        cout<<"Derived class object is destroyed"<<"\\n";    
    }    
};    
int main()     
{    
  Base* b= new Derived;    
  delete b;    
  return 0;    
      
}    

Output:

Base constructor is called
Derived class constructor is called
Derived class object is destroyed
Base class object is destroyed

When we use the virtual destructor, the derived class destructor is called first, and then the base class destructor is called.

To Read More: Virtual Destructor in C++
`
    },
    {
        question: "What is the difference between Java and C++?",
        answer: `
Both Java and C++ are popular programming languages that have their unique features. Several differences between Java and C++ are as follows:

C++ is basically used for system programming, whereas Java is used for application programming.
C++ is an extension of the C programming language, whereas Java was designed and created as an interpreter for printing systems.
The C++ programming language supports the goto statements, whereas Java does not support goto statements.
C++ supports pointers, whereas Java internally supports pointers.
C++ supports operator overloading, and Java supports operator overloading.
In C++, memory management is done manually using new and delete, whereas in Java, memory management is done automatically by the Java Garbage Collector.

To Read More: Difference between Java and C++
`
    },
    {
        question: "Define Inline Function in C++.",
        answer: `
In C++, an inline function is a function that is defined using the inline keyword. In the inline function, a compiler replaces the function call with the original code of the function during compile time. Its main purpose is to enhance the performance of a program by reducing the function call overhead.

Inline functions can make code execution faster by copying the function code directly at the place of the function call. If any modifications are made to an inline function, the function should be recompiled because the compiler requires to update all the locations where the function code was inserted. Otherwise, the program will run the old functionality.

Syntax:

It has the following syntax:

inline return_type function_name(parameters)    
{    
   // Function Code    
}    
`
    }
];