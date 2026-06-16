// src/data/osQA.js
export const osQA = [
  {
    question: "What is an operating system?",
    answer: "The operating system is a software program that facilitates computer hardware to communicate and operate with computer software. It is the most important part of a computer system."
  },
  {
    question: "What is the main purpose of an operating system?",
    answer: "Two main purposes: 1) Ensure computer system performs well by managing computational activities. 2) Provide an environment for development and execution of programs."
  },
  {
    question: "What are the different operating systems?",
    answer: "Batched operating systems, Distributed operating systems, Timesharing operating systems, Multi-programmed operating systems, Real-time operating systems."
  },
  {
    question: "What is a socket?",
    answer: "A socket is used to make a connection between two applications. Endpoints of the connection are called sockets."
  },
  {
    question: "What is a real-time system?",
    answer: "A real-time system is used when rigid-time requirements are placed on processor operation. It has well-defined and fixed time constraints."
  },
  {
    question: "What is kernel?",
    answer: "Kernel is the core and most important part of a computer operating system which provides basic services for all parts of the OS."
  },
  {
    question: "What is monolithic kernel?",
    answer: "A monolithic kernel includes all operating system code in a single executable image."
  },
  {
    question: "What do you mean by a process?",
    answer: "An executing program is known as a process. Types: Operating System Processes and User Processes."
  },
  {
    question: "What are the different states of a process?",
    answer: "New Process, Running Process, Waiting Process, Ready Process, Terminated Process."
  },
  {
    question: "What is the difference between micro kernel and macro kernel?",
    answer: "Micro kernel runs minimal performance-affecting services; other operations performed by processor. Macro Kernel is a combination of micro and monolithic kernel."
  },
  {
    question: "What is the concept of reentrancy?",
    answer: "A memory-saving technique for multi-programmed time-sharing systems allowing multiple users to share a single program copy. Key aspects: program code cannot modify itself; local data for each user stored separately."
  },
  {
    question: "What is the difference between process and program?",
    answer: "A program while running or executing is known as a process."
  },
  {
    question: "What is the use of paging in operating system?",
    answer: "Paging solves external fragmentation problem and ensures data is available as quickly as possible."
  },
  {
    question: "What is the concept of demand paging?",
    answer: "If an area of memory is not currently being used, it is swapped to disk to make room for an application's need."
  },
  {
    question: "What is the advantage of a multiprocessor system?",
    answer: "Increased processors give considerable increment in throughput, cost-effective (share resources), and overall reliability increases."
  },
  {
    question: "What is virtual memory?",
    answer: "A memory management technique that enables processes to execute outside of memory when an executing program cannot fit in physical memory."
  },
  {
    question: "What is thrashing?",
    answer: "A phenomenon in virtual memory where the processor spends most of its time swapping pages rather than executing instructions."
  },
  {
    question: "What are the four necessary and sufficient conditions behind deadlock?",
    answer: "Mutual Exclusion (resources non-sharable), Hold and Wait (holding resource while waiting for another), No Preemption (resources cannot be taken away), Circular Wait (chain of processes each waiting for next)."
  },
  {
    question: "What is a thread?",
    answer: "A thread is a basic unit of CPU utilization consisting of a thread ID, program counter, register set, and a stack."
  },
  {
    question: "What is FCFS?",
    answer: "First Come, First Served – a scheduling algorithm where the first process requesting the CPU is allocated first, managed by a FIFO queue."
  },
  {
    question: "What is SMP?",
    answer: "Symmetric MultiProcessing – the most common multiple processor system where each processor runs an identical copy of the OS, communicating as required."
  },
  {
    question: "What is RAID? What are the different RAID levels?",
    answer: "Redundant Array of Independent Disks – stores data redundantly to improve performance. Levels: RAID 0 (striped without fault tolerance), RAID 1 (mirroring), RAID 2 (error-correcting codes), RAID 3 (bit-interleaved parity), RAID 4 (block-interleaved parity), RAID 5 (block-interleaved distributed parity), RAID 6 (P+Q redundancy)."
  },
  {
    question: "What is deadlock? Explain.",
    answer: "A situation where two processes are waiting for each other to complete, causing both to hang indefinitely."
  },
  {
    question: "Which are the necessary conditions to achieve a deadlock?",
    answer: "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait."
  },
  {
    question: "What is Banker's algorithm?",
    answer: "A deadlock-avoidance method named after banking systems where a bank never allocates cash in a way that it cannot satisfy all customer requirements."
  },
  {
    question: "What is the difference between logical address space and physical address space?",
    answer: "Logical address space is generated by CPU. Physical address space is seen by the memory unit."
  },
  {
    question: "What is fragmentation?",
    answer: "A phenomenon of memory wastage that reduces capacity and performance because space is used inefficiently."
  },
  {
    question: "How many types of fragmentation occur in Operating System?",
    answer: "Two types: Internal fragmentation (fixed size allocation units) and External fragmentation (variable-size allocation units)."
  },
  {
    question: "What is spooling?",
    answer: "A process where data is temporarily gathered to be used and executed by a device, program, or system. Commonly associated with printing, queueing multiple jobs to a printer."
  },
  {
    question: "What is the difference between internal commands and external commands?",
    answer: "Internal commands are built-in part of the OS. External commands are separate file programs stored in a separate folder or directory."
  },
  {
    question: "What is semaphore?",
    answer: "A protected variable or abstract data type used to lock a resource being used. Value indicates status of a common resource. Types: Binary semaphores and Counting semaphores."
  },
  {
    question: "What is a binary Semaphore?",
    answer: "A semaphore that takes only 0 and 1 as values, used to implement mutual exclusion and synchronize concurrent processes."
  },
  {
    question: "What is Belady's Anomaly?",
    answer: "Also called FIFO anomaly. When increasing the number of frames allocated to a process sometimes increases page faults, reversing expected performance."
  },
  {
    question: "What is starvation in Operating System?",
    answer: "A resource management problem where a waiting process does not get needed resources for a long time because resources are allocated to other processes."
  },
  {
    question: "What is aging in Operating System?",
    answer: "A technique used to avoid starvation in resource scheduling systems."
  },
  {
    question: "What are the advantages of multithreaded programming?",
    answer: "Enhanced responsiveness to users, resource sharing within the process, economical, completely utilize multiprocessing architecture."
  },
  {
    question: "What is the difference between logical and physical address space?",
    answer: "Logical address is generated by CPU. Physical address is seen by the memory unit."
  },
  {
    question: "What are overlays?",
    answer: "Overlays make a process larger than allocated memory by keeping only important instructions and data in memory at any given time."
  },
  {
    question: "When does thrashing occur?",
    answer: "Thrashing occurs when the system spends more time paging instead of executing – an instance of high paging activity."
  },
  {
    question: "What is a Batch Operating System?",
    answer: "A type of OS that creates batches for execution of similar jobs. An operator groups comparable jobs into batches, following First Come First Serve principle."
  },
  {
    question: "Do Batch Operating Systems interact with computers for processing job needs?",
    answer: "No. This job is taken up by the Operator present in Batch Operating Systems."
  },
  {
    question: "What are the advantages of Batch Operating System?",
    answer: "Very small idle time, large tasks managed easily, many users can use it, processors know how long a task will take to complete when in line."
  },
  {
    question: "What are the disadvantages of Batch Operating System?",
    answer: "If one job fails, others wait indefinitely; very challenging to debug; can be expensive; operators must be knowledgeable."
  },
  {
    question: "Where is Batch Operating System used in Real Life?",
    answer: "Payroll Systems and generating Bank Statements."
  },
  {
    question: "What is the Function of Operating System?",
    answer: "File Management, Job Management, Process Management, Device Management, Memory Management."
  },
  {
    question: "What are the Services provided by the Operating System?",
    answer: "Security, protection from external threats, file management, program execution, controlling I/O devices, program creation, error detection, communication between devices, performance analysis."
  },
  {
    question: "What is a System Call in Operating Systems?",
    answer: "A system call allows programs to communicate with the OS. It uses APIs to deliver OS services to user programs when an application requests something from the kernel."
  },
  {
    question: "What are the Types of System Calls in Operating Systems?",
    answer: "Communication, Information Maintenance, File Management, Device Management, Process Control."
  },
  {
    question: "What are the functions present in Process Control and File Management System Call?",
    answer: "Process Control: Create, Allocate, Abort, End, Terminate, Free Memory. File Management: Create, Open, Read, Close, Delete."
  },
  {
    question: "What is a Process in Operating Systems?",
    answer: "A process is software being run on the OS – a procedure carried out sequentially. It is the fundamental unit of work and an active entity, unlike a program (passive)."
  },
  {
    question: "What are the types of Processes in Operating Systems?",
    answer: "Operating System Process and User Process."
  },
  {
    question: "What is Process Control Block (PCB)?",
    answer: "A data structure that houses details about processes (also called task control block, process table entry). It describes the OS's present condition and is crucial for process management."
  },
  {
    question: "What are the Data Items in Process Control Block?",
    answer: "Process State, Process Number, Program Counter, Registers, Memory Limits, List of Open Files."
  },
  {
    question: "What are the Files used in the Process Control Block?",
    answer: "CPU Scheduling Information, Memory Management Information, Accounting Information, I/O Status Information."
  },
  {
    question: "What are the differences between Thread and Process?",
    answer: "Threads are executed within the same process and are not independent. Processes are executed in different memory spaces and are independent of each other."
  },
  {
    question: "What are the advantages of Threads in Operating Systems?",
    answer: "Threads execute faster than switches; communication between threads is easier; throughput increases when process divided into multiple threads; output can be returned immediately when a thread completes."
  },
  {
    question: "What are the disadvantages of Threads in Operating Systems?",
    answer: "Code becomes more challenging to maintain/debug with more threads; creating threads uses system resources (memory, CPU); unhandled exceptions inside worker method can crash the application."
  },
  {
    question: "What are the types of Threads in Operating System?",
    answer: "User Level Threads and Kernel Level Threads."
  },
  {
    question: "What is User Kernel Thread?",
    answer: "Kernel is unaware of user-level threads as they are implemented at user level. They are treated like single-threaded processes, smaller and quicker, with small PCB, Stack, Program Counter, and independent of kernel involvement in synchronization."
  }
];