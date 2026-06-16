// src/data/mysqlQA.js
export const mysqlQA = [
  {
    question: "What is MySQL?",
    answer: "MySQL is a multithreaded, multi-user SQL database management system. It's the world's second most popular open source database. The name 'My' comes from co-founder Michael Widenius's daughter, and SQL stands for Structured Query Language. MySQL is owned by Oracle and is free for developers, but enterprises pay a license fee."
  },
  {
    question: "In which language MySQL has been written?",
    answer: "MySQL is written in C and C++, and its SQL parser is written in yacc."
  },
  {
    question: "What are the technical specifications of MySQL?",
    answer: "Flexible structure, high performance, manageable and easy to use, replication and high availability, security and storage management, drivers, graphical tools, MySQL Enterprise Monitor, MySQL Enterprise Security, JSON support, OLTP and transactions, geo-spatial support."
  },
  {
    question: "What is the difference between MySQL and SQL?",
    answer: "SQL is the standard query language used to interact with databases. MySQL is a database management system (software/application) that stores data. SQL is a language; MySQL is an RDBMS."
  },
  {
    question: "What is the difference between the database and the table?",
    answer: "A database is a collection of organized data and tables. A table is a collection of rows and columns used to store data within a database. Tables divide data within a database."
  },
  {
    question: "Why do we use the MySQL database server?",
    answer: "Free for developers, open source, large supportive community, stable versions, fast, reliable, easy to use, downloadable free of cost."
  },
  {
    question: "What are the different tables present in MySQL?",
    answer: "MyISAM (default), Heap, Merge, INNO DB, ISAM."
  },
  {
    question: "How to install MySQL?",
    answer: "Manual installation allows more control, backing up, moving databases easily, control over start/stop, and portable installation on USB drives. Steps are available on the MySQL documentation."
  },
  {
    question: "How to check the MySQL version?",
    answer: "On Linux: `mysql -v`. On Windows: MySQL command-line tool shows version. For server info: `SHOW VARIABLES LIKE '%version%';`"
  },
  {
    question: "How to add columns in MySQL?",
    answer: "Using ALTER TABLE statement: `ALTER TABLE table_name ADD COLUMN column_name column_definition [FIRST|AFTER existing_column];`"
  },
  {
    question: "How to delete a table in MySQL?",
    answer: "Using DROP TABLE statement: `DROP TABLE table_name;` This permanently removes the table structure and data."
  },
  {
    question: "How to add foreign keys in MySQL?",
    answer: "Using CREATE TABLE or ALTER TABLE: `[CONSTRAINT constraint_name] FOREIGN KEY [foreign_key_name] (col_name,...) REFERENCES parent_tbl_name (col_name,...);`"
  },
  {
    question: "How to connect to the MySQL database?",
    answer: "Using command-line tool: `mysql -u root -p`, then enter password, then `USE database_name;`. Using MySQL Workbench: create a connection with host, port, username, password."
  },
  {
    question: "How to change the MySQL password?",
    answer: "Run `ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewPassword';` then use `mysqld --init-file=filename.txt` to apply, then delete the file."
  },
  {
    question: "How to create a database in MySQL Workbench?",
    answer: "Launch Workbench, login, go to Navigation tab > Schema menu, right-click and select Create Schema, fill details, click Apply and Finish."
  },
  {
    question: "How to create a table in MySQL Workbench?",
    answer: "Select database, right-click Tables, select Create Table, enter table name and column details, click Apply and Finish."
  },
  {
    question: "How to change the table name in MySQL?",
    answer: "Using RENAME TABLE: `RENAME TABLE old_table TO new_table;` For multiple: `RENAME TABLE old1 TO new1, old2 TO new2;`"
  },
  {
    question: "How to change the database name in MySQL?",
    answer: "Create a new database, use `mysqldump -u username -p password -R oldDbName > oldDbName.sql`, then import: `mysql -u username -p password newDbName < oldDbName.sql`"
  },
  {
    question: "How to import a database in MySQL?",
    answer: "Using command-line: `mysql -u username -p database_name < file.sql`. Using MySQL Workbench: Server > Data Import."
  },
  {
    question: "How to change the column name in MySQL?",
    answer: "Using ALTER TABLE with CHANGE: `ALTER TABLE table_name CHANGE COLUMN old_column_name new_column_name column_definition [FIRST|AFTER existing_column];`"
  },
  {
    question: "How to delete columns in MySQL?",
    answer: "Using ALTER TABLE DROP COLUMN: `ALTER TABLE table_name DROP COLUMN column_name1, column_name2...;`"
  },
  {
    question: "How to insert data in MySQL?",
    answer: "Using INSERT INTO: `INSERT INTO table_name (field1, field2,...) VALUES (value1, value2,...);` For multiple rows, use comma-separated value lists."
  },
  {
    question: "How to delete a row in MySQL?",
    answer: "Using DELETE: `DELETE FROM table_name WHERE condition;` Without WHERE, deletes all rows."
  },
  {
    question: "How to join two tables in MySQL?",
    answer: "Using JOIN clauses: INNER JOIN, LEFT JOIN, RIGHT JOIN, CROSS JOIN. Example: `SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;`"
  },
  {
    question: "How to join three tables in MySQL?",
    answer: "Using SQL JOIN: `SELECT ... FROM table1 INNER JOIN table2 ON condition1 INNER JOIN table3 ON condition2;` Or using parent-child relationship with WHERE clause and foreign keys."
  },
  {
    question: "How to update the table in MySQL?",
    answer: "Using UPDATE with SET and WHERE: `UPDATE table_name SET field1=new-value1, field2=new-value2 WHERE condition;`"
  },
  {
    question: "What is MySQL Workbench?",
    answer: "A unified visual database design/GUI tool for MySQL, developed by Oracle. Provides SQL development, data migration, server administration, E-R diagrams. Available in Community (open source), Standard, and Enterprise editions."
  },
  {
    question: "How to drop the primary key in MySQL?",
    answer: "Using ALTER TABLE: `ALTER TABLE table_name DROP PRIMARY KEY;`"
  },
  {
    question: "How to create a Stored Procedure in MySQL?",
    answer: "Syntax: `CREATE PROCEDURE procedure_name [ (parameter datatype) ] BEGIN SQL statements END;` Example: `DELIMITER $$ CREATE PROCEDURE get_student_info() BEGIN SELECT * FROM Student_table; END$$`"
  },
  {
    question: "How to execute a stored procedure in MySQL?",
    answer: "Using CALL: `CALL stored_procedure_name (argument_list);` Example: `CALL Product_Pricing (@pricelow, @pricehigh);`"
  },
  {
    question: "How to create a View in MySQL?",
    answer: "Syntax: `CREATE [OR REPLACE] VIEW view_name AS SELECT columns FROM tables [WHERE conditions];`"
  },
  {
    question: "How to create a Trigger in MySQL?",
    answer: "Syntax: `CREATE TRIGGER trigger_name [BEFORE|AFTER] {INSERT|UPDATE|DELETE} ON table_name FOR EACH ROW BEGIN trigger_code END;`"
  },
  {
    question: "How to clear screen in MySQL?",
    answer: "In MySQL 8+, use `SYSTEM CLS;`. Earlier versions, exit and reopen the command-line tool."
  },
  {
    question: "How to create a new user in MySQL?",
    answer: "Using CREATE USER: `CREATE USER [IF NOT EXISTS] account_name IDENTIFIED BY 'password';`"
  },
  {
    question: "How to check USERS in MySQL?",
    answer: "Run: `SELECT USER FROM mysql.user;`"
  },
  {
    question: "How to import a CSV file in MySQL?",
    answer: "Using LOAD DATA INFILE: `LOAD DATA INFILE 'file.csv' INTO TABLE tablename FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' LINES TERMINATED BY '\\r\\n' IGNORE 1 ROWS;`"
  },
  {
    question: "How to insert Date in MySQL?",
    answer: "Using INSERT with date format YYYY-MM-DD: `INSERT INTO table_name (column_date) VALUES ('2008-7-04');` For mm/dd/yyyy, use `STR_TO_DATE(date_value, format_specifier)`."
  },
  {
    question: "How to check database size in MySQL?",
    answer: "Query `information_schema.tables`: `SELECT table_schema AS 'Database Name', SUM(data_length + index_length) 'Size in Bytes', ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) 'Size in MB' FROM information_schema.tables WHERE table_schema = 'testdb' GROUP BY table_schema;`"
  },
  {
    question: "How does indexing work in MySQL?",
    answer: "Indexing orders an unordered list to maximize query efficiency. It works like a book index, allowing direct access to rows without scanning all rows."
  },
  {
    question: "Who owns MySQL?",
    answer: "Initially owned by MySQL AB (Swedish company). Now owned by Oracle Corporation (via Sun Microsystems acquisition)."
  },
  {
    question: "How to view the database in MySQL?",
    answer: "Run: `SHOW DATABASES;`"
  },
  {
    question: "How to set auto increment in MySQL?",
    answer: "Using ALTER TABLE: `ALTER TABLE table_name AUTO_INCREMENT = value;`"
  },
  {
    question: "How to find the second highest salary in MySQL?",
    answer: "Using LIMIT: `SELECT salary FROM (SELECT salary FROM employees ORDER BY salary DESC LIMIT 2) AS Emp ORDER BY salary LIMIT 1;` Or subquery: `SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);`"
  },
  {
    question: "What is the difference between TRUNCATE and DELETE in MySQL?",
    answer: "TRUNCATE is DDL, cannot use WHERE, cannot be used with indexed views, deletes all rows permanently. DELETE is DML, can use WHERE, can be used with indexed views, deletes rows conditionally."
  },
  {
    question: "How many Triggers are possible in MySQL?",
    answer: "Six triggers: BEFORE INSERT, AFTER INSERT, BEFORE UPDATE, AFTER UPDATE, BEFORE DELETE, AFTER DELETE."
  },
  {
    question: "What is the heap table?",
    answer: "HEAP tables (memory tables) are stored in memory for high-speed temporary storage. They do not allow BLOB/TEXT fields and must specify TYPE=HEAP. Indexes must be NOT NULL."
  },
  {
    question: "What is BLOB and TEXT in MySQL?",
    answer: "BLOB (Binary Large Object) holds binary data. Types: TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB. TEXT holds non-binary character strings with collation. Types: TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT."
  },
  {
    question: "What is a trigger in MySQL?",
    answer: "A set of SQL statements that automatically executes in response to INSERT, UPDATE, or DELETE events on a table."
  },
  {
    question: "What is the difference between the heap table and the temporary table?",
    answer: "Heap tables are shared among clients, just another storage engine, and persist until dropped. Temporary tables are not shared, require special privilege, and are deleted after session ends."
  },
  {
    question: "What is the difference between FLOAT and DOUBLE?",
    answer: "FLOAT stores up to 8 decimal places using 4 bytes. DOUBLE stores up to 18 decimal places using 8 bytes."
  },
  {
    question: "What are the advantages of MySQL in comparison to Oracle?",
    answer: "MySQL is free, fast, reliable, open source, uses less RAM (under 1MB), portable, great for database-enabled websites. Oracle is expensive, more suitable for enterprises."
  },
  {
    question: "What are the disadvantages of MySQL?",
    answer: "Not efficient for very large scale databases, older versions lack COMMIT and stored procedures, transaction handling not as efficient, functionality depends on addons, not community-driven development."
  },
  {
    question: "What is the difference between CHAR and VARCHAR?",
    answer: "CHAR has fixed length (max 255 chars), uses static memory, 50% faster. VARCHAR has variable length (max 4000 chars), uses dynamic memory, slower but saves space."
  },
  {
    question: "What is the difference between MySQL_connect and MySQL_pconnect?",
    answer: "mysql_connect opens a new connection per request and closes it. mysql_pconnect (p = persistent) opens a persistent connection that cannot be closed, useful for high traffic sites."
  },
  {
    question: "What does 'i_am_a_dummy flag' do in MySQL?",
    answer: "It prevents UPDATE/DELETE statements without a WHERE clause from executing, protecting against accidental full table deletion."
  },
  {
    question: "How to get the current date in MySQL?",
    answer: "Use `SELECT CURRENT_DATE();`"
  },
  {
    question: "What are the security alerts while using MySQL?",
    answer: "Install antivirus and configure firewall, never run MySQL as UNIX root user, change root username/password, restrict/disable remote access."
  },
  {
    question: "How to change a password for an existing user via mysqladmin?",
    answer: "Run: `mysqladmin -u root -p password 'newpassword'`"
  },
  {
    question: "What is the difference between UNIX timestamps and MySQL timestamps?",
    answer: "Both are stored as 32-bit integers, but MySQL timestamp is displayed in readable YYYY-MM-DD HH:MM:SS format."
  },
  {
    question: "How to display the nth highest salary from a table in a MySQL query?",
    answer: "Use `SELECT DISTINCT(salary) FROM employee ORDER BY salary DESC LIMIT n-1,1`. Example for 3rd highest: `LIMIT 2,1`"
  },
  {
    question: "What is the MySQL default port number?",
    answer: "3306"
  }
];