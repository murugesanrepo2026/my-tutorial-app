// src/data/awsQA.js
export const awsQA = [
  {
    question: "What is AWS?",
    answer: "AWS (Amazon Web Services) is a service provided by Amazon that uses distributed IT infrastructure to provide different IT resources on demand, including IaaS, PaaS, and SaaS."
  },
  {
    question: "What are the components of AWS?",
    answer: "S3 (Simple Storage Service), EC2 (Elastic Compute Cloud), EBS (Elastic Block Store), CloudWatch, IAM (Identity Access Management), Simple Email Service, Route53."
  },
  {
    question: "What are Key-pairs?",
    answer: "Key-pairs are a combination of a public key (encrypts login information) and a private key (decrypts). Amazon EC2 uses public key cryptography to securely access instances."
  },
  {
    question: "What is S3?",
    answer: "S3 (Simple Storage Service) is a storage service in AWS that allows you to store vast amounts of data as objects in buckets."
  },
  {
    question: "What are the pricing models for EC2 instances?",
    answer: "On-Demand (pay-as-you-go), Reserved (up to 75% discount, 1-3 year term), Spot (up to 90% discount, unused capacity), Dedicated Hosts (physical server dedicated to your use)."
  },
  {
    question: "What is AWS Lambda?",
    answer: "AWS Lambda is a compute service that runs your code without managing servers. You pay only when your code runs."
  },
  {
    question: "How many buckets can be created in S3?",
    answer: "By default, you can create up to 100 buckets."
  },
  {
    question: "What is Cross Region Replication?",
    answer: "Cross Region Replication enables asynchronous copying of objects from one bucket to another bucket in the same or different region."
  },
  {
    question: "What is CloudFront?",
    answer: "CloudFront is a content delivery network (CDN) consisting of distributed servers that deliver web content based on user geographic locations."
  },
  {
    question: "What are Regions and Availability Zones in AWS?",
    answer: "A Region is a geographical area consisting of 2 or more Availability Zones. An Availability Zone is a data center with servers, switches, firewalls, and load balancing."
  },
  {
    question: "What are edge locations in AWS?",
    answer: "Edge locations are endpoints in AWS used for caching content (CloudFront)."
  },
  {
    question: "What is the minimum and maximum size that you can store in S3?",
    answer: "Minimum size is 0 bytes, maximum size is 5 TB per object."
  },
  {
    question: "What are EBS Volumes?",
    answer: "Elastic Block Store (EBS) provides persistent block storage volumes for EC2 instances, automatically replicated within its Availability Zone for high durability and low latency."
  },
  {
    question: "What is Auto Scaling?",
    answer: "Auto Scaling automatically scales capacity to maintain steady performance, allowing you to scale multiple resources across services. Benefits: quick setup, smart scaling decisions, automated performance maintenance."
  },
  {
    question: "What is AMI?",
    answer: "AMI (Amazon Machine Image) is a virtual image used to create a virtual machine within an EC2 instance."
  },
  {
    question: "Can an AMI be shared?",
    answer: "Yes, an AMI can be shared with other AWS accounts."
  },
  {
    question: "What is an EIP?",
    answer: "EIP (Elastic IP Address) is a static IP address associated with your AWS account, not an EC2 instance. It can be remapped to another instance if needed."
  },
  {
    question: "What are the different storage classes in S3?",
    answer: "Storage classes include Standard (frequently accessed), Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier (archive), Glacier Deep Archive. Choose based on access frequency and durability needs."
  },
  {
    question: "How can you secure access to your S3 bucket?",
    answer: "Using ACLs (Access Control Lists) to manage bucket/object access, and Bucket Policies (JSON documents) defining allowed/denied actions for the bucket and all objects."
  },
  {
    question: "What are policies and what are the different types of policies?",
    answer: "Policies define permissions in JSON. Types: Identity-based policies (Managed: AWS managed or custom; Inline), Resource-based policies, Permissions boundaries, Organizations SCPs, Access Control Lists (ACLs), Session policies."
  },
  {
    question: "What are different types of instances?",
    answer: "General Purpose (T2, M4, M3), Compute Optimized (C4, C3), GPU Instances (G2), Memory Optimized (R3), Storage Optimized (I2, D2)."
  },
  {
    question: "What is the default storage class in S3?",
    answer: "The default storage class is Standard (Frequently Accessed)."
  },
  {
    question: "What is a snowball?",
    answer: "Snowball is a petabyte-scale data transport solution using secure appliances to transfer large amounts of data into and out of AWS cloud."
  },
  {
    question: "Difference between Stopping and Terminating instances?",
    answer: "Stopping shuts down the instance (EBS volume remains, can restart). Terminating removes the instance from your account (EBS volume also removed, cannot restart)."
  },
  {
    question: "How many Elastic IPs can you create?",
    answer: "5 Elastic IP addresses per AWS account per region."
  },
  {
    question: "What is a Load Balancer?",
    answer: "A Load Balancer distributes HTTP/HTTPS traffic across multiple servers so no single server gets overwhelmed, balancing the application load."
  },
  {
    question: "What is VPC?",
    answer: "VPC (Virtual Private Cloud) is an isolated area of AWS cloud where you can launch resources in a virtual network you define, with control over IP addresses, subnets, route tables, and gateways."
  },
  {
    question: "What is VPC peering connection?",
    answer: "A VPC peering connection connects two VPCs via a direct network route using private IP addresses, allowing instances to communicate as if in the same network. Can peer within same account or across accounts."
  },
  {
    question: "What are NAT Gateways?",
    answer: "NAT (Network Address Translation) Gateway enables EC2 instances in a private subnet to connect to the internet or other AWS services."
  },
  {
    question: "How can you control security to your VPC?",
    answer: "Using Security Groups (virtual firewall at instance level for inbound/outbound traffic) and Network Access Control Lists (NACL) (firewall at subnet level)."
  },
  {
    question: "What are the different database types in RDS?",
    answer: "Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, SQL Server."
  },
  {
    question: "What is Redshift?",
    answer: "Redshift is a fast, scalable, fully managed data warehouse service using machine learning, massively parallel query execution, and columnar storage for petabyte/exabyte-scale analytics."
  },
  {
    question: "What is SNS?",
    answer: "SNS (Simple Notification Service) is a web service for publishing messages from an application and sending them to other applications (highly scalable, cost-effective)."
  },
  {
    question: "What are the different types of routing policies in Route53?",
    answer: "Simple Routing Policy (round-robin for single resource), Weighted Routing Policy (route traffic in specified proportions), Latency-based Routing Policy (lowest latency), Failover Routing Policy, Geolocation Routing Policy."
  },
  {
    question: "What is the maximum size of messages in SQS?",
    answer: "The maximum size of a message in SQS is 256 KB."
  }
];