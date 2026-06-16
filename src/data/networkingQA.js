// src/data/networkingQA.js
export const networkingQA = [
  {
    question: "What is the network?",
    answer: "A network is a set of devices connected by a physical media link, allowing sharing of data. Example: the internet connects millions of people worldwide."
  },
  {
    question: "What do you mean by network topology?",
    answer: "Network topology specifies the layout of a computer network, showing how devices and cables are connected. Types: Bus, Star, Ring, Mesh, Tree, Hybrid."
  },
  {
    question: "What are the advantages of Distributed Processing?",
    answer: "Secure, support encapsulation, distributed database, faster problem solving, security through redundancy, collaborative processing."
  },
  {
    question: "What is the criteria to check the network reliability?",
    answer: "Measured by Downtime (recovery time), Failure Frequency (how often it fails), Catastrophe (unexpected events like fire, earthquake)."
  },
  {
    question: "Which are the different factors that affect the security of a network?",
    answer: "Unauthorized Access and Viruses."
  },
  {
    question: "Which are the different factors that affect the reliability of a network?",
    answer: "Frequency of failure and Recovery time of a network after a failure."
  },
  {
    question: "Which are the different factors that affect the performance of a network?",
    answer: "Large number of users, Transmission medium types, Hardware, Software."
  },
  {
    question: "What makes a network effective and efficient?",
    answer: "Performance (transmit time, response time), Reliability (frequency of failure), Robustness (strength and condition), Security (protect from unauthorized access and viruses)."
  },
  {
    question: "What is bandwidth?",
    answer: "The range of frequency limits between a network's upper and lower frequency is called bandwidth."
  },
  {
    question: "What is a node and link?",
    answer: "A link is the physical medium of connection (e.g., optical fiber, coaxial cable). Nodes are the computers connected by the link."
  },
  {
    question: "What is a gateway? Is there any difference between a gateway and router?",
    answer: "A gateway (also known as a router) connects two or more networks and forwards messages. Difference: Router sends data between similar networks; Gateway sends data between dissimilar networks."
  },
  {
    question: "What is DNS?",
    answer: "Domain Name System – a naming system introduced in 1983 that maps domain names to IP addresses, allowing users to access resources without knowing IP addresses."
  },
  {
    question: "What is DNS forwarder?",
    answer: "A DNS server configured as a forwarder forwards unresolved queries to external DNS servers for resolution. If forwarder unavailable, it uses root hints."
  },
  {
    question: "What is NIC?",
    answer: "Network Interface Card – a peripheral card attached to a PC to connect to a network. Every NIC has a unique MAC address. Primarily used in desktop computers."
  },
  {
    question: "What is the meaning of 10Base-T?",
    answer: "10 = data transfer rate of 10 Mbps; Base = baseband; T = twisted pair cable."
  },
  {
    question: "What is NOS in computer networking?",
    answer: "Network Operating System – specialized software providing network connectivity. Examples: Novel NetWare (1983), Windows 2000, Windows XP, Linux."
  },
  {
    question: "What are the different types of networks?",
    answer: "PAN (Personal, up to 10m), LAN (Local, small area), HAN (House Area), CAN (Campus Area), MAN (Metropolitan), WAN (Wide Area), GAN (Global Area using satellites)."
  },
  {
    question: "What is POP3?",
    answer: "Post Office Protocol version 3 – used to access mail service on client machines. Works on Delete mode and Keep mode."
  },
  {
    question: "What do you understand by MAC address?",
    answer: "Media Access Control address – a unique address (no two devices have the same) at the Media Access Control Layer of Network Architecture."
  },
  {
    question: "What is IP address?",
    answer: "A unique 32-bit software address of a computer in a network system."
  },
  {
    question: "What is private IP address?",
    answer: "Reserved IP address ranges not valid for internet use; requires a proxy or NAT server to access the internet."
  },
  {
    question: "What is public IP address?",
    answer: "An address provided by an Internet Service Provider (ISP) that facilitates communication on the internet."
  },
  {
    question: "What is APIPA?",
    answer: "Automatic Private IP Addressing – a feature found in Microsoft operating systems."
  },
  {
    question: "What is the full form of ADS?",
    answer: "Active Directory Structure – a Microsoft technology to manage computers and devices. Consists of three tiers: Domain, Tree, Forest."
  },
  {
    question: "What is RAID?",
    answer: "A method to provide Fault Tolerance by using multiple Hard Disc Drives."
  },
  {
    question: "What is anonymous FTP?",
    answer: "Allows users to access files in public servers without identifying themselves, logging in as an anonymous guest."
  },
  {
    question: "What is protocol?",
    answer: "A set of rules governing all aspects of information communication."
  },
  {
    question: "What are the main elements of a protocol?",
    answer: "Syntax (structure/format of data, order), Semantics (meaning of each section), Timing (when and how fast data can be sent)."
  },
  {
    question: "What is the Domain Name System?",
    answer: "A supporting program used by other programs (e.g., to find the IP address of an e-mail recipient)."
  },
  {
    question: "What is link?",
    answer: "Connectivity between two devices including cables and protocols used for communication."
  },
  {
    question: "How many layers are in OSI reference model?",
    answer: "7 layers: Physical, DataLink, Network, Transport, Session, Presentation, Application."
  },
  {
    question: "What is the usage of OSI physical layer?",
    answer: "Converts data bits into electrical signals and vice versa. Network devices and cable types are considered here."
  },
  {
    question: "Explain the functionality of OSI session layer.",
    answer: "Provides protocols and means for two devices to communicate by holding a session. Responsible for setup, information exchange management, and tear-down."
  },
  {
    question: "What is the maximum length allowed for a UTP cable?",
    answer: "90 to 100 meters."
  },
  {
    question: "What is RIP?",
    answer: "Routing Information Protocol – a dynamic protocol used by routers to find the best route using hop count algorithm. Used for small/medium networks."
  },
  {
    question: "What do you understand by TCP/IP?",
    answer: "Transmission Control Protocol/Internet Protocol – a set of protocol layers designed for exchanging data on different types of networks."
  },
  {
    question: "What is netstat?",
    answer: "A command line utility program that provides useful information about the current TCP/IP setting of a connection."
  },
  {
    question: "What do you understand by ping command?",
    answer: "A utility program that allows you to check connectivity between network devices using IP address or name."
  },
  {
    question: "What is Sneakernet?",
    answer: "The earliest form of networking where data is physically transported using removable media."
  },
  {
    question: "Explain the peer-peer process.",
    answer: "The processes on each machine that communicate at a given layer are called peer-peer processes."
  },
  {
    question: "What is a congested switch?",
    answer: "When a switch receives packets faster than it can accommodate and runs out of buffer space, causing packet drops. This state is called congested state."
  },
  {
    question: "What is multiplexing in networking?",
    answer: "Techniques that allow simultaneous transmission of multiple signals across a single data link."
  },
  {
    question: "What are the advantages of address sharing?",
    answer: "Provides security benefits because host PCs on the internet can only see the public IP address of the translation device, not private IP addresses on the internal network."
  },
  {
    question: "What is RSA Algorithm?",
    answer: "Rivest-Shamir-Adleman algorithm – mostly used for public key encryption."
  },
  {
    question: "How many layers are in TCP/IP?",
    answer: "4 layers: Application Layer, Transport Layer, Internet Layer, Network Layer."
  },
  {
    question: "What is the difference between TCP/IP model and the OSI model?",
    answer: "TCP/IP has 4 layers, more reliable, horizontal approach, developed protocols first, supports only connectionless communication at network layer, protocol dependent. OSI has 7 layers, less reliable, vertical approach, developed model first, supports both connection-oriented/less, protocol independent."
  },
  {
    question: "What is the difference between domain and workgroup?",
    answer: "Workgroup: peer-to-peer, max 10 computers, users manage own resources, all computers on same LAN. Domain: client/server, up to 2000 computers, single administrator, computers can be anywhere, changes reflect globally."
  }
];