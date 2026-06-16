// src/data/htmlQA.js
export const htmlQA = [
  {
    question: "What is HTML?",
    answer: "HTML stands for Hyper Text Markup Language. It is a language of the World Wide Web, a standard text formatting language used to create and display pages on the Web. It makes text more interactive and dynamic, allowing conversion of text into images, tables, links."
  },
  {
    question: "What are Tags?",
    answer: "HTML tags are composed of an opening tag, content, and an ending tag. Some tags are unclosed. HTML documents contain content and tags. When a browser reads an HTML document, it reads from top to bottom and left to right. Each HTML tag has different properties. Syntax: `<tag> content </tag>`."
  },
  {
    question: "Do all HTML tags have an end tag?",
    answer: "No. Some HTML tags don't need a closing tag. For example: `<img>` tag, `<br>` tag."
  },
  {
    question: "What is formatting in HTML?",
    answer: "HTML formatting is the process of formatting text for better look and feel. It uses different tags to make text bold, italicized, underlined."
  },
  {
    question: "How many types of heading does an HTML contain?",
    answer: "HTML contains six types of headings defined with `<h1>` to `<h6>` tags. `<h1>` is the largest heading tag and `<h6>` is the smallest."
  },
  {
    question: "How to create a hyperlink in HTML?",
    answer: "Use the anchor tag `<a href='URL'>Link Text</a>`. Links can appear as: unvisited (blue, underlined), visited (purple, underlined), or active (red, underlined)."
  },
  {
    question: "Which HTML tag is used to display the data in the tabular form?",
    answer: "The `<table>` tag is used. Related tags: `<tr>` (row), `<th>` (header cell), `<td>` (cell), `<caption>`, `<colgroup>`, `<col>`, `<tbody>`, `<thead>`, `<tfoot>`."
  },
  {
    question: "What are some common lists that are used when designing a page?",
    answer: "Ordered list (`<ol>`) - numbered format. Unordered list (`<ul>`) - bulleted format. Definition list (`<dl>`, `<dt>`, `<dd>`) - definition form like a dictionary."
  },
  {
    question: "What is the difference between HTML elements and tags?",
    answer: "HTML elements communicate to the browser to render text. When elements are enclosed by brackets `<>`, they form HTML tags. Most tags come in pairs and surround content."
  },
  {
    question: "What is semantic HTML?",
    answer: "Semantic HTML is a coding style that uses HTML markup to reinforce the meaning of content. For example, use `<strong>` instead of `<b>` for bold, and `<em>` instead of `<i>` for italic."
  },
  {
    question: "What is an image map?",
    answer: "An image map allows linking many different web pages using a single image. It is represented by the `<map>` tag, and you can define shapes in the image to make part of image mapping."
  },
  {
    question: "How to insert a copyright symbol on a browser page?",
    answer: "Use `&copy;` or `&#169;` in an HTML file."
  },
  {
    question: "How to create a nested webpage in HTML?",
    answer: "Use the `<iframe>` tag to display a nested webpage (a webpage within a webpage). Example: `<iframe src='https://example.com' height='300' width='400'></iframe>`."
  },
  {
    question: "How do you keep list elements straight in an HTML file?",
    answer: "You can keep list elements straight by using indents."
  },
  {
    question: "Does a hyperlink only apply to text?",
    answer: "No, hyperlinks can be applied to both text and images. The HTML anchor tag `<a>` defines a hyperlink."
  },
  {
    question: "What is a style sheet?",
    answer: "A style sheet is used to build a consistent, transportable, and well-designed style template that can be applied to several different web pages. It describes the look and formatting of a document written in markup language."
  },
  {
    question: "Can you create a multi-colored text on a web page?",
    answer: "Yes. Use `<font color='color'>` for specific texts you want to color."
  },
  {
    question: "Is it possible to change the color of the bullet?",
    answer: "The color of the bullet is always the color of the first text of the list. To change bullet color, you must change the color of the text."
  },
  {
    question: "Explain the layout of HTML.",
    answer: "HTML layout defines how a web page is arranged. HTML5 elements used: `<header>` (header), `<nav>` (navigation links), `<section>` (section in document), `<article>` (self-contained article), `<aside>` (sidebar content), `<footer>` (footer)."
  },
  {
    question: "What is a marquee?",
    answer: "A marquee is used to put scrolling text or images on a web page. It scrolls automatically up, down, left, or right. Content is placed within `<marquee>...</marquee>` tags."
  },
  {
    question: "How many tags can be used to separate a section of texts?",
    answer: "Three tags: `<br>` (line break), `<p>` (new paragraph), `<blockquote>` (large quoted section)."
  },
  {
    question: "How to make a picture a background image of a web page?",
    answer: "Put the following tag after the `</head>` tag: `<body background='image.gif'>`. Replace 'image.gif' with your image file name."
  },
  {
    question: "What are empty elements?",
    answer: "HTML elements with no content are called empty elements. Examples: `<br>`, `<hr>`."
  },
  {
    question: "What is the use of a span tag? Give one example.",
    answer: "The `<span>` tag is used for adding color to text, adding background to text, or highlighting text. Example: `<span style='color:#ffffff;'>In this page we use span.</span>`"
  },
  {
    question: "What is the use of an iframe tag?",
    answer: "An `<iframe>` is used to display a web page within a web page. Syntax: `<iframe src='URL'></iframe>`. Can also target a link: `<iframe src='http://example.com' name='iframe_a'></iframe>`."
  },
  {
    question: "What are the entities in HTML?",
    answer: "HTML character entities are used as replacements for reserved characters in HTML and for characters not present on your keyboard. Some characters are reserved in HTML and must be replaced."
  },
  {
    question: "Why is a URL encoded in HTML?",
    answer: "URLs are encoded to convert non-ASCII characters into a format that can be used over the Internet because URLs are sent using only the ASCII character set. Non-ASCII characters are replaced with '%' followed by hexadecimal digits."
  },
  {
    question: "Does a <!DOCTYPE html> tag is a HTML tag?",
    answer: "No, the `<!DOCTYPE html>` declaration is not an HTML tag. It instructs the web browser about the HTML page version."
  },
  {
    question: "What is the canvas element in HTML5?",
    answer: "The `<canvas>` element is a container used to draw graphics on a web page using scripting language like JavaScript. It allows dynamic and scriptable rendering of 2D shapes and bitmap images. Example: `<canvas id='myCanvas1' width='300' height='100' style='border:2px solid;'></canvas>`"
  },
  {
    question: "What is SVG?",
    answer: "HTML SVG (Scalable Vector Graphics) is used to describe two-dimensional vector and raster graphics. SVG images and behaviors are defined in XML text files, so you can create and edit them with a text editor. Example: `<svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='yellow' stroke-width='4' fill='red' /></svg>`"
  },
  {
    question: "What are the different new form element types in HTML 5?",
    answer: "Color, Date, Datetime-local, Email, Time, Url, Range, Telephone, Number, Search."
  },
  {
    question: "Is there any need to change the web browsers to support HTML5?",
    answer: "No. Almost all updated browsers (Chrome, Firefox, Opera, Safari, IE) support HTML5."
  },
  {
    question: "Which type of video formats are supported by HTML5?",
    answer: "HTML5 supports three video formats: mp4, WebM, Ogg."
  },
  {
    question: "Is audio tag supported in HTML 5?",
    answer: "Yes. The `<audio>` tag is used to add sound or music files. Supported formats: mp3, WAV, Ogg. Example: `<audio controls><source src='koyal.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio>`"
  },
  {
    question: "What is the difference between progress and meter tag?",
    answer: "The `<progress>` tag represents the progress of a task only, while the `<meter>` tag measures data within a given range."
  },
  {
    question: "What is the use of figure tag in HTML 5?",
    answer: "The `<figure>` tag is used to add a photo or group of diagrams, photos, code listing with embedded content to the document. Example: `<figure><img src='image.jpg' alt='description'/></figure>`"
  },
  {
    question: "What is the use of figcaption tag in HTML 5?",
    answer: "The `<figcaption>` element provides a caption to an image. It is optional and can appear before or after content within the `<figure>` tag, placed as first or last child."
  },
  {
    question: "What is button tag?",
    answer: "The `<button>` tag creates a clickable button within an HTML form. Commonly used for 'submit' or 'reset' buttons. Example: `<button name='button' type='button'>Click Here</button>`"
  },
  {
    question: "What is the use of details and summary tag?",
    answer: "The `<details>` tag specifies additional details on a web page that can be viewed or hidden on demand. The `<summary>` tag is used with it to provide a visible heading."
  },
  {
    question: "What is datalist tag?",
    answer: "The HTML5 `<datalist>` tag provides an autocomplete feature on a form element, allowing users to choose from predefined options. Used with `<input>` list attribute."
  },
  {
    question: "How are tags migrated from HTML4 to HTML5?",
    answer: "Common migrations: `<div id='header'>` to `<header>`, `<div id='menu'>` to `<nav>`, `<div id='content'>` to `<section>`, `<div id='post'>` to `<article>`, `<div id='footer'>` to `<footer>`."
  },
  {
    question: "If I do not put <!DOCTYPE html> will HTML 5 work?",
    answer: "No. The browser will not be able to identify that it is an HTML5 document, and HTML5 tags will not function properly."
  },
  {
    question: "What is the use of the required attribute in HTML5?",
    answer: "It forces a user to fill text in a text field or text area before submitting the form. Used for form validation. Example: `<input type='text' name='name' required>`"
  },
  {
    question: "What are the new <input> types for form validation in HTML5?",
    answer: "The new input types for form validation are email, URL, number, tel, and date. Example: `<input type='email'>`"
  }
];