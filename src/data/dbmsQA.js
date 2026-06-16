// src/data/dbmsQA.js
export const dbmsQA = [
  {
    question: "What is DBMS?",
    answer: "DBMS is a collection of programs that facilitates users to create and maintain a database, providing an interface for operations like creation, insertion, deletion, and updating. Examples: MySQL, Oracle, SQL Server."
  },
  {
    question: "What is a database?",
    answer: "A database is a logical, consistent, organized collection of data that can be easily accessed, managed, and updated. It consists of tables, records, and fields."
  },
  {
    question: "What is a database system?",
    answer: "The collection of database and DBMS software together is a database system, enabling storage, retrieval, and access of data with accuracy and security."
  },
  {
    question: "What are the advantages of DBMS?",
    answer: "Redundancy control, restriction for unauthorized access, multiple user interfaces, backup and recovery, enforces integrity constraints, ensures data consistency, easy accessibility and data extraction via queries."
  },
  {
    question: "What is a checkpoint in DBMS?",
    answer: "A checkpoint removes previous logs from the system and permanently stores them on disk. It allows the database engine to recover after a crash to a minimal point from which transaction logs can recover committed data."
  },
  {
    question: "When does checkpoint occur in DBMS?",
    answer: "A checkpoint is a snapshot of DBMS state used to reduce work during restart after crashes. It is used in log-based recovery systems to avoid performing transactions from the very beginning."
  },
  {
    question: "What do you mean by transparent DBMS?",
    answer: "A transparent DBMS hides its physical storage structure from users, meaning memory management details are not exposed."
  },
  {
    question: "What are the unary operations in Relational Algebra?",
    answer: "PROJECTION, SELECTION, and RENAME are unary operations (single operand)."
  },
  {
    question: "What is RDBMS?",
    answer: "Relational Database Management System maintains data records and indices in tables, enabling operations like update, insert, delete, and administer a relational database, typically using SQL."
  },
  {
    question: "How many types of database languages are there?",
    answer: "Four: DDL (CREATE, ALTER, DROP), DML (SELECT, UPDATE, INSERT, DELETE), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK, SAVEPOINT)."
  },
  {
    question: "What do you understand by Data Model?",
    answer: "A collection of conceptual tools for describing data, relationships, semantics, and constraints. Examples: hierarchical, network, relational, Entity-Relationship models."
  },
  {
    question: "Define a Relation Schema and a Relation.",
    answer: "Relation Schema (table schema) is a set of attributes defining table name and structure (blueprint, no data). Relation is a set of tuples (actual data)."
  },
  {
    question: "What is a degree of Relation?",
    answer: "Degree is the number of attributes in its relation schema (also known as cardinality). It defines occurrence relationships: one-to-one (1:1), one-to-many (1:M), many-to-many (M:N)."
  },
  {
    question: "What is the Relationship?",
    answer: "An association among two or more entities. Types: one-to-one, one-to-many, many-to-many."
  },
  {
    question: "What are the disadvantages of file processing systems?",
    answer: "Inconsistent, not secure, data redundancy, difficult access, data isolation, data integrity issues, no concurrent access, limited data sharing, atomicity problems."
  },
  {
    question: "What is data abstraction in DBMS?",
    answer: "Hiding irrelevant details from users, dividing the system into different layers to simplify interaction with complex data structures."
  },
  {
    question: "What are the three levels of data abstraction?",
    answer: "Physical level (how data is stored), Logical level (what data is stored and relationships), View level (only part of database visible to users)."
  },
  {
    question: "What is DDL (Data Definition Language)?",
    answer: "Standard for commands that define database structures, e.g., CREATE, ALTER, DROP."
  },
  {
    question: "What is DML (Data Manipulation Language)?",
    answer: "Language to access or manipulate data, e.g., SELECT, UPDATE, INSERT, DELETE. Types: Procedural (specify what and how) and Non-Procedural (specify what only)."
  },
  {
    question: "Explain the functionality of DML Compiler.",
    answer: "Translates DML statements into a query language that the query evaluation engine can understand, similar to compiling code."
  },
  {
    question: "What is Relational Algebra?",
    answer: "A procedural query language with operations that take one or two relations as input and produce a new relation. Fundamental operations: select, project, set difference, union, rename."
  },
  {
    question: "What is Relational Calculus?",
    answer: "A non-procedural query language using mathematical predicate calculus (tuple relational calculus and domain relational calculus)."
  },
  {
    question: "What do you understand by query optimization?",
    answer: "Selecting an efficient execution plan for evaluating a query with the least estimated cost, reducing time and space complexity and improving user satisfaction."
  },
  {
    question: "What do you mean by durability in DBMS?",
    answer: "Once a transaction completes successfully, its effects persist even if the system crashes before all changes are reflected on disk, ensuring data is stored in non-volatile memory."
  },
  {
    question: "What is normalization?",
    answer: "A process of analyzing relation schemas according to functional dependencies to minimize redundancy and insertion/update/deletion anomalies. Normal forms: 1NF, 2NF, 3NF, BCNF."
  },
  {
    question: "What is Denormalization?",
    answer: "The process of adding redundant data to boost database performance and avoid complex joins, performed after normalization."
  },
  {
    question: "What is functional Dependency?",
    answer: "A connection where one attribute uniquely determines another attribute (notation A->B means B depends on A). It is the foundation of normalization."
  },
  {
    question: "What is the E-R model?",
    answer: "Entity-Relationship model based on real world, containing entities, attributes, relationship sets. Represented by E-R diagrams: rectangles for entities, diamonds for relationships, ellipses for attributes."
  },
  {
    question: "What is an entity?",
    answer: "A set of attributes representing a real-world object. Example: employee, department in a company database."
  },
  {
    question: "What is an Entity type?",
    answer: "A collection of entities having the same attributes, corresponding to one or several related tables in the database."
  },
  {
    question: "What is an Entity set?",
    answer: "The collection of all entities of a particular entity type in the database (e.g., set of students, set of companies)."
  },
  {
    question: "What is an Extension of entity type?",
    answer: "A collection of entities of a particular entity type grouped into an entity set."
  },
  {
    question: "What is Weak Entity set?",
    answer: "An entity set without sufficient attributes to form a primary key; its members are subordinate to a strong entity set."
  },
  {
    question: "What is an attribute?",
    answer: "A database component describing the property of an entity (e.g., age of a student)."
  },
  {
    question: "What are the integrity rules in DBMS?",
    answer: "Entity Integrity: Primary key cannot have NULL value. Referential Integrity: Foreign key can be NULL or must match a primary key value in another relation."
  },
  {
    question: "What do you mean by extension and intension?",
    answer: "Extension (database state) is the number of tuples present at any instance, time-dependent. Intension (data schema) is the description of the database, remains unchanged."
  },
  {
    question: "What is System R? How many of its two major subsystems?",
    answer: "System R (1974-1979, IBM San Jose) was the first implementation of SQL, demonstrating RDBMS viability. Two subsystems: Research Storage and System Relational Data System."
  },
  {
    question: "What is Data Independence?",
    answer: "The application is independent of storage structure and access strategy. Physical independence: changes at physical level don't affect logical level. Logical independence: changes at logical level don't affect view level (harder to achieve)."
  },
  {
    question: "What is Join?",
    answer: "An operation combining information from two or more relations based on related columns. Types: Inner joins (Theta, Natural, Equi) and Outer joins (Left, Right, Full)."
  },
  {
    question: "What is 1NF?",
    answer: "First Normal Form: every column must have atomic (single) values; remove duplicate columns; create separate tables for related data with a unique column per row."
  },
  {
    question: "What is 2NF?",
    answer: "Second Normal Form: table must be in 1NF and every non-prime attribute is fully functionally dependent on the primary key."
  },
  {
    question: "What is 3NF?",
    answer: "Third Normal Form: table must be in 2NF and has no transitive functional dependency (e.g., X->Y, Y not ->X, Y->Z implies X->Z)."
  },
  {
    question: "What is BCNF?",
    answer: "Boyce-Codd Normal Form (3.5NF): stricter than 3NF; for every functional dependency X->Y, X must be a super key of the table."
  },
  {
    question: "Explain ACID properties.",
    answer: "Atomicity (all or nothing), Consistency (database consistent before and after transaction), Isolation (concurrent transactions don't cause inconsistency), Durability (committed data persists after crash)."
  },
  {
    question: "What is stored procedure?",
    answer: "A collection of SQL statements stored in the database, promoting reusability, reducing processing time, and simplifying the system."
  },
  {
    question: "What is the difference between a DELETE command and TRUNCATE command?",
    answer: "DELETE deletes rows conditionally, can be rolled back, slow (maintains log), uses row lock. TRUNCATE removes all rows, cannot be rolled back, fast (no log), uses table lock."
  },
  {
    question: "What is 2-Tier architecture?",
    answer: "Basic client-server architecture where client applications communicate directly with the database server."
  },
  {
    question: "What is 3-Tier architecture?",
    answer: "Contains an intermediate layer between client and server. Client interacts with an application server, which then communicates with the database, providing GUI and security."
  },
  {
    question: "How do you communicate with an RDBMS?",
    answer: "Using Structured Query Language (SQL). Queries are processed by the database and the required output is returned."
  },
  {
    question: "What is the difference between a shared lock and exclusive lock?",
    answer: "Shared lock allows multiple transactions to read the same data item. Exclusive lock is used for write operations, allowing only one transaction to modify the data to maintain consistency."
  }
];