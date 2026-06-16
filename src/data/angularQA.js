// src/data/angularQA.js
export const angularQA = [
  {
    question: "What is Angular? / What do you know about Angular?",
    answer: "Angular is one of the most popular JavaScript frameworks developed and maintained by Google. It is an open-source front-end web framework based on TypeScript. It is most suited for developing enterprise web applications because its code is reusable and maintainable."
  },
  {
    question: "What are some powerful features integrated into Angular?",
    answer: "Angular integrates powerful features like declarative templates, end to end tooling, dependency injection and various other best practices that smoothen the development path."
  },
  {
    question: "What is the main purpose of Angular?",
    answer: "The main purpose of using Angular is to create fast, dynamic and scalable web applications. It provides a platform for easy development of web-based applications and empowers front end developers in curating cross-platform applications. YouTubeTV is a popular example."
  },
  {
    question: "What is the difference between AngularJS and Angular?",
    answer: "AngularJS (v1) uses JavaScript, MVC pattern, no mobile support, slower. Angular (v2+) uses TypeScript, components/directives, mobile support, faster, with active support and updates."
  },
  {
    question: "What are the biggest advantages of using Angular?",
    answer: "Two-way data-binding, MVC pattern architecture, static templates, custom directives, RESTful services support, validations, client-server communication, dependency injection, event handlers, animation."
  },
  {
    question: "What do you understand by Angular expressions? How are they different from JavaScript expressions?",
    answer: "Angular expressions are code snippets written in double braces `{{ expression }}` used to bind data to HTML. Differences: Angular expressions can handle null/undefined gracefully, are evaluated against local scope (not global window), and support pipes for formatting. JavaScript expressions cannot handle undefined display, are evaluated globally, and lack pipes."
  },
  {
    question: "What are templates in Angular?",
    answer: "Templates contain Angular-specific elements and attributes, written with HTML, combined with model and controller data to render dynamic views."
  },
  {
    question: "What is the difference between an Annotation and a Decorator in Angular?",
    answer: "Annotations are metadata set on a class using Reflect Metadata library (AngularJS). Decorators are design patterns that modify a class without altering source code (Angular 2+)."
  },
  {
    question: "Why was Angular introduced as a client-side framework?",
    answer: "To overcome complexity and maintainability issues of VanillaJS/jQuery for dynamic websites. Angular provides separation of concerns, components, and data handling across views, enabling faster development of SPAs."
  },
  {
    question: "How does an Angular application work?",
    answer: "angular.json defines entry point (main.ts) which bootstraps AppModule. AppModule bootstraps AppComponent. AppComponent's selector 'app-root' is placed in index.html. The component's template is rendered inside that tag."
  },
  {
    question: "Why is Angular preferred over other frameworks?",
    answer: "Extraordinary built-in features (routing, RxJS, DI, HTTP services), declarative UI (HTML), long-term Google support."
  },
  {
    question: "What are the different Lifecycle hooks of Angular? Explain them in short.",
    answer: "ngOnChanges (input changes), ngOnInit (initialization), ngDoCheck (custom change detection), ngAfterContentInit (after content projection), ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy (cleanup)."
  },
  {
    question: "What is AOT in Angular?",
    answer: "Ahead-Of-Time compiler converts Angular HTML and TypeScript into efficient JavaScript during build phase, before browser downloads, providing faster rendering."
  },
  {
    question: "What is the reason for using the AOT compiler in Angular?",
    answer: "Browsers cannot directly understand Angular components and templates, so compilation is required before running. AOT compiles at build time."
  },
  {
    question: "What are the biggest advantages of AOT in Angular?",
    answer: "Faster rendering, smaller download size (no compiler needed), fewer async requests (templates inlined), earlier template error detection, better security (no risky client-side evaluation)."
  },
  {
    question: "What is JIT in Angular?",
    answer: "Just-in-Time compiler provides dynamic translation or runtime compilation, compiling the app in the browser at runtime."
  },
  {
    question: "What is the main difference between JIT and AOT in Angular?",
    answer: "JIT compiles in browser at runtime (development mode, ng serve). AOT compiles at build time on server (production mode, ng build --aot). AOT reduces bundle size and improves performance."
  },
  {
    question: "What is the concept of scope hierarchy in Angular?",
    answer: "$scope objects form a hierarchy with a root scope and child scopes for each view. Variables set by a view controller are hidden from other controllers."
  },
  {
    question: "What are the main building blocks of an Angular application?",
    answer: "Modules, Components, Templates, Directives, Services, Dependency Injection, Routing, Pipes."
  },
  {
    question: "What is the difference between Observables and Promises in Angular?",
    answer: "Promises emit a single value, are eager, not cancellable. Observables emit multiple values over time, are lazy (require subscription), cancellable (unsubscribe), and support operators (map, filter, retry)."
  },
  {
    question: "What are directives in Angular?",
    answer: "A directive is a class declared with @Directive decorator. It adds behavior to DOM elements. Types: component directives (with template), structural directives (*ngIf), attribute directives (ngStyle)."
  },
  {
    question: "What were the main reasons behind introducing client-side frameworks like Angular?",
    answer: "VanillaJS/jQuery led to complex, unmaintainable code as apps grew. Client-side frameworks provide separation of concerns, components, data handling across views, enabling faster SPA development."
  },
  {
    question: "What is Angular CLI?",
    answer: "Angular Command Line Interface for scaffolding and building Angular apps using Node.js style modules. Commands: ng new, ng generate, ng serve."
  },
  {
    question: "What is lazy loading in Angular?",
    answer: "Lazy loading loads feature modules asynchronously when required using loadChildren property, reducing initial bundle size and improving load time."
  },
  {
    question: "What is Angular Router?",
    answer: "Angular Router is a mechanism that enables navigation from one view to another as users perform tasks, following browser navigation model."
  },
  {
    question: "What do you understand by the router imports?",
    answer: "Router is not part of Angular Core; it is in @angular/router library. We import RouterModule and Routes from it in the app module."
  },
  {
    question: "What do you understand by RouterOutlet and RouterLink?",
    answer: "RouterOutlet is a directive that acts as a placeholder where the Router displays components for that outlet. RouterLink is a directive on anchor tags that gives router control over navigation."
  },
  {
    question: "What are the different router events used in Angular Router?",
    answer: "NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, RoutesRecognized, GuardsCheckStart, ChildActivationStart, ActivationStart, GuardsCheckEnd, ResolveStart, ResolveEnd, ActivationEnd, ChildActivationEnd, NavigationEnd, NavigationCancel, NavigationError."
  },
  {
    question: "What do you understand by the RouterLinkActive?",
    answer: "RouterLinkActive is a directive that toggles CSS classes for active RouterLink bindings based on current RouterState. Adds class when link is active, removes when inactive."
  },
  {
    question: "What do you understand by the RouterState?",
    answer: "RouterState is a tree of activated routes, each node containing consumed URL segments, extracted parameters, and resolved data. Accessible via router.routerState."
  },
  {
    question: "What is HttpClient, and what are the advantages of it?",
    answer: "HttpClient is Angular's simplified HTTP client API based on XMLHttpRequest, available in @angular/common/http. Advantages: testability, typed request/response, interceptors, Observable APIs, streamlined error handling."
  },
  {
    question: "Is it possible to make an Angular application to render on the server-side?",
    answer: "Yes, using Angular Universal for server-side rendering. Benefits: better user experience (instant view), improved SEO, faster initial page load."
  },
  {
    question: "What is the best way to perform Error handling in Angular?",
    answer: "Handle errors in the subscribe() method with a second callback for error, or use catchError operator in pipe for centralized handling, providing user-friendly error messages."
  },
  {
    question: "What do you understand by Angular bootstrapping?",
    answer: "Bootstrapping initializes the Angular application. Two types: Automatic (using ng-app directive) and Manual (using platformBrowserDynamic().bootstrapModule)."
  },
  {
    question: "What is the digest cycle process in Angular?",
    answer: "Digest cycle monitors the watchlist for changes in watch variable values, comparing previous and current versions of scope model values in each cycle (relevant to AngularJS)."
  },
  {
    question: "What are the key differences between a Component and a Directive in Angular?",
    answer: "Components have a template (UI widgets), use @Component, one per DOM element, define pipes. Directives add behavior to existing DOM elements, use @Directive, multiple per DOM element, no template, cannot define pipes."
  },
  {
    question: "What do you understand by Angular MVVM architecture?",
    answer: "Model-View-ViewModel pattern: Model (data structure), View (HTML template), ViewModel (logic handling, connects Model and View via two-way data binding)."
  },
  {
    question: "What is the purpose of AsyncPipe in Angular?",
    answer: "AsyncPipe subscribes to an Observable or Promise and returns the latest emitted value. It automatically marks component for change detection and handles unsubscription."
  },
  {
    question: "What do you understand by services in Angular?",
    answer: "Services are singleton objects instantiated once per application. They contain methods to maintain and share business logic, data, and functions across components."
  },
  {
    question: "What is the key difference between a constructor and ngOnInit?",
    answer: "Constructor is TypeScript default method called first for initialization. ngOnInit is Angular-specific lifecycle hook called after constructor and first ngOnChanges, used for Angular bindings."
  },
  {
    question: "What do you understand by observable and observer in Angular?",
    answer: "Observable is a lazy async object (RxJS) that emits data over time. Observer is an interface with next, error, complete methods that consumes observable notifications via subscribe."
  },
  {
    question: "How do you categorize data binding types in Angular?",
    answer: "Source-to-view (one-way: interpolation, property, attribute, class, style). View-to-source (one-way: event binding). View-to-source-to-view (two-way: banana-in-a-box syntax)."
  },
  {
    question: "What is multicasting in Angular?",
    answer: "Multicasting broadcasts to multiple subscribers in a single execution using Subject. Example: source.multicast(subject) creates a multicasted observable that shares execution."
  },
  {
    question: "What do you understand by Angular Material?",
    answer: "Angular Material is a UI component library that provides consistent, attractive, functional components following modern web design principles (Material Design)."
  },
  {
    question: "What is lazy loading in Angular? Why is it used?",
    answer: "Lazy loading loads NgModules only when required rather than eagerly at startup. Used for large apps to keep initial bundle size smaller, decreasing load times."
  }
];