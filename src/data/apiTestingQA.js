// src/data/apiTestingQA.js
export const apiTestingQA = [
  {
    question: "What is API?",
    answer: "API (Application Programming Interface) helps in communication and data exchange between two software systems. It acts as an interface, takes a request from the source, fetches data from the database, and returns a response without exposing internal details. Examples: Amazon API, Google Map API."
  },
  {
    question: "What is API testing?",
    answer: "API testing is a type of software testing that involves testing APIs directly. It is part of integration testing to check functionality, reliability, performance, and security. Primary focus is on the Business Logic Layer of the software architecture."
  },
  {
    question: "What are the types of API testing?",
    answer: "Unit Testing, Functional Testing, Load Testing, Runtime/Error Detection, Security Testing, UI Testing, Interoperability and WS compliance Testing, Penetration Testing, Fuzz Testing."
  },
  {
    question: "What are the protocols used in API Testing?",
    answer: "HTTP, REST, SOAP, JMS, UDDI."
  },
  {
    question: "What are the tools used for API Testing?",
    answer: "Parasoft SOAtest, PostMan, AlertSite API monitoring."
  },
  {
    question: "What is API test environment?",
    answer: "API test environment is a complex method where server and database configuration is done as per software requirements. API testing does not involve GUI; it checks proper functioning after installation."
  },
  {
    question: "What is API framework?",
    answer: "API framework is described by a configuration file that lists all APIs required to be activated for a particular program run. Not all APIs are needed for every test run."
  },
  {
    question: "What are the limits of API usage?",
    answer: "Many APIs have limits set by the provider. Estimate usage to understand how it impacts overall cost."
  },
  {
    question: "What are the advantages of API testing?",
    answer: "Tests core functionality before GUI, time effective (less code, faster coverage), language independent (XML/JSON), easy integration with GUI tests."
  },
  {
    question: "What are the principles of an API test design?",
    answer: "Exhaustive Testing (not possible, risk-based), Defect Clustering (80% defects in 20% modules), Pesticide Paradox (review/revise test cases), Testing shows presence of defects (not absence), Absence of error fallacy (bug-free but unusable), Early Testing (start early), Testing is context dependent."
  },
  {
    question: "What is API framework?",
    answer: "A framework is a platform for developing software applications. API framework is a foundation on which developers build applications for a specific platform. It includes predefined classes, functions, code libraries, compiler, and is defined by a configuration file."
  },
  {
    question: "What are the common tests performed on API?",
    answer: "Verify response based on request, verify system authenticates outcome when updating data, verify if API triggers other events/APIs, verify behavior when no value is returned."
  },
  {
    question: "What exactly needs to verify in API testing?",
    answer: "Accuracy of data, HTTP status code, response time, error codes, authorization, non-functional testing (performance, security)."
  },
  {
    question: "What are the differences between API and Web Services?",
    answer: "API may not need network, can use SOAP/REST/XML-RPC/CURL, can perform operations web services can't. Web services always need network, communicate via SOAP/REST/RPC, all web services are APIs but not all APIs are web services."
  },
  {
    question: "What is API documentation?",
    answer: "API documentation serves as quick reference for accessing library or working within a program. It includes function description, error message types/syntax, parameter syntax/elements/sequence, function links. Tools: Doxygen, JavaDoc."
  },
  {
    question: "What is the most used template for API documentation?",
    answer: "Swagger, Miredot, Slate, FlatDoc, API blueprint, RestDoc, Web service API specification."
  },
  {
    question: "What are the types of bugs that can be found during API testing?",
    answer: "Stress, Security, Duplicate or missing functionality, Reliability, Unused flags, Performance, Incompatible error handling, Multi-threaded issues, Improper errors."
  },
  {
    question: "What are the differences between API testing and UI testing?",
    answer: "UI testing focuses on graphical user interface, look and feel, user interaction. API testing focuses on backend communication between software systems (backend testing)."
  },
  {
    question: "What is SOAP?",
    answer: "SOAP (Simple Object Access Protocol) is an XML-based protocol that helps in exchanging information among computers."
  },
  {
    question: "What is REST API?",
    answer: "REST API is a set of functions that helps developers perform requests and receive responses. Interaction is made through HTTP protocol. REST stands for Representational State Transfer, an effective standard for API creation."
  },
  {
    question: "What are the differences between SOAP and REST API?",
    answer: "SOAP is a protocol (XML only). REST is an architectural pattern (permits Plain text, HTML, XML, JSON; JSON preferred)."
  },
  {
    question: "What are the major challenges faced during API testing?",
    answer: "Parameter Selection, Parameter Combination, Call sequencing, Output verification and validation, Difficulty providing input values without GUI."
  },
  {
    question: "What are the differences between API Testing and Unit Testing?",
    answer: "API testing is black box testing, done by testers after project completion, wide scope, end-to-end testing. Unit testing is white box testing, done by developers during project creation, limited scope (basic functionality), each functionality tested separately."
  },
  {
    question: "What is a RESTFUL web service?",
    answer: "RESTful web services use HTTP methods to implement REST architecture. They define URI (Uniform Resource Identifier) and provide resource representation (e.g., JSON) and a set of HTTP methods."
  },
  {
    question: "What is Resource in REST?",
    answer: "REST treats any content (text files, HTML pages, images, videos, dynamic business information) as a resource. Each resource is identified by URIs/global IDs, and the server provides functionality to access and modify them."
  },
  {
    question: "What is the way to represent the resource in REST?",
    answer: "REST uses different representations like text, JSON, and XML. The most popular are JSON and XML."
  },
  {
    question: "What protocol is used by RESTful Web Services?",
    answer: "RESTful Web Services use the HTTP protocol as the medium of communication between client and server."
  },
  {
    question: "What are the characteristics of REST?",
    answer: "REST is stateless (server has no status, can restart between calls). REST uses GET method to access resources, while web services often use POST."
  },
  {
    question: "What is messaging in RESTful Web Services?",
    answer: "Messaging is the technique where client sends an HTTP request and server sends back an HTTP reply. The message consists of message data and metadata (information on the message itself)."
  },
  {
    question: "What are the components of an HTTP request?",
    answer: "Action (HTTP method: GET, PUT, POST, DELETE), URI (resource identifier), HTTP version (e.g., HTTP V1.1), Request Header (metadata like client type, format), Request Body (message content or resource representation)."
  },
  {
    question: "What is the HTTP protocol supported by REST?",
    answer: "GET (request data), POST (send data to create/update), PUT (replace current representation), DELETE (remove resource), OPTIONS (describe communication options), HEAD (identical to GET without response body)."
  },
  {
    question: "Can we use GET request instead of PUT to create a resource?",
    answer: "No. PUT or POST methods should be used to create a resource. GET is only for requesting resources."
  },
  {
    question: "What is URI? What is the purpose and format?",
    answer: "URI stands for Uniform Resource Identifier. It is a string for unambiguous identification of resources. Purpose: locate the resource on the server hosting the web service. Format: `<protocol>://<service-name>/<Resource Type>/<ResourceID>`"
  },
  {
    question: "What are SOAP Web Services?",
    answer: "SOAP (Simple Object Access Protocol) is an XML-based protocol for developing and designing web services. It enables communication between applications developed on different platforms using different programming languages. It is platform and language independent."
  },
  {
    question: "When can we use SOAP API?",
    answer: "SOAP API can be used to perform operations on records like create, retrieve, update, delete, and to manage passwords, perform searches, etc."
  }
];