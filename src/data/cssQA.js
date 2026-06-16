// src/data/cssQA.js
export const cssQA = [
  {
    question: "What is CSS?",
    answer: "CSS stands for Cascading Style Sheet. It is a popular styling language used with HTML to design websites. It can also be used with any XML documents including plain XML, SVG, and XUL."
  },
  {
    question: "What is the origin of CSS?",
    answer: "SGML (Standard Generalized Markup Language) is the origin of CSS. It is a language that defines markup languages."
  },
  {
    question: "What are the different variations of CSS?",
    answer: "CSS1, CSS2, CSS2.1, CSS3, CSS4."
  },
  {
    question: "How can you integrate CSS on a web page?",
    answer: "Three methods: Inline method (insert style sheets in HTML document), Embedded/Internal method (add unique style to a single document), Linked/Imported/External method (make changes on multiple pages)."
  },
  {
    question: "What are the advantages of CSS?",
    answer: "Bandwidth, Site-wide consistency, Page reformatting, Accessibility, Content separated from presentation."
  },
  {
    question: "What are the limitations of CSS?",
    answer: "Ascending by selectors is not possible, limitations of vertical control, no expressions, no column declaration, pseudo-class not controlled by dynamic behavior, rules/styles targeting specific text not possible."
  },
  {
    question: "What are the CSS frameworks?",
    answer: "Bootstrap, Foundation, Semantic UI, Gumby, Ulkit."
  },
  {
    question: "Why background and color are the separate properties if they should always be set together?",
    answer: "It enhances legibility of style sheets. The background property is complex, and combining with color would increase complexity. Also, color is an inherited property while background is not, which could cause confusion."
  },
  {
    question: "What is Embedded Style Sheet?",
    answer: "An Embedded style sheet is a CSS style specification method used with HTML. You can embed the entire stylesheet in an HTML document using the STYLE element. Example: `<style>body { background-color: linen; } h1 { color: red; margin-left: 80px; }</style>`"
  },
  {
    question: "What are the advantages of Embedded Style Sheets?",
    answer: "You can create classes for use on multiple tag types, use selector and grouping methods to apply styles in complex situations, no extra download required to import information."
  },
  {
    question: "What is a CSS selector?",
    answer: "A string that identifies the elements to which a particular declaration applies. It is a link between HTML document and style sheet. Types: Element Selector, ID Selector, Class Selector, Universal Selector, Group Selector."
  },
  {
    question: "Name some CSS style components.",
    answer: "Selector, Property, Value."
  },
  {
    question: "What is the use of CSS Opacity?",
    answer: "The opacity property specifies the transparency of an element (clarity of the image). Example: `img.trans { opacity: 0.4; filter: alpha(opacity=40); }`"
  },
  {
    question: "Explain universal selector.",
    answer: "The universal selector (*) matches any element type. Example: `* { color: green; font-size: 20px; }`"
  },
  {
    question: "Which command is used for the selection of all the elements of a paragraph?",
    answer: "The `p[lang]` command is used for selecting all the elements of a paragraph."
  },
  {
    question: "What is the use of % unit?",
    answer: "It is used for defining percentage values."
  },
  {
    question: "Name the property used to specify the background color of an element.",
    answer: "The `background-color` property. Example: `h2, p { background-color: #b0d4de; }`"
  },
  {
    question: "Name the property for controlling the image repetition of the background.",
    answer: "The `background-repeat` property repeats the background image horizontally and vertically (or only horizontally/vertically)."
  },
  {
    question: "Name the property for controlling the image position in the background.",
    answer: "The `background-position` property defines the initial position (center, top, bottom, left, right). Example: `background-position: center;`"
  },
  {
    question: "Name the property for controlling the image scroll in the background.",
    answer: "The `background-attachment` property specifies if background image is fixed or scrolls with the page. Example: `background-attachment: fixed;`"
  },
  {
    question: "What is the use of ruleset?",
    answer: "Ruleset identifies that selectors can be attached with other selectors. It has two parts: Selector (HTML element to style) and Declaration Block (one or more declarations separated by semicolon)."
  },
  {
    question: "What is the difference between class selectors and id selectors?",
    answer: "Class selectors apply to an overall block (multiple elements) using `.classname`. ID selectors target a single unique element using `#idname`."
  },
  {
    question: "What are the advantages of External Style Sheets?",
    answer: "Create classes for reusing in many documents, control styles of multiple documents from one file, use selectors and grouping methods in complex situations."
  },
  {
    question: "What is the difference between inline, embedded and external style sheets?",
    answer: "Inline: styles a small piece of code using `style` attribute. Embedded: placed between `<style>` tags in `<head>`. External: linked via `<link>` to a .css file, applies to all pages."
  },
  {
    question: "What is RWD?",
    answer: "RWD stands for Responsive Web Design. It displays the designed page perfectly on every screen size and device (mobile, tablet, desktop, laptop) without creating separate pages."
  },
  {
    question: "What are the benefits of CSS sprites?",
    answer: "CSS sprites combine various small images into one image, reducing the number of HTTP requests and loading time."
  },
  {
    question: "What is the difference between logical tags and physical tags?",
    answer: "Physical tags are presentational markup. Logical tags focus on content (older, concentrate on meaning rather than appearance)."
  },
  {
    question: "What is the CSS Box model and what are its elements?",
    answer: "The CSS box model defines design and layout. Elements: Margin (transparent area around border), Border (area around padding), Padding (transparent area around content), Content (text, images, etc.)."
  },
  {
    question: "What is the float property of CSS?",
    answer: "The float property moves an image to the right or left with text wrapping around it. It doesn't change property of elements before it."
  },
  {
    question: "How to restore the default property value using CSS?",
    answer: "There's no easy way to restore browser defaults. The closest is `initial` property value, which restores default CSS values (not browser's default styles)."
  },
  {
    question: "What is the purpose of the z-index and how is it used?",
    answer: "z-index specifies stack order of overlapping positioned elements. Default is 0. Values: Auto (stack order equal to parent), Number (order), Initial (0), Inherit (inherit from parent). Higher z-index stacks above lower."
  },
  {
    question: "Explain the difference between visibility: hidden and display: none.",
    answer: "`visibility: hidden` hides the element but occupies space (affects layout). `display: none` hides the element and does NOT occupy space (no layout effect)."
  },
  {
    question: "What do you understand by W3C?",
    answer: "W3C stands for World Wide Web Consortium. Its purpose is to deliver information of the World Wide Web and develop rules/guidelines for the Web."
  },
  {
    question: "What is tweening?",
    answer: "Tweening is generating intermediate frames between two images, giving the impression of smooth evolution. In CSS3, transforms (matrix, translate, rotate, scale) can achieve tweening."
  },
  {
    question: "What is the difference between CSS2 and CSS3?",
    answer: "CSS3 is divided into modules (supported by many browsers). CSS3 contains new General Sibling Combinators for matching sibling elements."
  }
];