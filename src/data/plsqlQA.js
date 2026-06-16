// src/data/plsqlQA.js
export const plsqlQA = [
  {
    question: "What is PL/SQL?",
    answer: "PL/SQL stands for procedural language extension to SQL. It supports procedural features of programming language and SQL both. It was developed by Oracle Corporation in early 90's to enhance the capabilities of SQL."
  },
  {
    question: "What is the purpose of using PL/SQL?",
    answer: "PL/SQL is an extension of SQL designed by Oracle to overcome the limitations of SQL (which is non-procedural)."
  },
  {
    question: "What are the most important characteristics of PL/SQL?",
    answer: "Block-structured language, portable to all Oracle-supported environments, integrated with Oracle data dictionary, stored procedures enable better application sharing."
  },
  {
    question: "What is PL/SQL table? Why it is used?",
    answer: "PL/SQL tables are objects modeled as database tables, providing arrays (temporary tables in memory processed quickly). They are used to move bulk data and simplify moving collections of data."
  },
  {
  question: "What are the datatypes available in PL/SQL?",
    answer: "Two types: Scalar (NUMBER, VARCHAR2, DATE, CHAR, LONG, BOOLEAN) and Composite (RECORD, TABLE)."
  },
  {
    question: "What is the basic structure of PL/SQL?",
    answer: "PL/SQL uses a BLOCK structure with three sections: Declaration (optional), Execution (mandatory), Exception handling (optional)."
  },
  {
    question: "What is the difference between FUNCTION, PROCEDURE AND PACKAGE in PL/SQL?",
    answer: "Function: returns a single value, has return type. Procedure: no return type, returns multiple values via parameters. Package: groups logically related PL/SQL types, items, subprograms (functions, procedures, variables) providing modularity and information hiding."
  },
  {
    question: "What is exception? What are the types of exceptions?",
    answer: "Exception is the error handling part of PL/SQL. Two types: pre-defined exception and user-defined exception."
  },
  {
    question: "How to write a single statement that concatenates the words 'Hello' and 'World' and assign it in a variable named Greeting?",
    answer: "Greeting := 'Hello' || 'World';"
  },
  {
    question: "Does PL/SQL support CREATE command?",
    answer: "No, PL/SQL does not support data definition commands like CREATE."
  },
  {
    question: "Write a unique difference between a function and a stored procedure.",
    answer: "A function returns a value while a stored procedure does not return a value."
  },
  {
    question: "How exception is different from error?",
    answer: "Whenever an error occurs, an exception arises. Error is a bug; exception is a warning or error condition."
  },
  {
    question: "What is the main reason behind using an index?",
    answer: "Faster access of data blocks in the table."
  },
  {
    question: "What are PL/SQL exceptions? Tell me any three.",
    answer: "TOO_MANY_ROWS, NO_DATA_FOUND, VALUE_ERROR, ZERO_ERROR, etc."
  },
  {
    question: "How do you declare a user-defined exception?",
    answer: "Under the DECLARE section with the keyword EXCEPTION. Syntax: `<exception_name> EXCEPTION;`"
  },
  {
    question: "What are some predefined exceptions in PL/SQL?",
    answer: "DUP_VAL_ON_INDEX, ZERO_DIVIDE, NO_DATA_FOUND, TOO_MANY_ROWS, CURSOR_ALREADY_OPEN, INVALID_NUMBER, INVALID_CURSOR, PROGRAM_ERROR, TIMEOUT_ON_RESOURCE, STORAGE_ERROR, LOGON_DENIED, VALUE_ERROR."
  },
  {
    question: "What is a trigger in PL/SQL?",
    answer: "A trigger is a PL/SQL program stored in the database, executed immediately before or after INSERT, UPDATE, or DELETE commands."
  },
  {
    question: "What is the maximum number of triggers you can apply on a single table?",
    answer: "12 triggers."
  },
  {
    question: "How many types of triggers exist in PL/SQL?",
    answer: "12 types combining BEFORE/AFTER, ROW/TABLE, INSERT/UPDATE/DELETE/ALL keywords (e.g., BEFORE ALL ROW INSERT, AFTER INSERT, etc.)."
  },
  {
    question: "What is the difference between execution of triggers and stored procedures?",
    answer: "A trigger is automatically executed without user action; a stored procedure is explicitly invoked by the user."
  },
  {
    question: "What happens when a trigger is associated to a view?",
    answer: "When a trigger is associated with a view, the base table triggers are normally enabled."
  },
  {
    question: "What is the usage of WHEN clause in trigger?",
    answer: "A WHEN clause specifies the condition that must be true for the trigger to be triggered."
  },
  {
    question: "How to disable a trigger named update_salary?",
    answer: "ALTER TRIGGER update_salary DISABLE;"
  },
  {
    question: "Which command is used to delete a trigger?",
    answer: "DROP TRIGGER command."
  },
  {
    question: "What are the two virtual tables available at the time of database trigger execution?",
    answer: "THEN.column_name and NOW.column_name. For INSERT: NOW.column_name only. For DELETE: THEN.column_name only. For UPDATE: both available."
  },
  {
    question: "What is stored Procedure?",
    answer: "A stored procedure is a named PL/SQL block (sequence of statements) stored in the database as a schema object, performing one or more specific functions. It can be nested, invoked, and parameterized."
  },
  {
    question: "What are the different schema objects that can be created using PL/SQL?",
    answer: "Stored procedures and functions, packages, triggers, cursors."
  },
  {
    question: "What do you know by PL/SQL Cursors?",
    answer: "Oracle uses a workspace (Private SQL Area) to execute SQL commands, identified by a cursor. Cursors allow programmers to name this area and access its information."
  },
  {
    question: "What is the difference between the implicit and explicit cursors?",
    answer: "Implicit cursor is declared by Oracle for DDL/DML commands that return only one row. Explicit cursor is created for queries returning multiple rows."
  },
  {
    question: "What will you get by the cursor attribute SQL%ROWCOUNT?",
    answer: "It returns the number of rows processed by a SQL statement."
  },
  {
    question: "What will you get by the cursor attribute SQL%FOUND?",
    answer: "It returns Boolean TRUE if at least one row was processed."
  },
  {
    question: "What will you get by the cursor attribute SQL%NOTFOUND?",
    answer: "It returns Boolean TRUE if no rows were processed."
  },
  {
    question: "What do you understand by PL/SQL packages?",
    answer: "A PL/SQL package is a file that groups functions, cursors, stored procedures, and variables in one place."
  },
  {
    question: "What are the two different parts of the PL/SQL packages?",
    answer: "Specification part (defines the interface) and Body part (implements the specification)."
  },
  {
    question: "Which command is used to delete a package?",
    answer: "DROP PACKAGE command."
  },
  {
    question: "How to execute a stored procedure?",
    answer: "From SQL prompt: `EXECUTE procedure_name;` or just `procedure_name;`"
  },
  {
    question: "What are the advantages of stored procedure?",
    answer: "Modularity, extensibility, reusability, maintainability, one-time compilation."
  },
  {
    question: "What are the cursor attributes used in PL/SQL?",
    answer: "%ISOPEN (cursor open?), %ROWCOUNT (rows affected), %FOUND (any row fetched?), %NOTFOUND (no row fetched?)."
  },
  {
    question: "What is the difference between syntax error and runtime error?",
    answer: "Syntax error is detected by PL/SQL compiler (e.g., incorrect spelling). Runtime error is handled via exception-handling section (e.g., SELECT INTO returning no rows)."
  },
  {
    question: "Explain the Commit statement.",
    answer: "Commit makes transaction changes permanent, releases locks, and other users can see the data changes."
  },
  {
    question: "Explain the Rollback statement.",
    answer: "Rollback undoes all work done in the transaction as if never issued, and releases all locks acquired by the transaction."
  },
  {
    question: "Explain the SAVEPOINT statement.",
    answer: "SAVEPOINT allows only part of a transaction to be undone (partial rollback)."
  },
  {
    question: "What is mutating table error?",
    answer: "Mutating table error occurs when a trigger tries to update a row that it is currently using. Fixed by using views or temporary tables."
  },
  {
    question: "What is consistency?",
    answer: "Consistency means each user sees a consistent view of the data. Example: a money transfer is not visible until both debit and credit are complete."
  },
  {
    question: "What is cursor and why it is required?",
    answer: "A cursor is a temporary work area created in system memory when an SQL statement is executed. It stores retrieved data and processes one row at a time. Required to process rows individually for queries."
  },
  {
    question: "How many types of cursors are available in PL/SQL?",
    answer: "Two types: Implicit cursor and explicit cursor."
  }
];