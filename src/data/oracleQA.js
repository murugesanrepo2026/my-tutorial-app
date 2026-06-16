// src/data/oracleQA.js
export const oracleQA = [
  {
    question: "What are the components of physical database structure of Oracle database?",
    answer: "One or more data files, two or more redo log files, one or more control files."
  },
  {
    question: "What are the components of logical database structure in Oracle database?",
    answer: "Tablespaces and database's schema objects."
  },
  {
    question: "What is a tablespace?",
    answer: "A tablespace is a logical storage unit in Oracle database that groups related logical structures together."
  },
  {
    question: "What is a SYSTEM tablespace and when it is created?",
    answer: "SYSTEM tablespace is automatically generated when the database is created. It contains data dictionary tables for the entire database."
  },
  {
    question: "What is an Oracle table?",
    answer: "A table is the basic unit of data storage in Oracle, containing all accessible information in rows and columns."
  },
  {
    question: "In the Oracle version 9.3.0.5.0, what does each number show?",
    answer: "9 = Major database release, 3 = Database maintenance release, 0 = Application server release, 5 = Component specific release, 0 = Platform specific release."
  },
  {
    question: "What is bulk copy or BCP in Oracle?",
    answer: "BCP (Bulk Copy) is used to import or export data from tables and views (not structure). Advantage: fast mechanism for copying data and easy backup."
  },
  {
    question: "What is the relationship among database, tablespace and data file?",
    answer: "A database contains one or more tablespaces (logical storage units). Each tablespace consists of one or more datafiles (physical files on disk)."
  },
  {
    question: "What is a snapshot in Oracle database?",
    answer: "A snapshot is a replica of a target master table from a single point-in-time; a copy of a table on a remote database."
  },
  {
    question: "What is the difference between hot backup and cold backup in Oracle? Tell about their benefits also.",
    answer: "Hot backup (online) is done while database is active (24/7 sites). Cold backup (offline) is done after shutdown with NORMAL command. Cold backup requires all datafiles, control files, redo logs, and init.ora."
  },
  {
    question: "How many memory layers are in the Oracle shared pool?",
    answer: "Two layers: library cache and data dictionary cache."
  },
  {
    question: "What is save point in Oracle database?",
    answer: "Save points divide a transaction into smaller parts, allowing partial rollback. Maximum five save points allowed."
  },
  {
    question: "What is hash cluster in Oracle?",
    answer: "A technique to store data in a hash table, applying a hash function on cluster key values to improve data retrieval performance."
  },
  {
    question: "What are the various Oracle database objects?",
    answer: "Tables, Tablespaces, Views, Indexes, Synonyms."
  },
  {
    question: "What is the difference between pre-select and pre-query?",
    answer: "Pre-query fires before query execution (once), can modify WHERE clause. Pre-select fires during execute query processing after SELECT statement is constructed but before it's issued. Pre-query fires before pre-select."
  },
  {
    question: "What are the different types of modules in Oracle forms?",
    answer: "Form module, Menu module, PL/SQL Library module, Object Library module."
  },
  {
    question: "What is the usage of ANALYZE command in Oracle?",
    answer: "Identify migrated/chained rows, validate object structure, collect optimizer statistics (stored in data dictionary), delete statistics."
  },
  {
    question: "Can you create a synonym without having a table?",
    answer: "Yes."
  },
  {
    question: "What types of joins are used in writing SUBQUERIES?",
    answer: "Self join, Outer Join, Equi-join."
  },
  {
    question: "What is the usage of control file in Oracle?",
    answer: "Control file is used for database recovery, identifies the database and redo log files needed for database operation."
  },
  {
    question: "What is a synonym?",
    answer: "A synonym is an alias for a table, view, sequence, or program unit."
  },
  {
    question: "What are the different types of synonyms?",
    answer: "Private (accessible only by owner) and Public (accessible by any database user)."
  },
  {
    question: "What is the usage of synonyms?",
    answer: "Hide real name/owner of an object, provide public access, provide location transparency, simplify SQL statements."
  },
  {
    question: "How do you store pictures in a database?",
    answer: "Using LONG RAW data type (up to 2GB). Only one LONG RAW column allowed per table."
  },
  {
    question: "What is BLOB data type in Oracle?",
    answer: "BLOB is a varying-length binary string data type used to store up to 2GB. Length must be specified in bytes."
  },
  {
    question: "What is the difference between TRANSLATE and REPLACE in Oracle?",
    answer: "TRANSLATE substitutes character by character; REPLACE substitutes a single character with a word (string replacement)."
  },
  {
    question: "What are the different types of database objects?",
    answer: "Tables, Tablespaces, Views, Indexes, Synonyms."
  },
  {
    question: "What is the usage of Save Points in Oracle database?",
    answer: "Divide a transaction into smaller phases, enabling partial rollback. Maximum 5 save points allowed."
  },
  {
    question: "What is the difference between post-database commit and post-form commit?",
    answer: "Post-database commit fires after Oracle Forms issues commit to finalized transaction. Post-form commit fires during post and commit process, after database commit occurs."
  },
  {
    question: "What is Logical backup in Oracle?",
    answer: "Logical backup reads database records and writes them to a file. Export utility takes backup; Import utility recovers from backup."
  },
  {
    question: "What do you understand by Redo Log file mirroring?",
    answer: "Mirroring creates copies of redo log files by creating groups. LGWR writes to all members; if a group fails, database switches to next group. May diminish performance."
  },
  {
    question: "What is the meaning of recursive hints in Oracle?",
    answer: "The number of times a dictionary table is repeatedly called by various processes, caused by small data dictionary cache size."
  },
  {
    question: "What are the limitations of CHECK constraint?",
    answer: "Condition must be a Boolean expression evaluated using values in the row being inserted/updated; cannot contain subqueries."
  },
  {
    question: "What is the use of GRANT option in IMP command?",
    answer: "GRANT is used to import object grants."
  },
  {
    question: "What is the use of ROWS option in IMP command?",
    answer: "ROWS option indicates whether table rows should be imported."
  },
  {
    question: "What is the use of INDEXES option in IMP command?",
    answer: "INDEXES option determines whether indexes are imported."
  },
  {
    question: "What is the use of IGNORE option in IMP command?",
    answer: "IGNORE option specifies how object creation errors should be handled."
  },
  {
    question: "What is the use of SHOW option in IMP command?",
    answer: "SHOW option (SHOW=y) displays the DDL within the export file."
  },
  {
    question: "What is the use of FILE param in IMP command?",
    answer: "FILE param specifies the name(s) of the export file(s) to import (multiple files separated by commas)."
  },
  {
    question: "How to convert a date to char in Oracle? Give one example.",
    answer: "Using TO_CHAR function. Example: `SELECT TO_CHAR(TO_DATE('12-12-2012', 'DD-MM-YYYY'), 'YYYY-MM-DD') FROM dual;`"
  },
  {
    question: "What are actual and formal parameters?",
    answer: "Actual parameters are variables/expressions referenced in a subprogram call. Formal parameters are variables declared in the subprogram specification."
  },
  {
    question: "What are the extensions used by Oracle reports?",
    answer: "REP files and RDF file extensions."
  },
  {
    question: "How to convert a string to a date in Oracle database?",
    answer: "Using TO_DATE(string, format). Example: `TO_DATE('2012-12-12', 'YYYY/MM/DD')` returns December 12, 2012."
  },
  {
    question: "How do you find current date and time in Oracle?",
    answer: "Using SYSDATE function. Example: `SELECT TO_CHAR(SYSDATE, 'MM-DD-YYYY HH24:MI:SS') 'Current_Date' FROM DUAL;`"
  },
  {
    question: "What will be the syntax to find current date and time in format 'YYYY-MM-DD'?",
    answer: "`SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') 'Current_Date' FROM DUAL;`"
  }
];