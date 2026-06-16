// src/data/jdbcQA.js
export const jdbcQA = [
  {
    question: "What is JDBC?",
    answer: "JDBC is a Java API that is used to connect and execute queries to the database. JDBC API uses JDBC drivers to connect to the database and can access tabular data stored in any relational database."
  },
  {
    question: "What is JDBC Driver?",
    answer: "JDBC Driver is a software component that enables Java applications to interact with the database. There are 4 types: JDBC-ODBC bridge driver, Native-API driver (partially Java), Network Protocol driver (fully Java), and Thin driver (fully Java)."
  },
  {
    question: "What are the steps to connect to the database in Java?",
    answer: "1. Register driver: Class.forName('driverClass'); 2. Create connection: DriverManager.getConnection(url, user, password); 3. Create statement: con.createStatement(); 4. Execute query: stmt.executeQuery(sql); 5. Process results; 6. Close connection."
  },
  {
    question: "What are the JDBC API components?",
    answer: "Interfaces: Connection, Statement, PreparedStatement, ResultSet, ResultSetMetaData, DatabaseMetaData, CallableStatement. Classes: DriverManager, Blob, Clob, SQLException."
  },
  {
    question: "What are the JDBC statements?",
    answer: "Statement: for general static SQL queries. PreparedStatement: for parameterized queries (precompiled). CallableStatement: for calling stored procedures."
  },
  {
    question: "What is the return type of Class.forName() method?",
    answer: "The Class.forName() method returns the object of java.lang.Class."
  },
  {
    question: "What are the differences between Statement and PreparedStatement?",
    answer: "Statement compiles query each time; PreparedStatement compiles once. Statement used for static queries; PreparedStatement for parameterized queries. PreparedStatement prevents SQL injection, performs faster."
  },
  {
    question: "How can we set null value in JDBC PreparedStatement?",
    answer: "Using setNull(int parameterIndex, int sqlType) method of PreparedStatement."
  },
  {
    question: "What are the benefits of PreparedStatement over Statement?",
    answer: "Faster performance (precompiled), supports parameterized queries, prevents SQL injection, allows database to reuse access plan."
  },
  {
    question: "What are the differences between execute, executeQuery, and executeUpdate?",
    answer: "execute() returns boolean (true if ResultSet), used for any SQL. executeQuery() returns ResultSet, used for SELECT. executeUpdate() returns int (row count), used for INSERT/UPDATE/DELETE."
  },
  {
    question: "What are the different types of ResultSet?",
    answer: "TYPE_FORWARD_ONLY (cursor moves forward only). TYPE_SCROLL_INSENSITIVE (scrollable, not sensitive to changes). TYPE_SCROLL_SENSITIVE (scrollable, sensitive to changes)."
  },
  {
    question: "What are the differences between ResultSet and RowSet?",
    answer: "ResultSet maintains connection (cannot be serialized); RowSet is disconnected and serializable. RowSet is a JavaBean, scrollable and updatable by default. RowSet extends ResultSet."
  },
  {
    question: "How can we execute stored procedures using CallableStatement?",
    answer: "Use Connection.prepareCall('{call procName(?,?)}'), set parameters with setXXX(), then call execute()."
  },
  {
    question: "What is the role of the JDBC DriverManager class?",
    answer: "DriverManager acts as interface between user and drivers. It maintains registered drivers and establishes database connections using getConnection()."
  },
  {
    question: "What are the functions of the JDBC Connection interface?",
    answer: "Connection maintains session with database, handles transaction management (commit/rollback), and provides factory methods to create Statement, PreparedStatement, CallableStatement, and DatabaseMetaData."
  },
  {
    question: "What does the JDBC ResultSet interface do?",
    answer: "ResultSet represents a row of a table. It allows navigation through data and retrieval of column values. By default forward-only and non-updatable."
  },
  {
    question: "What does the JDBC ResultSetMetaData interface do?",
    answer: "ResultSetMetaData provides information about table columns: column count, column names, column types, etc."
  },
  {
    question: "What does the JDBC DatabaseMetaData interface do?",
    answer: "DatabaseMetaData provides information about the database: driver name, driver version, username, product name, product version, number of tables/views, etc."
  },
  {
    question: "Which interface is responsible for transaction management in JDBC?",
    answer: "The Connection interface provides transaction management methods: setAutoCommit(), commit(), rollback()."
  },
  {
    question: "What is batch processing and how to perform batch processing in JDBC?",
    answer: "Batch processing executes multiple queries together for better performance. Steps: load driver, create connection, create statement, addBatch() for each query, executeBatch(), commit()."
  },
  {
    question: "What are CLOB and BLOB data types in JDBC?",
    answer: "BLOB (Binary Large Object) stores binary data like images, audio, video. CLOB (Character Large Object) stores character-based data like text files. Both can hold up to 2GB (MySQL) or 128GB (Oracle)."
  },
  {
    question: "What are the different types of lockings in JDBC?",
    answer: "Row and Key locks (on row updates), Page locks (on entire page), Table locks (shared/exclusive), Database locks (prevents read/update when database is open)."
  },
  {
    question: "How can we store and retrieve images from the database?",
    answer: "Use PreparedStatement with setBinaryStream() to store image (BLOB column). Use getBlob() and getBytes() to retrieve image. Example: ps.setBinaryStream(2, fin, fin.available())."
  },
  {
    question: "How can we store the file in the Oracle database?",
    answer: "Use CLOB column type. Use PreparedStatement.setCharacterStream() to store character file content. Example: ps.setCharacterStream(2, fr, (int)f.length())."
  },
  {
    question: "How can we retrieve the file in the Oracle database?",
    answer: "Use getClob() method to retrieve CLOB, then getCharacterStream() to read data. Write to file using FileWriter."
  },
  {
    question: "What are the differences between stored procedure and functions?",
    answer: "Procedure: performs business logic, no return type, can return 0+ values, supports input/output params, can use try-catch. Function: performs calculation, must have return type, returns single value, supports only input params, cannot use try-catch."
  },
  {
    question: "How can we maintain the integrity of a database by using JDBC?",
    answer: "By ensuring ACID properties using transaction management: setAutoCommit(false), execute updates, then commit() or rollback()."
  },
  {
    question: "What is the JDBC Rowset?",
    answer: "RowSet is a wrapper of ResultSet that holds tabular data but is easier and more flexible. Implementation classes: JdbcRowSet, CachedRowSet, WebRowSet, JoinRowSet, FilteredRowSet."
  },
  {
    question: "What is the major difference between java.util.Date and java.sql.Date?",
    answer: "java.sql.Date represents only date (no time information). java.util.Date represents both date and time. java.sql.Date extends java.util.Date but overrides time-related methods."
  },
  {
    question: "What does JDBC setMaxRows method do?",
    answer: "setMaxRows(int i) limits the maximum number of rows returned by a ResultSet. It restricts the database query output size."
  }
];