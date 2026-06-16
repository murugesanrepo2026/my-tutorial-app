// src/data/microservicesQA.js
export const microservicesQA = [
  {
    question: "What are Microservices? / What do you understand by Microservices?",
    answer: "Microservices are an architectural approach that builds applications as a collection of small, loosely coupled, independently deployable services organized around business capabilities. They are highly maintainable, testable, and owned by small teams."
  },
  {
    question: "What are the most significant benefits of using microservices?",
    answer: "Microservices allow rapid building of new app components to meet changing business needs. Each service runs a unique process, communicates via lightweight mechanisms like containers, and enables technology stack evolution."
  },
  {
    question: "What are the three commonly used tools for Microservices?",
    answer: "Wiremock, Docker, and Hystrix."
  },
  {
    question: "What are the main components of Microservices?",
    answer: "Containers, Clustering, Orchestration, IaC (Infrastructure as Code), Cloud Infrastructure, API Gateway, Enterprise Service Bus, and Service Delivery."
  },
  {
    question: "How does a Microservice architecture work?",
    answer: "An application is fragmented into loosely coupled modules, each performing a distinct function. They are distributed across clouds/data centers, independently replaceable/updatable, and the application can grow with requirements."
  },
  {
    question: "What are the main advantages of using Microservices?",
    answer: "Technology diversity, fault isolation (failure doesn't bring down whole system), support for small parallel teams, reduced deployment time, and independent deployment."
  },
  {
    question: "What do you understand by Monolithic Architecture?",
    answer: "Monolithic architecture is like a big container containing all software components of an application clubbed inside a single package."
  },
  {
    question: "What are the biggest challenges in Microservice deployment?",
    answer: "Business challenges: heavy investment, infrastructure setup, operations overhead, staff selection. Technical challenges: inter-service communication, deployment complexity, testing/debugging difficulty, need for automation, skilled professionals."
  },
  {
    question: "What do you understand by Spring Cloud?",
    answer: "Spring Cloud is an integration software used to integrate with external systems, allowing a microservices framework to build applications that perform restricted amounts of data processing."
  },
  {
    question: "What are the main differences between Microservices and Monolithic Architecture?",
    answer: "Microservices: fast startup, loosely coupled, changes in one data model don't affect others, focuses on products. Monolithic: slow startup, tightly coupled, changes affect entire database, focuses on whole project."
  },
  {
    question: "In which cases microservice architecture is best suited?",
    answer: "Microservice architecture is best suited for all tech devices such as desktop, web, mobile devices, Smart TVs, and Wearable devices."
  },
  {
    question: "What are the most significant advantages and disadvantages of using Microservices?",
    answer: "Advantages: improved scalability, increased agility, localized complexity, fault isolation, easier debugging/maintenance, better developer-business communication, smaller teams, easy technology upgrades. Disadvantages: complexity as whole project, requires accurate pre-planning, hard-to-calculate modular dependencies, hard to control third-party apps, tracking interdependencies, security risks, complex end-to-end testing, deployment challenges."
  },
  {
    question: "Which are some famous companies that are using Microservice architecture?",
    answer: "Twitter, Netflix, and Amazon are using microservices architecture instead of monolithic architecture."
  },
  {
    question: "What do you understand by RESTful?",
    answer: "REST (Representational State Transfer) is an architectural style that helps computer systems communicate over the internet. RESTful web services make microservices easier to understand and implement."
  },
  {
    question: "What are the different strategies used in Microservices deployment?",
    answer: "Multiple Service Instance per Host, Service Instance per Host, Service Instance per Container, and Serverless Deployment (using Lambda functions)."
  },
  {
    question: "What are the three types of tests used in Microservices?",
    answer: "Bottom Level Tests (performance, unit - automated), Middle-Level Tests (exploratory, stress, usability), Top Level Tests (acceptance tests for stakeholder awareness)."
  },
  {
    question: "What is the main difference between SOA and the Microservices Architecture?",
    answer: "SOA (Service Oriented Architecture) is a collection of services communicating via data passing or coordination. Microservices Architecture is a collection of small functional modules that are independently deployable, scalable, target specific business goals, and communicate over standard protocols."
  },
  {
    question: "What is a Client certificate? What is its usage?",
    answer: "A client certificate is a digital certificate used to make authenticated requests to a remote server. A certificate is generated for each microservice."
  },
  {
    question: "What do you understand by Domain-Driven Design?",
    answer: "Domain-Driven Design is an architectural style based on Object-Oriented Analysis, used to develop complex systems by connecting related components. Principles: focus on core domain and logic, base designs on domain models, collaborate with domain experts."
  },
  {
    question: "What is the use of PACT in Microservices architecture?",
    answer: "PACT is an open-source tool used for testing interactions between service providers and consumers, increasing the reliability of microservices applications."
  },
  {
    question: "What do you understand by OAuth?",
    answer: "OAuth (Open Authorization) is a protocol that allows accessing client applications on HTTP for third-party providers (GitHub, Facebook, etc.), enabling resource sharing without credentials."
  },
  {
    question: "What is Spring Boot? Why is it used?",
    answer: "Spring Boot is an open-source Java framework for developing stand-alone, production-grade Spring applications. It reduces development time, increases productivity, and auto-configures based on dependencies."
  },
  {
    question: "What is the method to override a Spring Boot project's default properties?",
    answer: "Specify properties in application.properties. For Spring MVC: suffix (mvc.view.suffix: .jsp) and prefix (mvc.view.prefix: /WEB-INF/)."
  },
  {
    question: "What do you understand by end-to-end Microservices testing?",
    answer: "End-to-end testing validates that every process in the workflow is functioning correctly and ensures the system works as a whole fulfilling all requirements."
  },
  {
    question: "What is the difference between Coupling and Cohesion?",
    answer: "Coupling is the relationship between modules (highly coupled, loosely coupled, uncoupled). Loose coupling through interfaces is best. Cohesion is the relationship within a module; high cohesion means a module performs a specific task efficiently without needing other modules."
  },
  {
    question: "What is the use of containers in Microservices?",
    answer: "Containers are the easiest and effective method to manage microservice-based applications. Docker is an example, allowing encapsulation of microservices in container images with dependencies."
  },
  {
    question: "What is Spring Cloud? What problems can be solved by using Spring Cloud?",
    answer: "Spring Cloud provides tools for common distributed system patterns: configuration management, circuit breakers, service discovery, intelligent routing, etc. Solves network issues, latency, bandwidth, security, redundancy, load balancing, performance, and service discovery issues."
  },
  {
    question: "What do you understand by semantic monitoring in Microservices architecture?",
    answer: "Semantic monitoring combines automated tests with application monitoring to find out why your business is not getting more profits."
  },
  {
    question: "What do you understand by the Distributed Transaction?",
    answer: "A distributed transaction has two or more network hosts. A transaction manager handles development and coordination, with peer transaction managers communicating using subordinate/superior relationships."
  },
  {
    question: "What is the full form of CDC? What is its usage?",
    answer: "CDC stands for Consumer-Driven Contract. It is a pattern used for developing microservices so that external systems can use them efficiently."
  },
  {
    question: "What is Reactive Extension in Microservices?",
    answer: "Reactive Extension (Rx) is a design pattern that allows collecting results by calling multiple services and compiling a combined response. It works opposite to legacy flows."
  },
  {
    question: "How can you configure Spring Boot application login?",
    answer: "Configure logging by specifying logging.level in application.properties. It is pre-configured as console output."
  },
  {
    question: "What do you understand by the term 'Continuous Monitoring'?",
    answer: "Continuous monitoring is used to search compliance and risk issues associated with a company's operational and financial environment, containing human processes and working systems."
  },
  {
    question: "What is Mike Cohn's Test Pyramid?",
    answer: "Mike Cohn's Test Pyramid maximizes automation at all testing levels: unit testing (fast, isolated), service level testing, UI testing (slower, integration-focused)."
  },
  {
    question: "How independent micro-services communicate with each other?",
    answer: "Most developers use HTTP/REST with JSON or Binary protocol while using any communication protocol according to project needs."
  },
  {
    question: "How can you implement a Spring Security in a Spring Boot Application?",
    answer: "Add spring-boot-starter-security to pom.xml and create a Spring config class extending WebSecurityConfigurerAdapter to override required methods."
  },
  {
    question: "What do you understand by ubiquitous language?",
    answer: "Ubiquitous Language (UL) is a common language used by developers and users of a specific domain to explain that domain easily, bringing all team members on the same page."
  },
  {
    question: "What is the difference between Rest and Microservices?",
    answer: "REST is one way to implement microservices (over HTTP). REST is also used in web apps, API design, MVC. Microservices architecture puts all components into individual components that can be built, deployed, scaled individually. REST is a medium to build Microservices."
  },
  {
    question: "What do you understand by Idempotence? Where is it used?",
    answer: "Idempotence is a property where doing something twice has the same result as doing it once. Used at remote services or data sources so that repeated instructions are processed only once."
  },
  {
    question: "What is an Actuator in Microservices? Why is it used?",
    answer: "Actuator is a Spring Boot sub-project that brings production-ready features, exposing operational information (health, metrics, info, dump, env) via HTTP endpoints or JMX beans."
  },
  {
    question: "What is the use of Bounded Context in Domain-Driven Design?",
    answer: "Bounded Context is a central pattern in DDD used to divide large models into different bounded contexts and be explicit about their inter-relationships."
  },
  {
    question: "What is PACT in Microservices Architecture?",
    answer: "PACT is the contract between a consumer and provider application, a collection of interactions. It is an open-source tool implementing Consumer-Driven Contract in Microservices."
  },
  {
    question: "What do you understand by Two Factor Authentication? What are the different types of credentials used?",
    answer: "Two-factor authentication adds a second level to login. Credentials: Something you know (PIN, password), Something you have (ATM card, phone, OTP), Something you are (biometric fingerprint, voice print)."
  },
  {
    question: "What is the need for Reports and Dashboards in Microservices?",
    answer: "Reports and dashboards monitor microservices: identify which services expose what resources, show impacted services after changes, provide documentation access, show deployed component versions, and give sense of maturity and compliance."
  },
  {
    question: "What do you understand by Canary Releasing?",
    answer: "Canary releasing is a technique to introduce new software versions by rolling out updates to a subset of users as initial test before full infrastructure availability."
  },
  {
    question: "Why do many developers hesitate in using Microservices? / What are the biggest cons of using Microservices?",
    answer: "Cons: heavy investment and collaboration required, high architecture setup cost, complex operations overhead, need for skilled professionals supporting heterogeneous distributed microservices."
  },
  {
    question: "What are non-deterministic tests? What is the process to eliminate them?",
    answer: "Non-deterministic tests (NDT) sometimes pass, sometimes fail. Elimination methods: Quarantine, Asynchronous, Remote Services, Isolation, Time, Resource Leaks."
  },
  {
    question: "What is the usage of WebMvcTest annotation in Spring MVC applications?",
    answer: "WebMvcTest is used for unit testing Spring MVC applications to focus on Spring MVC Components. Example: @WebMvcTest(value = ToTestController.class, secure = false) launches only that controller."
  },
  {
    question: "What is Eureka in Microservices?",
    answer: "Eureka (Netflix Service Discovery Server) holds information about client-service applications. Microservices register into Eureka, which knows all client applications running on each port and IP address."
  },
  {
    question: "What is the full form of DRY? What is its usage in Microservices architecture?",
    answer: "DRY stands for Don't Repeat Yourself. It promotes code reuse, making development and library sharing easier, which in turn results in tight coupling."
  },
  {
    question: "How can you balance the server-side load by utilizing Spring Cloud?",
    answer: "Use Netflix Zuul (JVM-based router) to balance server-side load by utilizing Spring Cloud."
  },
  {
    question: "What do you understand by Cross-functional testing?",
    answer: "Cross-functional testing is the verification of non-functional requirements that cannot be implemented like standard features."
  },
  {
    question: "What is the use of Netflix Hystrix?",
    answer: "Hystrix is an error tolerance and latency library used to isolate access points, ensuring 3rd party libraries and services are restricted so the application runs efficiently and avoids distributed system failures."
  },
  {
    question: "What do you understand by Tasklet in Microservices?",
    answer: "Tasklet is a simple interface with an execute method. In Spring Batch, it is used to perform unique tasks like running queries, deleting files, or cleaning/setting up resources before/after step execution."
  }
];