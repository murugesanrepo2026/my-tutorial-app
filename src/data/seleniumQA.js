// src/data/seleniumQA.js
export const seleniumQA = [
  {
    question: "What is test automation or automation testing?",
    answer: "Automation testing uses automation tools to write and execute test cases without manual involvement. It enables specialized tools to automate test execution, compare actual vs expected results, and generate detailed test reports."
  },
  {
    question: "What are the advantages of automation testing?",
    answer: "Supports functional and performance testing, repeated test execution, parallel execution, large test matrix, improves accuracy (no human errors), saves time and money."
  },
  {
    question: "Name some commonly used Functional Automation Testing tools.",
    answer: "Teleric Test Studio, TestingWhiz, HPE UFT (formerly QTP), Tosca Testsuite, Watir, Quick Test Professional (HP), Rational Robot (IBM), Coded UI (Microsoft), Selenium (open source), Auto It (open source)."
  },
  {
    question: "Name some commonly used Non-Functional Automation Testing tools.",
    answer: "Load Runner (HP), JMeter (Apache), Burp Suite (PortSwigger), Acunetix (Acunetix)."
  },
  {
    question: "What is Selenium?",
    answer: "Selenium is a portable open-source framework for software testing, providing a playback tool for authoring functional tests without learning a test scripting language. Developed by Jason Huggins in 2004 at ThoughtWorks."
  },
  {
    question: "What are the different components of Selenium?",
    answer: "Selenium IDE, Selenium Remote Control (deprecated), WebDriver, Selenium Grid."
  },
  {
    question: "List the programming languages, browsers, and operating systems supported by Selenium.",
    answer: "Languages: C#, Java, Python, PHP, Ruby, Perl, JavaScript. OS: Android, iOS, Windows, Linux, Mac, Solaris. Browsers: Chrome, Firefox, IE, Edge, Opera, Safari."
  },
  {
    question: "What are the significant changes/upgrades in various Selenium versions?",
    answer: "v1.0: IDE, RC, Grid. v2.0: WebDriver introduced replacing RC. v3.0: new features, includes IDE, WebDriver, Grid."
  },
  {
    question: "List some test types supported by Selenium.",
    answer: "Functional, Regression, Sanity, Smoke, Responsive, Cross Browser, UI (black box), Integration Testing."
  },
  {
    question: "What is Selenium IDE?",
    answer: "Selenium IDE is a Firefox extension providing record and playback functionality, allowing export of scripts to languages like HTML, Java, Ruby, Python, C#, JUnit, TestNG. Has limited scope and portable issues."
  },
  {
    question: "What do you mean by Selenese?",
    answer: "Selenese are Selenium commands used to run tests (e.g., `open(url)`). A sequence of Selenese commands forms a test script."
  },
  {
    question: "What are the different ways of locating a web element in Selenium?",
    answer: "Locators: ID, ClassName, Name, TagName, LinkText, PartialLinkText, Xpath, CSS Selector, DOM."
  },
  {
    question: "How many types of WebDriver APIs are available in Selenium?",
    answer: "AndroidDriver, ChromeDriver, EventFiringWebDriver, FirefoxDriver, HtmlUnitDriver, InternetExplorerDriver, iPhoneDriver, iPhoneSimulatorDriver, RemoteWebDriver."
  },
  {
    question: "List some automation tools that can be integrated with Selenium for continuous testing.",
    answer: "Maven, Jenkins, Docker, TestNG, JUnit."
  },
  {
    question: "What do you mean by assertion in Selenium?",
    answer: "Assertion is a verification point that verifies the application state conforms to expectations. Types: assert, verify, waitFor."
  },
  {
    question: "Explain the difference between assert and verify commands.",
    answer: "Assert stops execution on failure; verify continues execution even if condition fails."
  },
  {
    question: "What do you mean by XPath?",
    answer: "XPath (XML Path) is a language to query XML documents, used to locate elements in Selenium when no suitable id/name attribute exists. Provides XPath Absolute and XPath Attributes."
  },
  {
    question: "Explain XPath Absolute and XPath attributes.",
    answer: "XPath Absolute: full path from root HTML tag, syntax `//html/body/tag1[index]/...`. XPath Attributes: uses attributes, syntax `//htmltag[@attribute1='value1']`, recommended when no id/name."
  },
  {
    question: "What is the difference between '/' and '//' in XPath?",
    answer: "Single slash '/' creates absolute path. Double slash '//' creates relative path."
  },
  {
    question: "What are the different annotations used in Selenium?",
    answer: "JUnit annotations: @Test, @Before, @After, @Ignore, @BeforeClass, @AfterClass, @RunWith."
  },
  {
    question: "What are the WebDriver supported Mobile Testing Drivers?",
    answer: "AndroidDriver, IphoneDriver, OperaMobileDriver."
  },
  {
    question: "What are the popular programming languages supported by Selenium WebDriver?",
    answer: "JAVA, PHP, Python, C#, Ruby, Perl."
  },
  {
    question: "What is the difference between type keys and type commands?",
    answer: "TypeKeys() triggers JavaScript event in most cases; .type() does not."
  },
  {
    question: "What is the difference between 'type' and 'typeAndWait' command?",
    answer: "`type` types into text box; `typeAndWait` waits for page reload after typing. Use `type` when no page reload occurs."
  },
  {
    question: "What is the difference between findElement() and findElements()?",
    answer: "findElement() returns first matching WebElement; findElements() returns list of all matching WebElements."
  },
  {
    question: "What is wait? How many types of waits in selenium?",
    answer: "Waits handle AJAX-based apps. Two types: Implicit Wait and Explicit Wait."
  },
  {
    question: "What is the main disadvantage of implicit wait?",
    answer: "Slows down test performance. If element appears after the set timeout, test fails."
  },
  {
    question: "What is Selenium Grid?",
    answer: "Selenium Grid distributes tests across multiple machines simultaneously, enabling parallel execution on different browsers/OS, reducing execution time."
  },
  {
    question: "How can we launch different browsers in Selenium WebDriver?",
    answer: "Create an instance of the driver class: `WebDriver driver = new FirefoxDriver();`"
  },
  {
    question: "Write a code snippet to launch Firefox browser in WebDriver.",
    answer: "`System.setProperty('webdriver.gecko.driver', path); WebDriver driver = new FirefoxDriver(); driver.get('http://tpointtech.com'); driver.quit();`"
  },
  {
    question: "Write a code snippet to launch Chrome browser in WebDriver.",
    answer: "`System.setProperty('webdriver.chrome.driver', path); WebDriver driver = new ChromeDriver(); driver.get('http://tpointtech.com'); driver.quit();`"
  },
  {
    question: "Write a code snippet to launch Internet Explorer browser in WebDriver.",
    answer: "`System.setProperty('webdriver.ie.driver', path); WebDriver driver = new InternetExplorerDriver(); driver.get('http://tpointtech.com'); driver.quit();`"
  },
  {
    question: "Write a code snippet to perform right-click on an element in WebDriver.",
    answer: "`Actions action = new Actions(driver); WebElement element = driver.findElement(By.id('elementId')); action.contextClick(element).perform();`"
  },
  {
    question: "Write a code snippet to perform mouse hover in WebDriver.",
    answer: "`Actions action = new Actions(driver); WebElement element = driver.findElement(By.id('elementId')); action.moveToElement(element).perform();`"
  },
  {
    question: "How do you perform drag and drop operation in WebDriver?",
    answer: "`Actions builder = new Actions(driver); Action dragAndDrop = builder.clickAndHold(fromElement).moveToElement(toElement).release(toElement).build(); dragAndDrop.perform();`"
  },
  {
    question: "What are the different methods to refresh a web page in WebDriver?",
    answer: "1. `driver.navigate().refresh();` 2. `driver.get(driver.getCurrentUrl());` 3. `driver.navigate().to(driver.getCurrentUrl());` 4. `driver.findElement(locator).sendKeys(Keys.F5);` 5. `driver.findElement(locator).sendKeys('\\uE035');`"
  },
  {
    question: "Write code to navigate back and forward in browser history.",
    answer: "Back: `driver.navigate().back();` Forward: `driver.navigate().forward();`"
  },
  {
    question: "How to invoke an application in WebDriver?",
    answer: "`driver.get('url');` or `driver.navigate().to('url');`"
  },
  {
    question: "What are the benefits of Automation Testing?",
    answer: "Repeated test execution, parallel execution, unattended execution, improved accuracy, saves time and money."
  },
  {
    question: "How can we get text of a web element?",
    answer: "`String text = driver.findElement(By.id('Text')).getText();`"
  },
  {
    question: "How to select value in a dropdown?",
    answer: "Using Select class: `Select select = new Select(driver.findElement(By.id('id'))); select.selectByValue('value'); select.selectByVisibleText('text'); select.selectByIndex(index);`"
  },
  {
    question: "What are the different types of navigation commands?",
    answer: "`navigate().back()`, `navigate().forward()`, `navigate().refresh()`, `navigate().to(url)`."
  },
  {
    question: "How to deal with frames in WebDriver?",
    answer: "Switch using id: `driver.switchTo().frame('id')`; index: `driver.switchTo().frame(0)`; name: `driver.switchTo().frame('name')`; WebElement: `driver.switchTo().frame(element)`. Return to parent: `driver.switchTo().defaultContent();`"
  },
  {
    question: "Is there an HtmlUnitDriver for .NET?",
    answer: "Use RemoteWebDriver with desired capabilities: `IWebDriver driver = new RemoteWebDriver(DesiredCapabilities.HtmlUnit());` For Firefox implementation: `RemoteWebDriver(DesiredCapabilities.HtmlUnitWithJavaScript())`"
  },
  {
    question: "How can you redirect browsing from a browser through some proxy?",
    answer: "Use Proxy class: `String PROXY = '199.201.125.147:8080'; Proxy proxy = new Proxy(); proxy.setHTTPProxy(PROXY); DesiredCapabilities cap = new DesiredCapabilities(); cap.setCapability(CapabilityType.PROXY, proxy); WebDriver driver = new FirefoxDriver(cap);`"
  },
  {
    question: "What is POM (Page Object Model)? What are its advantages?",
    answer: "POM is a design pattern creating an object directory for web UI elements. Advantages: separates operations from verification (improves readability), reusability of Object Repository across tests, code reusability."
  },
  {
    question: "How to capture screenshot in WebDriver?",
    answer: "`File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE); FileUtils.copyFile(scrFile, new File('C:\\\\Screenshot\\\\Scr.jpg'));`"
  },
  {
    question: "How to type text in a textbox using Selenium?",
    answer: "`WebElement username = driver.findElement(By.id('Email')); username.sendKeys('text');`"
  },
  {
    question: "How can you find if an element is displayed on the screen?",
    answer: "Methods: `isDisplayed()`, `isSelected()`, `isEnabled()`. Example: `boolean displayed = driver.findElement(By.id('id')).isDisplayed();`"
  },
  {
    question: "How to click on a hyperlink using linkText?",
    answer: "`driver.findElement(By.linkText('Google')).click();` or partial link text: `driver.findElement(By.partialLinkText('Goo')).click();`"
  }
];