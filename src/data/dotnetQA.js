// src/data/dotnetQA.js
export const dotnetQA = [
  {
    question: "What is .NET?",
    answer: ".NET is a framework for software development. It provides runtime capabilities and a rich set of pre-built functionality in the form of class library and APIs. The .NET framework contains three main parts: Common Language Runtime, Framework classes, and ASP.NET."
  },
  {
    question: "How many languages are supported by .NET at the present time?",
    answer: "When .NET was introduced the first time, it supported many languages like VB.NET, C#, COBOL, Perl, etc. At the present time, it supports almost 44 languages."
  },
  {
    question: "How is it possible for .NET to support many languages?",
    answer: "The .NET language code is compiled into Microsoft Intermediate Language (MSIL). The generated code is called managed code. This managed code is executed in .NET environment. Therefore, after compilation, the language is not a barrier, and the code can call or use the functions of another language also."
  },
  {
    question: "Is ASP.NET different from ASP? If yes, explain how.",
    answer: "Yes, ASP.NET is different from ASP. Main differences: ASP.NET is compiled while ASP is interpreted; ASP uses ADO while ASP.NET uses ADO.NET; .NET is completely object-oriented, while ASP is partially object-oriented. Also ASP.NET is developed by Microsoft to create dynamic web apps."
  },
  {
    question: "What is the state management in ASP.NET?",
    answer: "State management is a technique that is used to manage the state of an object on different requests. It is very important for web applications. There are two types: Client-side state management and Server-side state management."
  },
  {
    question: "What is the difference between trace and debug?",
    answer: "Debug class is used to debug builds, while Trace is used for both debug and release builds."
  },
  {
    question: "What are the differences between System.StringBuilder and System.String?",
    answer: "System.StringBuilder is mutable, while System.String is immutable. Also, the Append keyword is used in StringBuilder but not in String."
  },
  {
    question: "What is the difference between int and Int32?",
    answer: "There is no difference between int and Int32. System.Int is an alias name for System.Int32 which is a .NET Class."
  },
  {
    question: "What is the difference between namespace and assembly?",
    answer: "An assembly is a physical grouping of logical units, while a namespace groups classes. A namespace can span multiple assemblies."
  },
  {
    question: "Explain the differences between value type and reference type.",
    answer: "Value type contains variables directly, memory allocated in stack. Reference type doesn't contain value directly in memory; memory allocated in managed heap. Reference type example: class; value type: struct, enumeration."
  },
  {
    question: "What is the difference between a session object and an application object?",
    answer: "Session object maintains session of each user (gets unique session ID, deleted when user leaves). Application object maintains data for the whole application across all users."
  },
  {
    question: "What are the differences between function and stored procedure in .NET?",
    answer: "Function returns only one value, procedure can return multiple values. Function can be used in SELECT statements, procedure cannot. Function has only input parameters, procedure can have input and output. Exceptions handled in procedures but not in functions."
  },
  {
    question: "How to retrieve user names in case of Window Authentication?",
    answer: "System.Environment.UserName"
  },
  {
    question: "What are the differences between Hash table and Array list?",
    answer: "Hash table stores data as key-value pairs, ArrayList stores only values. To access value from Hash table you need key, ArrayList uses index. Hash table can store different data types (int, string), ArrayList stores similar type."
  },
  {
    question: "What is the meaning of Immutable?",
    answer: "Immutable means once you create an object, you cannot modify it. If you assign a new value, it discards the old one and creates a new instance in memory."
  },
  {
    question: "What are the advantages of using a session?",
    answer: "Stores user states and data across application, easy to implement, can store any object, stores each user's data separately, secure and transparent because session object is stored on the server."
  },
  {
    question: "What are the disadvantages of using session?",
    answer: "Performance overhead with large number of users because session data stored in server memory; overhead involved in serializing/deserializing session data (StateServer/SQLServer mode)."
  },
  {
    question: "Can you set the session out time manually?",
    answer: "Yes. Session out time can be set manually in web.config."
  },
  {
    question: "Explain the boxing and unboxing concept in .NET.",
    answer: "Boxing: converting value type into reference type. Unboxing: converting reference type back to value type."
  },
  {
    question: "Is it possible to change the index of the primary key on the table?",
    answer: "No."
  },
  {
    question: "What is HttpHandler?",
    answer: "HttpHandler is a low-level request and response API that services incoming HTTP requests. Every incoming HTTP request received by ASP.NET is ultimately processed by an instance of a class that implements HttpHandler."
  },
  {
    question: "What is .NET Framework and what are the main components of it?",
    answer: ".NET Framework helps develop, run, and deploy applications like console, web, windows services. Main components: Class Library, Common Language Runtime (CLR), Dynamic Language Runtime (DLR), Application Domains, Runtime Hosts, cross-language interoperability, Framework security, profiling."
  },
  {
    question: "What is manifest in .NET Framework?",
    answer: "Manifest stores assembly metadata including version of assembly, security identity, scope of the assembly, and references to resources and classes."
  },
  {
    question: "What are the memory-mapped files?",
    answer: "Memory-mapped files map file content to application logical address, enabling multiple processes to share data. Use MemoryMappedFile.CreateFromFiles() to obtain a persistent memory-mapped file from disk."
  },
  {
    question: "Which method is used to enforce garbage collection in .NET?",
    answer: "System.GC.Collect() method."
  },
  {
    question: "What is the difference between Dispose() and Finalize()?",
    answer: "Finalize is called automatically by the runtime; Dispose is called by the programmer. Finalize is for nondeterministic cleanup, Dispose for explicit deterministic cleanup."
  },
  {
    question: "Explain the Code Access Security (CAS) in .NET framework.",
    answer: "CAS is part of .NET security model to prevent unauthorized access of resources and operations, restricting codes to perform particular tasks."
  },
  {
    question: "What is Garbage collection?",
    answer: "Garbage collection prevents memory leaks. A low-priority garbage collector manages memory allocation/deallocation and frees memory from objects no longer used by the application."
  },
  {
    question: "How can you identify that the page is post back?",
    answer: "Using the 'IsPostBack' property."
  },
  {
    question: "What is variable and constant in .NET programming language?",
    answer: "Variable: data storage location with a meaningful name and data type. Constant: similar but value cannot be changed; must be initialized at declaration using 'const' keyword."
  },
  {
    question: "If you want to replace multiple if-else statements in code, which statement will you use?",
    answer: "In C#, use Switch-Case statement. In Visual Basic also Switch-Case."
  },
  {
    question: "What are the different types of indexes in .NET?",
    answer: "Clustered index and Non-clustered index."
  },
  {
    question: "How many types of memories are there in .NET?",
    answer: "Stack memory and Heap Memory."
  },
  {
    question: "Which are the new features added in .NET framework 4.0?",
    answer: "Improved Application Compatibility, Dynamic Language Runtime, Managed Extensibility Framework, Parallel Programming, Improved Security, Networking Improvements, ASP.NET improvements, WPF 4, Entity Framework improvements, WCF and WF integration."
  },
  {
    question: "What are cookies?",
    answer: "A cookie is a small amount of data created by server on the client. An additional HTTP header is sent to the browser when a page is served."
  },
  {
    question: "What are the disadvantages of cookies?",
    answer: "Can store only string values, browser dependent, not secure, can store only small amount of data."
  },
  {
    question: "What is an IL?",
    answer: "IL stands for Intermediate Language (MSIL or CIL). All .NET source codes compile to IL, then JIT compiler converts IL to machine code at runtime or installation."
  },
  {
    question: "Which method is used to enforce garbage collection in .NET?",
    answer: "System.GC.Collect() method."
  },
  {
    question: "What are tuples in .NET?",
    answer: "A tuple is a fixed-size collection that can have elements of same or different data types. Size must be specified at declaration time."
  },
  {
    question: "How many elements can a tuple hold?",
    answer: "A tuple can hold up to 8 elements. For more than 8, the 8th element can be defined as another tuple. Tuples can be parameters or return types."
  },
  {
    question: "Which architecture does a DataSet follow?",
    answer: "DataSet follows disconnected data architecture."
  },
  {
    question: "How do you check whether a DataReader is closed or opened?",
    answer: "Using the 'IsClosed' property — returns true if DataReader is closed, otherwise false."
  },
  {
    question: "What are the basic requirements for connection pooling?",
    answer: "Multiple processes sharing same connection with identical parameters and security settings; connection string must be identical."
  },
  {
    question: "Which adapter should be used to get data from an Access database?",
    answer: "OleDbDataAdapter."
  },
  {
    question: "What are the parameters that control most of connection pooling behaviors?",
    answer: "Connect Timeout, Max Pool Size, Min Pool Size, Pooling."
  },
  {
    question: "What do you mean by AutoPostBack?",
    answer: "AutoPostBack is a property that automatically posts back when an event is raised. Set the AutoPostBack property of the control to True."
  },
  {
    question: "Which properties are used to bind a DataGridView control?",
    answer: "DataSource property and DataMember property."
  },
  {
    question: "What are the primary roles of Middleware in ASP.NET Core?",
    answer: "Middleware intercepts HTTP requests/responses, uses a pipeline customizable for processing requests, provides integrated functions (logging, compression, authentication), permits custom middleware, increases functionality without altering core architecture."
  },
  {
    question: "What is a delegate in the .NET Framework?",
    answer: "A delegate is a .NET object that can pass a function as a parameter and defines a method signature. A delegate refers to a method with a similar signature, encapsulates method reference. It can be used to create custom events."
  },
  {
    question: "What are the main differences between the 'ref' and 'out' functions in .NET Core?",
    answer: "Both pass arguments by reference. 'ref' passes values both into and out of the method; 'out' only passes values out. 'ref' parameter must be initialized before passing, while 'out' does not require initialization, but the method must assign a value before returning."
  }
];