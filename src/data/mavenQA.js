// src/data/mavenQA.js
export const mavenQA = [
  {
    question: "What is Maven?",
    answer: "Maven is a project management tool based on POM (Project Object Model)."
  },
  {
    question: "What aspects are managed by Maven?",
    answer: "Builds, Documentation, Reporting, SCMs, Releases, Distribution."
  },
  {
    question: "What are the advantages of Maven?",
    answer: "No need to add jar files in each project, creates right directory structure, builds and deploys the project."
  },
  {
    question: "What is the command to check the maven version?",
    answer: "mvn -version"
  },
  {
    question: "What does the build tool do?",
    answer: "Generates source code (if auto-generated code is used), generates documentation from source code, compiles source code, packages compiled code into a JAR or ZIP file, installs the packaged code in local/remote/central repository."
  },
  {
    question: "What is the difference between Ant and Maven?",
    answer: "Ant is a toolbox (build tool), procedural, no lifecycle, no formal conventions, scripts not reusable. Maven is a framework (project management tool), declarative, has lifecycle, conventions for source code placement, reusable plugins."
  },
  {
    question: "Why is the use of the profile required in Maven?",
    answer: "Profiles are used to provide portability to projects, allowing different configurations for different environments."
  },
  {
    question: "What is the syntax for offline project creation?",
    answer: "mvn -o package"
  },
  {
    question: "How is the propagation of plugins to child POMs stopped?",
    answer: "Set <inherited> to false."
  },
  {
    question: "What is the use of the exclusion element?",
    answer: "The exclusion element is used to exclude dependencies."
  },
  {
    question: "Define SNAPSHOT in terms of maven.",
    answer: "SNAPSHOT indicates the current development copy (not yet released)."
  },
  {
    question: "Define Archetype.",
    answer: "Archetype is a Maven plugin designed for the creation of project structure."
  },
  {
    question: "What does central repository consist of?",
    answer: "It consists of a large number of libraries that are frequently used."
  },
  {
    question: "Give the command for installation of the JAR file in a local repository.",
    answer: "mvn install"
  },
  {
    question: "Mention the phases of cleaning lifecycle.",
    answer: "pre-clean, clean, post-clean"
  },
  {
    question: "What is the purpose of mvn clean command?",
    answer: "The command removes the target directory before the start of a build process."
  },
  {
    question: "What is a MOJO?",
    answer: "MOJO stands for Maven plain Old Java Object. Each MOJO is an executable goal in Maven, and a plugin is a distribution of one or more related MOJOs."
  },
  {
    question: "What is a repository?",
    answer: "A repository is a directory where all the jars and pom.xml files are stored. Types: Local Repository, Central Repository, Remote Repository."
  },
  {
    question: "What is a local repository?",
    answer: "Maven local repository is created by Maven in your local system when you run any Maven command."
  },
  {
    question: "What is a central repository?",
    answer: "Maven central repository is created by the Maven community on the web."
  },
  {
    question: "What is a remote repository?",
    answer: "Maven remote repository is located on the web by different vendors. Dependencies must be defined in pom.xml manually because many libraries are missing from the central repository."
  },
  {
    question: "What is POM?",
    answer: "POM stands for Project Object Model. The pom.xml file contains project information and configuration."
  },
  {
    question: "What are the build phases in Maven?",
    answer: "validate, compile, test, package, integration-test, verify, install, deploy."
  },
  {
    question: "What is the command to package maven project?",
    answer: "mvn package"
  },
  {
    question: "What is the fully qualified artifact name of maven project?",
    answer: "<groupId>:<artifactId>:<version>"
  },
  {
    question: "What is an archetype?",
    answer: "Archetype is the Maven plugin that creates the project structure."
  }
];