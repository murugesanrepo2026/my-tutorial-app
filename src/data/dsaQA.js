// src/data/dsaQA.js
export const dsaQA = [
  {
    question: "What is Data Structure? Explain.",
    answer: "A data structure is a way that specifies how to organize and manipulate data, defining relationships between them. Examples: arrays, Linked List, Stack, Queue."
  },
  {
    question: "Describe the types of Data Structures.",
    answer: "Linear Data Structure: elements arranged sequentially (e.g., array, linked list). Non-Linear Data Structure: elements connected with two or more others in non-sequential arrangement (e.g., tree, graph)."
  },
  {
    question: "List the area of applications of Data Structure.",
    answer: "Compiler Design, Operating System, Database Management System, Statistical analysis, Numerical Analysis, Graphics, Artificial Intelligence, Simulation."
  },
  {
    question: "What is the difference between file structure and storage structure?",
    answer: "Storage structure: representation of data structure in computer memory. File structure: representation of storage structure in auxiliary memory."
  },
  {
    question: "List the data structures which are used in RDBMS, Network Data Modal, and Hierarchical Data Model.",
    answer: "RDBMS uses Array; Network data model uses Graph; Hierarchical data model uses Trees."
  },
  {
    question: "Which data structure is used to perform recursion?",
    answer: "Stack data structure (LIFO) is used in recursion to save iteration variables at each function call."
  },
  {
    question: "What is a Stack?",
    answer: "A stack is an ordered list where insertion and deletion occur only at one end (top). It is LIFO (Last-In-First-Out) list."
  },
  {
    question: "List the area of applications where stack data structure can be used?",
    answer: "Expression evaluation, Backtracking, Memory Management, Function calling and return."
  },
  {
    question: "What are the operations that can be performed on a stack?",
    answer: "Push (insert), Pop (delete), Peek (view top element)."
  },
  {
    question: "Write the stack overflow condition.",
    answer: "Overflow occurs when top = Maxsize - 1."
  },
  {
    question: "What is the difference between PUSH and POP?",
    answer: "PUSH inserts data into the stack. POP retrieves/deletes data from the stack."
  },
  {
    question: "Write the steps involved in the insertion and deletion of an element in the stack.",
    answer: "Push: increment top, copy item to array[top]; repeat until overflow. Pop: store topmost element, decrement top, return element."
  },
  {
    question: "What is a postfix expression?",
    answer: "An expression where operators follow operands, no need for parentheses or precedence rules. Example: 'a+b' becomes 'ab+'."
  },
  {
    question: "Write the postfix form of the expression: (A + B) * (C - D)",
    answer: "AB+CD-*"
  },
  {
    question: "Which notations are used in Evaluation of Arithmetic Expressions using prefix and postfix forms?",
    answer: "Polish (prefix) and Reverse Polish (postfix) notations."
  },
  {
    question: "What is an array?",
    answer: "An array is a collection of similar data items stored at contiguous memory locations, accessed by index number."
  },
  {
    question: "How to reference all the elements in a one-dimension array?",
    answer: "Use an indexed loop from 0 to array size minus one, using loop counter as array subscript."
  },
  {
    question: "What is a multidimensional array?",
    answer: "An array of arrays, storing data in tabular form (rows and columns), e.g., 2D array."
  },
  {
    question: "How are the elements of a 2D array stored in the memory?",
    answer: "Row-Major Order: rows stored contiguously. Column-Major Order: columns stored contiguously."
  },
  {
    question: "Calculate the address of a random element present in a 2D array, given base address as BA.",
    answer: "Row-Major: Address(a[i][j]) = BA + (i * n + j) * size. Column-Major: Address(a[i][j]) = BA + (j * m + i) * size."
  },
  {
    question: "Define Linked List Data structure.",
    answer: "A collection of randomly stored nodes, each containing data and a pointer to the next node."
  },
  {
    question: "Are linked lists considered linear or non-linear data structures?",
    answer: "Based on data storage: non-linear. Based on access strategy: linear."
  },
  {
    question: "What are the advantages of Linked List over an array?",
    answer: "Dynamic size, no contiguous memory requirement, grows as program demands, limited only by available memory."
  },
  {
    question: "Write the syntax in C to create a node in the singly linked list.",
    answer: "struct node { int data; struct node *next; }; struct node *head, *ptr; ptr = (struct node *)malloc(sizeof(struct node));"
  },
  {
    question: "If you are using C language to implement the heterogeneous linked list, what pointer type should be used?",
    answer: "Void pointer (void*) because it can store a pointer to any data type."
  },
  {
    question: "What is doubly linked list?",
    answer: "A linked list where each node has pointers to both next and previous nodes, allowing traversal in both directions."
  },
  {
    question: "Write the C program to insert a node in circular singly list at the beginning.",
    answer: "Code provided in original: allocate node, if empty set head=ptr and ptr->next=head; else traverse to last, set ptr->next=head, last->next=ptr, head=ptr."
  },
  {
    question: "Define the queue data structure.",
    answer: "An ordered list where insertions occur at REAR and deletions at FRONT (FIFO)."
  },
  {
    question: "List some applications of queue data structure.",
    answer: "Waiting lists for shared resources (printer, CPU), asynchronous data transfer (pipes, sockets), buffers (MP3 player), playlist management, OS interrupt handling."
  },
  {
    question: "What are the drawbacks of array implementation of Queue?",
    answer: "Memory wastage (space before front cannot be reused) and fixed array size making extension impossible."
  },
  {
    question: "What are the scenarios in which an element can be inserted into the circular queue?",
    answer: "If (rear+1)%maxsize != front (not full), insert by incrementing rear modulo maxsize; if rear = max-1 and front != 0, set rear=0 and insert."
  },
  {
    question: "What is a dequeue?",
    answer: "Double-ended queue allowing insertion and deletion at both front and rear ends."
  },
  {
    question: "What is the minimum number of queues that can be used to implement a priority queue?",
    answer: "Two queues: one for data elements, one for storing priorities."
  },
  {
    question: "Define the tree data structure.",
    answer: "A recursive data structure with a root node and remaining nodes partitioned into nonempty subtrees."
  },
  {
    question: "List the types of tree.",
    answer: "General Tree, Forests, Binary Tree, Binary Search Tree, Expression Tree, Tournament Tree."
  },
  {
    question: "What are Binary trees?",
    answer: "A tree where each node has at most two children (left and right)."
  },
  {
    question: "Write the C code to perform in-order traversal on a binary tree.",
    answer: "void in-order(struct treenode *tree) { if(tree != NULL) { in-order(tree->left); printf('%d',tree->root); in-order(tree->right); } }"
  },
  {
    question: "What is the maximum number of nodes in a binary tree of height k?",
    answer: "2^(k+1) - 1 where k >= 1"
  },
  {
    question: "Which data structure suits the most in the tree construction?",
    answer: "Queue data structure."
  },
  {
    question: "Which data structure suits the most in the tree construction?",
    answer: "Queue data structure."
  },
  {
    question: "Write the recursive C function to count the number of nodes present in a binary tree.",
    answer: "int count(struct node* t) { if(t) { int l = count(t->left); int r = count(t->right); return (1+l+r); } else return 0; }"
  },
  {
    question: "Write a recursive C function to calculate the height of a binary tree.",
    answer: "int countHeight(struct node* t) { if(!t) return 0; if((!t->left) && (!t->right)) return 0; int l=countHeight(t->left); int r=countHeight(t->right); return (1+((l>r)?l:r)); }"
  },
  {
    question: "How can AVL Tree be useful in all the operations as compared to Binary search tree?",
    answer: "AVL tree maintains height O(log n) by preventing skewing, ensuring operations are O(log n) instead of O(n) in worst-case skewed BST."
  },
  {
    question: "State the properties of B Tree.",
    answer: "Each node has at most m children; non-root/internal nodes have at least ⌈m/2⌉ children; root has at least 2 children; all leaves at same level."
  },
  {
    question: "What are the differences between B tree and B+ tree?",
    answer: "B Tree: search keys not repeated, data in leaf and internal nodes, slower search, complex deletion. B+ Tree: redundant keys allowed, data only in leaf nodes, faster search, simple deletion, leaf nodes linked."
  },
  {
    question: "List some applications of Tree-data structure.",
    answer: "Arithmetic expression manipulation, symbol table construction, syntax analysis, hierarchical data model."
  },
  {
    question: "Define the graph data structure.",
    answer: "An ordered set G(V, E) where V(G) are vertices and E(G) are edges connecting vertices. Can be seen as a cyclic tree."
  },
  {
    question: "Differentiate among cycle, path, and circuit.",
    answer: "Path: sequence of adjacent vertices with no restrictions. Cycle: closed path where initial vertex equals end vertex, no vertex repeated. Circuit: closed path where initial equals end, vertices may be repeated."
  },
  {
    question: "Mention the data structures which are used in graph implementation.",
    answer: "Sequential representation: Adjacency matrix. Linked representation: Adjacency list."
  },
  {
    question: "Which data structures are used in BFS and DFS algorithm?",
    answer: "BFS uses Queue; DFS uses Stack."
  }
];