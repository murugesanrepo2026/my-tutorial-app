// src/data/springQA.js
export const springQA = [
  {
    question: "What is Spring?",
    answer: "It is a lightweight, loosely coupled and integrated framework for developing enterprise applications in java."
  },
  {
    question: "What are the advantages of spring framework?",
    answer: "Predefined Templates, Loose Coupling, Easy to test, Lightweight, Fast Development, Powerful Abstraction, Declarative support."
  },
  {
    question: "What are the modules of spring framework?",
    answer: "Test, Spring Core Container, AOP (Aspects and Instrumentation), Data Access/Integration, Web."
  },
  {
    question: "What is IOC and DI?",
    answer: "IOC (Inversion of Control) and DI (Dependency Injection) is a design pattern to provide loose coupling. It removes the dependency from the program. With DI, objects are given their dependencies instead of creating them internally."
  },
  {
    question: "What is the role of IOC container in spring?",
    answer: "IOC container is responsible to: create the instance, configure the instance, and assemble the dependencies."
  },
  {
    question: "What are the types of IOC container in spring?",
    answer: "BeanFactory and ApplicationContext."
  },
  {
    question: "What is the difference between BeanFactory and ApplicationContext?",
    answer: "BeanFactory is the basic container whereas ApplicationContext is the advanced container. ApplicationContext extends BeanFactory and provides more facilities such as integration with Spring AOP, message resource handling for i18n, etc."
  },
  {
    question: "What is the difference between constructor injection and setter injection?",
    answer: "Constructor injection: no partial injection, doesn't override setter property, creates new instance on modification, better for many properties. Setter injection: supports partial injection, overrides constructor property if both defined, doesn't create new instance on change, better for few properties."
  },
  {
    question: "What is autowiring in spring? What are the autowiring modes?",
    answer: "Autowiring enables automatic bean injection without explicit wiring. Modes: no (default, no autowiring), byName (based on property name), byType (based on property type), constructor (using constructor)."
  },
  {
    question: "What are the different bean scopes in spring?",
    answer: "Singleton (single instance per container, default), prototype (new instance each request), request (per HTTP request), session (per HTTP session), globalsession (per HTTP global session, portlet context only)."
  },
  {
    question: "In which scenario, you will use singleton and prototype scope?",
    answer: "Singleton scope should be used with EJB stateless session bean and prototype scope with EJB stateful session bean."
  },
  {
    question: "What are the transaction management supports provided by spring?",
    answer: "Programmatic Transaction Management (for few operations) and Declarative Transaction Management (for many operations)."
  },
  {
    question: "What are the advantages of JdbcTemplate in spring?",
    answer: "Less code: you don't need to create connection, statement, start/commit transaction, close connection. You can execute queries directly."
  },
  {
    question: "What are classes for spring JDBC API?",
    answer: "JdbcTemplate, SimpleJdbcTemplate, NamedParameterJdbcTemplate, SimpleJdbcInsert, SimpleJdbcCall."
  },
  {
    question: "How can you fetch records by spring JdbcTemplate?",
    answer: "Using the query method of JdbcTemplate with ResultSetExtractor or RowMapper interfaces."
  },
  {
    question: "What is the advantage of NamedParameterJdbcTemplate?",
    answer: "It uses named parameters instead of '?' (question mark) which is easier to remember and more readable."
  },
  {
    question: "What is the advantage of SimpleJdbcTemplate?",
    answer: "It supports var-args and autoboxing, simplifying code."
  },
  {
    question: "What is AOP?",
    answer: "AOP (Aspect Oriented Programming) is a methodology that divides program logic into pieces or concerns, increasing modularity. The key unit is Aspect."
  },
  {
    question: "What are the advantages of spring AOP?",
    answer: "AOP allows dynamic addition or removal of concerns before/after business logic. It is pluggable and easy to maintain."
  },
  {
    question: "What are the AOP terminology?",
    answer: "JoinPoint, Advice, Pointcut, Aspect, Introduction, Target Object, Interceptor, AOP Proxy, Weaving."
  },
  {
    question: "What is JoinPoint?",
    answer: "JoinPoint is any point in your program such as field access, method execution, exception handling, etc."
  },
  {
    question: "Does spring framework support all JoinPoints?",
    answer: "No, spring framework supports method execution joinpoint only."
  },
  {
    question: "What is Advice?",
    answer: "Advice represents action taken by aspect."
  },
  {
    question: "What are the types of advice in AOP?",
    answer: "Before Advice, After Advice, After Returning Advice, Throws Advice, Around Advice."
  },
  {
    question: "What is Pointcut?",
    answer: "Pointcut is an expression language of Spring AOP that matches joinpoints."
  },
  {
    question: "What is Aspect?",
    answer: "Aspect is a class in Spring AOP that contains advices and joinpoints."
  },
  {
    question: "What is Introduction?",
    answer: "Introduction represents introduction of new fields and methods for a type."
  },
  {
    question: "What is target object?",
    answer: "Target Object is a proxy object that is advised by one or more aspects."
  },
  {
    question: "What is interceptor?",
    answer: "Interceptor is a class like aspect that contains one advice only."
  },
  {
    question: "What is weaving?",
    answer: "Weaving is a process of linking aspect with other application."
  },
  {
    question: "Does spring perform weaving at compile time?",
    answer: "No, spring framework performs weaving at runtime."
  },
  {
    question: "What are the AOP implementation?",
    answer: "Spring AOP, Apache AspectJ, JBoss AOP."
  },
  {
    question: "What is the front controller class of Spring MVC?",
    answer: "The DispatcherServlet class works as the front controller in Spring MVC."
  },
  {
    question: "What does @Controller annotation?",
    answer: "The @Controller annotation marks the class as controller class. It is applied on the class."
  },
  {
    question: "What does @RequestMapping annotation?",
    answer: "The @RequestMapping annotation maps the request with the method. It is applied on the method."
  },
  {
    question: "What does the ViewResolver class?",
    answer: "The View Resolver class resolves the view component to be invoked for the request. It defines prefix and suffix properties to resolve the view component."
  },
  {
    question: "Which ViewResolver class is widely used?",
    answer: "The org.springframework.web.servlet.view.InternalResourceViewResolver class is widely used."
  },
  {
    question: "Does spring MVC provide validation support?",
    answer: "Yes, Spring MVC provides validation support using JSR-303 (Bean Validation) and custom validators."
  }
];