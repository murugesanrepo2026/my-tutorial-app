// src/data/hibernateQA.js
export const hibernateQA = [
  {
    question: "What is hibernate?",
    answer: "Hibernate is an open-source and lightweight ORM tool that is used to store, manipulate, and retrieve data from the database."
  },
  {
    question: "What is ORM?",
    answer: "ORM is an acronym for Object/Relational mapping. It is a programming strategy to map object with the data stored in the database. It simplifies data creation, data manipulation, and data access."
  },
  {
    question: "Explain hibernate architecture.",
    answer: "Hibernate architecture comprises of many interfaces such as Configuration, SessionFactory, Session, Transaction, etc."
  },
  {
    question: "What are the core interfaces of Hibernate?",
    answer: "Configuration, SessionFactory, Session, Query, Criteria, Transaction."
  },
  {
    question: "Mention some of the advantages of using ORM over JDBC.",
    answer: "Application development is fast, management of transaction, generates key automatically, details of SQL queries are hidden."
  },
  {
    question: "Define criteria in terms of Hibernate.",
    answer: "The objects of criteria are used for the creation and execution of the object-oriented criteria queries."
  },
  {
    question: "List some of the databases supported by Hibernate.",
    answer: "DB2, MySQL, Oracle, Sybase SQL Server, Informix Dynamic Server, HSQL, PostgreSQL, FrontBase."
  },
  {
    question: "List the key components of Hibernate.",
    answer: "Configuration, Session, SessionFactory, Criteria, Query, Transaction."
  },
  {
    question: "Mention two components of Hibernate configuration object.",
    answer: "Database Connection and Class Mapping Setup."
  },
  {
    question: "How is SQL query created in Hibernate?",
    answer: "The SQL query is created with the help of: Session.createSQLQuery"
  },
  {
    question: "What does HQL stand for?",
    answer: "Hibernate Query Language"
  },
  {
    question: "How is HQL query created?",
    answer: "The HQL query is created with: Session.createQuery"
  },
  {
    question: "How can we add criteria to a SQL query?",
    answer: "A criterion is added by using Session.createCriteria."
  },
  {
    question: "Define persistent classes.",
    answer: "Classes whose objects are stored in a database table are called persistent classes."
  },
  {
    question: "What is SessionFactory?",
    answer: "SessionFactory provides the instance of Session. It is a factory of Session. It holds the data of second level cache (not enabled by default)."
  },
  {
    question: "Is SessionFactory a thread-safe object?",
    answer: "Yes, SessionFactory is a thread-safe object, many threads cannot access it simultaneously."
  },
  {
    question: "What is Session?",
    answer: "It maintains a connection between the hibernate application and database. It provides methods like persist(), update(), delete(), load(), get(), and is a factory for Query, Criteria, and Transaction."
  },
  {
    question: "Is Session a thread-safe object?",
    answer: "No, Session is not a thread-safe object. Many threads can access it simultaneously."
  },
  {
    question: "What is the difference between session.save() and session.persist() method?",
    answer: "save() returns the identifier (Serializable) of the instance; persist() returns void. save(): public Serializable save(Object o); persist(): public void persist(Object o)."
  },
  {
    question: "What is the difference between get and load method?",
    answer: "get() returns null if object not found; load() throws ObjectNotFoundException. get() always hits the database; load() may not. get() returns real object; load() returns proxy. Use get() when unsure about existence; load() when sure."
  },
  {
    question: "What is the difference between update and merge method?",
    answer: "update() should be used if session doesn't contain an already persistent state with the same id (inside the session only). After closing session, update throws error. merge() can be used when you don't know the state of the session, merging changes even from detached objects."
  },
  {
    question: "What are the states of the object in hibernate?",
    answer: "Transient: newly created, no primary key, not associated with session. Persistent: session open and instance saved/retrieved. Detached: session closed; can become persistent again with lock() or update()."
  },
  {
    question: "What are the inheritance mapping strategies?",
    answer: "Table per hierarchy, Table per concrete class, Table per subclass."
  },
  {
    question: "How to make an immutable class in hibernate?",
    answer: "Mark the class as mutable='false'. By default it is mutable='true'."
  },
  {
    question: "What is automatic dirty checking in hibernate?",
    answer: "Automatic dirty checking calls update statement automatically on objects modified in a transaction, without explicitly calling update()."
  },
  {
    question: "How many types of association mapping are possible in hibernate?",
    answer: "One to One, One to Many, Many to One, Many to Many."
  },
  {
    question: "Is it possible to perform collection mapping with One-to-One and Many-to-One?",
    answer: "No, collection mapping can only be performed with One-to-Many and Many-to-Many."
  },
  {
    question: "What is lazy loading in hibernate?",
    answer: "Lazy loading loads child objects on demand, improving performance. Since Hibernate 3, lazy loading is enabled by default (no need to set lazy='true')."
  },
  {
    question: "What is HQL (Hibernate Query Language)?",
    answer: "Hibernate Query Language is an object-oriented query language. Advantages: you don't need to learn SQL, database independent, simple to write queries."
  },
  {
    question: "What is the difference between first level cache and second level cache?",
    answer: "First level cache is associated with Session and enabled by default. Second level cache is associated with SessionFactory and not enabled by default."
  }
];