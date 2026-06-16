// src/data/springBootQA.js
export const springBootQA = [
  {
    question: "What is Spring Boot?",
    answer: "Spring Boot is a Spring module that provides RAD (Rapid Application Development) features to the Spring framework. It is used to create stand-alone spring-based applications that you can just run because it needs very little spring configuration."
  },
  {
    question: "What are the advantages of Spring Boot?",
    answer: "Create stand-alone Spring applications that can be started using java -jar. Embed Tomcat, Jetty, or Undertow directly. You don't need to deploy WAR files. It provides opinionated 'starter' POMs to simplify your Maven configuration. It automatically configures Spring whenever possible."
  },
  {
    question: "What are the features of Spring Boot?",
    answer: "Auto-configuration: automatically configures application components based on project dependencies. Embedded web server support: includes embedded servers like Tomcat, Jetty, Undertow. Spring Boot Starter: pre-defined templates simplifying dependency management. Production-ready metrics, health checks, externalized configuration. Spring Boot CLI for rapid development."
  },
  {
    question: "How to create a Spring Boot application using Maven?",
    answer: "There are multiple approaches: Spring Maven Project, Spring Starter Project Wizard, Spring Initializr, and Spring Boot CLI."
  },
  {
    question: "How to create a Spring Boot project using Spring Initializer?",
    answer: "It is a web tool provided by Spring on the official site. You can create a Spring Boot project by providing project details (group, artifact, dependencies, etc.)."
  },
  {
    question: "How to create a Spring Boot project using boot CLI?",
    answer: "Download the CLI tool from the official Spring website, then use commands like `spring init` to generate a project."
  },
  {
    question: "How to create a simple Spring Boot application?",
    answer: "Using STS (Spring Tool Suite) IDE. It includes steps like creating a starter project, adding dependencies, and writing a main application class."
  },
  {
    question: "What are the Spring Boot Annotations?",
    answer: "Spring Boot annotations are metadata that provides instructions to the Spring framework. Key annotations: @SpringBootApplication, @RestController, @RequestMapping, @GetMapping, @PostMapping, @PutMapping, @DeleteMapping."
  },
  {
    question: "What is Spring Boot dependency management?",
    answer: "Spring Boot manages dependencies and configuration automatically. You do not need to specify the version for most dependencies. Spring Boot upgrades all dependencies automatically when you upgrade Spring Boot."
  },
  {
    question: "What are the Spring Boot properties?",
    answer: "Spring Boot provides various properties that can be specified inside `application.properties` file. These properties have default values and you can override them. Used for server port, database connection, etc."
  },
  {
    question: "What are the Spring Boot Starters?",
    answer: "Starters are a set of convenient dependency descriptors that we can include in our application. For example, spring-boot-starter-data-jpa for JPA database access."
  },
  {
    question: "What is a Spring Boot Actuator?",
    answer: "Spring Boot provides an actuator to monitor and manage our application. It exposes HTTP endpoints for health checks, metrics, and more."
  },
  {
    question: "What is thymeleaf?",
    answer: "It is a server-side Java template engine for web applications. Its main goal is to bring elegant natural templates to your web application. It integrates well with Spring Framework."
  },
  {
    question: "How to use thymeleaf?",
    answer: "Add the dependency `spring-boot-starter-thymeleaf` to your pom.xml file. Then use Thymeleaf templates in src/main/resources/templates."
  },
  {
    question: "How to connect Spring Boot to the database using JPA?",
    answer: "Spring Boot provides `spring-boot-starter-data-jpa` starter. Configure database properties in application.properties, then create entity classes and repository interfaces."
  },
  {
    question: "How to connect the Spring Boot application to the database using JDBC?",
    answer: "Use `spring-boot-starter-jdbc` starter. Configure datasource properties, then use JdbcTemplate for database operations."
  },
  {
    question: "What is @RestController annotation in Spring Boot?",
    answer: "@RestController is a stereotype annotation that combines @Controller and @ResponseBody. It is used to create RESTful web services where methods return domain objects directly as JSON/XML."
  },
  {
    question: "What is @RequestMapping annotation in Spring Boot?",
    answer: "@RequestMapping is used to map HTTP requests to handler methods. It can be used at class level (base URL) and method level."
  },
  {
    question: "How to create a Spring Boot application using Spring Starter Project Wizard?",
    answer: "In STS (Spring Tool Suite), use File -> New -> Spring Starter Project. Provide project details and select dependencies, then the wizard generates the project."
  },
  {
    question: "What are the major differences between Spring Vs. Spring Boot?",
    answer: "Spring is a web application framework requiring manual configuration. Spring Boot is a Spring module that provides auto-configuration, embedded servers, and starter dependencies to create stand-alone applications with minimal configuration."
  },
  {
    question: "In how many ways Spring Boot applications can be packaged for deployment?",
    answer: "Executable JAR (Maven, Gradle, or CLI) for cloud/container deployment, or WAR (Maven/Gradle) for traditional Java application servers."
  },
  {
    question: "What are Spring Boot profiles, and how are they useful?",
    answer: "Profiles define sets of configuration properties for different environments (dev, test, prod). Use profile-specific files like application-dev.properties. Spring Boot activates the appropriate profile based on active environment."
  },
  {
    question: "How can you monitor and manage Spring Boot applications in a production environment?",
    answer: "Using Spring Boot Actuator for health checks, metrics, logging. Integrate with Prometheus and Grafana for deeper monitoring."
  },
  {
    question: "What is the purpose of the Spring Boot CLI?",
    answer: "Command Line Interface for rapid prototyping. Allows creating, running, and managing Spring Boot applications with commands like `spring run`, `spring test`, `spring jar`, `spring init`."
  },
  {
    question: "What is the purpose of using @ComponentScan annotation in the Class Files?",
    answer: "@ComponentScan specifies packages to scan for annotated components (e.g., @Component, @Service, @Repository). It helps Spring detect and register beans automatically."
  },
  {
    question: "What are Spring Boot Actuator endpoints commonly used for monitoring and management?",
    answer: "/actuator/health (health status), /actuator/info (custom info), /actuator/metrics (memory, request counts), /actuator/env (environment properties), /actuator/loggers (dynamic log levels)."
  },
  {
    question: "How do you enable an SSL certificate in a Spring Boot application?",
    answer: "Get certificate from CA, set SSL properties in application.properties: `server.ssl.key-store`, `server.ssl.key-store-password`, `server.ssl.key-alias`, then configure HTTPS port."
  },
  {
    question: "What is Spring Boot caching support, and why is it useful?",
    answer: "Spring Boot provides caching annotations (@Cacheable, @CacheEvict, @CachePut) to store frequently accessed data in memory, improving performance. Supports Ehcache, Caffeine, Redis."
  },
  {
    question: "How can we schedule tasks in a Spring Boot application?",
    answer: "Use @Scheduled annotation on a method in a Spring-managed bean, with cron expression or fixed delay. Also enable scheduling with @EnableScheduling."
  },
  {
    question: "Explain the Spring Boot application structure.",
    answer: "src/main/java (source code), src/main/resources (config, templates), src/test/java (test cases), src/test/resources (test resources), pom.xml (dependencies)."
  },
  {
    question: "What is Spring Boot DevTools, and how does it help in development?",
    answer: "DevTools provides automatic restart, live reload, and improved error reporting during development. Eliminates manual restarts for faster development."
  },
  {
    question: "Is it possible to disable the default web server in the Spring Boot application?",
    answer: "Yes, set `server.port = -1` in application.properties, or exclude embedded server dependencies from the starter."
  },
  {
    question: "What type of applications can we design with the Spring Boot?",
    answer: "Web applications, non-web applications, console applications, batch applications, and microservices."
  },
  {
    question: "What are the differences between RequestMapping and GetMapping?",
    answer: "@RequestMapping can handle various HTTP methods (GET, POST, etc.) with method parameter; @GetMapping is a specialized version for GET requests only. Example: @GetMapping('/path') vs @RequestMapping(value='/path', method=RequestMethod.GET)."
  },
  {
    question: "What are the differences between @Controller and @RestController?",
    answer: "@Controller identifies a controller class for web applications, typically used with view templates. @RestController is a combination of @Controller and @ResponseBody, used for REST APIs where methods return data (JSON/XML) directly."
  },
  {
    question: "How to enable the debugging log in the Spring Boot application?",
    answer: "Three ways: start with --debug switch, set `debug=true` in application.properties, or set `logging.level.org.springframework=DEBUG`."
  },
  {
    question: "How to handle data validations in the Spring Boot application?",
    answer: "Use Bean Validation annotations like @NotNull, @Size, @Pattern on model fields. Combine with @Valid in controller methods. Spring automatically triggers validation and returns errors."
  },
  {
    question: "What do you mean by Bean scope in Spring Boot?",
    answer: "Bean scopes define lifecycle and visibility: Singleton (single instance per context), Prototype (new instance each request), Request (per HTTP request), Session (per HTTP session), and custom scopes."
  },
  {
    question: "How to optimize Spring Boot application startup time?",
    answer: "Reduce number of beans loaded, use lazy initialization, restrict unused auto-configurations, analyze startup logs to identify slow components."
  },
  {
    question: "How do we manage database transactions in a Spring Boot application?",
    answer: "Use @Transactional annotation on service methods. Spring Boot automatically manages transaction boundaries with the help of JPA or JDBC starters."
  },
  {
    question: "How do you deal with Spring Boot memory management?",
    answer: "Monitor memory with Actuator endpoints, configure heap size and GC settings, detect memory leaks using profiling tools, optimize code to reduce memory footprint."
  },
  {
    question: "Which tools and libraries are helpful for Spring Boot development?",
    answer: "Spring Tool Suite (STS), IntelliJ IDEA, Lombok, MapStruct, and Spring Boot DevTools."
  },
  {
    question: "How to activate the debugging Log in the Spring Boot application?",
    answer: "Add `logging.level.org.springframework=DEBUG` in application.properties."
  },
  {
    question: "What is the benefit of externalized configuration supported by Spring Boot?",
    answer: "Configuration properties can be stored outside application code (application.properties or YAML) and changed without recompilation. Supports environment-specific config via profiles."
  },
  {
    question: "How does the Constructor differ from the Setter Injection?",
    answer: "Constructor injection ensures immutability and mandatory dependencies; setter injection is useful for optional dependencies but may lead to inconsistent state if not handled properly."
  },
  {
    question: "Excluding the Tomcat server, name any two embedded servers supported by Spring Boot.",
    answer: "Jetty and Undertow."
  },
  {
    question: "How can we secure a Spring Boot application?",
    answer: "Using Spring Security, OAuth2, JWT (JSON Web Tokens), and enabling HTTPS for secure communication."
  },
  {
    question: "How to configure a database in Spring Boot?",
    answer: "In application.properties: `spring.datasource.url=jdbc:mysql://localhost:3306/db_name`, `spring.datasource.username=root`, `spring.datasource.password=`, `spring.jpa.hibernate.ddl-auto=update`."
  },
  {
    question: "What are the advantages of the YAML file compared to the application.properties file, and what are the different ways to load it?",
    answer: "YAML is more readable, supports maps, lists, and hierarchical structures. It avoids repetition. Can be loaded via application.yml or profile-specific YAML files (e.g., application-dev.yml)."
  },
  {
    question: "Give some examples of applications or services that use Spring Boot.",
    answer: "Udemy, Paytm, Trivago, Intuit, Cred, Rappi, Quinto Andar, MercadoLibre, PedidosYa, iFood."
  }
];