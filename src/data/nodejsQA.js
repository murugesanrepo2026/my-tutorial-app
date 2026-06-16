// src/data/nodejsQA.js
export const nodejsQA = [
  {
    question: "What is Node.js?",
    answer: "Node.js is Server-side scripting used to build scalable programs. It is a web application framework built on Google Chrome's JavaScript Engine. It runs on Mac OS, Windows, and Linux with no changes, allowing execution of JavaScript code outside a browser."
  },
  {
    question: "Is Node.js free to use?",
    answer: "Yes. It is released under MIT license and is free to use."
  },
  {
    question: "Is Node a single threaded application?",
    answer: "Yes. Node is a single-threaded application with event looping."
  },
  {
    question: "What is the purpose of Node.js?",
    answer: "Real-time web applications, Network applications, Distributed systems, General purpose applications."
  },
  {
    question: "What are the advantages of Node.js?",
    answer: "Asynchronous and event-driven (non-blocking APIs), very fast (V8 engine), single-threaded but highly scalable, no buffering (outputs data in chunks)."
  },
  {
    question: "Explain Node.js web application architecture.",
    answer: "Four layers: Client Layer (browsers making HTTP requests), Server Layer (web server intercepting requests), Business Layer (application server processing logic, interacting with data layer), Data Layer (databases or data sources)."
  },
  {
    question: "What do you understand by the term I/O?",
    answer: "I/O stands for input and output. It accesses anything outside your application, transferring data to/from a medium such as physical device, network, or files within a system."
  },
  {
    question: "How many types of API functions are available in Node.js?",
    answer: "Two types: Asynchronous, Non-blocking functions and Synchronous, Blocking functions."
  },
  {
    question: "What do you understand by the first class function in JavaScript?",
    answer: "Functions treated like any other variable are called first-class functions. They can be passed as parameters to another function (callback) or return another function (higher-order function). Examples: map() and filter()."
  },
  {
    question: "What is the difference between JavaScript and Node.js?",
    answer: "JavaScript is a scripting language for client-side activity, runs in browsers (SpiderMonkey, V8, etc.). Node.js is an interpreter/runtime environment for JavaScript, runs outside the browser (V8 engine), used for server-side development, written in C, C++, and JavaScript."
  },
  {
    question: "Explain the working of Node.js.",
    answer: "1) Clients send requests to webserver. 2) Node.js adds requests to Event Queue. 3) Event Loop processes simple (non-blocking) requests and returns responses. 4) Complex (blocking) requests get a thread from Thread Pool, access external resources, then send response back via Event Loop."
  },
  {
    question: "How can you manage the packages in your Node.js project?",
    answer: "Using package installers like npm or yarn, with configuration files package.json and package-lock.json to maintain versions and environment-specific configurations."
  },
  {
    question: "Why is Node.js Single-threaded?",
    answer: "Node.js is single-threaded with event looping for async processing. This provides better performance and scalability under typical web loads compared to traditional thread-based implementations."
  },
  {
    question: "What do you understand by callback hell in Node.js?",
    answer: "Callback hell occurs when multiple asynchronous operations are executed one after another, creating deeply nested callbacks that are hard to read and maintain."
  },
  {
    question: "How is Node.js better than other most popular frameworks?",
    answer: "Node.js has non-blocking I/O and event-based model for simplicity and concurrent processing, runs on Chrome V8 engine (C++) for high performance, allows JavaScript on both frontend and backend, and has ample libraries."
  },
  {
    question: "In which types of applications is Node.js most frequently used?",
    answer: "Internet of Things, Real-time collaboration tools, Real-time chats, Complex SPAs, Streaming applications, Microservices architecture."
  },
  {
    question: "What are some commonly used timing features of Node.js?",
    answer: "setTimeout/clearTimeout (delays), setInterval/clearInterval (repeated execution), setImmediate/clearImmediate (end of event loop cycle), nextTick (beginning of next event loop cycle)."
  },
  {
    question: "What do you understand by the term fork in Node.js?",
    answer: "In Node.js, fork is used to create a new instance of the V8 engine to spawn child processes and run multiple workers to execute code."
  },
  {
    question: "Which is the best tool we can use to assure consistent code style in Node.js?",
    answer: "ESLint is one of the best tools to use with any IDE to ensure consistent coding style and maintain the codebase."
  },
  {
    question: "What is the main difference between front-end and back-end development?",
    answer: "Front-end (client-side): users see and interact; technologies: HTML, CSS, JavaScript, Angular, React. Back-end (server-side): behind the scenes, communicates with database; technologies: Java, PHP, Python, Node.js, Express, Django."
  },
  {
    question: "Give an example to demonstrate how can we use async await in Node.js?",
    answer: "Example: async function requestWithRetry(url) { for (let i = 0; i <= MAX_RETRIES; i++) { try { return await request(url); } catch (err) { await wait(Math.pow(2, i)); } } }"
  },
  {
    question: "What are the modules in Node.js? Which are the different modules used in Node.js?",
    answer: "Modules are like JavaScript libraries. Use require() to include them. Core modules: HTTP, util, url, fs, stream, query string, zlib."
  },
  {
    question: "What are buffers in Node.js?",
    answer: "Buffers are temporary memory used by streams to hold data until consumed. They represent fixed-size memory chunks allocated outside the V8 engine, implemented by Buffer class, support encodings like ASCII, utf-8."
  },
  {
    question: "What is error-first callback?",
    answer: "Error-first callbacks pass errors and data. The first argument is always an error (null if no error), additional arguments pass data. Example: `fs.readFile(filePath, (err, data) => { if (err) handle error; else use data; });`"
  },
  {
    question: "What is an asynchronous API?",
    answer: "Asynchronous APIs are non-blocking. Node.js server moves to the next API after calling, without waiting for the previous to return data. A notification mechanism responds later via events."
  },
  {
    question: "How can you avoid callbacks?",
    answer: "Use modularization (break callbacks into independent functions), use promises, or use yield with Generators and Promises."
  },
  {
    question: "Does Node.js provide Debugger?",
    answer: "Yes, Node.js provides a simple TCP-based protocol and built-in debugging client. Use `node debug script.js` to debug."
  },
  {
    question: "What is a control flow function?",
    answer: "A control flow function is a generic piece of code that runs between several asynchronous function calls, controlling order of execution, collecting data, limiting concurrency, and calling the next step."
  },
  {
    question: "How 'Control Flow' controls the functions calls?",
    answer: "It controls the order of execution, collects data, limits concurrency, and calls the next step in a program."
  },
  {
    question: "Is it possible to access DOM in Node?",
    answer: "No, it is not possible to access DOM in Node.js."
  },
  {
    question: "What types of tasks can be done asynchronously using the event loop?",
    answer: "I/O operations, heavy computation, anything requiring blocking."
  },
  {
    question: "What is REPL in Node.js?",
    answer: "REPL stands for Read Eval Print Loop. It is a computer environment like a console where you can enter commands and receive outputs, useful for writing and debugging code. Node.js incorporates REPL."
  },
  {
    question: "Explain the tasks of terms used in Node REPL.",
    answer: "Read: reads user input and parses into JavaScript data structure. Eval: evaluates the data structure. Print: prints the result. Loop: loops until user terminates."
  },
  {
    question: "Is it possible to evaluate simple expressions using Node REPL?",
    answer: "Yes. You can evaluate simple expressions using Node REPL."
  },
  {
    question: "What is the use of the underscore variable in REPL?",
    answer: "In REPL, the underscore variable is used to get the last result."
  },
  {
    question: "Does Node.js supports cryptography?",
    answer: "Yes, Node.js Crypto module supports cryptography with wrappers for open SSL's hash, HMAC, cipher, decipher, sign, and verify functions."
  },
  {
    question: "What is npm? What is the main functionality of npm?",
    answer: "npm stands for Node Package Manager. Functionalities: online repositories for Node.js packages, and command line utility to install packages, manage versions and dependencies."
  },
  {
    question: "What tools can be used to assure a consistent style in Node.js?",
    answer: "JSLint, JSHint, ESLint, JSCS."
  },
  {
    question: "What is the difference between operational and programmer errors?",
    answer: "Operational errors are not bugs but system problems (request timeout, hardware failure). Programmer errors are actual bugs in the application."
  },
  {
    question: "What is the difference between the global installation of dependencies and local installation of dependencies?",
    answer: "Global installation stores in /npm directory, cannot be imported via require(), uses -g flag. Local installation stores in node_modules folder in the app directory, accessible via require()."
  },
  {
    question: "What is the use of a buffer class in Node.js?",
    answer: "Buffer class stores raw data similar to an array of integers, corresponding to raw memory allocation outside V8 heap. Used because pure JavaScript is not compatible with binary data when handling TCP streams or file system."
  },
  {
    question: "What is the role of assert in Node.js?",
    answer: "Assert is a way to write tests. It provides simple assertion tests that can be used to test invariants. It gives no feedback unless a test fails."
  },
  {
    question: "What are the streams in Node.js?",
    answer: "Streams are objects to read data from a source and write to a destination. Types: Readable (read operations), Writable (write operations), Duplex (read and write), Transform (duplex where output computes from input)."
  },
  {
    question: "What is event-driven programming in Node.js?",
    answer: "Event-driven programming means Node starts its server, initializes variables and functions, then waits for events to occur. It is why Node.js is fast compared to other technologies."
  },
  {
    question: "What is the difference between events and callbacks in Node.js?",
    answer: "Callbacks are called when an async function returns its result. Event handling works on the observer pattern: when an event is fired, its listener function executes. Node.js has EventEmitter class to bind events and listeners."
  },
  {
    question: "What is the Punycode in Node.js?",
    answer: "Punycode is an encoding syntax to convert Unicode (UTF-8) strings to ASCII. It is bundled with Node.js v0.6.2+; use require('punycode') to access it."
  },
  {
    question: "What does Node.js TTY module contains?",
    answer: "The TTY module contains tty.ReadStream and tty.WriteStream classes. Use `var tty = require('tty');` to access it. Usually not needed directly."
  },
  {
    question: "What are the key differences between Angular and Node.js?",
    answer: "Angular is a front-end framework (TypeScript) for SPAs, based on MVC. Node.js is a server-side runtime (C, C++, JavaScript) for scalable networking apps, single-threaded, event-driven. Angular easier to start, Node.js requires installation."
  },
  {
    question: "What are the main differences between operational and programmer errors?",
    answer: "Operational errors are system problems (timeout, hardware failure). Programmer errors are actual bugs in the application code."
  },
  {
    question: "What do you understand by an EventEmitter in Node.js?",
    answer: "EventEmitter is a class that includes all objects capable of emitting events. Use eventEmitter.on() to attach named events. When an event is emitted, attached functions are invoked synchronously."
  }
];