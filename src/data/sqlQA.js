// src/data/sqlQA.js
export const sqlQA = [
  {
    question: "What is SQL?",
    answer: "SQL (Structured Query Language) is the standard language used to maintain relational databases and perform data manipulation operations like creation, deletion, fetching, and modifying rows. It was invented in 1970, sometimes pronounced as 'sequel'."
  },
  {
    question: "When SQL appeared?",
    answer: "SQL first appeared in 1974. In 1986, it became the ANSI standard, and in 1987, the ISO standard."
  },
  {
    question: "What are the usages of SQL?",
    answer: "Execute queries, retrieve data, insert records, update records, delete records, create new databases, create new tables, create views, and perform complex operations on the database."
  },
  {
    question: "Does SQL support programming language features?",
    answer: "No. SQL does not have loops, conditional statements, or logical operations. It is a command language for database operations, primarily used to retrieve, manipulate, update, delete, and perform joins."
  },
  {
    question: "What are the subsets of SQL?",
    answer: "DDL (CREATE, ALTER, DROP), DML (SELECT, UPDATE, INSERT), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK, SET TRANSACTION, SAVEPOINT)."
  },
  {
    question: "What is the purpose of DDL Language?",
    answer: "Data Definition Language defines the data structure when the database is created. It includes commands like CREATE, ALTER, DELETE for schema, tables, indexes, views, sequences."
  },
  {
    question: "What is the purpose of DML Language?",
    answer: "Data Manipulation Language allows retrieval and manipulation of data in a relational database using INSERT, SELECT, UPDATE, DELETE commands."
  },
  {
    question: "What is the purpose of DCL Language?",
    answer: "Data Control Language controls access and permissions to the database. Includes GRANT (assign privileges) and REVOKE (remove privileges)."
  },
  {
    question: "What are tables and fields in the database?",
    answer: "A table organizes data in rows (tuples) and columns (attributes). Fields are columns that provide structure, storing the same category of data in the same data type."
  },
  {
    question: "What is a primary key?",
    answer: "A field or combination of fields that uniquely identifies each record in a table. It cannot be null or empty, stores unique values, and only one primary key is allowed per table."
  },
  {
    question: "What is a foreign key?",
    answer: "A key that links one or more tables together, referencing the primary key of another table. It maintains referential integrity and prevents actions that would destroy links."
  },
  {
    question: "What is a unique key?",
    answer: "A single or combination of fields that ensures all values in a column are unique. It can accept one NULL value per column, ensuring column integrity."
  },
  {
    question: "What is the difference between a primary key and a unique key?",
    answer: "Primary key uniquely identifies each record, cannot store NULL, cannot be changed/deleted. Unique key prevents duplicates except one NULL, can be modified, only one primary key per table, multiple unique keys allowed."
  },
  {
    question: "What is a Database?",
    answer: "An organized collection of data structured into tables, rows, columns, and indexes, making data access, manipulation, retrieval, and management easy. Features: manages large data, accurate, easy to update, secure, data integrity, easy research."
  },
  {
    question: "What is meant by DBMS?",
    answer: "Database Management System – software that acts as an interface between the database and end-user, managing data, database engine, and schema. Components: software, data, procedures, database languages, query processor, database manager, database engine, reporting."
  },
  {
    question: "What are the different types of database management systems?",
    answer: "Hierarchical, Network (IDMS), Relational (RDBMS), Object-oriented, Document (Document DB), Graph, ER model, NoSQL."
  },
  {
    question: "What is RDBMS?",
    answer: "Relational Database Management System based on the relational model, storing data in tables and linking them using relational operators. Examples: MySQL, SQL Server, Oracle, Access."
  },
  {
    question: "What is Normalization in a Database?",
    answer: "A process to minimize redundancy and dependency by organizing fields and tables into normal forms: 1NF, 2NF, 3NF, BCNF."
  },
  {
    question: "What is the primary use of Normalization?",
    answer: "To remove redundancy and eliminate insert, delete, and update anomalies by breaking tables into smaller partitions and linking them with relationships."
  },
  {
    question: "What are the disadvantages of not performing database Normalization?",
    answer: "Wasted disk space due to redundancy, inconsistency (if changes not applied everywhere), maintenance problems, and affected ACID properties."
  },
  {
    question: "What is an inconsistent dependency?",
    answer: "Difficulty getting relevant data due to a missing or broken path, causing users to search the wrong table and resulting in errors."
  },
  {
    question: "What is Denormalization in a Database?",
    answer: "A technique to add redundant data into a normalized database to optimize performance, avoid complex joins, and simplify operations. It is an optimization strategy after normalization."
  },
  {
    question: "What are the different types of SQL operators?",
    answer: "Arithmetic (+, -, *, /, %), Logical (ALL, AND, ANY, BETWEEN, IN, LIKE, NOT, OR, etc.), Comparison (=, !=, <, >, <=, >=), Bitwise (&, |, ^, ~), Compound (+=, -=, *=, /=, %=), String (+, %, [], _, [^])."
  },
  {
    question: "What is a view in SQL?",
    answer: "A virtual table with no physical data, containing a subset of data from one or more tables. It is used to implement security. Syntax: `CREATE VIEW view_name AS SELECT column_lists FROM table_name WHERE condition;`"
  },
  {
    question: "What is an Index in SQL?",
    answer: "A disk structure associated with a table or view that speeds up row retrieval, reducing query cost and improving performance. Creates an entry for each value for faster data retrieval."
  },
  {
    question: "What are the different types of indexes in SQL?",
    answer: "Unique Index, Clustered Index, Non-Clustered Index, Bit-Map Index, Normal Index, Composite Index, B-Tree Index, Function-Based Index."
  },
  {
    question: "What is the unique index?",
    answer: "Enforces uniqueness of values in single or multiple columns. Can create more than one per table. Automatically applied when a primary key is defined. Syntax: `CREATE UNIQUE INDEX index_name ON table_name (column_list);`"
  },
  {
    question: "What is clustered index in SQL?",
    answer: "A table where data rows are stored, determining the physical order of data. Only one per table, created automatically with primary key. Best for many data modifications."
  },
  {
    question: "What is the non-clustered index in SQL?",
    answer: "Indexes other than PRIMARY (clustered). Data and index stored separately, maintains logical order. Used for searching; 0–249 per table. Improves performance for queries without primary key."
  },
  {
    question: "What are the differences between SQL, MySQL, and SQL Server?",
    answer: "SQL is a query language (IBM, 1974). MySQL is an RDBMS (Oracle, 1995) using SQL. SQL Server is an RDBMS (Microsoft, 1989) for Windows. SQL has no variables; MySQL and SQL Server have variables and get updates."
  },
  {
    question: "What is the difference between SQL and PL/SQL?",
    answer: "SQL is declarative, data-oriented, has no variables, executes single query, cannot embed PL/SQL. PL/SQL is procedural, application-oriented, has variables, executes block of code, can embed SQL, cannot be embedded in SQL."
  },
  {
    question: "Is it possible to sort a column using a column alias?",
    answer: "Yes. Use alias in ORDER BY (not in WHERE clause)."
  },
  {
    question: "What is the difference between clustered and non-clustered indexes in SQL?",
    answer: "Clustered: one per table, stores data and info, physical order, faster read, index id 0. Non-clustered: multiple per table, stores only info with pointers, logical order, slower read, index id > 0."
  },
  {
    question: "What is the SQL query to display the current date?",
    answer: "`SELECT GetDate();` (SQL Server) or `SELECT CURDATE();` (MySQL) – returns current timestamp/date."
  },
  {
    question: "Which are joins in SQL? Name the most commonly used SQL joins?",
    answer: "Joins retrieve data from multiple tables. Most commonly used: INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN."
  },
  {
    question: "What are the different types of joins in SQL?",
    answer: "INNER JOIN, SELF JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN, CROSS JOIN."
  },
  {
    question: "What is INNER JOIN in SQL?",
    answer: "Returns only records that match the specified condition from both tables. Default join, can omit INNER keyword. Syntax: `SELECT columns FROM table1 INNER JOIN table2 ON join_condition;`"
  },
  {
    question: "What is the Right JOIN in SQL?",
    answer: "Retrieves all rows from the right-hand table and matching rows from the left. Unmatched left side returns NULL. Also called RIGHT OUTER JOIN."
  },
  {
    question: "What is Left Join in SQL?",
    answer: "Fetches all rows from the left-hand table and common records from the right. Unmatched right side returns NULL. Also called LEFT OUTER JOIN."
  },
  {
    question: "What is Full Join in SQL?",
    answer: "Combination of LEFT and RIGHT JOIN, returns all records from both tables. Unmatched sides get NULL. Also called FULL OUTER JOIN."
  },
  {
    question: "What is a 'TRIGGER' in SQL?",
    answer: "A set of SQL statements automatically invoked in response to an INSERT, UPDATE, or DELETE event. Syntax: `CREATE TRIGGER trigger_name (AFTER|BEFORE) (INSERT|UPDATE|DELETE) ON table_name FOR EACH ROW BEGIN ... END;`"
  },
  {
    question: "What is self-join and what is the requirement of self-join?",
    answer: "Joining a table with itself using table aliases. Required to combine data with other data in the same table, often to convert hierarchical structure to flat structure."
  },
  {
    question: "What are the set operators in SQL?",
    answer: "UNION (combines and removes duplicates), UNION ALL (combines, keeps duplicates), INTERSECT (common records), MINUS (records in first query not in second)."
  },
  {
    question: "What is the difference between IN and BETWEEN operators?",
    answer: "BETWEEN selects range of values (numbers, text, dates) between two values. IN checks if a value exists within a set of values, reducing multiple OR conditions."
  },
  {
    question: "What is a constraint? Tell me about its various levels.",
    answer: "Rules specifying what values can be stored in a table, ensuring data accuracy and integrity. Column-level constraints apply to a single column; table-level constraints apply to entire table. Examples: NOT NULL, PRIMARY KEY, FOREIGN KEY, AUTO_INCREMENT, UNIQUE KEY."
  }
];