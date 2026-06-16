 
export const cssData = {
  id: "CSS",
  name: "CSS ",
  icon: "🐍",
  subtopics: [
   

    {
    id: "CSS-Tutorial",
    name: "CSS-Tutorial",
    icon: "⚙️",
    isParent: true,
    subtopics: [
      {
        id: "CSS Tutorial",
        name: "CSS Tutorial",
         description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Tutorial – Complete Guide</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f1f5f9;
            color: #0f172a;
            line-height: 1.6;
            padding: 2rem;
        }

        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 28px;
            box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.15);
            padding: 2rem 2rem 2.5rem;
        }

        h1 {
            font-size: 2.4rem;
            font-weight: 700;
            border-left: 6px solid #2962ff;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0c4a6e;
        }

        .last-updated {
            color: #2563eb;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }

        .intro-card {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #2962ff;
        }

        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #1e3a8a;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }

        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e40af;
            background: #f1f5f9;
            display: inline-block;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }

        .code-block {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }

        .code-block code {
            background: transparent;
            color: inherit;
            padding: 0;
        }

        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: monospace;
            font-size: 0.9rem;
            color: #d14;
        }

        .output-demo {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }

        .example-box {
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 16px;
            padding: 1rem;
            margin: 1rem 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.9rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        th {
            background-color: #2563eb;
            color: white;
            padding: 10px 12px;
            text-align: left;
        }

        td {
            border: 1px solid #e2e8f0;
            padding: 8px 12px;
            background-color: #ffffff;
        }

        tr:nth-child(even) td {
            background-color: #fafcff;
        }

        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }

        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #475569;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }

        .badge {
            background: #dbeafe;
            color: #1e40af;
            padding: 0.2rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>CSS Tutorial</h1>
    <div class="last-updated">📅 Last Updated : 22 May 2026</div>

    <div class="intro-card">
        This CSS tutorial (CSS3 tutorial) covers both basic and advanced CSS concepts, including layout techniques and responsive design. It is suitable for beginners learning web design and for professionals who want to strengthen their front-end development skills.
    </div>

    <h2>📌 Relationship Between HTML and CSS</h2>
    <p>HTML is a markup language used to create the basic structure of a web page, such as headings, paragraphs, images, and links. However, HTML alone cannot control the appearance of these elements. Pages created only with HTML look plain and lack proper layout, colors, and formatting.</p>
    <p>CSS works together with HTML to style web content. It allows developers to separate content from design, resulting in cleaner code and better maintainability.</p>

    <h2>🎨 What CSS Is Used For?</h2>
    <p>CSS is used to control the layout, colors, fonts, spacing, and alignment of web pages. It helps in creating responsive designs that adapt to different screen sizes like mobile, tablet, and desktop. CSS is also used to add transitions, animations, and visual effects that improve user experience.</p>

    <h2>📖 What is CSS?</h2>
    <ul>
        <li>CSS stands for <strong>Cascading Style Sheet</strong>.</li>
        <li>CSS is a widely used language on the web.</li>
        <li>CSS helps web designers to apply style to HTML tags.</li>
        <li>CSS is utilized to make a responsive website.</li>
    </ul>

    <h3>🔹 How does CSS help to improve a website?</h3>
    <p>Let us write the HTML code:</p>
    <div class="code-block"><code>&lt;p&gt;Hello Everyone!&lt;/p&gt;</code></div>
    <div class="output-demo"><strong>Output (without CSS):</strong> Plain black text on white background.</div>

    <p>Now, we will use CSS to enhance the look of the text.</p>
    <div class="code-block"><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;CSS&lt;/title&gt;
    &lt;style&gt;
    body {
        background-color: rgb(249, 207, 252);
    }
    p {
        font-family: sans-serif;
        font-size: 20px;
        color: rgb(24, 4, 105);
        font-weight: bold;
    }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;p&gt;Hello Everyone!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div>
    <div class="output-demo"><strong>Output (with CSS):</strong> Colored text with purple background, larger bold text. That's the magic of CSS!</div>

    <h2>✨ Why learn CSS?</h2>
    <ul>
        <li><strong>Creating Beautiful Websites:</strong> Adds colors, fonts, animations to HTML tags.</li>
        <li><strong>Making Responsive Websites:</strong> Mobile-friendly design that adapts to all screen sizes.</li>
        <li><strong>Customizing Anything:</strong> Dark themes, stylish menus, animated text.</li>
        <li><strong>Boosting your Career:</strong> Must-have skill for web developers and UI/UX designers.</li>
    </ul>

    <h2>📱 Applications of CSS</h2>
    <ul>
        <li><strong>Web Design & Development:</strong> Styling text, backgrounds, layouts, animations.</li>
        <li><strong>Responsive Design:</strong> Media queries for different devices.</li>
        <li><strong>Animations and Transitions:</strong> Hover effects, button clicks, fade-ins.</li>
        <li><strong>Website Management:</strong> External CSS for easy maintenance.</li>
        <li><strong>Accessibility Improvement:</strong> Alt text, color contrast, font scaling.</li>
        <li><strong>Custom Themes:</strong> Light/dark mode.</li>
        <li><strong>Social Media & E-Commerce:</strong> Attractive product pages, share buttons, checkout forms.</li>
        <li><strong>Framework Integration:</strong> Tailwind CSS, Bootstrap, Materialize.</li>
    </ul>

    <h2>📜 CSS Versions</h2>
    <ul>
        <li><strong>CSS1</strong> (Dec 1996) – basic styling, fonts, selectors.</li>
        <li><strong>CSS2</strong> (May 1998) – display property, pseudo-classes, pseudo-elements.</li>
        <li><strong>CSS2.1</strong> (June 2011) – rgba(), hsl(), box model standardization.</li>
        <li><strong>CSS3</strong> (1999 onwards) – modules: selectors, backgrounds, grid, flexbox, 2D transforms.</li>
        <li><strong>CSS4 (Upcoming)</strong> – improvements to existing modules.</li>
        <li><strong>CSS5 (Planned)</strong> – future enhancements.</li>
    </ul>

    <h2>🧩 Types of CSS</h2>

    <h3>1. Inline CSS</h3>
    <p>Applied directly to an element using the <code>style</code> attribute. Highest priority.</p>
    <div class="code-block"><pre><code>&lt;h1 style="color: red;"&gt;Hello, CSS!&lt;/h1&gt;</code></pre></div>
    <div class="output-demo"><strong>Output:</strong> Red heading text.</div>

    <h3>2. Internal CSS</h3>
    <p>Defined inside <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section.</p>
    <div class="code-block"><pre><code>&lt;style&gt;
   h1 {
        color: blue;
        font-family: Cursive;
   }
&lt;/style&gt;</code></pre></div>
    <div class="output-demo"><strong>Output:</strong> Blue cursive heading.</div>

    <h3>3. External CSS</h3>
    <p>Separate <code>.css</code> file linked via <code>&lt;link&gt;</code>. Recommended for large projects.</p>
    <div class="code-block"><pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre></div>
    <div class="output-demo"><strong>Output:</strong> Green heading with custom font.</div>
    <div class="note"><strong>Note:</strong> Inline CSS has highest priority, then internal, then external.</div>

    <h2>📋 CSS Properties</h2>

    <h3>Text Properties</h3>
    <table>
        <thead><tr><th>Property</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>color</code></td><td>Sets text color.</td></tr>
            <tr><td><code>text-align</code></td><td>Aligns text (left, right, center, justify).</td></tr>
            <tr><td><code>line-height</code></td><td>Gap between lines.</td></tr>
            <tr><td><code>letter-spacing</code></td><td>Spaces between characters.</td></tr>
            <tr><td><code>text-decoration</code></td><td>Decoration (underline, overline, none).</td></tr>
            <tr><td><code>text-transform</code></td><td>Uppercase/lowercase/capitalize.</td></tr>
        </tbody>
    </table>

    <h3>Font Properties</h3>
    <table>
        <thead><tr><th>Property</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>font</code></td><td>Shorthand for all font properties.</td></tr>
            <tr><td><code>font-family</code></td><td>Font family name.</td></tr>
            <tr><td><code>font-size</code></td><td>Size of text.</td></tr>
            <tr><td><code>font-style</code></td><td>Style (italic, normal).</td></tr>
            <tr><td><code>font-weight</code></td><td>Boldness (bold, normal, 100-900).</td></tr>
        </tbody>
    </table>

    <h3>List Properties</h3>
    <table>
        <thead><tr><th>Property</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>list-style</code></td><td>Shorthand for list style.</td></tr>
            <tr><td><code>list-style-type</code></td><td>Marker type (disc, square, circle, none).</td></tr>
            <tr><td><code>list-style-position</code></td><td>Inside or outside marker.</td></tr>
            <tr><td><code>list-style-image</code></td><td>Image as marker.</td></tr>
        </tbody>
    </table>

    <h3>Border Properties</h3>
    <table>
        <thead><tr><th>Property</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>border</code></td><td>Shorthand for width, style, color.</td></tr>
            <tr><td><code>border-width</code></td><td>Width of all borders.</td></tr>
            <tr><td><code>border-color</code></td><td>Color of borders.</td></tr>
            <tr><td><code>border-style</code></td><td>Style (solid, dotted, dashed).</td></tr>
            <tr><td><code>border-bottom</code>, <code>border-top</code>, <code>border-left</code>, <code>border-right</code></td><td>Shorthands for individual sides.</td></tr>
        </tbody>
    </table>

    <h2>💼 Career Opportunity of learning CSS</h2>
    <p>After learning CSS, there are multiple career opportunities in Web development and design. CSS is a foundation skill for front-end development. If you want to build your career in the field of front-end development, web design, UX/UI design, email development/design, etc., then you must learn this important skill.</p>
    <p>CSS is used in frameworks and libraries like React.js, Vue.js, etc. The demand for user-friendly digital experiences has risen, making CSS a vital skill in web development.</p>

    <h2>📝 Conclusion</h2>
    <div class="intro-card">
        In this article, we have learnt CSS. We have covered various topics like all the versions of CSS, three types of CSS, its properties and career opportunities. CSS is one of the important skills for developing a front-end website.
    </div>

    <h2>❓ FAQs</h2>
    <div class="example-box">
        <p><strong>1. What distinguishes between id and class?</strong><br>
        <code>id</code> is unique for one element; <code>class</code> can be reused on multiple elements.</p>
        <p><strong>2. What are CSS Selectors?</strong><br>
        Used to select elements based on name, ID, class, attributes, etc.</p>
        <p><strong>3. What is the Box model?</strong><br>
        Every HTML element is wrapped in a box: Content → Padding → Border → Margin.</p>
        <p><strong>4. How can you integrate CSS into an HTML Page?</strong><br>
        Inline, Internal, or External CSS.</p>
        <p><strong>5. How can you make a website responsive?</strong><br>
        Using CSS Media Queries: <code>@media media-type and (condition) { /* CSS */ }</code></p>
    </div>

    <footer>
        CSS Tutorial – Complete Guide | Inline, Internal, External CSS | Responsive Design | CSS3
    </footer>
</div>
</body>
</html>
                            `
                },


        {
    id: "what-is-css",                    // ✅ no spaces or special chars
    name: "What is CSS?",                 // ✅ name can have spaces & ? (display only)
    description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .example-output {
        background: #fef9e3;
        border-left: 4px solid #f59e0b;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.2rem 0;
        font-size: 0.95rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    th {
        background-color: #2962ff;
        color: white;
        padding: 12px 16px;
        text-align: left;
    }
    td {
        border: 1px solid #e2e8f0;
        padding: 10px 16px;
        background-color: #ffffff;
    }
    tr:nth-child(even) td {
        background-color: #fafcff;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .badge {
        background: #dbeafe;
        color: #1e40af;
        padding: 0.2rem 0.8rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }
</style>

<div class="container">
    <h1>What is CSS?</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        <strong>CSS</strong> stands for <strong>Cascading Style Sheets</strong>. It describes how to display HTML elements on the screen in a proper format. CSS is the language used to style HTML documents. In simple words, cascading style sheets simplify the process of making a webpage.
    </div>

    <h2>📌 Advantages of CSS</h2>
    <ul>
        <li><strong>Faster page speed:</strong> CSS rules apply to all matching elements, reducing code duplication.</li>
        <li><strong>Better user experience:</strong> Attractive, user-friendly designs improve engagement.</li>
        <li><strong>Quicker development time:</strong> One CSS rule can style multiple pages.</li>
        <li><strong>Easy formatting changes:</strong> Change one file – updates everywhere.</li>
        <li><strong>Compatibility:</strong> CSS makes responsive, device-friendly designs with HTML.</li>
    </ul>

    <h2>🎯 Why do We Use CSS?</h2>
    <ul>
        <li>Provides <strong>efficiency</strong> in webpage design – changes reflect across all pages.</li>
        <li>Enables <strong>faster page download</strong> via caching and lightweight styling.</li>
        <li><strong>Easy to work with</strong> – separates visual aspects from content, allowing quick layout adjustments.</li>
    </ul>

    <h2>📖 Example of CSS</h2>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
body {
  background-color: lightblue;
}
h1 {
  color: white;
  text-align: center;
}
p {
  font-family: Verdana;
  font-size: 20px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;My First CSS Example&lt;/h1&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    <div class="example-output">
        <strong>Output:</strong> A light blue background, white centered heading, and a paragraph in Verdana font.
    </div>

    <h2>🧩 Types of CSS</h2>

    <h3>1. Inline CSS</h3>
    <p>Applied directly to an element using the <code>style</code> attribute.</p>
    <pre><code>&lt;p style="color: orange; font-size: 25px;"&gt;Here is my first paragraph.&lt;/p&gt;
&lt;p&gt;Here is my second paragraph.&lt;/p&gt;</code></pre>

    <h3>2. Internal CSS</h3>
    <p>Defined inside <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section. Styling applies only to that page.</p>
    <pre><code>&lt;style&gt;
body { background-color: black; }
h1 { color: mediumvioletred; }
h2 { color: powderblue; }
&lt;/style&gt;</code></pre>

    <h3>3. External CSS</h3>
    <p>Separate <code>.css</code> file linked via <code>&lt;link&gt;</code>. Best for large websites.</p>
    <pre><code>&lt;link rel="stylesheet" href="nameOfTheSheet.css"&gt;</code></pre>

    <h2>⚙️ How does CSS Work?</h2>
    <p>CSS selects HTML elements and applies style rules. For example:</p>
    <pre><code>h1 {
  color: blue;
  text-align: center;
}</code></pre>

    <h2>💬 CSS Comments</h2>
    <pre><code>/* This is a comment */
body {
  font-family: Sans-serif;
  font-size: 50em;  /* 1em = 10px */
}</code></pre>

    <h2>🔍 CSS Selectors</h2>
    <table>
        <thead>
            <tr><th>Selector</th><th>Syntax</th><th>Example</th></tr>
        </thead>
        <tbody>
            <tr><td>Element selector</td><td><code>element { }</code></td><td><code>p { background-color: Pink; }</code></td></tr>
            <tr><td>Universal selector</td><td><code>* { }</code></td><td><code>* { margin: 0; }</code></td></tr>
            <tr><td>ID selector</td><td><code>#id { }</code></td><td><code>#first { color: black; }</code></td></tr>
            <tr><td>Class selector</td><td><code>.class { }</code></td><td><code>.intro { background-color: yellow; }</code></td></tr>
        </tbody>
    </table>

    <h3>Implementation of all Selectors</h3>
    <pre><code>&lt;style&gt;
#center1 { text-align: center; color: pink; }
.center2 { text-align: center; color: red; }
h1 { text-align: center; color: green; }
&lt;/style&gt;
&lt;h1&gt;Green, centered heading&lt;/h1&gt;
&lt;p class="center2"&gt;Red, centered paragraph&lt;/p&gt;
&lt;p id="center1"&gt;Pink, centered paragraph&lt;/p&gt;</code></pre>

    <h2>🎨 CSS Colors</h2>
    <table>
        <thead>
            <tr><th>Method</th><th>Example</th><th>Description</th></tr>
        </thead>
        <tbody>
            <tr><td>RGB</td><td><code>rgb(255, 0, 0)</code></td><td>Red, green, blue (0–255 each)</td></tr>
            <tr><td>HEX</td><td><code>#ff0099</code></td><td>6-digit hex code</td></tr>
            <tr><td>RGBA</td><td><code>rgba(255,0,0,0.5)</code></td><td>RGB + alpha (0–1 opacity)</td></tr>
        </tbody>
    </table>
    <pre><code>&lt;style&gt;
#center { color: #ff0099; }
h1 { color: rgba(255,0,0,0.5); }
&lt;/style&gt;
&lt;p style="color:rgb(255,0,0)"&gt;Red paragraph&lt;/p&gt;</code></pre>

    <h2>🖼️ CSS Background</h2>
    <ul>
        <li><code>background-color</code> – sets solid color</li>
        <li><code>background-image</code> – sets an image</li>
        <li><code>background-repeat</code> – controls tiling</li>
        <li><code>background-position</code> – sets image position</li>
    </ul>

    <h2>📦 CSS Border</h2>
    <p>Properties: <code>border-width</code>, <code>border-style</code>, <code>border-color</code>, <code>border-radius</code>.</p>
    <pre><code>border: 2px solid #333;
border-radius: 10px;</code></pre>

    <div class="note">
        💡 <strong>Key Takeaway:</strong> CSS is essential for modern web design. It controls layout, colors, fonts, responsiveness, and animations. Mastering CSS opens doors to front-end development and UI/UX careers.
    </div>

    <footer>
        CSS Tutorial – Complete Guide | Inline, Internal, External CSS | Selectors, Colors, Background, Border
    </footer>
</div>
`
},


       {
    id: "css-syntax",                    // ✅ no spaces, safe for routing
    name: "CSS Syntax",                  // ✅ display name can have spaces
    description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .example-output {
        background: #fef9e3;
        border-left: 4px solid #f59e0b;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.2rem 0;
        font-size: 0.95rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    th {
        background-color: #2962ff;
        color: white;
        padding: 12px 16px;
        text-align: left;
    }
    td {
        border: 1px solid #e2e8f0;
        padding: 10px 16px;
        background-color: #ffffff;
    }
    tr:nth-child(even) td {
        background-color: #fafcff;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .card {
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        max-width: 300px;
        margin: 20px auto;
        overflow: hidden;
    }
    .card img {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .card-content {
        padding: 20px;
    }
    .card-title {
        font-size: 24px;
        color: #333;
        margin: 0;
    }
    .card-text {
        color: #666;
    }
    .card-link {
        display: inline-block;
        background-color: #f3727b;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        margin-top: 10px;
    }
    .gallery {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin: 20px 0;
    }
    .gallery img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    button.demo-btn {
        background-color: #ff69b4;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button.demo-btn:hover {
        background-color: #e35a9f;
    }
</style>

<div class="container">
    <h1>CSS Syntax</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS provides style to HTML elements using three parts: <strong>Selector</strong>, <strong>Property</strong>, <strong>Value</strong>.
        Syntax: <code>selector { property: value; }</code>
    </div>

    <h2>📌 Basic Syntax</h2>
    <pre><code>h1 {
  color: blue;
  text-align: center;
}</code></pre>

    <h2>🎨 Complete Example</h2>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
body { font-family: Arial, sans-serif; background-color: #f2f2f2; }
#header { background-color: #333; color: white; text-align: center; padding: 20px; }
h1 { font-size: 36px; }
.button { background-color: #ff0000; color: white; padding: 10px 20px; border-radius: 5px; }
.button:hover { background-color: #990000; }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="header"&gt;
  &lt;h1&gt;Hello, CSS Example!&lt;/h1&gt;
  &lt;p&gt;Welcome to javaTpoint. Here is a styled button:&lt;/p&gt;
  &lt;button class="button"&gt;Click Me!&lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    <div class="example-output">
        <strong>Live preview:</strong> Dark header, white text, red button that darkens on hover.
    </div>

    <h2>🔍 Types of Selectors</h2>

    <h3>1. Type Selector</h3>
    <pre><code>h1, h2, h3 { color: red; }</code></pre>

    <h3>2. Universal Selector</h3>
    <pre><code>* { margin: 0; padding: 0; box-sizing: border-box; }</code></pre>

    <h3>3. Descendant Selector</h3>
    <pre><code>.menu li a { color: blue; }</code></pre>

    <h3>4. Class Selector</h3>
    <div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1024px-Flag_of_India.svg.png" alt="Indian flag">
        <div class="card-content">
            <h3 class="card-title">Flag of India</h3>
            <p class="card-text">Indian flag – tiranga.</p>
            <a href="#" class="card-link">Read More</a>
        </div>
    </div>

    <h3>5. ID Selector</h3>
    <button class="demo-btn">Click me (ID styled)</button>

    <h3>6. Child Selector (<code>></code>)</h3>
    <pre><code>.parent > .direct-child { background: yellow; }</code></pre>

    <h3>7. Attribute Selector</h3>
    <div class="gallery">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" alt="Nature" data-category="nature" style="border:2px solid #4caf50;">
        <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1000&q=80" alt="Cityscape" data-category="cityscape" style="border:2px solid #2196f3;">
        <img src="https://cdn.cdnparenting.com/articles/2018/08/602444213-H-1024x700.webp" alt="Mountains" data-category="mountains" style="border:2px solid #9c27b0;">
    </div>

    <h2>📐 Multiple Style Rules</h2>
    <pre><code>body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}
.heading {
  font-size: 36px;
  font-weight: bold;
  color: #007bff;
}
.btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}</code></pre>
    <div class="example-output">
        <h1 style="font-size:36px; font-weight:bold; color:#007bff;">Hello, World!</h1>
        <p>Welcome to javaTpoint</p>
        <button style="background-color:#007bff; color:white; padding:10px 20px; border:none; border-radius:5px;">Click Me</button>
    </div>

    <div class="note">
        💡 <strong>Key Takeaway:</strong> CSS syntax consists of selectors, properties, and values. Different selector types give you precise control over styling.
    </div>

    <footer>CSS Syntax – Complete Guide | Selectors, Properties, Values, Examples</footer>
</div>
`
},

        {
            id: "CSS Selector",
            name: "CSS Selector",
            description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .example-output {
        background: #fef9e3;
        border-left: 4px solid #f59e0b;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Selector</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS selectors are used to select the content you want to style. They select HTML elements according to their id, class, type, attribute, etc. There are several different types of selectors in CSS.
    </div>

    <h2>📌 1) CSS Element Selector</h2>
    <p>The element selector selects HTML elements by name.</p>
    <pre><code>p {
    text-align: center;
    color: blue;
}</code></pre>
    <div class="demo-box">
        <style>
            .demo-element p {
                text-align: center;
                color: blue;
            }
        </style>
        <div class="demo-element">
            <p>This style will be applied on every paragraph.</p>
            <p id="para1">Me too!</p>
            <p>And me!</p>
        </div>
    </div>

    <h2>🎯 2) CSS ID Selector</h2>
    <p>The id selector selects a unique element using the hash (<code>#</code>) character.</p>
    <pre><code>#para1 {
    text-align: center;
    color: blue;
}</code></pre>
    <div class="demo-box">
        <style>
            #para1-demo {
                text-align: center;
                color: blue;
            }
        </style>
        <p id="para1-demo">Hello tpointtech.com</p>
        <p>This paragraph will not be affected.</p>
    </div>

    <h2>🏷️ 3) CSS Class Selector</h2>
    <p>The class selector selects elements with a specific class attribute using a period (<code>.</code>).</p>
    <pre><code>.center {
    text-align: center;
    color: blue;
}</code></pre>
    <div class="demo-box">
        <style>
            .center-demo {
                text-align: center;
                color: blue;
            }
        </style>
        <h1 class="center-demo">This heading is blue and center-aligned.</h1>
        <p class="center-demo">This paragraph is blue and center-aligned.</p>
    </div>

    <h3>🔹 Class Selector for Specific Element</h3>
    <pre><code>p.center {
    text-align: center;
    color: blue;
}</code></pre>
    <div class="demo-box">
        <style>
            p.center-specific {
                text-align: center;
                color: blue;
            }
        </style>
        <h1 class="center-specific">This heading is not affected</h1>
        <p class="center-specific">This paragraph is blue and center-aligned.</p>
    </div>

    <h2>🌐 4) CSS Universal Selector</h2>
    <p>The universal selector (<code>*</code>) selects all elements on the page.</p>
    <pre><code>* {
    color: green;
    font-size: 20px;
}</code></pre>
    <div class="demo-box">
        <style>
            .universal-demo * {
                color: green;
                font-size: 20px;
            }
        </style>
        <div class="universal-demo">
            <h2>This is heading</h2>
            <p>This style will be applied on every paragraph.</p>
            <p id="para1">Me too!</p>
            <p>And me!</p>
        </div>
    </div>

    <h2>👥 5) CSS Group Selector</h2>
    <p>The grouping selector applies the same styles to multiple selectors, separated by commas.</p>
    <pre><code>h1, h2, p {
    text-align: center;
    color: blue;
}</code></pre>
    <div class="demo-box">
        <style>
            .group-demo h1, .group-demo h2, .group-demo p {
                text-align: center;
                color: blue;
            }
        </style>
        <div class="group-demo">
            <h1>Hello Javatpoint.com</h1>
            <h2>Hello Javatpoint.com (In smaller font)</h2>
            <p>This is a paragraph.</p>
        </div>
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        ✅ <strong>Summary:</strong> CSS selectors are the foundation of styling. Master element, ID, class, universal, and group selectors to efficiently target any HTML element.
    </div>

    <footer>
        CSS Selector – Complete Guide | Element, ID, Class, Universal, Group Selectors
    </footer>
</div>

            `
         },

         {
            id: "How-to-add-CSS",
            name: "How to add CSS",
            description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .example-output {
        background: #fef9e3;
        border-left: 4px solid #f59e0b;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
</style>

<div class="container">
    <h1>How to add CSS</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS is added to HTML pages to format the document according to information in the style sheet. There are <strong>three ways</strong> to insert CSS in HTML documents.
    </div>

    <h2>📌 1) Inline CSS</h2>
    <p>Inline CSS is used to apply CSS on a single line or element, using the <code>style</code> attribute.</p>
    <pre><code>&lt;p style="color:blue"&gt;Hello CSS&lt;/p&gt;</code></pre>
    <div class="demo-box">
        <p style="color:blue">Hello CSS (Inline demo)</p>
    </div>
    <div class="note">
        💡 <strong>Note:</strong> Inline CSS has the highest priority but mixes content with presentation. Use sparingly.
    </div>

    <h2>📄 2) Internal CSS</h2>
    <p>Internal CSS is used to apply CSS on a single document or page. It is written inside a <code>&lt;style&gt;</code> tag within the <code>&lt;head&gt;</code> section.</p>
    <pre><code>&lt;style&gt;
p {
    color: blue;
}
&lt;/style&gt;</code></pre>
    <div class="demo-box">
        <style>
            .internal-demo p {
                color: blue;
            }
        </style>
        <div class="internal-demo">
            <p>This paragraph is styled with internal CSS (blue text).</p>
        </div>
    </div>
    <div class="note">
        💡 <strong>Note:</strong> Internal CSS affects only the current page. Good for single-page styling.
    </div>

    <h2>🌍 3) External CSS</h2>
    <p>External CSS is used to apply CSS on multiple pages. All CSS code is written in a separate <code>.css</code> file (e.g., <code>style.css</code>).</p>
    <pre><code>/* style.css */
p {
    color: blue;
}</code></pre>
    <p>The external file is linked in the HTML <code>&lt;head&gt;</code> using the <code>&lt;link&gt;</code> tag:</p>
    <pre><code>&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;</code></pre>
    <div class="example-output">
        <strong>✅ Best practice:</strong> External CSS keeps your code clean, reusable, and easy to maintain – ideal for large websites.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        ✅ <strong>Summary:</strong> Use <strong>inline CSS</strong> for quick, one-off styles; <strong>internal CSS</strong> for single-page uniqueness; <strong>external CSS</strong> for site-wide consistency and maintainability.
    </div>

    <footer>
        How to add CSS – Inline, Internal, External methods with examples
    </footer>
</div>

            `
         },

         {
            id: "Inline-CSS",
            name: "Inline CSS",
            description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>Inline CSS</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        We can apply CSS to a single element using the <strong>inline CSS</strong> technique. It uses the <code>style</code> attribute inside the opening tag.
    </div>

    <h2>📌 Syntax</h2>
    <pre><code>&lt;htmltag style="cssproperty1:value; cssproperty2:value;"&gt; ... &lt;/htmltag&gt;</code></pre>

    <h2>📖 Example</h2>
    <pre><code>&lt;h2 style="color:red; margin-left:40px;"&gt;Inline CSS is applied on this heading.&lt;/h2&gt;
&lt;p&gt;This paragraph is not affected.&lt;/p&gt;</code></pre>
    <div class="demo-box">
        <h2 style="color:red; margin-left:40px;">Inline CSS is applied on this heading.</h2>
        <p>This paragraph is not affected.</p>
    </div>

    <h2>⚠️ Disadvantages of Inline CSS</h2>
    <div class="warning">
        <ul style="margin-left: 1.5rem;">
            <li><strong>Quotations issue:</strong> You cannot use quotations within inline CSS – the browser may interpret them as the end of the style value.</li>
            <li><strong>No reusability:</strong> These styles cannot be reused elsewhere.</li>
            <li><strong>Hard to edit:</strong> Styles are scattered, not stored in a single place.</li>
            <li><strong>Limited selectors:</strong> Cannot style pseudo-codes or pseudo-classes (e.g., <code>:hover</code>, <code>::before</code>).</li>
            <li><strong>No caching:</strong> Inline CSS does not provide browser cache advantages.</li>
        </ul>
    </div>

    <div class="note">
        💡 <strong>Best Practice:</strong> Use inline CSS sparingly – only for quick, one-off overrides. For maintainable code, prefer internal or external CSS.
    </div>

    <footer>
        Inline CSS – Syntax, Example, and Disadvantages
    </footer>
</div>

            `
         },

         {
            id: "Internal-CSS",
            name: "Internal CSS",
            description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>Internal CSS</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <strong>internal style sheet</strong> is used to add a unique style for a single document. It is defined in the <code>&lt;head&gt;</code> section inside a <code>&lt;style&gt;</code> tag.
    </div>

    <h2>📌 Syntax & Example</h2>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
body {
    background-color: linen;
}
h1 {
    color: red;
    margin-left: 80px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;The internal style sheet is applied on this heading.&lt;/h1&gt;
&lt;p&gt;This paragraph will not be affected.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <div class="demo-box">
        <style>
            .internal-demo {
                background-color: linen;
                padding: 1rem;
                border-radius: 8px;
            }
            .internal-demo h1 {
                color: red;
                margin-left: 80px;
            }
        </style>
        <div class="internal-demo">
            <h1>The internal style sheet is applied on this heading.</h1>
            <p>This paragraph will not be affected.</p>
        </div>
    </div>

    <div class="note">
        💡 <strong>When to use Internal CSS?</strong><br>
        ✅ Ideal for single-page styling where you want all rules in one place.<br>
        ✅ Easier to debug than inline CSS.<br>
        ❌ Not reusable across multiple pages (use external CSS for that).
    </div>

    <footer>
        Internal CSS – Unique styles for a single document
    </footer>
</div>

            `
         },

         {
            id: "External-CSS",
            name: "External-CSS",
            description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>External CSS</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <strong>external style sheet</strong> is used when you want to apply the same styles to multiple pages. It allows you to change the look of an entire website by editing just one file.
    </div>

    <h2>📌 How to Link External CSS</h2>
    <p>Use the <code>&lt;link&gt;</code> tag inside the <code>&lt;head&gt;</code> section of each HTML page:</p>
    <pre><code>&lt;head&gt;
    &lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;
&lt;/head&gt;</code></pre>

    <h2>📄 External CSS File (mystyle.css)</h2>
    <p>The external file must be saved with a <code>.css</code> extension and should not contain any HTML elements.</p>
    <pre><code>body {
    background-color: lightblue;
}
h1 {
    color: navy;
    margin-left: 20px;
}</code></pre>

    <div class="demo-box">
        <style>
            /* Simulating external CSS effect */
            .external-demo {
                background-color: lightblue;
                padding: 1rem;
                border-radius: 8px;
            }
            .external-demo h1 {
                color: navy;
                margin-left: 20px;
            }
        </style>
        <div class="external-demo">
            <h1>This heading is styled by external CSS (simulated).</h1>
            <p>Background light blue, heading navy with left margin.</p>
        </div>
    </div>

    <div class="note">
        💡 <strong>Advantages of External CSS:</strong>
        <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
            <li>Reusable across many pages – change one file, update entire site.</li>
            <li>Cleaner HTML – separates content from presentation.</li>
            <li>Faster page loads after caching.</li>
        </ul>
    </div>

    <div class="warning">
        ⚠️ <strong>Important Note:</strong> Do not use a space between the property value and the unit.<br>
        ✅ Correct: <code>margin-left: 20px;</code><br>
        ❌ Incorrect: <code>margin-left: 20 px;</code>
    </div>

    <footer>
        External CSS – Ideal for multiple pages, easy maintenance
    </footer>
</div>

            `
         },

         {
            id: "what-are-Comments-in-CSS",
            name: "What are Comments in CSS?",
            description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>What are Comments in CSS?</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        Comments are used in CSS to add clarifications or reminders that the browser ignores when rendering the webpage. They help explain code, provide context, and temporarily disable specific rules.
    </div>

    <h2>📌 CSS Comment Syntax</h2>
    <p>CSS comments are written between <code>/*</code> and <code>*/</code>.</p>
    <pre><code>/* This is a CSS comment */</code></pre>
    <p>Comments can span multiple lines:</p>
    <pre><code>/* This is a multi-line  
   CSS comment */  

/* This is another  
   multi-line comment */  

/* This is a single-line CSS comment */</code></pre>

    <h2>📖 Examples of Comments in Action</h2>
    <p>Comments can appear anywhere – inside selectors, between declarations, or to disable blocks:</p>
    <pre><code>/* This is a comment before a selector */  
h1 {  
  /* Comment inside a declaration block */  
  color: blue;  
  font-size: 24px; /* Comment after a property */  
}  

/* Temporarily disable an entire rule set */  
/* h2 {  
  color: red;  
} */</code></pre>
    <div class="demo-box">
        <style>
            .comment-demo h1 {
                color: blue;
                font-size: 24px;
            }
            /* Simulated disabled rule would not apply */
        </style>
        <div class="comment-demo">
            <h1>This heading is styled (blue, 24px) – comments are ignored by browser.</h1>
        </div>
    </div>

    <div class="warning">
        ⚠️ <strong>Important:</strong> Comments are visible in the page source code. Never include sensitive or private information inside CSS comments.
    </div>

    <h2>✅ Why We Use Comments in CSS?</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li><strong>Documentation:</strong> Explain why certain styles are used, provide instructions, or remind yourself of code sections.</li>
        <li><strong>Temporary disablement:</strong> Isolate specific CSS components for testing without deleting code.</li>
        <li><strong>Collaboration:</strong> Share thoughts, suggestions, or discuss code segments with team members.</li>
        <li><strong>Future reference:</strong> Remember the goal behind particular styles when revisiting code.</li>
        <li><strong>Organization and readability:</strong> Break CSS code into logical sections, making it easier to navigate.</li>
    </ul>

    <h2>❌ Disadvantages of CSS Comments</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li><strong>Code Bloat:</strong> Excessive comments increase file size, potentially slowing load times for large CSS files.</li>
        <li><strong>Outdated Comments:</strong> As code evolves, comments may become inaccurate and misleading.</li>
        <li><strong>Maintenance Costs:</strong> Keeping comments up‑to‑date requires extra effort.</li>
        <li><strong>Potential clutter:</strong> Too many comments or poor formatting can make code harder to read.</li>
        <li><strong>Code Duplication:</strong> Commenting self‑evident code adds unnecessary duplication.</li>
    </ul>

    <div class="note">
        💡 <strong>Best Practice:</strong> Use comments to explain <em>why</em> something is done, not <em>what</em> the code does. Keep them clear, concise, and updated when code changes.
    </div>

    <footer>
        CSS Comments – Syntax, Usage, Advantages, and Disadvantages
    </footer>
</div>

            `
         },

         {
            id: "CSS-Horizontal-Align",
            name: "CSS Horizontal Align",
            description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .imgContainer {
        height: 200px;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }
    .imgContainer img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    /* Demo specific styles */
    .text-align-demo {
        text-align: center;
    }
    .block-center-demo {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        background: #e0f2fe;
        padding: 1rem;
        border-radius: 8px;
    }
    .flex-center-demo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fef9e3;
        padding: 1rem;
        border-radius: 8px;
    }
    .grid-center-demo {
        display: grid;
        justify-items: center;
        align-items: center;
        background: #e6f7ec;
        padding: 1rem;
        border-radius: 8px;
    }
    @media screen and (max-width: 768px) {
        .responsive-demo {
            text-align: center;
        }
    }
</style>

<div class="container">
    <h1>CSS Horizontal Align</h1>
    <div class="last-updated">📅 Last Updated : 15 Mar 2025</div>

    <div class="intro-text">
        Horizontal alignment refers to positioning elements along the x‑axis (left‑to‑right) within a container. It is essential for creating structured, visually appealing layouts. Mastering CSS horizontal alignment ensures responsive and organized web interfaces.
    </div>

    <h2>📌 Types of Horizontal Alignment</h2>

    <h3>1. Text Alignment</h3>
    <p>Use <code>text-align</code> property on a block element to align its inline or inline‑block children.</p>
    <pre><code>#wrapper {
    text-align: center;
}</code></pre>
    <div class="demo-box text-align-demo">
        <h1>This is a centered text</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et enim eu lorem faucibus consequat.</p>
        <div class="imgContainer">
            <img src="https://via.placeholder.com/400x200?text=Demo+Image" alt="demo">
        </div>
    </div>

    <h3>2. Block Element Alignment (margin: auto)</h3>
    <p>For block‑level elements with a defined width, set left and right margins to <code>auto</code>.</p>
    <pre><code>.allData {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}</code></pre>
    <div class="demo-box">
        <div class="block-center-demo">
            <h1>Centered Block</h1>
            <p>This div has width: 50% and margin: auto.</p>
        </div>
    </div>

    <h3>3. Flexbox Alignment</h3>
    <p>Use <code>display: flex</code> with <code>justify-content: center</code> and <code>align-items: center</code>.</p>
    <pre><code>.allData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}</code></pre>
    <div class="demo-box flex-center-demo">
        <h1>Flexbox Centered</h1>
        <p>Content is centered horizontally and vertically inside the flex container.</p>
        <div class="imgContainer">
            <img src="https://via.placeholder.com/400x200?text=Flex+Demo" alt="flex demo">
        </div>
    </div>

    <h3>4. Grid Alignment</h3>
    <p>CSS Grid provides <code>justify-items: center</code> to center grid items horizontally.</p>
    <pre><code>.allData {
    display: grid;
    justify-items: center;
    align-items: center;
}</code></pre>
    <div class="demo-box grid-center-demo">
        <h1>Grid Centered</h1>
        <p>This content is centered using CSS Grid.</p>
        <div class="imgContainer">
            <img src="https://via.placeholder.com/400x200?text=Grid+Demo" alt="grid demo">
        </div>
    </div>

    <h2>📱 Responsive Horizontal Alignment</h2>
    <p>Use media queries to adjust alignment on different screen sizes.</p>
    <pre><code>@media screen and (max-width: 768px) {
    .allData {
        text-align: center;
    }
}</code></pre>
    <div class="demo-box responsive-demo">
        <h1>Responsive Text</h1>
        <p>On screens smaller than 768px, this text becomes centered (resize browser to see effect).</p>
    </div>

    <h2>✅ Best Practices</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li><strong>Consistency:</strong> Maintain a uniform alignment scheme across your website.</li>
        <li><strong>Use Flexbox and Grid:</strong> They offer powerful and flexible alignment capabilities.</li>
        <li><strong>Responsive Design:</strong> Employ media queries and fluid layouts to adapt to various devices.</li>
    </ul>

    <h2>📈 Advantages of CSS Horizontal Alignment</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li>Ease of use with simple properties like <code>text-align</code> and <code>margin</code>.</li>
        <li>Flexibility – multiple methods (Flexbox, Grid) for different layouts.</li>
        <li>Responsive design support via media queries.</li>
        <li>Promotes consistency and separation of concerns.</li>
        <li>Wide browser compatibility in modern browsers.</li>
    </ul>

    <h2>⚠️ Disadvantages of CSS Horizontal Alignment</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li>Complexity with legacy browser support (older browsers may not fully support Flexbox/Grid).</li>
        <li>Learning curve for advanced layout systems.</li>
        <li>Potential browser bugs causing inconsistencies.</li>
        <li>Performance considerations in complex layouts.</li>
        <li>Fragility if CSS properties are used incorrectly.</li>
    </ul>

    <h2>💼 Applications</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li>Website layouts (navigation, headers, footers).</li>
        <li>Responsive design – adapting to different screen sizes.</li>
        <li>Centering elements (text, images, buttons).</li>
        <li>Form design – aligning labels and inputs.</li>
        <li>Image galleries and sliders.</li>
        <li>Card‑based layouts.</li>
        <li>Navigation bars and menus.</li>
        <li>Social media widgets and icons.</li>
        <li>Tables and data presentation.</li>
        <li>Advertisement banners and call‑to‑action sections.</li>
    </ul>

    <div class="note">
        💡 <strong>Conclusion:</strong> Mastering CSS horizontal alignment is essential for creating well‑structured and visually appealing web layouts. Understanding techniques like text‑align, margin auto, Flexbox, Grid, and media queries enables developers to build responsive, consistent designs across all devices.
    </div>

    <footer>
        CSS Horizontal Align – Text, Block, Flexbox, Grid, Responsive Techniques
    </footer>
</div>

            `
         },

             ]
        },


      {
          id: "CSS-properties",
          name: "CSS Properties",
          icon: "⚙️",
          isParent: true,
          subtopics: [
            {
              id: "CSS-Background",
              name: "CSS Background",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    /* Demo specific styles */
    .bg-color-demo h2, .bg-color-demo p {
        background-color: #b0d4de;
        padding: 0.5rem;
    }
    .bg-image-demo {
        background-image: url('https://www.w3schools.com/css/paper1.gif');
        margin-left: 100px;
        padding: 1rem;
        min-height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bg-repeat-x-demo {
        background-image: url('https://www.w3schools.com/css/gradient_bg.png');
        background-repeat: repeat-x;
        padding: 1rem;
        min-height: 100px;
    }
    .bg-repeat-y-demo {
        background-image: url('https://www.w3schools.com/css/gradient_bg.png');
        background-repeat: repeat-y;
        padding: 1rem;
        min-height: 150px;
    }
    .bg-attachment-demo {
        background: white url('https://www.w3schools.com/css/bbb.gif') no-repeat fixed;
        background-size: contain;
        padding: 2rem;
        min-height: 200px;
        color: #333;
    }
    .bg-position-demo {
        background: white url('https://www.w3schools.com/css/good-morning.jpg') no-repeat fixed center;
        background-size: contain;
        padding: 2rem;
        min-height: 200px;
        color: white;
        text-shadow: 1px 1px 0 black;
    }
</style>

<div class="container">
    <h1>CSS Background</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS background properties are used to define background effects on HTML elements. There are five main background properties: <code>background-color</code>, <code>background-image</code>, <code>background-repeat</code>, <code>background-attachment</code>, and <code>background-position</code>.
    </div>

    <h2>1️⃣ background-color</h2>
    <p>The <code>background-color</code> property specifies the background color of an element.</p>
    <pre><code>h2, p {
    background-color: #b0d4de;
}</code></pre>
    <div class="demo-box bg-color-demo">
        <h2>My first CSS page.</h2>
        <p>Hello Javatpoint. This is an example of CSS background-color.</p>
    </div>

    <h2>2️⃣ background-image</h2>
    <p>The <code>background-image</code> property sets an image as the background of an element. By default, the image repeats to cover the entire element.</p>
    <pre><code>body {
    background-image: url("paper1.gif");
    margin-left: 100px;
}</code></pre>
    <div class="demo-box bg-image-demo">
        <h1>Hello Javatpoint.com</h1>
        <p>Background image demo (paper1.gif).</p>
    </div>
    <div class="warning">
        ⚠️ <strong>Note:</strong> Choose background images carefully to ensure text remains readable. Poor contrast can make a webpage hard to use.
    </div>

    <h2>3️⃣ background-repeat</h2>
    <p>By default, background images repeat both horizontally and vertically. Use <code>background-repeat</code> to control repetition.</p>

    <h3>repeat-x (horizontal only)</h3>
    <pre><code>body {
    background-image: url("gradient_bg.png");
    background-repeat: repeat-x;
}</code></pre>
    <div class="demo-box bg-repeat-x-demo">
        <h1>Hello Javatpoint.com</h1>
        <p>Background repeats only horizontally.</p>
    </div>

    <h3>repeat-y (vertical only)</h3>
    <pre><code>body {
    background-image: url("gradient_bg.png");
    background-repeat: repeat-y;
}</code></pre>
    <div class="demo-box bg-repeat-y-demo">
        <h1>Hello Javatpoint.com</h1>
        <p>Background repeats only vertically.</p>
    </div>

    <h2>4️⃣ background-attachment</h2>
    <p>The <code>background-attachment</code> property determines whether the background image scrolls with the page or is fixed.</p>
    <pre><code>background: white url('bbb.gif');
background-repeat: no-repeat;
background-attachment: fixed;</code></pre>
    <div class="demo-box bg-attachment-demo">
        <h1>Fixed Background Image</h1>
        <p>This background image stays fixed while the page scrolls (try scrolling).</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <h2>5️⃣ background-position</h2>
    <p>The <code>background-position</code> property sets the starting position of a background image. Common values: <code>center</code>, <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>.</p>
    <pre><code>background: white url('good-morning.jpg');
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;</code></pre>
    <div class="demo-box bg-position-demo">
        <h1>Background Centered</h1>
        <p>The background image is centered and fixed.</p>
    </div>

    <div class="note">
        💡 <strong>Tip:</strong> You can combine all background properties into a single shorthand declaration:<br>
        <code>background: #b0d4de url('paper1.gif') no-repeat fixed center;</code>
    </div>

    <footer>
        CSS Background – color, image, repeat, attachment, position
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Border",
              name: "CSS Border",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    /* Demo specific styles */
    .border-style-demo div {
        width: 150px;
        height: 40px;
        margin: 10px;
        padding: 10px;
        display: inline-block;
        text-align: center;
    }
    .border-width-demo p, .border-width-demo div {
        margin: 10px;
        padding: 8px;
    }
    .border-color-demo div {
        width: 200px;
        height: 100px;
        border: 2px solid #333;
        transition: border-color 0.5s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .border-color-demo div:hover {
        border-color: blue;
    }
    .border-radius-demo div {
        width: 150px;
        height: 100px;
        margin: 10px;
        display: inline-block;
        text-align: center;
        line-height: 100px;
    }
</style>

<div class="container">
    <h1>CSS Border</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS border properties are used to style the borders around HTML elements. They help create separation, emphasis, and visual appeal. Key properties include <code>border-style</code>, <code>border-color</code>, <code>border-width</code>, and <code>border-radius</code>.
    </div>

    <h2>📌 1) border-style</h2>
    <p>The <code>border-style</code> property specifies the type of border. Common values: <code>none</code>, <code>dotted</code>, <code>dashed</code>, <code>solid</code>, <code>double</code>, <code>groove</code>, <code>ridge</code>, <code>inset</code>, <code>outset</code>.</p>
    <pre><code>.dotted { border: 2px dotted #FFA500; }
.dashed { border: 2px dashed #008000; }
.solid { border: 2px solid #000; }
.double { border: 4px double #FF0000; }
.groove { border: 3px groove #3333FF; }
.ridge { border: 3px ridge #660066; }
.inset { border: 3px inset #006600; }
.outset { border: 3px outset #990000; }</code></pre>
    <div class="demo-box border-style-demo">
        <div style="border:2px dotted #FFA500; width:150px; display:inline-block; margin:5px; padding:10px;">Dotted</div>
        <div style="border:2px dashed #008000; width:150px; display:inline-block; margin:5px; padding:10px;">Dashed</div>
        <div style="border:2px solid #000; width:150px; display:inline-block; margin:5px; padding:10px;">Solid</div>
        <div style="border:4px double #FF0000; width:150px; display:inline-block; margin:5px; padding:10px;">Double</div>
        <div style="border:3px groove #3333FF; width:150px; display:inline-block; margin:5px; padding:10px;">Groove</div>
        <div style="border:3px ridge #660066; width:150px; display:inline-block; margin:5px; padding:10px;">Ridge</div>
        <div style="border:3px inset #006600; width:150px; display:inline-block; margin:5px; padding:10px;">Inset</div>
        <div style="border:3px outset #990000; width:150px; display:inline-block; margin:5px; padding:10px;">Outset</div>
    </div>

    <h2>📏 2) border-width</h2>
    <p>The <code>border-width</code> property sets the border thickness (in pixels, or thin/medium/thick). Must be used with <code>border-style</code>.</p>
    <pre><code>.thin-border { border: 2px solid #FF0000; }
.medium-border { border: 4px solid #00FF00; }
.thick-border { border: 6px solid #0000FF; }
.custom-border { border: 3px dashed #FFA500; }</code></pre>
    <div class="demo-box border-width-demo">
        <p style="border:2px solid #FF0000; padding:8px;">Thin Border (2px solid red)</p>
        <p style="border:4px solid #00FF00; padding:8px;">Medium Border (4px solid green)</p>
        <p style="border:6px solid #0000FF; padding:8px;">Thick Border (6px solid blue)</p>
        <div style="border:3px dashed #FFA500; padding:8px;">Custom Border (3px dashed orange)</div>
    </div>

    <h2>🎨 3) border-color</h2>
    <p>The <code>border-color</code> property sets the border color. You can use color names, HEX, or RGB values. Requires <code>border-style</code> to be set.</p>
    <pre><code>.my-element {
    border: 2px solid #333;
    transition: border-color 0.5s;
}
.my-element:hover {
    border-color: blue;
}</code></pre>
    <div class="demo-box border-color-demo">
        <div style="border:2px solid #333; transition: border-color 0.5s; width:200px; height:100px; display:flex; align-items:center; justify-content:center;">
            Hover me (border turns blue)
        </div>
    </div>

    <h2>🔘 4) border-radius</h2>
    <p>The <code>border-radius</code> property creates rounded corners. You can specify one value (all corners) or four values.</p>
    <pre><code>.rounded { border: 2px solid #333; border-radius: 15px; }
.circle { border: 2px solid #333; border-radius: 50%; width: 100px; height: 100px; }</code></pre>
    <div class="demo-box">
        <div style="border:2px solid #333; border-radius: 15px; width:150px; height:80px; display:inline-block; margin:10px; text-align:center; line-height:80px;">Rounded</div>
        <div style="border:2px solid #333; border-radius: 50%; width:100px; height:100px; display:inline-block; margin:10px; text-align:center; line-height:100px;">Circle</div>
        <div style="border:2px solid #333; border-radius: 30px 10px 30px 10px; width:150px; height:80px; display:inline-block; margin:10px; text-align:center; line-height:80px;">Elliptical</div>
    </div>

    <div class="note">
        💡 <strong>Shorthand property:</strong> You can combine border-width, border-style, and border-color into a single declaration:<br>
        <code>border: 2px solid #ff0000;</code><br>
        For rounded corners, add <code>border-radius: 10px;</code>
    </div>

    <footer>
        CSS Border – style, width, color, radius with live examples
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Border-radius",
              name: "CSS Border-radius",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .radius-demo {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
    .radius-card {
        background: #f0f9ff;
        border: 3px solid #ff6b6b;
        padding: 1rem;
        width: 220px;
        text-align: center;
        transition: all 0.2s;
    }
    .corner-demo {
        background: #e2f0e2;
        border: 4px solid #2c6e2c;
        padding: 2rem;
        width: 300px;
        margin: 0 auto;
        text-align: center;
    }
    .slash-demo {
        background: #ffe6f0;
        border: 4px solid #c44569;
        padding: 2rem;
        margin: 10px;
        text-align: center;
        min-width: 200px;
    }
</style>

<div class="container">
    <h1>CSS Border-radius Property</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>border-radius</code> property lets you create rounded corners for elements, adding elegance and modern feel to your designs. It is shorthand for four individual properties: <code>border-top-left-radius</code>, <code>border-top-right-radius</code>, <code>border-bottom-right-radius</code>, and <code>border-bottom-left-radius</code>.
    </div>

    <h2>📊 Individual Corner Properties</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Property</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>border-top-left-radius</code></td><td>Sets radius for top‑left corner</td></tr>
            <tr><td><code>border-top-right-radius</code></td><td>Sets radius for top‑right corner</td></tr>
            <tr><td><code>border-bottom-right-radius</code></td><td>Sets radius for bottom‑right corner</td></tr>
            <tr><td><code>border-bottom-left-radius</code></td><td>Sets radius for bottom‑left corner</td></tr>
        </tbody>
    </table>
    <div class="note">
        💡 If you omit a value, it follows this pattern: bottom‑left = top‑right, bottom‑right = top‑left.  
        Example: <code>border-radius: 10px 20px;</code> → top‑left & bottom‑right = 10px, top‑right & bottom‑left = 20px.
    </div>

    <h2>🎯 Basic Usage – One, Two, Three, Four Values</h2>
    <div class="demo-box">
        <div style="display:flex; flex-wrap:wrap; gap:15px; justify-content:center;">
            <div style="background:#7fd7e7; border-radius:20px; padding:20px; width:180px; text-align:center;">border-radius: 20px;<br>(all corners)</div>
            <div style="background:#ffa07a; border-radius:15% 10%; padding:20px; width:180px; text-align:center;">border-radius: 15% 10%;<br>(top-left/bottom-right = 15%,<br>top-right/bottom-left = 10%)</div>
            <div style="background:#98fb98; border-radius:20px 30px 10px; padding:20px; width:180px; text-align:center;">border-radius: 20px 30px 10px;<br>(top-left, top-right, bottom-right/bottom-left)</div>
            <div style="background:#b0c4de; border-radius:10px 20px 30px 40px; padding:20px; width:180px; text-align:center;">border-radius: 10px 20px 30px 40px;<br>(each corner)</div>
        </div>
        <pre><code>/* Single value */
border-radius: 20px;

/* Two values */
border-radius: 15% 10%;

/* Three values */
border-radius: 20px 30px 10px;

/* Four values */
border-radius: 10px 20px 30px 40px;</code></pre>
    </div>

    <h2>🔍 Specific Corners – Live Examples</h2>
    <div class="demo-box radius-demo">
        <div style="border-top-left-radius: 50px; background:#a8e6cf; padding:20px; width:200px; text-align:center; border:3px solid #1f6e43;">
            <strong>border-top-left-radius: 50px;</strong>
        </div>
        <div style="border-top-right-radius: 60px; background:#ffd3b6; padding:20px; width:200px; text-align:center; border:3px solid #b85c00;">
            <strong>border-top-right-radius: 60px;</strong>
        </div>
        <div style="border-bottom-right-radius: 70px; background:#ffaaa5; padding:20px; width:200px; text-align:center; border:3px solid #a12a2a;">
            <strong>border-bottom-right-radius: 70px;</strong>
        </div>
        <div style="border-bottom-left-radius: 80px; background:#c7ceea; padding:20px; width:200px; text-align:center; border:3px solid #3f4e8c;">
            <strong>border-bottom-left-radius: 80px;</strong>
        </div>
    </div>

    <h2>📐 Using Slash (/) – Horizontal / Vertical Radii</h2>
    <p>The slash syntax allows different horizontal and vertical radii, creating elliptical corners.</p>
    <div class="demo-box" style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center;">
        <div style="border-radius: 10% / 50%; background:#9b59b6; padding:30px; width:200px; text-align:center; color:white;">border-radius: 10% / 50%;</div>
        <div style="border-radius: 120px / 100px 10px; background:#e67e22; padding:30px; width:200px; text-align:center; color:white;">border-radius: 120px / 100px 10px;</div>
        <div style="border-radius: 50% 10em / 10% 20em; background:#3498db; padding:30px; width:200px; text-align:center; color:white;">border-radius: 50% 10em / 10% 20em;</div>
        <div style="border-radius: 100px 10em 120px / 30%; background:#1abc9c; padding:30px; width:200px; text-align:center; color:white;">border-radius: 100px 10em 120px / 30%;</div>
    </div>

    <h2>🖼️ Border‑radius on Images</h2>
    <div style="display:flex; gap:25px; justify-content:center; margin:1rem 0; flex-wrap:wrap;">
        <img src="https://picsum.photos/id/104/150/150" alt="random" style="border-radius: 30px; width:150px; height:150px; object-fit:cover; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
        <img src="https://picsum.photos/id/16/150/150" alt="random" style="border-radius: 50%; width:150px; height:150px; object-fit:cover; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
        <img src="https://picsum.photos/id/20/150/150" alt="random" style="border-radius: 30% 10% 40% 20%; width:150px; height:150px; object-fit:cover; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
    </div>
    <div class="note">
        💡 <strong>Pro tip:</strong> Use <code>border-radius: 50%;</code> on square images to make perfect circles. Combine with <code>object-fit: cover;</code> to avoid distortion.
    </div>

    <h2>📚 Full Example from Specification</h2>
    <pre><code>&lt;style&gt;
div {
  padding: 50px;
  margin: 20px;
  border: 6px ridge red;
  width: 300px;
  float: left;
  height: 150px;
}
#one { border-radius: 90px; background: lightgreen; }
#two { border-radius: 25% 10%; background: orange; }
#three { border-radius: 35px 10em 10%; background: cyan; }
#four { border-radius: 50px 50% 50cm 50em; background: lightblue; }
&lt;/style&gt;</code></pre>
    <div style="display:flex; flex-wrap:wrap; gap:15px; justify-content:center;">
        <div style="border-radius:90px; background:lightgreen; padding:20px; width:220px; text-align:center; border:6px ridge red;">border-radius: 90px;</div>
        <div style="border-radius:25% 10%; background:orange; padding:20px; width:220px; text-align:center; border:6px ridge red;">border-radius: 25% 10%;</div>
        <div style="border-radius:35px 10em 10%; background:cyan; padding:20px; width:220px; text-align:center; border:6px ridge red;">border-radius: 35px 10em 10%;</div>
        <div style="border-radius:50px 50% 50cm 50em; background:lightblue; padding:20px; width:220px; text-align:center; border:6px ridge red;">border-radius: 50px 50% 50cm 50em;</div>
    </div>

    <div class="intro-text" style="background:#f1f5f9; margin-top:2rem;">
        ✅ Mastering <code>border-radius</code> opens endless design possibilities – from smooth buttons to organic shapes. Experiment with different units (px, %, em) and the slash syntax for elliptical corners.
    </div>

    <footer>
        CSS Border-radius – Single, Multi‑value, Specific corners, Slash syntax, and Live demos
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Border-collapse",
              name: "CSS Border-collapse",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    table.demo-table {
        width: 100%;
        text-align: center;
        font-size: 18px;
        margin: 1rem 0;
    }
    .demo-table th, .demo-table td {
        padding: 8px;
    }
    .separate-table {
        border-collapse: separate;
        border-spacing: 4px;
    }
    .collapse-table {
        border-collapse: collapse;
    }
    .styled-table th, .styled-table td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    .heading-row {
        background-color: cadetblue;
    }
</style>

<div class="container">
    <h1>CSS Border-collapse Property</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>border-collapse</code> property controls how borders between table cells are rendered. It offers two main values: <code>separate</code> (default) – each cell has its own border with gaps; and <code>collapse</code> – adjacent borders merge into a single line, creating a cleaner, more compact table.
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>table {
    border-collapse: collapse;  /* or separate, initial, inherit */
}</code></pre>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li><code>separate</code> – Default. Borders are distinct; <code>border-spacing</code> adds gaps between cells.</li>
        <li><code>collapse</code> – Adjacent borders merge into one; <code>border-spacing</code> has no effect.</li>
        <li><code>initial</code> – Resets to default value.</li>
        <li><code>inherit</code> – Inherits value from parent element.</li>
    </ul>

    <h2>🔹 Example 1: border-collapse: separate (with border-spacing)</h2>
    <div class="demo-box">
        <table class="demo-table separate-table" style="border:2px solid blue; border-collapse:separate; border-spacing:4px; width:100%">
            <thead>
                <tr><th style="border:5px solid red; background:yellow">First_Name</th><th style="border:5px solid red; background:yellow">Last_Name</th><th style="border:5px solid red; background:yellow">Subject</th><th style="border:5px solid red; background:yellow">Marks</th></tr>
            </thead>
            <tbody>
                <tr><td style="border:5px solid violet; background:cyan">James</td><td style="border:5px solid violet; background:cyan">Gosling</td><td style="border:5px solid violet; background:cyan">Maths</td><td style="border:5px solid violet; background:cyan">92</td></tr>
                <tr><td style="border:5px solid violet; background:cyan">Alan</td><td style="border:5px solid violet; background:cyan">Rickman</td><td style="border:5px solid violet; background:cyan">Maths</td><td style="border:5px solid violet; background:cyan">89</td></tr>
                <tr><td style="border:5px solid violet; background:cyan">Sam</td><td style="border:5px solid violet; background:cyan">Mendes</td><td style="border:5px solid violet; background:cyan">Maths</td><td style="border:5px solid violet; background:cyan">82</td></tr>
            </tbody>
        </table>
        <pre><code>table {
    border-collapse: separate;
    border-spacing: 4px;
}
th, td {
    border: 5px solid ...;
}</code></pre>
        <div class="note">👉 Notice the gaps between cell borders – each cell keeps its own border.</div>
    </div>

    <h2>🔸 Example 2: border-collapse: collapse</h2>
    <div class="demo-box">
        <table class="demo-table collapse-table" style="border:2px solid blue; border-collapse:collapse; width:100%">
            <thead>
                <tr><th style="border:5px solid red; background:yellow">First_Name</th><th style="border:5px solid red; background:yellow">Last_Name</th><th style="border:5px solid red; background:yellow">Subject</th><th style="border:5px solid red; background:yellow">Marks</th></tr>
            </thead>
            <tbody>
                <tr><td style="border:5px solid violet; background:cyan">James</td><td style="border:5px solid violet; background:cyan">Gosling</td><td style="border:5px solid violet; background:cyan">Maths</td><td style="border:5px solid violet; background:cyan">92</td></tr>
                <tr><td style="border:5px solid violet; background:cyan">Alan</td><td style="border:5px solid violet; background:cyan">Rickman</td><td style="border:5px solid violet; background:cyan">Maths</td><td style="border:5px solid violet; background:cyan">89</td></tr>
                <tr><td style="border:5px solid violet; background:cyan">Sam</td><td style="border:5px solid violet; background:cyan">Mendes</td><td style="border:5px solid violet; background:cyan">Maths</td><td style="border:5px solid violet; background:cyan">82</td></tr>
            </tbody>
        </table>
        <pre><code>table {
    border-collapse: collapse;
}</code></pre>
        <div class="note">✅ Borders are merged – no gaps, cleaner appearance. The <code>border-spacing</code> property is ignored.</div>
    </div>

    <h2>📋 Practical Example – Product Table</h2>
    <div class="demo-box">
        <table style="width:100%; border-collapse:collapse">
            <tr class="heading-row" style="background-color:cadetblue"><th style="border:1px solid black; padding:8px; text-align:left">Product</th><th style="border:1px solid black; padding:8px; text-align:left">Price</th></tr>
            <tr class="data"><td style="border:1px solid black; padding:8px; text-align:left">Laptop</td><td style="border:1px solid black; padding:8px; text-align:left">$999</td></tr>
            <tr class="data"><td style="border:1px solid black; padding:8px; text-align:left">Smartphone</td><td style="border:1px solid black; padding:8px; text-align:left">$599</td></tr>
        </table>
        <pre><code>table {
    border-collapse: collapse;
}
th, td {
    border: 1px solid black;
    padding: 8px;
}</code></pre>
    </div>

    <h2>✅ Advantages of border-collapse: collapse</h2>
    <ul style="margin-left: 1.5rem; margin-bottom:1rem;">
        <li><strong>Improved Aesthetics:</strong> Creates a neater, more organized table layout, especially for dense data.</li>
        <li><strong>Space Efficient:</strong> Removes unnecessary gaps, optimising screen real estate.</li>
        <li><strong>Consistent Styling:</strong> Makes complex table borders easier to manage and style uniformly.</li>
    </ul>

    <h2>⚠️ Cell Spacing vs. Padding</h2>
    <ul style="margin-left: 1.5rem; margin-bottom:1rem;">
        <li><strong>Cell Spacing</strong> (<code>border-spacing</code>) – only works with <code>border-collapse: separate</code>. Controls space between cells.</li>
        <li><strong>Padding</strong> – works always. Controls space between cell content and its border. Use <code>padding</code> on <code>th</code>/<code>td</code>.</li>
    </ul>
    <div class="note">💡 When using <code>border-collapse: collapse</code>, cell spacing is ignored; rely on padding to control inner spacing.</div>

    <h2>🧩 Nested Tables & Browser Support</h2>
    <p>Nested tables inherit the <code>border-collapse</code> value from the parent table. The property is well‑supported in all modern browsers, but always test for consistency.</p>

    <h2>📐 Best Practices</h2>
    <ul style="margin-left: 1.5rem; margin-bottom:1rem;">
        <li><strong>Accessibility:</strong> Ensure tables remain readable when collapsing borders. Avoid overly thin or low‑contrast borders.</li>
        <li><strong>Responsive Design:</strong> Test table layouts on different screen sizes; collapsed borders often behave better on mobile.</li>
        <li><strong>Semantic Markup:</strong> Use tables only for tabular data. For layouts, consider Flexbox or Grid.</li>
    </ul>

    <div class="intro-text" style="background:#f1f5f9; margin-top:1rem;">
        ✅ <strong>Conclusion:</strong> <code>border-collapse</code> gives you powerful control over table border rendering. Use <code>separate</code> when you need spacing between cells, and <code>collapse</code> for a clean, unified border style – perfect for modern, minimalist designs.
    </div>

    <footer>
        CSS Border-collapse – separate vs. collapse, examples, advantages, best practices
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Border-spacing",
              name: "CSS Border-spacing",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .demo-table {
        width: 100%;
        text-align: center;
        font-size: 18px;
        background-color: lightgreen;
        border: 2px solid blue;
    }
    .demo-table th {
        border: 5px solid red;
        background-color: yellow;
        padding: 8px;
    }
    .demo-table td {
        border: 5px solid violet;
        background-color: cyan;
        padding: 8px;
    }
</style>

<div class="container">
    <h1>CSS Border-spacing Property</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>border-spacing</code> property sets the distance between borders of adjacent table cells. 
        It works only when <code>border-collapse: separate</code> is applied. If <code>border-collapse: collapse</code> is used, border‑spacing has no effect.
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>table {
    border-collapse: separate;
    border-spacing: length | initial | inherit;
}</code></pre>
    <ul style="margin-left: 1.5rem; margin-bottom:1rem;">
        <li><strong>length</strong> – Can be one or two values (px, em, pt, etc.). Negative values are not allowed.</li>
        <li><strong>one value</strong> – Sets both horizontal and vertical spacing equally.</li>
        <li><strong>two values</strong> – First sets horizontal spacing (between columns), second sets vertical spacing (between rows).</li>
        <li><strong>initial</strong> – Resets to default (0).</li>
        <li><strong>inherit</strong> – Inherits from parent.</li>
    </ul>

    <h2>🔹 Example 1: Single Value (border-spacing: 45px)</h2>
    <div class="demo-box">
        <table class="demo-table" style="border-collapse: separate; border-spacing: 45px;">
            <thead>
                <tr><th>First_Name</th><th>Last_Name</th><th>Subject</th><th>Marks</th></tr>
            </thead>
            <tbody>
                <tr><td>James</td><td>Gosling</td><td>Maths</td><td>92</td></tr>
                <tr><td>Alan</td><td>Rickman</td><td>Maths</td><td>89</td></tr>
                <tr><td>Sam</td><td>Mendes</td><td>Maths</td><td>82</td></tr>
            </tbody>
        </table>
        <pre><code>table {
    border-collapse: separate;
    border-spacing: 45px;
}</code></pre>
        <div class="note">✅ Both horizontal and vertical gaps between cells are 45 pixels. Notice the extra space around each cell.</div>
    </div>

    <h2>🔸 Example 2: Two Values (border-spacing: 20pt 1em)</h2>
    <div class="demo-box">
        <table class="demo-table" style="border-collapse: separate; border-spacing: 20pt 1em;">
            <thead>
                <tr><th>First_Name</th><th>Last_Name</th><th>Subject</th><th>Marks</th></tr>
            </thead>
            <tbody>
                <tr><td>James</td><td>Gosling</td><td>Maths</td><td>92</td></tr>
                <tr><td>Alan</td><td>Rickman</td><td>Maths</td><td>89</td></tr>
                <tr><td>Sam</td><td>Mendes</td><td>Maths</td><td>82</td></tr>
            </tbody>
        </table>
        <pre><code>table {
    border-collapse: separate;
    border-spacing: 20pt 1em;
}</code></pre>
        <div class="note">👉 First value (20pt) controls horizontal spacing; second value (1em) controls vertical spacing. Horizontal and vertical gaps are different.</div>
    </div>

    <h2>🧪 When border-collapse: collapse</h2>
    <div class="demo-box">
        <table class="demo-table" style="border-collapse: collapse;">
            <thead><tr><th>Name</th><th>Score</th></tr></thead>
            <tbody><tr><td>Alice</td><td>100</td></tr><tr><td>Bob</td><td>95</td></tr></tbody>
         </table>
        <pre><code>table {
    border-collapse: collapse;  /* border-spacing is ignored */
}</code></pre>
        <div class="note">⚠️ With <code>border-collapse: collapse</code>, the <code>border-spacing</code> property has no effect – borders are merged.</div>
    </div>

    <h2>🌐 Browser Compatibility</h2>
    <p>The <code>border-spacing</code> property is supported in all modern browsers: Chrome, Firefox, Safari, Edge, and Opera. However, always test on older versions if necessary.</p>

    <div class="note">
        💡 <strong>Conclusion:</strong> Use <code>border-spacing</code> when you need controlled gaps between table cells. Remember it requires <code>border-collapse: separate</code>. Combine with <code>border-spacing</code> to fine‑tune both horizontal and vertical spacing for a clean, readable table layout.
    </div>

    <footer>
        CSS Border-spacing – Single & two values, syntax, examples, compatibility
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Display",
              name: "CSS Display",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Display</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>display</code> property is one of the most important CSS properties. It controls the layout behavior of an element – how it is rendered on the page. Every element has a default display value (e.g., <code>&lt;div&gt;</code> is <code>block</code>, <code>&lt;span&gt;</code> is <code>inline</code>). This property lets you change that default.
    </div>

    <h2>📌 Common Display Values</h2>

    <h3>1. display: inline</h3>
    <p>Inline elements take only the width they need, do not cause line breaks, and cannot have explicit width/height.</p>
    <pre><code>p {
    display: inline;
}</code></pre>
    <div class="demo-box">
        <p style="display:inline; background:#f0f0f0; padding:2px 4px;">Hello tpointtech.com</p>
        <p style="display:inline; background:#f0f0f0; padding:2px 4px;">Java Tutorial.</p>
        <p style="display:inline; background:#f0f0f0; padding:2px 4px;">SQL Tutorial.</p>
        <p style="display:inline; background:#f0f0f0; padding:2px 4px;">HTML Tutorial.</p>
        <p style="display:inline; background:#f0f0f0; padding:2px 4px;">CSS Tutorial.</p>
    </div>

    <h3>2. display: inline-block</h3>
    <p>Similar to inline, but you can set width and height. Elements sit side by side.</p>
    <pre><code>p {
    display: inline-block;
    width: 150px;  /* width works */
}</code></pre>
    <div class="demo-box">
        <p style="display:inline-block; width:150px; background:#e0f2fe; margin:5px; padding:8px;">Hello tpointtech.com</p>
        <p style="display:inline-block; width:150px; background:#e0f2fe; margin:5px; padding:8px;">Java Tutorial.</p>
        <p style="display:inline-block; width:150px; background:#e0f2fe; margin:5px; padding:8px;">SQL Tutorial.</p>
        <p style="display:inline-block; width:150px; background:#e0f2fe; margin:5px; padding:8px;">HTML Tutorial.</p>
        <p style="display:inline-block; width:150px; background:#e0f2fe; margin:5px; padding:8px;">CSS Tutorial.</p>
    </div>

    <h3>3. display: block</h3>
    <p>Block elements take full width available, and cause line breaks before/after.</p>
    <pre><code>p {
    display: block;
}</code></pre>
    <div class="demo-box">
        <p style="display:block; background:#d1fae5; margin:5px 0; padding:8px;">Hello tpointtech.com</p>
        <p style="display:block; background:#d1fae5; margin:5px 0; padding:8px;">Java Tutorial.</p>
        <p style="display:block; background:#d1fae5; margin:5px 0; padding:8px;">SQL Tutorial.</p>
        <p style="display:block; background:#d1fae5; margin:5px 0; padding:8px;">HTML Tutorial.</p>
        <p style="display:block; background:#d1fae5; margin:5px 0; padding:8px;">CSS Tutorial.</p>
    </div>

    <h3>4. display: run-in</h3>
    <p>This value is not well‑supported (especially in Firefox). It makes an element either block or inline depending on context.</p>
    <div class="warning">
        ⚠️ <code>display: run-in</code> has limited browser support. Avoid using it in production.
    </div>

    <h3>5. display: none</h3>
    <p>The element is completely removed from the page – it takes no space and is invisible.</p>
    <pre><code>h1.hidden {
    display: none;
}</code></pre>
    <div class="demo-box">
        <h1>This heading is visible.</h1>
        <h1 style="display:none;">This is not visible (display: none).</h1>
        <p>You can see that the hidden heading does not take any space.</p>
    </div>

    <h2>🧩 Other Important Display Values (CSS3+)</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>flex</code></td><td>Block‑level flex container.</td></tr>
            <tr><td><code>inline-flex</code></td><td>Inline‑level flex container.</td></tr>
            <tr><td><code>grid</code></td><td>Block‑level grid container.</td></tr>
            <tr><td><code>inline-grid</code></td><td>Inline‑level grid container.</td></tr>
            <tr><td><code>table</code></td><td>Behaves like <code>&lt;table&gt;</code>.</td></tr>
            <tr><td><code>inline-table</code></td><td>Inline‑level table.</td></tr>
            <tr><td><code>table-cell</code></td><td>Behaves like <code>&lt;td&gt;</code>.</td></tr>
            <tr><td><code>table-row</code></td><td>Behaves like <code>&lt;tr&gt;</code>.</td></tr>
            <tr><td><code>list-item</code></td><td>Behaves like <code>&lt;li&gt;</code>.</td></tr>
        </tbody>
    </table>

    <div class="demo-box">
        <p>Example: <code>display: flex</code> creates a flex container:</p>
        <div style="display:flex; gap:10px; background:#ffe0f0; padding:10px;">
            <div style="background:#ffb3c6; padding:10px;">1</div>
            <div style="background:#ffb3c6; padding:10px;">2</div>
            <div style="background:#ffb3c6; padding:10px;">3</div>
        </div>
    </div>

    <div class="note">
        💡 <strong>Key Takeaways:</strong><br>
        – <code>display: block</code> → full width, line break.<br>
        – <code>display: inline</code> → width = content, no line break, can't set width/height.<br>
        – <code>display: inline-block</code> → like inline but width/height can be set.<br>
        – <code>display: none</code> → removes element from layout.<br>
        – Modern layouts rely on <code>flex</code> and <code>grid</code> for responsive designs.
    </div>

    <footer>
        CSS Display – inline, inline-block, block, none, flex, grid and more
    </footer>
</div>

                  `
            },

             {
              id: "CSS-Cursor-Pointer",
              name: "CSS Cursor Pointer",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .cursor-demo {
        margin: 10px 0;
        padding: 10px;
        background: #fef9e3;
        border-radius: 8px;
        text-align: center;
        transition: all 0.1s;
    }
    input[type="text"], input[type="email"] {
        padding: 8px;
        margin: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>

<div class="container">
    <h1>CSS Cursor Pointer</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>cursor</code> property specifies the mouse cursor type when hovering over an element. By default, links show a hand (pointer), but you can customize cursors for any element. This improves user experience by visually indicating actions like clicking, dragging, resizing, or waiting.
    </div>

    <h2>📌 Syntax & Common Values</h2>
    <pre><code>selector {
    cursor: value;
}</code></pre>
    <p>Common values (hover over each to see effect):</p>
    <div class="demo-box">
        <div class="cursor-demo" style="cursor:auto;">auto (default)</div>
        <div class="cursor-demo" style="cursor:pointer;">pointer (hand – indicates link/clickable)</div>
        <div class="cursor-demo" style="cursor:wait;">wait (loading/busy)</div>
        <div class="cursor-demo" style="cursor:help;">help (question mark)</div>
        <div class="cursor-demo" style="cursor:crosshair;">crosshair (precision selection)</div>
        <div class="cursor-demo" style="cursor:move;">move (draggable)</div>
        <div class="cursor-demo" style="cursor:text;">text (text selection)</div>
        <div class="cursor-demo" style="cursor:grab;">grab (grab hand)</div>
        <div class="cursor-demo" style="cursor:not-allowed;">not-allowed (forbidden)</div>
        <div class="cursor-demo" style="cursor:zoom-in;">zoom-in (magnify)</div>
    </div>

    <h2>🖱️ Example: Changing Cursor on Hover (List Items)</h2>
    <p>Use <code>li:hover { cursor: grab; }</code> to change cursor when hovering over list items.</p>
    <div class="demo-box">
        <style>
            .cursor-list li:hover {
                cursor: grab;
            }
        </style>
        <ul class="cursor-list" style="margin-left: 1.5rem;">
            <li>CSE</li>
            <li>ECE</li>
            <li>IT</li>
            <li>MECH</li>
            <li>CIVIL</li>
        </ul>
        <p><small>👉 Hover over any list item – cursor changes to a hand (grab).</small></p>
    </div>

    <h2>🎨 Changing Cursor Color (Caret-color)</h2>
    <p>For text input fields, you can change the blinking cursor (caret) color using <code>caret-color</code> property.</p>
    <pre><code>input[type="text"] {
    caret-color: red;
}
input[type="email"] {
    caret-color: blue;
}</code></pre>
    <div class="demo-box">
        <label>Name: <input type="text" style="caret-color: red;" placeholder="Red caret"></label><br><br>
        <label>Email: <input type="email" style="caret-color: blue;" placeholder="Blue caret"></label>
    </div>

    <h2>⏳ Busy/Wait Cursor</h2>
    <p>Use <code>cursor: wait;</code> to indicate background processing.</p>
    <div class="demo-box">
        <p class="cursor-demo" style="cursor:wait; background:#ffe0e0;">Hover here – wait cursor (loading spinner or hourglass)</p>
    </div>

    <h2>📋 Complete Table of Cursor Values</h2>
    <div class="demo-box" style="max-height: 300px; overflow-y: auto;">
        <table style="width:100%; border-collapse:collapse;">
            <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>auto</code></td><td>Browser determines cursor based on context</td></tr>
                <tr><td><code>pointer</code></td><td>Hand – indicates clickable link/button</td></tr>
                <tr><td><code>wait</code></td><td>Busy/loading (hourglass or spinner)</td></tr>
                <tr><td><code>help</code></td><td>Question mark – indicates help available</td></tr>
                <tr><td><code>crosshair</code></td><td>Crosshair – precision selection</td></tr>
                <tr><td><code>move</code></td><td>Four‑arrow – element can be moved</td></tr>
                <tr><td><code>text</code></td><td>I‑beam – indicates selectable text</td></tr>
                <tr><td><code>grab</code></td><td>Open hand – draggable (before drag)</td></tr>
                <tr><td><code>grabbing</code></td><td>Closed hand – during drag</td></tr>
                <tr><td><code>not-allowed</code></td><td>Forbidden sign – action not permitted</td></tr>
                <tr><td><code>zoom-in</code></td><td>Magnifying glass with plus – zoom in</td></tr>
                <tr><td><code>zoom-out</code></td><td>Magnifying glass with minus – zoom out</td></tr>
                <tr><td><code>col-resize</code></td><td>Left/right arrows – resize column</td></tr>
                <tr><td><code>row-resize</code></td><td>Up/down arrows – resize row</td></tr>
                <tr><td><code>e-resize</code>, <code>w-resize</code>, <code>n-resize</code>, <code>s-resize</code></td><td>Edge resize cursors</td></tr>
                <tr><td><code>url('custom.cur')</code></td><td>Custom cursor image (followed by fallback)</td></tr>
            </tbody>
        </table>
    </div>

    <div class="note">
        💡 <strong>Pro Tips:</strong><br>
        – Always provide a fallback generic cursor (e.g., <code>cursor: url('pointer.cur'), pointer;</code>).<br>
        – Use <code>caret-color</code> to improve form usability (e.g., red caret for error fields).<br>
        – Avoid using <code>cursor: none</code> unless you implement a custom cursor overlay.
    </div>

    <footer>
        CSS Cursor Pointer – complete guide with examples, caret-color, and interactive demos
    </footer>
</div>

                  `
            },

             {
              id: "CSS-Button",
              name: "CSS Button",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
        justify-content: flex-start;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    /* Button demo styles */
    .demo-btn {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .demo-btn:hover {
        background-color: #45a049;
    }
    .demo-btn:active {
        background-color: #3e8e41;
    }
    .small-btn {
        font-size: 12px;
        padding: 5px 10px;
    }
    .medium-btn {
        font-size: 16px;
        padding: 10px 20px;
    }
    .large-btn {
        font-size: 20px;
        padding: 15px 30px;
    }
    .border-shadow-btn {
        border: 2px solid #4CAF50;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
        background-color: white;
        color: #4CAF50;
    }
    .border-shadow-btn:hover {
        background-color: #4CAF50;
        color: white;
    }
    .advanced-btn {
        background: linear-gradient(to bottom, #4CAF50, #45a049);
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
        text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
        transition: transform 0.2s;
    }
    .advanced-btn:hover {
        transform: scale(1.02);
        background: linear-gradient(to bottom, #45a049, #3d8b40);
    }
    .icon-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
</style>

<div class="container">
    <h1>Button in CSS</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS allows you to fully customize buttons – from colors, fonts, and borders to hover effects, shadows, and animations. Well‑styled buttons improve user experience and make your interface more engaging.
    </div>

    <h2>📌 Basic Button Markup & Selectors</h2>
    <p>Use the <code>&lt;button&gt;</code> element in HTML. Style it by element type, class, or ID.</p>
    <pre><code>&lt;button class="my-btn"&gt;Click me&lt;/button&gt;

/* Element selector */
button { background-color: #4CAF50; }

/* Class selector */
.my-btn { color: white; }

/* ID selector */
#my-btn { padding: 10px 20px; }</code></pre>

    <h2>🎨 Basic Button Styles</h2>
    <div class="demo-box">
        <button class="demo-btn">Default Button</button>
    </div>
    <pre><code>button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
button:hover { background-color: #45a049; }
button:active { background-color: #3e8e41; }</code></pre>

    <h2>📏 Button Sizes</h2>
    <div class="demo-box">
        <button class="demo-btn small-btn">Small</button>
        <button class="demo-btn medium-btn">Medium</button>
        <button class="demo-btn large-btn">Large</button>
    </div>
    <pre><code>.small-btn { font-size: 12px; padding: 5px 10px; }
.medium-btn { font-size: 16px; padding: 10px 20px; }
.large-btn { font-size: 20px; padding: 15px 30px; }</code></pre>

    <h2>🔲 Borders & Shadows</h2>
    <div class="demo-box">
        <button class="demo-btn border-shadow-btn">Border & Shadow</button>
    </div>
    <pre><code>button {
    border: 2px solid #4CAF50;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
}</code></pre>

    <h2>✨ Advanced Styling (Gradient, Rounded Corners, Text Shadow)</h2>
    <div class="demo-box">
        <button class="advanced-btn">Gradient Button</button>
    </div>
    <pre><code>button {
    background: linear-gradient(to bottom, #4CAF50, #45a049);
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
    transition: transform 0.2s;
}
button:hover { transform: scale(1.02); }</code></pre>

    <h2>🖱️ Hover & Active States</h2>
    <div class="demo-box">
        <button class="demo-btn" style="background-color:#008CBA;">Hover over me</button>
    </div>
    <pre><code>button:hover { background-color: #45a049; }
button:active { background-color: #3e8e41; }</code></pre>

    <h2>🖼️ Buttons with Icons (Unicode / Emoji)</h2>
    <div class="demo-box">
        <button class="demo-btn icon-btn">👍 Like</button>
        <button class="demo-btn icon-btn">📥 Download</button>
        <button class="demo-btn icon-btn">⭐ Star</button>
    </div>
    <pre><code>.icon-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
}</code></pre>

    <h2>📱 Responsive Buttons</h2>
    <p>Use media queries to adjust button size on smaller screens.</p>
    <pre><code>@media (max-width: 600px) {
    button {
        font-size: 14px;
        padding: 8px 16px;
    }
}</code></pre>
    <div class="demo-box">
        <button class="demo-btn" style="background-color:#f39c12;">Resize your browser</button>
    </div>

    <h2>🧩 Complete Attractive Button Example</h2>
    <div class="demo-box">
        <button style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border: none; border-radius: 50px; font-weight: bold; letter-spacing: 1px; box-shadow: 0 8px 15px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer;">
            Modern Gradient Button
        </button>
        <button style="background: #ff7e5f; background: linear-gradient(to right, #feb47b, #ff7e5f); color: white; border: none; padding: 12px 28px; border-radius: 8px; font-size: 16px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
            Shadow Button
        </button>
    </div>

    <div class="note">
        💡 <strong>Best Practices:</strong><br>
        – Use <code>cursor: pointer;</code> to indicate clickability.<br>
        – Ensure sufficient color contrast between background and text.<br>
        – Add <code>outline: none;</code> but provide a visible <code>:focus</code> style for accessibility.<br>
        – Use <code>transition</code> for smooth hover effects.<br>
        – Test buttons on mobile devices – ensure touch targets are at least 44×44px.
    </div>

    <footer>
        CSS Buttons – styling, sizing, hover effects, gradients, icons, and responsive design
    </footer>
</div>

                  `
            },

             {
              id: "CSS-Float",
              name: "CSS Float",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .float-img {
        width: 150px;
        margin: 0 15px 10px 0;
    }
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
    .box {
        width: 30%;
        background: #cbd5e1;
        padding: 20px;
        text-align: center;
        margin: 10px;
    }
</style>

<div class="container">
    <h1>CSS Float</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The CSS <code>float</code> property is used to push an element to the left or right, allowing other elements (like text) to wrap around it. It is commonly used with images and for creating multi‑column layouts. Elements are floated only horizontally – left or right.
    </div>

    <h2>📌 How Float Works</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li>Floated elements are moved as far left or right as possible.</li>
        <li>Elements after the float will flow around it.</li>
        <li>Elements before the float are not affected.</li>
        <li>A floated image to the right makes text flow on the left; floated to the left makes text flow on the right.</li>
    </ul>

    <h2>🎯 Float Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>none</code></td><td>Default – element does not float.</td></tr>
            <tr><td><code>left</code></td><td>Floats element to the left.</td></tr>
            <tr><td><code>right</code></td><td>Floats element to the right.</td></tr>
            <tr><td><code>initial</code></td><td>Sets to default.</td></tr>
            <tr><td><code>inherit</code></td><td>Inherits from parent.</td></tr>
        </tbody>
    </table>

    <h2>📖 Example 1: Image floated to the right</h2>
    <div class="demo-box">
        <img src="https://picsum.photos/id/104/150/100" alt="demo" style="float:right; margin:0 0 10px 15px; width:150px; border-radius:8px;">
        <p>This paragraph contains an image with <code>float: right;</code>. The image floats to the right, and the text flows around it on the left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p style="clear:both;"></p>
    </div>
    <pre><code>img {
    float: right;
    margin: 0 0 10px 15px;
}</code></pre>

    <h2>📖 Example 2: Image floated to the left</h2>
    <div class="demo-box">
        <img src="https://picsum.photos/id/20/150/100" alt="demo" style="float:left; margin:0 15px 10px 0; width:150px; border-radius:8px;">
        <p>Here the image is floated to the left (<code>float: left;</code>). The text wraps around it on the right side. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p style="clear:both;"></p>
    </div>

    <h2>🧹 The Clear Property</h2>
    <p>The <code>clear</code> property controls how elements behave after a floated element. Values: <code>left</code>, <code>right</code>, <code>both</code>, <code>none</code>, <code>inherit</code>.</p>
    <div class="demo-box">
        <div style="float:left; width:100px; background: #f39c12; padding:10px; margin:5px;">Left Float</div>
        <div style="float:left; width:100px; background: #e67e22; padding:10px; margin:5px;">Another Left</div>
        <div style="clear:left; background: #bdc3c7; padding:10px; margin-top:10px;">
            This div uses <code>clear: left;</code> so it moves below the floated left elements.
        </div>
    </div>
    <pre><code>.clear-left {
    clear: left;
}</code></pre>

    <h2>🏗️ Float-based Layout (old technique)</h2>
    <p>Before Flexbox and Grid, floats were used to create multi‑column layouts. The parent container often needs a <code>clearfix</code> to contain floats.</p>
    <div class="demo-box">
        <div style="float:left; width:30%; background:#a8e6cf; padding:10px; margin:5px;">Column 1</div>
        <div style="float:left; width:30%; background:#ffd3b6; padding:10px; margin:5px;">Column 2</div>
        <div style="float:left; width:30%; background:#ffaaa5; padding:10px; margin:5px;">Column 3</div>
        <div style="clear:both;"></div>
    </div>
    <pre><code>.column {
    float: left;
    width: 30%;
    margin: 5px;
}
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}</code></pre>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – Floated elements are taken out of the normal flow – the parent container may collapse unless cleared.<br>
        – Use <code>clear: both</code> to force an element below all floats.<br>
        – For modern layouts, consider Flexbox or Grid instead of floats, unless you need text‑wrapping around images.
    </div>

    <footer>
        CSS Float – left, right, clear, and layout examples
    </footer>
</div>

                  `
            },

             {
              id: "CSS-Font",
              name: "CSS Font",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .font-demo p {
        margin: 8px 0;
    }
</style>

<div class="container">
    <h1>CSS Font</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS font properties control the appearance of text: color, family, size, style, variant, and weight. Mastering these properties helps you create readable, visually appealing typography.
    </div>

    <h2>1️⃣ CSS Font Color</h2>
    <p>Use <code>color</code> property (not strictly a font property, but essential). Colors can be defined by name, hexadecimal, or RGB.</p>
    <pre><code>h1 { color: red; }
h2 { color: #9000A1; }
p { color: rgb(0, 220, 98); }</code></pre>
    <div class="demo-box">
        <h1 style="color:red;">This is heading 1 (red)</h1>
        <h2 style="color:#9000A1;">This is heading 2 (#9000A1)</h2>
        <p style="color:rgb(0, 220, 98);">This paragraph uses rgb(0, 220, 98).</p>
    </div>

    <h2>2️⃣ CSS Font Family</h2>
    <p>Font families are divided into generic families: <strong>serif</strong>, <strong>sans‑serif</strong>, <strong>monospace</strong>. You can also specify specific fonts like Arial, Times New Roman, etc.</p>
    <pre><code>h1 { font-family: sans-serif; }
h2 { font-family: serif; }
p { font-family: monospace; }</code></pre>
    <div class="demo-box">
        <h1 style="font-family:sans-serif;">This heading is sans‑serif (e.g., Arial)</h1>
        <h2 style="font-family:serif;">This heading is serif (e.g., Times New Roman)</h2>
        <p style="font-family:monospace;">This paragraph uses monospace (Courier New).</p>
    </div>

    <h2>3️⃣ CSS Font Size</h2>
    <p>You can set font size using absolute keywords (xx‑small to xx‑large), relative keywords (smaller, larger), percentages, pixels, em, rem, etc.</p>
    <div class="demo-box">
        <p style="font-size:xx-small;">xx‑small</p>
        <p style="font-size:x-small;">x‑small</p>
        <p style="font-size:small;">small</p>
        <p style="font-size:medium;">medium (default)</p>
        <p style="font-size:large;">large</p>
        <p style="font-size:x-large;">x‑large</p>
        <p style="font-size:xx-large;">xx‑large</p>
        <p style="font-size:smaller;">smaller (relative)</p>
        <p style="font-size:larger;">larger (relative)</p>
        <p style="font-size:200%;">200% (percentage)</p>
        <p style="font-size:20px;">20px (pixels)</p>
    </div>
    <pre><code>p { font-size: 20px; }
h1 { font-size: 150%; }</code></pre>

    <h2>4️⃣ CSS Font Style</h2>
    <p>Use <code>font-style</code> to set normal, italic, or oblique text.</p>
    <pre><code>h2 { font-style: italic; }
h3 { font-style: oblique; }
h4 { font-style: normal; }</code></pre>
    <div class="demo-box">
        <h2 style="font-style:italic;">Italic font</h2>
        <h3 style="font-style:oblique;">Oblique font (similar to italic)</h3>
        <h4 style="font-style:normal;">Normal font</h4>
    </div>

    <h2>5️⃣ CSS Font Variant</h2>
    <p><code>font-variant: small-caps;</code> displays text in small capital letters.</p>
    <pre><code>p { font-variant: small-caps; }
h3 { font-variant: normal; }</code></pre>
    <div class="demo-box">
        <h3 style="font-variant:normal;">Normal variant</h3>
        <p style="font-variant:small-caps;">This paragraph uses small-caps.</p>
    </div>

    <h2>6️⃣ CSS Font Weight</h2>
    <p><code>font-weight</code> controls boldness. Values: normal, bold, bolder, lighter, or numeric (100–900, where 400 = normal, 700 = bold).</p>
    <div class="demo-box">
        <p style="font-weight:bold;">bold</p>
        <p style="font-weight:bolder;">bolder</p>
        <p style="font-weight:lighter;">lighter</p>
        <p style="font-weight:100;">100 (thin)</p>
        <p style="font-weight:300;">300 (light)</p>
        <p style="font-weight:400;">400 (normal)</p>
        <p style="font-weight:700;">700 (bold)</p>
        <p style="font-weight:900;">900 (black)</p>
    </div>

    <div class="note">
        💡 <strong>Shorthand:</strong> Use <code>font</code> to combine multiple properties in one declaration:<br>
        <code>font: italic small-caps bold 20px/1.5 Arial, sans-serif;</code><br>
        The order must be: <em>style variant weight size/line-height family</em>.
    </div>

    <footer>
        CSS Font – color, family, size, style, variant, weight, and shorthand
    </footer>
</div>

                  `
            },

             {
              id: "CSS-Font-Size",
              name: "CSS Font Size",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Font-size</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>font-size</code> property specifies the height and size of the text. Default value is <code>medium</code>. You can use absolute keywords, relative keywords, pixels (px), em, rem, viewport units (vw), or physical length units (cm, pt, etc.).
    </div>

    <h2>📌 Absolute & Relative Size Keywords</h2>
    <div class="demo-box">
        <p style="font-size:xx-small;">xx-small</p>
        <p style="font-size:x-small;">x-small</p>
        <p style="font-size:small;">small</p>
        <p style="font-size:medium;">medium (default)</p>
        <p style="font-size:large;">large</p>
        <p style="font-size:x-large;">x-large</p>
        <p style="font-size:xx-large;">xx-large</p>
        <p style="font-size:smaller;">smaller (relative)</p>
        <p style="font-size:larger;">larger (relative)</p>
    </div>

    <h2>📏 Font-size with Pixels (px)</h2>
    <p>Pixels provide precise control.</p>
    <pre><code>#first { font-size: 40px; }
#second { font-size: 20px; }</code></pre>
    <div class="demo-box">
        <p style="font-size:40px;">This paragraph is 40px.</p>
        <p style="font-size:20px;">This paragraph is 20px.</p>
    </div>

    <h2>📐 Font-size with em</h2>
    <p><code>em</code> is relative to the parent element's font size. Default browser size = 16px, so 1em = 16px. Formula: <code>em = pixels / 16</code>.</p>
    <pre><code>#first { font-size: 2.5em; }   /* 40px/16 */
#second { font-size: 1.875em; } /* 30px/16 */
#third { font-size: 0.875em; }  /* 14px/16 */</code></pre>
    <div class="demo-box">
        <p style="font-size:2.5em;">2.5em (approx 40px)</p>
        <p style="font-size:1.875em;">1.875em (approx 30px)</p>
        <p style="font-size:0.875em;">0.875em (approx 14px)</p>
    </div>

    <h2>📱 Responsive Font-size with vw (Viewport Width)</h2>
    <p><code>1vw = 1% of the viewport width</code>. Text scales with browser window width.</p>
    <div class="demo-box">
        <p style="font-size:5vw;">5vw (resize browser to see change)</p>
        <p style="font-size:10vw;">10vw</p>
    </div>

    <h2>📏 Font-size with Length (cm, pt, etc.)</h2>
    <p>Physical units like cm, mm, pt, pc. Negative values not allowed.</p>
    <pre><code>.length { font-size: 5cm; color: red; }</code></pre>
    <div class="demo-box">
        <p style="font-size:5cm; color:red;">5cm text (very large)</p>
    </div>

    <h2>🧪 Additional: rem and Percentage</h2>
    <p><code>rem</code> is relative to root (html) font size. <code>%</code> is relative to parent.</p>
    <div class="demo-box">
        <p style="font-size:1.5rem;">1.5rem (relative to root)</p>
        <p style="font-size:150%;">150% of parent</p>
    </div>

    <div class="note">
        💡 <strong>Best Practices:</strong><br>
        – Use <code>rem</code> for global consistency (set <code>html { font-size: 62.5%; }</code> → 1rem = 10px).<br>
        – Use <code>em</code> for component‑relative scaling.<br>
        – For responsive typography, combine <code>vw</code> with <code>clamp()</code> or media queries.<br>
        – Avoid overusing absolute length units (cm, pt) because they behave differently across screens.
    </div>

    <footer>
        CSS Font-size – absolute keywords, px, em, rem, vw, length units and responsive design
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Font-Family",
              name: "CSS Font Family",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .font-demo p {
        margin: 12px 0;
        font-size: 1.2rem;
    }
</style>

<div class="container">
    <h1>CSS font-family</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>font-family</code> property specifies the preferred font(s) for text. You can provide a list of fonts (a font stack); the browser uses the first available. Fallback generic families (serif, sans‑serif, monospace, cursive, fantasy) ensure consistent rendering.
    </div>

    <h2>📌 Basic Syntax & Font Stacks</h2>
    <pre><code>body {
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    font-family: "Times New Roman", Georgia, serif;
}</code></pre>
    <div class="demo-box font-demo">
        <p style="font-family: Arial, Helvetica, sans-serif;">This uses Arial → Helvetica → sans‑serif.</p>
        <p style="font-family: 'Times New Roman', Georgia, serif;">Times New Roman → Georgia → serif.</p>
    </div>

    <h2>🎨 Generic Font Families</h2>
    <div class="demo-box font-demo">
        <p style="font-family: serif;">Serif – small decorative lines (e.g., Times New Roman)</p>
        <p style="font-family: sans-serif;">Sans‑serif – clean, no serifs (e.g., Arial)</p>
        <p style="font-family: monospace;">Monospace – fixed width (e.g., Courier New)</p>
        <p style="font-family: cursive;">Cursive – handwriting style (e.g., Comic Sans MS)</p>
        <p style="font-family: fantasy;">Fantasy – decorative (e.g., Impact)</p>
    </div>
    <pre><code>p { font-family: serif; }
p { font-family: sans-serif; }
p { font-family: monospace; }
p { font-family: cursive; }
p { font-family: fantasy; }</code></pre>

    <h2>🖥️ System Fonts (for native look)</h2>
    <p>Use <code>-apple-system</code>, <code>BlinkMacSystemFont</code>, <code>"Segoe UI"</code>, <code>Roboto</code> to match OS default fonts.</p>
    <pre><code>body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}</code></pre>
    <div class="demo-box">
        <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            This text uses your operating system’s default font.
        </p>
    </div>

    <h2>🌐 Web Fonts (@font-face)</h2>
    <p>Use <code>@font-face</code> to load custom fonts from a server. Example (conceptual):</p>
    <pre><code>@font-face {
    font-family: 'MyWebFont';
    src: url('myfont.woff2') format('woff2');
}
h2 {
    font-family: 'MyWebFont', Arial, sans-serif;
}</code></pre>
    <div class="note">
        💡 Popular web font services: Google Fonts, Adobe Fonts. For Google Fonts, include the link in HTML and then use the font family in CSS.
    </div>

    <h2>📋 Types of Font Families (Classification)</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Type</th><th>Description</th><th>Examples</th></tr></thead>
        <tbody>
            <tr><td><strong>Serif</strong></td><td>Small strokes at letter ends, traditional.</td><td>Times New Roman, Georgia, Garamond</td></tr>
            <tr><td><strong>Sans‑serif</strong></td><td>Clean, modern, no serifs.</td><td>Arial, Helvetica, Verdana</td></tr>
            <tr><td><strong>Monospace</strong></td><td>Fixed width, each character takes same space.</td><td>Courier New, Consolas, Monaco</td></tr>
            <tr><td><strong>Cursive</strong></td><td>Handwriting or script style.</td><td>Brush Script, Lucida Handwriting</td></tr>
            <tr><td><strong>Fantasy</strong></td><td>Decorative, artistic.</td><td>Chiller, Jokerman, Ravie</td></tr>
        </tbody>
    </table>

    <div class="demo-box font-demo">
        <p style="font-family: 'Times New Roman', serif;">Serif: Times New Roman</p>
        <p style="font-family: Arial, sans-serif;">Sans‑serif: Arial</p>
        <p style="font-family: 'Courier New', monospace;">Monospace: Courier New</p>
        <p style="font-family: 'Brush Script MT', cursive;">Cursive: Brush Script MT</p>
        <p style="font-family: 'Impact', fantasy;">Fantasy: Impact</p>
    </div>

    <div class="note">
        ✅ <strong>Best Practices:</strong><br>
        – Always end a font stack with a generic family (e.g., <code>sans-serif</code>).<br>
        – Enclose multi‑word font names in quotes: <code>"Times New Roman"</code>.<br>
        – Limit the number of custom web fonts to improve performance.<br>
        – Use system fonts for a native, fast‑loading experience.
    </div>

    <footer>
        CSS font-family – font stacks, generic families, system fonts, web fonts, and classifications
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Font-Weight",
              name: "CSS Font Weight",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .font-demo p {
        margin: 12px 0;
        font-size: 1.2rem;
    }
</style>

<div class="container">
    <h1>CSS Font-Weight</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>font-weight</code> property controls the thickness and boldness of text. It gives designers fine control over typographic emphasis. Values range from keywords (<code>normal</code>, <code>bold</code>, <code>lighter</code>, <code>bolder</code>) to numeric weights (100‑900). Not all fonts support every weight.
    </div>

    <h2>📌 Syntax & Property Values</h2>
    <pre><code>font-weight: normal | lighter | bolder | bold | number | initial | inherit | unset;</code></pre>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th><th>Numeric equivalent</th></tr></thead>
        <tbody>
            <tr><td><code>normal</code></td><td>Default weight</td><td>400</td></tr>
            <tr><td><code>bold</code></td><td>Bold weight</td><td>700</td></tr>
            <tr><td><code>lighter</code></td><td>Lighter than parent</td><td>relative</td></tr>
            <tr><td><code>bolder</code></td><td>Bolder than parent</td><td>relative</td></tr>
            <tr><td><code>100</code> to <code>900</code></td><td>Explicit numeric weight (100=thin, 900=black)</td><td>step of 100</td></tr>
            <tr><td><code>initial</code></td><td>Sets to default (normal)</td><td>400</td></tr>
            <tr><td><code>inherit</code></td><td>Inherits from parent</td><td>–</td></tr>
            <tr><td><code>unset</code></td><td>Resets to natural value</td><td>–</td></tr>
        </tbody>
    </table>

    <h2>📖 Examples of font-weight in action</h2>
    <div class="demo-box font-demo">
        <p style="font-weight: normal;">normal (400) – default</p>
        <p style="font-weight: lighter;">lighter (relative to parent)</p>
        <p style="font-weight: bolder;">bolder (relative to parent)</p>
        <p style="font-weight: bold;">bold (700)</p>
        <p style="font-weight: 100;">100 (thin)</p>
        <p style="font-weight: 300;">300 (light)</p>
        <p style="font-weight: 500;">500 (medium)</p>
        <p style="font-weight: 600;">600 (semi‑bold)</p>
        <p style="font-weight: 700;">700 (bold)</p>
        <p style="font-weight: 800;">800 (extra bold)</p>
        <p style="font-weight: 900;">900 (black)</p>
    </div>

    <h2>🎯 Applying to Elements – Examples</h2>
    <pre><code>/* All paragraphs normal */
p { font-weight: normal; }

/* Headings bold */
h1, h2, h3 { font-weight: bold; }

/* Custom class with numeric weight */
.my-custom-text { font-weight: 600; }</code></pre>
    <div class="demo-box">
        <p style="font-weight:normal;">Paragraph with normal weight.</p>
        <h3 style="font-weight:bold; margin:0;">Heading with bold weight</h3>
        <p class="my-custom-text" style="font-weight:600;">Text with custom weight 600.</p>
    </div>

    <h2>🌍 Global Font Weight (on body)</h2>
    <pre><code>body {
    font-weight: 400; /* default for whole document */
}
h1 { font-weight: 700; }
p { font-weight: 300; }</code></pre>
    <div class="demo-box">
        <p>This paragraph inherits body weight, but can be overridden.</p>
    </div>

    <h2>🔗 Combining with Other Properties</h2>
    <pre><code>h2 {
    font-weight: 600;
    font-size: 28px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
}
a {
    font-weight: 500;
    text-decoration: underline;
}</code></pre>
    <div class="demo-box">
        <h2 style="font-weight:600; font-size:28px; font-family:'Helvetica Neue',Arial,sans-serif;">Combined weight + size + family</h2>
        <a href="#" style="font-weight:500; text-decoration:underline;">Link with custom weight and underline</a>
    </div>

    <h2>♿ Accessibility & Best Practices</h2>
    <ul style="margin-left: 1.5rem; margin-bottom:1rem;">
        <li><strong>Contrast:</strong> Ensure sufficient contrast between text and background, especially for lighter weights.</li>
        <li><strong>Avoid overuse of bold:</strong> Too much bold text reduces emphasis and readability.</li>
        <li><strong>Semantic meaning:</strong> Use bold for headings and strong importance, not just for style.</li>
        <li><strong>Responsive:</strong> Consider adjusting weights on smaller screens for readability.</li>
        <li><strong>Test with screen readers:</strong> They announce bold text, so use it meaningfully.</li>
        <li><strong>Follow WCAG guidelines</strong> for accessible typography.</li>
    </ul>

    <div class="note">
        💡 <strong>Note:</strong> Not all fonts support all numeric weights. If a weight is not available, the browser uses the closest available. For consistent results, use standard weights (normal=400, bold=700) or system fonts.
    </div>

    <div class="demo-box">
        <p><strong>Complete example with all values:</strong></p>
        <p style="font-weight:normal;">normal</p>
        <p style="font-weight:lighter;">lighter</p>
        <p style="font-weight:bolder;">bolder</p>
        <p style="font-weight:bold;">bold</p>
        <p style="font-weight:100;">100</p>
        <p style="font-weight:200;">200</p>
        <p style="font-weight:300;">300</p>
        <p style="font-weight:400;">400</p>
        <p style="font-weight:500;">500</p>
        <p style="font-weight:600;">600</p>
        <p style="font-weight:700;">700</p>
        <p style="font-weight:800;">800</p>
        <p style="font-weight:900;">900</p>
        <p style="font-weight:initial;">initial</p>
        <p style="font-weight:inherit;">inherit (from parent)</p>
        <p style="font-weight:unset;">unset</p>
    </div>

    <footer>
        CSS Font-Weight – normal, bold, lighter, bolder, numeric values (100‑900), and best practices
    </footer>
</div>

                  `
            },


            {
              id: "CSS-Font-Stretch",
              name: "CSS Font Stretch",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .stretch-demo {
        font-family: 'Arial', 'Helvetica', sans-serif;
        font-size: 1.5rem;
        margin: 0.8rem 0;
        color: #1e3a8a;
        background: #eef2ff;
        padding: 0.5rem;
        border-radius: 8px;
    }
</style>

<div class="container">
    <h1>CSS font-stretch Property</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>font-stretch</code> property selects a normal, condensed, or expanded face from a font family. It makes text wider or narrower compared to the default width. <strong>Important:</strong> This property only works on fonts that have additional faces (e.g., condensed or expanded variants); otherwise, it has no effect.
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>font-stretch: normal | semi-condensed | condensed | extra-condensed | ultra-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded;</code></pre>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>normal</code></td><td>Default, no stretching.</td></tr>
            <tr><td><code>semi-condensed</code></td><td>Slightly narrower than normal, but not as narrow as condensed.</td></tr>
            <tr><td><code>condensed</code></td><td>Narrower than semi‑condensed, but not as narrow as extra‑condensed.</td></tr>
            <tr><td><code>extra-condensed</code></td><td>Narrower than condensed, but not as narrow as ultra‑condensed.</td></tr>
            <tr><td><code>ultra-condensed</code></td><td>Most narrow (extremely condensed).</td></tr>
            <tr><td><code>semi-expanded</code></td><td>Slightly wider than normal, but not as wide as expanded.</td></tr>
            <tr><td><code>expanded</code></td><td>Wider than semi‑expanded, but not as wide as extra‑expanded.</td></tr>
            <tr><td><code>extra-expanded</code></td><td>Wider than expanded, but not as wide as ultra‑expanded.</td></tr>
            <tr><td><code>ultra-expanded</code></td><td>Most wide (extremely expanded).</td></tr>
        </tbody>
    </table>

    <h2>📖 Live Examples (with fallback)</h2>
    <p>The examples below apply <code>font-stretch</code> on Arial. <strong>Note:</strong> Not all fonts support all stretch values; if your browser/font does not support a variant, you may see no difference.</p>
    <div class="demo-box">
        <div class="stretch-demo" style="font-stretch: normal;">normal (default)</div>
        <div class="stretch-demo" style="font-stretch: semi-condensed;">semi-condensed</div>
        <div class="stretch-demo" style="font-stretch: condensed;">condensed</div>
        <div class="stretch-demo" style="font-stretch: extra-condensed;">extra-condensed</div>
        <div class="stretch-demo" style="font-stretch: ultra-condensed;">ultra-condensed</div>
        <div class="stretch-demo" style="font-stretch: semi-expanded;">semi-expanded</div>
        <div class="stretch-demo" style="font-stretch: expanded;">expanded</div>
        <div class="stretch-demo" style="font-stretch: extra-expanded;">extra-expanded</div>
        <div class="stretch-demo" style="font-stretch: ultra-expanded;">ultra-expanded</div>
    </div>

    <div class="warning">
        ⚠️ <strong>Browser support note:</strong> The <code>font-stretch</code> property is widely supported in modern browsers, but the effect depends on the font family. Not all fonts have condensed/expanded faces. Test with fonts like Roboto, Open Sans, or Arial (limited support).
    </div>

    <div class="note">
        💡 <strong>Tip:</strong> For variable fonts (with <code>font-stretch</code> range), you can use a percentage (e.g., <code>font-stretch: 75%;</code>) to fine‑tune width. However, the keyword values are sufficient for most use cases.
    </div>

    <footer>
        CSS font-stretch – normal, condensed, expanded variants
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Colors",
              name: "CSS Colors",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .color-demo {
        padding: 0.5rem;
        margin: 0.5rem 0;
        background: #f0f0f0;
        border-radius: 8px;
    }
</style>

<div class="container">
    <h1>CSS Colors</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>color</code> property sets the color of text (or backgrounds, borders, etc.). Colors can be defined in multiple ways: built‑in names, RGB, RGBA, hexadecimal, HSL, and HSLA.
    </div>

    <h2>1️⃣ Built‑in Color Names</h2>
    <p>CSS supports 140+ predefined color names like <code>red</code>, <code>blue</code>, <code>green</code>, <code>orange</code>, etc.</p>
    <div class="demo-box">
        <p style="color: red;">Red text (color: red)</p>
        <p style="color: green;">Green text</p>
        <p style="color: blue;">Blue text</p>
        <p style="color: orange;">Orange text</p>
        <p style="color: purple;">Purple text</p>
    </div>
    <pre><code>color: red;
color: green;
color: blue;</code></pre>

    <h2>2️⃣ RGB (Red, Green, Blue)</h2>
    <p>Values from 0 to 255. <code>rgb(255,0,0)</code> = red.</p>
    <div class="demo-box">
        <p style="color: rgb(255,0,0);">rgb(255,0,0) – Red</p>
        <p style="color: rgb(0,255,0);">rgb(0,255,0) – Green</p>
        <p style="color: rgb(0,0,255);">rgb(0,0,255) – Blue</p>
    </div>
    <pre><code>color: rgb(255, 0, 0);
color: rgb(0, 255, 0);</code></pre>

    <h2>3️⃣ RGBA (RGB + Alpha)</h2>
    <p>Alpha (0.0 – 1.0) controls opacity. <code>rgba(255,0,0,0.5)</code> = semi‑transparent red.</p>
    <div class="demo-box">
        <p style="color: rgba(255,0,0,1);">rgba(255,0,0,1) – fully opaque red</p>
        <p style="color: rgba(255,0,0,0.5);">rgba(255,0,0,0.5) – 50% transparent red</p>
        <p style="color: rgba(0,0,255,0.3);">rgba(0,0,255,0.3) – 30% opaque blue</p>
    </div>

    <h2>4️⃣ Hexadecimal (Hex) Notation</h2>
    <p>Format: <code>#RRGGBB</code> (each 00–FF). <code>#FF0000</code> = red.</p>
    <div class="demo-box">
        <p style="color: #FF0000;">#FF0000 – Red</p>
        <p style="color: #00FF00;">#00FF00 – Green</p>
        <p style="color: #0000FF;">#0000FF – Blue</p>
        <p style="color: #EE82EE;">#EE82EE – Violet</p>
    </div>
    <pre><code>color: #FF0000;
color: #00FF00;</code></pre>

    <h2>5️⃣ Short Hex Codes</h2>
    <p>Shorthand where each digit is repeated: <code>#F00</code> = <code>#FF0000</code>, <code>#0F0</code> = <code>#00FF00</code>, <code>#00F</code> = <code>#0000FF</code>.</p>
    <div class="demo-box">
        <p style="color: #F00;">#F00 – Red (short hex)</p>
        <p style="color: #0F0;">#0F0 – Green</p>
        <p style="color: #00F;">#00F – Blue</p>
        <p style="color: #E8E;">#E8E – short for #EE88EE (light purple)</p>
    </div>

    <h2>6️⃣ HSL (Hue, Saturation, Lightness)</h2>
    <p>Hue (0–360): 0=red, 120=green, 240=blue. Saturation (0‑100%), Lightness (0‑100%).</p>
    <div class="demo-box">
        <p style="color: hsl(0, 100%, 50%);">hsl(0,100%,50%) – red</p>
        <p style="color: hsl(120, 100%, 50%);">hsl(120,100%,50%) – green</p>
        <p style="color: hsl(240, 100%, 50%);">hsl(240,100%,50%) – blue</p>
        <p style="color: hsl(30, 80%, 50%);">hsl(30,80%,50%) – orange</p>
    </div>
    <pre><code>color: hsl(0, 100%, 50%);
color: hsl(120, 100%, 50%);</code></pre>

    <h2>7️⃣ HSLA (HSL + Alpha)</h2>
    <p>Adds transparency (alpha 0.0–1.0). <code>hsla(0,100%,50%,0.5)</code> = semi‑transparent red.</p>
    <div class="demo-box">
        <p style="color: hsla(0,100%,50%,1);">hsla(0,100%,50%,1) – solid red</p>
        <p style="color: hsla(0,100%,50%,0.5);">hsla(0,100%,50%,0.5) – 50% transparent red</p>
    </div>

    <h2>📋 Table of Common Built‑in Colors</h2>
    <div class="demo-box" style="overflow-x: auto;">
        <table style="width:100%; border-collapse: collapse;">
            <thead>
                <tr style="background:#2962ff; color:white;">
                    <th>Color Name</th><th>Hexadecimal</th><th>RGB</th><th>Example</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Red</td><td>#FF0000</td><td>rgb(255,0,0)</td><td style="background:#FF0000; color:white;">    </td></tr>
                <tr><td>Orange</td><td>#FFA500</td><td>rgb(255,165,0)</td><td style="background:#FFA500;">    </td></tr>
                <tr><td>Yellow</td><td>#FFFF00</td><td>rgb(255,255,0)</td><td style="background:#FFFF00;">    </td></tr>
                <tr><td>Pink</td><td>#FFC0CB</td><td>rgb(255,192,203)</td><td style="background:#FFC0CB;">    </td></tr>
                <tr><td>Green</td><td>#008000</td><td>rgb(0,128,0)</td><td style="background:#008000; color:white;">    </td></tr>
                <tr><td>Violet</td><td>#EE82EE</td><td>rgb(238,130,238)</td><td style="background:#EE82EE;">    </td></tr>
                <tr><td>Blue</td><td>#0000FF</td><td>rgb(0,0,255)</td><td style="background:#0000FF; color:white;">    </td></tr>
                <tr><td>Aqua</td><td>#00FFFF</td><td>rgb(0,255,255)</td><td style="background:#00FFFF;">    </td></tr>
                <tr><td>Brown</td><td>#A52A2A</td><td>rgb(165,42,42)</td><td style="background:#A52A2A; color:white;">    </td></tr>
                <tr><td>White</td><td>#FFFFFF</td><td>rgb(255,255,255)</td><td style="background:#FFFFFF; border:1px solid #ccc;">    </td></tr>
                <tr><td>Gray</td><td>#808080</td><td>rgb(128,128,128)</td><td style="background:#808080; color:white;">    </td></tr>
                <tr><td>Black</td><td>#000000</td><td>rgb(0,0,0)</td><td style="background:#000000;">    </td></tr>
            </tbody>
        </table>
    </div>

    <div class="note">
        💡 <strong>Tip:</strong> For accessibility, ensure sufficient contrast between text and background. Use online contrast checkers when picking colors.
    </div>

    <footer>
        CSS Colors – built‑in, RGB, RGBA, hex, short hex, HSL, HSLA, and examples
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Hover",
              name: "CSS Hover",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    /* Demo specific styles */
    .hover-button {
        background-color: #eaeaea;
        color: #333333;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
        font-size: 1rem;
        border-radius: 6px;
    }
    .hover-button:hover {
        background-color: #ff0000;
        color: #ffffff;
    }
    .image-zoom {
        overflow: hidden;
        width: 250px;
        margin: 0 auto;
        border-radius: 8px;
    }
    .image-zoom img {
        transition: transform 0.3s ease;
        width: 100%;
        height: auto;
        display: block;
    }
    .image-zoom:hover img {
        transform: scale(1.2);
    }
    .underline-link {
        text-decoration: none;
        transition: border-bottom 0.3s ease;
        font-size: 1.2rem;
        color: #333;
    }
    .underline-link:hover {
        border-bottom: 2px solid #ff0000;
    }
</style>

<div class="container">
    <h1>Hover in CSS</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>:hover</code> pseudo‑class applies styles when the user points at an element (usually with a mouse). It's commonly used for interactive effects like changing colors, scaling, underlining, or adding transitions.
    </div>

    <h2>📌 Syntax</h2>
    <pre><code>selector:hover {
    /* CSS declarations */
}</code></pre>
    <p>Example: change background and text color on hover.</p>
    <pre><code>.button:hover {
    background-color: #ff0000;
    color: #ffffff;
}</code></pre>

    <h2>📖 Example 1: Button Hover Effect</h2>
    <div class="demo-box">
        <button class="hover-button">Hover Me</button>
    </div>
    <pre><code>.hover-button {
    background-color: #eaeaea;
    color: #333;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
}
.hover-button:hover {
    background-color: #ff0000;
    color: #fff;
}</code></pre>

    <h2>🖼️ Example 2: Image Zoom on Hover</h2>
    <div class="demo-box">
        <div class="image-zoom">
            <img src="https://picsum.photos/id/104/300/200" alt="Sample landscape">
        </div>
        <p><small>Hover over the image to zoom (scale effect).</small></p>
    </div>
    <pre><code>.image-zoom {
    overflow: hidden;
}
.image-zoom img {
    transition: transform 0.3s ease;
}
.image-zoom:hover img {
    transform: scale(1.2);
}</code></pre>

    <h2>🔗 Example 3: Link Underline on Hover</h2>
    <div class="demo-box">
        <a href="#" class="underline-link">Hover Me (underlines in red)</a>
    </div>
    <pre><code>.underline-link {
    text-decoration: none;
    transition: border-bottom 0.3s ease;
}
.underline-link:hover {
    border-bottom: 2px solid #ff0000;
}</code></pre>

    <h2>✨ Features of CSS Hover</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li><strong>Interactive feedback</strong> – change colors, opacity, box‑shadow, transform, etc.</li>
        <li><strong>Target any element</strong> – buttons, links, images, divs, entire containers.</li>
        <li><strong>Combine with transitions/animations</strong> – for smooth, polished effects.</li>
        <li><strong>Works with other selectors</strong> – classes, IDs, pseudo‑elements, child selectors.</li>
        <li><strong>Cross‑browser support</strong> – all modern browsers (Chrome, Firefox, Safari, Edge).</li>
    </ul>

    <div class="warning">
        ⚠️ <strong>Accessibility note:</strong> Hover effects may not be available on touchscreens or to users who navigate by keyboard. Ensure critical content/functionality remains accessible without hover.
    </div>

    <div class="note">
        💡 <strong>Pro tip:</strong> Combine <code>:hover</code> with <code>transition</code> for smooth animations. Avoid overusing heavy effects that might cause performance issues (e.g., large scaling on many elements).
    </div>

    <footer>
        CSS Hover – :hover selector, button, image zoom, link underline, transitions, accessibility
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Important",
              name: "CSS Important",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Important</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>!important</code> rule in CSS gives a property higher priority, overriding normal cascade rules. It forces a declaration to be applied, ignoring later or more specific selectors. <strong>Use sparingly</strong> – overusing <code>!important</code> can lead to hard‑to‑debug style conflicts.
    </div>

    <h2>📌 Syntax</h2>
    <pre><code>selector {
    property: value !important;
}</code></pre>
    <p>Example:</p>
    <pre><code>h1 {
    color: blue !important;
    font-size: 20px;
}</code></pre>

    <h2>📖 Example 1: Overriding Normal Cascade</h2>
    <div class="demo-box">
        <style>
            .important-demo h1 {
                color: white;
            }
            .important-demo h1 {
                color: blue !important;
            }
            .important-demo body {
                background-color: lightblue !important;
                text-align: center;
                background-color: yellow; /* ignored due to !important */
            }
        </style>
        <div class="important-demo">
            <h1 style="color: white; color: blue !important;">Hello World (blue due to !important)</h1>
            <h1>Welcome to the javaTpoint.com. This is an example of <code>!important</code> property.</h1>
            <p style="background: lightblue; padding: 10px;">Background is lightblue (from !important).</p>
        </div>
    </div>
    <pre><code>h1 {
    color: white;
}
h1 {
    color: blue !important;  /* Wins */
}
body {
    background-color: lightblue !important;
    background-color: yellow; /* Ignored */
}</code></pre>

    <h2>📖 Example 2: !important on Border & Color</h2>
    <div class="demo-box">
        <style>
            .important-border h1 {
                border-color: red !important;
                border: 5px green solid;
                border-color: black;
            }
            .important-border h2 {
                color: green !important;
                color: red;
                border-color: violet !important;
                border: 5px green solid;
            }
        </style>
        <div class="important-border">
            <h1>Hello World (border remains red due to !important)</h1>
            <h2>Welcome to javaTpoint.com (green text, violet border)</h2>
        </div>
    </div>
    <pre><code>h1 {
    border-color: red !important;
    border: 5px green solid;
    border-color: black;      /* Ignored */
}
h2 {
    color: green !important;
    color: red;               /* Ignored */
    border-color: violet !important;
    border: 5px green solid;
}</code></pre>

    <div class="warning">
        ⚠️ <strong>When NOT to use !important:</strong><br>
        – Avoid using it just to fix specificity issues; refactor your selectors instead.<br>
        – In large projects, overusing <code>!important</code> makes maintenance a nightmare.<br>
        – Only use it for utility classes (e.g., .hidden { display: none !important; }) or when overriding third‑party CSS you can’t change.
    </div>

    <div class="note">
        💡 <strong>Best Practices:</strong><br>
        – Reserve <code>!important</code> for emergencies or helper classes.<br>
        – If you must use it, comment why.<br>
        – Remember: later <code>!important</code> declarations still override earlier ones (cascade order among !important rules).<br>
        – Use more specific selectors or increase specificity instead of !important.
    </div>

    <footer>
        CSS !important – syntax, examples, risks, and best practices
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Background Colors",
              name: "CSS Background Colors",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
    .color-sample {
        width: 200px;
        height: 200px;
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        font-weight: bold;
        color: white;
        text-shadow: 1px 1px 0 rgba(0,0,0,0.3);
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Background Colors</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>background-color</code> property sets the background color of an element. You can use color keywords, RGB, RGBA, HSL, HSLA, or hexadecimal values.
    </div>

    <h2>📌 Basic Example – Different Color Formats</h2>
    <div class="demo-box">
        <div class="color-sample" style="background-color: red;">Keyword: red</div>
        <div class="color-sample" style="background-color: rgb(0, 128, 0);">RGB: green</div>
        <div class="color-sample" style="background-color: hsl(240, 100%, 50%);">HSL: blue</div>
    </div>
    <pre><code>.my-div { background-color: red; }
.rgb-div { background-color: rgb(0, 128, 0); }
.hsl-div { background-color: hsl(240, 100%, 50%); }</code></pre>

    <h2>🎨 Why Use Background Color?</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li><strong>Visual styling</strong> – improve aesthetics, add contrast, highlight elements.</li>
        <li><strong>Readability & Accessibility</strong> – make text easier to read with proper contrast.</li>
        <li><strong>Branding & consistency</strong> – match your brand’s color palette.</li>
        <li><strong>User interaction & feedback</strong> – change button colors on hover/click.</li>
        <li><strong>Separate content & layout</strong> – visually distinguish sections, create hierarchy.</li>
        <li><strong>Theming & personalization</strong> – allow users to choose preferred backgrounds.</li>
    </ul>

    <h2>🧪 More Background Color Examples</h2>
    <div class="demo-box">
        <div class="color-sample" style="background-color: #ffc0cb; color: #333;">Hex: #ffc0cb (pink)</div>
        <div class="color-sample" style="background-color: rgba(255, 99, 71, 0.7); color: #333;">RGBA (semi‑transparent)</div>
        <div class="color-sample" style="background-color: hsla(120, 60%, 70%, 0.8); color: #333;">HSLA (light green, semi‑transparent)</div>
    </div>
    <pre><code>background-color: #ffc0cb;
background-color: rgba(255, 99, 71, 0.7);
background-color: hsla(120, 60%, 70%, 0.8);</code></pre>

    <div class="warning">
        ⚠️ <strong>Limitations of Background Color:</strong><br>
        – Older browsers may not support newer color formats (RGBA, HSL).<br>
        – Partial transparency requires <code>rgba()</code> or <code>hsla()</code>; <code>opacity</code> affects the entire element.<br>
        – Overlapping elements: the top element’s background hides lower ones (use <code>z-index</code> or positioning to manage).
    </div>

    <div class="note">
        💡 <strong>Accessibility Tip:</strong> Always ensure sufficient contrast between text and background color. Use tools like WebAIM’s contrast checker. A common recommendation is at least 4.5:1 for normal text.
    </div>

    <footer>
        CSS Background Colors – keywords, RGB, HSL, hex, RGBA, HSLA, usage, and limitations
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Background-Attachment",
              name: "CSS Background Attachment",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .scroll-demo, .fixed-demo, .local-demo {
        height: 250px;
        overflow-y: auto;
        border: 2px solid #ccc;
        border-radius: 8px;
        margin-bottom: 20px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        color: white;
        text-shadow: 1px 1px 2px black;
        padding: 20px;
    }
    .scroll-demo {
        background-image: url('https://picsum.photos/id/104/600/400');
        background-attachment: scroll;
    }
    .fixed-demo {
        background-image: url('https://picsum.photos/id/20/600/400');
        background-attachment: fixed;
        background-size: cover;
    }
    .local-demo {
        background-image: url('https://picsum.photos/id/16/600/400');
        background-attachment: local;
        background-size: cover;
    }
    .multi-bg-demo {
        height: 400px;
        background-image: url('https://picsum.photos/id/1/200/150'), url('https://picsum.photos/id/2/400/300');
        background-position: top left, bottom right;
        background-repeat: no-repeat, no-repeat;
        background-attachment: fixed, scroll;
        background-size: auto, cover;
        border: 2px solid red;
        border-radius: 8px;
        padding: 20px;
        color: white;
        text-shadow: 1px 1px 2px black;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Background Attachment</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>background-attachment</code> property specifies whether a background image scrolls with the page content or stays fixed. It has three main values: <code>scroll</code> (default, scrolls with the element), <code>fixed</code> (stays fixed relative to the viewport), and <code>local</code> (scrolls with the element's content).
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>background-attachment: scroll | fixed | local | initial | inherit;</code></pre>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>scroll</code> (default)</td><td>Background scrolls with the page (or element).</td></tr>
            <tr><td><code>fixed</code></td><td>Background stays fixed relative to the viewport, does not move on scroll.</td></tr>
            <tr><td><code>local</code></td><td>Background scrolls with the element's content (useful for scrollable divs).</td></tr>
            <tr><td><code>initial</code></td><td>Sets to default value (<code>scroll</code>).</td></tr>
            <tr><td><code>inherit</code></td><td>Inherits from parent element.</td></tr>
        </tbody>
    </table>

    <h2>📖 Example 1: background-attachment: scroll (default)</h2>
    <div class="demo-box">
        <div class="scroll-demo">
            <p>This div has <code>background-attachment: scroll;</code> The background image scrolls with the content inside this box (scroll inside this area to see the effect).</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <pre><code>.scroll-demo {
    background-image: url('image.jpg');
    background-attachment: scroll;
    overflow-y: auto;
    height: 250px;
}</code></pre>

    <h2>📖 Example 2: background-attachment: fixed (parallax effect)</h2>
    <div class="demo-box">
        <div class="fixed-demo">
            <p><strong>Fixed background</strong> – this image stays fixed relative to the browser window, even when you scroll the entire page. (Try scrolling the whole page – the background remains in place.)</p>
            <p><em>Note: In this embedded demo, the effect is visible only when scrolling the entire page, not just inside the box.</em></p>
        </div>
    </div>
    <pre><code>.fixed-demo {
    background-image: url('image.jpg');
    background-attachment: fixed;
    background-size: cover;
}</code></pre>

    <h2>📖 Example 3: background-attachment: local (scrolls with content)</h2>
    <div class="demo-box">
        <div class="local-demo">
            <p>This div has <code>background-attachment: local;</code> The background scrolls along with the content inside this scrollable box. (Scroll inside this area to see the image move.)</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>More text to make the box scrollable. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
        </div>
    </div>
    <pre><code>.local-demo {
    background-image: url('image.jpg');
    background-attachment: local;
    overflow-y: auto;
    height: 250px;
}</code></pre>

    <h2>🧩 Multiple Background Images with Different Attachments</h2>
    <div class="demo-box">
        <div class="multi-bg-demo">
            <p>Multiple backgrounds: First image (top left) has <code>fixed</code> attachment; second image (bottom right) has <code>scroll</code>. The fixed one stays in place while scrolling the page.</p>
        </div>
    </div>
    <pre><code>.multi-bg-demo {
    background-image: url('image1.jpg'), url('image2.jpg');
    background-position: top left, bottom right;
    background-repeat: no-repeat, no-repeat;
    background-attachment: fixed, scroll;
}</code></pre>

    <div class="warning">
        ⚠️ <strong>Browser & Performance Notes:</strong><br>
        – The <code>fixed</code> value may not work correctly on some mobile browsers or cause performance issues (jittery scrolling).<br>
        – <code>local</code> is most useful for elements with <code>overflow: auto/scroll</code>.<br>
        – Always test your design across different devices and browsers.
    </div>

    <div class="note">
        💡 <strong>Parallax Effect:</strong> The <code>background-attachment: fixed;</code> is commonly used to create a parallax scrolling effect – background images move at a different speed than the foreground, adding depth and visual interest.
    </div>

    <h2>📦 Shorthand Background Property</h2>
    <pre><code>body {
    background: url('background.jpg') fixed no-repeat center center / cover;
}</code></pre>
    <p>The <code>fixed</code> keyword inside the shorthand sets <code>background-attachment: fixed;</code>.</p>

    <footer>
        CSS Background Attachment – scroll, fixed, local, multiple backgrounds, and parallax examples
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Background-Size",
              name: "CSS Background Size",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
    }
    .bg-demo {
        height: 300px;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 8px;
        margin: 15px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 1px 1px 2px black;
        font-weight: bold;
        background-color: #ddd;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .grid-demo {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
    .card {
        flex: 1;
        min-width: 250px;
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .card-img {
        height: 180px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .card-content {
        padding: 12px;
    }
</style>

<div class="container">
    <h1>Background-Size in CSS</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>background-size</code> property controls the size of background images. It can scale images up/down, cover entire containers, or fit within them. Values include keywords (<code>cover</code>, <code>contain</code>, <code>auto</code>), unit values (pixels, percentages), global values (<code>inherit</code>, <code>initial</code>, <code>unset</code>), and multiple values for multiple backgrounds.
    </div>

    <h2>📌 Keyword Values</h2>
    <h3>1. background-size: cover</h3>
    <p>The image covers the entire container, maintaining aspect ratio; parts may be cropped.</p>
    <div class="bg-demo" style="background-image: url('https://picsum.photos/id/104/800/600'); background-size: cover;">
        <span>cover – fills container</span>
    </div>
    <pre><code>.element {
    background-image: url('image.jpg');
    background-size: cover;
}</code></pre>

    <h3>2. background-size: contain</h3>
    <p>The image fits entirely inside the container, maintaining aspect ratio; may leave empty areas.</p>
    <div class="bg-demo" style="background-image: url('https://picsum.photos/id/20/800/600'); background-size: contain; background-color: #d9e6f5;">
        <span>contain – whole image visible</span>
    </div>
    <pre><code>.element {
    background-image: url('image.jpg');
    background-size: contain;
}</code></pre>

    <h2>📏 Unit Values (px, %, vw, etc.)</h2>
    <p>You can set exact sizes (one or two values). If one value is given, the second defaults to <code>auto</code>.</p>

    <div class="grid-demo">
        <div class="card">
            <div class="card-img" style="background-image: url('https://picsum.photos/id/16/400/300'); background-size: 80% 60%;"></div>
            <div class="card-content"><code>background-size: 80% 60%;</code></div>
        </div>
        <div class="card">
            <div class="card-img" style="background-image: url('https://picsum.photos/id/26/400/300'); background-size: 150px 100px;"></div>
            <div class="card-content"><code>background-size: 150px 100px;</code></div>
        </div>
        <div class="card">
            <div class="card-img" style="background-image: url('https://picsum.photos/id/48/400/300'); background-size: 40%;"></div>
            <div class="card-content"><code>background-size: 40%; (auto height)</code></div>
        </div>
    </div>
    <pre><code>/* One value (width = 150px, height = auto) */
background-size: 150px;

/* Two values (width = 80%, height = 60%) */
background-size: 80% 60%;

/* Using viewport units */
background-size: 30vw 20vh;</code></pre>

    <h2>🌐 Global Values (inherit, initial, unset)</h2>
    <ul style="margin-left: 1.5rem;">
        <li><code>inherit</code> – takes the same value as parent element.</li>
        <li><code>initial</code> – resets to default (<code>auto</code>).</li>
        <li><code>unset</code> – acts as <code>inherit</code> if inherited, else <code>initial</code>.</li>
    </ul>

    <h2>🖼️ Multiple Background Images</h2>
    <p>Separate values by commas, in the same order as images.</p>
    <div class="bg-demo" style="background-image: url('https://picsum.photos/id/1/200/150'), url('https://picsum.photos/id/2/400/300'); background-size: 30%, cover; background-position: left top, center; background-repeat: no-repeat, no-repeat; background-color: #f0f0f0;">
        <span>Two backgrounds (30% + cover)</span>
    </div>
    <pre><code>.element {
    background-image: url('img1.jpg'), url('img2.jpg');
    background-size: 30%, cover;
    background-position: left top, center;
    background-repeat: no-repeat, no-repeat;
}</code></pre>

    <h2>🧪 Live Examples with Different Values</h2>
    <div class="demo-box">
        <div class="bg-demo" style="background-image: url('https://picsum.photos/id/104/400/300'); background-size: 70%; background-position: center;">
            <span>background-size: 70% (image centered)</span>
        </div>
        <div class="bg-demo" style="background-image: url('https://picsum.photos/id/155/400/300'); background-size: auto 80%; background-position: center;">
            <span>background-size: auto 80%</span>
        </div>
        <div class="bg-demo" style="background-image: url('https://picsum.photos/id/169/400/300'); background-size: 200px auto;">
            <span>background-size: 200px auto</span>
        </div>
    </div>

    <div class="note">
        💡 <strong>Tips:</strong>
        <ul style="margin-top: 0.5rem; margin-left: 1.5rem;">
            <li><code>cover</code> is great for full‑width hero images; <code>contain</code> for logos or icons.</li>
            <li>Percentage values are relative to the element's background positioning area.</li>
            <li>When using multiple backgrounds, each background's size is applied in the same order as the images.</li>
            <li>Combine <code>background-size</code> with <code>background-position</code> for precise control.</li>
        </ul>
    </div>

    <footer>
        CSS Background-Size – cover, contain, unit values, global values, multiple backgrounds
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Line-Height",
              name: "CSS Line Height",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .lh-example {
        margin: 1rem 0;
        padding: 0.5rem;
        background: #fff;
        border-left: 4px solid #2962ff;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Line Height</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>line-height</code> property sets the minimal height of line boxes within an element. It controls the amount of space above and below inline elements, effectively defining the vertical spacing between lines of text. A well‑chosen line height improves readability and overall typography.
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>line-height: normal | number | length | percentage | initial | inherit;</code></pre>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th><th>Example</th></tr></thead>
        <tbody>
            <tr><td><code>normal</code> (default)</td><td>Depends on browser/font, usually around 1.1–1.2</td><td>～1.2倍</td></tr>
            <tr><td><code>number</code></td><td>Unitless number multiplied by the current font size</td><td><code>1.5</code></td></tr>
            <tr><td><code>length</code></td><td>Fixed size (px, em, rem, etc.)</td><td><code>24px</code></td></tr>
            <tr><td><code>percentage</code></td><td>Relative to current font size</td><td><code>150%</code></td></tr>
            <tr><td><code>initial</code></td><td>Resets to default</td><td>–</td></tr>
            <tr><td><code>inherit</code></td><td>Inherits from parent</td><td>–</td></tr>
        </tbody>
    </table>

    <h2>📖 Example: Different line-height Values</h2>
    <div class="demo-box">
        <div class="lh-example" style="line-height: normal;">
            <strong>normal (default)</strong><br>
            The quick brown fox jumps over the lazy dog.<br>
            This is a second line to show spacing.
        </div>
        <div class="lh-example" style="line-height: 0.8;">
            <strong>line-height: 0.8 (very tight)</strong><br>
            The quick brown fox jumps over the lazy dog.<br>
            This is a second line. Notice overlapping.
        </div>
        <div class="lh-example" style="line-height: 1.2;">
            <strong>line-height: 1.2 (common)</strong><br>
            The quick brown fox jumps over the lazy dog.<br>
            This is a second line. comfortable spacing.
        </div>
        <div class="lh-example" style="line-height: 1.5;">
            <strong>line-height: 1.5 (loose)</strong><br>
            The quick brown fox jumps over the lazy dog.<br>
            This is a second line. good for readability.
        </div>
        <div class="lh-example" style="line-height: 200%;">
            <strong>line-height: 200%</strong><br>
            The quick brown fox jumps over the lazy dog.<br>
            This is a second line. Extra spacious.
        </div>
        <div class="lh-example" style="line-height: 32px;">
            <strong>line-height: 32px (fixed pixel)</strong><br>
            The quick brown fox jumps over the lazy dog.<br>
            This is a second line. Fixed height may cut off larger fonts.
        </div>
    </div>

    <h2>🎯 Best Practices</h2>
    <ul style="margin-left: 1.5rem; margin-bottom:1rem;">
        <li>Use unitless numbers (e.g., <code>1.5</code>) because they scale properly with font size and are inherited correctly.</li>
        <li>For body text, a line height between 1.4 and 1.6 improves readability.</li>
        <li>For headings, tighter line heights (1.2–1.3) often look better.</li>
        <li>Avoid fixed pixel line heights for responsive text – they don’t scale.</li>
    </ul>

    <div class="note">
        💡 <strong>Important:</strong> The <code>line-height</code> property is often used in conjunction with <code>font-size</code> to create vertical rhythm. For example, <code>line-height: 1.5</code> on a <code>font-size: 16px</code> results in a line height of 24px. This vertical spacing helps separate lines and makes text blocks more readable.
    </div>

    <h2>🧪 More Comparisons</h2>
    <div class="demo-box">
        <p style="line-height: 1.2; background: #f0f0f0; margin: 8px 0;">line-height: 1.2 – compact</p>
        <p style="line-height: 1.5; background: #f0f0f0; margin: 8px 0;">line-height: 1.5 – standard for paragraphs</p>
        <p style="line-height: 1.8; background: #f0f0f0; margin: 8px 0;">line-height: 1.8 – very airy</p>
    </div>

    <footer>
        CSS Line Height – normal, number, length, percentage, best practices
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Margin",
              name: "CSS Margin",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }
    .margin-demo p {
        background-color: pink;
        padding: 5px;
        margin: 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Margin</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The CSS <code>margin</code> property defines the space around elements. It is completely transparent and creates clearance outside an element's border. Margins can be set individually for each side or with shorthand properties.
    </div>

    <h2>📌 Margin Properties</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Property</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>margin</code></td><td>Shorthand for all four sides.</td></tr>
            <tr><td><code>margin-top</code></td><td>Sets top margin.</td></tr>
            <tr><td><code>margin-right</code></td><td>Sets right margin.</td></tr>
            <tr><td><code>margin-bottom</code></td><td>Sets bottom margin.</td></tr>
            <tr><td><code>margin-left</code></td><td>Sets left margin.</td></tr>
        </tbody>
    </table>

    <h2>📐 Margin Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>auto</code></td><td>Browser calculates margin (e.g., centering).</td></tr>
            <tr><td><code>length</code></td><td>Fixed size (px, pt, cm, em, rem). Default is 0.</td></tr>
            <tr><td><code>%</code></td><td>Percentage of the containing element's width.</td></tr>
            <tr><td><code>inherit</code></td><td>Inherits margin from parent.</td></tr>
        </tbody>
    </table>
    <div class="note">⚠️ Negative margin values can overlap content – useful for advanced layouts.</div>

    <h2>📖 Basic Example – Different Margins per Side</h2>
    <div class="demo-box margin-demo">
        <p>This paragraph has no margins applied (default).</p>
        <p style="margin-top: 50px; margin-bottom: 50px; margin-right: 100px; margin-left: 100px; background:pink;">
            This paragraph has top and bottom 50px, left and right 100px margins.
        </p>
    </div>
    <pre><code>.ex {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 100px;
    margin-left: 100px;
}</code></pre>

    <h2>📦 Shorthand Margin – One, Two, Three, Four Values</h2>

    <h3>1. Four values: margin: top right bottom left;</h3>
    <div class="demo-box margin-demo">
        <p style="margin: 50px 100px 150px 200px; background:pink;">
            margin: 50px 100px 150px 200px;<br>
            Top=50px, Right=100px, Bottom=150px, Left=200px
        </p>
    </div>
    <pre><code>margin: 50px 100px 150px 200px;</code></pre>

    <h3>2. Three values: margin: top right-left bottom;</h3>
    <div class="demo-box margin-demo">
        <p style="margin: 50px 100px 150px; background:pink;">
            margin: 50px 100px 150px;<br>
            Top=50px, Right&Left=100px, Bottom=150px
        </p>
    </div>
    <pre><code>margin: 50px 100px 150px;</code></pre>

    <h3>3. Two values: margin: top-bottom right-left;</h3>
    <div class="demo-box margin-demo">
        <p style="margin: 50px 100px; background:pink;">
            margin: 50px 100px;<br>
            Top&Bottom=50px, Right&Left=100px
        </p>
    </div>
    <pre><code>margin: 50px 100px;</code></pre>

    <h3>4. One value: margin: all sides;</h3>
    <div class="demo-box margin-demo">
        <p style="margin: 50px; background:pink;">
            margin: 50px;<br>
            All margins = 50px
        </p>
    </div>
    <pre><code>margin: 50px;</code></pre>

    <h2>🎯 Centering with auto</h2>
    <p>Using <code>margin: auto</code> on a block element with a defined width centers it horizontally.</p>
    <div class="demo-box" style="text-align:center;">
        <div style="width: 300px; margin: 0 auto; background: #cbd5e1; padding: 20px;">
            This div is centered horizontally with <code>margin: 0 auto;</code>
        </div>
    </div>
    <pre><code>.center {
    width: 300px;
    margin: 0 auto;
}</code></pre>

    <div class="note">
        💡 <strong>Pro tips:</strong><br>
        – Use <code>margin: auto</code> for horizontal centering (block elements with width).<br>
        – Collapsing margins: vertical margins of adjacent elements may overlap – the larger margin wins.<br>
        – Negative margins pull an element out of its normal flow (useful for overlapping effects).
    </div>

    <footer>
        CSS Margin – individual sides, shorthand (1–4 values), auto, and examples
    </footer>
</div>

                  `
            },

          
            {
              id: "CSS-Opacity",
              name: "CSS Opacity",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
    }
    .image-row {
        display: flex;
        gap: 40px;
        justify-content: center;
        flex-wrap: wrap;
        margin: 20px 0;
    }
    .image-card {
        text-align: center;
    }
    .image-card img {
        width: 250px;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: opacity 0.3s ease;
    }
    .opacity-demo {
        opacity: 0.4;
    }
    .hover-opacity:hover {
        opacity: 0.6;
        cursor: pointer;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Opacity</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>opacity</code> property specifies the transparency of an element. It ranges from <strong>0.0</strong> (fully transparent) to <strong>1.0</strong> (fully opaque). Opacity is applied uniformly to the entire element, including its content, and is not inherited by child elements (though children can have their own opacity).
    </div>

    <h2>📌 Syntax</h2>
    <pre><code>selector {
    opacity: value; /* 0.0 to 1.0 */
}</code></pre>
    <p>For older Internet Explorer (versions 8 and earlier), use <code>filter: alpha(opacity=x);</code> where x ranges from 0 to 100.</p>

    <h2>📖 Example: Transparent Image</h2>
    <div class="demo-box">
        <div class="image-row">
            <div class="image-card">
                <p><strong>Normal Image (opacity: 1)</strong></p>
                <img src="https://picsum.photos/id/104/300/200" alt="Normal rose">
            </div>
            <div class="image-card">
                <p><strong>Transparent Image (opacity: 0.4)</strong></p>
                <img class="opacity-demo" src="https://picsum.photos/id/104/300/200" alt="Transparent rose">
            </div>
        </div>
    </div>
    <pre><code>img.trans {
    opacity: 0.4;
    filter: alpha(opacity=40); /* For IE8 and earlier */
}</code></pre>

    <h2>🎯 Live Adjustable Opacity</h2>
    <p>Hover over the image below to change its opacity (demonstrates <code>:hover</code> + opacity).</p>
    <div class="demo-box">
        <img class="hover-opacity" src="https://picsum.photos/id/20/300/200" alt="Hover to change opacity" style="width:300px; border-radius:12px;">
        <p><small>Opacity changes to 0.6 on hover → back to 1 when not hovering.</small></p>
    </div>
    <pre><code>.hover-opacity {
    transition: opacity 0.3s ease;
}
.hover-opacity:hover {
    opacity: 0.6;
}</code></pre>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – Opacity values less than 1 create a new stacking context.<br>
        – To make only the background transparent (not text or children), use <code>rgba()</code> or <code>hsla()</code> background colors instead of opacity.<br>
        – Opacity is not inherited – children have their own opacity by default (they become part of the parent's opacity stack).
    </div>

    <div class="warning">
        ⚠️ <strong>Browser support:</strong> All modern browsers support <code>opacity</code>. For IE8 and older, use <code>filter: alpha(opacity=40);</code> (but those browsers are rarely used today).
    </div>

    <footer>
        CSS Opacity – values 0.0 to 1.0, transparent images, hover effects, and compatibility notes
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Filter",
              name: "CSS Filter",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .filter-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        margin: 20px 0;
    }
    .filter-card {
        flex: 1;
        min-width: 250px;
        background: white;
        border-radius: 16px;
        padding: 15px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        transition: transform 0.2s;
    }
    .filter-card img {
        width: 100%;
        max-width: 280px;
        height: auto;
        border-radius: 12px;
        margin-bottom: 12px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .filter-title {
        font-weight: bold;
        margin: 10px 0 5px;
        color: #1e3a8a;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS filter</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>filter</code> property applies visual effects (like blur, brightness, contrast, drop shadow, etc.) to an element, typically images. Effects can be combined (space‑separated) and are applied before the element is rendered.
    </div>

    <h2>📌 Syntax</h2>
    <pre><code>filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();</code></pre>

    <h2>📖 Live Examples</h2>
    <p>All examples use the same original image – hover over each to see the effect in action (if you want a static preview, the effect is already applied).</p>

    <div class="filter-grid">
        <!-- Original reference image -->
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="Original">
            <div class="filter-title">Original</div>
            <code>filter: none;</code>
        </div>
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="brightness" style="filter: brightness(130%);">
            <div class="filter-title">brightness(130%)</div>
            <code>filter: brightness(130%);</code>
        </div>
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="blur" style="filter: blur(2px);">
            <div class="filter-title">blur(2px)</div>
            <code>filter: blur(2px);</code>
        </div>
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="invert" style="filter: invert(60%);">
            <div class="filter-title">invert(60%)</div>
            <code>filter: invert(60%);</code>
        </div>
    </div>

    <div class="filter-grid">
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="saturate" style="filter: saturate(40%);">
            <div class="filter-title">saturate(40%)</div>
            <code>filter: saturate(40%);</code>
        </div>
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="drop-shadow" style="filter: drop-shadow(10px 20px 30px yellow);">
            <div class="filter-title">drop-shadow(10px 20px 30px yellow)</div>
            <code>filter: drop-shadow(10px 20px 30px yellow);</code>
        </div>
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="contrast" style="filter: contrast(50%);">
            <div class="filter-title">contrast(50%)</div>
            <code>filter: contrast(50%);</code>
        </div>
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="opacity" style="filter: opacity(40%);">
            <div class="filter-title">opacity(40%)</div>
            <code>filter: opacity(40%);</code>
        </div>
    </div>

    <div class="filter-grid">
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="hue-rotate" style="filter: hue-rotate(240deg);">
            <div class="filter-title">hue-rotate(240deg)</div>
            <code>filter: hue-rotate(240deg);</code>
        </div>
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="grayscale" style="filter: grayscale(80%);">
            <div class="filter-title">grayscale(80%)</div>
            <code>filter: grayscale(80%);</code>
        </div>
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="sepia" style="filter: sepia(90%);">
            <div class="filter-title">sepia(90%)</div>
            <code>filter: sepia(90%);</code>
        </div>
        <div class="filter-card">
            <img src="https://picsum.photos/id/104/300/200" alt="multiple" style="filter: brightness(120%) contrast(120%) sepia(30%);">
            <div class="filter-title">Multiple filters</div>
            <code>brightness(120%) contrast(120%) sepia(30%)</code>
        </div>
    </div>

    <div class="note">
        💡 <strong>Tips:</strong><br>
        – Combine multiple filters by separating them with spaces: <code>filter: blur(2px) brightness(110%);</code><br>
        – Percentage values <strong>cannot</strong> be used with <code>blur()</code> (only length units like px).<br>
        – The <code>drop-shadow()</code> filter is similar to <code>box-shadow</code> but respects the shape of the element (including transparency).<br>
        – All modern browsers support CSS filters; for older IE, fallbacks may be needed.
    </div>

    <footer>
        CSS Filter – brightness, blur, invert, saturate, drop-shadow, contrast, opacity, hue-rotate, grayscale, sepia, and multiple filters
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Images",
              name: "CSS Images",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
    }
    .demo-img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 10px 0;
    }
    .thumbnail-img {
        border: 2px solid #e63946;
        border-radius: 5px;
        padding: 10px;
        max-width: 250px;
    }
    .transparent-img {
        opacity: 0.4;
        max-width: 250px;
    }
    .rounded-img {
        border-radius: 20px;
        max-width: 250px;
    }
    .circle-img {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
    .responsive-img {
        max-width: 100%;
        height: auto;
    }
    .center-img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 250px;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .image-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="container">
    <h1>CSS Images</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS provides powerful properties to style images – borders, rounded corners, opacity, responsiveness, centering, and more. Proper image styling improves user experience and visual appeal.
    </div>

    <h2>🖼️ Thumbnail Image</h2>
    <p>Use <code>border</code>, <code>border-radius</code>, and <code>padding</code> to create a thumbnail.</p>
    <div class="demo-box">
        <img class="thumbnail-img" src="https://picsum.photos/id/104/300/200" alt="thumbnail example">
        <p><small>border: 2px solid red; border-radius:5px; padding:10px;</small></p>
    </div>
    <pre><code>img {
    border: 2px solid red;
    border-radius: 5px;
    padding: 10px;
}</code></pre>

    <h2>👁️ Transparent Image</h2>
    <p>Use <code>opacity</code> (0.0–1.0). Lower value = more transparent.</p>
    <div class="demo-box">
        <img class="transparent-img" src="https://picsum.photos/id/104/300/200" alt="transparent image">
        <p><small>opacity: 0.4;</small></p>
    </div>
    <pre><code>img {
    opacity: 0.4;
}</code></pre>

    <h2>⚪ Rounded & Circle Images</h2>
    <p><code>border-radius</code> creates rounded corners. Use <code>border-radius: 50%;</code> for a circle (with equal width/height).</p>
    <div class="demo-box image-grid">
        <div>
            <img class="rounded-img" src="https://picsum.photos/id/20/300/200" alt="rounded corners">
            <p><code>border-radius: 20px;</code></p>
        </div>
        <div>
            <img class="circle-img" src="https://picsum.photos/id/16/300/300" alt="circle image">
            <p><code>border-radius: 50%; width:200px; height:200px; object-fit:cover;</code></p>
        </div>
    </div>
    <pre><code>.rounded {
    border-radius: 20px;
}
.circle {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
}</code></pre>

    <h2>📱 Responsive Image</h2>
    <p>Make images scale with the container using <code>max-width:100%; height:auto;</code></p>
    <div class="demo-box">
        <img class="responsive-img" src="https://picsum.photos/id/48/800/400" alt="responsive image" style="width:100%;">
        <p><small>The image scales down when browser width is reduced.</small></p>
    </div>
    <pre><code>img {
    max-width: 100%;
    height: auto;
}</code></pre>

    <h2>🎯 Centering an Image</h2>
    <p>Make the image a block element and set <code>margin-left: auto; margin-right: auto;</code></p>
    <div class="demo-box">
        <img class="center-img" src="https://picsum.photos/id/26/300/200" alt="centered image">
        <p><small>display: block; margin: 0 auto;</small></p>
    </div>
    <pre><code>img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}</code></pre>

    <div class="note">
        💡 <strong>Additional Tips:</strong><br>
        – Use <code>object-fit: cover;</code> to avoid distortion when setting fixed dimensions.<br>
        – Combine <code>filter</code> property with images for creative effects (blur, brightness, sepia).<br>
        – For background images, use <code>background-size: cover/contain</code>.
    </div>

    <footer>
        CSS Images – thumbnail, transparency, rounded/circle, responsive, centering
    </footer>
</div>

                  `
            },
            {
              id: "CSS-Overflow",
              name: "CSS Overflow",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .overflow-container {
        background-color: #e2e8f0;
        border: 2px solid #333;
        margin: 10px 0;
        padding: 0 8px;
        font-size: 0.9rem;
        width: 220px;
        height: 80px;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Overflow</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>overflow</code> property controls how content behaves when it overflows its containing element (i.e., when the content is larger than the specified width/height). It can clip the content, add scrollbars, or simply display the overflow outside the container.
    </div>

    <h2>📌 Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>visible</code> (default)</td><td>Overflow is not clipped – content may render outside the box.</td></tr>
            <tr><td><code>hidden</code></td><td>Overflow is clipped – the rest of the content is invisible.</td></tr>
            <tr><td><code>scroll</code></td><td>Overflow is clipped – scrollbars are always present (both axes).</td></tr>
            <tr><td><code>auto</code></td><td>Scrollbars appear only when needed (browser decides).</td></tr>
            <tr><td><code>clip</code></td><td>Similar to hidden, but disables programmatic scrolling and is a newer value.</td></tr>
            <tr><td><code>initial</code></td><td>Sets to default (<code>visible</code>).</td></tr>
            <tr><td><code>inherit</code></td><td>Inherits value from parent.</td></tr>
        </tbody>
    </table>

    <h2>📖 Examples</h2>

    <h3>1. overflow: visible (default)</h3>
    <div class="demo-box">
        <div class="overflow-container" style="overflow: visible;">
            This text overflows because the container has a fixed height and width. The content is visible outside the box.
        </div>
        <code>overflow: visible;</code>
    </div>

    <h3>2. overflow: hidden</h3>
    <div class="demo-box">
        <div class="overflow-container" style="overflow: hidden;">
            This text overflows, but it is clipped – the extra content is not visible.
        </div>
        <code>overflow: hidden;</code>
    </div>

    <h3>3. overflow: scroll (always shows scrollbars)</h3>
    <div class="demo-box">
        <div class="overflow-container" style="overflow: scroll;">
            Scrollbars appear even if content fits. Here the text overflows, so you can scroll to read.
        </div>
        <code>overflow: scroll;</code>
    </div>

    <h3>4. overflow: auto (scrollbars only when needed)</h3>
    <div class="demo-box">
        <div class="overflow-container" style="overflow: auto;">
            This container has auto overflow. Because the content overflows, you will see a vertical (and possibly horizontal) scrollbar.
        </div>
        <code>overflow: auto;</code>
    </div>

    <h3>5. overflow: clip (similar to hidden, but no scrolling)</h3>
    <div class="demo-box">
        <div class="overflow-container" style="overflow: clip;">
            This uses overflow: clip. Content is clipped and cannot be scrolled programmatically.
        </div>
        <code>overflow: clip;</code>
    </div>

    <h3>6. overflow: initial (resets to visible)</h3>
    <div class="demo-box">
        <div class="overflow-container" style="overflow: initial;">
            This is the initial value (same as visible) – content overflows the container.
        </div>
        <code>overflow: initial;</code>
    </div>

    <h3>7. overflow: inherit (takes value from parent)</h3>
    <div class="demo-box" style="overflow: auto;">
        <div style="background:#eee; border:1px solid #999; width:200px; height:80px; overflow: inherit;">
            Parent has overflow: auto, so this box inherits auto (scrollbar may appear if content overflows).
        </div>
        <code>overflow: inherit;</code>
    </div>

    <div class="note">
        💡 <strong>Useful variants:</strong><br>
        – <code>overflow-x</code> and <code>overflow-y</code> control horizontal/vertical overflow separately.<br>
        – Common use: <code>overflow: auto</code> for scrollable content areas, <code>overflow: hidden</code> to clear floats or hide overflowing decorations.<br>
        – Setting <code>overflow</code> to anything other than <code>visible</code> creates a new block formatting context (helps contain floats).
    </div>

    <footer>
        CSS Overflow – visible, hidden, scroll, auto, clip, initial, inherit
    </footer>
</div>

                  `
            },
            {
              id: "CSS-Padding",
              name: "CSS Padding",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .padding-sample {
        background-color: #fed7aa;
        border: 2px solid #b45309;
        margin: 15px 0;
    }
    .padding-inner {
        background-color: #fef3c7;
        text-align: center;
        font-weight: bold;
    }
</style>

<div class="container">
    <h1>CSS Padding Property</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>padding</code> property defines the space between an element's content and its border. It creates an inner clearance area that is affected by background colors and helps improve readability, spacing, and overall layout. Padding is different from <code>margin</code> (which adds space outside the border).
    </div>

    <h2>📌 Syntax</h2>
    <pre><code>/* Shorthand for all sides */
padding: value;

/* Individual sides */
padding-top: value;
padding-right: value;
padding-bottom: value;
padding-left: value;</code></pre>
    <p>Values can be in <strong>px, em, rem, %</strong> (percentage of parent width).</p>

    <h2>🧩 Why Use Padding?</h2>
    <ul style="margin-left: 1.5rem;">
        <li>Controls spacing inside an element – makes content less cramped.</li>
        <li>Enhances readability by adding breathing room around text.</li>
        <li>Creates visual consistency and professional design.</li>
        <li>Prevents elements from overlapping.</li>
        <li>Helps responsive layouts (padding scales with percentages).</li>
        <li>Draws attention to buttons, cards, or highlighted areas.</li>
        <li>Ensures cross‑browser layout consistency.</li>
    </ul>

    <h2>📖 Live Examples</h2>

    <h3>1. Padding on a Header</h3>
    <div class="demo-box">
        <div style="background-color: #3498db; color: white; text-align: center; padding: 20px;">
            <strong>Header with padding: 20px</strong>
        </div>
    </div>
    <pre><code>header {
    background-color: #3498db;
    padding: 20px; /* space between text and border */
}</code></pre>

    <h3>2. Different Padding on Each Side</h3>
    <div class="demo-box">
        <div style="background-color: #fef9e3; border: 2px solid #f59e0b; padding: 10px 30px 40px 5px;">
            <strong>padding: 10px 30px 40px 5px;</strong><br>
            top=10px, right=30px, bottom=40px, left=5px
        </div>
    </div>

    <h3>3. Shorthand Variations (1, 2, 3, 4 values)</h3>
    <div class="demo-box">
        <div style="background:#e2e8f0; margin:10px 0; padding: 20px;">
            <code>padding: 20px;</code> → all sides
        </div>
        <div style="background:#e2e8f0; margin:10px 0; padding: 10px 30px;">
            <code>padding: 10px 30px;</code> → top/bottom 10px, left/right 30px
        </div>
        <div style="background:#e2e8f0; margin:10px 0; padding: 10px 20px 30px;">
            <code>padding: 10px 20px 30px;</code> → top, right/left, bottom
        </div>
    </div>

    <h3>4. Padding on a Button</h3>
    <div class="demo-box">
        <button style="background-color: #2ecc71; color: white; padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">
            Click Me (padding: 12px 24px)
        </button>
    </div>
    <pre><code>button {
    padding: 12px 24px;  /* vertical | horizontal */
}</code></pre>

    <h3>5. Padding with Background Color – Visual Demonstration</h3>
    <div class="demo-box">
        <div class="padding-sample" style="padding: 15px;">
            <div class="padding-inner" style="padding: 10px;">
                Outer padding (orange border) creates space around the inner yellow box.
            </div>
        </div>
        <p><small>The outer div has <code>padding: 15px</code> – the background color extends into the padding area.</small></p>
    </div>

    <h3>6. Padding vs Margin (visual difference)</h3>
    <div class="demo-box">
        <div style="background: #cbd5e1; padding: 15px; margin: 0 0 20px 0;">
            <strong>Padding</strong> – space inside the border (background fills it).
        </div>
        <div style="background: #cbd5e1; margin: 25px; padding: 0;">
            <strong>Margin</strong> – space outside the border (transparent).
        </div>
    </div>

    <div class="note">
        💡 <strong>Key Points:</strong><br>
        – Padding is inside the element, margin is outside.<br>
        – Padding adds to the total width/height unless <code>box-sizing: border-box;</code> is applied.<br>
        – Use percentage values for responsive padding that scales with parent width.<br>
        – Always combine padding with appropriate background colors for visual separation.
    </div>

    <footer>
        CSS Padding – individual sides, shorthand, use cases, and padding vs margin
    </footer>
</div>

                  `
            },
            {
              id: "CSS-Position",
              name: "CSS Position",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }

    /* Position absolute demo styles */
    .relative-container {
        position: relative;
        background: #e2e8f0;
        border: 2px dashed #2962ff;
        padding: 20px;
        min-height: 200px;
        margin: 20px 0;
    }
    .absolute-box {
        position: absolute;
        background: #f97316;
        color: white;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: bold;
        width: 150px;
        text-align: center;
    }
    .demo-overlap {
        background: #cbd5e1;
        min-height: 250px;
        position: relative;
        margin: 20px 0;
    }
    .layer1 { background: #3b82f6; width: 120px; height: 80px; position: absolute; top: 20px; left: 30px; z-index: 1; color: white; display: flex; align-items: center; justify-content: center; }
    .layer2 { background: #ef4444; width: 120px; height: 80px; position: absolute; top: 50px; left: 60px; z-index: 2; color: white; display: flex; align-items: center; justify-content: center; }
    .layer3 { background: #10b981; width: 120px; height: 80px; position: absolute; top: 80px; left: 90px; z-index: 3; color: white; display: flex; align-items: center; justify-content: center; }
</style>

<div class="container">
    <h1>CSS Position Absolute</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        <code>position: absolute;</code> removes an element from the normal document flow and positions it relative to its nearest positioned ancestor (an element with <code>position: relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>). If no positioned ancestor exists, it positions relative to the initial containing block (usually the <code>&lt;html&gt;</code> element). You control its placement using <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>.
    </div>

    <h2>📌 Basic Syntax</h2>
    <pre><code>.element {
    position: absolute;
    top: 20px;
    left: 30px;
}</code></pre>

    <h2>📖 How It Works – Simple Example</h2>
    <div class="demo-box">
        <div class="relative-container">
            <p>This is the parent container with <code>position: relative;</code></p>
            <div class="absolute-box" style="top: 10px; right: 20px;">
                absolute (top:10px; right:20px)
            </div>
            <div class="absolute-box" style="bottom: 10px; left: 15px;">
                absolute (bottom:10px; left:15px)
            </div>
            <p>Notice the absolutely positioned boxes are removed from flow and placed inside the relative parent.</p>
        </div>
        <pre><code>.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 10px;
    right: 20px;
}</code></pre>
    </div>

    <h2>🎯 Positioning Relative to the Document (No positioned ancestor)</h2>
    <div class="demo-box">
        <div style="border: 1px solid #999; background: #fef9c3; padding: 10px; min-height: 150px;">
            <p>This container has no <code>position</code> set. The blue box below is <code>position: absolute</code> with <code>top: 0; left: 0;</code> – it will be positioned relative to the document (top‑left corner of the page).</p>
            <div style="position: absolute; top: 0; left: 0; background: #3b82f6; color: white; padding: 5px 10px;">
                I am at document top‑left
            </div>
        </div>
        <div class="warning" style="margin-top: 10px;">
            ⚠️ The blue box appears at the very top left of the whole page (outside its container) because no ancestor is positioned.
        </div>
    </div>

    <h2>🧩 Controlling Stack Order (z-index)</h2>
    <p>Absolutely positioned elements can overlap. Use <code>z-index</code> to control which appears on top (higher value = higher layer).</p>
    <div class="demo-box">
        <div class="demo-overlap">
            <div class="layer1">z-index: 1</div>
            <div class="layer2">z-index: 2</div>
            <div class="layer3">z-index: 3</div>
            <p style="position: relative; top: 130px; text-align: center; background: white; width: fit-content; margin: 0 auto; padding: 5px;">Container with position: relative</p>
        </div>
        <pre><code>.box1 { position: absolute; z-index: 1; }
.box2 { position: absolute; z-index: 2; }
.box3 { position: absolute; z-index: 3; }</code></pre>
    </div>

    <h2>✅ Why Use Position Absolute?</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li><strong>Overlapping elements</strong> – tooltips, modals, pop‑ups, dropdown menus.</li>
        <li><strong>Custom positioning</strong> – break free from normal flow for unique layouts.</li>
        <li><strong>Complex UI components</strong> – sliders, carousels, drag‑and‑drop interfaces.</li>
        <li><strong>Fixed‑like elements inside containers</strong> – with clever combinations.</li>
        <li><strong>Z‑index layering</strong> – control stacking order precisely.</li>
    </ul>

    <h2>⚠️ Limitations & Considerations</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li><strong>No automatic reflow</strong> – other elements ignore absolutely positioned elements; layout may break if parent dimensions change.</li>
        <li><strong>Overlap issues</strong> – stacking order must be managed with <code>z-index</code>.</li>
        <li><strong>Responsiveness challenges</strong> – absolute values (pixels) may not adapt well; use percentages or media queries.</li>
        <li><strong>Dependence on positioned ancestor</strong> – forgetting to set <code>position: relative</code> on the parent causes unexpected placement.</li>
    </ul>

    <div class="note">
        💡 <strong>Tip:</strong> Always set a positioned ancestor (e.g., <code>position: relative</code> on the parent) when you want absolute positioning relative to that parent. For full‑page overlays or modals, position the element directly inside <code>&lt;body&gt;</code> without a relative parent.
    </div>

    <footer>
        CSS Position Absolute – syntax, examples, stacking (z-index), use cases, and limitations
    </footer>
</div>

                  `
            },
            {
              id: "CSS-Vertical-Align",
              name: "CSS Vertical Align",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .demo-img {
        width: 40px;
        height: auto;
        vertical-align: baseline; /* will be overridden per example */
    }
    .valign-row {
        background: #f1f5f9;
        margin: 10px 0;
        padding: 8px;
        border-radius: 8px;
        font-size: 1.2rem;
    }
    .valign-row img {
        width: 50px;
        border-radius: 6px;
    }
</style>

<div class="container">
    <h1>CSS Vertical Align</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>vertical-align</code> property sets the vertical positioning of an inline, inline‑block, or table‑cell element relative to its parent or line. It is commonly used to align images with text, center content in table cells, or fine‑tune inline element positioning.
    </div>

    <h2>📌 Important Facts</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li>Applies to inline and inline‑block elements, as well as table‑cells.</li>
        <li>Affects the alignment of the element itself (not its content), except for table cells where it aligns the content inside the cell.</li>
        <li>The default value is <code>baseline</code>.</li>
        <li>Does not work on block‑level elements (like <code>&lt;div&gt;</code>) unless you change their <code>display</code> to <code>inline-block</code> or <code>table-cell</code>.</li>
    </ul>

    <h2>📖 Common Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>baseline</code> (default)</td><td>Aligns baseline of element with baseline of parent.</td></tr>
            <tr><td><code>sub</code> / <code>super</code></td><td>Subscript / superscript alignment.</td></tr>
            <tr><td><code>top</code> / <code>bottom</code></td><td>Aligns top/bottom of element with top/bottom of tallest/lowest element on the line.</td></tr>
            <tr><td><code>text-top</code> / <code>text-bottom</code></td><td>Aligns with top/bottom of parent element's font.</td></tr>
            <tr><td><code>middle</code></td><td>Places element in the middle of parent element (roughly center).</td></tr>
            <tr><td><code>length</code> (e.g., 10px)</td><td>Raises or lowers element by specified length (negative allowed).</td></tr>
            <tr><td><code>%</code> (e.g., 50%)</td><td>Percentage of <code>line-height</code>. Positive values raise, negative lower.</td></tr>
        </tbody>
    </table>

    <h2>🖼️ Examples with Images</h2>
    <p>Compare how an image aligns with surrounding text for different <code>vertical-align</code> values:</p>

    <div class="demo-box">
        <div class="valign-row">
            <span>baseline (default): </span>
            <img src="https://picsum.photos/id/20/50/50" alt="sample" style="vertical-align: baseline;">
            <span> The image aligns with the baseline of text.</span>
        </div>
        <div class="valign-row">
            <span>text-top: </span>
            <img src="https://picsum.photos/id/20/50/50" alt="sample" style="vertical-align: text-top;">
            <span> Top of image aligns with top of parent font.</span>
        </div>
        <div class="valign-row">
            <span>text-bottom: </span>
            <img src="https://picsum.photos/id/20/50/50" alt="sample" style="vertical-align: text-bottom;">
            <span> Bottom of image aligns with bottom of parent font.</span>
        </div>
        <div class="valign-row">
            <span>middle: </span>
            <img src="https://picsum.photos/id/20/50/50" alt="sample" style="vertical-align: middle;">
            <span> Image vertically centered relative to the parent text.</span>
        </div>
        <div class="valign-row">
            <span>super: </span>
            <img src="https://picsum.photos/id/20/50/50" alt="sample" style="vertical-align: super;">
            <span> Image raised like superscript.</span>
        </div>
        <div class="valign-row">
            <span>sub: </span>
            <img src="https://picsum.photos/id/20/50/50" alt="sample" style="vertical-align: sub;">
            <span> Image lowered like subscript.</span>
        </div>
        <div class="valign-row">
            <span>10px: </span>
            <img src="https://picsum.photos/id/20/50/50" alt="sample" style="vertical-align: 10px;">
            <span> Image shifted down by 10 pixels.</span>
        </div>
        <div class="valign-row">
            <span>-10px: </span>
            <img src="https://picsum.photos/id/20/50/50" alt="sample" style="vertical-align: -10px;">
            <span> Image shifted up by 10 pixels.</span>
        </div>
        <div class="valign-row">
            <span>50%: </span>
            <img src="https://picsum.photos/id/20/50/50" alt="sample" style="vertical-align: 50%;">
            <span> Shifted by 50% of line‑height.</span>
        </div>
    </div>

    <pre><code>/* Examples used above */
img { vertical-align: text-top; }
img { vertical-align: middle; }
img { vertical-align: 10px; }
img { vertical-align: -10px; }</code></pre>

    <h2>📊 Table Cell Vertical Alignment</h2>
    <p>When applied to table cells (<code>&lt;td&gt;</code> or <code>&lt;th&gt;</code>), <code>vertical-align</code> aligns the content inside the cell.</p>
    <div class="demo-box">
        <table style="width: 100%; border-collapse: collapse; background: white;">
            <tr style="background: #e2e8f0;">
                <th style="border:1px solid #cbd5e1; padding: 8px;">Value</th>
                <th style="border:1px solid #cbd5e1; padding: 8px;">Result</th>
            </tr>
            <tr>
                <td style="border:1px solid #cbd5e1; padding: 8px;"><code>top</code></td>
                <td style="border:1px solid #cbd5e1; padding: 8px; vertical-align: top; height: 80px;">Content aligned to top</td>
            </tr>
            <tr>
                <td style="border:1px solid #cbd5e1; padding: 8px;"><code>middle</code></td>
                <td style="border:1px solid #cbd5e1; padding: 8px; vertical-align: middle; height: 80px;">Content vertically centered</td>
            </tr>
            <tr>
                <td style="border:1px solid #cbd5e1; padding: 8px;"><code>bottom</code></td>
                <td style="border:1px solid #cbd5e1; padding: 8px; vertical-align: bottom; height: 80px;">Content aligned to bottom</td>
            </tr>
        </table>
    </div>
    <pre><code>td {
    vertical-align: middle;
}</code></pre>

    <div class="note">
        💡 <strong>Key Takeaways:</strong><br>
        – Use <code>vertical-align: middle</code> to center images or icons with text (on inline‑block elements).<br>
        – For table cells, <code>vertical-align</code> is essential for proper alignment of content.<br>
        – Negative length or percentage values shift the element upward (away from the baseline).<br>
        – <code>vertical-align</code> does <strong>not</strong> work on block‑level elements (e.g., <code>&lt;div&gt;</code>). Use Flexbox or Grid for vertical centering of block elements.
    </div>

    <footer>
        CSS Vertical Align – baseline, top, middle, bottom, text-top, text-bottom, sub, super, length, percentage, and table‑cell usage
    </footer>
</div>

                  `
            },
            {
              id: "CSS-White-Space",
              name: "CSS White Space",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .demo-box p {
        background: #fff3e0;
        padding: 10px;
        border-left: 4px solid #f39c12;
        margin: 5px 0;
        font-family: monospace;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .ws-demo {
        background: #fef9e3;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 12px;
        margin: 12px 0;
        font-family: monospace;
        font-size: 1rem;
        white-space: normal; /* will be overridden */
        overflow-x: auto;
    }
</style>

<div class="container">
    <h1>CSS White Space</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>white-space</code> property controls how whitespace inside an element is handled, including spaces, tabs, line breaks, and text wrapping. It is essential for preserving formatting in code blocks, preventing unwanted line breaks, or forcing text to wrap naturally.
    </div>

    <h2>📌 Values Overview</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>normal</code> (default)</td><td>Collapses multiple spaces into one; wraps text as needed.</td></tr>
            <tr><td><code>nowrap</code></td><td>Collapses spaces, but text never wraps (use <code>&lt;br&gt;</code> to break).</td></tr>
            <tr><td><code>pre</code></td><td>Preserves all whitespace and line breaks; text only wraps on line breaks (like <code>&lt;pre&gt;</code>).</td></tr>
            <tr><td><code>pre-line</code></td><td>Collapses spaces, preserves line breaks, and wraps text when necessary.</td></tr>
            <tr><td><code>pre-wrap</code></td><td>Preserves all whitespace and line breaks, and also wraps text when necessary.</td></tr>
            <tr><td><code>initial</code>/<code>inherit</code></td><td>Sets to default or inherits from parent.</td></tr>
        </tbody>
    </table>

    <h2>📖 Live Examples</h2>
    <p>The following example uses the same block of text (with multiple spaces, tabs, and line breaks) to show how each <code>white-space</code> value affects rendering.</p>

    <div class="demo-box">
        <strong>1. white-space: normal (default)</strong>
        <div class="ws-demo" style="white-space: normal;">
            This   is   a   text   with   multiple   spaces.
            It also has a line break here.
            And      tabs    (represented     as spaces in HTML).
            This line is long, and it will wrap naturally because of normal.
        </div>
        <pre><code>white-space: normal;</code></pre>
    </div>

    <div class="demo-box">
        <strong>2. white-space: nowrap</strong>
        <div class="ws-demo" style="white-space: nowrap; overflow-x: auto;">
            This   is   a   text   with   multiple   spaces.
            It also has a line break here.
            This entire block will stay on one line (scroll horizontally to see everything).
            No automatic wrapping happens.
        </div>
        <pre><code>white-space: nowrap;</code></pre>
    </div>

    <div class="demo-box">
        <strong>3. white-space: pre</strong>
        <div class="ws-demo" style="white-space: pre; overflow-x: auto;">
            This   preserves   all   spaces   and   line breaks.
            Every   space   and   tab   is   kept.
            No automatic wrapping – long lines scroll horizontally.
        </div>
        <pre><code>white-space: pre;</code></pre>
    </div>

    <div class="demo-box">
        <strong>4. white-space: pre-line</strong>
        <div class="ws-demo" style="white-space: pre-line;">
            This   collapses   multiple   spaces   into   one   (like normal).
            But it preserves    line breaks   that you manually enter.
            This line is long enough to wrap automatically because pre-line allows wrapping.
        </div>
        <pre><code>white-space: pre-line;</code></pre>
    </div>

    <div class="demo-box">
        <strong>5. white-space: pre-wrap</strong>
        <div class="ws-demo" style="white-space: pre-wrap;">
            This   preserves   all   spaces   and   line   breaks.
            Unlike pre, it also wraps text automatically when the line would overflow.
            This is ideal for code blocks in responsive designs.
        </div>
        <pre><code>white-space: pre-wrap;</code></pre>
    </div>

    <div class="demo-box">
        <strong>6. Comparing initial / inherit</strong>
        <div style="white-space: pre-wrap; background: #f9f9f9; padding: 0.5rem; border-radius: 8px;">
            Parent has <code>pre-wrap</code>. 
            <span style="white-space: inherit;">This span inherits the parent's value.</span>
            <span style="white-space: initial;">This span resets to normal.</span>
        </div>
        <pre><code>white-space: inherit;
white-space: initial;</code></pre>
    </div>

    <div class="note">
        💡 <strong>Common use cases:</strong><br>
        – <code>nowrap</code> for horizontal navigation menus, preventing menu items from wrapping.<br>
        – <code>pre</code> or <code>pre-wrap</code> for displaying code snippets (preserve indentation).<br>
        – <code>pre-line</code> for preserving paragraph line breaks while still allowing natural wrapping.<br>
        – <code>normal</code> is standard for most text content.
    </div>

    <footer>
        CSS White Space – normal, nowrap, pre, pre-line, pre-wrap, initial, inherit
    </footer>
</div>

                  `
            },
            {
              id: "CSS-Width",
              name: "CSS Width",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .width-demo {
        background: #d9f0f7;
        border: 2px solid #0284c7;
        margin: 15px 0;
        padding: 8px;
        text-align: center;
        font-weight: bold;
    }
    .responsive-demo {
        background: #fef9c3;
        border: 2px solid #eab308;
        padding: 10px;
        text-align: center;
    }
</style>

<div class="container">
    <h1>Width Property in CSS</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>width</code> property sets the width of an element's content area (excluding padding, border, and margin by default). It can be defined using absolute units (px, cm), relative units (%, em, rem), or keywords like <code>auto</code>. The <code>box-sizing</code> property changes how width is calculated.
    </div>

    <h2>📌 Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Value</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>auto</code> (default)</td><td>Browser calculates the width (fills available space for block elements).</td></tr>
            <tr><td><code>length</code> (px, cm, em, rem, etc.)</td><td>Fixed width value.</td></tr>
            <tr><td><code>%</code></td><td>Percentage of the containing block's width.</td></tr>
            <tr><td><code>initial</code></td><td>Sets to default (<code>auto</code>).</td></tr>
            <tr><td><code>inherit</code></td><td>Inherits width from parent.</td></tr>
        </tbody>
    </table>

    <h2>📖 Example: Width in Pixels</h2>
    <div class="demo-box">
        <div class="width-demo" style="width: auto;">
            width: auto (default) – expands to fill container.
        </div>
        <div class="width-demo" style="width: 150px;">
            width: 150px
        </div>
        <div class="width-demo" style="width: 300px;">
            width: 300px
        </div>
    </div>
    <pre><code>img.normal { width: auto; }
img.big { width: 150px; }
p.ex { width: 150px; }</code></pre>

    <h2>📏 Example: Width in Percentage</h2>
    <div class="demo-box">
        <div class="width-demo" style="width: 100%; background: #bae6fd;">
            100% of parent container
        </div>
        <div class="width-demo" style="width: 75%; background: #7dd3fc;">
            75%
        </div>
        <div class="width-demo" style="width: 50%; background: #38bdf8;">
            50%
        </div>
        <div class="width-demo" style="width: 25%; background: #0ea5e9;">
            25%
        </div>
    </div>
    <pre><code>img.big { width: 50%; }
img.small { width: 10%; }</code></pre>

    <h2>🎯 min-width & max-width (Responsive)</h2>
    <div class="demo-box">
        <div class="width-demo" style="width: 100%; max-width: 400px; min-width: 150px; background: #fde047;">
            width: 100%; <br>
            max-width: 400px (stops growing at 400px);<br>
            min-width: 150px (stops shrinking below 150px)
        </div>
        <p>Resize the browser to see the effect – the box grows up to 400px, shrinks to 150px, then stops.</p>
    </div>
    <pre><code>div {
    width: 100%;
    max-width: 400px;
    min-width: 150px;
}</code></pre>

    <h2>🧩 box-sizing: border-box</h2>
    <p>By default, <code>width</code> applies only to content. Padding and border add to the total width. Using <code>box-sizing: border-box</code> includes padding and border inside the specified width.</p>
    <div class="demo-box">
        <div style="background: #f1f5f9; margin: 10px 0;">
            <div style="width: 200px; padding: 20px; border: 5px solid #3b82f6; background: #bfdbfe; box-sizing: content-box;">
                content-box: width = 200px, total = 200 + 40 + 10 = 250px
            </div>
        </div>
        <div style="background: #f1f5f9; margin: 10px 0;">
            <div style="width: 200px; padding: 20px; border: 5px solid #3b82f6; background: #bfdbfe; box-sizing: border-box;">
                border-box: total width stays 200px (content area shrinks)
            </div>
        </div>
    </div>
    <pre><code>.box {
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    box-sizing: border-box; /* total width = 200px */
}</code></pre>

    <h2>📱 Responsive Design with Media Queries</h2>
    <div class="demo-box responsive-demo" style="width: 100%;">
        <div id="responsive-demo-target" style="background: #facc15; padding: 10px;">
            My width changes on small screens
        </div>
    </div>
    <style>
        @media screen and (max-width: 600px) {
            #responsive-demo-target {
                width: 100% !important;
                background: #f97316;
            }
        }
        #responsive-demo-target {
            width: 400px;
            transition: all 0.2s;
        }
    </style>
    <pre><code>@media screen and (max-width: 600px) {
    div {
        width: 100%;
    }
}</code></pre>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – For block‑level elements, <code>width: auto</code> fills the available horizontal space (typically 100% of parent).<br>
        – Inline elements ignore width unless you set <code>display: inline-block</code> or <code>display: block</code>.<br>
        – Combine <code>max-width</code> with <code>width: 100%</code> for responsive images.<br>
        – The <code>box-sizing: border-box</code> is widely recommended to avoid unexpected sizing issues.
    </div>

    <footer>
        CSS Width – auto, px, %, min‑width, max‑width, box‑sizing, and media queries
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Height",
              name: "CSS Height",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .height-demo {
        border: 2px solid #0284c7;
        background: #e0f2fe;
        margin: 15px 0;
        padding: 8px;
        overflow: auto;
        width: 280px;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Height Property</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>height</code> property sets the height of an element's content area (excluding padding, border, and margin by default). It accepts length units (px, em, rem, etc.), percentages, or the keyword <code>auto</code>. Negative values are not allowed. If content overflows the specified height, use the <code>overflow</code> property to control visibility.
    </div>

    <h2>📌 Property Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
            <tr style="background:#2962ff; color:white;">
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>auto</code> (default)</td>
                <td>Browser calculates the height based on content. Negative values not allowed.</td>
            </tr>
            <tr>
                <td><code>length</code> (px, cm, em, etc.)</td>
                <td>Fixed height value. Negative values not allowed.</td>
            </tr>
            <tr>
                <td><code>%</code></td>
                <td>Percentage of the containing block's height. Negative values not allowed.</td>
            </tr>
            <tr>
                <td><code>initial</code></td>
                <td>Sets to default value (<code>auto</code>).</td>
            </tr>
            <tr>
                <td><code>inherit</code></td>
                <td>Inherits height from parent element.</td>
            </tr>
        </tbody>
    </table>

    <h2>📖 Example 1: height: auto, height: 320px, height: 16em</h2>
    <div class="demo-box">
        <div class="height-demo" style="height: auto;">
            <strong>height: auto</strong><br>
            <img src="https://picsum.photos/id/104/100/80" alt="sample" style="max-width:100%;"><br>
            Welcome to tpointtech.com<br>
            The height of this div is set to auto (expands to fit content).
        </div>
        <div class="height-demo" style="height: 320px;">
            <strong>height: 320px</strong><br>
            <img src="https://picsum.photos/id/104/100/80" alt="sample" style="max-width:100%;"><br>
            Welcome to tpointtech.com<br>
            The height is fixed at 320px. Content may overflow if too tall.
        </div>
        <div class="height-demo" style="height: 16em;">
            <strong>height: 16em</strong><br>
            <img src="https://picsum.photos/id/104/100/80" alt="sample" style="max-width:100%;"><br>
            Welcome to tpointtech.com<br>
            Height is 16 times the current font size (em unit).
        </div>
    </div>
    <pre><code>#auto { height: auto; width: 275px; border: 2px solid blue; }
#px { height: 320px; width: 275px; border: 2px solid blue; }
#em { height: 16em; width: 275px; border: 2px solid blue; }</code></pre>

    <h2>📖 Example 2: height in percentage (65%)</h2>
    <div class="demo-box">
        <div style="position: relative; height: 300px; border: 1px dashed #999; background: #f1f5f9;">
            <div style="position: absolute; width: auto; height: 65%; border: 2px solid blue; background: #bae6fd; padding: 8px; overflow: auto;">
                <strong>height: 65%</strong><br>
                <img src="https://picsum.photos/id/104/100/80" alt="sample"><br>
                Welcome to tpointtech.com<br>
                This div's height is 65% of its positioned parent container (which is 300px tall).
            </div>
        </div>
    </div>
    <pre><code>#per {
    position: absolute;
    width: auto;
    height: 65%;
    border: 2px solid blue;
}</code></pre>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – Percentage heights require the parent to have an explicit height, otherwise they behave like <code>auto</code>.<br>
        – Use <code>min-height</code> and <code>max-height</code> to set responsive height limits.<br>
        – When using fixed height, always consider <code>overflow: auto</code> or <code>scroll</code> to handle overflowing content.
    </div>

    <footer>
        CSS Height – auto, px, em, %, min‑height, max‑height
    </footer>
</div>


                  `
            },

             {
              id: "CSS-Word-Wrap",
              name: "CSS Word Wrap",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .wordwrap-sample {
        width: 11em;
        background-color: #ccffff;
        border: 1px solid #000;
        padding: 10px;
        margin: 10px 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Word Wrap</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>word-wrap</code> property (also known as <code>overflow-wrap</code>) allows long, unbreakable words to be broken and wrap onto the next line, preventing overflow outside the containing box. It is especially useful for URLs, long strings, or user‑generated content.
    </div>

    <h2>📌 Property Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
            <tr style="background:#2962ff; color:white;">
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>normal</code> (default)</td>
                <td>Breaks words only at allowed break points (spaces, hyphens). Long unbreakable strings will overflow.</td>
            </tr>
            <tr>
                <td><code>break-word</code></td>
                <td>Forces unbreakable words to break and wrap to the next line, preventing overflow.</td>
            </tr>
            <tr>
                <td><code>initial</code></td>
                <td>Sets the property to its default value (<code>normal</code>).</td>
            </tr>
            <tr>
                <td><code>inherit</code></td>
                <td>Inherits the value from its parent element.</td>
            </tr>
        </tbody>
    </table>

    <h2>📖 Example: word-wrap: break-word</h2>
    <div class="demo-box">
        <div class="wordwrap-sample" style="word-wrap: break-word;">
            In this paragraph, there is a very long word: 
            iamsooooooooooooooooooooooooooooooolongggggggggggggggg.
            The long word will break and wrap to the next line because of <code>word-wrap: break-word;</code>.
        </div>
        <pre><code>p {
    width: 11em;
    background-color: cyan;
    border: 1px solid black;
    padding: 10px;
    word-wrap: break-word;
}</code></pre>
    </div>

    <h2>📖 Comparison: normal vs break-word</h2>
    <div class="demo-box">
        <p><strong>Without word-wrap (normal):</strong></p>
        <div style="width: 11em; background: #ffe0e0; border: 1px solid red; padding: 10px; word-wrap: normal;">
            LongWord: iamsooooooooooooooooooooooooooooooolongggggggggggggggg (overflows)
        </div>
        <p><strong>With word-wrap: break-word:</strong></p>
        <div style="width: 11em; background: #e0ffe0; border: 1px solid green; padding: 10px; word-wrap: break-word;">
            LongWord: iamsooooooooooooooooooooooooooooooolongggggggggggggggg (breaks and wraps)
        </div>
    </div>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – <code>word-wrap</code> is also known as <code>overflow-wrap</code>. Both are accepted in modern browsers.<br>
        – Use <code>break-word</code> to prevent layout breaking from long URLs or random strings.<br>
        – For better compatibility, you can use both: <code>word-wrap: break-word; overflow-wrap: break-word;</code>.
    </div>

    <footer>
        CSS Word Wrap – normal, break-word, initial, inherit, and live examples
    </footer>
</div>


                  `
            },

            {
              id: "Box-shadow-CSS",
              name: "Box-shadow CSS",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
    .shadow-sample {
        width: 180px;
        height: 100px;
        background: coral;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 10px;
        border-radius: 8px;
        font-weight: bold;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    @keyframes shadowAnim {
        50% { box-shadow: 10px 20px 30px blue; }
    }
    .animated-shadow {
        animation: shadowAnim 3s infinite ease-in-out;
    }
</style>

<div class="container">
    <h1>Box Shadow CSS</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>box-shadow</code> property applies shadow effects to an element, creating depth, separation, and visual interest. Syntax: <code>box-shadow: [horizontal-offset] [vertical-offset] [blur-radius] [spread-radius] [color] [inset];</code>
    </div>

    <h2>📌 Basic Syntax & Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Parameter</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td>horizontal-offset (required)</td><td>Positive = right, negative = left.</td></tr>
            <tr><td>vertical-offset (required)</td><td>Positive = down, negative = up.</td></tr>
            <tr><td>blur-radius (optional)</td><td>Higher value = more blur. Default 0 (sharp).</td></tr>
            <tr><td>spread-radius (optional)</td><td>Positive = larger shadow, negative = smaller.</td></tr>
            <tr><td>color (optional)</td><td>Any color value (hex, rgb, named). Default depends on browser.</td></tr>
            <tr><td>inset (optional)</td><td>Creates inner shadow.</td></tr>
        </tbody>
    </table>

    <h2>📖 Example: Simple Shadow</h2>
    <div class="demo-box">
        <div class="shadow-sample" style="box-shadow: 5px 5px 10px rgba(0,0,0,0.3);">
            box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
        </div>
        <div class="shadow-sample" style="box-shadow: -5px -5px 10px rgba(0,0,0,0.2);">
            negative offsets: -5px -5px 10px
        </div>
        <div class="shadow-sample" style="box-shadow: 0 0 15px 5px #3b82f6;">
            blur+spread: 0 0 15px 5px blue
        </div>
    </div>

    <h2>🎨 Border Around Text (using text-shadow)</h2>
    <p>To create a border-like effect around text, use <code>text-shadow</code> with multiple offsets:</p>
    <div class="demo-box">
        <p style="color: coral; font-size: 2rem; font-weight: bold; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">
            Border Shadow Text
        </p>
    </div>
    <pre><code>.element {
    color: coral;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}</code></pre>

    <h2>🧩 Border‑Like Shadow (Spread Radius)</h2>
    <div class="demo-box">
        <div class="shadow-sample" style="box-shadow: 0 0 0 3px rgba(0,0,0,0.3); background: white; color: black;">
            spread radius = 3px → border‑like shadow
        </div>
        <div class="shadow-sample" style="box-shadow: 0 0 0 5px #f97316; background: white; color: black;">
            0 0 0 5px orange
        </div>
    </div>
    <pre><code>/* Border-like shadow */
.box {
    box-shadow: 0 0 0 3px rgba(0,0,0,0.3);
}</code></pre>

    <h2>🌈 Multiple Shadows (comma separated)</h2>
    <div class="demo-box">
        <div class="shadow-sample" style="box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px; background: white; color: black;">
            Multiple concentric shadows
        </div>
    </div>
    <pre><code>box-shadow: rgb(85,91,255) 0px 0px 0px 3px,
            rgb(31,193,27) 0px 0px 0px 6px,
            rgb(255,217,19) 0px 0px 0px 9px,
            rgb(255,156,85) 0px 0px 0px 12px,
            rgb(255,85,85) 0px 0px 0px 15px;</code></pre>

    <h2>🔘 Inset Shadow (inner shadow)</h2>
    <div class="demo-box">
        <div class="shadow-sample" style="box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5); background: #f0f0f0; color: black;">
            inset 2px 2px 5px rgba(0,0,0,0.5)
        </div>
        <div class="shadow-sample" style="box-shadow: inset 0 0 15px 5px #3b82f6; background: white; color: black;">
            inset 0 0 15px 5px blue
        </div>
    </div>
    <pre><code>/* Inner shadow */
.box {
    box-shadow: inset 2px 2px 5px rgba(0,0,0,0.3);
}</code></pre>

    <h2>✨ Animated Box Shadow</h2>
    <div class="demo-box">
        <div class="shadow-sample animated-shadow" style="background: coral;">
            Hover? Actually, I animate: box-shadow changes every 3 seconds.
        </div>
    </div>
    <pre><code>@keyframes mymove {
    50% { box-shadow: 10px 20px 30px blue; }
}
.element {
    animation: mymove 5s infinite;
}</code></pre>

    <div class="note">
        💡 <strong>Pro Tips:</strong><br>
        – Use <code>box-shadow</code> with <code>transition</code> for smooth hover effects.<br>
        – Multiple shadows can create neon effects, 3D borders, and intricate designs.<br>
        – The <code>inset</code> keyword creates an inner shadow, giving a pressed or embedded look.<br>
        – Always consider performance: large blur radii can be heavy on rendering.
    </div>

    <footer>
        CSS Box Shadow – offsets, blur, spread, color, inset, multiple shadows, and animation
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Text-shadow",
              name: "CSS Text-shadow",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
    }
    .text-sample {
        font-size: 2rem;
        font-weight: bold;
        margin: 20px 0;
        padding: 10px;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Text-shadow</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>text-shadow</code> property adds shadow effects to text. It accepts a comma‑separated list of shadows. Syntax: <code>text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit;</code>
    </div>

    <h2>📌 Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
            <tr style="background:#2962ff; color:white;">
                <th>Value</th>
                <th>Description</th>
             </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>h-shadow</code> (required)</td>
                <td>Horizontal shadow position. Negative values are allowed (moves shadow left).</td>
            </tr>
            <tr>
                <td><code>v-shadow</code> (required)</td>
                <td>Vertical shadow position. Negative values are allowed (moves shadow up).</td>
            </tr>
            <tr>
                <td><code>blur-radius</code> (optional)</td>
                <td>Blur radius. Default is 0 (sharp shadow). Higher values = more blur.</td>
            </tr>
            <tr>
                <td><code>color</code> (optional)</td>
                <td>Shadow color (hex, rgb, named color, etc.). Default depends on browser.</td>
            </tr>
            <tr>
                <td><code>none</code></td>
                <td>No shadow (default).</td>
            </tr>
            <tr>
                <td><code>initial</code></td>
                <td>Sets to default value (<code>none</code>).</td>
            </tr>
            <tr>
                <td><code>inherit</code></td>
                <td>Inherits shadow from parent element.</td>
            </tr>
        </tbody>
    </table>

    <h2>📖 Example 1: Simple Shadow</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-shadow: 3px 3px red;">
            Simple Shadow
        </div>
        <pre><code>text-shadow: 3px 3px red;</code></pre>
    </div>

    <h2>📖 Example 2: Fuzzy Shadow (with blur)</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-shadow: 3px 3px 3px violet;">
            Fuzzy Shadow
        </div>
        <pre><code>text-shadow: 3px 3px 3px violet;</code></pre>
    </div>

    <h2>📖 Example 3: Multiple Shadows</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-shadow: -3px -3px 3px blue, 3px 3px 3px red;">
            Multiple Shadows
        </div>
        <pre><code>text-shadow: -3px -3px 3px blue, 3px 3px 3px red;</code></pre>
    </div>

    <h2>📖 Example 4: Glow Effect</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-shadow: 0 0 10px cyan; background-color: black; color: white; border-radius: 8px;">
            Glow Effect
        </div>
        <pre><code>text-shadow: 0 0 10px cyan;
background-color: black;
color: white;</code></pre>
    </div>

    <h2>📖 Example 5: Neon Text Effect</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff; background-color: #111; color: white; border-radius: 8px;">
            Neon Effect
        </div>
        <pre><code>text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff;</code></pre>
    </div>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – Use negative <code>h-shadow</code> or <code>v-shadow</code> to move shadow left or up.<br>
        – Multiple shadows are separated by commas – they are applied front to back.<br>
        – Combine <code>text-shadow</code> with <code>background-color</code> for striking effects like neon or retro.<br>
        – Blur radius cannot be negative.
    </div>

    <footer>
        CSS Text-shadow – simple shadow, fuzzy shadow, multiple shadows, glow effect, neon effect
    </footer>
</div>

                  `
            },

            {
              id: "CSS-text-transform",
              name: "CSS text-transform",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
    }
    .text-sample {
        font-size: 1.5rem;
        margin: 10px 0;
        font-weight: 500;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Text-transform</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>text-transform</code> property controls the capitalization of text. It can make text all uppercase, all lowercase, or capitalize the first letter of each word. Syntax: <code>text-transform: capitalize | uppercase | lowercase | none | initial | inherit;</code>
    </div>

    <h2>📌 Property Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
            <tr style="background:#2962ff; color:white;">
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>capitalize</code></td>
                <td>Transforms the first character of each word to uppercase. The rest of the letters are not changed.</td>
            </tr>
            <tr>
                <td><code>uppercase</code></td>
                <td>Transforms all characters to uppercase.</td>
            </tr>
            <tr>
                <td><code>lowercase</code></td>
                <td>Transforms all characters to lowercase.</td>
            </tr>
            <tr>
                <td><code>none</code> (default)</td>
                <td>No capitalization – text appears exactly as written.</td>
            </tr>
            <tr>
                <td><code>initial</code></td>
                <td>Sets to default value (<code>none</code>).</td>
            </tr>
            <tr>
                <td><code>inherit</code></td>
                <td>Inherits the value from parent element.</td>
            </tr>
        </tbody>
    </table>

    <h2>📖 Example 1: text-transform: capitalize</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-transform: capitalize;">
            hello world
        </div>
        <div class="text-sample" style="text-transform: capitalize;">
            WELCOME to the javaTpoint
        </div>
        <pre><code>text-transform: capitalize;</code></pre>
    </div>

    <h2>📖 Example 2: text-transform: uppercase</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-transform: uppercase;">
            hello world
        </div>
        <div class="text-sample" style="text-transform: uppercase;">
            Welcome to the javaTpoint
        </div>
        <pre><code>text-transform: uppercase;</code></pre>
    </div>

    <h2>📖 Example 3: text-transform: lowercase</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-transform: lowercase;">
            HELLO WORLD
        </div>
        <div class="text-sample" style="text-transform: lowercase;">
            WELCOME TO THE JAVATPOINT
        </div>
        <pre><code>text-transform: lowercase;</code></pre>
    </div>

    <h2>📖 Example 4: text-transform: none (default)</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-transform: none;">
            Hello World
        </div>
        <div class="text-sample" style="text-transform: none;">
            Welcome to javaTpoint.
        </div>
        <pre><code>text-transform: none;</code></pre>
    </div>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – <code>capitalize</code> only affects the first letter of each word; numbers and special characters do not trigger capitalization.<br>
        – This property does not change the original content in the HTML – it only changes how it is displayed.<br>
        – Useful for creating consistent heading styles, especially when content comes from user input.
    </div>

    <footer>
        CSS Text-transform – capitalize, uppercase, lowercase, none
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Outline",
              name: "CSS Outline",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
        align-items: center;
    }
    .outline-sample {
        background-color: #eee;
        border: 3px solid lightgreen;
        padding: 10px 20px;
        margin: 8px;
        text-align: center;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Outline</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>outline</code> property draws a line around an element, outside the border, to make it stand out. Unlike <code>border</code>, outline does not affect the element's dimensions or layout. It is often used for focus indicators, highlighting elements, or visual emphasis.
    </div>

    <h2>📌 Basic Example: Outline vs Border</h2>
    <div class="demo-box">
        <div class="outline-sample" style="outline: 3px solid red;">
            Welcome to JavaTpoint
        </div>
        <div style="background:#eee; border:3px solid lightgreen; padding:10px 20px; margin:8px;">
            Border only (no outline)
        </div>
    </div>
    <pre><code>.box {
    background-color: #eee;
    outline: 3px solid red;
    border: 3px solid lightgreen;
    padding: 5px 10px;
}</code></pre>

    <h2>🔍 Difference Between Border and Outline</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#2962ff; color:white;"><th>Border</th><th>Outline</th></tr></thead>
        <tbody>
            <tr><td>Part of element dimensions – affects total width/height</td><td>Does not affect dimensions – drawn outside the border</td></tr>
            <tr><td>Can have different widths/styles/colors per side</td><td>Same style for all sides – cannot be set individually</td></tr>
            <tr><td>Takes up space in layout</td><td>Does not take layout space – overlays adjacent elements</td></tr>
        </tbody>
    </table>

    <h2>🖌️ Outline Shorthand & Individual Properties</h2>
    <p>The <code>outline</code> shorthand combines <code>outline-width</code>, <code>outline-style</code>, and <code>outline-color</code>.</p>
    <div class="demo-box">
        <div class="outline-sample" style="outline-width: 3px; outline-style: solid; outline-color: red;">
            Outline using individual properties
        </div>
    </div>
    <pre><code>outline-width: 3px;
outline-style: solid;
outline-color: red;</code></pre>

    <h2>🎨 Outline Styles – Examples</h2>
    <div class="demo-box">
        <div class="outline-sample" style="outline: 4px dashed red;">dashed</div>
        <div class="outline-sample" style="outline: 4px dotted red;">dotted</div>
        <div class="outline-sample" style="outline: 4px double red;">double</div>
        <div class="outline-sample" style="outline: 4px groove red;">groove</div>
        <div class="outline-sample" style="outline: 4px inset red;">inset</div>
        <div class="outline-sample" style="outline: 4px outset red;">outset</div>
        <div class="outline-sample" style="outline: 4px ridge red;">ridge</div>
        <div class="outline-sample" style="outline: 4px solid red;">solid</div>
    </div>
    <pre><code>/* Possible outline-style values */
outline-style: dashed | dotted | double | groove | inset | outset | ridge | solid;</code></pre>

    <h2>📏 Outline Offset – Create Space Between Border and Outline</h2>
    <p>The <code>outline-offset</code> property adds transparent space between the border and the outline.</p>
    <div class="demo-box">
        <div class="outline-sample" style="outline: 3px solid red; outline-offset: 6px;">
            outline-offset: 6px
        </div>
        <div class="outline-sample" style="outline: 3px solid red; outline-offset: 12px;">
            outline-offset: 12px
        </div>
    </div>
    <pre><code>.box {
    outline: 3px solid red;
    outline-offset: 6px;
    border: 3px solid lightgreen;
}</code></pre>
    <div class="note">
        💡 <strong>Note:</strong> The offset area is transparent and shows the parent element's background.
    </div>

    <div class="note">
        💡 <strong>Practical uses of outline:</strong><br>
        – Focus indicators for keyboard navigation (common: <code>outline: 2px solid blue;</code> on <code>:focus</code>).<br>
        – Highlighting invalid form fields (red outline).<br>
        – Creating a second border without affecting layout.
    </div>

    <footer>
        CSS Outline – outline vs border, shorthand, styles, outline-offset
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Visibility",
              name: "CSS Visibility",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
    }
    .visibility-sample {
        margin: 10px 0;
        padding: 10px;
        background: #e0f2fe;
        border: 1px solid #0284c7;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fee2e2;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #dc2626;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    button {
        background-color: #2962ff;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        margin: 10px 0;
    }
    button:hover {
        background-color: #1e4a8a;
    }
    #myDIV {
        margin: 10px auto;
        width: 300px;
        height: 100px;
        background-color: lightpink;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .compare-box {
        display: inline-block;
        width: 150px;
        height: 60px;
        background: #cbd5e1;
        margin: 10px;
        text-align: center;
        line-height: 60px;
    }
</style>

<div class="container">
    <h1>CSS Visibility</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>visibility</code> property specifies whether an element is visible or not. <strong>Important:</strong> An invisible element still occupies space on the page. To completely remove an element from layout, use <code>display: none</code> instead.
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>visibility: visible | hidden | collapse | initial | inherit;</code></pre>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
            <tr style="background:#2962ff; color:white;">
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>visible</code> (default)</td>
                <td>Element is visible.</td>
            </tr>
            <tr>
                <td><code>hidden</code></td>
                <td>Element is invisible but still takes up space.</td>
            </tr>
            <tr>
                <td><code>collapse</code></td>
                <td>For table rows/columns – removes them but preserves layout. For other elements, same as <code>hidden</code>.</td>
            </tr>
            <tr>
                <td><code>initial</code></td>
                <td>Sets to default (<code>visible</code>).</td>
            </tr>
            <tr>
                <td><code>inherit</code></td>
                <td>Inherits value from parent.</td>
            </tr>
        </tbody>
    </table>

    <h2>📖 Example: visible vs hidden</h2>
    <div class="demo-box">
        <div class="visibility-sample" style="visibility: visible;">
            <strong>visibility: visible</strong> – I am visible.
        </div>
        <div class="visibility-sample" style="visibility: hidden;">
            <strong>visibility: hidden</strong> – I am invisible, but I still take up space (notice the gap).
        </div>
    </div>
    <pre><code>h1.visible { visibility: visible; }
h1.hidden { visibility: hidden; }</code></pre>

    <div class="warning">
        ⚠️ Note: The hidden element still occupies space on the page, leaving an empty gap.
    </div>

    <h2>🔍 Visibility vs Display: none</h2>
    <div class="demo-box">
        <div style="background: #e2e8f0; padding: 10px;">
            <span class="compare-box" style="visibility: hidden;">visibility: hidden<br>(space taken)</span>
            <span class="compare-box" style="display: none;">display: none<br>(no space)</span>
            <span class="compare-box" style="visibility: visible;">visible (reference)</span>
        </div>
        <p>The first box is <code>visibility: hidden</code> – space is reserved. The second box is <code>display: none</code> – no space reserved.</p>
    </div>
    <pre><code>.hidden-vis { visibility: hidden; }  /* space occupied */
.hidden-display { display: none; }     /* no space occupied */</code></pre>

    <h2>🧪 JavaScript Example: Toggle Visibility</h2>
    <div class="demo-box">
        <p>Click the button to hide the pink div using JavaScript.</p>
        <button onclick="myFunction()">Hide Div</button>
        <div id="myDIV">This is my DIV element.</div>
        <p><strong>Note:</strong> Even when hidden, the div still takes up space (notice the layout shift).</p>
    </div>
    <pre><code>function myFunction() {
    document.getElementById("myDIV").style.visibility = "hidden";
}</code></pre>

    <h2>📊 Table collapse value (for table rows)</h2>
    <div class="demo-box">
        <table style="width:100%; border-collapse: collapse; background: white;">
            <thead><tr style="background:#2962ff; color:white;"><th>Name</th><th>City</th></tr></thead>
            <tbody>
                <tr><td>John</td><td>New York</td></tr>
                <tr style="visibility: collapse;"><td>Hidden Row</td><td>(collapse)</td></tr>
                <tr><td>Jane</td><td>London</td></tr>
            </tbody>
        </table>
        <p>The second row uses <code>visibility: collapse</code> – it is hidden but the table layout remains stable.</p>
    </div>
    <pre><code>tr.hidden-row {
    visibility: collapse;
}</code></pre>

    <div class="note">
        💡 <strong>When to use visibility: hidden vs display: none?</strong><br>
        – Use <code>visibility: hidden</code> when you want to hide an element but keep its space (e.g., placeholder, maintain layout).<br>
        – Use <code>display: none</code> when you want to completely remove the element from layout.<br>
        – Use <code>visibility: collapse</code> for table rows/columns you want to hide without breaking table structure.
    </div>

    <footer>
        CSS Visibility – visible, hidden, collapse, vs display: none, JavaScript example
    </footer>
</div>

<script>
    function myFunction() {
        var div = document.getElementById("myDIV");
        if (div) {
            div.style.visibility = "hidden";
        }
    }
</script>

                  `
            },

            {
              id: "CSS-Counters",
              name: "CSS Counters",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    /* Counter demo styles */
    .counter-example body {
        counter-reset: section;
    }
    .counter-example h2::before {
        counter-increment: section;
        content: "Section " counter(section) ": ";
    }
    .nesting-demo body {
        counter-reset: section;
    }
    .nesting-demo h1 {
        counter-reset: subsection;
    }
    .nesting-demo h1::before {
        counter-increment: section;
        content: "Section " counter(section) ". ";
    }
    .nesting-demo h2::before {
        counter-increment: subsection;
        content: counter(section) "." counter(subsection) " ";
    }
    .outline-demo ol {
        counter-reset: section;
        list-style-type: none;
    }
    .outline-demo li::before {
        counter-increment: section;
        content: counters(section, ".") " ";
    }
</style>

<div class="container">
    <h1>CSS Counters</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS counters are like variables – they can be incremented by CSS rules to automatically number elements. They are useful for generating numbered headings, lists, or section numbering without relying on HTML markup.
    </div>

    <h2>📌 CSS Counter Properties</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
            <tr style="background:#2962ff; color:white;">
                <th>Property</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr><td><code>counter-reset</code></td><td>Creates or resets a counter.</td></tr>
            <tr><td><code>counter-increment</code></td><td>Increments the counter value.</td></tr>
            <tr><td><code>content</code></td><td>Inserts generated content (together with <code>::before</code> or <code>::after</code>).</td></tr>
            <tr><td><code>counter()</code> or <code>counters()</code></td><td>Adds the counter value to an element.</td></tr>
        </tbody>
    </table>
    <div class="note">🔔 Before using a counter, you must create/reset it with <code>counter-reset</code>.</div>

    <h2>📖 Example 1: Basic Counter for Headings</h2>
    <div class="demo-box">
        <style>
            .basic-counter-demo {
                counter-reset: section;
            }
            .basic-counter-demo h2::before {
                counter-increment: section;
                content: "Section " counter(section) ": ";
                color: #2962ff;
            }
        </style>
        <div class="basic-counter-demo">
            <h2>Java Tutorial</h2>
            <h2>HTML Tutorial</h2>
            <h2>CSS Tutorial</h2>
            <h2>Oracle Tutorial</h2>
        </div>
        <pre><code>body {
    counter-reset: section;
}
h2::before {
    counter-increment: section;
    content: "Section " counter(section) ": ";
}</code></pre>
    </div>

    <h2>📖 Example 2: Nested Counters (Section and Subsection)</h2>
    <div class="demo-box">
        <style>
            .nested-counter-demo {
                counter-reset: section;
            }
            .nested-counter-demo h1 {
                counter-reset: subsection;
            }
            .nested-counter-demo h1::before {
                counter-increment: section;
                content: "Section " counter(section) ". ";
                color: #2962ff;
            }
            .nested-counter-demo h2::before {
                counter-increment: subsection;
                content: counter(section) "." counter(subsection) " ";
                color: #059669;
            }
        </style>
        <div class="nested-counter-demo">
            <h1>Java tutorials:</h1>
            <h2>Core Java tutorial</h2>
            <h2>Servlet tutorial</h2>
            <h2>JSP tutorial</h2>
            <h2>Spring tutorial</h2>
            <h2>Hibernate tutorial</h2>

            <h1>Web technology tutorials:</h1>
            <h2>HTML tutorial</h2>
            <h2>CSS tutorial</h2>
            <h2>jQuery tutorial</h2>
            <h2>Bootstrap tutorial</h2>

            <h1>Database tutorials:</h1>
            <h2>SQL tutorial</h2>
            <h2>MySQL tutorial</h2>
            <h2>PL/SQL tutorial</h2>
            <h2>Oracle tutorial</h2>
        </div>
        <pre><code>body {
    counter-reset: section;
}
h1 {
    counter-reset: subsection;
}
h1::before {
    counter-increment: section;
    content: "Section " counter(section) ". ";
}
h2::before {
    counter-increment: subsection;
    content: counter(section) "." counter(subsection) " ";
}</code></pre>
    </div>

    <h2>📖 Example 3: Nested Outlines (Multi-level Lists)</h2>
    <div class="demo-box">
        <style>
            .outline-counter-demo ol {
                counter-reset: section;
                list-style-type: none;
            }
            .outline-counter-demo li::before {
                counter-increment: section;
                content: counters(section, ".") " ";
                font-weight: bold;
                color: #dc2626;
            }
        </style>
        <div class="outline-counter-demo">
            <ol>
                <li>item</li>
                <li>item
                    <ol>
                        <li>item</li>
                        <li>item</li>
                        <li>item
                            <ol>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ol>
                        </li>
                        <li>item</li>
                    </ol>
                </li>
                <li>item</li>
                <li>item</li>
            </ol>
        </div>
        <pre><code>ol {
    counter-reset: section;
    list-style-type: none;
}
li::before {
    counter-increment: section;
    content: counters(section, ".") " ";
}</code></pre>
    </div>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – Use <code>counter-reset</code> to initialize a counter (default value 0).<br>
        – Use <code>counter-increment</code> to increase the counter by 1 (or custom step).<br>
        – Use <code>content</code> with <code>::before</code> or <code>::after</code> pseudo-elements to display the counter.<br>
        – The <code>counters()</code> function is used for nested counters, with a separator string (like "dot").<br>
        – CSS counters are very useful for automatically numbering headings, sections, and creating outlines without adding extra HTML or JavaScript.
    </div>

    <footer>
        CSS Counters – counter-reset, counter-increment, content, counter(), counters(), nesting
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Clearfix",
              name: "CSS Clearfix",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    /* Demo specific styles */
    .float-container {
        border: 3px solid red;
        padding: 5px;
        background-color: pink;
        margin: 10px 0;
    }
    .float-container img {
        float: right;
        border: 2px solid blue;
        margin: 0 0 8px 12px;
        width: 100px;
    }
    .clearfix::after {
        content: "";
        display: table;
        clear: both;
    }
    .overflow-clear {
        overflow: auto;
    }
    .two-col-demo {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    .two-col-demo header, .two-col-demo nav, .two-col-demo main, .two-col-demo aside, .two-col-demo footer {
        padding: 10px;
        margin: 10px;
        border: 1px solid #ccc;
    }
    .two-col-demo nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .two-col-demo nav li {
        display: inline;
        margin-right: 10px;
    }
    .two-col-demo .container-cf::after {
        content: "";
        display: table;
        clear: both;
    }
    .two-col-demo main {
        float: left;
        width: 70%;
        box-sizing: border-box;
    }
    .two-col-demo aside {
        float: right;
        width: 28%;
        box-sizing: border-box;
    }
    .two-col-demo footer {
        clear: both;
        text-align: center;
    }
</style>

<div class="container">
    <h1>CSS Clearfix</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <strong>clearfix</strong> is a CSS technique that prevents container collapse when it contains floated child elements. Floated elements are removed from the normal document flow, which can cause the parent container to collapse to zero height. Clearfix forces the container to expand and contain its floated children.
    </div>

    <h2>📌 Syntax (Modern Clearfix)</h2>
    <pre><code>.clearfix::after {
    content: "";
    display: table;
    clear: both;
}</code></pre>

    <h2>🧪 Why Use Clearfix?</h2>
    <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
        <li><strong>Prevents container collapse</strong> – parent expands to wrap floated children.</li>
        <li><strong>Contains floats</strong> – keeps all floated elements inside the container.</li>
        <li><strong>Restores document flow</strong> – avoids overlapping and layout issues.</li>
        <li><strong>Cross‑browser compatibility</strong> – works reliably across all modern browsers.</li>
    </ul>

    <h2>📖 Example 1: Without Clearfix (Container Collapse)</h2>
    <div class="demo-box">
        <div class="float-container">
            <img src="https://picsum.photos/id/104/100/80" alt="sample">
            Welcome to javaTpoint.com. Here, you can find the best tutorials that are easy to read and help you to clear your concepts.
        </div>
        <p style="background: #fee2e2; padding: 8px;">⚠️ The container border collapses around the image because it's floated and not cleared.</p>
    </div>

    <h2>📖 Example 2: With Clearfix (using ::after pseudo-element)</h2>
    <div class="demo-box">
        <div class="float-container clearfix">
            <img src="https://picsum.photos/id/104/100/80" alt="sample">
            Welcome to javaTpoint.com. Here, you can find the best tutorials that are easy to read and help you to clear your concepts.
        </div>
        <p style="background: #e6f7ec; padding: 8px;">✅ Now the container expands to contain the floated image – clearfix applied.</p>
    </div>
    <pre><code>.clearfix::after {
    content: "";
    display: table;
    clear: both;
}</code></pre>

    <h2>📖 Example 3: Clearfix using overflow: auto</h2>
    <div class="demo-box">
        <div class="float-container" style="overflow: auto;">
            <img src="https://picsum.photos/id/104/100/80" alt="sample">
            Welcome to javaTpoint.com. Here, you can find the best tutorials that are easy to read and help you to clear your concepts.
        </div>
        <p>Using <code>overflow: auto</code> on the container also clears floats, but may cause unwanted scrollbars.</p>
    </div>
    <pre><code>.container {
    overflow: auto;
}</code></pre>

    <h2>📖 Example 4: Two-Column Layout with Clearfix</h2>
    <div class="demo-box">
        <div class="two-col-demo">
            <div style="background:#f0f0f0; padding:1px;">
                <header style="background:#fff;"><h3>Header</h3></header>
                <nav style="background:#fff;">
                    <ul><li>Home</li><li>About</li><li>Services</li><li>Contact</li></ul>
                </nav>
                <div class="container-cf" style="background:#fff;">
                    <main><h3>Main Content</h3><p>This is the main content area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></main>
                    <aside><h3>Sidebar</h3><p>This is the sidebar.</p></aside>
                </div>
                <footer style="background:#fff;"><p>© 2023 Example Company</p></footer>
            </div>
        </div>
        <pre><code>.container::after {
    content: "";
    display: table;
    clear: both;
}
main { float: left; width: 70%; }
aside { float: right; width: 28%; }
footer { clear: both; }</code></pre>
    </div>

    <div class="note">
        💡 <strong>Important:</strong> Modern layout techniques like Flexbox and Grid have reduced the need for clearfix. However, clearfix remains useful when working with legacy code or when you specifically need float-based layouts.
    </div>

    <footer>
        CSS Clearfix – ::after pseudo-element, overflow: auto, two‑column layout, preventing collapse
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Icons",
              name: "CSS Icons",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.4rem;
        margin: 1.5rem 0 0.8rem 0;
        color: #1e4a5f;
        display: inline-block;
        background: #f1f5f9;
        padding: 0.2rem 1rem;
        border-radius: 40px;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .icon-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin: 20px 0;
    }
    .icon-card {
        text-align: center;
        min-width: 100px;
        padding: 10px;
        background: #fff;
        border-radius: 12px;
        transition: transform 0.2s;
    }
    .icon-card i, .icon-card .material-icons {
        font-size: 36px;
        margin-bottom: 8px;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    /* custom icon styling */
    .fa-custom, .glyphicon-custom, .material-icons-custom {
        margin: 0 8px;
        transition: all 0.2s;
    }
    .fa-custom:hover, .glyphicon-custom:hover, .material-icons-custom:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
</style>

<!-- External icon libraries (required) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<div class="container">
    <h1>CSS Icons</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        CSS icons allow you to add scalable vector icons to your web pages using popular icon libraries. You can customize their size, color, shadow, and even add hover effects. The three most common libraries are <strong>Font Awesome</strong>, <strong>Google Icons (Material Icons)</strong>, and <strong>Bootstrap Icons (Glyphicons)</strong>.
    </div>

    <h2>📌 Method 1: Font Awesome Icons</h2>
    <p>Include the Font Awesome CDN and use the <code>&lt;i class="fa fa-icon-name"&gt;&lt;/i&gt;</code> syntax.</p>
    <div class="demo-box">
        <div class="icon-grid">
            <div class="icon-card"><i class="fa fa-cloud fa-custom" style="font-size:32px; color:#007bff;"></i><div>cloud</div></div>
            <div class="icon-card"><i class="fa fa-heart fa-custom" style="font-size:32px; color:#dc143c;"></i><div>heart</div></div>
            <div class="icon-card"><i class="fa fa-file fa-custom" style="font-size:32px; color:#28a745;"></i><div>file</div></div>
            <div class="icon-card"><i class="fa fa-car fa-custom" style="font-size:32px; color:#ffc107;"></i><div>car</div></div>
            <div class="icon-card"><i class="fa fa-globe fa-custom" style="font-size:32px; color:#17a2b8;"></i><div>globe</div></div>
            <div class="icon-card"><i class="fa fa-sun fa-custom" style="font-size:32px; color:#fd7e14;"></i><div>sun</div></div>
            <div class="icon-card"><i class="fa fa-moon fa-custom" style="font-size:32px; color:#6f42c1;"></i><div>moon</div></div>
        </div>
        <pre><code>&lt;i class="fa fa-cloud" style="font-size: 32px; color: #007bff;"&gt;&lt;/i&gt;
&lt;i class="fa fa-heart" style="font-size: 32px; color: #dc143c;"&gt;&lt;/i&gt;</code></pre>
    </div>

    <h2>📌 Method 2: Google Icons (Material Icons)</h2>
    <p>Include Google Fonts Material Icons link and use <code>&lt;i class="material-icons"&gt;icon_name&lt;/i&gt;</code>.</p>
    <div class="demo-box">
        <div class="icon-grid">
            <div class="icon-card"><i class="material-icons material-icons-custom" style="font-size:36px; color:#0d6efd;">cloud</i><div>cloud</div></div>
            <div class="icon-card"><i class="material-icons material-icons-custom" style="font-size:36px; color:#dc3545;">favorite</i><div>favorite</div></div>
            <div class="icon-card"><i class="material-icons material-icons-custom" style="font-size:36px; color:#198754;">attachment</i><div>attachment</div></div>
            <div class="icon-card"><i class="material-icons material-icons-custom" style="font-size:36px; color:#ffc107;">computer</i><div>computer</div></div>
            <div class="icon-card"><i class="material-icons material-icons-custom" style="font-size:36px; color:#fd7e14;">home</i><div>home</div></div>
            <div class="icon-card"><i class="material-icons material-icons-custom" style="font-size:36px; color:#20c997;">flight</i><div>flight</div></div>
            <div class="icon-card"><i class="material-icons material-icons-custom" style="font-size:36px; color:#6f42c1;">local_cafe</i><div>cafe</div></div>
        </div>
        <pre><code>&lt;i class="material-icons" style="font-size: 36px; color: #0d6efd;"&gt;cloud&lt;/i&gt;
&lt;i class="material-icons"&gt;favorite&lt;/i&gt;</code></pre>
    </div>

    <h2>📌 Method 3: Bootstrap Icons (Glyphicons)</h2>
    <p>Include Bootstrap CSS and use <code>&lt;i class="glyphicon glyphicon-icon-name"&gt;&lt;/i&gt;</code>.</p>
    <div class="demo-box">
        <div class="icon-grid">
            <div class="icon-card"><i class="glyphicon glyphicon-cloud glyphicon-custom" style="font-size:32px; color:#0d6efd;"></i><div>cloud</div></div>
            <div class="icon-card"><i class="glyphicon glyphicon-user glyphicon-custom" style="font-size:32px; color:#198754;"></i><div>user</div></div>
            <div class="icon-card"><i class="glyphicon glyphicon-thumbs-up glyphicon-custom" style="font-size:32px; color:#0d6efd;"></i><div>thumbs-up</div></div>
            <div class="icon-card"><i class="glyphicon glyphicon-envelope glyphicon-custom" style="font-size:32px; color:#dc3545;"></i><div>envelope</div></div>
            <div class="icon-card"><i class="glyphicon glyphicon-star glyphicon-custom" style="font-size:32px; color:#ffc107;"></i><div>star</div></div>
            <div class="icon-card"><i class="glyphicon glyphicon-heart glyphicon-custom" style="font-size:32px; color:#dc143c;"></i><div>heart</div></div>
            <div class="icon-card"><i class="glyphicon glyphicon-plane glyphicon-custom" style="font-size:32px; color:#17a2b8;"></i><div>plane</div></div>
        </div>
        <pre><code>&lt;i class="glyphicon glyphicon-cloud" style="font-size: 32px; color: #0d6efd;"&gt;&lt;/i&gt;
&lt;i class="glyphicon glyphicon-user"&gt;&lt;/i&gt;</code></pre>
    </div>

    <h2>🎨 Customizing Icons with CSS</h2>
    <p>You can easily change size, color, add shadows, or hover effects. Here are a few examples:</p>
    <div class="demo-box">
        <div class="icon-grid">
            <div class="icon-card"><i class="fa fa-heart" style="font-size: 24px; color: red;"></i><div>red 24px</div></div>
            <div class="icon-card"><i class="fa fa-heart" style="font-size: 36px; color: blue;"></i><div>blue 36px</div></div>
            <div class="icon-card"><i class="fa fa-heart" style="font-size: 48px; color: green;"></i><div>green 48px</div></div>
            <div class="icon-card"><i class="fa fa-heart" style="font-size: 36px; color: purple; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);"></i><div>shadow</div></div>
            <div class="icon-card"><i class="fa fa-heart" style="font-size: 36px; color: orange; transition: 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"></i><div>hover scale</div></div>
        </div>
    </div>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – Always include the icon library CDN in your HTML (as shown above).<br>
        – You can combine multiple icons on the same page.<br>
        – Use CSS to control size, color, margin, and transitions for interactivity.<br>
        – For Bootstrap 5, use Bootstrap Icons instead of Glyphicons (different CDN). The examples above use Bootstrap 3 Glyphicons for compatibility with your tutorial.
    </div>

    <footer>
        CSS Icons – Font Awesome, Google Material Icons, Bootstrap Glyphicons – usage and customization
    </footer>
</div>

                  `
            },

            {
              id: "CSS-Justify-Content",
              name: "CSS Justify-Content",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .flex-container {
        display: flex;
        border: 2px solid #1e293b;
        background: #e0f2fe;
        margin: 15px 0;
        padding: 8px;
        gap: 6px;
    }
    .flex-item {
        width: 100px;
        height: 80px;
        background: linear-gradient(135deg, #3b82f6, #1e3a8a);
        border: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        border-radius: 8px;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Justify-Content Property</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>justify-content</code> property aligns flex items along the main axis (horizontally by default). It distributes extra space in a flex container. Values: <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>, <code>initial</code>, <code>inherit</code>.
    </div>

    <h2>📌 Property Values</h2>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
            <tr style="background:#2962ff; color:white;">
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>flex-start</code> (default)</td>
                <td>Items align at the start of the container.</td>
            </tr>
            <tr>
                <td><code>flex-end</code></td>
                <td>Items align at the end of the container.</td>
            </tr>
            <tr>
                <td><code>center</code></td>
                <td>Items align at the center of the container.</td>
            </tr>
            <tr>
                <td><code>space-between</code></td>
                <td>Equal space between items; first item at start, last at end.</td>
            </tr>
            <tr>
                <td><code>space-around</code></td>
                <td>Equal space around each item (left and right margins are equal).</td>
            </tr>
            <tr>
                <td><code>space-evenly</code></td>
                <td>Equal space between, before, and after each item.</td>
            </tr>
            <tr>
                <td><code>initial</code></td>
                <td>Sets to default (<code>flex-start</code>).</td>
            </tr>
            <tr>
                <td><code>inherit</code></td>
                <td>Inherits value from parent.</td>
            </tr>
        </tbody>
    </table>

    <h2>📖 Examples</h2>

    <div class="demo-box">
        <strong>1. justify-content: flex-start</strong>
        <div class="flex-container" style="justify-content: flex-start;">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>

        <strong>2. justify-content: flex-end</strong>
        <div class="flex-container" style="justify-content: flex-end;">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>

        <strong>3. justify-content: center</strong>
        <div class="flex-container" style="justify-content: center;">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>

        <strong>4. justify-content: space-between</strong>
        <div class="flex-container" style="justify-content: space-between;">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>

        <strong>5. justify-content: space-around</strong>
        <div class="flex-container" style="justify-content: space-around;">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>

        <strong>6. justify-content: space-evenly</strong>
        <div class="flex-container" style="justify-content: space-evenly;">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>

        <strong>7. justify-content: initial (same as flex-start)</strong>
        <div class="flex-container" style="justify-content: initial;">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>

        <strong>8. justify-content: inherit (inherits from parent)</strong>
        <div style="justify-content: space-around; display: flex;">
            <div class="flex-container" style="justify-content: inherit; width: 100%;">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
            </div>
        </div>
    </div>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – Works only on flex containers (<code>display: flex</code>).<br>
        – Does not affect the vertical axis – use <code>align-items</code> for vertical alignment.<br>
        – If flex items have <code>flex-grow: 1</code>, extra space is absorbed and <code>justify-content</code> may have no visible effect.
    </div>

    <footer>
        CSS Justify-Content – flex-start, flex-end, center, space-between, space-around, space-evenly, initial, inherit
    </footer>
</div>

                  `
            },
            {
              id: "CSS-Text-Decoration",
              name: "CSS Text Decoration",
              description:  String.raw `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .text-sample {
        font-size: 1.3rem;
        margin: 12px 0;
        padding: 8px;
        background: #fff;
        border-radius: 6px;
    }
    .nav-demo {
        background: #f1f5f9;
        padding: 10px;
        border-radius: 8px;
        margin: 15px 0;
    }
    .nav-demo a {
        margin: 0 10px;
        font-size: 1.2rem;
        text-decoration: underline;
    }
    .nav-demo a:hover {
        color: red;
        text-decoration: none;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Text Decoration</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>text-decoration</code> property adds decorative lines to text – underline, overline, line-through – or removes them. It is widely used for hyperlinks, emphasis, or striking out content.
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>text-decoration: none | underline | overline | line-through | blink | initial | inherit;</code></pre>
    <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
            <tr style="background:#2962ff; color:white;">
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>none</code> (default)</td>
                <td>Removes all text decorations. Normal text display.</td>
            </tr>
            <tr>
                <td><code>underline</code></td>
                <td>Adds a line below the text. Commonly used for hyperlinks.</td>
            </tr>
            <tr>
                <td><code>overline</code></td>
                <td>Adds a line above the text.</td>
            </tr>
            <tr>
                <td><code>line-through</code></td>
                <td>Adds a line through the middle of the text (strikethrough).</td>
            </tr>
            <tr>
                <td><code>blink</code></td>
                <td>Makes the text blink. Not recommended, poor browser support and accessibility.</td>
            </tr>
            <tr>
                <td><code>initial</code></td>
                <td>Sets to default value (none).</td>
            </tr>
            <tr>
                <td><code>inherit</code></td>
                <td>Inherits the value from parent element.</td>
            </tr>
        </tbody>
    </table>

    <h2>📖 Example 1: Basic Text Decorations</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-decoration: underline;">Underline Example</div>
        <div class="text-sample" style="text-decoration: overline;">Overline Example</div>
        <div class="text-sample" style="text-decoration: line-through;">Line-through Example</div>
        <div class="text-sample" style="text-decoration: underline overline;">Underline + Overline Combined</div>
        <div class="text-sample" style="text-decoration: none;">No Decoration (none)</div>
    </div>

    <h2>📖 Example 2: Navigation Links with Hover Effect</h2>
    <div class="demo-box">
        <div class="nav-demo">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </div>
        <p>Links have underline by default; on hover, underline disappears and color turns red.</p>
        <pre><code>nav a {
    text-decoration: underline;
}
nav a:hover {
    color: red;
    text-decoration: none;
}</code></pre>
    </div>

    <h2>📖 Example 3: Advanced Styling (color, style, thickness)</h2>
    <div class="demo-box">
        <div class="text-sample" style="text-decoration: underline; text-decoration-color: red;">Red Underline</div>
        <div class="text-sample" style="text-decoration: underline; text-decoration-style: wavy; text-decoration-color: blue;">Wavy Blue Underline</div>
        <div class="text-sample" style="text-decoration: line-through; text-decoration-thickness: 3px;">Thick Strikethrough</div>
        <div class="text-sample" style="text-decoration: underline overline; text-decoration-color: green; text-decoration-style: double;">Double Line Green</div>
    </div>

    <div class="note">
        💡 <strong>Important notes:</strong><br>
        – Use <code>text-decoration</code> for links to improve usability (underlines help users identify clickable content).<br>
        – Avoid overusing text-decoration on non-link text as it may confuse users.<br>
        – The <code>blink</code> value is outdated and not recommended.<br>
        – Modern CSS allows fine control using <code>text-decoration-color</code>, <code>text-decoration-style</code>, and <code>text-decoration-thickness</code>.
    </div>

    <footer>
        CSS Text Decoration – none, underline, overline, line-through, and advanced styling
    </footer>
</div>

                  `
            },
            {
              id: "CSS-List-Styles",
              name: "CSS List Styles",
              description:  String.raw `

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .demo-box ul, .demo-box ol {
        margin-left: 1.5rem;
        padding: 0.5rem 0;
    }
    .demo-box li {
        margin: 0.3rem 0;
    }
    .list-sample {
        background: white;
        padding: 0.8rem;
        border-radius: 8px;
        margin: 0.5rem 0;
    }
    .two-columns {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
    }
    .col {
        flex: 1;
        min-width: 200px;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
    }
    td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    tr:last-child td {
        border-bottom: none;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .inline-list-demo {
        background: #f1f5f9;
        padding: 12px;
        border-radius: 8px;
    }
    .inline-list-demo ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 1.5rem;
        justify-content: center;
    }
    .inline-list-demo li {
        background: #2962ff;
        color: white;
        padding: 0.4rem 1rem;
        border-radius: 30px;
    }
</style>

<div class="container">
    <h1>CSS List Styles</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>list-style</code> properties in CSS control the appearance of ordered (<code>&lt;ol&gt;</code>) and unordered (<code>&lt;ul&gt;</code>) lists. You can change markers (bullets/numbers), position them inside/outside, use custom images, or remove them entirely — giving you full control over list presentation.
    </div>

    <h2>📌 List Properties Overview</h2>
    <table>
        <thead>
            <tr><th>Property</th><th>Description</th></tr>
        </thead>
        <tbody>
            <tr><td><code>list-style-type</code></td><td>Sets the marker (bullet, number, roman, etc.) for list items.</td></tr>
            <tr><td><code>list-style-position</code></td><td>Defines whether the marker appears inside or outside the item's content flow.</td></tr>
            <tr><td><code>list-style-image</code></td><td>Uses a custom image as the marker instead of a symbol.</td></tr>
            <tr><td><code>list-style</code></td><td>Shorthand to set type, position, and image in one declaration.</td></tr>
        </tbody>
    </table>

    <div class="note">
        💡 <strong>Important:</strong> By default, <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> have left padding and margin. To remove spacing, use <code>padding: 0; margin: 0;</code> on the list container.
    </div>

    <h2>🎯 1. list-style-type Values</h2>
    <p>Change the marker style for unordered lists (bullets) or ordered lists (numbering system).</p>

    <div class="two-columns">
        <div class="col">
            <div class="demo-box">
                <strong>🔘 Unordered (bullets)</strong>
                <div class="list-sample"><code>disc</code> (default): <ul style="list-style-type: disc;"><li>Apples</li><li>Bananas</li></ul></div>
                <div class="list-sample"><code>circle</code>: <ul style="list-style-type: circle;"><li>Apples</li><li>Bananas</li></ul></div>
                <div class="list-sample"><code>square</code>: <ul style="list-style-type: square;"><li>Apples</li><li>Bananas</li></ul></div>
                <div class="list-sample"><code>none</code> (no marker): <ul style="list-style-type: none; padding-left: 0;"><li>Apples</li><li>Bananas</li></ul></div>
            </div>
        </div>
        <div class="col">
            <div class="demo-box">
                <strong>🔢 Ordered (numbers/letters)</strong>
                <div class="list-sample"><code>decimal</code> (1,2,3): <ol style="list-style-type: decimal;"><li>First</li><li>Second</li></ol></div>
                <div class="list-sample"><code>lower-alpha</code> (a,b,c): <ol style="list-style-type: lower-alpha;"><li>First</li><li>Second</li></ol></div>
                <div class="list-sample"><code>upper-roman</code> (I,II,III): <ol style="list-style-type: upper-roman;"><li>First</li><li>Second</li></ol></div>
                <div class="list-sample"><code>lower-roman</code> (i,ii,iii): <ol style="list-style-type: lower-roman;"><li>First</li><li>Second</li></ol></div>
            </div>
        </div>
    </div>

    <h3>📋 More list-style-type Options</h3>
    <table>
        <thead><tr><th>Value</th><th>Example Output</th><th>List Type</th></tr></thead>
        <tbody>
            <tr><td><code>decimal-leading-zero</code></td><td>01, 02, 03</td><td>Ordered</td></tr>
            <tr><td><code>lower-greek</code></td><td>α, β, γ</td><td>Ordered</td></tr>
            <tr><td><code>upper-alpha</code></td><td>A, B, C</td><td>Ordered</td></tr>
            <tr><td><code>disc</code></td><td>• filled circle</td><td>Unordered</td></tr>
        </tbody>
    </table>

    <h2>📍 2. list-style-position (inside vs outside)</h2>
    <p>Controls if the marker appears <strong>inside</strong> the content block (text wraps under marker) or <strong>outside</strong> (marker sits separate, default).</p>

    <div class="two-columns">
        <div class="col">
            <div class="demo-box">
                <code>list-style-position: outside</code> (default)
                <ul style="list-style-position: outside; border: 1px dashed #aaa; padding-left: 1.5rem;">
                    <li>This is a long text item to demonstrate how outside positioning works. The marker stays to the left.</li>
                    <li>Second item</li>
                </ul>
            </div>
        </div>
        <div class="col">
            <div class="demo-box">
                <code>list-style-position: inside</code>
                <ul style="list-style-position: inside; border: 1px dashed #aaa; padding-left: 0;">
                    <li>This is a long text item with inside positioning. The marker is part of the content and text wraps under it.</li>
                    <li>Second item</li>
                </ul>
            </div>
        </div>
    </div>

    <pre><code>/* CSS Example */
ul {
    list-style-position: inside;   /* marker inside content flow */
    list-style-type: square;
}

ol {
    list-style-position: outside;  /* default, marker outside */
}</code></pre>

    <h2>🖼️ 3. list-style-image (custom marker)</h2>
    <p>Replace the standard marker with a custom image using <code>list-style-image: url('path/to/image.png')</code>.</p>
    <div class="demo-box">
        <ul style="list-style-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'%232962ff\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'6\'/%3E%3C/svg%3E');">
            <li>Custom blue dot marker</li>
            <li>Using SVG data URI</li>
            <li>No external image needed</li>
        </ul>
        <p class="note" style="margin-top: 8px;">⚠️ If the image fails to load, the <code>list-style-type</code> fallback is used.</p>
    </div>

    <h2>✍️ 4. Shorthand: list-style</h2>
    <p>Combine <code>list-style-type</code>, <code>list-style-position</code>, and <code>list-style-image</code> in one line.</p>
    <pre><code>/* Syntax */
list-style: &lt;type&gt; || &lt;position&gt; || &lt;image&gt;;

/* Examples */
ul {
    list-style: square inside;
}

ol {
    list-style: upper-roman outside;
}

/* With custom image + type fallback */
ul {
    list-style: circle inside url('star.png');
}</code></pre>

    <div class="demo-box">
        <strong>Shorthand in action:</strong>
        <ul style="list-style: square inside;">
            <li>Square marker + inside position</li>
            <li>Second item — note the text alignment</li>
        </ul>
        <ol style="list-style: lower-alpha outside;">
            <li>Lower-alpha with outside position</li>
            <li>Second ordered item</li>
        </ol>
    </div>

    <h2>🎨 5. Styling Lists with Colors & Backgrounds</h2>
    <p>Lists can be customized beyond markers — add background, padding, borders, and even style individual items.</p>

    <div class="demo-box">
        <div class="two-columns">
            <div class="col">
                <strong>Styled unordered list</strong>
                <ul style="background: #eef2ff; padding: 1rem 1rem 1rem 2rem; border-radius: 16px; list-style-type: circle;">
                    <li style="background: white; margin: 8px 0; padding: 6px 12px; border-radius: 20px;">Interactive item 1</li>
                    <li style="background: white; margin: 8px 0; padding: 6px 12px; border-radius: 20px;">Interactive item 2</li>
                </ul>
            </div>
            <div class="col">
                <strong>Ordered list with custom background</strong>
                <ol style="background: #1e2a3a; color: white; padding: 1rem 1rem 1rem 2rem; border-radius: 16px; list-style-type: decimal;">
                    <li style="margin: 5px 0;">Dark theme list</li>
                    <li style="margin: 5px 0;">Readable numbers</li>
                </ol>
            </div>
        </div>
        <pre><code>/* Styling the entire list container */
.custom-list {
    background: #eef2ff;
    padding: 1rem;
    border-radius: 16px;
    list-style: square inside;
}
.custom-list li {
    background: white;
    margin: 8px 0;
    padding: 8px 12px;
    border-radius: 30px;
}</code></pre>
    </div>

    <h2>✨ Real-world Example: Navigation Menu (Removing List Styles)</h2>
    <p>Horizontal menus often remove default list styling completely and use flexbox.</p>
    <div class="inline-list-demo">
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <p style="text-align: center; margin-top: 8px;">✔️ <code>list-style: none;</code> + flex layout creates clean nav bars.</p>
    </div>
    <pre><code>nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1.5rem;
}
nav li {
    background: #2962ff;
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
}</code></pre>

    <div class="note">
        💡 <strong>Pro Tips:</strong><br>
        – Use <code>list-style: none</code> when building custom navigation or icon-based lists.<br>
        – The <code>::marker</code> pseudo-element allows advanced styling of markers separately (color, font-size).<br>
        – For accessibility, avoid removing markers completely unless you provide alternative visual cues.<br>
        – Default browser padding on <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> is typically <code>padding-left: 40px</code>. Reset to 0 if needed.
    </div>

    <footer>
        CSS List Styles — complete control over markers, positioning, and visual design for ordered & unordered lists.
    </footer>
</div>

                  `
            },
            {
  id: "CSS-nth-child-Selector",
  name: "CSS :nth-child(n) Selector",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .demo-row {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin: 1rem 0;
    }
    .demo-col {
        flex: 1;
        min-width: 200px;
        background: white;
        border-radius: 12px;
        padding: 0.8rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .styled-list, .styled-table {
        width: 100%;
        border-collapse: collapse;
    }
    .styled-list li, .styled-table td, .styled-table th {
        padding: 8px 12px;
        transition: background 0.2s;
    }
    .styled-table {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        overflow: hidden;
    }
    .styled-table th {
        background: #eef2ff;
        text-align: left;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
    }
    td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    tr:last-child td {
        border-bottom: none;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .highlight-demo p, .highlight-demo li, .highlight-demo tr {
        transition: all 0.2s;
    }
</style>

<div class="container">
    <h1>CSS :nth-child(n) Selector</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>:nth-child(n)</code> pseudo-class matches elements based on their position among siblings — regardless of element type. It’s perfect for zebra-striping tables, styling every third card, or targeting specific items in a list. The parameter <code>n</code> can be a number, keyword (<code>odd</code>/<code>even</code>), or formula like <code>3n+1</code>.
    </div>

    <h2>📌 Syntax & Parameter Patterns</h2>
    <pre><code>selector:nth-child(argument) {
    /* CSS properties */
}</code></pre>

    <table>
        <thead>
            <tr><th>Argument</th><th>Description</th><th>Matches positions</th></tr>
        </thead>
        <tbody>
            <tr><td><code>2</code></td><td>A specific number</td><td>Only the 2nd child</td></tr>
            <tr><td><code>odd</code></td><td>Odd positions</td><td>1, 3, 5, 7, …</td></tr>
            <tr><td><code>even</code></td><td>Even positions</td><td>2, 4, 6, 8, …</td></tr>
            <tr><td><code>3n</code></td><td>Multiples of 3</td><td>3, 6, 9, …</td></tr>
            <tr><td><code>3n+1</code></td><td>Formula (An+B)</td><td>1, 4, 7, 10, …</td></tr>
            <tr><td><code>n+3</code></td><td>From the 3rd onward</td><td>3, 4, 5, …</td></tr>
            <tr><td><code>-n+3</code></td><td>First 3 items</td><td>1, 2, 3</td></tr>
        </tbody>
    </table>

    <div class="note">
        💡 <strong>Important:</strong> <code>:nth-child</code> counts <strong>all</strong> sibling elements, not just the same type. For type‑specific matching, use <code>:nth-of-type()</code>.
    </div>

    <h2>🎨 Example 1: Using <code>odd</code> & <code>even</code></h2>
    <div class="demo-box">
        <p><strong>Paragraphs with alternating backgrounds:</strong></p>
        <div style="background:white; border-radius:8px;">
            <p style="padding:6px; margin:2px 0; background:#fff3e0;">Paragraph 1 (odd)</p>
            <p style="padding:6px; margin:2px 0; background:#e0f7fa;">Paragraph 2 (even)</p>
            <p style="padding:6px; margin:2px 0; background:#fff3e0;">Paragraph 3 (odd)</p>
            <p style="padding:6px; margin:2px 0; background:#e0f7fa;">Paragraph 4 (even)</p>
            <p style="padding:6px; margin:2px 0; background:#fff3e0;">Paragraph 5 (odd)</p>
        </div>
        <pre><code>/* CSS used above */
p:nth-child(odd) {
    background: #fff3e0;
}
p:nth-child(even) {
    background: #e0f7fa;
}</code></pre>
    </div>

    <h2>🧮 Example 2: Functional Notation <code>An+B</code></h2>
    <div class="demo-row">
        <div class="demo-col">
            <strong><code>3n+4</code> (starts at 4, then every 3rd)</strong>
            <ul style="margin-top:8px; list-style:none; padding-left:0;">
                <li style="background:#f1f5f9; margin:4px 0; padding:5px;">Item 1</li>
                <li style="background:#f1f5f9; margin:4px 0; padding:5px;">Item 2</li>
                <li style="background:#f1f5f9; margin:4px 0; padding:5px;">Item 3</li>
                <li style="background:#fdd835; margin:4px 0; padding:5px;">Item 4 ← (3×0+4)</li>
                <li style="background:#f1f5f9; margin:4px 0; padding:5px;">Item 5</li>
                <li style="background:#f1f5f9; margin:4px 0; padding:5px;">Item 6</li>
                <li style="background:#fdd835; margin:4px 0; padding:5px;">Item 7 ← (3×1+4)</li>
            </ul>
            <pre style="margin-top:5px;"><code>li:nth-child(3n+4) {
  background: #fdd835;
}</code></pre>
        </div>
        <div class="demo-col">
            <strong><code>2n+1</code> (same as odd)</strong>
            <ol style="margin-top:8px;">
                <li style="background:#c8e6c9;">Coffee</li>
                <li>Tea</li>
                <li style="background:#c8e6c9;">Milk</li>
                <li>Soda</li>
                <li style="background:#c8e6c9;">Juice</li>
            </ol>
        </div>
    </div>

    <h2>📊 Example 3: Zebra Striping a Table</h2>
    <div class="demo-box">
        <table class="styled-table" style="width:100%">
            <thead><tr><th>Student</th><th>Score</th></tr></thead>
            <tbody>
                <tr style="background:#ffffff;"><td>Alice</td><td>92</td></tr>
                <tr style="background:#f1f5f9;"><td>Bob</td><td>85</td></tr>
                <tr style="background:#ffffff;"><td>Charlie</td><td>78</td></tr>
                <tr style="background:#f1f5f9;"><td>Diana</td><td>94</td></tr>
                <tr style="background:#ffffff;"><td>Ethan</td><td>88</td></tr>
            </tbody>
        </table>
        <pre><code>/* Even rows get a light gray background */
tr:nth-child(even) {
    background-color: #f1f5f9;
}</code></pre>
    </div>

    <h2>🎯 Example 4: Targeting First & Last Ranges</h2>
    <div class="demo-row">
        <div class="demo-col">
            <strong><code>-n+3</code> (first 3 items)</strong>
            <ul style="margin-top:6px;">
                <li style="background:#ffe0b2;">Top sale</li>
                <li style="background:#ffe0b2;">Second sale</li>
                <li style="background:#ffe0b2;">Third sale</li>
                <li>Fourth item</li>
                <li>Fifth item</li>
            </ul>
        </div>
        <div class="demo-col">
            <strong><code>n+4</code> (items from 4th onward)</strong>
            <ol style="margin-top:6px;">
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                <li style="background:#bbdefb;">Step 4</li>
                <li style="background:#bbdefb;">Step 5</li>
            </ol>
        </div>
    </div>

    <h2>🔄 :nth-child vs :nth-of-type</h2>
    <div class="demo-box">
        <div class="demo-row">
            <div class="demo-col">
                <strong><code>:nth-child(2)</code> (any type, 2nd child overall)</strong>
                <div style="border:1px solid #ccc; padding:5px; margin-top:6px;">
                    <p>Paragraph A</p>
                    <div>Div B ← 2nd child (div)</div>
                    <p>Paragraph C</p>
                </div>
            </div>
            <div class="demo-col">
                <strong><code>:nth-of-type(2)</code> (2nd paragraph only)</strong>
                <div style="border:1px solid #ccc; padding:5px; margin-top:6px;">
                    <p>Paragraph A (1st p)</p>
                    <div>Div B</div>
                    <p style="background:#d1c4e9;">Paragraph C (2nd p) ← targeted</p>
                </div>
            </div>
        </div>
        <pre><code>/* nth-child(2) selects the second child regardless of tag */
/* nth-of-type(2) selects the second occurrence of a specific tag */</code></pre>
    </div>

    <div class="note">
        💡 <strong>Real‑world use cases:</strong><br>
        – Stripe table rows for readability (<code>tr:nth-child(even)</code>).<br>
        – Style every 3rd product card in a grid (<code>.product:nth-child(3n)</code>).<br>
        – Highlight first 5 comments (<code>.comment:nth-child(-n+5)</code>).<br>
        – Create alternating button colors in a toolbar.
    </div>

    <div class="warning note">
        ⚠️ <strong>Common pitfall:</strong> If there are other element types mixed in, <code>:nth-child</code> might skip what you expect. Use browser DevTools to inspect the exact sibling index. For same‑type only, prefer <code>:nth-of-type</code>.
    </div>

    <footer>
        CSS :nth-child(n) — powerful positional selection for lists, tables, cards, and any repeating pattern.
    </footer>
</div>
  `
},
           {
  id: "CSS-Sticky-Position",
  name: "CSS Sticky Positioning",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .scroll-demo {
        background: #fff;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        height: 300px;
        overflow-y: auto;
        padding: 1rem;
        position: relative;
        margin: 0.5rem 0;
    }
    .sticky-element {
        position: sticky;
        background: #bbdefb;
        padding: 10px;
        font-weight: bold;
        border: 1px solid #1976d2;
        border-radius: 8px;
        margin: 10px 0;
        z-index: 10;
    }
    .sticky-nav {
        position: sticky;
        top: 0;
        background: #ffab91;
        padding: 10px;
        display: flex;
        gap: 20px;
        border-radius: 8px;
        margin-bottom: 10px;
    }
    .sticky-nav a {
        text-decoration: none;
        color: #3e2723;
        font-weight: bold;
    }
    .sidebar-demo {
        display: flex;
        gap: 20px;
    }
    .sticky-sidebar {
        position: sticky;
        top: 20px;
        width: 180px;
        background: #ffe0b2;
        padding: 15px;
        border-radius: 12px;
        align-self: flex-start;
    }
    .main-content-area {
        flex: 1;
        padding-bottom: 200px;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
    }
    td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    tr:last-child td {
        border-bottom: none;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .inline-demo p {
        margin: 8px 0;
    }
</style>

<div class="container">
    <h1>CSS Sticky Positioning</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>position: sticky;</code> value toggles an element between <code>relative</code> and <code>fixed</code> based on the user’s scroll position. It behaves like a relatively positioned element until a specified threshold (e.g., <code>top: 0</code>) is reached, then it “sticks” in place like <code>position: fixed</code>. Perfect for sticky headers, sidebars, and table headers.
    </div>

    <h2>📌 Syntax & Behavior</h2>
    <pre><code>selector {
    position: sticky;
    top: 0;       /* required threshold – can be top, right, bottom, or left */
}</code></pre>
    <p>The element sticks relative to its parent container. The threshold (<code>top</code>, <code>right</code>, <code>bottom</code>, or <code>left</code>) defines the distance from the viewport edge where the element becomes fixed.</p>

    <table>
        <thead><tr><th>Property</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>top: 0</code></td><td>Sticks to the top when scrolled past.</td></tr>
            <tr><td><code>bottom: 20px</code></td><td>Sticks to the bottom 20px above viewport edge.</td></tr>
            <tr><td><code>left: 10px</code></td><td>Sticks from the left side (horizontal scroll).</td></tr>
        </tbody>
    </table>

    <div class="note">
        💡 <strong>Important:</strong> A sticky element will not leave its parent container. Once the parent scrolls out of view, the sticky element moves with it. Also, the parent must have a height that allows scrolling.
    </div>

    <h2>📖 Example 1: Basic Sticky Element</h2>
    <div class="demo-box">
        <p>Scroll inside the box below – the blue bar will stick to the top after you scroll past it.</p>
        <div class="scroll-demo">
            <div style="height: 50px;">Scroll down →</div>
            <div class="sticky-element" style="top: 0;">🔹 Sticky Element (sticks to top)</div>
            <div style="height: 400px; background: #f9f9f9; margin-top: 10px;">Content continues below…</div>
        </div>
        <pre><code>.sticky-box {
    position: sticky;
    top: 0;
    background: #bbdefb;
}</code></pre>
    </div>

    <h2>📖 Example 2: Sticky Navigation Bar</h2>
    <div class="demo-box">
        <div class="scroll-demo" style="height: 280px;">
            <div class="sticky-nav">
                <a href="#">🏠 Home</a>
                <a href="#">📖 About</a>
                <a href="#">💼 Services</a>
                <a href="#">📞 Contact</a>
            </div>
            <div style="height: 400px;">
                <p>Scroll to see the navbar stick to the top of this container.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <p>More content to enable scrolling…</p>
            </div>
        </div>
        <pre><code>.sticky-nav {
    position: sticky;
    top: 0;
    background: #ffab91;
    padding: 10px;
}</code></pre>
    </div>

    <h2>📖 Example 3: Sticky Headings Inside Scroll Area</h2>
    <div class="demo-box">
        <div class="scroll-demo" style="height: 320px;">
            <h3 class="sticky-element" style="top: 0; background: #a5d6a7;">Section A</h3>
            <p>Content for section A. Scroll further to see the next heading stick.</p>
            <div style="height: 180px;"></div>
            <h3 class="sticky-element" style="top: 0; background: #a5d6a7;">Section B</h3>
            <p>Content for section B. Each heading sticks when it reaches the top.</p>
            <div style="height: 180px;"></div>
            <h3 class="sticky-element" style="top: 0; background: #a5d6a7;">Section C</h3>
            <p>The last section. Notice how sticky elements remain inside their parent.</p>
            <div style="height: 100px;"></div>
        </div>
        <pre><code>h3 {
    position: sticky;
    top: 0;
    background: #a5d6a7;
}</code></pre>
    </div>

    <h2>📖 Example 4: Sticky Sidebar (Two‑Column Layout)</h2>
    <div class="demo-box">
        <div class="sidebar-demo">
            <div class="sticky-sidebar">
                <h4>Sticky Sidebar</h4>
                <ul style="margin-left: 1rem;">
                    <li>Link One</li>
                    <li>Link Two</li>
                    <li>Link Three</li>
                </ul>
                <p style="font-size: 0.8rem;">Sticks when scrolling down.</p>
            </div>
            <div class="main-content-area">
                <p>Main content area. Scroll vertically inside this container to see the sidebar stick.</p>
                <div style="height: 600px; background: #f1f8e9; padding: 10px;">Long content that triggers scroll…</div>
            </div>
        </div>
        <pre><code>.sticky-sidebar {
    position: sticky;
    top: 20px;        /* sticks 20px from top */
    align-self: flex-start;  /* needed in flex container */
}</code></pre>
        <div class="note" style="margin-top: 8px;">⚠️ In a flex parent, use <code>align-self: flex-start</code> to ensure the sticky sidebar doesn't stretch and break the stickiness.</div>
    </div>

    <h2>🌐 Browser Compatibility</h2>
    <table>
        <thead><tr><th>Browser</th><th>Supported Version</th></tr></thead>
        <tbody>
            <tr><td>Chrome</td><td>56+</td></tr>
            <tr><td>Firefox</td><td>32+</td></tr>
            <tr><td>Safari</td><td>13+ (partial in earlier)</td></tr>
            <tr><td>Edge</td><td>79+ (Chromium)</td></tr>
            <tr><td>Opera</td><td>43+</td></tr>
            <tr><td>Internet Explorer</td><td>Not supported</td></tr>
        </tbody>
    </table>

    <div class="warning note">
        🧪 <strong>Testing notes:</strong> Sticky works inside an overflow <code>auto</code> or <code>scroll</code> container. The parent cannot have <code>overflow: hidden</code> or <code>overflow: clip</code> (it will break stickiness). Also, a sticky element requires a <code>top</code>, <code>bottom</code>, <code>left</code>, or <code>right</code> threshold to be defined.
    </div>

    <div class="note">
        💡 <strong>Practical use cases:</strong><br>
        – Sticky table headers (<code>&lt;thead&gt;</code> with <code>position: sticky; top: 0;</code>).<br>
        – Persistent “Back to top” buttons.<br>
        – Section headings in long articles / documentation.<br>
        – Shopping cart summary sidebar on product listing pages.
    </div>

    <footer>
        CSS position: sticky — hybrid relative/fixed positioning for modern web layouts.
    </footer>
</div>
  `
},
           {
  id: "CSS-background-clip",
  name: "CSS background-clip",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .clip-demo {
        background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
        text-align: center;
        padding: 1.5rem;
        border: 5px dashed #2962ff;
        margin: 1rem 0;
        font-weight: bold;
        font-size: 1.2rem;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin: 1rem 0;
    }
    .col {
        flex: 1;
        min-width: 200px;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .col h4 {
        background: #eef2ff;
        padding: 0.5rem;
        margin: 0;
        text-align: center;
    }
    .sample {
        padding: 20px;
        border: 8px dotted #aaa;
        margin: 12px;
        background: #c8e6c9;
        text-align: center;
        font-weight: bold;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
    }
    td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    tr:last-child td {
        border-bottom: none;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .text-gradient {
        background: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-size: 2rem;
        font-weight: bold;
    }
</style>

<div class="container">
    <h1>CSS background-clip</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>background-clip</code> property defines how far the background (color or image) extends within an element. It lets you clip the background to the border box, padding box, or content box – perfect for creating interesting visual effects, like text with gradient backgrounds that are clipped to the letters.
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>background-clip: border-box | padding-box | content-box | text;</code></pre>
    <table>
        <thead>
            <tr><th>Value</th><th>Description</th></tr>
        </thead>
        <tbody>
            <tr><td><code>border-box</code> (default)</td><td>Background extends under the border (fills the entire element including border area).</td></tr>
            <tr><td><code>padding-box</code></td><td>Background is clipped to the padding area (no background under border).</td></tr>
            <tr><td><code>content-box</code></td><td>Background is clipped to the content area only (excludes padding and border).</td></tr>
            <tr><td><code>text</code></td><td>Background is clipped to the foreground text (only works with <code>-webkit-background-clip: text</code> in most browsers).</td></tr>
        </tbody>
    </table>

    <div class="note">
        💡 <strong>Note:</strong> The <code>text</code> value is experimental but widely supported with the <code>-webkit-</code> prefix. It makes the background appear only where text is present.
    </div>

    <h2>📖 Example 1: border-box (default)</h2>
    <div class="demo-box">
        <div class="clip-demo" style="background-clip: border-box; background: #ffecb3; border: 5px dashed #ffa000;">
            background-clip: border-box<br>
            Background fills entire element, including under the dashed border.
        </div>
        <pre><code>.element {
    background: #ffecb3;
    border: 5px dashed #ffa000;
    background-clip: border-box; /* default */
}</code></pre>
    </div>

    <h2>📖 Example 2: padding-box</h2>
    <div class="demo-box">
        <div class="clip-demo" style="background-clip: padding-box; background: #b2dfdb; border: 5px dotted #00796b; padding: 1rem;">
            background-clip: padding-box<br>
            Background stops at the padding edge – no color under the dotted border.
        </div>
        <pre><code>.element {
    background: #b2dfdb;
    border: 5px dotted #00796b;
    background-clip: padding-box;
}</code></pre>
    </div>

    <h2>📖 Example 3: content-box</h2>
    <div class="demo-box">
        <div class="clip-demo" style="background-clip: content-box; background: #f8bbd0; border: 5px solid #c2185b; padding: 20px;">
            background-clip: content-box<br>
            Background only fills the content area (text area), not the padding or border.
        </div>
        <pre><code>.element {
    background: #f8bbd0;
    padding: 20px;
    border: 5px solid #c2185b;
    background-clip: content-box;
}</code></pre>
    </div>

    <h2>✨ Example 4: text (Gradient Text Effect)</h2>
    <div class="demo-box">
        <div style="text-align: center;">
            <h1 class="text-gradient" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); background-clip: text; -webkit-background-clip: text; color: transparent;">
                Gradient Text Effect
            </h1>
            <p>Using <code>background-clip: text</code> with a gradient background.</p>
        </div>
        <pre><code>.gradient-text {
    background: linear-gradient(135deg, #667eea, #764ba2);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}</code></pre>
        <div class="note">⚠️ <code>background-clip: text</code> is non-standard but widely supported with the <code>-webkit-</code> prefix. Use <code>color: transparent</code> to make the text fill show the background.</div>
    </div>

    <h2>📊 Comparison Table (Visual)</h2>
    <div class="row">
        <div class="col">
            <h4>border-box</h4>
            <div style="background-color: #90caf9; padding: 12px; border: 6px solid #1565c0; margin: 8px; background-clip: border-box; text-align: center;">
                Background fills entire box (under border)
            </div>
        </div>
        <div class="col">
            <h4>padding-box</h4>
            <div style="background-color: #a5d6a7; padding: 12px; border: 6px solid #2e7d32; margin: 8px; background-clip: padding-box; text-align: center;">
                No background under border
            </div>
        </div>
        <div class="col">
            <h4>content-box</h4>
            <div style="background-color: #ffcc80; padding: 12px; border: 6px solid #e65100; margin: 8px; background-clip: content-box; text-align: center;">
                Background only behind text
            </div>
        </div>
    </div>

    <h2>🌐 Browser Compatibility</h2>
    <table>
        <thead><tr><th>Property</th><th>Chrome</th><th>Firefox</th><th>Safari</th><th>Edge</th></tr></thead>
        <tbody>
            <tr><td><code>background-clip</code> (border/padding/content)</td><td>4+</td><td>4+</td><td>5+</td><td>9+</td></tr>
            <tr><td><code>background-clip: text</code> (with -webkit-)</td><td>4+</td><td>49+ (with -webkit-)</td><td>5.1+</td><td>79+</td></tr>
        </tbody>
    </table>

    <div class="note">
        💡 <strong>Pro Tips:</strong><br>
        – Use <code>background-clip: padding-box</code> to prevent background from bleeding under transparent borders.<br>
        – Combine <code>background-clip: text</code> with animations for stunning typography effects.<br>
        – The property is often used with multiple backgrounds to create layered visual effects.<br>
        – Remember that <code>background-origin</code> determines the positioning area, while <code>background-clip</code> defines the painting area.
    </div>

    <footer>
        CSS background-clip — control the painting area of backgrounds for creative layouts and text effects.
    </footer>
</div>
  `
},
           {
  id: "CSS-Checkbox-Style",
  name: "CSS Checkbox Style",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .demo-row {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin: 1rem 0;
    }
    .demo-col {
        flex: 1;
        min-width: 200px;
        background: white;
        border-radius: 12px;
        padding: 0.8rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }

    /* Custom checkbox styles for demos */
    .custom-checkbox-demo {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 1rem;
        user-select: none;
    }
    .custom-checkbox-demo input {
        visibility: hidden;
        cursor: pointer;
        position: absolute;
        opacity: 0;
    }
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 22px;
        width: 22px;
        background-color: #ddd;
        border-radius: 4px;
        transition: 0.2s;
    }
    .custom-checkbox-demo:hover input ~ .checkmark {
        background-color: #bbb;
    }
    .custom-checkbox-demo input:checked ~ .checkmark {
        background-color: #2962ff;
    }
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    .custom-checkbox-demo input:checked ~ .checkmark:after {
        display: block;
    }
    .custom-checkbox-demo .checkmark:after {
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    /* Ripple effect checkbox */
    .ripple-checkbox {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
    }
    .ripple-checkbox input {
        visibility: hidden;
        position: absolute;
    }
    .ripple-mark {
        position: absolute;
        top: 0;
        left: 0;
        height: 22px;
        width: 22px;
        background-color: #ddd;
        border-radius: 50%;
        transition: 0.2s;
    }
    .ripple-checkbox:hover input ~ .ripple-mark {
        background-color: #aaa;
        transform: scale(1.1);
    }
    .ripple-checkbox input:checked ~ .ripple-mark {
        background-color: #2962ff;
        box-shadow: 0 0 5px #2962ff;
    }
    .ripple-mark:after {
        content: "";
        position: absolute;
        display: none;
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
    .ripple-checkbox input:checked ~ .ripple-mark:after {
        display: block;
    }

    /* Slider toggle */
    .slider-switch {
        display: inline-block;
        position: relative;
        width: 60px;
        height: 28px;
    }
    .slider-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider-round {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.3s;
        border-radius: 28px;
    }
    .slider-round:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.3s;
        border-radius: 50%;
    }
    input:checked + .slider-round {
        background-color: #2962ff;
    }
    input:checked + .slider-round:before {
        transform: translateX(32px);
    }

    /* Yes/No switch */
    .yesno-wrapper {
        display: inline-block;
        font-size: 1rem;
    }
    .yesno-label {
        display: inline-flex;
        align-items: center;
        background: #e2e8f0;
        border-radius: 40px;
        overflow: hidden;
        cursor: pointer;
    }
    .yesno-label span {
        padding: 6px 18px;
        transition: 0.2s;
        font-weight: bold;
    }
    .yesno-label .yes {
        background: transparent;
        color: #2d3748;
    }
    .yesno-label .no {
        background: transparent;
        color: #2d3748;
    }
    .yesno-wrapper input {
        display: none;
    }
    .yesno-wrapper input:checked + .yesno-label .yes {
        background: #2962ff;
        color: white;
    }
    .yesno-wrapper input:not(:checked) + .yesno-label .no {
        background: #e53e3e;
        color: white;
    }
</style>

<div class="container">
    <h1>CSS Checkbox Style</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        Default checkboxes look plain and similar across websites. With CSS, you can hide the native checkbox and create custom, attractive checkboxes using pseudo-elements (<code>::before</code>, <code>::after</code>), sibling combinators (<code>~</code>), and the <code>:checked</code> pseudo-class. This guide demonstrates modern, accessible checkbox styling techniques.
    </div>

    <h2>📌 Core Technique: Hide & Replace</h2>
    <p>The standard approach:</p>
    <pre><code>/* Hide default checkbox */
input[type="checkbox"] {
    visibility: hidden;
    position: absolute;
}

/* Create custom box with ::before or sibling span */
.custom-checkbox {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
}

/* Style the custom indicator */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background: #ddd;
}

/* Show checkmark when checked */
input:checked ~ .checkmark:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}</code></pre>

    <h2>📖 Example 1: Basic Custom Checkbox (Square + Tick)</h2>
    <div class="demo-box">
        <label class="custom-checkbox-demo">
            <input type="checkbox" checked>
            <span class="checkmark"></span>
            MCA (Master of Computer Applications)
        </label>
        <label class="custom-checkbox-demo">
            <input type="checkbox">
            <span class="checkmark"></span>
            BCA (Bachelor of Computer Applications)
        </label>
        <label class="custom-checkbox-demo">
            <input type="checkbox">
            <span class="checkmark"></span>
            12th Standard
        </label>
        <pre><code>/* CSS as shown above — hides native checkbox, creates custom square with tick mark */</code></pre>
    </div>

    <h2>📖 Example 2: Ripple Effect Checkbox (Circle + Hover Scale)</h2>
    <div class="demo-box">
        <label class="ripple-checkbox">
            <input type="checkbox">
            <span class="ripple-mark"></span>
            Chocolate Ice-cream
        </label>
        <label class="ripple-checkbox">
            <input type="checkbox" checked>
            <span class="ripple-mark"></span>
            Butterscotch Ice-cream
        </label>
        <label class="ripple-checkbox">
            <input type="checkbox" disabled>
            <span class="ripple-mark"></span>
            Mango Ice-cream (disabled)
        </label>
        <pre><code>.ripple-checkbox:hover .ripple-mark {
    transform: scale(1.1);
    background-color: #aaa;
}
.ripple-checkbox input:checked ~ .ripple-mark {
    background-color: #2962ff;
    box-shadow: 0 0 5px #2962ff;
}</code></pre>
    </div>

    <h2>📖 Example 3: Slider / Toggle Checkbox (iOS Style)</h2>
    <div class="demo-box">
        <label class="slider-switch">
            <input type="checkbox" id="toggleDemo">
            <span class="slider-round"></span>
        </label>
        <span style="margin-left: 15px;">Dark mode toggle (demo)</span>
        <pre><code>.slider-switch {
    width: 60px;
    height: 28px;
}
.slider-round:before {
    content: "";
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    transition: 0.3s;
}
input:checked + .slider-round {
    background: #2962ff;
}
input:checked + .slider-round:before {
    transform: translateX(32px);
}</code></pre>
    </div>

    <h2>📖 Example 4: Yes / No Switch Checkbox</h2>
    <div class="demo-box">
        <div class="yesno-wrapper">
            <input type="checkbox" id="yesnoSwitch">
            <label for="yesnoSwitch" class="yesno-label">
                <span class="yes">Yes</span>
                <span class="no">No</span>
            </label>
        </div>
        <p style="margin-top: 10px;">Click to toggle between Yes (blue) and No (red).</p>
        <pre><code>.yesno-label {
    display: inline-flex;
    background: #e2e8f0;
    border-radius: 40px;
    overflow: hidden;
}
input:checked + .yesno-label .yes {
    background: #2962ff;
    color: white;
}
input:not(:checked) + .yesno-label .no {
    background: #e53e3e;
    color: white;
}</code></pre>
    </div>

    <h2>📖 Example 5: Tick Inside Circle (Animated Check)</h2>
    <div class="demo-box">
        <style>
            .circle-check {
                display: inline-block;
                position: relative;
                cursor: pointer;
            }
            .circle-check input {
                display: none;
            }
            .circle {
                display: block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #ffc107;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                transition: 0.2s;
                position: relative;
            }
            .circle:before {
                content: "";
                position: absolute;
                top: 12px;
                left: 10px;
                width: 8px;
                height: 14px;
                border: solid white;
                border-width: 0 3px 3px 0;
                transform: rotate(45deg);
                opacity: 0;
                transition: 0.2s;
            }
            .circle-check input:checked + .circle {
                background: #2e7d32;
                transform: scale(0.95);
            }
            .circle-check input:checked + .circle:before {
                opacity: 1;
            }
            .circle-check:hover .circle {
                transform: scale(1.05);
            }
        </style>
        <label class="circle-check">
            <input type="checkbox" id="circleTick">
            <span class="circle"></span>
        </label>
        <span style="margin-left: 15px;">Click the circle → tick appears on check</span>
        <pre><code>/* Circle expands, turns green, shows tick using ::before */</code></pre>
    </div>

    <div class="note">
        💡 <strong>Key CSS techniques used:</strong><br>
        – <code>visibility: hidden</code> or <code>opacity: 0</code> + <code>position: absolute</code> to hide native checkbox while keeping it accessible.<br>
        – Adjacent sibling combinator (<code>~</code>) to style custom elements based on checkbox state.<br>
        – <code>:checked</code> pseudo-class to detect when checkbox is selected.<br>
        – <code>::before</code> and <code>::after</code> to create tick marks, circles, and sliders without extra HTML.<br>
        – Transitions (<code>transform</code>, <code>background</code>) for smooth hover and check effects.
    </div>

    <div class="warning note">
        🧪 <strong>Accessibility tip:</strong> Always keep the native checkbox semantically present (don’t use <code>display: none</code>). Use <code>visibility: hidden</code> or <code>opacity: 0</code> + <code>position: absolute</code> so that screen readers can still focus and announce the checkbox state. Also include proper <code>&lt;label&gt;</code> associations.
    </div>

    <h2>🌐 Browser Support</h2>
    <table>
        <thead><tr><th>Feature</th><th>Chrome</th><th>Firefox</th><th>Safari</th><th>Edge</th></tr></thead>
        <tbody>
            <tr><td><code>:checked</code></td><td>All</td><td>All</td><td>All</td><td>All</td></tr>
            <tr><td><code>::before/::after</code> on checkboxes</td><td>All</td><td>All</td><td>All</td><td>All</td></tr>
            <tr><td>Adjacent sibling (<code>~</code>)</td><td>All</td><td>All</td><td>All</td><td>All</td></tr>
        </tbody>
    </table>

    <footer>
        CSS Checkbox Style — replace boring default checkboxes with custom designs: square ticks, ripple circles, toggle sliders, yes/no switches, and animated icons.
    </footer>
</div>
  `
},
          {
  id: "CSS-letter-spacing",
  name: "CSS Letter Spacing",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .sample-text {
        background: white;
        padding: 0.5rem;
        margin: 0.75rem 0;
        border-radius: 8px;
        font-size: 1.2rem;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
    }
    td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    tr:last-child td {
        border-bottom: none;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS letter-spacing</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>letter-spacing</code> property controls the space between characters (letters) in text. You can increase or decrease the default spacing using length values (positive or negative). It improves readability, creates visual emphasis, or tightens text for specific designs.
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>letter-spacing: normal | length | initial | inherit;</code></pre>
    <table>
        <thead>
            <tr><th>Value</th><th>Description</th></tr>
        </thead>
        <tbody>
            <tr><td><code>normal</code> (default)</td><td>Default spacing between characters (no extra space). Equivalent to <code>0</code>.</td></tr>
            <tr><td><code>length</code> (e.g., 2px, 0.1em, -1px)</td><td>Adds extra spacing (positive) or reduces spacing (negative). Supports px, em, rem, etc.</td></tr>
            <tr><td><code>initial</code></td><td>Sets to <code>normal</code>.</td></tr>
            <tr><td><code>inherit</code></td><td>Inherits from parent element.</td></tr>
        </tbody>
    </table>

    <div class="note">
        💡 Negative values bring letters closer together (can cause overlap). Very large positive values spread letters apart, making them look like individual characters.
    </div>

    <h2>📖 Examples: Different letter-spacing Values</h2>
    <div class="demo-box">
        <div class="sample-text" style="letter-spacing: normal;">
            <strong>normal</strong> — The quick brown fox jumps over the lazy dog.
        </div>
        <div class="sample-text" style="letter-spacing: 2px;">
            <strong>2px</strong> — The quick brown fox jumps over the lazy dog.
        </div>
        <div class="sample-text" style="letter-spacing: 5px;">
            <strong>5px</strong> — The quick brown fox jumps over the lazy dog.
        </div>
        <div class="sample-text" style="letter-spacing: 0.1em;">
            <strong>0.1em</strong> — The quick brown fox jumps over the lazy dog.
        </div>
        <div class="sample-text" style="letter-spacing: -0.5px;">
            <strong>-0.5px</strong> — Tighter spacing: The quick brown fox jumps over the lazy dog.
        </div>
        <div class="sample-text" style="letter-spacing: -1px;">
            <strong>-1px</strong> — Very tight: The quick brown fox jumps over the lazy dog.
        </div>
    </div>

    <h2>📊 Comparison Table</h2>
    <table>
        <thead><tr><th>Value</th><th>Effect on "Hello World"</th></tr></thead>
        <tbody>
            <tr><td><code>normal</code></td><td style="letter-spacing: normal;">Hello World</td></tr>
            <tr><td><code>3px</code></td><td style="letter-spacing: 3px;">Hello World</td></tr>
            <tr><td><code>0.2em</code></td><td style="letter-spacing: 0.2em;">Hello World</td></tr>
            <tr><td><code>-0.8px</code></td><td style="letter-spacing: -0.8px;">Hello World</td></tr>
        </tbody>
    </table>

    <div class="warning note">
        ⚠️ <strong>Caution:</strong> Extremely high positive values (e.g., <code>10px</code> or more) break word recognition. Very negative values (e.g., <code>-3px</code>) can cause letters to overlap and become unreadable.
    </div>

    <h2>🎨 Practical Use Cases</h2>
    <div class="demo-box">
        <p><strong>Headings / Logos (spaced out for style):</strong></p>
        <h1 style="letter-spacing: 4px; font-weight: 300;">LUXURY BRAND</h1>
        
        <p><strong>Small caps / uppercase navigation (improved readability):</strong></p>
        <nav style="letter-spacing: 1.5px; text-transform: uppercase;">
            <a href="#" style="margin-right: 1rem;">Home</a>
            <a href="#" style="margin-right: 1rem;">Shop</a>
            <a href="#" style="margin-right: 1rem;">About</a>
        </nav>

        <p><strong>Tight spacing for headlines (modern look):</strong></p>
        <h2 style="letter-spacing: -0.5px; font-weight: 800;">MODERN TIGHT HEADLINE</h2>
    </div>

    <pre><code>/* Common patterns */
h1 {
    letter-spacing: 2px;   /* spaced-out headings */
}
nav a {
    letter-spacing: 0.5px; /* subtle improvement for uppercase links */
}
small {
    letter-spacing: -0.2px; /* slightly tighter for small text */
}</code></pre>

    <div class="note">
        💡 <strong>Pro tips:</strong><br>
        – Use relative units (<code>em</code>, <code>rem</code>) to keep spacing proportional to font size.<br>
        – For large text (headings), small positive spacing (1-2px) can improve readability.<br>
        – For body text, keep <code>letter-spacing</code> near normal to avoid fatigue.<br>
        – Combined with <code>text-transform: uppercase</code>, letter-spacing often looks more balanced.
    </div>

    <footer>
        CSS letter-spacing — fine control over character spacing for headings, logos, and body text.
    </footer>
</div>
  `
},
           {
  id: "CSS-Navigation-Bar",
  name: "CSS Navigation Bar",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1400px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .scroll-container {
        height: 300px;
        overflow-y: auto;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: white;
        margin: 0.5rem 0;
        position: relative;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
    }
    td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    tr:last-child td {
        border-bottom: none;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    /* demo navbar styles */
    .demo-navbar {
        background: #2c3e50;
        overflow: hidden;
        border-radius: 8px;
    }
    .demo-navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 12px 20px;
        text-decoration: none;
        font-weight: 500;
        transition: 0.2s;
    }
    .demo-navbar a:hover {
        background: #1abc9c;
        color: white;
    }
    .demo-navbar a.active {
        background: #e67e22;
    }
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
    .vertical-nav {
        width: 220px;
        background: #34495e;
        border-radius: 8px;
        overflow: hidden;
    }
    .vertical-nav a {
        display: block;
        color: white;
        padding: 12px 20px;
        text-decoration: none;
        border-bottom: 1px solid #2c3e50;
    }
    .vertical-nav a:hover {
        background: #1abc9c;
    }
    .vertical-nav a.active {
        background: #e67e22;
    }
    .dropdown-demo {
        list-style: none;
        margin: 0;
        padding: 0;
        background: #2c3e50;
        border-radius: 8px;
        display: flex;
    }
    .dropdown-demo li {
        position: relative;
    }
    .dropdown-demo li a, .dropbtn {
        display: block;
        color: white;
        padding: 12px 20px;
        text-decoration: none;
    }
    .dropdown-demo li a:hover, .dropdown:hover .dropbtn {
        background: #1abc9c;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
        z-index: 1;
        border-radius: 8px;
    }
    .dropdown-content a {
        color: #333;
        padding: 10px 16px;
        display: block;
        text-align: left;
    }
    .dropdown-content a:hover {
        background: #ddd;
        color: #000;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .fixed-nav-example {
        position: sticky;
        top: 0;
        z-index: 10;
    }
    .full-height-sidebar {
        display: flex;
        gap: 1rem;
    }
    .full-height-sidebar .sidebar {
        width: 200px;
        background: #2c3e50;
        border-radius: 12px;
        padding: 1rem 0;
        align-self: start;
        position: sticky;
        top: 20px;
    }
    .full-height-sidebar .sidebar a {
        display: block;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
    }
    .full-height-sidebar .sidebar a:hover {
        background: #1abc9c;
    }
    .full-height-sidebar .content {
        flex: 1;
        background: #f1f5f9;
        padding: 1rem;
        border-radius: 12px;
        height: 400px;
        overflow-y: auto;
    }
</style>

<div class="container">
    <h1>CSS Navigation Bar</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        A navigation bar (navbar) is a fundamental UI component that provides links to different sections or pages of a website. CSS allows you to style horizontal, vertical, fixed, sticky, and dropdown navigation bars with colors, hover effects, and responsive behavior — improving user experience and visual consistency.
    </div>

    <h2>📌 Key Concepts</h2>
    <table>
        <thead><tr><th>Technique</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>float: left</code> / <code>display: flex</code></td><td>Create horizontal navigation by aligning list items side by side.</td></tr>
            <tr><td><code>position: fixed</code></td><td>Navbar stays at the top or bottom while scrolling the page.</td></tr>
            <tr><td><code>position: sticky</code></td><td>Navbar toggles between relative and fixed based on scroll position.</td></tr>
            <tr><td><code>display: block</code></td><td>Make entire link area clickable; used in vertical navbars.</td></tr>
            <tr><td><code>:hover</code> + dropdown</td><td>Show sub‑menus when hovering over a parent item.</td></tr>
        </tbody>
    </table>

    <h2>📖 Example 1: Basic Horizontal Navigation Bar</h2>
    <div class="demo-box">
        <div class="demo-navbar clearfix">
            <a href="#" class="active">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        </div>
        <pre><code>.navbar {
    background: #2c3e50;
    overflow: hidden;
}
.navbar a {
    float: left;
    display: block;
    color: white;
    padding: 12px 20px;
    text-decoration: none;
}
.navbar a:hover { background: #1abc9c; }
.navbar a.active { background: #e67e22; }</code></pre>
    </div>

    <h2>📖 Example 2: Horizontal Navbar with Border Dividers</h2>
    <div class="demo-box">
        <div class="demo-navbar clearfix" style="background: #34495e;">
            <a href="#">Home</a>
            <a href="#">Java</a>
            <a href="#">HTML</a>
            <a href="#">CSS</a>
        </div>
        <pre><code>/* Add right border to all links except last */
.navbar a:not(:last-child) {
    border-right: 1px solid #1abc9c;
}</code></pre>
    </div>

    <h2>📖 Example 3: Fixed Navigation Bar (Sticks to Top)</h2>
    <div class="demo-box">
        <p>Scroll inside the box below → the navbar stays at the top of this container.</p>
        <div class="scroll-container">
            <div class="demo-navbar clearfix" style="position: sticky; top: 0; z-index: 5;">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Support</a>
            </div>
            <div style="height: 500px; padding: 1rem;">
                <p>Scroll down to see the sticky effect. The navigation remains visible at the top.</p>
                <p>More content to enable scrolling...</p>
            </div>
        </div>
        <pre><code>.fixed-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}
/* Use position: sticky inside a scroll container */</code></pre>
    </div>

    <h2>📖 Example 4: Sticky Navbar (Toggles Between Relative & Fixed)</h2>
    <div class="demo-box">
        <div class="scroll-container" style="height: 350px;">
            <div style="height: 80px; background: #ecf0f1; padding: 10px;">Scroll down — navbar will stick to top when it reaches the edge.</div>
            <div class="demo-navbar clearfix" style="position: sticky; top: 0; background: #e67e22;">
                <a href="#">Sticky Home</a>
                <a href="#">Sticky About</a>
                <a href="#">Sticky Contact</a>
            </div>
            <div style="height: 400px; padding: 1rem;">
                <p>Content after sticky navbar. It stays at the top until its parent scrolls away.</p>
            </div>
        </div>
        <pre><code>.sticky-nav {
    position: sticky;
    top: 0;
    background: #e67e22;
}</code></pre>
    </div>

    <h2>📖 Example 5: Dropdown Menu Inside Navbar</h2>
    <div class="demo-box">
        <ul class="dropdown-demo">
            <li><a href="#">Home</a></li>
            <li><a href="#">Java</a></li>
            <li class="dropdown">
                <a href="#" class="dropbtn">Web Design ▼</a>
                <div class="dropdown-content">
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">Bootstrap</a>
                </div>
            </li>
            <li><a href="#">Contact</a></li>
        </ul>
        <pre><code>.dropdown {
    position: relative;
}
.dropdown-content {
    display: none;
    position: absolute;
    background: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
}
.dropdown:hover .dropdown-content {
    display: block;
}</code></pre>
        <div class="note">💡 Hover over "Web Design" to see the dropdown menu.</div>
    </div>

    <h2>📖 Example 6: Vertical Navigation Bar</h2>
    <div class="demo-box">
        <div class="vertical-nav">
            <a href="#" class="active">Home</a>
            <a href="#">Java</a>
            <a href="#">CSS</a>
            <a href="#">HTML</a>
            <a href="#">Bootstrap</a>
        </div>
        <pre><code>ul {
    list-style: none;
    width: 200px;
    background: #34495e;
}
li a {
    display: block;
    padding: 8px 16px;
    color: white;
    text-decoration: none;
}
li a:hover { background: #1abc9c; }</code></pre>
    </div>

    <h2>📖 Example 7: Full‑Height Fixed Sidebar</h2>
    <div class="demo-box">
        <div class="full-height-sidebar">
            <div class="sidebar">
                <a href="#">Home</a>
                <a href="#">Java</a>
                <a href="#">CSS</a>
                <a href="#">HTML</a>
                <a href="#">Bootstrap</a>
            </div>
            <div class="content">
                <h3>Main Content Area</h3>
                <p>Scroll inside this panel — the sidebar stays fixed (sticky).</p>
                <div style="height: 600px;">Long content to demonstrate sticky sidebar.</div>
            </div>
        </div>
        <pre><code>.sidebar {
    position: sticky;
    top: 20px;
    align-self: flex-start;
    height: 100vh; /* full height */
}</code></pre>
    </div>

    <div class="note">
        💡 <strong>Best Practices:</strong><br>
        – Use <code>&lt;nav&gt;</code> element for semantic HTML.<br>
        – Remove default list styles: <code>list-style: none; margin: 0; padding: 0;</code><br>
        – For responsive design, combine media queries to collapse horizontal navbars into vertical menus on mobile.<br>
        – Ensure sufficient color contrast for accessibility.<br>
        – Use <code>z-index</code> for fixed/sticky navbars to keep them above other content.
    </div>

    <div class="warning note">
        ⚠️ <strong>Browser Support:</strong> <code>position: sticky</code> works in all modern browsers, but not in Internet Explorer. Fixed positioning works everywhere but may require padding on the body to avoid overlapping content.
    </div>

    <footer>
        CSS Navigation Bar — horizontal, vertical, fixed, sticky, dropdown, and full‑height sidebars.
    </footer>
</div>
  `
},

{
  id: "CSS-Overlay",
  name: "CSS Overlay Effects",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1400px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .overlay-container {
        position: relative;
        width: 300px;
        display: inline-block;
        margin: 0.5rem;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .demo-image {
        width: 100%;
        height: 250px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
    }
    /* Fade overlay */
    .fade-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(41, 98, 255, 0.85);
        opacity: 0;
        transition: opacity 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
    }
    .overlay-container:hover .fade-overlay {
        opacity: 1;
    }
    /* Slide from top */
    .slide-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background: rgba(46, 125, 50, 0.9);
        transition: height 0.5s ease;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    .overlay-container:hover .slide-top {
        height: 100%;
    }
    /* Slide from bottom */
    .slide-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background: rgba(245, 124, 0, 0.9);
        transition: height 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    .overlay-container:hover .slide-bottom {
        height: 100%;
    }
    /* Slide from left */
    .slide-left {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: rgba(156, 39, 176, 0.9);
        transition: width 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        overflow: hidden;
    }
    .overlay-container:hover .slide-left {
        width: 100%;
    }
    /* Slide from right */
    .slide-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 100%;
        background: rgba(211, 47, 47, 0.9);
        transition: width 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        overflow: hidden;
    }
    .overlay-container:hover .slide-right {
        width: 100%;
    }
    /* Title overlay */
    .title-overlay {
        position: absolute;
        bottom: 0;
        background: rgba(0,0,0,0.6);
        width: 100%;
        padding: 15px;
        text-align: center;
        color: white;
        font-size: 1.2rem;
        transform: translateY(100%);
        transition: transform 0.4s ease;
    }
    .overlay-container:hover .title-overlay {
        transform: translateY(0);
    }
    /* Icon overlay */
    .icon-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        opacity: 0;
        transition: opacity 0.4s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .overlay-container:hover .icon-overlay {
        opacity: 1;
    }
    .icon-link {
        font-size: 3rem;
        color: white;
        text-decoration: none;
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
    }
    .icon-link:hover {
        background: #2962ff;
        transform: scale(1.1);
    }
    .flex-demos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
</style>

<div class="container">
    <h1>CSS Overlay Effects</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        An overlay is a layer that covers content — typically appearing on hover or click. CSS overlays are used for image captions, modals, hover effects, and interactive UI components. Using <code>position: absolute</code>, <code>transition</code>, and <code>opacity</code> or dimensional changes, you can create fade, slide, title, and icon overlays with smooth animations.
    </div>

    <h2>📌 Core Technique</h2>
    <pre><code>.container {
    position: relative;
    width: 300px;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    opacity: 0;
    transition: 0.5s ease;
}
.container:hover .overlay {
    opacity: 1;
}</code></pre>

    <h2>📖 Example 1: Fade In Overlay</h2>
    <div class="demo-box">
        <div class="flex-demos">
            <div class="overlay-container">
                <div class="demo-image">🖼️ Sample Image</div>
                <div class="fade-overlay">✨ Fade Effect</div>
            </div>
        </div>
        <pre><code>.overlay {
    opacity: 0;
    transition: opacity 0.5s ease;
}
.container:hover .overlay {
    opacity: 0.9;
}</code></pre>
    </div>

    <h2>📖 Example 2: Slide Overlays (Top, Bottom, Left, Right)</h2>
    <div class="demo-box">
        <div class="flex-demos">
            <div class="overlay-container">
                <div class="demo-image">Slide Top</div>
                <div class="slide-top">⬇️ From Top</div>
            </div>
            <div class="overlay-container">
                <div class="demo-image">Slide Bottom</div>
                <div class="slide-bottom">⬆️ From Bottom</div>
            </div>
            <div class="overlay-container">
                <div class="demo-image">Slide Left</div>
                <div class="slide-left">➡️ From Left</div>
            </div>
            <div class="overlay-container">
                <div class="demo-image">Slide Right</div>
                <div class="slide-right">⬅️ From Right</div>
            </div>
        </div>
        <pre><code>/* Slide from top */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: height 0.5s ease;
}
.container:hover .overlay {
    height: 100%;
}

/* Slide from left */
.overlay-left {
    width: 0;
    height: 100%;
    transition: width 0.5s ease;
}
.container:hover .overlay-left {
    width: 100%;
}</code></pre>
    </div>

    <h2>📖 Example 3: Image Overlay Title (Slide Up Caption)</h2>
    <div class="demo-box">
        <div class="flex-demos">
            <div class="overlay-container">
                <div class="demo-image">🏞️ Mountain View</div>
                <div class="title-overlay">Welcome to the Mountains</div>
            </div>
        </div>
        <pre><code>.title-overlay {
    position: absolute;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    width: 100%;
    transform: translateY(100%);
    transition: transform 0.4s ease;
}
.container:hover .title-overlay {
    transform: translateY(0);
}</code></pre>
    </div>

    <h2>📖 Example 4: Image Overlay with Icon</h2>
    <div class="demo-box">
        <div class="flex-demos">
            <div class="overlay-container">
                <div class="demo-image">🔗 Link Overlay</div>
                <div class="icon-overlay">
                    <a href="#" class="icon-link">🔍</a>
                </div>
            </div>
        </div>
        <pre><code>.icon-overlay {
    opacity: 0;
    transition: opacity 0.4s ease;
}
.container:hover .icon-overlay {
    opacity: 1;
}
.icon-link {
    font-size: 2rem;
    color: white;
    background: rgba(0,0,0,0.5);
    border-radius: 50%;
    padding: 15px;
}</code></pre>
    </div>

    <div class="note">
        💡 <strong>Key Properties for Overlays:</strong><br>
        – <code>position: relative</code> on parent, <code>position: absolute</code> on overlay.<br>
        – Use <code>rgba()</code> for semi‑transparent backgrounds.<br>
        – Transition effects: <code>opacity</code>, <code>height</code>, <code>width</code>, <code>transform</code>.<br>
        – Combine with <code>z-index</code> to manage stacking order.
    </div>

    <div class="warning note">
        ⚠️ <strong>Accessibility:</strong> Ensure hover‑only overlays also work on focus (for keyboard users). Provide alternative text or ARIA labels for icon overlays.
    </div>

    <footer>
        CSS Overlay — fade, slide, title, and icon overlays for images and containers.
    </footer>
</div>
  `
},

{
  id: "CSS-root-selector",
  name: "CSS :root Selector",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
    }
    td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    tr:last-child td {
        border-bottom: none;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .var-demo {
        background: var(--card-bg, #f0f0f0);
        padding: 1rem;
        border-radius: 12px;
        border-left: 5px solid var(--accent-color, #2962ff);
        margin: 1rem 0;
        color: var(--text-color, #333);
    }
    :root {
        --primary-color: #2962ff;
        --secondary-color: #7c4dff;
        --success-color: #2e7d32;
        --border-radius-sm: 8px;
    }
    .root-vars-demo {
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 1rem;
        border-radius: var(--border-radius-sm);
        text-align: center;
    }
</style>

<div class="container">
    <h1>CSS :root Selector</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>:root</code> pseudo‑class matches the highest‑level parent element in the document tree. In HTML, it always targets the <code>&lt;html&gt;</code> element. While <code>:root</code> and the <code>html</code> selector often target the same element, <code>:root</code> has higher specificity — making it ideal for declaring global CSS custom properties (variables) and overriding styles.
    </div>

    <h2>📌 Syntax & Basics</h2>
    <pre><code>:root {
    /* CSS properties applied to the root element */
    background: #f0f0f0;
    color: #1a1a1a;
}</code></pre>

    <table>
        <thead>
            <tr><th>Selector</th><th>Target</th><th>Specificity</th></tr>
        </thead>
        <tbody>
            <tr><td><code>:root</code></td><td><code>&lt;html&gt;</code> element</td><td>(0, 0, 1, 0) – pseudo‑class</td></tr>
            <tr><td><code>html</code></td><td><code>&lt;html&gt;</code> element</td><td>(0, 0, 0, 1) – type selector</td></tr>
        </tbody>
    </table>

    <div class="note">
        💡 <strong>Key Point:</strong> <code>:root</code> has higher specificity than <code>html</code>. If both define the same property, the value from <code>:root</code> takes precedence.
    </div>

    <h2>📖 Example 1: Basic Styling with :root</h2>
    <div class="demo-box">
        <style>
            .root-demo {
                background: lightblue;
                color: blue;
                text-align: center;
                padding: 20px;
                border-radius: 8px;
            }
        </style>
        <div class="root-demo">
            <h3>Welcome to the Tutorial</h3>
            <p>This area is styled using :root (applied to the document root).</p>
        </div>
        <pre><code>:root {
    background: lightblue;
    color: blue;
    text-align: center;
}</code></pre>
    </div>

    <h2>📖 Example 2: :root vs html Selector (Specificity Demo)</h2>
    <div class="demo-box">
        <style>
            /* Both target the same element, but :root wins for conflicting properties */
            .specificity-demo {
                background-color: #ffe0b2;
                color: #bf360c;
                padding: 15px;
                border-radius: 8px;
            }
        </style>
        <div class="specificity-demo">
            <p><strong>:root</strong> background and color override <strong>html</strong> when both are set.</p>
            <p>Properties not defined in :root but defined in html will still apply.</p>
        </div>
        <pre><code>:root {
    background-color: lightblue;   /* wins over html selector */
    color: blue;
}
html {
    background-color: red;         /* overridden by :root */
    font-size: 30px;               /* applies because not in :root */
}</code></pre>
    </div>

    <h2>🎨 Example 3: CSS Custom Properties (Variables) in :root</h2>
    <div class="demo-box">
        <style>
            .theme-demo {
                --primary: #2962ff;
                --secondary: #7c4dff;
                --radius: 12px;
                background: var(--primary);
                color: white;
                padding: 1rem;
                border-radius: var(--radius);
                text-align: center;
            }
        </style>
        <div class="theme-demo">
            <p>🎨 Colors and border‑radius come from <code>:root</code> variables.</p>
            <code>--primary: #2962ff; --radius: 12px;</code>
        </div>
        <pre><code>:root {
    --primary-color: #2962ff;
    --secondary-color: #7c4dff;
    --spacing: 1rem;
    --border-radius: 12px;
}
.element {
    background: var(--primary-color);
    border-radius: var(--border-radius);
}</code></pre>
        <div class="note">📌 Defining CSS custom properties inside <code>:root</code> makes them available globally across the entire document.</div>
    </div>

    <h2>📖 Example 4: Dynamic Theming with :root Variables</h2>
    <div class="demo-box">
        <style>
            .theme-switch-demo {
                --bg: #f5f5f5;
                --text: #1a1a1a;
                --accent: #2962ff;
                background: var(--bg);
                color: var(--text);
                padding: 1rem;
                border-radius: 12px;
                transition: 0.3s;
            }
            .theme-switch-demo button {
                background: var(--accent);
                border: none;
                padding: 6px 12px;
                border-radius: 6px;
                color: white;
                cursor: pointer;
            }
        </style>
        <div class="theme-switch-demo" id="themeDemo">
            <p>🌓 Click the button to change :root variables dynamically (via JavaScript).</p>
            <button onclick="document.documentElement.style.setProperty('--bg', '#1a1a2e'); document.documentElement.style.setProperty('--text', '#eee'); document.documentElement.style.setProperty('--accent', '#e94560');">Dark Theme</button>
            <button onclick="document.documentElement.style.setProperty('--bg', '#f5f5f5'); document.documentElement.style.setProperty('--text', '#1a1a1a'); document.documentElement.style.setProperty('--accent', '#2962ff');">Light Theme</button>
        </div>
        <pre><code>/* Define variables in :root */
:root {
    --bg: #f5f5f5;
    --text: #1a1a1a;
}
/* JavaScript can update them: */
document.documentElement.style.setProperty('--bg', '#1a1a2e');</code></pre>
    </div>

    <div class="note">
        💡 <strong>Best practices:</strong><br>
        – Use <code>:root</code> to store global design tokens (colors, fonts, spacing).<br>
        – Prefer <code>:root</code> over <code>html</code> for custom properties because of its higher specificity and semantic clarity.<br>
        – Combine with media queries to adjust variables for different screen sizes or dark/light modes.
    </div>

    <div class="warning note">
        ⚠️ <strong>Browser support:</strong> <code>:root</code> is supported in all modern browsers, including IE9+ (though custom properties require IE11+ with polyfill). For HTML documents, <code>:root</code> and <code>html</code> are equivalent, but for SVG or XML documents, <code>:root</code> points to the outermost element.
    </div>

    <footer>
        CSS :root selector — target the document root, declare global variables, and override html styles with higher specificity.
    </footer>
</div>
  `
},

{
  id: "CSS-Specificity",
  name: "CSS Specificity",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .specificity-demo {
        padding: 15px;
        margin: 10px 0;
        border-radius: 8px;
        font-weight: bold;
        text-align: center;
    }
    .spec-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .spec-table th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
    }
    .spec-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    .spec-table tr:last-child td {
        border-bottom: none;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .spec-calc {
        display: inline-block;
        background: #e2e8f0;
        border-radius: 8px;
        padding: 2px 8px;
        font-family: monospace;
        font-weight: bold;
    }
</style>

<div class="container">
    <h1>CSS Specificity</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        When multiple CSS rules target the same element, <strong>specificity</strong> determines which rule wins. Specificity is a weight calculated based on the selectors used. The rule with the highest specificity value gets applied. Understanding specificity helps you debug style conflicts and write predictable CSS.
    </div>

    <h2>📌 Specificity Hierarchy (Highest to Lowest)</h2>
    <table class="spec-table">
        <thead>
            <tr><th>Selector Type</th><th>Example</th><th>Specificity Score</th></tr>
        </thead>
        <tbody>
            <tr><td>Inline styles</td><td><code>style="color: red;"</code></td><td><span class="spec-calc">1,0,0,0</span></td></tr>
            <tr><td>ID selectors</td><td><code>#header</code></td><td><span class="spec-calc">0,1,0,0</span></td></tr>
            <tr><td>Classes, attributes, pseudo‑classes</td><td><code>.menu</code>, <code>[type="text"]</code>, <code>:hover</code></td><td><span class="spec-calc">0,0,1,0</span></td></tr>
            <tr><td>Element & pseudo‑element selectors</td><td><code>div</code>, <code>h1</code>, <code>::before</code></td><td><span class="spec-calc">0,0,0,1</span></td></tr>
        </tbody>
    </table>
    <div class="note">
        💡 <strong>Special cases:</strong> Universal selector (<code>*</code>) and combinators (<code>+</code>, <code>></code>, <code>~</code>) add no specificity. Inherited values have no specificity. The <code>!important</code> flag overrides all specificity, but use it sparingly.
    </div>

    <h2>📖 Example 1: ID vs Attribute Selector (ID wins)</h2>
    <div class="demo-box">
        <div id="specificityBox1" style="text-align: center; padding: 15px; border-radius: 8px; background-color: #ffd966; color: #333;">
            This box has both an ID and an attribute selector targeting it.
        </div>
        <style>
            #specificityBox1 {
                background-color: #f4a261 !important; /* just for demo, normally ID wins */
            }
            div[id="specificityBox1"] {
                background-color: #e9c46a;
            }
        </style>
        <pre><code>/* ID selector (specificity: 0,1,0,0) */
#specificityBox1 {
    background-color: #f4a261;
}
/* Attribute selector (specificity: 0,0,1,0) */
div[id="specificityBox1"] {
    background-color: #e9c46a;
}
/* Result: ID selector wins → background is #f4a261 */</code></pre>
        <div class="warning">⚠️ Note: In this demo, the ID rule uses <code>!important</code> to ensure it wins over the inline style from previous examples. Normally ID > attribute.</div>
    </div>

    <h2>📖 Example 2: Equal Specificity – Last Rule Wins</h2>
    <div class="demo-box">
        <div class="equal-demo" style="text-align: center; padding: 15px; border-radius: 8px;">
            Two identical class selectors – the second one overrides the first.
        </div>
        <style>
            .equal-demo {
                background-color: #ffb3ba;
                color: #a00;
            }
            .equal-demo {
                background-color: #baffc9;
                color: #070;
            }
        </style>
        <pre><code>.box { background: red; }
.box { background: green; }  /* Last one wins → background green */</code></pre>
        <div class="note">✅ Both rules have identical specificity (0,0,1,0), so the later declaration overrides the earlier one.</div>
    </div>

    <h2>📖 Example 3: Class Selector vs Element Selector (Class wins)</h2>
    <div class="demo-box">
        <div class="highlight" style="text-align: center; padding: 15px; border-radius: 8px;">
            This has class="highlight" and is also a div.
        </div>
        <style>
            .highlight {
                background-color: #9c27b0;
                color: white;
            }
            div {
                background-color: #ccc;
                color: black;
            }
        </style>
        <pre><code>/* Class selector (specificity: 0,0,1,0) */
.highlight {
    background: #9c27b0;
}
/* Element selector (specificity: 0,0,0,1) */
div {
    background: #ccc;
}
/* Class wins → purple background */</code></pre>
    </div>

    <h2>📖 Example 4: Specificity Calculation Examples</h2>
    <table class="spec-table">
        <thead><tr><th>Selector</th><th>Specificity (a,b,c,d)</th><th>Value</th></tr></thead>
        <tbody>
            <tr><td><code>style=""</code></td><td>1,0,0,0</td><td>Highest</td></tr>
            <tr><td><code>#main .nav li a:hover</code></td><td>0,1,2,2</td><td>(1 ID + 1 class + 1 pseudo-class + 2 elements)</td></tr>
            <tr><td><code>.btn-primary</code></td><td>0,0,1,0</td><td>One class</td></tr>
            <tr><td><code>[type="submit"]</code></td><td>0,0,1,0</td><td>Attribute selector = class level</td></tr>
            <tr><td><code>div p</code></td><td>0,0,0,2</td><td>Two element selectors</td></tr>
            <tr><td><code>*</code></td><td>0,0,0,0</td><td>Universal has no specificity</td></tr>
        </tbody>
    </table>

    <h2>🎯 The !important Rule</h2>
    <div class="demo-box">
        <div id="importantDemo" style="text-align: center; padding: 15px; border-radius: 8px;">
            This paragraph has a style with <code>!important</code> that overrides everything.
        </div>
        <style>
            #importantDemo {
                background-color: #e76f51 !important;
                color: white !important;
            }
            #importantDemo {
                background-color: #2a9d8f;
            }
            div {
                background-color: #e9c46a !important;
            }
        </style>
        <pre><code>/* !important overrides all specificity, even inline styles */
#importantDemo {
    background: #e76f51 !important;  /* Wins */
}
div {
    background: #e9c46a !important;  /* Also !important, but last one would normally win,
                                          but here the ID+!important is more specific? Actually both have !important,
                                          the more specific selector (#id) wins */
}</code></pre>
        <div class="warning">🚨 <strong>Avoid overusing !important</strong>. It breaks the natural cascade and makes debugging hard. Use it only to override third‑party CSS or utility classes.</div>
    </div>

    <div class="note">
        💡 <strong>How to increase specificity without !important:</strong><br>
        – Repeat a selector: <code>.nav.nav</code> has higher specificity than <code>.nav</code>.<br>
        – Add an element before a class: <code>div.highlight</code> > <code>.highlight</code>.<br>
        – Use ID instead of class.<br>
        – Use attribute selector where possible.
    </div>

    <footer>
        CSS Specificity — the algorithm that decides which style wins when selectors conflict. Master it to write robust, maintainable CSS.
    </footer>
</div>
  `
},

{
  id: "CSS-Text-Indent",
  name: "CSS Text Indent",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .indent-sample {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        margin: 0.75rem 0;
        text-align: justify;
        font-size: 1rem;
        line-height: 1.5;
        border-left: 3px solid #2962ff;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
    }
    td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    tr:last-child td {
        border-bottom: none;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .negative-demo {
        background: #fff0f0;
    }
</style>

<div class="container">
    <h1>CSS Text Indent</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>text-indent</code> property specifies the indentation of the first line of a text block. Commonly used in paragraphs, blockquotes, and lists, it improves readability and gives a traditional typographic look. It supports positive values (indent to the right) and negative values (indent to the left, or "hanging" effect).
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>text-indent: length | percentage | initial | inherit;</code></pre>
    <tr>
        <thead>
            <tr><th>Value</th><th>Description</th></tr>
        </thead>
        <tbody>
            <tr><td><code>length</code> (e.g., 20px, 2em, -1cm)</th>
                <td>Fixes indentation using absolute (px, cm) or relative (em, rem) units. Negative values allowed.</td>
            </tr>
            <tr><td><code>percentage</code></td>
                <td>Indentation is a percentage of the containing block's width.</td>
            </tr>
            <tr><td><code>initial</code></td>
                <td>Sets to default (0).</td>
            </tr>
            <tr><td><code>inherit</code></td>
                <td>Inherits from parent element.</td>
            </tr>
        </tbody>
    </table>

    <div class="note">
        💡 <strong>Important:</strong> The indentation applies only to the <strong>first line</strong> of a block‑level element. For multi‑line content, subsequent lines are not indented (unless you use experimental <code>each-line</code> or <code>hanging</code> values).
    </div>

    <h2>📖 Example 1: Positive Length Values (px, em, cm)</h2>
    <div class="demo-box">
        <div class="indent-sample" style="text-indent: 40px;">
            <strong>text-indent: 40px;</strong><br>
            This is a paragraph with a 40 pixel first‑line indent. Notice how only the first line is indented. This creates a classic paragraph style often seen in books and articles.
        </div>
        <div class="indent-sample" style="text-indent: 3em;">
            <strong>text-indent: 3em;</strong><br>
            Using relative unit <code>em</code> (3 times current font size). The indent scales with the font size, making it responsive.
        </div>
        <div class="indent-sample" style="text-indent: 1.5cm;">
            <strong>text-indent: 1.5cm;</strong><br>
            Absolute unit centimeters – rarely used on screen but valid for print stylesheets.
        </div>
        <pre><code>p {
    text-indent: 40px;   /* fixed pixels */
}
p {
    text-indent: 3em;    /* relative to font size */
}</code></pre>
    </div>

    <h2>📖 Example 2: Negative Indentation (Hanging Effect)</h2>
    <div class="demo-box">
        <div class="indent-sample negative-demo" style="text-indent: -20px; margin-left: 30px;">
            <strong>text-indent: -20px;</strong><br>
            A negative value pulls the first line to the left, creating a "hanging indent". This is useful for lists, bibliographies, or dictionary definitions where the first line should extend leftward.
        </div>
        <div class="indent-sample negative-demo" style="text-indent: -2em; margin-left: 3em;">
            <strong>text-indent: -2em;</strong><br>
            Negative value in <code>em</code>. Note: you may need to add left margin/padding to prevent the text from being cut off.
        </div>
        <pre><code>/* Hanging indent (first line moves left, others normal) */
.hanging {
    text-indent: -20px;
    margin-left: 30px;  /* prevents overflow */
}</code></pre>
        <div class="warning">⚠️ When using negative <code>text-indent</code>, ensure the containing block has enough left padding or margin so the first line does not get clipped.</div>
    </div>

    <h2>📖 Example 3: Percentage Indentation</h2>
    <div class="demo-box">
        <div class="indent-sample" style="text-indent: 15%; width: 500px;">
            <strong>text-indent: 15%;</strong> (container width 500px → indent 75px)<br>
            Percentage is relative to the width of the containing block. Resize the container to see the indent change proportionally.
        </div>
        <pre><code>div {
    width: 500px;
    text-indent: 15%;  /* = 75px indent */
}</code></pre>
    </div>

    <h2>📖 Example 4: Text Indent on Lists & Blockquotes</h2>
    <div class="demo-box">
        <ul style="list-style: disc; padding-left: 1.5rem;">
            <li style="text-indent: 15px;">List item with <code>text-indent: 15px;</code> – only the first line of each list item is indented.</li>
            <li style="text-indent: -10px; margin-left: 25px;">Negative indent on a list item (hanging).</li>
        </ul>
        <blockquote style="text-indent: 30px; font-style: italic; border-left: 3px solid #aaa; padding-left: 1rem;">
            "A blockquote with a 30px first‑line indent. This gives a distinctive look, especially in long quotations."
        </blockquote>
        <pre><code>li {
    text-indent: 15px;
}
blockquote {
    text-indent: 30px;
}</code></pre>
    </div>

    <h2>📖 Example 5: Combining text-indent with text-align</h2>
    <div class="demo-box">
        <div class="indent-sample" style="text-indent: 50px; text-align: justify;">
            <strong>text-indent: 50px; text-align: justify;</strong><br>
            Both properties work well together. The first line is indented, and the rest of the paragraph is justified evenly between margins.
        </div>
    </div>

    <h2>🎨 Experimental Values (Not widely supported)</h2>
    <p>CSS Text Module Level 3 introduces two experimental values:</p>
    <ul>
        <li><code>text-indent: hanging;</code> – Indents all lines except the first line.</li>
        <li><code>text-indent: each-line;</code> – Indents every line after a forced line break.</li>
    </ul>
    <div class="note">📌 These values are not yet supported in mainstream browsers. Use negative indentation with margin as a workaround for hanging indents.</div>

    <div class="note">
        💡 <strong>Best Practices:</strong><br>
        – Use relative units (<code>em</code>, <code>rem</code>) for better accessibility when users change font size.<br>
        – For responsive designs, consider using <code>text-indent: 2em</code> or similar.<br>
        – Traditional print typography often uses 1–2em indentation for paragraphs.<br>
        – For web, many designers skip indentation and use margin/spacing between paragraphs instead.<br>
        – Negative indentation is great for dictionaries, glossaries, and reference lists.
    </div>

    <footer>
        CSS Text Indent — control first‑line indentation for paragraphs, lists, and blockquotes.
    </footer>
</div>
  `
},

{
  id: "CSS-Text-Stroke",
  name: "CSS Text Stroke",
  description: String.raw`
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f4f7fc;
        color: #1e2a3a;
        padding: 2rem;
        line-height: 1.5;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
        background: white;
        border-radius: 24px;
        box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
        padding: 2rem 2rem 2.5rem;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        border-left: 6px solid #2962ff;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0b3b4f;
    }
    .last-updated {
        color: #2962ff;
        font-weight: 500;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 0.75rem;
    }
    .intro-text {
        background: #eef2ff;
        padding: 1.2rem 1.8rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        border-left: 5px solid #2962ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #0f4c5f;
        border-bottom: 3px solid #cbd5e1;
        padding-bottom: 0.4rem;
    }
    h3 {
        font-size: 1.3rem;
        margin-top: 1.2rem;
        margin-bottom: 0.8rem;
        color: #1e5a6e;
    }
    code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: #d14;
    }
    pre {
        background: #0f172a;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 16px;
        overflow-x: auto;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        margin: 1rem 0;
    }
    .demo-box {
        background: #f8fafc;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .stroke-sample {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        margin: 0.75rem 0;
        font-size: 1.2rem;
        line-height: 1.4;
        border-left: 3px solid #2962ff;
        font-weight: 500;
    }
    .note {
        background: #e6f7ec;
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        border-left: 4px solid #2e7d32;
        margin: 1rem 0;
    }
    .warning {
        background: #fff3e0;
        border-left-color: #ed6c02;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    th {
        background: #2962ff;
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
    }
    td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
    }
    tr:last-child td {
        border-bottom: none;
    }
    footer {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #5b6e8c;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    .demo-heading {
        font-size: 1.8rem;
        margin: 0.5rem 0;
        font-weight: 700;
    }
    .interactive-stroke {
        transition: all 0.2s ease;
        cursor: pointer;
    }
    .interactive-stroke:hover {
        -webkit-text-stroke: 2.5px #ff6d00 !important;
        color: #fff5e6 !important;
        transform: scale(1.01);
    }
    .badge-stroke {
        background: #1e293b;
        display: inline-block;
        padding: 0.2rem 1rem;
        border-radius: 40px;
        font-weight: 500;
        letter-spacing: 0.3px;
    }
</style>

<div class="container">
    <h1>🎨 CSS Text Stroke</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        <strong>CSS text stroke</strong> (via the <code>-webkit-text-stroke</code> property) adds an elegant outline around each character of text. 
        Unlike borders or shadows, the stroke wraps precisely around letterforms — perfect for bold headlines, eye-catching badges, and creative typography. 
        It accepts a <strong>stroke width</strong> (length unit) and a <strong>stroke color</strong>, giving designers fine-grained control over textual emphasis.
    </div>

    <h2>📌 Syntax & Core Values</h2>
    <pre><code>/* Shorthand (prefixed for broad compatibility) */
-webkit-text-stroke: &lt;width&gt; &lt;color&gt;;

/* Longhand properties */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #ff4757;

/* Standard (limited support) */
text-stroke: 2px #1e90ff;</code></pre>

    <table>
        <thead><tr><th>Value</th><th>Description</th><th>Example</th></tr></thead>
        <tbody>
            <tr><td><code>&lt;length&gt;</code></td><td>Stroke thickness (px, em, rem, etc.)</td><td><code>1px</code>, <code>0.1em</code>, <code>2px</code></td></tr>
            <tr><td><code>&lt;color&gt;</code></td><td>Stroke color (hex, RGB, named)</td><td><code>#e63946</code>, <code>coral</code></td></tr>
            <tr><td><code>initial</code></td><td>Resets to default (no stroke)</td><td><code>-webkit-text-stroke: initial;</code></td></tr>
            <tr><td><code>inherit</code></td><td>Inherits from parent</td><td><code>inherit</code></td></tr>
        </tbody>
    </table>

    <div class="note">
        💡 <strong>Browser compatibility:</strong> <code>-webkit-text-stroke</code> works in all modern browsers (Chrome, Edge, Safari, Firefox, Opera). Always include the <code>-webkit-</code> prefix.
    </div>

    <h2>📖 Example 1: Basic Text Stroke</h2>
    <div class="demo-box">
        <div class="stroke-sample" style="-webkit-text-stroke: 1px #2c3e66; color: #f1c40f;">🌟 <strong>1px navy stroke</strong> — golden text with outline.</div>
        <div class="stroke-sample" style="-webkit-text-stroke: 2px #d32f2f; color: white;">🔥 <strong>2px crimson stroke</strong> — bold alert style.</div>
        <div class="stroke-sample" style="-webkit-text-stroke: 0.8px #2e7d32; color: #a5d6a7;">🌿 <strong>0.8px green stroke</strong> — delicate definition.</div>
    </div>

    <h2>📖 Example 2: Varying Thickness & Color</h2>
    <div class="demo-box">
        <div class="stroke-sample" style="-webkit-text-stroke: 3px #ff6b6b; color: #fff0f0; font-size: 1.5rem; text-align: center;">⚡ BOLD IMPACT — 3px thick coral stroke</div>
        <div class="stroke-sample" style="-webkit-text-stroke: 0.5px #4a4e69; color: #22223b; font-style: italic;">✒️ Thin 0.5px stroke — vintage style</div>
        <div class="stroke-sample" style="-webkit-text-stroke: 2px #9c27b0; color: #f3e5f5; font-family: monospace;">🧪 Monospace with 2px purple stroke</div>
    </div>

    <h2>📖 Example 3: Hollow / Outlined Text</h2>
    <div class="demo-box">
        <div class="stroke-sample" style="-webkit-text-stroke: 2px #0d3b66; color: transparent; font-size: 2rem; text-align: center; font-weight: 800;">⚡ HOLLOW STROKE ⚡</div>
        <div class="stroke-sample" style="-webkit-text-stroke: 2.5px #f4a261; color: transparent; font-size: 1.6rem;">✦ OUTLINED TEXT ✦</div>
        <div class="note">🎭 <code>color: transparent</code> + stroke = pure outline effect.</div>
    </div>

    <h2>📖 Example 4: Interactive Hover Effects</h2>
    <div class="demo-box">
        <div class="stroke-sample interactive-stroke" style="-webkit-text-stroke: 1px #2c5282; color: #2b6cb0;">🖱️ HOVER ME — stroke becomes orange + thicker!</div>
        <div class="stroke-sample interactive-stroke" style="-webkit-text-stroke: 0px #000; color: #2d3748;">✨ no stroke → on hover: 2.5px orange stroke ✨</div>
    </div>

    <h2>📖 Example 5: Text Stroke + Text Shadow</h2>
    <div class="demo-box">
        <div class="stroke-sample" style="-webkit-text-stroke: 1px #1a4d8c; color: #b8e1fc; text-shadow: 3px 3px 6px rgba(0,0,0,0.3); font-size: 1.5rem;">🌊 GLOW DEPTH — stroke + shadow for 3D typography</div>
        <div class="stroke-sample" style="-webkit-text-stroke: 1.2px #4b2e2e; color: #ffd966; text-shadow: 0 4px 8px rgba(0,0,0,0.2);">✨ Vintage layered style: thin stroke + soft shadow</div>
    </div>

    <h2>🎯 Real‑world Use Cases</h2>
    <div class="demo-box">
        <div style="display: flex; flex-wrap: wrap; gap: 1.5rem;">
            <div>
                <div class="badge-stroke" style="-webkit-text-stroke: 0.7px #fff; color: #ffdd77;">NEW FEATURE</div>
                <div class="demo-heading" style="-webkit-text-stroke: 1px #d97706; color: #ffedd5;">Limited Offer</div>
            </div>
            <div class="stroke-sample" style="-webkit-text-stroke: 1px #0f172a; color: #facc15; background: #1e293b;">🔥 SALE ENDS SOON — STROKE CALLS ATTENTION</div>
        </div>
    </div>

    <h2>🧠 Longhand Properties</h2>
    <div class="demo-box">
        <div class="stroke-sample" style="-webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #b91c1c; color: #fee2e2;">📐 width = 2px, color = #b91c1c</div>
        <div class="stroke-sample" style="-webkit-text-stroke-width: 0.8px; -webkit-text-stroke-color: #0f3b5c; color: #d9eafb;">✏️ 0.8px width + deep blue stroke</div>
    </div>

    <h2>📐 Using em/rem Units</h2>
    <div class="demo-box">
        <div class="stroke-sample" style="-webkit-text-stroke: 0.1em #5e2b97; color: #efe6ff; font-size: 1.4rem;">🔹 <code>0.1em</code> stroke — scales with font-size</div>
        <div class="stroke-sample" style="-webkit-text-stroke: 0.08rem #e07c1f; color: #fff4e6; font-size: 1.2rem;">🧩 0.08rem stroke — consistent across zoom</div>
    </div>

    <h2>🧩 Combining with CSS Variables</h2>
    <div class="demo-box">
        <div class="stroke-sample" style="--stroke-clr: #8b5cf6; -webkit-text-stroke: 1.5px var(--stroke-clr, #000); color: #f3e8ff;">
            🎨 Dynamic stroke using CSS variable — stroke matches variable!
        </div>
    </div>

    <h2>⚠️ Accessibility & Best Practices</h2>
    <div class="demo-box">
        <ul style="margin-left: 1.5rem;">
            <li>Ensure text fill + stroke color meet WCAG contrast.</li>
            <li>Avoid thick strokes (>2px) on body text.</li>
            <li>Fallback: if stroke unsupported, text remains readable.</li>
            <li>Use stroke for headings, badges, CTAs — not large paragraphs.</li>
        </ul>
    </div>

    <h2>🌐 Browser Support</h2>
    <table>
        <thead><tr><th>Browser</th><th>Support (<code>-webkit-text-stroke</code>)</th></tr></thead>
        <tbody>
            <tr><td>Chrome / Edge</td><td>✅ Full (v15+)</td></tr>
            <tr><td>Firefox</td><td>✅ Full</td></tr>
            <tr><td>Safari</td><td>✅ Full</td></tr>
            <tr><td>Opera</td><td>✅ Full</td></tr>
            <tr><td>Internet Explorer</td><td>❌ No</td></tr>
        </tbody>
    </table>

    <div class="warning">
        💡 Always use the <code>-webkit-</code> prefix. The unprefixed <code>text-stroke</code> is not yet universally supported.
    </div>

    <footer>
        ✨ CSS Text Stroke — add definition and artistic outlines to any text element.
    </footer>
</div>
  `
},

{
  id: "CSS-Zoom",
  name: "CSS Zoom",
  description: String.raw`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Zoom – Complete Guide with Examples</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        .warning {
            background: #fff3e0;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #ed6c02;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .feature-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1rem 0;
        }
        .feature-card {
            background: #f8fafc;
            border-radius: 16px;
            padding: 1rem 1.2rem;
            flex: 1 1 240px;
            border: 1px solid #e2e8f0;
            transition: 0.2s;
        }
        .feature-card:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            background: #ffffff;
        }
        .feature-card strong {
            font-size: 1.1rem;
            color: #0f4c5f;
            display: block;
            margin-bottom: 0.5rem;
        }
        .demo-box {
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            padding: 1rem;
            margin: 1rem 0;
        }
        .zoom-sample {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            margin: 0.75rem 0;
            text-align: center;
            border-left: 3px solid #2c7da0;
        }
        .hover-zoom {
            transition: all 0.2s ease;
            cursor: pointer;
        }
        .hover-zoom:hover {
            zoom: 1.1;
        }
        .image-zoom-card {
            transition: zoom 0.2s;
            display: inline-block;
            background: #f0f0f0;
            padding: 10px;
            border-radius: 12px;
            margin: 10px;
            text-align: center;
        }
        .image-zoom-card:hover {
            zoom: 1.15;
        }
        .inline-demo {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
            margin: 1rem 0;
        }
    </style>
</head>
<body>
<div class="container">

    <h1>🔍 CSS Zoom</h1>
    <div class="last-updated">📅 Last Updated : 17 Mar 2025</div>

    <div class="intro-text">
        The <code>zoom</code> property in CSS scales an element and all its contents — like a magnifying glass. While not part of the official CSS specification, it is widely supported in modern browsers (Chrome, Edge, Firefox, Safari). It accepts decimal numbers, percentages, or the keyword <code>normal</code>. Use it for responsive design, hover effects, and accessibility improvements.
    </div>

    <h2>📌 Syntax & Values</h2>
    <pre><code>zoom: normal | &lt;number&gt; | &lt;percentage&gt;;</code></pre>
    <table class="op-table">
        <thead><tr><th>Value</th><th>Description</th><th>Example</th></tr></thead>
        <tbody>
            <tr><td><code>normal</code></td><td>No zoom (equivalent to 1 or 100%)</td><td><code>zoom: normal;</code></td></tr>
            <tr><td><code>&lt;number&gt;</code></td><td>Scales by factor (1 = 100%, 1.5 = 150%)</td><td><code>zoom: 1.2;</code></td></tr>
            <tr><td><code>&lt;percentage&gt;</code></td><td>Scales by percentage (120% = 1.2x)</td><td><code>zoom: 150%;</code></td></tr>
        </tbody>
    </table>
    <div class="note">
        💡 <strong>Important:</strong> The <code>zoom</code> property affects the layout (unlike <code>transform: scale()</code>). The element takes up its scaled size in the document flow, shifting surrounding content.
    </div>

    <h2>📖 Example 1: Basic Zoom (Number & Percentage)</h2>
    <div class="demo-box">
        <div class="zoom-sample" style="zoom: 1.2; background: #e9f0ff;">🔹 <strong>zoom: 1.2</strong> — This box is scaled to 120% (text, padding, border).</div>
        <div class="zoom-sample" style="zoom: 0.8; background: #ffe6e6;">🔸 <strong>zoom: 0.8</strong> — Shrinks the element to 80% of its original size.</div>
        <div class="zoom-sample" style="zoom: 150%; background: #e6ffe6;">🌿 <strong>zoom: 150%</strong> — Percentage value (1.5x magnification).</div>
        <pre><code>div {
    zoom: 1.2;   /* 120% */
}
p {
    zoom: 80%;   /* 0.8x */
}</code></pre>
    </div>

    <h2>📖 Example 2: Image Gallery Hover Zoom</h2>
    <div class="demo-box">
        <div class="inline-demo">
            <div class="image-zoom-card">
                <img src="https://picsum.photos/id/101/150/150" alt="Sample" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px;">
                <div>Hover to zoom</div>
            </div>
            <div class="image-zoom-card">
                <img src="https://picsum.photos/id/104/150/150" alt="Sample" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px;">
                <div>Hover to zoom</div>
            </div>
        </div>
        <pre><code>.image-card:hover {
    zoom: 1.15;
}</code></pre>
        <div class="note">🎯 Hover over any image above — the entire card scales smoothly, creating an engaging gallery effect.</div>
    </div>

    <h2>📖 Example 3: Zoom on Interactive Elements (Buttons & List Items)</h2>
    <div class="demo-box">
        <button class="hover-zoom" style="background: #2c7da0; color: white; border: none; padding: 12px 24px; border-radius: 40px; font-size: 1.2rem; margin-bottom: 1rem;">✨ Hover to Zoom Button ✨</button>
        <ul style="list-style: none; padding: 0;">
            <li class="hover-zoom" style="padding: 8px; margin: 5px; background: #f8fafc; border-radius: 8px;">🔹 First list item — hover to enlarge</li>
            <li class="hover-zoom" style="padding: 8px; margin: 5px; background: #f8fafc; border-radius: 8px;">🔸 Second item — improves readability & hit area</li>
        </ul>
        <pre><code>.btn:hover, li:hover {
    zoom: 1.05;
}</code></pre>
        <div class="note">📌 Applying <code>zoom</code> on interactive elements improves accessibility for users with motor or visual impairments by increasing hit area and legibility.</div>
    </div>

    <h2>📖 Example 4: Responsive Typography with Zoom</h2>
    <div class="demo-box">
        <div class="zoom-sample" style="zoom: 90%; font-size: 1.2rem;">📱 <strong>Small screen fallback</strong> — zoom: 90% reduces the whole block proportionally.</div>
        <div class="zoom-sample" style="zoom: 110%; font-size: 1.2rem;">🖥️ <strong>Large screen emphasis</strong> — zoom: 110% makes text and spacing larger.</div>
        <pre><code>@media (max-width: 600px) {
    .responsive-text { zoom: 0.9; }
}</code></pre>
        <div class="warning">⚠️ Use <code>zoom</code> on containers responsibly — it affects layout and may cause reflows. For pure text scaling, prefer <code>font-size</code> with <code>vw</code> or <code>clamp()</code>.</div>
    </div>

    <h2>📖 Example 5: Zoom vs Transform Scale</h2>
    <div class="demo-box">
        <div class="inline-demo">
            <div style="text-align: center;">
                <div style="zoom: 1.2; background: #cfe9ff; padding: 15px; width: 150px;">zoom: 1.2</div>
                <div>Affects layout (other elements move)</div>
            </div>
            <div style="text-align: center;">
                <div style="transform: scale(1.2); background: #ffd9b3; padding: 15px; width: 150px;">transform: scale(1.2)</div>
                <div>No layout shift (visually scales only)</div>
            </div>
        </div>
        <pre><code>/* Zoom changes computed space */
.zoom-layout { zoom: 1.2; }

/* Scale only paints larger, layout unaffected */
.transform-scale { transform: scale(1.2); }</code></pre>
        <div class="note">💡 Use <code>zoom</code> when you need the element to occupy its scaled size (e.g., responsive containers). Use <code>transform: scale()</code> for animations or overlays where you don't want to shift siblings.</div>
    </div>

    <h2>⚙️ Practical Use Cases for CSS Zoom</h2>
    <div class="feature-grid">
        <div class="feature-card"><strong>📱 Responsive Design</strong> Scale entire widgets or sidebars for different screen sizes without rewriting complex CSS.</div>
        <div class="feature-card"><strong>🖼️ Image Galleries</strong> Subtle zoom on hover reveals details and enhances engagement.</div>
        <div class="feature-card"><strong>♿ Accessibility</strong> Toggle zoom on main content (e.g., <code>zoom: 1.2</code>) for users with low vision.</div>
        <div class="feature-card"><strong>🖨️ Print Styles</strong> Increase or decrease printed element sizes using <code>zoom</code> in print media queries.</div>
        <div class="feature-card"><strong>✨ Visual Emphasis</strong> Enlarge focused elements (search bar, modal content) temporarily.</div>
    </div>

    <h2>🌐 Browser Support</h2>
    <table class="op-table">
        <thead><tr><th>Browser</th><th>Support (<code>zoom</code>)</th><th>Notes</th></tr></thead>
        <tbody>
            <tr><td>Chrome / Edge</td><td>✅ Full</td><td>Supported since early versions</td></tr>
            <tr><td>Firefox</td><td>✅ Full</td><td>Added for compatibility</td></tr>
            <tr><td>Safari</td><td>✅ Full</td><td>Works in all modern versions</td></tr>
            <tr><td>Opera</td><td>✅ Full</td><td>Same as Chromium</td></tr>
            <tr><td>Internet Explorer</td><td>⚠️ Partial</td><td>Supports zoom but with quirks</td></tr>
        </tbody>
    </table>
    <div class="warning">
        ⚠️ Because <code>zoom</code> is non‑standard, test thoroughly across browsers. For critical layout scaling, consider <code>transform: scale()</code> combined with <code>transform-origin</code> if layout reflow is not desired.
    </div>

    <h2>📝 Best Practices & Considerations</h2>
    <div class="demo-box">
        <ul style="margin-left: 1.5rem;">
            <li><strong>Performance:</strong> Avoid animating <code>zoom</code> on large areas — it triggers layout recalculations. Use <code>transform</code> for smooth animations.</li>
            <li><strong>Percentage vs number:</strong> <code>zoom: 120%</code> and <code>zoom: 1.2</code> are equivalent; choose the readable format.</li>
            <li><strong>Child inheritance:</strong> <code>zoom</code> scales the element and its contents; nested elements with fixed dimensions may appear misaligned.</li>
            <li><strong>Fallback:</strong> Provide standard layouts that work without zoom — treat it as progressive enhancement.</li>
            <li><strong>Accessibility:</strong> Do not rely solely on zoom for critical functionality. Ensure default text sizes are readable (minimum 16px).</li>
        </ul>
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        ✅ <strong>Conclusion:</strong> The CSS <code>zoom</code> property is a simple yet powerful tool for scaling elements and their content. While not part of the official standard, it is widely supported and perfect for hover effects, responsive adjustments, and accessibility improvements. Use it wisely alongside standard CSS transforms for the best results.
    </div>

    <footer>
        🔍 CSS Zoom – Scale any element with ease. Perfect for interactive galleries, responsive design, and better accessibility.
    </footer>
</div>
</body>
</html>
  `
}







                  ]
      },


      {
          id: "CSS-Advance",
          name: "CSS-Advance",
          icon: "⚙️",
          isParent: true,
          subtopics: [
            {
              id: "CSS-Animation",
              name: "CSS Animation",
              description:  String.raw `

                  `
            },

            

                  ]
      },


  
      





    ]
  }
      
