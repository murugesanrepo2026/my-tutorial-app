// src/data/softwareTestingQA.js
export const softwareTestingQA = [
  {
    question: "What is the PDCA cycle and where testing fits in?",
    answer: "PDCA stands for Plan, Do, Check, Act. Developers do planning and building; testers do the Check part, ensuring the project moves according to plan and gets desired results."
  },
  {
    question: "What is the difference between the white box, black box, and gray box testing?",
    answer: "Black box: no internal knowledge, based on requirements. White box: full internal knowledge, code structure. Gray box: limited internal knowledge to understand implementation, then uses black box."
  },
  {
    question: "What are the advantages of designing tests early in the life cycle?",
    answer: "Designing tests early prevents defects from being in the main code."
  },
  {
    question: "What are the types of defects?",
    answer: "Wrong (requirements implemented incorrectly), Missing (specification not implemented or customer requirement not noted), Extra (facility not requested by customer, still a variance)."
  },
  {
    question: "What is exploratory testing?",
    answer: "Simultaneous test design and execution against an application. Tester uses domain knowledge and experience to predict where the system might behave unexpectedly."
  },
  {
    question: "When should exploratory testing be performed?",
    answer: "As a final check before software release, complementary to automated regression testing."
  },
  {
    question: "Tell me about risk-based testing.",
    answer: "Testing strategy prioritizing tests by risks based on detailed risk analysis. Highest priority risks are resolved first."
  },
  {
    question: "What is acceptance testing?",
    answer: "Testing to enable customer to determine whether to accept the product. Types: User acceptance testing, Operational acceptance testing, Contract and regulation acceptance testing, Alpha and beta testing."
  },
  {
    question: "What is accessibility testing?",
    answer: "Verifies whether a software product is accessible to people with disabilities (deaf, blind, mentally disabled, etc.)."
  },
  {
    question: "What is Adhoc testing?",
    answer: "Testing phase where tester tries to 'break' the system by randomly trying functionality."
  },
  {
    question: "What is Agile testing?",
    answer: "Testing practice using agile methodologies, following test-first design paradigm."
  },
  {
    question: "What is API (Application Programming Interface)?",
    answer: "Formalized set of software calls and routines that an application program can reference to access supporting system or network services."
  },
  {
    question: "What do you mean by automated testing?",
    answer: "Testing using software tools that execute tests without manual intervention, used in GUI, performance, API, etc."
  },
  {
    question: "What is Bottom-up testing?",
    answer: "Integration testing approach where lowest level components are tested first, then higher levels, repeating until top-level component is tested."
  },
  {
    question: "What is Baseline Testing?",
    answer: "Running a set of tests to capture performance information, then using that to improve application performance. Compares present performance with previous performance."
  },
  {
    question: "What is Benchmark Testing?",
    answer: "Comparing application performance against industry standards set by other organizations, specifying where our application stands relative to others."
  },
  {
    question: "Which types of testing are important for web testing?",
    answer: "Performance testing (responsiveness, speed, scalability) and Security testing (protecting data and resources from intruders)."
  },
  {
    question: "What is the difference between web application and desktop application in testing?",
    answer: "Web apps have many simultaneous users, so load/stress testing important. Web apps are prone to attacks (DDOS), so security testing very important."
  },
  {
    question: "What is the difference between verification and validation?",
    answer: "Verification is static testing (documents, requirements). Validation is dynamic testing (actual product). Verification occurs before validation."
  },
  {
    question: "What is the difference between Retesting and Regression Testing?",
    answer: "Retesting checks failed test cases after fix. Regression checks code changes don't affect existing features. Regression can be automated, retesting cannot."
  },
  {
    question: "What is the difference between preventative and reactive approaches to testing?",
    answer: "Preventative tests are designed earlier; reactive tests are designed after software has been produced."
  },
  {
    question: "What is the purpose of exit criteria?",
    answer: "Used to define the completion of the test level."
  },
  {
    question: "Why is the decision table testing used?",
    answer: "Used for systems where specification takes form of rules or cause-effect combinations, exploring input combinations to define output."
  },
  {
    question: "What is alpha and beta testing?",
    answer: "Alpha: done by developers at development site, in virtual environment. Beta: done by customers at their site, in real-time environment, open to market."
  },
  {
    question: "What is Random/Monkey Testing?",
    answer: "Random testing where data is generated randomly using a tool. Limitations: redundant/unrealistic tests, time-consuming to analyze, difficult to recreate."
  },
  {
    question: "What is negative and positive testing?",
    answer: "Positive: valid input, expect action per specification. Negative: invalid input, expect errors."
  },
  {
    question: "What is the benefit of test independence?",
    answer: "Avoids author bias in defining effective tests."
  },
  {
    question: "What is boundary value analysis/testing?",
    answer: "Testing only exact boundaries rather than middle values. Example: bank withdrawal limit 100-25000, test above max and below max (not redundant values in between)."
  },
  {
    question: "How would you test the login feature of a web application?",
    answer: "Test valid login persistence after browser close, logout functionality, session management (cookies/web sessions), cross-browser login, password change affects old password."
  },
  {
    question: "What are the types of performance testing?",
    answer: "Load testing (increasing load to threshold), Stress testing (insufficient hardware resources), Spike testing (load variation), Endurance testing (long duration, memory leaks), Volume testing (increased data volume), Scalability testing (proportional to growing demands)."
  },
  {
    question: "What is the difference between functional and non-functional testing?",
    answer: "Functional: checks function works per requirements (unit, integration, system, acceptance). Non-functional: checks performance, usability, reliability (load, stress, security, etc.). Functional executed first."
  },
  {
    question: "What is the difference between static and dynamic testing?",
    answer: "Static: white box, early stage, before code deployment (verification). Dynamic: later stage, after code deployment, execution of code necessary (validation)."
  },
  {
    question: "What is the difference between negative and positive testing?",
    answer: "Positive: valid data, proves project meets requirements. Negative: invalid data, tries to break the project. Positive checks known conditions; negative checks unknown."
  },
  {
    question: "What are the different models available in SDLC?",
    answer: "Waterfall, Spiral, Prototype, Verification and validation, Hybrid, Agile, Rational Unified Process (RUP), Rapid Application Development (RAD)."
  },
  {
    question: "List out the difference between smoke testing and sanity testing and dry run testing.",
    answer: "Smoke: shallow, wide, scripted, automated. Sanity: narrow, deep, unscripted, manual. Dry run: internal mitigation of possible failure (e.g., aerospace)."
  },
  {
    question: "How do we test a web application? What are the types of tests we perform?",
    answer: "Functional, Integration, System, Performance, Compatibility, Usability, Ad-hoc, Accessibility, Smoke, Regression, Security, Globalization testing."
  },
  {
    question: "Why do we need to perform compatibility testing?",
    answer: "Users may use different platforms; without compatibility testing, bugs may appear and affect business."
  },
  {
    question: "How many test cases can we write in a day?",
    answer: "Typically 2-5 test cases per day initially, later 6-7 with better product knowledge and reusability."
  },
  {
    question: "How many test cases can we review per day?",
    answer: "Approximately 25-30 test cases per day (based on ratio: write x, review 3x, execute 5x)."
  },
  {
    question: "How many test cases can we run in a day?",
    answer: "Approximately 30-55 test cases per day."
  },
  {
    question: "Does the customer get a 100% bug-free product?",
    answer: "No, because the fundamentals of software testing define that no product has zero bugs. Testing team may not be perfect."
  },
  {
    question: "How to track the bug manually and with the help of automation?",
    answer: "Manual: identify bug, check duplicate, prepare report, store in repository, send to dev, manage lifecycle. Automation: use bug tracking tools like Jira, Bugzilla, Mantis, Quality Center."
  },
  {
    question: "Why does an application have bugs?",
    answer: "Software complexity, programming errors, lack of communication, requirement modifications, time pressure."
  },
  {
    question: "When do we perform testing?",
    answer: "Whenever we need to check if all requirements are executed correctly and to ensure we deliver the right quality product."
  },
  {
    question: "When do we stop testing?",
    answer: "When functionality is stable, time is limited (test only necessary features), client budget runs out, or essential features aren't working correctly."
  },
  {
    question: "For which types of testing do we write test cases?",
    answer: "Functional/unit, Integration, System, Acceptance, Recovery, Security, Globalization (L10N, I18N). No test cases for Smoke (pull existing), Adhoc, Performance, Usability, Accessibility, Reliability (use tools)."
  },
  {
    question: "What is the difference between traceability matrix and test case review process?",
    answer: "Traceability matrix ensures each requirement has at least one test case. Test case review checks whether all scenarios are covered for particular requirements."
  },
  {
    question: "What is the difference between use case and test case?",
    answer: "Use case: detailed description of customer requirements (from BRS/SRS). Test case: document describing input, action, expected response to verify application works per requirements (derived from use cases, scenarios, SRS)."
  },
  {
    question: "How to test a pen?",
    answer: "Manual: smoke (basic functionality), functional (refill, body, cap), integration (cap with body), compatibility (surfaces, weather), adhoc (throw, vertical), performance (writing speed), usability (user-friendly), accessibility (handicapped), reliability (drop test), recovery (after drop), globalization (price, date format, language). Automation: use roller with paper, motor to write, measure kilometers written."
  }
];