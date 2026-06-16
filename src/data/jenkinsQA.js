// src/data/jenkinsQA.js
export const jenkinsQA = [
  {
    question: "What is Jenkins?",
    answer: "Jenkins is an open source continuous integration tool written in Java. It keeps track on version control system and initiates/monitors a build system when changes occur."
  },
  {
    question: "What is the difference between Maven, Ant and Jenkins?",
    answer: "Maven and Ant are Build Technologies whereas Jenkins is a continuous integration tool."
  },
  {
    question: "Which SCM tools does Jenkins support?",
    answer: "AccuRev, CVS, Subversion, Git, Mercurial, Perforce, Clearcase, RTC."
  },
  {
    question: "What is continuous integration in Jenkins?",
    answer: "Continuous integration is an automated process where each piece of code is tested daily by integrating all modules. Multiple developers work on different segments, and integration tests are performed automatically to ensure all codes are tested."
  },
  {
    question: "What is the relation between Hudson and Jenkins?",
    answer: "Hudson was the earlier name and version of current Jenkins. After some issues, the project name was changed from Hudson to Jenkins."
  },
  {
    question: "What is the requirement for using Jenkins?",
    answer: "You need a source code repository (e.g., Git) and a working build script (e.g., Maven script) checked into the repository."
  },
  {
    question: "What are the advantages of Jenkins?",
    answer: "Bugs tracking early in development, large plugin support, iterative code improvement, build failures cached at integration stage, automatic build report notification per commit, integrated with LDAP mail server, achieves continuous integration agile and test-driven development, automates Maven release projects."
  },
  {
    question: "How to make sure that your project builds doesn't break in Jenkins?",
    answer: "Perform successful clean install on local machine with all unit tests, check all code changes, synchronize with repository to ensure all config and POM changes are checked in."
  },
  {
    question: "How can you move or copy Jenkins from one server to another?",
    answer: "Copy the related job directory and slide a job from one Jenkins installation to another. Clone a job by making a copy of a job directory with a different name. Rename an existing job by renaming its directory."
  },
  {
    question: "Which commands can be used to start Jenkins manually?",
    answer: "(Jenkins_url)/restart - Forces a restart without waiting for builds to complete. (Jenkins_url)/safeRestart - Allows all running builds to complete."
  },
  {
    question: "What are the most useful plugins in Jenkins?",
    answer: "Maven 2 project, Amazon EC2, HTML publisher, Copy artifact, Join, Green Balls."
  },
  {
    question: "How to create a backup and copy files in Jenkins?",
    answer: "Copy the directory that saves all settings, build artifacts, and logs of Jenkins in its home directory. You can also copy a job directory to clone or replicate a job or rename the directory."
  },
  {
    question: "How can you clone a Git repository via Jenkins?",
    answer: "Enter the email and username for your Jenkins system, switch into your job directory, and execute the 'git config' command."
  },
  {
    question: "How can you setup Jenkins jobs?",
    answer: "Select 'New Item' from menu, enter a job name and select free-style job, click OK to create, then configure the job on the next page."
  },
  {
    question: "What are the two components Jenkins is mainly integrated with?",
    answer: "Version Control System (like Git, SVN) and build tools (like Apache Maven)."
  }
];