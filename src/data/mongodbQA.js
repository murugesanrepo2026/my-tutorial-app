// src/data/mongodbQA.js
export const mongodbQA = [
  {
    question: "What do you understand by NoSQL databases? Is MongoDB a NoSQL database? explain.",
    answer: "NoSQL stands for 'Not Only SQL'. It is a type of database that can handle unstructured, messy, and complicated data, unlike traditional RDBMS. Yes, MongoDB is a NoSQL database."
  },
  {
    question: "Which are the different languages supported by MongoDB?",
    answer: "MongoDB provides official driver support for C, C++, C#, Java, Node.js, Perl, PHP, Python, Ruby, Scala, Go, and Erlang."
  },
  {
    question: "What are the different types of NoSQL databases? Give some example.",
    answer: "Four basic types: Key value store (Redis, Riak), Document store (MongoDB, CouchDB), Column store (Cassandra, HBase), Graph base (Neo4j)."
  },
  {
    question: "Is MongoDB better than other SQL databases? If yes then how?",
    answer: "Yes, because it allows a highly flexible and scalable document structure (different documents in same collection can have different fields). It is also faster due to efficient indexing and storage techniques."
  },
  {
    question: "What type of DBMS is MongoDB?",
    answer: "MongoDB is a document oriented DBMS."
  },
  {
    question: "What is the difference between MongoDB and MySQL?",
    answer: "MongoDB is a NoSQL document database with flexible schema, horizontal scaling, and no joins. MySQL is a relational database with fixed schema, vertical scaling, and SQL joins."
  },
  {
    question: "Why MongoDB is known as best NoSQL database?",
    answer: "Because it is document oriented, has a rich query language, high performance, high availability, and easy scalability."
  },
  {
    question: "Does MongoDB support primary-key, foreign-key relationship?",
    answer: "No, by default MongoDB does not support primary key-foreign key relationships."
  },
  {
    question: "Can you achieve primary key - foreign key relationships in MongoDB?",
    answer: "Yes, by embedding one document inside another (e.g., an address document embedded inside a customer document)."
  },
  {
    question: "Does MongoDB need a lot of RAM?",
    answer: "No. It dynamically allocates and de-allocates RAM according to process requirements, so it can run even on a small amount of RAM."
  },
  {
    question: "Explain the structure of ObjectID in MongoDB.",
    answer: "ObjectID is a 12-byte BSON type: 4 bytes (seconds since epoch), 3 bytes (machine identifier), 2 bytes (process id), 3 bytes (counter)."
  },
  {
    question: "Is it true that MongoDB uses BSON to represent document structure?",
    answer: "Yes."
  },
  {
    question: "What are Indexes in MongoDB?",
    answer: "Indexes are used to execute queries efficiently. Without indexes, MongoDB performs a collection scan. Appropriate indexes limit the number of documents inspected."
  },
  {
    question: "By default, which index is created by MongoDB for every collection?",
    answer: "The `_id` index is created by default for every collection."
  },
  {
    question: "What is a Namespace in MongoDB?",
    answer: "A namespace is the concatenation of the database name and the collection name, where MongoDB stores BSON objects."
  },
  {
    question: "Can journaling features be used to perform safe hot backups?",
    answer: "Yes."
  },
  {
    question: "Why does Profiler use in MongoDB?",
    answer: "MongoDB uses a database profiler to collect characteristics of each operation against the database, helping to find slow queries and write operations."
  },
  {
    question: "If you remove an object attribute, is it deleted from the database?",
    answer: "Yes. Remove the attribute and then re-save() the object."
  },
  {
    question: "In which language MongoDB is written?",
    answer: "MongoDB is written and implemented in C++."
  },
  {
    question: "Does MongoDB need a lot space of Random Access Memory (RAM)?",
    answer: "No. MongoDB can be run on small free space of RAM."
  },
  {
    question: "What language you can use with MongoDB?",
    answer: "You can use any popular programming language because MongoDB client drivers support all of them."
  },
  {
    question: "Does MongoDB database have tables for storing records?",
    answer: "No. Instead of tables, MongoDB uses 'Collections' to store data."
  },
  {
    question: "Do the MongoDB databases have schema?",
    answer: "Yes, MongoDB databases have dynamic schema. No need to define structure to create collections."
  },
  {
    question: "What is the method to configure the cache size in MongoDB?",
    answer: "MongoDB's cache is not configurable. It uses all free space on the system automatically via memory mapped files."
  },
  {
    question: "How to do Transaction/locking in MongoDB?",
    answer: "MongoDB doesn't use traditional locking or complex transactions with rollback. It keeps transaction support simple to enhance performance."
  },
  {
    question: "Why 32 bit version of MongoDB are not preferred?",
    answer: "32-bit build limits total storage size to 2GB. 64-bit build provides virtually unlimited storage, so 64-bit is preferred."
  },
  {
    question: "Is it possible to remove old files in the moveChunk directory?",
    answer: "Yes, these files can be deleted once the operations are done. They are backups during normal shard balancing and require manual cleanup."
  },
  {
    question: "What will have to do if a shard is down or slow and you do a query?",
    answer: "If a shard is down, the query returns an error unless you set a partial query option. If a shard is slow, mongos waits for its response."
  },
  {
    question: "Explain the covered query in MongoDB.",
    answer: "A covered query satisfies: 1) fields used in query are part of an index, and 2) fields returned in results are also in the same index."
  },
  {
    question: "What is the importance of covered query?",
    answer: "Covered query is faster because indexes are stored in RAM or sequentially on disk. MongoDB can match conditions and return results using the index without reading documents."
  },
  {
    question: "What is sharding in MongoDB?",
    answer: "Sharding is a procedure of storing data records across multiple machines, creating horizontal partitions (shards) to meet data growth demands."
  },
  {
    question: "What is replica set in MongoDB?",
    answer: "A replica set is a group of MongoDB instances hosting the same data set. One node is primary (accepts writes), others are secondary (replicate from primary)."
  },
  {
    question: "What is primary and secondary replica set in MongoDB?",
    answer: "Primary nodes (master) accept write operations. Secondary nodes (slave) are read-only and replicate data from the primary."
  },
  {
    question: "By default, which replica sets are used to write data?",
    answer: "By default, MongoDB writes data only to the primary replica set."
  },
  {
    question: "What is CRUD in MongoDB?",
    answer: "Create, Read, Update, Delete – the four basic operations supported by MongoDB."
  },
  {
    question: "In which format MongoDB represents document structure?",
    answer: "MongoDB uses BSON (Binary JSON) to represent document structures."
  },
  {
    question: "What will happen when you remove a document from database in MongoDB? Does MongoDB remove it from disk?",
    answer: "Yes, when you remove a document, MongoDB removes it from disk as well."
  },
  {
    question: "Why are MongoDB data files large in size?",
    answer: "MongoDB pre-allocates data files to reserve space and avoid file system fragmentation, leading to larger file sizes."
  },
  {
    question: "What is a storage engine in MongoDB?",
    answer: "A storage engine manages how data is stored on disk. Different engines offer different performance characteristics (e.g., read-heavy vs. write-heavy)."
  },
  {
    question: "Which are the storage engines used by MongoDB?",
    answer: "MMAPv1 and WiredTiger are the two storage engines used by MongoDB."
  },
  {
    question: "What is the usage of profiler in MongoDB?",
    answer: "The database profiler collects data about write operations, cursors, and database commands. It writes data to the `system.profile` collection (capped)."
  },
  {
    question: "Is it possible to configure the cache size for MMAPv1 in MongoDB?",
    answer: "No, MMAPv1 does not allow configuring the cache size."
  },
  {
    question: "How to configure the cache size for WiredTiger in MongoDB?",
    answer: "Use the `storage.wiredTiger.engineConfig.cacheSizeGB` option to specify the maximum cache size."
  },
  {
    question: "How does MongoDB provide concurrency?",
    answer: "MongoDB uses reader-writer locks, allowing concurrent shared read access but exclusive access for a single write operation."
  },
  {
    question: "What is the difference between MongoDB and Redis database?",
    answer: "Redis is faster, uses key-value storage, and is harder to code. MongoDB is document-based and easier to use."
  },
  {
    question: "What is the difference between MongoDB and CouchDB?",
    answer: "MongoDB is faster, lacks triggers, and serializes JSON to BSON. CouchDB is safer, has triggers, and doesn't store data in JSON format."
  },
  {
    question: "What is the difference between MongoDB and Cassandra?",
    answer: "MongoDB is document-oriented (C++), easier to administer. Cassandra is a high-performance distributed database (Java) with no single point of failure."
  },
  {
    question: "Is there any need to create database command in MongoDB?",
    answer: "No, MongoDB automatically creates a database when you first save a value into a defined collection."
  }
];