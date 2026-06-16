export const springbootData = {
  id: "Springboot",
  name: "Springboot",
  icon: "🐍",
  subtopics: [
    {
      id: "Springboot-Tutorial",
      name: "Springboot Tutorial",
      isParent: true,
      subtopics: [

        {
            id: "Spring-Boot-Tutorial",
            name: "Spring Boot Tutorial",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Tutorial – Complete Guide</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .badge-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }
        .badge {
            background: #e2e8f0;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.8rem;
            font-weight: 500;
            color: #1e293b;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>☕ Spring Boot Tutorial</h1>
    <div class="last-updated">📅 Last Updated : 18 May 2026</div>

    <div class="intro-text">
        Spring Boot Tutorial provides basic and advanced concepts of Spring Framework. Our Spring Boot Tutorial is designed for beginners and professionals both.<br><br>
        Spring Boot is a Spring module that provides the RAD (Rapid Application Development) feature to the Spring framework. This tutorial includes all topics of Spring Boot such as features, project setup, Maven project, starter project wizard, Spring Initializr, CLI, applications, annotations, dependency management, properties, starters, Actuator, JPA, JDBC, and more.
    </div>

    <!-- What is Spring Boot -->
    <h2>🚀 What is Spring Boot?</h2>
    <p>Spring Boot is a project that is built on the top of the Spring Framework. It provides an easier and faster way to set up, configure, and run both simple and web-based applications. It is a Spring module that provides the Rapid Application Development (RAD) feature to the Spring Framework. It is used to create a stand-alone Spring-based application that you can just run because it needs minimal Spring configuration.</p>
    <p>In short, <strong>Spring Boot = Spring Framework + Embedded Servers</strong>. There is no requirement for XML configuration (deployment descriptor). It uses <strong>convention over configuration</strong> software design paradigm, decreasing the effort of the developer. We can use Spring STS IDE or Spring Initializr to develop Spring Boot Java applications.</p>

    <!-- Why Spring Boot? -->
    <h2>✅ Why should we use Spring Boot Framework?</h2>
    <ul style="margin-left: 2rem; margin-bottom: 1.5rem;">
        <li>The dependency injection approach is used in Spring Boot.</li>
        <li>It contains powerful database transaction management capabilities.</li>
        <li>It simplifies integration with other Java frameworks like JPA/Hibernate ORM, Struts, etc.</li>
        <li>It reduces the cost and development time of the application.</li>
    </ul>
    <p>Along with Spring Boot, many other Spring sister projects help to build applications addressing modern business needs:</p>
    <table class="op-table">
        <thead><tr><th>Sister Project</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td>Spring Data</td><td>Simplifies data access from relational and NoSQL databases.</td></tr>
            <tr><td>Spring Batch</td><td>Provides powerful batch processing capabilities.</td></tr>
            <tr><td>Spring Security</td><td>Robust security framework for authentication and authorization.</td></tr>
            <tr><td>Spring Social</td><td>Supports integration with social networks like LinkedIn.</td></tr>
            <tr><td>Spring Integration</td><td>Implements Enterprise Integration Patterns using lightweight messaging.</td></tr>
        </tbody>
    </table>

    <!-- Advantages of Spring Boot -->
    <h2>⭐ Advantages of Spring Boot</h2>
    <ul style="margin-left: 2rem;">
        <li>Creates stand-alone Spring applications that can be started using <code>java -jar</code>.</li>
        <li>Embedded HTTP servers (Tomcat, Jetty, Undertow) — no need to deploy WAR files.</li>
        <li>Opinionated 'starter' POMs simplify Maven configuration.</li>
        <li>Production-ready features: metrics, health checks, externalized configuration.</li>
        <li>No XML configuration required.</li>
        <li>CLI tool for developing and testing Spring Boot applications.</li>
        <li>Rich set of plugins and reduces boilerplate code & annotations.</li>
        <li>Increases productivity and reduces development time significantly.</li>
    </ul>

    <!-- Limitations -->
    <h2>⚠️ Limitations of Spring Boot</h2>
    <div class="note" style="background:#fff1f0; border-left-color:#dc2626;">
        Spring Boot may include dependencies that are not used in the application, which can increase the final artifact size. However, this can be mitigated with proper dependency management and tools like the Maven Shade plugin.
    </div>

    <!-- Goals -->
    <h2>🎯 Goals of Spring Boot</h2>
    <p>The main goal of Spring Boot is to reduce development, unit test, and integration test time. It provides an <strong>Opinionated Development</strong> approach, avoids defining many annotation configurations, reduces import statements, and eliminates XML configuration. This reduces developer effort and increases productivity.</p>

    <!-- Prerequisites -->
    <h2>📋 Prerequisites for Spring Boot</h2>
    <div class="badge-list">
        <span class="badge">Java 1.8+</span>
        <span class="badge">Maven 3.0+ / Gradle</span>
        <span class="badge">Spring Framework 5.0+</span>
        <span class="badge">Spring Tool Suite (STS) or IntelliJ</span>
    </div>

    <!-- Spring Boot Features (detailed) -->
    <h2>🧩 Spring Boot Features</h2>
    
    <h3>1. Web Development</h3>
    <p>Spring Boot is well‑suited for web applications. Use <code>spring-boot-starter-web</code> to create self‑contained HTTP applications with embedded Tomcat, Jetty, or Undertow.</p>

    <h3>2. SpringApplication Class</h3>
    <p>The <code>SpringApplication</code> class provides a convenient way to bootstrap a Spring application from the <code>main()</code> method.</p>
    <pre><code>public static void main(String[] args) {  
    SpringApplication.run(MySpringBootApp.class, args);    
}</code></pre>

    <h3>3. Application Events & Listeners</h3>
    <p>Spring Boot uses events to handle tasks. Factories file (<code>META-INF/spring.factories</code>) can be used to add listeners via <code>ApplicationListener</code> key.</p>

    <h3>4. Admin Support</h3>
    <p>Enable admin‑related features for remote access and management using <code>spring.application.admin.enabled</code> property.</p>

    <h3>5. Externalized Configuration</h3>
    <p>Externalize configuration using YAML or properties files to work with the same application in different environments.</p>

    <h3>6. Properties Files & YAML Support</h3>
    <p>Rich set of application properties (e.g., <code>server.port=8082</code>). YAML provides hierarchical configuration and is a superset of JSON.</p>

    <h3>7. Type-safe Configuration</h3>
    <p>Strong type‑safe configuration using <code>@ConfigurationProperties</code> to validate application configuration.</p>

    <h3>8. Logging & Security</h3>
    <p>Spring Boot uses Commons Logging by default with managed dependencies. It includes basic authentication on HTTP endpoints, providing secure defaults.</p>

    <!-- Popular Starter Projects Table -->
    <h2>📦 Spring Boot Starters (Opinionated Dependencies)</h2>
    <table class="op-table">
        <thead><tr><th>Starter</th><th>Purpose</th></tr></thead>
        <tbody>
            <tr><td>spring-boot-starter-web</td><td>Build RESTful web applications (includes Tomcat, Spring MVC).</td></tr>
            <tr><td>spring-boot-starter-data-jpa</td><td>Spring Data JPA with Hibernate.</td></tr>
            <tr><td>spring-boot-starter-security</td><td>Spring Security auto-configuration.</td></tr>
            <tr><td>spring-boot-starter-actuator</td><td>Production-ready endpoints (health, metrics, info).</td></tr>
            <tr><td>spring-boot-starter-test</td><td>Testing support with JUnit, Mockito, and Spring Test.</td></tr>
            <tr><td>spring-boot-starter-thymeleaf</td><td>Server-side templating with Thymeleaf.</td></tr>
        </tbody>
    </table>

    <!-- Code Example for simple Spring Boot App -->
    <h2>🔧 Quick Example: Spring Boot REST Controller</h2>
    <pre><code>// DemoApplication.java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring Boot!";
    }
}</code></pre>
    <div class="example-output">
        <strong>💻 Run with:</strong> <code>mvn spring-boot:run</code> or <code>java -jar target/*.jar</code><br>
        <strong>Access:</strong> http://localhost:8080/hello → "Hello Spring Boot!"
    </div>

    <!-- Audience -->
    <h2>👥 Audience to Learn Spring Boot</h2>
    <p>This Spring Boot tutorial is suitable for students, Java developers, software engineers, and backend developers who want to build fast, secure, and production-ready applications. It is also helpful for developers preparing for interviews, working on enterprise applications, or learning microservices and RESTful web services with Spring Boot. Each topic is explained with simple examples and practical programs.</p>

    <!-- Interview Preparation Section -->
    <div class="intro-text" style="background: #eef2ff; border-left-color: #2c7da0;">
        <strong>🎓 Spring & Spring Boot Interview Preparation</strong><br>
        Prepare for your technical interviews with our collection of <strong>Spring and Spring Boot Interview Questions and Answers</strong>. These resources help beginners and experienced developers understand dependency injection, Spring MVC, REST APIs, Spring Data JPA, annotations, microservices, and more.
    </div>

    <!-- Additional concept about Spring Boot Actuator -->
    <h2>📈 Production-Ready Features (Actuator)</h2>
    <p>Spring Boot Actuator provides built-in endpoints for monitoring and managing your application — health checks, metrics, thread dumps, environment properties, and more. Just add <code>spring-boot-starter-actuator</code> and access endpoints like <code>/actuator/health</code> and <code>/actuator/metrics</code>.</p>
    
    <div class="note">
        💡 <strong>Pro Tip:</strong> Use <a href="https://start.spring.io/" style="color:#2c7da0;" target="_blank">Spring Initializr</a> to bootstrap a project with all necessary dependencies, Java version, and build tool (Maven/Gradle) in seconds.
    </div>

    <div class="note" style="background:#fef9e3;">
        ✅ <strong>Key Takeaway:</strong> Spring Boot revolutionizes enterprise Java development by eliminating boilerplate configuration, embedding servers, and offering production‑ready features out of the box. From REST APIs to microservices, Spring Boot is the go‑to choice for modern backend development.
    </div>

    <footer>
        Spring Boot Tutorial – From Zero to Production | Covers starters, auto-configuration, Actuator, JPA, and more. © 2026
    </footer>
</div>
</body>
</html>

                      `
        },

        {
            id: "Spring-Boot-Version",
            name: "Spring Boot Version",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Version – 2.2.1 & 2.0 Features</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        .warning-note {
            background: #fff3e0;
            border-left: 4px solid #e67e22;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .badge {
            background: #e2e8f0;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.8rem;
            font-weight: 500;
            color: #1e293b;
            display: inline-block;
            margin-right: 0.5rem;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>🚀 Spring Boot Versions: 2.2.1 & 2.0 Deep Dive</h1>
    <div class="last-updated">📅 Last Updated : 18 May 2026</div>

    <div class="intro-text">
        Spring Boot 2.0 marked a major milestone with infrastructure upgrades and Spring Framework 5. The <strong>latest stable version as of this update is Spring Boot 2.2.1</strong>, which brings 110 fixes, dependency upgrades, performance improvements, and exciting new features like lazy initialization, Java 13 support, and RSocket integration. This tutorial covers everything new, changed, and evolving across these releases.
    </div>

    <!-- Spring Boot 2.0 Highlights -->
    <h2>📌 Spring Boot 2.0 – What's New & Changed</h2>
    <p>Version 2.0 introduced a foundational shift, raising the bar for modern Java applications.</p>
    
    <h3>🔧 Infrastructure Upgrade</h3>
    <ul style="margin-left: 2rem; margin-bottom: 1rem;">
        <li>Supports <strong>Java 8 or above</strong> (Java 9/10/11+ compatible)</li>
        <li>Apache Tomcat 8 or above</li>
        <li>Thymeleaf 3</li>
        <li>Hibernate 5.2+</li>
    </ul>

    <h3>⚡ Spring Framework 5 Integration</h3>
    <ul style="margin-left: 2rem; margin-bottom: 1rem;">
        <li><strong>Reactive Spring</strong> – Support for reactive programming model</li>
        <li>Servlet stack & Servlet API improvements</li>
        <li>Spring MVC enhancements & <strong>Spring WebFlux</strong> (reactive HTTP layer)</li>
        <li>Functional API and Kotlin support</li>
        <li>Embedded Netty, Servlet 3.1, Undertow for reactive stack</li>
    </ul>

    <h3>🔄 What Changed in 2.0</h3>
    <table class="op-table">
        <thead><tr><th>Area</th><th>Change Description</th></tr></thead>
        <tbody>
            <tr><td>Configuration Properties</td><td>Relaxed binding rules, improved meta-data support</td></tr>
            <tr><td>Gradle Plugin</td><td>Major rewrite, uses Gradle’s native plugin APIs</td></tr>
            <tr><td>Actuator Endpoints</td><td>Re-architected, now exposed over HTTP or JMX by default, new <code>/actuator</code> base path</td></tr>
            <tr><td>Security</td><td>Default security auto-configuration refined, OAuth 2.0 support</td></tr>
            <tr><td>Metrics</td><td>New Micrometer integration for dimensional metrics</td></tr>
        </tbody>
    </table>

    <!-- Spring Boot 2.2.1 - Latest Detailed -->
    <h2>🔥 Spring Boot 2.2.1 (Latest Release) – What’s New</h2>
    <p>Released with <strong>110 fixes</strong>, dependency upgrades, and significant performance improvements. Below are the key highlights.</p>

    <div class="note">
        ✅ <strong>Note:</strong> Spring Boot 2.2.1 requires Java 8 or 11, and Gradle 4.10+ (or Maven 3.3+). JMX is <strong>disabled by default</strong> – enable with <code>spring.jmx.enabled=true</code> if needed.
    </div>

    <h3>🆕 New Features & Improvements</h3>
    <ul style="margin-left: 2rem;">
        <li><strong>Constructor binding</strong> for properties nested inside a JavaBean (<code>@ConstructorBinding</code>)</li>
        <li>Add config property <code>spring.codec.max-in-memory-size</code> for WebFlux</li>
        <li>Make test slices' type exclude filters public (better testing flexibility)</li>
        <li>Support <code>amqps://</code> URIs in <code>spring.rabbitmq.addresses</code></li>
        <li><strong>Immutable Configuration Properties</strong> – classes annotated with <code>@ConfigurationProperties</code> can be immutable via constructor binding</li>
        <li><strong>RSocket Support</strong> – auto-configured when <code>spring-security-rsocket</code> is on the classpath</li>
    </ul>

    <h3>📦 Dependency Upgrades in 2.2.1</h3>
    <table class="op-table">
        <thead><tr><th>Dependency</th><th>Version</th></tr></thead>
        <tbody>
            <tr><td>Spring Framework</td><td>5.2.1.RELEASE</td></tr>
            <tr><td>Spring Security</td><td>5.2.1.RELEASE</td></tr>
            <tr><td>Spring Batch</td><td>4.2.0.RELEASE</td></tr>
            <tr><td>Spring AMQP</td><td>2.2.1.RELEASE</td></tr>
            <tr><td>Spring HATEOAS</td><td>1.0.1.RELEASE</td></tr>
            <tr><td>Hibernate</td><td>5.4.8.Final</td></tr>
            <tr><td>Hibernate Validator</td><td>6.0.18.Final</td></tr>
            <tr><td>Micrometer</td><td>1.3.1</td></tr>
            <tr><td>Jackson</td><td>2.10.0</td></tr>
            <tr><td>Elasticsearch</td><td>6.8.4</td></tr>
            <tr><td>Flyway</td><td>6.0.7</td></tr>
            <tr><td>JUnit</td><td>5.5.0</td></tr>
            <tr><td>MongoDB Driver</td><td>3.11.2</td></tr>
            <tr><td>SLF4J</td><td>1.7.29</td></tr>
            <tr><td>Jetty</td><td>9.4.22.v20191022</td></tr>
            <tr><td>H2 Database</td><td>1.4.200</td></tr>
        </tbody>
    </table>

    <h3>⚙️ Performance Improvements</h3>
    <ul style="margin-left: 2rem;">
        <li><strong>Lazy Initialization</strong> – Global lazy init can be enabled via <code>spring.main.lazy-initialization=true</code>, significantly reducing startup time.</li>
        <li><strong>Java 13 Support</strong> – Officially compatible with Java 13.</li>
        <li><strong>Immutable Binding</strong> reduces overhead and improves safety.</li>
        <li>Improved startup performance due to condition evaluation optimizations.</li>
    </ul>

    <h3>⚠️ Deprecations & Breaking Changes in 2.2.x</h3>
    <table class="op-table">
        <thead><tr><th>Deprecated / Changed</th><th>Migration Action</th></tr></thead>
        <tbody>
            <tr><td><code>logging.file</code> property</td><td>Rename to <code>logging.file.name</code></td></tr>
            <tr><td><code>logging.path</code> property</td><td>Rename to <code>logging.file.path</code></td></tr>
            <tr><td><code>server.connection-timeout</code></td><td>Use server-specific properties (e.g., <code>server.tomcat.connection-timeout</code>)</td></tr>
            <tr><td>Joda-Time support</td><td>Use <code>java.time</code> (JSR-310) instead</td></tr>
            <tr><td><code>@ConfigurationProperties</code> scanning</td><td>Now disabled by default – explicitly add <code>@ConfigurationPropertiesScan</code> to enable</td></tr>
        </tbody>
    </table>

    <h3>📝 Additional Improvements & Changes</h3>
    <ul style="margin-left: 2rem;">
        <li><strong>JMX disabled by default</strong> – previously auto-enabled, now you must set <code>spring.jmx.enabled=true</code> to use JMX features.</li>
        <li><strong>Maven Plugin fork enabled by default</strong> – Spring Boot applications run by Maven plugin are now forked by default (better classloader isolation).</li>
        <li><strong>JUnit 5 by default</strong> – the starter now includes JUnit 5, but vintage engine supports JUnit 4 tests seamlessly.</li>
        <li><strong>AssertJ 3.12</strong> – includes breaking API changes for <code>Iterator</code> assertions; update test code accordingly.</li>
        <li><strong>Hibernate Dialect</strong> – Hibernate now selects the dialect automatically instead of Spring Boot applying a default based on the detected database.</li>
        <li><strong>Gradle Requirement</strong> – requires Gradle 4.10 or later.</li>
    </ul>

    <!-- Code Snippet: Lazy Initialization & Constructor Binding -->
    <h3>💻 Code Example: Lazy Initialization & Immutable Props</h3>
    <pre><code># application.properties
spring.main.lazy-initialization=true
spring.jmx.enabled=false   # JMX disabled by default in 2.2.1

# application.yml alternative
spring:
  main:
    lazy-initialization: true</code></pre>

    <pre><code>// Immutable @ConfigurationProperties example
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@ConstructorBinding
@ConfigurationProperties("app.service")
public class ServiceProperties {
    private final String url;
    private final int timeout;
    
    public ServiceProperties(String url, int timeout) {
        this.url = url;
        this.timeout = timeout;
    }
    // getters (no setters required for immutable binding)
    public String getUrl() { return url; }
    public int getTimeout() { return timeout; }
}</code></pre>
    <div class="example-output">
        <strong>✅ Tip:</strong> Constructor binding improves immutability and works well with configuration property validation.
    </div>

    <!-- Spring Boot 2.2.1 New Features Summary Table -->
    <h2>📊 Summary: Spring Boot 2.2.1 at a Glance</h2>
    <table class="op-table">
        <thead><tr><th>Feature Area</th><th>Enhancement</th></tr></thead>
        <tbody>
            <tr><td>Startup Performance</td><td>Global lazy initialization, reduced conditional evaluation</td></tr>
            <tr><td>Configuration Binding</td><td>Constructor-based binding (<code>@ConstructorBinding</code>)</td></tr>
            <tr><td>Reactive Stack</td><td>RSocket auto-configuration + WebFlux maxInMemorySize property</td></tr>
            <tr><td>Testing</td><td>JUnit 5 defaults, test slice exclude filters public</td></tr>
            <tr><td>Messaging</td><td>AMQPS support for RabbitMQ addresses</td></tr>
            <tr><td>Java Version</td><td>Supports Java 8, 11, and 13</td></tr>
            <tr><td>Actuator</td><td>Improved health indicators, non-blocking reactive support</td></tr>
        </tbody>
    </table>

    <div class="note warning-note">
        📢 <strong>Important Upgrade Advice:</strong> When migrating from Spring Boot 1.5.x to 2.x, review configuration property changes, actuator endpoint structure, and the new security defaults. For 2.1.x to 2.2.x, pay attention to JMX default disabling and the changed logging properties.
    </div>

    <div class="intro-text" style="background:#f0fdf4; border-left-color:#2c7da0;">
        🎯 <strong>Final Verdict:</strong> Spring Boot 2.2.1 is a robust, production-ready release with substantial performance gains, modern Java support, and refined developer experience. Whether you're building microservices, reactive systems, or classic web apps, this version delivers.
    </div>

    <footer>
        Spring Boot Version Tutorial – From 2.0 revolution to 2.2.1 latest features | Dependency upgrades, lazy init, constructor binding & more.
    </footer>
</div>
</body>
</html>


                      `
        },

        {
            id: "Spring-vs-Spring-Boot-Spring-MVC",
            name: "Spring vs. Spring Boot vs. Spring MVC",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring vs Spring Boot vs Spring MVC – Complete Comparison</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .comparison-card {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin: 1.5rem 0;
        }
        .card {
            flex: 1;
            background: #ffffff;
            border-radius: 20px;
            padding: 1.2rem;
            box-shadow: 0 8px 20px rgba(0,0,0,0.05);
            border: 1px solid #e2e8f0;
        }
        .card h4 {
            font-size: 1.4rem;
            margin-bottom: 0.75rem;
            color: #0f4c5f;
        }
        @media (max-width: 800px) {
            .comparison-card { flex-direction: column; }
        }
    </style>
</head>
<body>
<div class="container">
    <h1>🔄 Spring vs. Spring Boot vs. Spring MVC</h1>
    <div class="last-updated">📅 Last Updated : 18 May 2026</div>

    <div class="intro-text">
        Spring, Spring Boot, and Spring MVC are popular technologies used for Java application development. 
        <strong>Spring Framework</strong> provides the basic features for building Java applications. 
        <strong>Spring Boot</strong> makes development faster by reducing configuration work and helping create stand‑alone applications easily. 
        <strong>Spring MVC</strong> is used to develop web applications using the Model‑View‑Controller design pattern.
        <br><br>
        In this chapter, you will learn the basic differences between Spring, Spring Boot, and Spring MVC. You will also understand their features, uses, and advantages with simple explanations and comparison tables.
    </div>

    <!-- What is Spring? -->
    <h2>🌿 What is Spring?</h2>
    <p>Spring Framework is one of the most popular frameworks for Java application development. Its main feature is <strong>Dependency Injection (DI)</strong> or <strong>Inversion of Control (IoC)</strong>, which helps developers create loosely coupled applications. Spring is mainly used for developing enterprise‑level Java applications.</p>

    <!-- What is Spring Boot? -->
    <h2>🍃 What is Spring Boot?</h2>
    <p>Spring Boot is a module of the Spring Framework that makes application development faster and easier. It reduces boilerplate code and minimizes configuration work, allowing developers to quickly create stand‑alone and production‑ready Spring applications. Spring Boot is widely used for building RESTful web services and microservices.</p>

    <!-- What is Spring MVC? -->
    <h2>🌐 What is Spring MVC?</h2>
    <p>Spring MVC is a web framework provided by the Spring Framework for developing web applications. It follows the <strong>Model‑View‑Controller (MVC)</strong> design pattern and helps manage web requests efficiently. Spring MVC is mainly used for creating HTTP‑based web applications with organized and structured architecture.</p>

    <!-- Comparison: Spring vs Spring Boot -->
    <h2>⚖️ Difference Between Spring and Spring Boot</h2>
    <p>The following table lists the key differences between Spring and Spring Boot.</p>
    <table class="op-table">
        <thead><tr><th>Spring Framework</th><th>Spring Boot</th></tr></thead>
        <tbody>
            <tr><td>Spring Framework is a widely used Java EE framework for building applications.</td><td>Spring Boot is widely used to develop REST APIs and microservices.</td></tr>
            <tr><td>It aims to simplify Java EE development to make developers more productive.</td><td>It aims to shorten code length and provide the easiest way to develop web applications.</td></tr>
            <tr><td>The primary feature of Spring is Dependency Injection (DI).</td><td>The primary feature of Spring Boot is <strong>Auto‑configuration</strong> (automatically configures classes based on requirements).</td></tr>
            <tr><td>Helps to develop loosely coupled applications.</td><td>Helps to create stand‑alone applications with less configuration.</td></tr>
            <tr><td>The developer writes a lot of boilerplate code to do minimal tasks.</td><td>It reduces boilerplate code significantly.</td></tr>
            <tr><td>To test a Spring project, you need to set up a server explicitly.</td><td>Spring Boot provides embedded servers (Tomcat, Jetty, Undertow).</td></tr>
            <tr><td>No built‑in support for in‑memory databases.</td><td>Offers plugins for embedded in‑memory databases like H2.</td></tr>
            <tr><td>Developers manually define dependencies in <code>pom.xml</code>.</td><td>Uses <strong>starters</strong> (e.g., <code>spring-boot-starter-web</code>) that internally manage dependency JARs.</td></tr>
        </tbody>
    </table>

    <!-- Comparison: Spring Boot vs Spring MVC -->
    <h2>⚖️ Difference Between Spring Boot and Spring MVC</h2>
    <table class="op-table">
        <thead><tr><th>Spring Boot</th><th>Spring MVC</th></tr></thead>
        <tbody>
            <tr><td>Spring Boot is a module of Spring for packaging Spring‑based applications with sensible defaults.</td><td>Spring MVC is a Model‑View‑Controller based web framework under the Spring Framework.</td></tr>
            <tr><td>Provides default configurations to build Spring‑powered applications.</td><td>Provides ready‑to‑use features for building web applications, but requires explicit configuration.</td></tr>
            <tr><td>No need to build configuration manually – auto‑configuration handles it.</td><td>Requires manual configuration (e.g., view resolvers, dispatcher servlet).</td></tr>
            <tr><td>No requirement for a deployment descriptor (web.xml).</td><td>Deployment descriptor (web.xml) is typically required (though annotation‑based config reduces it).</td></tr>
            <tr><td>Avoids boilerplate code and wraps dependencies together in a single unit (starters).</td><td>Specifies each dependency separately in the build file.</td></tr>
            <tr><td>Reduces development time and increases productivity.</td><td>Takes more time to achieve the same result without Boot.</td></tr>
        </tbody>
    </table>

    <!-- Quick Visual Overview Cards -->
    <h2>📋 At a Glance: When to Use What?</h2>
    <div class="comparison-card">
        <div class="card">
            <h4>🌿 Spring Framework</h4>
            <p><strong>Use when:</strong> You need full control over configuration, want to build a modular enterprise application with DI, AOP, transaction management. Best for complex, non‑web or web apps where you manually manage dependencies and server setup.</p>
        </div>
        <div class="card">
            <h4>🍃 Spring Boot</h4>
            <p><strong>Use when:</strong> You want rapid development, microservices, REST APIs, or a production‑ready application with minimal configuration. Perfect for starting new projects, embedded servers, and auto‑configuration.</p>
        </div>
        <div class="card">
            <h4>🌐 Spring MVC</h4>
            <p><strong>Use when:</strong> You are building a web application following MVC pattern, handling HTTP requests, serving HTML pages or REST endpoints. Often used together with Spring Boot for maximum productivity.</p>
        </div>
    </div>

    <!-- Code Example – Traditional Spring vs Spring Boot (illustrative) -->
    <h3>💻 Code Comparison: Traditional Spring XML vs Spring Boot</h3>
    <p><strong>Traditional Spring (XML config for a simple bean)</strong></p>
    <pre><code>&lt;!-- applicationContext.xml -->
&lt;beans&gt;
    &lt;bean id="userService" class="com.example.UserService" /&gt;
&lt;/beans&gt;</code></pre>
    <p><strong>Spring Boot (Auto‑configuration + Java config)</strong></p>
    <pre><code>// UserService.java
@Service
public class UserService {
    // automatically picked up by component scanning
}

// No XML required – Spring Boot auto-configures the context</code></pre>
    <div class="example-output">
        ✅ <strong>Key Insight:</strong> Spring Boot eliminates the need for explicit bean configuration in most cases, using annotations and auto‑configuration.
    </div>

    <!-- Spring MVC with Boot example -->
    <h3>🌐 Spring MVC + Spring Boot – REST Controller Example</h3>
    <pre><code>@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
}</code></pre>
    <p>With Spring Boot, the above works without any <code>DispatcherServlet</code> configuration – just add <code>spring-boot-starter-web</code> dependency.</p>

    <!-- Advantages & Limitations section -->
    <h2>✅ Advantages of Each Technology</h2>
    <ul style="margin-left: 2rem;">
        <li><strong>Spring Framework:</strong> Mature, flexible, powerful DI and AOP, extensive ecosystem.</li>
        <li><strong>Spring Boot:</strong> Rapid development, embedded servers, minimal configuration, production-ready features (actuator, metrics).</li>
        <li><strong>Spring MVC:</strong> Clear separation of concerns, reusable controllers, support for multiple view technologies (JSP, Thymeleaf).</li>
    </ul>

    <div class="note">
        💡 <strong>Pro Tip:</strong> In modern Java development, most projects use <strong>Spring Boot + Spring MVC</strong> together – Spring Boot provides the runtime and auto-configuration, while Spring MVC handles web layer concerns.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Spring is the foundation, Spring Boot simplifies and accelerates development, and Spring MVC structures web applications. Understanding their differences helps you choose the right tool for your project – from enterprise systems to microservices and reactive web apps.
    </div>

    <footer>
        Spring vs Spring Boot vs Spring MVC – Complete Comparison | Last Updated: 18 May 2026
    </footer>
</div>
</body>
</html>


                      `
        },


        {
            id: "Spring-Boot-Architecture",
            name: "Spring Boot Architecture",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Architecture – Layered Architecture & Flow</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        /* Architecture Diagram Styles */
        .arch-diagram {
            background: #f8fafc;
            border-radius: 28px;
            padding: 1.5rem;
            margin: 2rem 0;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .layer-stack {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }
        .layer {
            background: white;
            border-radius: 18px;
            padding: 1rem 1.5rem;
            border-left: 8px solid;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
            transition: transform 0.1s ease;
        }
        .layer:hover {
            transform: translateX(5px);
        }
        .layer.presentation { border-left-color: #3b82f6; background: #eff6ff; }
        .layer.business { border-left-color: #10b981; background: #ecfdf5; }
        .layer.persistence { border-left-color: #f59e0b; background: #fffbeb; }
        .layer.database { border-left-color: #8b5cf6; background: #f5f3ff; }
        .layer-title {
            font-weight: 700;
            font-size: 1.3rem;
            margin-bottom: 0.3rem;
        }
        .layer-desc {
            color: #334155;
            font-size: 0.9rem;
        }
        .arrow-down {
            text-align: center;
            font-size: 1.8rem;
            color: #94a3b8;
            margin: -0.2rem 0;
        }
        .flow-steps {
            background: #f1f5f9;
            border-radius: 24px;
            padding: 1.2rem 2rem;
            margin: 1.5rem 0;
            counter-reset: step-counter;
            list-style: none;
        }
        .flow-steps li {
            counter-increment: step-counter;
            margin-bottom: 0.8rem;
            padding-left: 2rem;
            position: relative;
            font-weight: 500;
        }
        .flow-steps li::before {
            content: counter(step-counter);
            background: #2c7da0;
            color: white;
            font-weight: bold;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 0;
            top: 0;
            font-size: 0.8rem;
        }
        .image-placeholder {
            background: linear-gradient(145deg, #e9f0f5, #dce5ec);
            border-radius: 24px;
            padding: 1.5rem;
            text-align: center;
            margin: 1.5rem 0;
            border: 1px dashed #2c7da0;
        }
        .image-placeholder svg {
            max-width: 100%;
            height: auto;
        }
        @media (max-width: 700px) {
            .layer-stack { gap: 0.5rem; }
        }
    </style>
</head>
<body>
<div class="container">
    <h1>🏛️ Spring Boot Architecture</h1>
    <div class="last-updated">📅 Last Updated : 18 May 2026</div>

    <div class="intro-text">
        Spring Boot is a module of the Spring Framework that is used to create stand-alone and production-ready Spring applications with minimal configuration. 
        It is built on top of the core Spring Framework and simplifies Java application development.<br><br>
        Spring Boot follows a <strong>layered architecture</strong> where each layer performs a specific task and communicates with the layer above or below it.
    </div>

    <!-- Visual Architecture Diagram (SVG / CSS based) -->
    <div class="arch-diagram">
        <h3 style="margin-top:0; margin-bottom:1rem; display:block;">📐 Spring Boot Layered Architecture</h3>
        <div class="layer-stack">
            <div class="layer presentation">
                <div class="layer-title">📱 1. Presentation Layer</div>
                <div class="layer-desc">Handles HTTP requests/responses, REST controllers, JSON conversion, and view rendering (Thymeleaf, JSP). Communicates with Business Layer.</div>
            </div>
            <div class="arrow-down">▼</div>
            <div class="layer business">
                <div class="layer-title">⚙️ 2. Business Layer</div>
                <div class="layer-desc">Contains business logic, validation, authorization, and service classes (<code>@Service</code>). Orchestrates application workflows.</div>
            </div>
            <div class="arrow-down">▼</div>
            <div class="layer persistence">
                <div class="layer-title">🗄️ 3. Persistence Layer</div>
                <div class="layer-desc">Manages data access using Spring Data JPA, Hibernate, or JDBC. Repositories (<code>@Repository</code>) convert objects to database records.</div>
            </div>
            <div class="arrow-down">▼</div>
            <div class="layer database">
                <div class="layer-title">💾 4. Database Layer</div>
                <div class="layer-desc">Actual database (MySQL, PostgreSQL, H2, etc.). Performs CRUD operations and stores persistent data.</div>
            </div>
        </div>
        <div class="note" style="margin-top:1rem; background:#eef2ff;">
            💡 <strong>Flow direction:</strong> Request flows from top (Presentation) → Business → Persistence → Database, then response returns upward.
        </div>
    </div>

    <!-- Detailed Layer Descriptions -->
    <h2>📚 Layers of Spring Boot Architecture</h2>

    <h3>1. Presentation Layer</h3>
    <p>The Presentation Layer handles client-side requests and responses. It processes HTTP requests, converts JSON data into objects, and sends the request to the business layer. This layer mainly contains the frontend or view-related components (REST controllers, MVC controllers).</p>

    <h3>2. Business Layer</h3>
    <p>The Business Layer contains the main business logic of the application. It performs operations such as validation, authorization, and processing of data. This layer mainly consists of service classes (<code>@Service</code>).</p>

    <h3>3. Persistence Layer</h3>
    <p>The Persistence Layer manages the database-related logic of the application. It converts business objects into database records and retrieves data from the database when required. Uses Spring Data JPA / Hibernate repositories.</p>

    <h3>4. Database Layer</h3>
    <p>The Database Layer is responsible for storing and managing application data. CRUD operations such as create, read, update, and delete are performed in this layer.</p>

    <!-- Spring Boot Flow Architecture -->
    <h2>🔄 Spring Boot Flow Architecture (Request Lifecycle)</h2>
    <p>Spring Boot uses different Spring modules such as Spring MVC, Spring Data JPA, and others to develop web applications. The architecture of Spring Boot is similar to Spring MVC, but Spring Boot reduces configuration work and removes the need to create separate DAO and DAOImpl classes manually in many cases.</p>

    <div class="image-placeholder">
        <svg width="100%" height="180" viewBox="0 0 800 140" xmlns="http://www.w3.org/2000/svg" style="max-width:700px; margin:0 auto;">
            <rect x="10" y="10" width="120" height="50" rx="10" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5" />
            <text x="70" y="40" fill="white" font-size="12" text-anchor="middle" font-weight="bold">Client</text>
            <line x1="130" y1="35" x2="190" y2="35" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
            <rect x="200" y="10" width="130" height="50" rx="10" fill="#10b981" stroke="#059669" stroke-width="1.5" />
            <text x="265" y="40" fill="white" font-size="12" text-anchor="middle">Controller</text>
            <line x1="330" y1="35" x2="390" y2="35" stroke="#475569" stroke-width="2" />
            <rect x="400" y="10" width="130" height="50" rx="10" fill="#f59e0b" stroke="#d97706" stroke-width="1.5" />
            <text x="465" y="40" fill="white" font-size="12" text-anchor="middle">Service</text>
            <line x1="530" y1="35" x2="590" y2="35" stroke="#475569" stroke-width="2" />
            <rect x="600" y="10" width="130" height="50" rx="10" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1.5" />
            <text x="665" y="40" fill="white" font-size="12" text-anchor="middle">Repository</text>
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#475569" />
                </marker>
            </defs>
            <text x="265" y="85" fill="#334155" font-size="11" text-anchor="middle">HTTP Request</text>
            <text x="465" y="85" fill="#334155" font-size="11" text-anchor="middle">Business logic</text>
            <text x="665" y="85" fill="#334155" font-size="11" text-anchor="middle">DB interaction</text>
            <!-- response line (dashed back) -->
            <path d="M665 95 L665 115 L265 115 L265 95" fill="none" stroke="#2c7da0" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowBack)" />
            <defs><marker id="arrowBack" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#2c7da0" /></marker></defs>
            <text x="460" y="128" fill="#2c7da0" font-size="11" text-anchor="middle">Response (JSON / View)</text>
        </svg>
        <p style="margin-top:0.5rem; font-size:0.85rem;">🎨 <em>Spring Boot Request Flow Diagram (Client → Controller → Service → Repository → Database → Response)</em></p>
    </div>

    <h3>📌 Flow of Spring Boot Architecture (Step-by-Step)</h3>
    <ul class="flow-steps">
        <li>The client sends an HTTP request such as GET, POST, PUT, or DELETE.</li>
        <li>The request goes to the Controller class (<code>@RestController</code> or <code>@Controller</code>), where the request is mapped and handled.</li>
        <li>The Controller calls the Service Layer (<code>@Service</code>) if business logic is required.</li>
        <li>The Service Layer performs all business-related operations and processes the data (validation, calculations, orchestration).</li>
        <li>The processed data is passed to the Persistence Layer (<code>@Repository</code>), where Spring Data JPA / Hibernate interacts with the database.</li>
        <li>The Database Layer performs CRUD operations such as create, read, update, and delete.</li>
        <li>Finally, the response (web page, JSON, or API result) is returned to the client via the Controller.</li>
    </ul>

    <div class="example-output">
        ✅ <strong>Real-world mapping:</strong><br>
        <code>@RestController</code> → Presentation Layer<br>
        <code>@Service</code> → Business Layer<br>
        <code>@Repository</code> (or JpaRepository) → Persistence Layer<br>
        H2/PostgreSQL → Database Layer
    </div>

    <!-- Comparison / Why Layered Architecture? -->
    <h2>🧩 Why Layered Architecture in Spring Boot?</h2>
    <p>Layered architecture offers clear separation of concerns, making the application:</p>
    <ul style="margin-left:2rem;">
        <li><strong>Maintainable</strong> – each layer can be modified independently.</li>
        <li><strong>Testable</strong> – mock layers easily for unit/integration tests.</li>
        <li><strong>Scalable</strong> – distribute layers across microservices if needed.</li>
        <li><strong>Secure</strong> – authorization logic centralised in business layer.</li>
    </ul>

    <div class="note">
        💡 <strong>Spring Boot Advantage:</strong> Unlike traditional Spring MVC, Spring Boot auto‑configures many components (DispatcherServlet, DataSource, Transaction Manager) and provides starters (spring-boot-starter-web, spring-boot-starter-data-jpa) that align perfectly with this layered architecture – reducing boilerplate code.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Spring Boot’s layered architecture (Presentation, Business, Persistence, Database) enables developers to build clean, modular, and production-ready applications. Combined with auto-configuration and embedded servers, it ensures rapid development without compromising on structural integrity.
    </div>

    <footer>
        Spring Boot Architecture – Layered Design & Request Flow | Last Updated: 18 May 2026
    </footer>
</div>
</body>
</html>


                      `
        },

          {
            id: "Spring-Maven-Project",
            name: "Spring Maven Project",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Maven Project – Step by Step Guide</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .step-box {
            background: #f8fafc;
            border-radius: 18px;
            padding: 1.2rem 1.8rem;
            margin: 1.2rem 0;
            border: 1px solid #e2e8f0;
        }
        .step-box strong {
            color: #0f4c5f;
        }
        .image-placeholder {
            background: #f1f5f9;
            border-radius: 16px;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border: 1px dashed #94a3b8;
            text-align: center;
            color: #475569;
            font-size: 0.9rem;
        }
        .image-placeholder svg {
            max-width: 100%;
            height: auto;
        }
        .badge {
            background: #2c7da0;
            color: white;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-block;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>📦 Spring Boot Maven Project – Step by Step</h1>
    <div class="last-updated">📅 Last Updated : 18 May 2026</div>

    <div class="intro-text">
        There are multiple ways to create a Spring Boot project. Developers can choose any method based on their requirements and development environment.<br><br>
        <strong>Different ways to create a Spring Boot project:</strong>
        <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
            <li>Spring Maven Project (covered here)</li>
            <li>Spring Starter Project Wizard</li>
            <li>Spring Initializr</li>
            <li>Spring Boot CLI</li>
        </ul>
        In this tutorial, we are using <strong>STS (Spring Tool Suite) IDE</strong> to create the Spring Boot project. STS is a popular IDE specially designed for Spring application development.
    </div>

    <h2>🛠️ Creating a Spring Boot Maven Project</h2>
    <p>Follow the steps given below to create a Spring Boot project using Maven in STS.</p>

    <!-- Step 1 -->
    <div class="step-box">
        <strong>Step 1: Select Project Type</strong>
        <p>Open STS IDE and create a new Maven project.</p>
        <div class="image-placeholder">
            <svg width="300" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="280" height="60" rx="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
                <text x="150" y="45" fill="#1e293b" font-size="12" text-anchor="middle">New Maven Project Wizard</text>
            </svg>
            <p style="margin-top:0.3rem;">📁 <em>STS → File → New → Maven Project</em></p>
        </div>
    </div>

    <!-- Step 2 -->
    <div class="step-box">
        <strong>Step 2: Configure the Project</strong>
        <p>Provide the project name and other required details (Group Id, Artifact Id, etc.).</p>
        <div class="image-placeholder">
            <svg width="350" height="100" viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="330" height="80" rx="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
                <text x="175" y="35" fill="#1e293b" font-size="11" text-anchor="middle">Group: com.javatpoint</text>
                <text x="175" y="55" fill="#1e293b" font-size="11" text-anchor="middle">Artifact: spring-boot-example</text>
                <text x="175" y="75" fill="#1e293b" font-size="11" text-anchor="middle">Version: 0.0.1-SNAPSHOT</text>
            </svg>
        </div>
        <p>After clicking the <strong>Finish</strong> button, the Maven project will be created.</p>
    </div>

    <!-- Step 3: View Project -->
    <div class="step-box">
        <strong>Step 3: View the Created Project</strong>
        <p>The newly created project looks like the following screenshot.</p>
        <div class="image-placeholder">
            <svg width="220" height="140" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="200" height="120" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
                <text x="20" y="35" fill="#0f4c5f" font-size="11" font-weight="bold">📁 spring-boot-example</text>
                <text x="30" y="55" fill="#334155" font-size="10">├── src/</text>
                <text x="40" y="70" fill="#334155" font-size="10">│   ├── main/</text>
                <text x="50" y="85" fill="#334155" font-size="10">│   │   ├── java/</text>
                <text x="50" y="100" fill="#334155" font-size="10">│   │   └── resources/</text>
                <text x="40" y="115" fill="#334155" font-size="10">│   └── test/</text>
                <text x="30" y="130" fill="#334155" font-size="10">├── pom.xml</text>
            </svg>
        </div>
        <p>This Maven project contains a <code>pom.xml</code> file with the following default configuration:</p>
        <pre><code>&lt;project xmlns="https://maven.apache.org/POM/4.0.0" ...&gt;  
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;  
    &lt;groupId&gt;com.javatpoint&lt;/groupId&gt;  
    &lt;artifactId&gt;spring-boot-example&lt;/artifactId&gt;  
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;  
    &lt;name&gt;JavaTpoint Spring Boot Example&lt;/name&gt;  
&lt;/project&gt;</code></pre>
    </div>

    <!-- Step 4: Add Parent -->
    <div class="step-box">
        <strong>Step 4: Add Spring Boot Parent</strong>
        <p>Now, configure the Maven project to make it a Spring Boot project by adding the <code>parent</code> section in the <code>pom.xml</code> file.</p>
        <pre><code>&lt;parent&gt;  
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;  
    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;  
    &lt;version&gt;1.4.2.RELEASE&lt;/version&gt;  
&lt;/parent&gt;</code></pre>
        <p>The parent project declares that our project is a child of the Spring Boot parent project, providing dependency management and default configuration.</p>
    </div>

    <!-- Step 5: Add Dependency -->
    <div class="step-box">
        <strong>Step 5: Add Spring Boot Dependency</strong>
        <p>Add the following dependency inside the <code>pom.xml</code> file:</p>
        <pre><code>&lt;dependencies&gt;  
    &lt;dependency&gt;  
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;  
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;  
    &lt;/dependency&gt;  
&lt;/dependencies&gt;</code></pre>
        <div class="note">
            💡 <strong>Note:</strong> Maven automatically downloads the required JAR files after adding the dependency (if you have an internet connection).
        </div>
    </div>

    <!-- Step 6: Java Version -->
    <div class="step-box">
        <strong>Step 6: Add Java Version</strong>
        <p>Now, specify the Java version for the project.</p>
        <pre><code>&lt;properties&gt;  
    &lt;java.version&gt;1.8&lt;/java.version&gt;  
&lt;/properties&gt;</code></pre>
    </div>

    <!-- Step 7: Check Project Structure -->
    <div class="step-box">
        <strong>Step 7: Check Project Structure</strong>
        <p>After adding dependencies, the project structure will look like the following screenshot.</p>
        <div class="image-placeholder">
            <svg width="240" height="160" viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="220" height="140" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
                <text x="20" y="35" fill="#0f4c5f" font-size="11" font-weight="bold">📁 spring-boot-example</text>
                <text x="30" y="55" fill="#334155" font-size="10">├── src/</text>
                <text x="40" y="70" fill="#334155" font-size="10">│   ├── main/</text>
                <text x="50" y="85" fill="#334155" font-size="10">│   │   ├── java/</text>
                <text x="50" y="100" fill="#334155" font-size="10">│   │   └── resources/</text>
                <text x="40" y="115" fill="#334155" font-size="10">│   └── test/</text>
                <text x="30" y="130" fill="#334155" font-size="10">├── pom.xml</text>
                <text x="30" y="145" fill="#334155" font-size="10">└── target/ (after build)</text>
            </svg>
        </div>
        <p>You can notice that Maven creates a <code>target/</code> folder containing downloaded JAR files after you update the project.</p>
    </div>

    <!-- Step 8: Update Maven Project -->
    <div class="step-box">
        <strong>Step 8: Update Maven Project</strong>
        <p>Update the Maven project after adding new dependencies (right-click project → Maven → Update Project).</p>
        <div class="image-placeholder">
            <span class="badge">⏳ Maven Update</span>  &nbsp; <span style="color:#475569;">Resolving dependencies ...</span>
        </div>
    </div>

    <!-- Step 9: Create Main Class -->
    <div class="step-box">
        <strong>Step 9: Create the Main Class</strong>
        <p>Create a Java class inside <code>src/main/java</code> (e.g., <code>com.javatpoint.SpringBootExample</code>).</p>
        <pre><code>// SpringBootExample.java
package com.javatpoint;  

import org.springframework.boot.SpringApplication;  
import org.springframework.boot.autoconfigure.SpringBootApplication;  

@SpringBootApplication  
public class SpringBootExample {  
    public static void main(String[] args) {  
        SpringApplication.run(SpringBootExample.class, args);  
    }  
}</code></pre>
        <p>The <code>@SpringBootApplication</code> annotation enables auto‑configuration and component scanning.</p>
    </div>

    <!-- Step 10: Run Application -->
    <div class="step-box">
        <strong>Step 10: Run the Application</strong>
        <p>Run the class as a Java Application (right‑click → Run As → Java Application).</p>
        <div class="image-placeholder">
            <svg width="400" height="60" viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="380" height="40" rx="8" fill="#0f172a" stroke="#475569" stroke-width="1" />
                <text x="25" y="35" fill="#a5f3fc" font-size="11" font-family="monospace">  .   ____          _            __ _ _</text>
                <text x="25" y="50" fill="#a5f3fc" font-size="11" font-family="monospace"> /\\\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \</text>
                <!-- shortened for display -->
            </svg>
            <p style="margin-top:0.3rem;">The following output will be displayed in the console:</p>
        </div>
        <div class="example-output">
            <strong>✅ Started SpringBootExample in 14.047 seconds (JVM running for 17.391)</strong>
        </div>
        <p>The line <code>Started SpringBootExample in 14.047 seconds</code> shows that our application has started successfully.</p>
    </div>

    <!-- Additional Tips -->
    <h2>🔁 Alternative: Using Spring Initializr</h2>
    <p>While we used STS to manually create a Maven project, the recommended modern approach is to use <a href="https://start.spring.io" target="_blank" style="color:#2c7da0;">Spring Initializr</a>. It generates a ready‑to‑run Spring Boot project with selected dependencies, Java version, and packaging. However, understanding the manual Maven setup is valuable for developers who prefer full control.</p>

    <div class="note">
        💡 <strong>Tip:</strong> Always use the latest stable version of Spring Boot (e.g., 2.7.x, 3.x) by updating the parent version in <code>pom.xml</code>. The example uses 1.4.2.RELEASE for illustration; in practice, you should use a recent version.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Creating a Spring Boot Maven project manually in STS gives you a deeper understanding of the project structure and dependency management. Once the <code>parent</code> and <code>spring-boot-starter-web</code> are added, you can immediately start developing REST APIs. For production, consider using Spring Initializr or the Spring Boot CLI for faster bootstrapping.
    </div>

    <footer>
        Spring Boot Maven Project – Step-by-Step Creation | Last Updated: 18 May 2026
    </footer>
</div>
</body>
</html>


                      `
        },

          {
            id: "Spring-Boot-Features",
            name: "Spring Boot Features",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Features – Comprehensive Guide</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .feature-icon {
            font-size: 1.8rem;
            margin-right: 0.5rem;
            vertical-align: middle;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>✨ Spring Boot Features</h1>
    <div class="last-updated">📅 Last Updated : 18 May 2026</div>

    <div class="intro-text">
        Spring Boot provides many useful features that make Java application development faster, easier, and more efficient. 
        It reduces configuration work and helps developers quickly build stand‑alone and production‑ready applications.
        <br><br>
        <strong>Main features of Spring Boot are:</strong>
        <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
            <li>Web Development</li>
            <li>SpringApplication</li>
            <li>Application Events and Listeners</li>
            <li>Admin Support</li>
            <li>Externalized Configuration</li>
            <li>Properties Files</li>
            <li>YAML Support</li>
            <li>Type‑safe Configuration</li>
            <li>Logging</li>
            <li>Security</li>
        </ul>
        Here, we will discuss these features one by one.
    </div>

    <!-- 1. Web Development -->
    <h2>🌐 1. Web Development</h2>
    <p>Spring Boot is well‑suited for web application development. We can easily create a self‑contained HTTP server using embedded <strong>Tomcat, Jetty, or Undertow</strong>. The <code>spring-boot-starter-web</code> module provides everything needed to start and run a web application quickly.</p>
    <div class="example-output">
        ✅ <strong>Just add:</strong> <code>spring-boot-starter-web</code> → auto‑configures DispatcherServlet, embedded container, and default error handling.
    </div>

    <!-- 2. SpringApplication -->
    <h2>🚀 2. SpringApplication</h2>
    <p>The <code>SpringApplication</code> class provides a convenient way to bootstrap a Spring application from the <code>main()</code> method. You can start your application just by calling the static <code>run()</code> method.</p>
    <pre><code>public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
}</code></pre>
    <p>It handles application context initialization, logging, and startup banners. It also allows customisation through <code>SpringApplication</code> instance methods.</p>

    <!-- 3. Application Events and Listeners -->
    <h2>📡 3. Application Events and Listeners</h2>
    <p>Spring Boot uses events to handle a variety of tasks (e.g., context refresh, startup, shutdown). It allows us to create factory files to add listeners. You can refer to listeners using the <code>ApplicationListener</code> key.</p>
    <p>Always create the factory file in the <code>META-INF</code> folder, e.g., <code>META-INF/spring.factories</code>.</p>
    <div class="note">
        💡 <strong>Example:</strong> You can listen to <code>ApplicationReadyEvent</code> to run code after the application is fully started.
    </div>

    <!-- 4. Admin Support -->
    <h2>🛠️ 4. Admin Support</h2>
    <p>Spring Boot provides the facility to enable admin‑related features for the application. It is used to access and manage the application remotely. We can enable it by simply using the <code>spring.application.admin.enabled</code> property.</p>
    <p>This exposes JMX MBeans and other management endpoints for monitoring and controlling the application.</p>

    <!-- 5. Externalized Configuration -->
    <h2>⚙️ 5. Externalized Configuration</h2>
    <p>Spring Boot allows us to externalize our configuration so that we can work with the same application in different environments. The application uses <strong>YAML</strong> or <strong>properties</strong> files to externalize configuration.</p>
    <p>For example, you can define different profiles (<code>dev</code>, <code>prod</code>) and load the appropriate configuration.</p>
    <pre><code># application-dev.properties
server.port=8081

# application-prod.properties
server.port=80</code></pre>
    <p>Then run with <code>--spring.profiles.active=dev</code>.</p>

    <!-- 6. Properties Files -->
    <h2>📄 6. Properties Files</h2>
    <p>Spring Boot provides a rich set of <strong>Application Properties</strong>. We can use them in the <code>application.properties</code> file of our project. Properties are used to set values like <code>server.port=8082</code> and many others. It helps to organize application properties in a single place.</p>
    <p>Example:</p>
    <pre><code>server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
logging.level.root=INFO</code></pre>

    <!-- 7. YAML Support -->
    <h2>📝 7. YAML Support</h2>
    <p>YAML provides a convenient way for specifying hierarchical configuration. It is a superset of JSON. The <code>SpringApplication</code> class automatically supports YAML. It is a successful alternative to properties files, especially for complex configurations.</p>
    <pre><code># application.yml
server:
  port: 8080
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: secret</code></pre>
    <p>YAML allows nested structures and is more readable for many developers.</p>

    <!-- 8. Type-safe Configuration -->
    <h2>🛡️ 8. Type‑safe Configuration</h2>
    <p>Strong type‑safe configuration is provided to govern and validate the configuration of the application. Application configuration is always a crucial task which should be type‑safe. We can use the <code>@ConfigurationProperties</code> annotation to bind external properties to Java objects with validation.</p>
    <pre><code>@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;
    private int timeout;
    // getters and setters
}</code></pre>
    <p>This ensures that the configuration is validated at startup and errors are caught early.</p>

    <!-- 9. Logging -->
    <h2>📜 9. Logging</h2>
    <p>Spring Boot uses <strong>Commons Logging</strong> for all internal logging, but you can easily switch to Logback, Log4j2, or Java Util Logging. Logging dependencies are managed by default. We should not change logging dependencies, unless customization is needed.</p>
    <p>To configure logging, add properties like:</p>
    <pre><code>logging.level.org.springframework=DEBUG
logging.file.name=app.log</code></pre>

    <!-- 10. Security -->
    <h2>🔒 10. Security</h2>
    <p>Spring Boot applications are Spring‑based web applications. So, they are secure by default with <strong>basic authentication</strong> on all HTTP endpoints (if Spring Security is on the classpath). A rich set of endpoints is available for developing a secure Spring Boot application.</p>
    <p>You can customize security by adding your own <code>SecurityConfig</code> and overriding default settings.</p>
    <div class="note">
        💡 <strong>Spring Boot Starter Security:</strong> <code>spring-boot-starter-security</code> adds auto‑configuration for authentication, CSRF protection, and more.
    </div>

    <!-- Additional Insights -->
    <h2>🧩 Spring Boot Features – At a Glance</h2>
    <table class="op-table">
        <thead><tr><th>Feature</th><th>Benefit</th></tr></thead>
        <tbody>
            <tr><td>Web Development</td><td>Embedded servers, auto‑configured MVC</td></tr>
            <tr><td>SpringApplication</td><td>Simplified bootstrap and lifecycle management</td></tr>
            <tr><td>Events & Listeners</td><td>Extensible runtime hooks</td></tr>
            <tr><td>Admin Support</td><td>Remote management and monitoring</td></tr>
            <tr><td>Externalized Config</td><td>Environment‑specific settings without code changes</td></tr>
            <tr><td>Properties / YAML</td><td>Flexible, hierarchical configuration</td></tr>
            <tr><td>Type‑safe Config</td><td>Strongly typed, validated properties</td></tr>
            <tr><td>Logging</td><td>Ready‑to‑use with common log frameworks</td></tr>
            <tr><td>Security</td><td>Default authentication and easy customisation</td></tr>
        </tbody>
    </table>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Spring Boot's rich feature set is designed to eliminate boilerplate, reduce configuration overhead, and let developers focus on business logic. From embedded servers to production‑ready monitoring, each feature works seamlessly to accelerate development while maintaining robustness and scalability.
    </div>

    <footer>
        Spring Boot Features – Complete Overview | Last Updated: 18 May 2026
    </footer>
</div>
</body>
</html>


                      `
        },

                  ]
      },


 
    {
      id: "Creating-Projects",
      name: "Creating-Projects",
      isParent: true,
      subtopics: [

        {
            id: "Spring-Initializr",
            name: "Spring Initializr",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Initializr – Project Generation Tool</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .ui-mock {
            background: #f8fafc;
            border-radius: 24px;
            border: 1px solid #e2e8f0;
            padding: 1.5rem;
            margin: 1.5rem 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }
        .ui-row {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            align-items: center;
            margin-bottom: 0.8rem;
        }
        .ui-label {
            font-weight: 600;
            color: #0f4c5f;
            width: 100px;
        }
        .ui-value {
            background: white;
            padding: 0.3rem 0.8rem;
            border-radius: 8px;
            border: 1px solid #cbd5e1;
            flex: 1;
            min-width: 150px;
        }
        .ui-button {
            background: #2c7da0;
            color: white;
            padding: 0.4rem 1.2rem;
            border-radius: 30px;
            border: none;
            font-weight: 600;
            cursor: default;
        }
        .badge {
            background: #2c7da0;
            color: white;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-block;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>🌱 Spring Initializr</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        Spring Initializr is a web‑based tool provided by the Pivotal Web Service. With the help of Spring Initializr, we can easily generate the structure of a Spring Boot Project. It offers an extensible API for creating JVM‑based projects.<br><br>
        It also provides various options for the project that are expressed in a metadata model. The metadata model allows us to configure the list of dependencies supported by JVM and platform versions, etc. It serves its metadata in a well‑known format that provides necessary assistance to third‑party clients.
    </div>

    <h2>🧩 Spring Initializr Modules</h2>
    <p>Spring Initializr has the following modules:</p>
    <table class="op-table">
        <thead><tr><th>Module</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>initializr-actuator</code></td><td>Provides additional information and statistics on project generation (optional).</td></tr>
            <tr><td><code>initializr-bom</code></td><td>BOM stands for Bill Of Materials. In Spring Boot, BOM is a special POM used to control dependency versions. Provides a central place to define and update versions, allowing you to add dependencies without worrying about versions.</td></tr>
            <tr><td><code>initializr-docs</code></td><td>Provides documentation.</td></tr>
            <tr><td><code>initializr-generator</code></td><td>Core project generation library.</td></tr>
            <tr><td><code>initializr-generator-spring</code></td><td>Spring‑specific generator extensions.</td></tr>
            <tr><td><code>initializr-generator-test</code></td><td>Test infrastructure for project generation.</td></tr>
            <tr><td><code>initializr-metadata</code></td><td>Metadata infrastructure for various aspects of the projects.</td></tr>
            <tr><td><code>initializr-service-example</code></td><td>Custom instances example.</td></tr>
            <tr><td><code>initializr-version-resolver</code></td><td>Optional module to extract version numbers from an arbitrary POM.</td></tr>
            <tr><td><code>initializr-web</code></td><td>Provides web endpoints for third‑party clients.</td></tr>
        </tbody>
    </table>

    <h2>🖥️ Supported Interfaces</h2>
    <ul style="margin-left: 2rem; margin-bottom: 1rem;">
        <li><strong>IDEs:</strong> STS, IntelliJ IDEA Ultimate, NetBeans, Eclipse. Plugin for NetBeans: <a href="https://github.com/AlexFalappa/nb-springboot" target="_blank" style="color:#2c7da0;">github.com/AlexFalappa/nb-springboot</a>. For VSCode: <a href="https://github.com/microsoft/vscode-spring-initializr" target="_blank" style="color:#2c7da0;">microsoft/vscode-spring-initializr</a>.</li>
        <li><strong>Web UI:</strong> <a href="http://start.spring.io" target="_blank" style="color:#2c7da0;">start.spring.io</a> or <a href="https://start-scs.cfapps.io" target="_blank" style="color:#2c7da0;">start-scs.cfapps.io</a>.</li>
        <li><strong>Command‑line:</strong> Spring Boot CLI, cURL, or HTTPie.</li>
    </ul>

    <div class="note">
        💡 <strong>Tip:</strong> The most popular way is using the web UI at <code>start.spring.io</code>. It's intuitive and allows you to select dependencies, Java version, and packaging with a few clicks.
    </div>

    <h2>🖼️ Spring Initializr Web UI</h2>
    <p>The following image shows the Spring Initializr UI:</p>
    <div class="ui-mock">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; margin-bottom: 1rem;">
            <span style="font-weight:700; font-size:1.2rem;">🌱 Spring Initializr</span>
            <span class="badge">v2.2.2</span>
        </div>
        <div class="ui-row">
            <span class="ui-label">Project</span>
            <span class="ui-value">Maven Project</span>
            <span style="margin-left:auto; color:#64748b;">Gradle Project</span>
        </div>
        <div class="ui-row">
            <span class="ui-label">Language</span>
            <span class="ui-value">Java</span>
            <span style="margin-left:auto; color:#64748b;">Kotlin · Groovy</span>
        </div>
        <div class="ui-row">
            <span class="ui-label">Spring Boot</span>
            <span class="ui-value">2.2.2</span>
            <span style="margin-left:auto; color:#64748b;">(latest stable)</span>
        </div>
        <div class="ui-row">
            <span class="ui-label">Group</span>
            <span class="ui-value">com.example</span>
        </div>
        <div class="ui-row">
            <span class="ui-label">Artifact</span>
            <span class="ui-value">demo</span>
        </div>
        <div class="ui-row">
            <span class="ui-label">Dependencies</span>
            <span class="ui-value" style="background:#f1f5f9;">Spring Web, Spring Data JPA, H2 Database …</span>
        </div>
        <div style="border-top: 1px solid #e2e8f0; margin-top: 1rem; padding-top: 1rem; display:flex; gap:1.5rem; flex-wrap:wrap;">
            <div><span class="ui-label" style="width:auto;">Options</span> <span style="color:#475569;">Name: demo · Description: My project · Package: com.example · Packaging: Jar · Java: 8</span></div>
            <div style="margin-left:auto;"><span class="ui-button">Generate</span></div>
        </div>
        <div style="margin-top:0.5rem; font-size:0.85rem; color:#64748b;">⬇️ Clicking Generate will download a <code>demo.zip</code> containing the project structure.</div>
    </div>

    <h2>📋 Generating a Project – Step by Step</h2>
    <p>Before creating a project, we must be familiar with the UI. Spring Initializr UI has the following labels:</p>
    <table class="op-table">
        <thead><tr><th>Field</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><strong>Project</strong></td><td>Defines the kind of project. We can create either a Maven Project or Gradle Project. (We use Maven throughout this tutorial.)</td></tr>
            <tr><td><strong>Language</strong></td><td>Choice among Java, Kotlin, and Groovy. Java is selected by default.</td></tr>
            <tr><td><strong>Spring Boot</strong></td><td>Select the Spring Boot version. The latest stable version is shown (e.g., 2.2.2).</td></tr>
            <tr><td><strong>Project Metadata</strong></td><td>Contains Group (package name) and Artifact (application name). Default: <code>com.example</code> and <code>demo</code>.</td></tr>
            <tr><td><strong>Dependencies</strong></td><td>Collection of artifacts (starters) that we can add to our project, e.g., <code>Spring Web</code>, <code>Spring Data JPA</code>.</td></tr>
        </tbody>
    </table>
    <p>The <strong>Options</strong> section contains:</p>
    <ul style="margin-left:2rem;">
        <li><strong>Name:</strong> Same as Artifact.</li>
        <li><strong>Description:</strong> A brief description of the project.</li>
        <li><strong>Package Name:</strong> Similar to Group name.</li>
        <li><strong>Packaging:</strong> Choose Jar or War.</li>
        <li><strong>Java:</strong> Select JVM version (e.g., Java 8).</li>
    </ul>
    <p>There is a <strong>Generate</strong> button. When clicked, it starts packing the project and downloads the selected Jar or War file.</p>

    <div class="example-output">
        ✅ <strong>Quick Steps:</strong><br>
        1. Go to <a href="https://start.spring.io" target="_blank" style="color:#2c7da0;">start.spring.io</a><br>
        2. Choose Maven, Java, Spring Boot version, fill Group/Artifact, add dependencies.<br>
        3. Click Generate → download the zip, extract, and import into your IDE.
    </div>

    <h2>🛠️ Using Spring Initializr from Command Line</h2>
    <p>You can also generate projects using cURL:</p>
    <pre><code>curl https://start.spring.io/starter.zip \
  -d dependencies=web,data-jpa \
  -d groupId=com.example \
  -d artifactId=myapp \
  -d javaVersion=11 \
  -o myapp.zip</code></pre>
    <p>This downloads a zip with the specified dependencies and metadata.</p>

    <div class="note">
        💡 <strong>Pro Tip:</strong> Spring Initializr is not just for beginners; it's the recommended way to bootstrap any Spring Boot project, ensuring you get the correct version compatibility and dependency management from the start.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Spring Initializr is an indispensable tool for Spring Boot developers. It abstracts away project setup complexities, provides a rich set of dependencies, and supports multiple interfaces (Web, CLI, IDE plugins). Whether you are a beginner or an experienced developer, using Initializr saves time and reduces errors, letting you focus on writing business logic.
    </div>

    <footer>
        Spring Initializr – Complete Guide | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },
         {
            id: "Download-and-Install-STS-IDE",
            name: "Download and Install STS IDE",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download and Install STS IDE – Spring Tool Suite</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .step-box {
            background: #f8fafc;
            border-radius: 18px;
            padding: 1.2rem 1.8rem;
            margin: 1.2rem 0;
            border: 1px solid #e2e8f0;
        }
        .step-box strong {
            color: #0f4c5f;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .image-placeholder {
            background: #f1f5f9;
            border-radius: 16px;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border: 1px dashed #94a3b8;
            text-align: center;
            color: #475569;
            font-size: 0.9rem;
        }
        .image-placeholder svg {
            max-width: 100%;
            height: auto;
        }
        .badge {
            background: #2c7da0;
            color: white;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-block;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>⬇️ Download and Install STS IDE</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        Spring Tool Suite (STS) is a powerful IDE used for developing Spring and Spring Boot applications. It provides an easy environment for creating, running, debugging, and managing Spring projects. In this chapter, you will learn how to download, install, and launch STS IDE on your system.
    </div>

    <h2>🛠️ Spring Tool Suite (STS) IDE</h2>
    <p>Spring Tool Suite (STS) is a popular IDE used for developing Spring and Spring Boot applications. It is based on the Eclipse IDE and provides a complete environment for coding, running, debugging, and deploying Spring applications. STS also provides features like code validation, auto-configuration support, quick fixes, and project management tools that make development easier and faster.</p>

    <h2>📥 Steps to Download and Install STS IDE</h2>
    <p>Follow the steps given below to download and install Spring Tool Suite (STS) IDE.</p>

    <!-- Step 1 -->
    <div class="step-box">
        <strong>Step 1: Download STS IDE</strong>
        <p>Download Spring Tool Suite from the official Spring website:</p>
        <p><a href="https://spring.io/tools3/sts/all" target="_blank" style="color:#2c7da0;">https://spring.io/tools3/sts/all</a></p>
        <p>Choose the platform according to your operating system. In this tutorial, we are using the Windows platform.</p>
        <div class="image-placeholder">
            <svg width="350" height="60" viewBox="0 0 350 60" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="330" height="40" rx="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
                <text x="175" y="35" fill="#1e293b" font-size="12" text-anchor="middle">Download STS for Windows (ZIP)</text>
            </svg>
            <p style="margin-top:0.3rem;">📦 <em>STS distribution ZIP file</em></p>
        </div>
    </div>

    <!-- Step 2 -->
    <div class="step-box">
        <strong>Step 2: Extract and Install STS</strong>
        <p>After downloading the ZIP file, extract it to your desired location.</p>
        <p>Open the extracted folder: <code>sts-bundle -> sts-3.9.9.RELEASE</code></p>
        <p>Now, double-click on the <code>STS.exe</code> file to start the installation.</p>
        <div class="image-placeholder">
            <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="180" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
                <text x="100" y="35" fill="#0f4c5f" font-size="11" text-anchor="middle" font-weight="bold">sts-3.9.9.RELEASE</text>
                <text x="100" y="55" fill="#334155" font-size="10" text-anchor="middle">📄 STS.exe</text>
            </svg>
        </div>
    </div>

    <!-- Step 3 -->
    <div class="step-box">
        <strong>Step 3: Launch STS IDE</strong>
        <p>When the Spring Tool Suite Launcher dialog box appears, click on the <strong>Launch</strong> button. You can also change the workspace location if required.</p>
        <div class="image-placeholder">
            <span class="badge">🚀 Launch</span>  &nbsp; <span style="color:#475569;">Workspace: C:\Users\YourName\workspace-sts</span>
        </div>
    </div>

    <!-- Step 4 -->
    <div class="step-box">
        <strong>Step 4: Start STS IDE</strong>
        <p>After clicking the Launch button, STS IDE starts loading and initializing the required plugins and settings.</p>
        <div class="image-placeholder">
            <svg width="300" height="50" viewBox="0 0 300 50" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="280" height="30" rx="8" fill="#0f172a" stroke="#475569" stroke-width="1" />
                <text x="150" y="30" fill="#a5f3fc" font-size="11" text-anchor="middle" font-family="monospace">Loading Spring Tool Suite...</text>
            </svg>
        </div>
    </div>

    <!-- STS User Interface -->
    <h2>🖥️ STS User Interface</h2>
    <p>After successful installation, the Spring Tool Suite user interface will appear as shown below.</p>
    <div class="image-placeholder">
        <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="380" height="180" rx="10" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
            <rect x="20" y="20" width="120" height="120" rx="4" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1" />
            <text x="80" y="70" fill="#334155" font-size="10" text-anchor="middle">Package Explorer</text>
            <rect x="150" y="20" width="230" height="120" rx="4" fill="white" stroke="#94a3b8" stroke-width="1" />
            <text x="265" y="70" fill="#334155" font-size="10" text-anchor="middle">Editor Area</text>
            <rect x="20" y="150" width="360" height="30" rx="4" fill="white" stroke="#94a3b8" stroke-width="1" />
            <text x="200" y="170" fill="#334155" font-size="10" text-anchor="middle">Console / Problems View</text>
        </svg>
        <p style="margin-top:0.3rem;">📌 <em>STS main interface – Package Explorer, Editor, and Console views</em></p>
    </div>
    <p>STS provides an easy-to-use interface for developing Spring applications. It includes tools for creating Spring projects, managing Maven dependencies, running applications, and debugging code efficiently.</p>

    <h2>⚙️ System Requirements for STS IDE</h2>
    <p>Before installing Spring Tool Suite (STS) IDE, make sure your system meets the following requirements:</p>
    <ul style="margin-left:2rem;">
        <li>Java JDK 8 or higher</li>
        <li>Minimum 4 GB RAM (8 GB recommended)</li>
        <li>Windows, Linux, or macOS operating system</li>
        <li>At least 2 GB free disk space</li>
        <li>Stable internet connection for downloading dependencies</li>
    </ul>
    <p>These requirements help STS run smoothly and efficiently on your system.</p>

    <h2>📋 Prerequisites Before Installing STS</h2>
    <p>Before installing STS IDE, <strong>Java JDK</strong> should already be installed on your computer. STS requires Java to run Spring and Spring Boot applications. It is also important to configure the Java environment variables properly, such as <code>JAVA_HOME</code> and system <code>PATH</code>.</p>
    <div class="note" style="background:#fff3e0; border-left-color:#e67e22;">
        ⚠️ <strong>Important:</strong> Without Java installation, STS IDE will not start properly.
    </div>

    <h3>How to Check Java Installation</h3>
    <p>You can check whether Java is installed on your system by using the following commands in Command Prompt or Terminal.</p>
    <pre><code>java -version</code></pre>
    <p>The above command displays the installed Java version.</p>
    <pre><code>javac -version</code></pre>
    <p>The above command checks whether the Java compiler is installed properly. If both commands display version information, Java is successfully installed on your system.</p>

    <div class="example-output">
        ✅ <strong>Example output for java -version:</strong><br>
        <code>java version "1.8.0_301"<br>Java(TM) SE Runtime Environment (build 1.8.0_301-b09)</code>
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Installing Spring Tool Suite (STS) is straightforward. Simply download the correct package for your OS, extract it, and launch the executable. Make sure Java is installed beforehand. STS provides a rich, Spring‑aware development environment that significantly boosts productivity for Spring and Spring Boot projects.
    </div>

    <footer>
        Download and Install STS IDE – Complete Guide | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },
         {
            id: "Creating-a-Spring-Boot-Project",
            name: "Creating a Spring Boot Project",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creating a Spring Boot Project – Step by Step</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .step-box {
            background: #f8fafc;
            border-radius: 18px;
            padding: 1.2rem 1.8rem;
            margin: 1.2rem 0;
            border: 1px solid #e2e8f0;
        }
        .step-box strong {
            color: #0f4c5f;
        }
        .image-placeholder {
            background: #f1f5f9;
            border-radius: 16px;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border: 1px dashed #94a3b8;
            text-align: center;
            color: #475569;
            font-size: 0.9rem;
        }
        .image-placeholder svg {
            max-width: 100%;
            height: auto;
        }
        .badge {
            background: #2c7da0;
            color: white;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-block;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>📁 Creating a Spring Boot Project</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        Spring Boot provides a simple and fast way to create Java applications. We can easily generate a Spring Boot project using <strong>Spring Initializr</strong>, which automatically creates the required project structure and configuration files.<br><br>
        In this chapter, you will learn how to create, import, and run a simple Spring Boot project step by step.
    </div>

    <h2>📋 Steps to Create a Spring Boot Project</h2>
    <p>Follow the steps given below to create a simple Spring Boot project.</p>

    <!-- Step 1 -->
    <div class="step-box">
        <strong>Step 1: Open Spring Initializr</strong>
        <p>Open the Spring Initializr website:</p>
        <p><a href="https://start.spring.io" target="_blank" style="color:#2c7da0;">https://start.spring.io</a></p>
        <p>Spring Initializr is an online tool used to generate Spring Boot projects quickly.</p>
        <div class="image-placeholder">
            <svg width="400" height="80" viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="380" height="60" rx="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
                <text x="200" y="45" fill="#1e293b" font-size="13" text-anchor="middle" font-weight="bold">start.spring.io</text>
                <text x="200" y="62" fill="#475569" font-size="10" text-anchor="middle">Spring Initializr Web Interface</text>
            </svg>
        </div>
    </div>

    <!-- Step 2 -->
    <div class="step-box">
        <strong>Step 2: Enter Project Details</strong>
        <p>Provide the required project details such as:</p>
        <ul style="margin-left: 1.5rem;">
            <li><strong>Group:</strong> com.javatpoint</li>
            <li><strong>Artifact:</strong> spring-boot-example</li>
        </ul>
        <p>After entering the details, click on the <strong>Generate</strong> button.</p>
        <div class="image-placeholder">
            <svg width="350" height="100" viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="330" height="80" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
                <text x="175" y="35" fill="#1e293b" font-size="11" text-anchor="middle">Group: com.javatpoint</text>
                <text x="175" y="55" fill="#1e293b" font-size="11" text-anchor="middle">Artifact: spring-boot-example</text>
                <rect x="120" y="70" width="90" height="20" rx="10" fill="#2c7da0" />
                <text x="165" y="84" fill="white" font-size="11" text-anchor="middle" font-weight="bold">Generate</text>
            </svg>
            <p style="margin-top:0.3rem;">📦 When you click <strong>Generate</strong>, Spring Initializr packages the project and downloads it as a ZIP file.</p>
        </div>
    </div>

    <!-- Step 3 -->
    <div class="step-box">
        <strong>Step 3: Extract the Downloaded File</strong>
        <p>Extract the downloaded ZIP file to your desired location.</p>
        <div class="image-placeholder">
            <span class="badge">📁 spring-boot-example.zip</span>  →  <span class="badge" style="background:#10b981;">📂 spring-boot-example</span>
        </div>
    </div>

    <!-- Step 4 -->
    <div class="step-box">
        <strong>Step 4: Import the Project into STS</strong>
        <p>Import the extracted project into STS IDE using the following steps:</p>
        <p style="background: #eef2ff; padding: 0.5rem 1rem; border-radius: 12px; display:inline-block;">
            <code>File → Import → Existing Maven Project → Next → Browse → Select Project → Finish</code>
        </p>
        <p>It may take a few moments to import the project successfully.</p>
        <div class="image-placeholder">
            <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="280" height="80" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
                <text x="150" y="40" fill="#0f4c5f" font-size="11" text-anchor="middle">📁 spring-boot-example</text>
                <text x="150" y="60" fill="#334155" font-size="10" text-anchor="middle">(Maven project)</text>
                <text x="150" y="75" fill="#2c7da0" font-size="10" text-anchor="middle">✔ Imported successfully</text>
            </svg>
        </div>
        <p>After importing, the project directory appears in the Package Explorer.</p>
    </div>

    <!-- Main Application Class -->
    <h2>📄 Main Application Class</h2>
    <p>The generated project contains the main class named <code>SpringBootExampleApplication.java</code>.</p>
    <pre><code>package com.javatpoint.springbootexample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootExampleApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootExampleApplication.class, args);
    }
}</code></pre>
    <p>The <code>@SpringBootApplication</code> annotation marks this class as the main Spring Boot application class.</p>

    <!-- pom.xml file -->
    <h2>📦 pom.xml File</h2>
    <p>The project also contains a <code>pom.xml</code> file that manages dependencies and project configuration.</p>
    <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;2.2.2.BUILD-SNAPSHOT&lt;/version&gt;
        &lt;relativePath/&gt;
    &lt;/parent&gt;
    &lt;groupId&gt;com.javatpoint&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-example&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;name&gt;spring-boot-example&lt;/name&gt;
    &lt;description&gt;Demo project for Spring Boot&lt;/description&gt;

    &lt;properties&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
    &lt;/properties&gt;

    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
            &lt;exclusions&gt;
                &lt;exclusion&gt;
                    &lt;groupId&gt;org.junit.vintage&lt;/groupId&gt;
                    &lt;artifactId&gt;junit-vintage-engine&lt;/artifactId&gt;
                &lt;/exclusion&gt;
            &lt;/exclusions&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;

    &lt;repositories&gt;
        &lt;repository&gt;
            &lt;id&gt;spring-milestones&lt;/id&gt;
            &lt;name&gt;Spring Milestones&lt;/name&gt;
            &lt;url&gt;https://repo.spring.io/milestone&lt;/url&gt;
        &lt;/repository&gt;
        &lt;repository&gt;
            &lt;id&gt;spring-snapshots&lt;/id&gt;
            &lt;name&gt;Spring Snapshots&lt;/name&gt;
            &lt;url&gt;https://repo.spring.io/snapshot&lt;/url&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;true&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/repository&gt;
    &lt;/repositories&gt;

    &lt;pluginRepositories&gt;
        &lt;pluginRepository&gt;
            &lt;id&gt;spring-milestones&lt;/id&gt;
            &lt;name&gt;Spring Milestones&lt;/name&gt;
            &lt;url&gt;https://repo.spring.io/milestone&lt;/url&gt;
        &lt;/pluginRepository&gt;
        &lt;pluginRepository&gt;
            &lt;id&gt;spring-snapshots&lt;/id&gt;
            &lt;name&gt;Spring Snapshots&lt;/name&gt;
            &lt;url&gt;https://repo.spring.io/snapshot&lt;/url&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;true&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/pluginRepository&gt;
    &lt;/pluginRepositories&gt;
&lt;/project&gt;</code></pre>
    <p>The <code>spring-boot-starter-parent</code> provides default configurations and dependency management for the Spring Boot project.</p>

    <!-- Step 5: Run -->
    <div class="step-box">
        <strong>Step 5: Run the Application</strong>
        <p>Run the <code>SpringBootExampleApplication.java</code> file using the following steps:</p>
        <p style="background: #eef2ff; padding: 0.5rem 1rem; border-radius: 12px; display:inline-block;">
            <code>Right-click on the file → Run As → Java Application</code>
        </p>
        <div class="image-placeholder">
            <svg width="250" height="60" viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="230" height="40" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
                <text x="125" y="35" fill="#0f4c5f" font-size="12" text-anchor="middle">▶ Run As → Java Application</text>
            </svg>
        </div>
    </div>

    <!-- Application Output -->
    <h2>📊 Application Output</h2>
    <p>If the application starts successfully, the console window displays the Spring Boot startup logs.</p>
    <div class="example-output">
        <strong>✅ Console Output (excerpt):</strong><br>
        <pre style="background:#0f172a; color:#a5f3fc; margin:0; border-radius:12px; padding:0.5rem;">  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
</pre>
    </div>
    <p>The successful startup message indicates that the Spring Boot application is running properly.</p>

    <div class="note">
        💡 <strong>Tip:</strong> You can also run the application using Maven: <code>mvn spring-boot:run</code> in the terminal from the project root directory.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Creating a Spring Boot project with Spring Initializr is straightforward and efficient. The tool generates a well‑structured project with a main class, <code>pom.xml</code> (or <code>build.gradle</code>), and all necessary configurations. Once imported into STS, you can run the application immediately, making it the fastest way to start developing Spring Boot applications.
    </div>

    <footer>
        Creating a Spring Boot Project – Step by Step Guide | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },
         {
            id: "Spring-Boot-CLI",
            name: "Spring Boot CLI",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot CLI – Command Line Interface Guide</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .step-box {
            background: #f8fafc;
            border-radius: 18px;
            padding: 1.2rem 1.8rem;
            margin: 1.2rem 0;
            border: 1px solid #e2e8f0;
        }
        .step-box strong {
            color: #0f4c5f;
        }
        .image-placeholder {
            background: #f1f5f9;
            border-radius: 16px;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border: 1px dashed #94a3b8;
            text-align: center;
            color: #475569;
            font-size: 0.9rem;
        }
        .image-placeholder svg {
            max-width: 100%;
            height: auto;
        }
        .badge {
            background: #2c7da0;
            color: white;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-block;
        }
        .terminal {
            background: #0f172a;
            color: #e2e8f0;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 0.5rem 0;
            overflow-x: auto;
        }
        .terminal .prompt {
            color: #a5f3fc;
        }
        .terminal .cmd {
            color: #fbbf24;
        }
        .terminal .output {
            color: #d1d5db;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>🖥️ Spring Boot CLI</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        Spring Boot CLI (Command Line Interface) is a command‑line tool provided by the Spring Framework. It helps developers quickly create and run Spring Boot applications without writing large amounts of configuration code. Spring Boot CLI mainly works with <strong>Groovy</strong> files and is useful for rapid application development and testing.<br><br>
        In this chapter, you will learn how to download, install, and run a simple Spring Boot application using Spring Boot CLI.
    </div>

    <h2>📋 Steps to Use Spring Boot CLI</h2>
    <p>Follow the steps given below to create and run a Spring Boot application using CLI.</p>

    <!-- Step 1 -->
    <div class="step-box">
        <strong>Step 1: Download Spring Boot CLI</strong>
        <p>Download the Spring Boot CLI tool from the official Spring website.</p>
        <p><a href="https://spring.io/tools" target="_blank" style="color:#2c7da0;">https://spring.io/tools</a> (or use the CLI distribution).</p>
        <div class="image-placeholder">
            <svg width="350" height="60" viewBox="0 0 350 60" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="330" height="40" rx="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
                <text x="175" y="35" fill="#1e293b" font-size="12" text-anchor="middle">Download Spring Boot CLI ZIP</text>
            </svg>
            <p style="margin-top:0.3rem;">📦 <em>spring-boot-cli-2.x.x.RELEASE-bin.zip</em></p>
        </div>
        <p>After downloading the ZIP file, extract it to your system.</p>
    </div>

    <!-- Step 2 -->
    <div class="step-box">
        <strong>Step 2: Extract the ZIP File</strong>
        <p>After extracting the ZIP file, you will find a <code>bin</code> folder inside the CLI directory. The <code>spring</code> executable file inside this folder is used to run Spring Boot applications.</p>
        <div class="image-placeholder">
            <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="180" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
                <text x="100" y="35" fill="#0f4c5f" font-size="11" text-anchor="middle" font-weight="bold">spring-boot-cli</text>
                <text x="100" y="55" fill="#334155" font-size="10" text-anchor="middle">├── bin/spring (executable)</text>
            </svg>
        </div>
    </div>

    <!-- Step 3 -->
    <div class="step-box">
        <strong>Step 3: Open Terminal</strong>
        <p>Open the Command Prompt or Terminal and move to the <code>bin</code> directory of the Spring Boot CLI.</p>
        <div class="terminal">
            <span class="prompt">$</span> <span class="cmd">cd spring-boot-cli/bin</span>
        </div>
        <p>Example:</p>
        <div class="terminal">
            <span class="prompt">$</span> <span class="cmd">cd /path/to/spring-boot-cli/bin</span>
        </div>
    </div>

    <!-- Step 4 -->
    <div class="step-box">
        <strong>Step 4: Create a Groovy File</strong>
        <p>Spring Boot CLI executes Groovy files. Create a Groovy file for the Spring Boot application.</p>
        <div class="image-placeholder">
            <span class="badge">📄 SpringBootCliExample.groovy</span>
        </div>
        <p>Example file name:</p>
        <div class="terminal">
            <span class="prompt">$</span> <span class="cmd">touch SpringBootCliExample.groovy</span>
        </div>
    </div>

    <!-- Step 5 -->
    <div class="step-box">
        <strong>Step 5: Create a Controller in the Groovy File</strong>
        <p>Now, write a simple controller inside the Groovy file.</p>
        <pre><code>@RestController
class WebApplication {

    @RequestMapping("/cli-example")
    String home() {
        "Welcome to Spring Boot CLI"
    }
}</code></pre>
        <p>This defines a REST controller that responds to <code>/cli-example</code> with a welcome message.</p>
    </div>

    <!-- Step 6 -->
    <div class="step-box">
        <strong>Step 6: Run the Groovy File</strong>
        <p>Execute the Groovy file using the following command.</p>
        <div class="terminal">
            <span class="prompt">$</span> <span class="cmd">./spring run SpringBootCliExample.groovy</span>
        </div>
        <div class="image-placeholder">
            <svg width="300" height="50" viewBox="0 0 300 50" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="280" height="30" rx="8" fill="#0f172a" stroke="#475569" stroke-width="1" />
                <text x="150" y="30" fill="#a5f3fc" font-size="11" text-anchor="middle" font-family="monospace">Starting Spring Boot application...</text>
            </svg>
        </div>
        <p>After executing the command, Spring Boot starts the application and displays startup logs in the terminal.</p>
    </div>

    <!-- Step 7 -->
    <div class="step-box">
        <strong>Step 7: Check Application Status</strong>
        <p>After successful execution, the application status appears in the console output.</p>
        <div class="example-output">
            <strong>✅ Console Output (excerpt):</strong><br>
            <pre style="background:#0f172a; color:#a5f3fc; margin:0; border-radius:12px; padding:0.5rem;">Started WebApplication in 3.142 seconds (JVM running for 4.023)</pre>
        </div>
        <p>After several startup logs, Spring Boot displays the running status of the application.</p>
        <p>The application runs on port <strong>8080</strong> by default.</p>
    </div>

    <!-- Step 8 -->
    <div class="step-box">
        <strong>Step 8: Run the Application in Browser</strong>
        <p>Open any web browser and enter the following URL.</p>
        <div class="terminal" style="background:#f1f5f9; color:#0f4c5f;">
            http://localhost:8080/cli-example
        </div>
        <p>The browser displays the application output.</p>
        <div class="image-placeholder">
            <svg width="300" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="280" height="60" rx="8" fill="white" stroke="#94a3b8" stroke-width="1.5" />
                <text x="150" y="35" fill="#1e293b" font-size="13" text-anchor="middle" font-weight="bold">Welcome to Spring Boot CLI</text>
                <text x="150" y="55" fill="#64748b" font-size="10" text-anchor="middle">(response from /cli-example)</text>
            </svg>
        </div>
        <p>This confirms that the Spring Boot CLI application is running successfully.</p>
    </div>

    <h2>🔧 Additional CLI Commands</h2>
    <p>Spring Boot CLI offers several useful commands:</p>
    <ul style="margin-left: 2rem;">
        <li><code>spring run &lt;file&gt;</code> – Run a Groovy script.</li>
        <li><code>spring test &lt;file&gt;</code> – Run tests in a Groovy script.</li>
        <li><code>spring jar &lt;file&gt;</code> – Package an application as a JAR.</li>
        <li><code>spring init</code> – Generate a new project using Initializr (similar to start.spring.io).</li>
        <li><code>spring shell</code> – Start an interactive shell for Groovy scripts.</li>
    </ul>

    <div class="note">
        💡 <strong>Tip:</strong> Spring Boot CLI is ideal for quick prototypes, demos, and testing REST endpoints without the overhead of a full IDE. However, for production applications, the recommended approach is to use Maven/Gradle with an IDE.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Spring Boot CLI simplifies the development of Spring Boot applications by allowing you to write Groovy scripts and run them instantly. It's a great tool for learning, experimenting, and building small services. With just a few steps, you can have a running web application without any XML or heavy configuration.
    </div>

    <footer>
        Spring Boot CLI – Command Line Interface Guide | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },
         {
            id: "Creating-and-Running-a-Spring-Boot-Project-in-STS",
            name: "Creating and Running a Spring Boot Project in STS",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creating and Running a Spring Boot Project in STS</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .step-box {
            background: #f8fafc;
            border-radius: 18px;
            padding: 1.2rem 1.8rem;
            margin: 1.2rem 0;
            border: 1px solid #e2e8f0;
        }
        .step-box strong {
            color: #0f4c5f;
        }
        .image-placeholder {
            background: #f1f5f9;
            border-radius: 16px;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border: 1px dashed #94a3b8;
            text-align: center;
            color: #475569;
            font-size: 0.9rem;
        }
        .image-placeholder svg {
            max-width: 100%;
            height: auto;
        }
        .badge {
            background: #2c7da0;
            color: white;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-block;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>📂 Creating and Running a Spring Boot Project in STS</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        Spring Tool Suite (STS) provides an easy environment for creating and running Spring Boot applications. We can create a Maven‑based Spring Boot project in STS by adding the required Spring Boot dependencies and configuration files.<br><br>
        In this chapter, you will learn how to create, configure, and run a Spring Boot project step by step using STS IDE.
    </div>

    <h2>📋 Step 1: Open Spring Tool Suite</h2>
    <p>Open the Spring Tool Suite (STS) IDE on your system.</p>

    <h2>📋 Step 2: Create a Maven Project</h2>
    <p>Click on the following menu:</p>
    <p style="background:#eef2ff; padding:0.5rem 1rem; border-radius:12px; display:inline-block;">
        <code>File → New → Maven Project</code>
    </p>
    <div class="image-placeholder">
        <svg width="300" height="60" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="40" rx="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
            <text x="150" y="35" fill="#1e293b" font-size="12" text-anchor="middle">New Maven Project Wizard</text>
        </svg>
    </div>
    <p>The New Maven Project wizard appears on the screen. Click on the <strong>Next</strong> button.</p>

    <h2>📋 Step 3: Select Maven Archetype</h2>
    <p>Select the <code>maven-archetype-quickstart</code> option and click on the <strong>Next</strong> button.</p>

    <h2>📋 Step 4: Configure the Project</h2>
    <p>Provide the following project details:</p>
    <ul style="margin-left:2rem;">
        <li><strong>Group Id:</strong> com.javatpoint</li>
        <li><strong>Artifact Id:</strong> spring-boot-example-sts</li>
    </ul>
    <p>Now click on the <strong>Finish</strong> button.</p>
    <div class="image-placeholder">
        <svg width="350" height="100" viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="330" height="80" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
            <text x="175" y="35" fill="#1e293b" font-size="11" text-anchor="middle">Group: com.javatpoint</text>
            <text x="175" y="55" fill="#1e293b" font-size="11" text-anchor="middle">Artifact: spring-boot-example-sts</text>
            <rect x="120" y="65" width="90" height="20" rx="10" fill="#2c7da0" />
            <text x="165" y="79" fill="white" font-size="11" text-anchor="middle" font-weight="bold">Finish</text>
        </svg>
    </div>
    <p>After clicking Finish, STS creates the project directory.</p>
    <div class="image-placeholder">
        <svg width="220" height="120" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="100" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
            <text x="20" y="35" fill="#0f4c5f" font-size="11" font-weight="bold">📁 spring-boot-example-sts</text>
            <text x="30" y="55" fill="#334155" font-size="10">├── src/</text>
            <text x="40" y="70" fill="#334155" font-size="10">│   ├── main/</text>
            <text x="50" y="85" fill="#334155" font-size="10">│   │   └── java/</text>
            <text x="30" y="100" fill="#334155" font-size="10">├── pom.xml</text>
        </svg>
    </div>

    <h2>📋 Step 5: View the Default Files</h2>
    <p>Open the <code>App.java</code> file. By default, it contains the following code.</p>
    <pre><code>package com.javatpoint;
public class App {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}</code></pre>
    <p>The Maven project also contains a <code>pom.xml</code> file with the default Maven configuration.</p>
    <pre><code>&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;groupId&gt;com.javatpoint&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-example-sts&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;
    &lt;name&gt;spring-boot-example-sts&lt;/name&gt;
    &lt;url&gt;http://maven.apache.org&lt;/url&gt;
    &lt;properties&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
    &lt;/properties&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;junit&lt;/groupId&gt;
            &lt;artifactId&gt;junit&lt;/artifactId&gt;
            &lt;version&gt;3.8.1&lt;/version&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/project&gt;</code></pre>

    <h2>📋 Step 6: Add Java Version</h2>
    <p>Add the Java version inside the <code>&lt;properties&gt;</code> tag in the <code>pom.xml</code> file.</p>
    <pre><code>&lt;properties&gt;
    &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
    &lt;java.version&gt;1.8&lt;/java.version&gt;
&lt;/properties&gt;</code></pre>

    <h2>📋 Step 7: Add Spring Boot Parent Dependency</h2>
    <p>To convert the Maven project into a Spring Boot project, add the Spring Boot starter parent dependency.</p>
    <pre><code>&lt;parent&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
    &lt;version&gt;2.2.1.RELEASE&lt;/version&gt;
&lt;/parent&gt;</code></pre>
    <p>The parent dependency provides default configurations and dependency management for the Spring Boot application.</p>

    <h2>📋 Step 8: Add Spring Boot Web Dependency</h2>
    <p>Now, add the <code>spring-boot-starter-web</code> dependency in the <code>pom.xml</code> file.</p>
    <pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;version&gt;2.2.1.RELEASE&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
    <div class="note">
        💡 <strong>Note:</strong> After adding dependencies, Maven automatically downloads the required JAR files. These files are available inside the <strong>Maven Dependencies</strong> folder.
    </div>
    <div class="image-placeholder">
        <svg width="250" height="80" viewBox="0 0 250 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="230" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
            <text x="125" y="35" fill="#0f4c5f" font-size="11" text-anchor="middle">📦 Maven Dependencies</text>
            <text x="125" y="55" fill="#334155" font-size="10" text-anchor="middle">(contains all downloaded JARs)</text>
        </svg>
    </div>
    <p>After adding all required dependencies, the <code>pom.xml</code> file becomes a Spring Boot configuration file.</p>

    <h3>Updated <code>pom.xml</code> File</h3>
    <pre><code>&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;groupId&gt;com.javatpoint&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-example-sts&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;
    &lt;name&gt;spring-boot-example-sts&lt;/name&gt;
    &lt;url&gt;http://maven.apache.org&lt;/url&gt;
    &lt;properties&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
    &lt;/properties&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
            &lt;version&gt;2.2.1.RELEASE&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
            &lt;version&gt;2.2.1.RELEASE&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;junit&lt;/groupId&gt;
            &lt;artifactId&gt;junit&lt;/artifactId&gt;
            &lt;version&gt;3.8.1&lt;/version&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/project&gt;</code></pre>

    <h2>📋 Step 9: Create the Main Spring Boot Class</h2>
    <p>Create a new Java class named <code>SpringBootExampleSts</code> inside the <code>com.javatpoint</code> package.</p>
    <p>Use the following steps:</p>
    <p style="background:#eef2ff; padding:0.5rem 1rem; border-radius:12px; display:inline-block;">
        <code>Right-click on package → New → Class → Enter Class Name → Finish</code>
    </p>
    <div class="image-placeholder">
        <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="180" height="40" rx="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
            <text x="100" y="35" fill="#1e293b" font-size="11" text-anchor="middle">New Java Class</text>
        </svg>
    </div>

    <h2>📋 Step 10: Add <code>SpringApplication.run()</code> Method</h2>
    <p>Inside the class, call the static <code>run()</code> method of the <code>SpringApplication</code> class.</p>
    <pre><code>SpringApplication.run(SpringBootExampleSts.class, args);</code></pre>

    <h2>📋 Step 11: Add <code>@SpringBootApplication</code> Annotation</h2>
    <p>Annotate the class with <code>@SpringBootApplication</code>.</p>
    <pre><code>@SpringBootApplication</code></pre>
    <p>A single <code>@SpringBootApplication</code> annotation is used to enable the following annotations:</p>
    <ul style="margin-left:2rem;">
        <li><strong>@EnableAutoConfiguration:</strong> Enables the Spring Boot auto‑configuration mechanism.</li>
        <li><strong>@ComponentScan:</strong> Scans the package where the application is located.</li>
        <li><strong>@Configuration:</strong> Allows us to register extra beans in the context or import additional configuration classes.</li>
    </ul>
    <p>The complete class looks like the following:</p>
    <pre><code>package com.javatpoint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootExampleSts {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootExampleSts.class, args);
    }
}</code></pre>

    <h2>📋 Step 12: Run the Application</h2>
    <p>Run the <code>SpringBootExampleSts.java</code> file as a Java Application.</p>
    <p style="background:#eef2ff; padding:0.5rem 1rem; border-radius:12px; display:inline-block;">
        <code>Right-click on file → Run As → Java Application</code>
    </p>
    <div class="image-placeholder">
        <svg width="250" height="60" viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="230" height="40" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
            <text x="125" y="35" fill="#0f4c5f" font-size="12" text-anchor="middle">▶ Run As → Java Application</text>
        </svg>
    </div>
    <p>If the application runs successfully, the console displays the startup logs.</p>
    <div class="example-output">
        <strong>✅ Console Output (excerpt):</strong><br>
        <pre style="background:#0f172a; color:#a5f3fc; margin:0; border-radius:12px; padding:0.5rem;">Started SpringBootExampleSts in 12.345 seconds (JVM running for 15.678)</pre>
    </div>
    <p>The following line confirms that the application has started successfully:</p>
    <div class="example-output">
        <strong>✅ Started SpringBootExampleSts</strong>
    </div>
    <p>This means the Spring Boot application is now up and running successfully.</p>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Creating a Spring Boot project in STS involves creating a Maven project, adding the Spring Boot parent and web starter, and writing a main class with <code>@SpringBootApplication</code>. Once these steps are complete, you can run the application as a Java application and see the startup logs. This manual approach gives you full control over the project structure and dependencies, which is useful for learning and customization.
    </div>

    <footer>
        Creating and Running a Spring Boot Project in STS – Step by Step | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },

                  ]
    },

     {
      id: "Project-Components",
      name: "Project Components",
      isParent: true,
      subtopics: [

        {
            id: "Spring-Boot-Annotations",
            name: "Spring Boot Annotations",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Annotations – Complete Guide</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .annotation-card {
            background: #f8fafc;
            border-radius: 18px;
            padding: 1.2rem 1.8rem;
            margin: 1.2rem 0;
            border: 1px solid #e2e8f0;
        }
        .annotation-card strong {
            color: #0f4c5f;
        }
        .annotation-card .example {
            margin-top: 0.5rem;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>📝 Spring Boot Annotations</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        Spring Boot Annotations are a form of metadata that provide additional information about a program. These annotations help configure and manage Spring Boot applications easily. Annotations are not a direct part of the business logic, but they help the Spring Framework understand how the application should behave.<br><br>
        Spring Boot annotations simplify application development by reducing XML configuration and boilerplate code.<br><br>
        In this chapter, we will discuss some important Spring Boot annotations that are commonly used in Spring and Spring Boot applications.
    </div>

    <h2>🏷️ Core Spring Framework Annotations</h2>

    <div class="annotation-card">
        <strong>1. @Required Annotation</strong>
        <p>It applies to the bean setter method. It indicates that the annotated bean must be populated at configuration time with the required property, else it throws an exception <code>BeanInitilizationException</code>.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>public class Machine {
    private Integer cost;

    @Required
    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public Integer getCost() {
        return cost;
    }
}</code></pre>
            <p>In the example, the <code>@Required</code> annotation ensures that the <code>cost</code> property must be configured while creating the bean.</p>
        </div>
    </div>

    <div class="annotation-card">
        <strong>2. @Autowired Annotation</strong>
        <p>Spring provides annotation-based auto-wiring by providing <code>@Autowired</code> annotation. It is used to autowire spring bean on setter methods, instance variable, and constructor. When we use <code>@Autowired</code>, the spring container auto-wires the bean by matching data-type.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>@Component
public class Customer {
    private Person person;

    @Autowired
    public Customer(Person person) {
        this.person = person;
    }
}</code></pre>
            <p>Here, <code>@Autowired</code> automatically injects the <code>Person</code> bean into the <code>Customer</code> class using constructor injection.</p>
        </div>
    </div>

    <div class="annotation-card">
        <strong>3. @Configuration Annotation</strong>
        <p>It is a class-level annotation. The class annotated with <code>@Configuration</code> is used by Spring Containers as a source of bean definitions.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>@Configuration
public class Vehicle {
    @Bean
    public Vehicle engine() {
        return new Vehicle();
    }
}</code></pre>
            <p>The <code>@Configuration</code> annotation marks the class as a configuration class, and the <code>@Bean</code> annotation creates a Spring bean.</p>
        </div>
    </div>

    <div class="annotation-card">
        <strong>4. @ComponentScan Annotation</strong>
        <p>It is used when we want to scan a package for beans. It is used with the annotation <code>@Configuration</code>. We can also specify the base packages to scan for Spring Components.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>@ComponentScan(basePackages = "com.javatpoint")
@Configuration
public class ScanComponent {
    // ...
}</code></pre>
            <p>The <code>@ComponentScan</code> annotation scans the <code>com.javatpoint</code> package for Spring components.</p>
        </div>
    </div>

    <div class="annotation-card">
        <strong>5. @Bean Annotation</strong>
        <p>It is a method-level annotation. It is an alternative of XML <code>&lt;bean&gt;</code> tag. It tells the method to produce a bean to be managed by Spring Container.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>@Bean
public BeanExample beanExample() {
    return new BeanExample();
}</code></pre>
            <p>The <code>@Bean</code> annotation creates and returns an object that is managed by Spring as a bean.</p>
        </div>
    </div>

    <h2>🏷️ Spring Framework Stereotype Annotations</h2>

    <div class="annotation-card">
        <strong>1. @Component Annotation</strong>
        <p>It is a class-level annotation. It is used to mark a Java class as a bean. A Java class annotated with <code>@Component</code> is found during the classpath. The Spring Framework picks it up and configures it in the application context as a Spring Bean.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>@Component
public class Student {
    // ...
}</code></pre>
            <p>The <code>Student</code> class is marked as a Spring component.</p>
        </div>
    </div>

    <div class="annotation-card">
        <strong>2. @Controller Annotation</strong>
        <p>The <code>@Controller</code> is a class-level annotation. It is a specialization of <code>@Component</code>. It marks a class as a web request handler. It is often used to serve web pages. By default, it returns a string that indicates which route to redirect. It is mostly used with <code>@RequestMapping</code> annotation.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>@Controller
@RequestMapping("books")
public class BooksController {
    @RequestMapping(value = "/{name}", method = RequestMethod.GET)
    public Employee getBooksByName() {
        return booksTemplate;
    }
}</code></pre>
            <p>The <code>BooksController</code> class handles web requests related to books.</p>
        </div>
    </div>

    <div class="annotation-card">
        <strong>3. @Service Annotation</strong>
        <p>It is also used at class level. It tells the Spring that the class contains the business logic.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>package com.javatpoint;

@Service
public class TestService {
    public void service1() {
        // business code
    }
}</code></pre>
            <p>The <code>TestService</code> class is marked as a service class.</p>
        </div>
    </div>

    <div class="annotation-card">
        <strong>4. @Repository Annotation</strong>
        <p>It is a class-level annotation. The repository is a DAO (Data Access Object) that accesses the database directly. The repository does all the operations related to the database.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>package com.javatpoint;

@Repository
public class TestRepository {
    public void delete() {
        // persistence code
    }
}</code></pre>
            <p>The <code>TestRepository</code> class performs database-related operations using the <code>@Repository</code> annotation.</p>
        </div>
    </div>

    <h2>🏷️ Spring Boot Auto-Configuration Annotations</h2>

    <div class="annotation-card">
        <strong>1. @EnableAutoConfiguration Annotation</strong>
        <p>It automatically configures the beans that are available in the classpath and sets up the application based on project dependencies. The use of this annotation has been reduced after Spring Boot 1.2.0 because <code>@SpringBootApplication</code> provides it by default.</p>
    </div>

    <div class="annotation-card">
        <strong>2. @SpringBootApplication Annotation</strong>
        <p>It is a combination of three important annotations: <code>@EnableAutoConfiguration</code>, <code>@ComponentScan</code>, and <code>@Configuration</code>. It is mainly used to mark the main class of a Spring Boot application.</p>
        <div class="example">
            <p><strong>Example</strong></p>
            <pre><code>@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}</code></pre>
        </div>
    </div>

    <h2>🏷️ Spring MVC and REST Annotations</h2>

    <div class="annotation-card">
        <strong>@RequestMapping</strong>
        <p>It is used to map web requests. It has many optional elements like <code>consumes</code>, <code>header</code>, <code>method</code>, <code>name</code>, <code>params</code>, <code>path</code>, <code>produces</code>, and <code>value</code>. We use it with the class as well as the method.</p>
        <div class="example">
            <pre><code>@Controller
public class BooksController {
    @RequestMapping("/computer-science/books")
    public String getAllBooks(Model model) {
        // application code
        return "bookList";
    }
}</code></pre>
        </div>
    </div>

    <div class="annotation-card">
        <strong>@GetMapping</strong>
        <p>Maps HTTP GET requests on the specific handler method. Used instead of <code>@RequestMapping(method = RequestMethod.GET)</code>.</p>
    </div>

    <div class="annotation-card">
        <strong>@PostMapping</strong>
        <p>Maps HTTP POST requests. Used instead of <code>@RequestMapping(method = RequestMethod.POST)</code>.</p>
    </div>

    <div class="annotation-card">
        <strong>@PutMapping</strong>
        <p>Maps HTTP PUT requests. Used instead of <code>@RequestMapping(method = RequestMethod.PUT)</code>.</p>
    </div>

    <div class="annotation-card">
        <strong>@DeleteMapping</strong>
        <p>Maps HTTP DELETE requests. Used instead of <code>@RequestMapping(method = RequestMethod.DELETE)</code>.</p>
    </div>

    <div class="annotation-card">
        <strong>@PatchMapping</strong>
        <p>Maps HTTP PATCH requests. Used instead of <code>@RequestMapping(method = RequestMethod.PATCH)</code>.</p>
    </div>

    <div class="annotation-card">
        <strong>@RequestBody</strong>
        <p>It is used to bind HTTP request with an object in a method parameter. Internally it uses HTTP MessageConverters to convert the body of the request. When we annotate a method parameter with <code>@RequestBody</code>, the Spring framework binds the incoming HTTP request body to that parameter.</p>
    </div>

    <div class="annotation-card">
        <strong>@ResponseBody</strong>
        <p>It binds the method return value to the response body. It tells the Spring Boot Framework to serialize a return object into JSON and XML format.</p>
    </div>

    <div class="annotation-card">
        <strong>@PathVariable</strong>
        <p>It is used to extract the values from the URI. It is most suitable for RESTful web services, where the URL contains a path variable. We can define multiple <code>@PathVariable</code> in a method.</p>
    </div>

    <div class="annotation-card">
        <strong>@RequestParam</strong>
        <p>It is used to extract the query parameters from the URL. It is also known as a query parameter. It is most suitable for web applications. It can specify default values if the query parameter is not present in the URL.</p>
    </div>

    <div class="annotation-card">
        <strong>@RequestHeader</strong>
        <p>It is used to get the details about the HTTP request headers. We use this annotation as a method parameter. The optional elements of the annotation are <code>name</code>, <code>required</code>, <code>value</code>, <code>defaultValue</code>. For each detail in the header, we should specify separate annotations. We can use it multiple times in a method.</p>
    </div>

    <div class="annotation-card">
        <strong>@RestController</strong>
        <p>It can be considered as a combination of <code>@Controller</code> and <code>@ResponseBody</code> annotations. The <code>@RestController</code> annotation is itself annotated with the <code>@ResponseBody</code> annotation. It eliminates the need for annotating each method with <code>@ResponseBody</code>.</p>
    </div>

    <div class="annotation-card">
        <strong>@RequestAttribute</strong>
        <p>It binds a method parameter to a request attribute. It provides convenient access to the request attributes from a controller method. With the help of <code>@RequestAttribute</code> annotation, we can access objects that are populated on the server-side.</p>
    </div>

    <div class="note">
        💡 <strong>Note:</strong> We have used all the above annotations in our RESTful Web Services Tutorial with real-world examples.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Spring Boot annotations are powerful metadata that drive the Spring container's behavior. They reduce XML configuration and make development faster and more intuitive. From core annotations like <code>@Autowired</code> and <code>@Configuration</code> to web-specific ones like <code>@RestController</code> and <code>@RequestMapping</code>, mastering these annotations is essential for efficient Spring Boot development. Understanding their purpose and usage helps you build cleaner, more maintainable applications.
    </div>

    <footer>
        Spring Boot Annotations – Complete Reference | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },
         {
            id: "Spring-Boot-Dependency-Management",
            name: "Spring Boot Dependency Management",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Dependency Management</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>📦 Spring Boot Dependency Management</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        Spring Boot automatically manages project dependencies and configuration. Each Spring Boot release provides a predefined list of supported dependencies through the Bill of Materials (BOM), known as <strong>spring-boot-dependencies</strong>.<br><br>
        Because of dependency management, developers usually do not need to specify dependency versions manually in the <code>pom.xml</code> file. Spring Boot automatically manages compatible versions of libraries and upgrades them consistently whenever the Spring Boot version is updated.
    </div>

    <h2>✅ Advantages of Dependency Management</h2>
    <ul style="margin-left: 2rem; margin-bottom: 1rem;">
        <li>It provides the centralization of dependency information by specifying the Spring Boot version in one place. It helps when we switch from one version to another.</li>
        <li>It avoids mismatch of different versions of Spring Boot libraries.</li>
        <li>We only need to write a library name without specifying the version. It is helpful in multi-module projects.</li>
    </ul>
    <div class="note">
        💡 <strong>Note:</strong> Spring Boot also allows overriding of dependency versions, if required.
    </div>

    <h2>🧩 Maven Dependency Management System</h2>
    <p>The Maven project inherits the following features from <code>spring-boot-starter-parent</code>:</p>
    <ul style="margin-left: 2rem;">
        <li>The default Java compiler version</li>
        <li>UTF-8 source encoding</li>
        <li>It inherits a Dependency Section from the <code>spring-boot-dependency-pom</code>. It manages the version of common dependencies. It ignores the <code>&lt;version&gt;</code> tag for those dependencies.</li>
        <li>Dependencies inherited from the <code>spring-boot-dependencies</code> POM</li>
        <li>Sensible resource filtering</li>
        <li>Sensible plugin configuration</li>
    </ul>

    <h2>📚 Inheriting Starter Parent</h2>
    <p>The following <code>spring-boot-starter-parent</code> is inherited automatically when we configure the project.</p>
    <pre><code>&lt;parent&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
    &lt;version&gt;2.2.2.BUILD-SNAPSHOT&lt;/version&gt;      &lt;!-- lookup parent from repository --&gt;
    &lt;relativePath/&gt;
&lt;/parent&gt;</code></pre>
    <div class="note">
        💡 <strong>Note:</strong> In the above dependency, we have specified only the Spring Boot version. If we want to add additional starters, simply remove the <code>&lt;version&gt;</code> tag. Similarly, we can also override the individual dependency by overriding a property in our project.<br>
        For example, if we want to add another dependency with the same artifact that we have injected already, inject that dependency again inside the <code>&lt;properties&gt;</code> tag to override the previous one.
    </div>

    <h3>Changing the Java version</h3>
    <p>We can also change the Java version by using the <code>&lt;java.version&gt;</code> tag.</p>
    <pre><code>&lt;properties&gt;
    &lt;java.version&gt;1.8&lt;/java.version&gt;
&lt;/properties&gt;</code></pre>

    <h3>Adding Spring Boot Maven Plugin</h3>
    <p>We can also add the Maven plugin in our <code>pom.xml</code> file. It wraps the project into an executable jar file.</p>
    <pre><code>&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;</code></pre>

    <h2>🔄 Spring Boot without Parent POM</h2>
    <p>If we don't want to use <code>spring-boot-starter-parent</code> dependency, but still want to take advantage of the dependency management, we can use <code>&lt;scope&gt;</code> tag, as follows:</p>
    <div class="note">
        ⚠️ <strong>Note:</strong> It does not maintain the plugin management.
    </div>
    <pre><code>&lt;dependencyManagement&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;!-- Import dependency management from Spring Boot --&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;
            &lt;version&gt;2.2.2.RELEASE&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;</code></pre>
    <p>The above dependency does not allow overriding. To achieve overriding, we need to add an entry inside the <code>&lt;dependencyManagement&gt;</code> tag of our project <strong>before</strong> the <code>spring-boot-dependencies</code> entry.</p>

    <h3>Example: Overriding Spring Data Release Train</h3>
    <p>For example, to upgrade another <code>spring-data-releasetrain</code>, add the following dependency in the <code>pom.xml</code> file.</p>
    <pre><code>&lt;dependencyManagement&gt;
    &lt;dependencies&gt;
        &lt;!-- Override Spring Data release train --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.data&lt;/groupId&gt;
            &lt;artifactId&gt;spring-data-releasetrain&lt;/artifactId&gt;
            &lt;version&gt;Fowler-SR2&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;
            &lt;version&gt;2.2.2.RELEASE&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;</code></pre>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Spring Boot's dependency management simplifies project configuration by providing a curated set of compatible library versions. Using <code>spring-boot-starter-parent</code> or importing the BOM via <code>dependencyManagement</code> ensures that your project uses consistent, tested versions, reducing version conflicts and upgrade efforts. Overriding specific versions is also straightforward, giving you full control when needed.
    </div>

    <footer>
        Spring Boot Dependency Management – Complete Guide | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },
         {
            id: "Spring-Boot-Application-Properties",
            name: "Spring Boot Application Properties",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Application Properties</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .image-placeholder {
            background: #f1f5f9;
            border-radius: 16px;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border: 1px dashed #94a3b8;
            text-align: center;
            color: #475569;
            font-size: 0.9rem;
        }
        .image-placeholder svg {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>⚙️ Spring Boot Application Properties</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        Spring Boot Framework comes with a built‑in mechanism for application configuration using a file called <code>application.properties</code>. It is located inside the <code>src/main/resources</code> folder, as shown in the following figure.
    </div>

    <div class="image-placeholder">
        <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="80" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
            <text x="150" y="40" fill="#0f4c5f" font-size="12" text-anchor="middle" font-weight="bold">src/main/resources</text>
            <text x="150" y="65" fill="#334155" font-size="11" text-anchor="middle">📄 application.properties</text>
            <text x="150" y="82" fill="#64748b" font-size="10" text-anchor="middle">(or application.yml)</text>
        </svg>
        <p style="margin-top:0.3rem;">📁 <em>Location of application.properties file</em></p>
    </div>

    <p>Spring Boot provides various properties that can be configured in the <code>application.properties</code> file. The properties have default values. We can set a property(s) for the Spring Boot application. Spring Boot also allows us to define our own property if required.</p>

    <h2>📌 Uses of application.properties File</h2>
    <p>The <code>application.properties</code> file is mainly used to:</p>
    <ul style="margin-left: 2rem;">
        <li>Configure Spring Boot settings</li>
        <li>Define custom application properties</li>
        <li>Configure server port and application name</li>
        <li>Manage database and logging configurations</li>
        <li>Run applications in different environments</li>
    </ul>

    <h2>📝 Example of application.properties File</h2>
    <p>In the following example, the <code>application.properties</code> file is used to configure the application name and server port for the Spring Boot application.</p>
    <pre><code># configuring application name
spring.application.name = demoApplication
# configuring port
server.port = 8081</code></pre>
    <p>In the above example, we have configured the application name and port. The port <code>8081</code> denotes that the application runs on port 8081.</p>
    <div class="note">
        💡 <strong>Note:</strong> The lines started with <code>#</code> are comments.
    </div>

    <h2>📄 YAML Properties File</h2>
    <p>Spring Boot also supports YAML configuration files using the <code>application.yml</code> file. YAML provides a cleaner and more readable hierarchical structure for configuration.</p>
    <p>The YAML file works because the SnakeYAML library is available in the classpath.</p>
    <p>Instead of <code>application.properties</code>, we can use the <code>application.yml</code> file for application configuration.</p>

    <h3>Example of application.yml File</h3>
    <pre><code>spring:
  application:
    name: demoApplication
server:
  port: 8081</code></pre>
    <p>In the above example, the application name and server port are configured using YAML syntax.</p>

    <h2>📂 Spring Boot Property Categories</h2>
    <p>Spring Boot properties are divided into different categories based on their functionality.</p>
    <p>The main Spring Boot property categories are:</p>
    <ul style="margin-left: 2rem;">
        <li>Core Properties</li>
        <li>Cache Properties</li>
        <li>Mail Properties</li>
        <li>JSON Properties</li>
        <li>Data Properties</li>
        <li>Transaction Properties</li>
        <li>Data Migration Properties</li>
        <li>Integration Properties</li>
        <li>Web Properties</li>
        <li>Templating Properties</li>
        <li>Server Properties</li>
        <li>Security Properties</li>
        <li>RSocket Properties</li>
        <li>Actuator Properties</li>
        <li>DevTools Properties</li>
        <li>Testing Properties</li>
    </ul>

    <h2>📊 Common Spring Boot Application Properties</h2>
    <p>The following table lists some commonly used Spring Boot properties.</p>
    <div style="overflow-x:auto;">
        <table class="op-table">
            <thead><tr><th>Property</th><th>Default Values</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>debug</code></td><td><code>false</code></td><td>It enables debug logs.</td></tr>
                <tr><td><code>spring.application.name</code></td><td></td><td>It is used to set the application name.</td></tr>
                <tr><td><code>spring.application.admin.enabled</code></td><td><code>false</code></td><td>It is used to enable admin features of the application.</td></tr>
                <tr><td><code>spring.config.name</code></td><td><code>application</code></td><td>It is used to set config file name.</td></tr>
                <tr><td><code>spring.config.location</code></td><td></td><td>It is used to config the file name.</td></tr>
                <tr><td><code>server.port</code></td><td><code>8080</code></td><td>Configures the HTTP server port</td></tr>
                <tr><td><code>server.servlet.context-path</code></td><td></td><td>It configures the context path of the application.</td></tr>
                <tr><td><code>logging.file.path</code></td><td></td><td>It configures the location of the log file.</td></tr>
                <tr><td><code>spring.banner.charset</code></td><td><code>UTF-8</code></td><td>Banner file encoding.</td></tr>
                <tr><td><code>spring.banner.location</code></td><td><code>classpath:banner.txt</code></td><td>It is used to set banner file location.</td></tr>
                <tr><td><code>logging.file</code></td><td></td><td>It is used to set log file name. For example, <code>data.log</code>.</td></tr>
                <tr><td><code>spring.application.index</code></td><td></td><td>It is used to set application index.</td></tr>
                <tr><td><code>spring.mail.default-encoding</code></td><td><code>UTF-8</code></td><td>It is used to set default MimeMessage encoding.</td></tr>
                <tr><td><code>spring.mail.host</code></td><td></td><td>It is used to set SMTP server host. For example, <code>smtp.example.com</code>.</td></tr>
                <tr><td><code>spring.mail.password</code></td><td></td><td>It is used to set login password of the SMTP server.</td></tr>
                <tr><td><code>spring.mail.port</code></td><td></td><td>It is used to set SMTP server port.</td></tr>
                <tr><td><code>spring.mail.test-connection</code></td><td><code>false</code></td><td>It is used to test that the mail server is available on startup.</td></tr>
                <tr><td><code>spring.mail.username</code></td><td></td><td>It is used to set login user of the SMTP server.</td></tr>
                <tr><td><code>spring.main.sources</code></td><td></td><td>It is used to set sources for the application.</td></tr>
                <tr><td><code>server.address</code></td><td></td><td>It is used to set network address to which the server should bind to.</td></tr>
                <tr><td><code>server.connection-timeout</code></td><td></td><td>It is used to set time in milliseconds that connectors will wait for another HTTP request before closing the connection.</td></tr>
                <tr><td><code>server.context-path</code></td><td></td><td>It is used to set context path of the application.</td></tr>
                <tr><td><code>server.port</code></td><td><code>8080</code></td><td>It is used to set HTTP port.</td></tr>
                <tr><td><code>server.server-header</code></td><td></td><td>It is used for the Server response header (no header is sent if empty).</td></tr>
                <tr><td><code>server.servlet-path</code></td><td><code>/</code></td><td>It is used to set path of the main dispatcher servlet.</td></tr>
                <tr><td><code>server.ssl.enabled</code></td><td></td><td>It is used to enable SSL support.</td></tr>
                <tr><td><code>spring.http.multipart.enabled</code></td><td><code>true</code></td><td>It is used to enable support of multi-part uploads.</td></tr>
                <tr><td><code>spring.servlet.multipart.max-file-size</code></td><td><code>1MB</code></td><td>It is used to set max file size.</td></tr>
                <tr><td><code>spring.mvc.async.request-timeout</code></td><td></td><td>It is used to set time in milliseconds.</td></tr>
                <tr><td><code>spring.mvc.date-format</code></td><td></td><td>It is used to set date format. For example, <code>dd/MM/yyyy</code>.</td></tr>
                <tr><td><code>spring.mvc.locale</code></td><td></td><td>It is used to set locale for the application.</td></tr>
                <tr><td><code>spring.social.facebook.app-id</code></td><td></td><td>It is used to set application's Facebook App ID.</td></tr>
                <tr><td><code>spring.social.linkedin.app-id</code></td><td></td><td>It is used to set application's LinkedIn App ID.</td></tr>
                <tr><td><code>spring.social.twitter.app-id</code></td><td></td><td>It is used to set application's Twitter App ID.</td></tr>
                <tr><td><code>security.basic.authorize-mode</code></td><td><code>role</code></td><td>It is used to set security authorize mode to apply.</td></tr>
                <tr><td><code>security.basic.enabled</code></td><td><code>true</code></td><td>It is used to enable basic authentication.</td></tr>
                <tr><td><code>spring.test.database.replace</code></td><td><code>any</code></td><td>Type of existing DataSource to replace.</td></tr>
                <tr><td><code>spring.test.mockmvc.print</code></td><td><code>default</code></td><td>MVC Print option.</td></tr>
                <tr><td><code>spring.freemarker.content-type</code></td><td><code>text/html</code></td><td>Content Type value.</td></tr>
                <tr><td><code>spring.security.filter.dispatcher-type</code></td><td><code>async, error, request</code></td><td>Security filter chain dispatcher types.</td></tr>
                <tr><td><code>spring.security.filter.order</code></td><td><code>-100</code></td><td>Security filter chain order.</td></tr>
                <tr><td><code>spring.security.oauth2.client.registration.*</code></td><td></td><td>OAuth client registrations.</td></tr>
                <tr><td><code>spring.security.oauth2.client.provider.*</code></td><td></td><td>OAuth provider details.</td></tr>
            </tbody>
        </table>
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> The <code>application.properties</code> (or <code>application.yml</code>) file is the central place for configuring your Spring Boot application. It allows you to customize server settings, database connections, logging, security, and much more. Understanding these properties is key to effectively managing application behavior across different environments.
    </div>

    <footer>
        Spring Boot Application Properties – Complete Reference | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },
         {
            id: "Spring-Boot-Starters",
            name: "Spring Boot Starters",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Starters</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .badge {
            background: #2c7da0;
            color: white;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-block;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>🧩 Spring Boot Starters</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        Spring Boot provides a number of <strong>starters</strong> that allow us to add jars in the classpath. Spring Boot built‑in starters make development easier and rapid. Spring Boot Starters are the dependency descriptors.<br><br>
        In the Spring Boot Framework, all the starters follow a similar naming pattern: <code>spring-boot-starter-*</code>, where <code>*</code> denotes a particular type of application. For example, if we want to use Spring and JPA for database access, we need to include the <code>spring-boot-starter-data-jpa</code> dependency in our <code>pom.xml</code> file of the project.
    </div>

    <h2>📦 Third-Party Starters</h2>
    <p>We can also include third‑party starters in our project. But we do not use <code>spring-boot-starter</code> for including third‑party dependency. The <code>spring-boot-starter</code> is reserved for official Spring Boot artifacts. The third‑party starter starts with the name of the project. For example, if the third‑party project name is <strong>abc</strong>, then the dependency name will be <code>abc-spring-boot-starter</code>.</p>

    <h2>📋 Application Starters (org.springframework.boot group)</h2>
    <p>The Spring Boot Framework provides the following application starters under the <code>org.springframework.boot</code> group.</p>

    <div style="overflow-x:auto;">
        <table class="op-table">
            <thead><tr><th>Name</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>spring-boot-starter-thymeleaf</code></td><td>It is used to build MVC web applications using Thymeleaf views.</td></tr>
                <tr><td><code>spring-boot-starter-data-couchbase</code></td><td>It is used for the Couchbase document‑oriented database and Spring Data Couchbase.</td></tr>
                <tr><td><code>spring-boot-starter-artemis</code></td><td>It is used for JMS messaging using Apache Artemis.</td></tr>
                <tr><td><code>spring-boot-starter-web-services</code></td><td>It is used for Spring Web Services.</td></tr>
                <tr><td><code>spring-boot-starter-mail</code></td><td>It is used to support Java Mail and Spring Framework's email sending.</td></tr>
                <tr><td><code>spring-boot-starter-data-redis</code></td><td>It is used for Redis key‑value data store with Spring Data Redis and the Jedis client.</td></tr>
                <tr><td><code>spring-boot-starter-web</code></td><td>It is used for building the web application, including RESTful applications using Spring MVC. It uses Tomcat as the default embedded container.</td></tr>
                <tr><td><code>spring-boot-starter-data-gemfire</code></td><td>It is used for GemFire distributed data store and Spring Data GemFire.</td></tr>
                <tr><td><code>spring-boot-starter-activemq</code></td><td>It is used in JMS messaging using Apache ActiveMQ.</td></tr>
                <tr><td><code>spring-boot-starter-data-elasticsearch</code></td><td>It is used in Elasticsearch search and analytics engine and Spring Data Elasticsearch.</td></tr>
                <tr><td><code>spring-boot-starter-integration</code></td><td>It is used for Spring Integration.</td></tr>
                <tr><td><code>spring-boot-starter-test</code></td><td>It is used to test Spring Boot applications with libraries, including JUnit, Hamcrest, and Mockito.</td></tr>
                <tr><td><code>spring-boot-starter-jdbc</code></td><td>It is used for JDBC with the Tomcat JDBC connection pool.</td></tr>
                <tr><td><code>spring-boot-starter-mobile</code></td><td>It is used for building web applications using Spring Mobile.</td></tr>
                <tr><td><code>spring-boot-starter-validation</code></td><td>It is used for Java Bean Validation with Hibernate Validator.</td></tr>
                <tr><td><code>spring-boot-starter-hateoas</code></td><td>It is used to build a hypermedia‑based RESTful web application with Spring MVC and Spring HATEOAS.</td></tr>
                <tr><td><code>spring-boot-starter-jersey</code></td><td>It is used to build RESTful web applications using JAX‑RS and Jersey. An alternative to <code>spring-boot-starter-web</code>.</td></tr>
                <tr><td><code>spring-boot-starter-data-neo4j</code></td><td>It is used for the Neo4j graph database and Spring Data Neo4j.</td></tr>
                <tr><td><code>spring-boot-starter-data-ldap</code></td><td>It is used for Spring Data LDAP.</td></tr>
                <tr><td><code>spring-boot-starter-websocket</code></td><td>It is used for building WebSocket applications. It uses Spring Framework's WebSocket support.</td></tr>
                <tr><td><code>spring-boot-starter-aop</code></td><td>It is used for aspect‑oriented programming with Spring AOP and AspectJ.</td></tr>
                <tr><td><code>spring-boot-starter-amqp</code></td><td>It is used for Spring AMQP and Rabbit MQ.</td></tr>
                <tr><td><code>spring-boot-starter-data-cassandra</code></td><td>It is used for Cassandra distributed database and Spring Data Cassandra.</td></tr>
                <tr><td><code>spring-boot-starter-social-facebook</code></td><td>It is used for Spring Social Facebook.</td></tr>
                <tr><td><code>spring-boot-starter-jta-atomikos</code></td><td>It is used for JTA transactions using Atomikos.</td></tr>
                <tr><td><code>spring-boot-starter-security</code></td><td>It is used for Spring Security.</td></tr>
                <tr><td><code>spring-boot-starter-mustache</code></td><td>It is used for building MVC web applications using Mustache views.</td></tr>
                <tr><td><code>spring-boot-starter-data-jpa</code></td><td>It is used for Spring Data JPA with Hibernate.</td></tr>
                <tr><td><code>spring-boot-starter</code></td><td>It is used for core starter, including auto‑configuration support, logging, and YAML.</td></tr>
                <tr><td><code>spring-boot-starter-groovy-templates</code></td><td>It is used for building MVC web applications using Groovy Template views.</td></tr>
                <tr><td><code>spring-boot-starter-freemarker</code></td><td>It is used for building MVC web applications using FreeMarker views.</td></tr>
                <tr><td><code>spring-boot-starter-batch</code></td><td>It is used for Spring Batch.</td></tr>
                <tr><td><code>spring-boot-starter-social-linkedin</code></td><td>It is used for Spring Social LinkedIn.</td></tr>
                <tr><td><code>spring-boot-starter-cache</code></td><td>It is used for Spring Framework's caching support.</td></tr>
                <tr><td><code>spring-boot-starter-data-solr</code></td><td>It is used for the Apache Solr search platform with Spring Data Solr.</td></tr>
                <tr><td><code>spring-boot-starter-data-mongodb</code></td><td>It is used for MongoDB document‑oriented database and Spring Data MongoDB.</td></tr>
                <tr><td><code>spring-boot-starter-jooq</code></td><td>It is used for jOOQ to access SQL databases. An alternative to <code>spring-boot-starter-data-jpa</code> or <code>spring-boot-starter-jdbc</code>.</td></tr>
                <tr><td><code>spring-boot-starter-jta-narayana</code></td><td>It is used for Spring Boot Narayana JTA Starter.</td></tr>
                <tr><td><code>spring-boot-starter-cloud-connectors</code></td><td>It is used for Spring Cloud Connectors that simplifies connecting to services in cloud platforms like Cloud Foundry and Heroku.</td></tr>
                <tr><td><code>spring-boot-starter-jta-bitronix</code></td><td>It is used for JTA transactions using Bitronix.</td></tr>
                <tr><td><code>spring-boot-starter-social-twitter</code></td><td>It is used for Spring Social Twitter.</td></tr>
                <tr><td><code>spring-boot-starter-data-rest</code></td><td>It is used for exposing Spring Data repositories over REST using Spring Data REST.</td></tr>
            </tbody>
        </table>
    </div>

    <h2>🚀 Spring Boot Production Starters</h2>
    <div style="overflow-x:auto;">
        <table class="op-table">
            <thead><tr><th>Name</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>spring-boot-starter-actuator</code></td><td>It is used for Spring Boot's Actuator that provides production‑ready features to help you monitor and manage your application.</td></tr>
                <tr><td><code>spring-boot-starter-remote-shell</code></td><td>It is used for the CRaSH remote shell to monitor and manage your application over SSH. <span style="color:#b91c1c;">Deprecated since 1.5.</span></td></tr>
            </tbody>
        </table>
    </div>

    <h2>🛠️ Spring Boot Technical Starters</h2>
    <div style="overflow-x:auto;">
        <table class="op-table">
            <thead><tr><th>Name</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>spring-boot-starter-undertow</code></td><td>It is used for Undertow as the embedded servlet container. An alternative to <code>spring-boot-starter-tomcat</code>.</td></tr>
                <tr><td><code>spring-boot-starter-jetty</code></td><td>It is used for Jetty as the embedded servlet container. An alternative to <code>spring-boot-starter-tomcat</code>.</td></tr>
                <tr><td><code>spring-boot-starter-logging</code></td><td>It is used for logging using Logback. Default logging starter.</td></tr>
                <tr><td><code>spring-boot-starter-tomcat</code></td><td>It is used for Tomcat as the embedded servlet container. Default servlet container starter used by <code>spring-boot-starter-web</code>.</td></tr>
                <tr><td><code>spring-boot-starter-log4j2</code></td><td>It is used for Log4j2 for logging. An alternative to <code>spring-boot-starter-logging</code>.</td></tr>
            </tbody>
        </table>
    </div>

    <h2>📘 How to Use a Starter</h2>
    <p>To use a starter, simply add it as a dependency in your <code>pom.xml</code> (for Maven) or <code>build.gradle</code> (for Gradle). Spring Boot will automatically pull in the necessary dependencies and auto‑configure the application.</p>
    <pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>
    <p>In the above example, the <code>spring-boot-starter-web</code> starter includes:</p>
    <ul style="margin-left: 2rem;">
        <li>Spring MVC</li>
        <li>Tomcat embedded server</li>
        <li>Jackson for JSON serialization</li>
        <li>Validation support</li>
        <li>and many other transitive dependencies</li>
    </ul>
    <div class="example-output">
        ✅ <strong>Key Advantage:</strong> You don't have to worry about version compatibility; Spring Boot manages all versions for you.
    </div>

    <div class="note">
        💡 <strong>Tip:</strong> Always check the official Spring Boot documentation for the complete list of starters and their compatibility with your Spring Boot version.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> Spring Boot Starters are a powerful feature that greatly simplifies dependency management. They bundle commonly used libraries with compatible versions, so you can focus on writing business logic rather than managing dependencies. Whether you are building web applications, data‑centric services, or integrating with messaging systems, there is a starter to get you started quickly.
    </div>

    <footer>
        Spring Boot Starters – Complete Reference | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },
        {
            id: "Spring-Boot-Starter-Parent",
            name: "Spring Boot Starter Parent",
            description:  String.raw `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Starter Parent</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: #f4f7fc;
            color: #1e2a3a;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
            padding: 2rem 2rem 2.5rem 2rem;
        }
        h1 {
            font-size: 2.2rem;
            font-weight: 700;
            border-left: 6px solid #2c7da0;
            padding-left: 1.2rem;
            margin-bottom: 0.5rem;
            color: #0b3b4f;
        }
        .last-updated {
            color: #2c7da0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.75rem;
        }
        .intro-text {
            background: #eef2ff;
            padding: 1.2rem 1.8rem;
            border-radius: 20px;
            margin: 1.5rem 0;
            border-left: 5px solid #3b82f6;
        }
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #0f4c5f;
            border-bottom: 3px solid #cbd5e1;
            padding-bottom: 0.4rem;
        }
        h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.8rem 0;
            color: #1e4a5f;
            display: inline-block;
            background: #f1f5f9;
            padding: 0.2rem 1rem;
            border-radius: 40px;
        }
        .op-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.2rem 0;
            font-size: 0.95rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .op-table th {
            background-color: #2c3e50;
            color: white;
            padding: 12px 16px;
            text-align: left;
        }
        .op-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 16px;
            background-color: #ffffff;
        }
        .op-table tr:nth-child(even) td {
            background-color: #fafcff;
        }
        .op-table tr:hover td {
            background-color: #f1f5f9;
        }
        code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #d14;
        }
        pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 16px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            margin: 1rem 0;
        }
        .example-output {
            background: #fef9e3;
            border-left: 4px solid #f59e0b;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            margin: 1rem 0;
        }
        .note {
            background: #e6f7ec;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            border-left: 4px solid #2e7d32;
            margin: 1rem 0;
        }
        footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.5rem;
        }
        .badge {
            background: #2c7da0;
            color: white;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-block;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>📦 Spring Boot Starter Parent</h1>
    <div class="last-updated">📅 Last Updated : 5 Jun 2026</div>

    <div class="intro-text">
        The <code>spring-boot-starter-parent</code> is a project starter. It provides default configurations for our applications. It is used internally by all dependencies. All Spring Boot projects use <code>spring-boot-starter-parent</code> as a parent in <code>pom.xml</code> file.
    </div>

    <pre><code>&lt;parent&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
    &lt;version&gt;1.4.0.RELEASE&lt;/version&gt;
&lt;/parent&gt;</code></pre>

    <h2>📋 What Parent POM Provides</h2>
    <p>Parent Poms allow us to manage the following things for multiple child projects and modules:</p>
    <ul style="margin-left: 2rem;">
        <li><strong>Configuration:</strong> It allows us to maintain consistency of Java Version and other related properties.</li>
        <li><strong>Dependency Management:</strong> It controls the versions of dependencies to avoid conflict.</li>
        <li>Source encoding</li>
        <li>Default Java Version</li>
        <li>Resource filtering</li>
        <li>It also controls the default plugin configuration.</li>
    </ul>
    <p>The <code>spring-boot-starter-parent</code> inherits dependency management from <code>spring-boot-dependencies</code>. We only need to specify the Spring Boot version number. If there is a requirement of the additional starter, we can safely omit the version number.</p>

    <h2>🧩 Spring Boot Starter Parent Internal</h2>
    <p><code>spring-boot-starter-parent</code> defines <code>spring-boot-dependencies</code> as a parent pom. It inherits dependency management from <code>spring-boot-dependencies</code>.</p>
    <pre><code>&lt;parent&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;
    &lt;version&gt;1.6.0.RELEASE&lt;/version&gt;
    &lt;relativePath&gt;../../spring-boot-dependencies&lt;/relativePath&gt;
&lt;/parent&gt;</code></pre>

    <h2>⚙️ Default Parent Pom</h2>
    <pre><code>&lt;properties&gt;
    &lt;java.version&gt;1.8&lt;/java.version&gt;
    &lt;resource.delimiter&gt;@&lt;/resource.delimiter&gt;
    &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
    &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;
    &lt;maven.compiler.source&gt;\${java.version}&lt;/maven.compiler.source&gt;
    &lt;maven.compiler.target&gt;\${java.version}&lt;/maven.compiler.target&gt;
&lt;/properties&gt;</code></pre>
    <p>The properties section defines the application default values. The default Java version is 1.8. We can also override Java version by specifying a property <code>&lt;java.version&gt;1.8&lt;/java.version&gt;</code> in the project pom. The parent pom also contains a few other settings related to encoding and source. The Spring Boot framework uses these defaults in case we have not defined them in the <code>application.properties</code> file.</p>

    <h2>🔧 Plugin Management</h2>
    <p>The <code>spring-boot-starter-parent</code> specifies the default configuration for a host of plugins including <code>maven-failsafe-plugin</code>, <code>maven-jar-plugin</code>, and <code>maven-surefire-plugin</code>.</p>
    <pre><code>&lt;plugin&gt;
    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
    &lt;artifactId&gt;maven-failsafe-plugin&lt;/artifactId&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;goals&gt;
                &lt;goal&gt;integration-test&lt;/goal&gt;
                &lt;goal&gt;verify&lt;/goal&gt;
            &lt;/goals&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
&lt;/plugin&gt;

&lt;plugin&gt;
    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
    &lt;artifactId&gt;maven-jar-plugin&lt;/artifactId&gt;
    &lt;configuration&gt;
        &lt;archive&gt;
            &lt;manifest&gt;
                &lt;mainClass&gt;\${start-class}&lt;/mainClass&gt;
                &lt;addDefaultImplementationEntries&gt;true&lt;/addDefaultImplementationEntries&gt;
            &lt;/manifest&gt;
        &lt;/archive&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;

&lt;plugin&gt;
    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
    &lt;artifactId&gt;maven-surefire-plugin&lt;/artifactId&gt;
    &lt;configuration&gt;
        &lt;includes&gt;
            &lt;include&gt;**/*Tests.java&lt;/include&gt;
            &lt;include&gt;**/*Test.java&lt;/include&gt;
        &lt;/includes&gt;
        &lt;excludes&gt;
            &lt;exclude&gt;**/Abstract*.java&lt;/exclude&gt;
        &lt;/excludes&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;</code></pre>

    <h2>📚 Spring Boot Dependencies</h2>
    <p>The <code>spring-boot-starter-parent</code> dependency inherits from the <code>spring-boot-dependencies</code>, so it shares all these characteristics as well. Hence, Spring Boot manages the list of dependencies as part of the dependency management.</p>
    <p>The following is an excerpt of the properties defined in <code>spring-boot-dependencies</code> that control the versions of common libraries:</p>
    <pre><code>&lt;properties&gt;
    &lt;activemq.version&gt;5.13.4&lt;/activemq.version&gt;
    &lt;ehcache.version&gt;2.10.2.2.21&lt;/ehcache.version&gt;
    &lt;ehcache3.version&gt;3.1.1&lt;/ehcache3.version&gt;
    &lt;h2.version&gt;1.4.192&lt;/h2.version&gt;
    &lt;hamcrest.version&gt;1.3&lt;/hamcrest.version&gt;
    &lt;hazelcast.version&gt;3.6.4&lt;/hazelcast.version&gt;
    &lt;hibernate.version&gt;5.0.9.Final&lt;/hibernate.version&gt;
    &lt;hibernate-validator.version&gt;5.2.4.Final&lt;/hibernate-validator.version&gt;
    &lt;hikaricp.version&gt;2.4.7&lt;/hikaricp.version&gt;
    &lt;jackson.version&gt;2.8.1&lt;/jackson.version&gt;
    &lt;jersey.version&gt;2.23.1&lt;/jersey.version&gt;
    &lt;jest.version&gt;2.0.3&lt;/jest.version&gt;
    &lt;jetty.version&gt;9.3.11.v20160721&lt;/jetty.version&gt;
    &lt;spring-security.version&gt;4.1.1.RELEASE&lt;/spring-security.version&gt;
    &lt;tomcat.version&gt;8.5.4&lt;/tomcat.version&gt;
    &lt;undertow.version&gt;1.3.23.Final&lt;/undertow.version&gt;
    &lt;velocity.version&gt;1.7&lt;/velocity.version&gt;
    &lt;velocity-tools.version&gt;2.0&lt;/velocity-tools.version&gt;
    ...
&lt;/properties&gt;
&lt;prerequisites&gt;
    &lt;maven&gt;3.2.1&lt;/maven&gt;
&lt;/prerequisites&gt;</code></pre>

    <h2>🔄 Spring Boot Starter without Parent</h2>
    <p>In some cases, we need not inherit <code>spring-boot-starter-parent</code> in the <code>pom.xml</code> file. To handle such use cases, Spring Boot provides the flexibility to still use the dependency management without inheriting the starter parent.</p>
    <pre><code>&lt;dependencyManagement&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;!-- Import dependency management from Spring Boot --&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;
            &lt;version&gt;2.1.1.RELEASE&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;</code></pre>
    <p>In the above code, we can see that we have used <code>&lt;scope&gt;import&lt;/scope&gt;</code> for this. It is useful when we want to use a different version for a certain dependency.</p>

    <div class="note">
        💡 <strong>Tip:</strong> By using the import scope, you can still enjoy the version management of Spring Boot without inheriting the parent, which can be helpful when you already have a parent POM for your project.
    </div>

    <div class="intro-text" style="background:#f1f5f9; border-left-color:#64748b;">
        🎯 <strong>Conclusion:</strong> <code>spring-boot-starter-parent</code> is a convenient way to manage your Spring Boot project's configuration, dependencies, and plugins. It centralises version management, reduces boilerplate, and ensures consistent behavior across modules. When you cannot use it directly, importing <code>spring-boot-dependencies</code> provides a similar level of control.
    </div>

    <footer>
        Spring Boot Starter Parent – Complete Guide | Last Updated: 5 Jun 2026
    </footer>
</div>
</body>
</html>

                      `
        },
        {
            id: "Spring-Boot-Starter-Web",
            name: "Spring Boot Starter Web",
            description:  String.raw `

                      `
        },
        {
            id: "Spring-Boot-Starter-Data-JPA",
            name: "Spring Boot Starter Data JPA",
            description:  String.raw `

                      `
        },
        {
            id: "Spring-Boot-Actuator",
            name: "Spring Boot Actuator",
            description:  String.raw `

                      `
        },
        {
            id: "Spring-Boot-Starter-Test",
            name: "Spring Boot Starter Test",
            description:  String.raw `

                      `
        },
        {
            id: "Spring-Boot-DevTools",
            name: "Spring Boot DevTools",
            description:  String.raw `

                      `
        },
        {
            id: "Spring-Boot-Multi-Module-Project",
            name: "Spring Boot Multi-Module Project",
            description:  String.raw `

                      `
        },
        {
            id: "Spring-Boot-Packaging",
            name: "Spring Boot Packaging",
            description:  String.raw `

                      `
        },
        {
            id: "Spring-Boot-Auto-configuration",
            name: "Spring Boot Auto-configuration",
            description:  String.raw `

                      `
        },

                  ]
    },


    {
      id: "Tool-Suite",
      name: "Tool Suite",
      isParent: true,
      subtopics: [

        {
            id: "Spring-Boot-Hello-World-Example",
            name: "Spring Boot Hello World Example",
            description:  String.raw `

                      `
        },
         {
            id: "Project-Deployment-Using-Tomcat",
            name: "Project Deployment Using Tomcat",
            description:  String.raw `

                      `
        },

        ]
    },


     {
      id: "Spring-Boot-AOP",
      name: "Spring Boot AOP",
      isParent: true,
      subtopics: [

        {
            id: "Spring-Boot-AOP",
            name: "Spring Boot AOP",
            description:  String.raw `

            `
        },
        {
            id: "Project-Deployment-Using-Tomcat",
            name: "Project Deployment Using Tomcat",
            description:  String.raw `

            `
        },
        {
            id: "Project-Deployment-Using-Tomcat",
            name: "Project Deployment Using Tomcat",
            description:  String.raw `

            `
        },
        {
            id: "Project-Deployment-Using-Tomcat",
            name: "Project Deployment Using Tomcat",
            description:  String.raw `

            `
        },
        {
            id: "Project-Deployment-Using-Tomcat",
            name: "Project Deployment Using Tomcat",
            description:  String.raw `

            `
        },
        {
            id: "Project-Deployment-Using-Tomcat",
            name: "Project Deployment Using Tomcat",
            description:  String.raw `

            `
        },

        ]
    },





      ]
    }
