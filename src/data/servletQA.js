// src/data/servletQA.js
export const servletQA = [
  {
    question: "How many objects of a servlet is created?",
    answer: "Only one object at the time of first request by servlet or web container."
  },
  {
    question: "What is the life-cycle of a servlet?",
    answer: "Servlet is loaded → servlet is instantiated → servlet is initialized → service the request → servlet is destroyed."
  },
  {
    question: "What are the life-cycle methods for a servlet?",
    answer: "init(ServletConfig config): invoked once when first request comes, used to initialize. service(ServletRequest, ServletResponse): invoked at each request to service the request. destroy(): invoked once when servlet is unloaded."
  },
  {
    question: "Who is responsible to create the object of servlet?",
    answer: "The web container or servlet container."
  },
  {
    question: "When servlet object is created?",
    answer: "At the time of first request."
  },
  {
    question: "What is difference between Get and Post method?",
    answer: "GET: limited data (sent in header), not secure (data in URL), can be bookmarked, idempotent, more efficient. POST: large data (sent in body), secure, cannot be bookmarked, non-idempotent, less efficient."
  },
  {
    question: "What is difference between PrintWriter and ServletOutputStream?",
    answer: "PrintWriter is a character-stream class for character-based information. ServletOutputStream is a byte-stream class that can write primitive values as well as character-based information."
  },
  {
    question: "What is difference between GenericServlet and HttpServlet?",
    answer: "GenericServlet is protocol independent. HttpServlet is HTTP protocol specific and provides additional functionalities like state management."
  },
  {
    question: "What is servlet collaboration?",
    answer: "When one servlet communicates to another servlet, it is known as servlet collaboration. Ways: RequestDispatcher interface, sendRedirect() method, etc."
  },
  {
    question: "What is the purpose of RequestDispatcher Interface?",
    answer: "It provides facility to dispatch the request to another resource (html, servlet, or jsp) and can also include content of another resource."
  },
  {
    question: "Can you call a jsp from the servlet?",
    answer: "Yes, using RequestDispatcher interface: RequestDispatcher rd = request.getRequestDispatcher('/login.jsp'); rd.forward(request, response);"
  },
  {
    question: "Difference between forward() method and sendRedirect() method?",
    answer: "forward(): sends same request, works at server side, within server only. sendRedirect(): sends new request (uses browser URL bar), works at client side, within and outside server."
  },
  {
    question: "What is difference between ServletConfig and ServletContext?",
    answer: "ServletConfig object is created per servlet. ServletContext object is created per web application."
  },
  {
    question: "What is Session Tracking?",
    answer: "Session Tracking is a way to maintain state of a user. HTTP is stateless, so we need session tracking to recognize a particular user across multiple requests."
  },
  {
    question: "What are Cookies?",
    answer: "A cookie is a small piece of information persisted between multiple client requests. It has a name, value, and optional attributes like comment, path, domain, max age, version."
  },
  {
    question: "What is difference between Cookies and HttpSession?",
    answer: "Cookie works at client side. HttpSession works at server side."
  },
  {
    question: "What is filter?",
    answer: "A filter is an object invoked at preprocessing or postprocessing of a request. It is pluggable."
  },
  {
    question: "How can we perform any action at the time of deploying the project?",
    answer: "By using ServletContextListener interface."
  },
  {
    question: "What is the disadvantage of cookies?",
    answer: "Cookies will not work if cookies are disabled from the browser."
  },
  {
    question: "How can we upload the file to the server using servlet?",
    answer: "One way is using MultipartRequest class provided by third-party libraries."
  },
  {
    question: "What is load-on-startup in servlet?",
    answer: "The load-on-startup element in web.xml is used to load the servlet at the time of deploying the project or server start, saving time for the first request response."
  },
  {
    question: "What if we pass negative value in load-on-startup?",
    answer: "It will not affect the container; the servlet will be loaded at first request."
  },
  {
    question: "What is war file?",
    answer: "A war (web archive) file specifies web elements. A servlet or JSP project can be converted into a war file for faster movement and deployment."
  },
  {
    question: "How to create war file?",
    answer: "Using jar tool from JDK/bin: `jar -cvf abc.war *` (converts all current directory files into abc.war). IDEs like Eclipse/Netbeans can also export as war."
  },
  {
    question: "What are the annotations used in Servlet 3?",
    answer: "@WebServlet (for servlet class), @WebListener (for listener class), @WebFilter (for filter class)."
  },
  {
    question: "Which event is fired at the time of project deployment and undeployment?",
    answer: "ServletContextEvent."
  },
  {
    question: "Which event is fired at the time of session creation and destroy?",
    answer: "HttpSessionEvent."
  },
  {
    question: "Which event is fired at the time of setting, getting or removing attribute from application scope?",
    answer: "ServletContextAttributeEvent."
  },
  {
    question: "What is the use of welcome-file-list?",
    answer: "It is used to specify the welcome file for the project."
  },
  {
    question: "What is the use of attribute in servlets?",
    answer: "Attribute is a map object used to set, get, or remove in request, session, or application scope. It is mainly used to share information between servlets."
  }
];