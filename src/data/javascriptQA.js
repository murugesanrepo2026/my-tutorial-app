// src/data/javascriptQA.js
export const javascriptQA = [
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a scripting language. It is different from Java language. It is object-based, lightweight, cross-platform translated language. It is widely used for client-side validation. The JavaScript Translator (embedded in the browser) is responsible for translating JavaScript code for the web browser."
  },
  {
    question: "List some features of JavaScript.",
    answer: "Lightweight, Interpreted programming language, Good for network-centric applications, Complementary to Java, Complementary to HTML, Open source, Cross-platform."
  },
  {
    question: "Who developed JavaScript, and what was the first name of JavaScript?",
    answer: "JavaScript was developed by Brendan Eich (Netscape programmer) in September 1995. The first name was Mocha, then Live Script, later JavaScript."
  },
  {
    question: "List some of the advantages of JavaScript.",
    answer: "Server interaction is less, immediate feedback to visitors, high interactivity, richer interfaces."
  },
  {
    question: "List some of the disadvantages of JavaScript.",
    answer: "No support for multithreading, no support for multiprocessing, reading/writing files not allowed, no support for networking applications."
  },
  {
    question: "Define a named function in JavaScript.",
    answer: "A function that has a name at the time of definition. Example: `function msg() { document.writeln('Named Function'); }`"
  },
  {
    question: "Name the types of functions.",
    answer: "Named functions (have a name) and Anonymous functions (no name, declared dynamically at runtime)."
  },
  {
    question: "Define anonymous function.",
    answer: "A function with no name, declared dynamically at runtime using the function operator. Example: `var display = function() { alert('Anonymous Function'); }`"
  },
  {
    question: "Can an anonymous function be assigned to a variable?",
    answer: "Yes, you can assign an anonymous function to a variable."
  },
  {
    question: "In JavaScript what is an argument object?",
    answer: "The variables of JavaScript represent the arguments that are passed to a function. The arguments object is an array-like object accessible inside functions."
  },
  {
    question: "Define closure.",
    answer: "In JavaScript, closures occur when a variable defined outside the scope is accessed from an inner scope. Example: `var num = 10; function sum() { document.writeln(num+num); }`"
  },
  {
    question: "If we want to return the character from a specific index which method is used?",
    answer: "The `charAt()` method. Example: `var str='tpointtech'; str.charAt(4);` returns character at index 4."
  },
  {
    question: "What is the difference between JavaScript and JScript?",
    answer: "Netscape provided JavaScript. Microsoft changed the name to JScript to avoid trademark issues. They are essentially the same."
  },
  {
    question: "How to write a hello world example of JavaScript?",
    answer: "`<script type='text/javascript'> document.write('JavaScript Hello World!'); </script>` inside the body tag."
  },
  {
    question: "What are the key differences between Java and JavaScript?",
    answer: "Java is a complete, strongly typed, OOP language for backend; requires compilation; uses classes; supports multithreading. JavaScript is lightweight, weakly typed, client-side scripting; interpreted; prototype-based; doesn't support multithreading; used in browsers (and now server via Node.js)."
  },
  {
    question: "How to use external JavaScript file?",
    answer: "`<script type='text/javascript' src='message.js'></script>` inside the head tag."
  },
  {
    question: "Is JavaScript case sensitive language?",
    answer: "Yes, JavaScript is case sensitive. For example, `var` and `Var` are different."
  },
  {
    question: "What is BOM?",
    answer: "BOM stands for Browser Object Model. It provides interaction with the browser. The default object is window, providing properties like document, history, screen, navigator, location, innerHeight, innerWidth."
  },
  {
    question: "What is DOM? What is the use of document object?",
    answer: "DOM (Document Object Model) represents the HTML document. The document object is used to access and change the content of HTML."
  },
  {
    question: "What is the use of window object?",
    answer: "The window object is created automatically by the browser, representing a browser window. It is used to display popup dialogs: alert(), confirm(), prompt(), open(), close(), setTimeout()."
  },
  {
    question: "What is the use of history object?",
    answer: "The history object navigates through browser history: `history.back()` (previous page), `history.forward()` (next page), `history.go(number)` (positive for forward, negative for backward)."
  },
  {
    question: "How to write a comment in JavaScript?",
    answer: "Single-line comment: `// comment`. Multi-line comment: `/* comment */`."
  },
  {
    question: "How to create a function in JavaScript?",
    answer: "`function function_name() { // function body }`"
  },
  {
    question: "What are the different data types present in JavaScript?",
    answer: "Primitive: String, Number, Boolean, BigInt, Undefined, Null, Symbol. Non-primitive: Object, Array."
  },
  {
    question: "What is the difference between == and ===?",
    answer: "`==` checks equality only (type coercion allowed). `===` checks equality and data type (strict equality)."
  },
  {
    question: "How to write HTML code dynamically using JavaScript?",
    answer: "Using `innerHTML` property: `document.getElementById('mylocation').innerHTML='<h2>Heading</h2>';`"
  },
  {
    question: "How to write normal text code using JavaScript dynamically?",
    answer: "Using `innerText` property: `document.getElementById('mylocation').innerText='This is text';`"
  },
  {
    question: "How to create objects in JavaScript?",
    answer: "Three ways: By object literal (`emp={id:102,name:'Rahul'}`), by instance of Object (`var emp = new Object();`), by Object Constructor."
  },
  {
    question: "How to create an array in JavaScript?",
    answer: "Three ways: By array literal (`var emp=['Shyam','Vimal'];`), by instance of Array (`var emp = new Array();`), by Array constructor."
  },
  {
    question: "What does the isNaN() function?",
    answer: "`isNaN()` returns true if the variable value is not a number. Example: `isNaN('1000F')` returns true, `isNaN('1000')` returns false."
  },
  {
    question: "What is the output of 10+20+'30' in JavaScript?",
    answer: "3030. 10+20 = 30, then 30 + '30' = '3030' (string concatenation)."
  },
  {
    question: "What is the output of '10'+20+30 in JavaScript?",
    answer: "102030. After a string, all '+' become string concatenation operators."
  },
  {
    question: "Difference between Client side JavaScript and Server side JavaScript?",
    answer: "Client-side JS runs in the browser, embedded in HTML. Server-side JS runs on the server, deployed after compilation."
  },
  {
    question: "In which location cookies are stored on the hard disk?",
    answer: "Depends on OS and browser. Netscape: `c:\\Program Files\\Netscape\\Users\\username\\cookies.txt`. IE: `c:\\Windows\\Cookies\\[email protected]`"
  },
  {
    question: "What's the difference between event.preventDefault() and event.stopPropagation()?",
    answer: "`preventDefault()` prevents the default behavior of an element (e.g., form submission, link navigation). `stopPropagation()` stops the event from bubbling/capturing to parent elements."
  },
  {
    question: "What is the real name of JavaScript?",
    answer: "Original name was Mocha, then LiveScript, then JavaScript in December 1995."
  },
  {
    question: "How can you check if the event.preventDefault() method was used in an element?",
    answer: "Use `event.defaultPrevented` property, which returns a Boolean indicating if `preventDefault()` was called."
  },
  {
    question: "What is the difference between undefined value and null value?",
    answer: "Undefined means a variable has been declared but not assigned a value. Null is an assignment value representing no value (explicitly set)."
  },
  {
    question: "How to set the cursor to wait in JavaScript?",
    answer: "`window.document.body.style.cursor = 'wait';`"
  },
  {
    question: "What is this [[[]]]?",
    answer: "A three-dimensional array. Example: `var myArray = [[[]]];`"
  },
  {
    question: "Are Java and JavaScript same?",
    answer: "No, they are completely different languages. Java is a robust, OOP language; JavaScript is a client-side scripting language."
  },
  {
    question: "What is negative infinity?",
    answer: "Negative Infinity is a number derived by dividing a negative number by zero. Example: `var num=-5; num/0` returns `-Infinity`."
  },
  {
    question: "What is the difference between View state and Session state?",
    answer: "View state is specific to a page in a session. Session state is specific to a user/browser and accessible across all pages in the web application."
  },
  {
    question: "What are the pop-up boxes available in JavaScript?",
    answer: "Alert Box (`alert()`), Confirm Box (`confirm()`), Prompt Box (`prompt()`)."
  },
  {
    question: "How can we detect OS of the client machine using JavaScript?",
    answer: "Use `navigator.appVersion` string to detect the operating system."
  },
  {
    question: "How to submit a form using JavaScript by clicking a link?",
    answer: "Use a link with `href='javascript: submitform()'` and a function that calls `document.myform.submit()`."
  },
  {
    question: "Is JavaScript faster than ASP script?",
    answer: "Yes, because JavaScript doesn't require web server support for execution (runs on client-side)."
  },
  {
    question: "How to change the background color of HTML document using JavaScript?",
    answer: "`document.body.bgColor = 'pink';`"
  },
  {
    question: "How to handle exceptions in JavaScript?",
    answer: "Using try/catch/finally/throw blocks: `try { ... } catch(error) { ... } finally { ... }`"
  },
  {
    question: "How to validate a form in JavaScript?",
    answer: "Use an `onsubmit` event handler that calls a validation function. The function checks inputs and returns false if invalid, preventing submission."
  }
];