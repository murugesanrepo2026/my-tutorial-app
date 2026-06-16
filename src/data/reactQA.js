// src/data/reactQA.js
export const reactQA = [
  {
    question: "What is React?",
    answer: "React is a declarative, efficient, flexible open source front-end JavaScript library developed by Facebook in 2011. It follows component-based approach for building reusable UI components, especially for single page applications. Created by Jordan Walke."
  },
  {
    question: "What are the features of React?",
    answer: "JSX, Components, One-way Data Binding, Virtual DOM, Simplicity, Performance."
  },
  {
    question: "What are the most crucial advantages of using React?",
    answer: "Easy to learn and use, follows MVC architecture (View part), uses Virtual DOM for efficiency, easy to create dynamic web apps with JSX, SEO-friendly (server-side rendering), reusable components, handy tools (React DevTools), rich ecosystem of libraries, easy testing."
  },
  {
    question: "What are the biggest limitations of React?",
    answer: "React is just a library (not a complete framework), huge library takes time to understand, difficult for new programmers, JSX may be a barrier and makes coding complex."
  },
  {
    question: "What is JSX?",
    answer: "JSX (JavaScript XML) is a React extension that allows writing JavaScript code that looks similar to HTML. It makes HTML easy to understand and boosts performance. JSX tags have tag names, attributes, and children, and are transformed into JavaScript by transpilers like Babel."
  },
  {
    question: "Why can't browsers read JSX?",
    answer: "Browsers can only understand JavaScript objects. JSX is not a regular JavaScript object, so we need to transform it using transpilers like Babel into JavaScript before passing to the browser."
  },
  {
    question: "Why we use JSX?",
    answer: "It is faster than regular JavaScript due to optimizations, type-safe (errors found at compilation), easier to create templates, and allows using components that combine markup and logic."
  },
  {
    question: "What do you understand by Virtual DOM?",
    answer: "Virtual DOM is a lightweight JavaScript object that is an in-memory representation of the real DOM. It is an intermediary between the render function and displaying elements on screen, similar to a node tree of components, attributes, and content."
  },
  {
    question: "Explain the working of Virtual DOM.",
    answer: "1) When data changes, the entire UI is re-rendered in Virtual DOM. 2) The difference between previous and new Virtual DOM is calculated. 3) The real DOM is updated with only the changed parts."
  },
  {
    question: "How is React different from Angular?",
    answer: "Angular (Google, MVC framework, regular DOM, bi-directional binding, client-side rendering, slower). React (Facebook, JSX, virtual DOM, uni-directional data flow, server-side rendering, faster, uses Flux architecture)."
  },
  {
    question: "How React's ES6 syntax is different from ES5 syntax?",
    answer: "Differences: `import` vs `require`, `export default` vs `module.exports`, class components vs `React.createClass`, props and state defined in constructor vs `getInitialState` and `propTypes` as class properties."
  },
  {
    question: "What is the difference between ReactJS and React Native?",
    answer: "ReactJS (2013, web apps, runs on all platforms, uses CSS/JavaScript for animations, React-router for navigation, HTML tags, Virtual DOM). React Native (2015, mobile apps, not platform independent, built-in animation libraries, built-in Navigator, no HTML tags, uses native APIs to render code)."
  },
  {
    question: "What is the difference between Real DOM and Virtual DOM?",
    answer: "Real DOM: slower, updates slower, can directly update HTML, expensive DOM manipulation, memory wastage. Virtual DOM: faster, updates faster, cannot directly update HTML, easy DOM manipulation, no memory wastage."
  },
  {
    question: "What do you understand from 'In React, everything is a component.'?",
    answer: "Components are the building blocks of React applications. They divide the UI into small, independent, reusable pieces of code. Each component renders independently without affecting the rest of the UI."
  },
  {
    question: "Explain the purpose of render() in React.",
    answer: "render() is mandatory for each React component. It returns the HTML to display in the component. Multiple HTML elements must be grouped inside a single parent tag. It returns the same result each time it's invoked."
  },
  {
    question: "How can you embed two or more components into one?",
    answer: "Define multiple components in the same file and use them within a parent component. Example: `class App extends React.Component { render() { return <h1>Hello World</h1> } }` and another component similarly, then export the parent."
  },
  {
    question: "What is Props?",
    answer: "Props (Properties) are read-only inputs to components. They store attribute values similar to HTML attributes and provide a way to pass data from parent to child components. Props are immutable."
  },
  {
    question: "What is a State in React?",
    answer: "State is an updatable structure that holds data and information about the component. It changes over time in response to user actions or system events. It determines component behavior and rendering. State must be kept as simple as possible."
  },
  {
    question: "Differentiate between States and Props.",
    answer: "Props are read-only, immutable, passed from parent to child, cannot be accessed by child components (passed down), make components reusable, external. State is mutable (can be asynchronous), holds internal component information, cannot be accessed by child components directly, used for dynamic rendering, internal."
  },
  {
    question: "How can you update the State of a component?",
    answer: "Using `this.setState()` method. It does not always replace the state immediately but adds changes to the original state. It is the primary method to update UI in response to event handlers and server responses."
  },
  {
    question: "Differentiate between stateless and stateful components.",
    answer: "Stateless: no state management, no knowledge of past/future changes, functional component, simple, no lifecycle methods, cannot be reused. Stateful: can hold state, knows state changes, class component, complex, can use all lifecycle methods, can be reused."
  },
  {
    question: "What is arrow function in React? How is it used?",
    answer: "Arrow functions are ES6 features. They do not require binding `this` because `this` is lexically scoped. Used as event handlers: `<MyInput onChange={(e) => this.handleOnChange(e)} />`"
  },
  {
    question: "What is an event in React?",
    answer: "An event is an action triggered by user or system (click, key press, load, resize). React uses Synthetic Events, a cross-browser wrapper. Differences: events are camelCase, function passed as handler instead of string."
  },
  {
    question: "How do you create an event in React?",
    answer: "Define a method in the component and bind it in constructor or use arrow function. Then attach it to an element using event prop like `onClick={this.show}`. Example: `<div onClick={this.show}>Click Me</div>`"
  },
  {
    question: "What are synthetic events in React?",
    answer: "Synthetic events are cross-browser wrappers around browser's native events, combining behavior into one API including `stopPropagation()` and `preventDefault()`. Example: `function handleClick(e) { e.preventDefault(); }`"
  },
  {
    question: "What is the difference between controlled and uncontrolled components?",
    answer: "Controlled: does not maintain internal state, data controlled by parent, accepts current value as prop, allows validation control, better control over form elements. Uncontrolled: maintains internal state, data controlled by DOM itself, uses ref for current values, limited control."
  },
  {
    question: "Explain the Lists in React.",
    answer: "Lists display data in an ordered format. They are created using the `map()` function to iterate over an array and return JSX elements. Each list item should have a unique `key` prop."
  },
  {
    question: "What is the significance of keys in React?",
    answer: "Keys are unique identifiers used to identify which items have changed, updated, or deleted in lists. They help determine which components need re-rendering instead of re-rendering the entire set, improving performance."
  },
  {
    question: "How are forms created in React?",
    answer: "Forms use stateful, reactive approach. Form data is handled by the component's state, updated via `setState()`, and a JavaScript function handles submission. Example: controlled components with `value` and `onChange`."
  },
  {
    question: "What are the different phases of React component's lifecycle?",
    answer: "Initial Phase (birth, default props and state), Mounting Phase (instance created and added to DOM), Updating Phase (new props or state change, re-rendering), Unmounting Phase (component destroyed and removed from DOM)."
  },
  {
    question: "Explain the lifecycle methods of React components in detail.",
    answer: "`getInitialState()` (default state), `componentWillMount()` (before render), `componentDidMount()` (after render), `componentWillReceiveProps()` (when new props received), `shouldComponentUpdate()` (decides re-render), `componentWillUpdate()` (before update), `componentDidUpdate()` (after update), `componentWillUnmount()` (before unmount)."
  },
  {
    question: "What are Pure Components?",
    answer: "Pure Components (React 15.3) differ from React.Component in `shouldComponentUpdate()`. React.Component returns true by default; React.PureComponent compares changes in state/props to decide re-rendering. It simplifies code and improves performance."
  },
  {
    question: "What are Higher Order Components (HOC)?",
    answer: "HOC is an advanced technique for reusing component logic. It is a function that takes a component and returns a new component. It is a pattern emerging from React's compositional nature, not part of React API."
  },
  {
    question: "What can you do with HOC?",
    answer: "Code Reusability, Props manipulation, State manipulation, Render highjacking."
  },
  {
    question: "What is the difference between Element and Component?",
    answer: "Element: plain JS object describing component state and DOM node, immutable, no methods, example `React.createElement(...)`. Component: class or function that accepts input and returns React element, mutable, can contain state/props and lifecycle methods, example `function Button() { return ... }`"
  },
  {
    question: "How to write comments in React?",
    answer: "Single line: `{/* Single Line comment */}`. Multiline: `{/* Multi line comment */}`. Comments are written inside curly braces."
  },
  {
    question: "Why is it necessary to start component names with a capital letter?",
    answer: "In JSX, lower case tag names are considered HTML tags. Starting with a capital letter tells JSX it's a React component; otherwise it throws an unrecognized tag error."
  },
  {
    question: "What are fragments?",
    answer: "Fragments (React 16.2) allow components to return multiple elements without adding an extra DOM node. Syntax: `<React.Fragment>...</React.Fragment>` or shorthand `<>...</>`."
  },
  {
    question: "Why are fragments better than container divs?",
    answer: "Fragments are faster, consume less memory (no extra DOM node), don't break CSS Grid/Flexbox layouts, and keep the DOM Inspector less cluttered."
  },
  {
    question: "How to apply validation on props in React?",
    answer: "Using `propTypes` property on the component. Define `Component.propTypes = { ... }` to validate data types. Set default props with `Component.defaultProps = { ... }`. Invalid types show warnings in console."
  }
];