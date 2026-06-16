// src/data/djangoQA.js
export const djangoQA = [
  {
    question: "Explain Django.",
    answer: "Django is a free and open source web application framework, written in Python. It is a server-side web framework that provides rapid development of secure and maintainable websites."
  },
  {
    question: "What does Django mean?",
    answer: "Django is named after Django Reinhardt, a gypsy jazz guitarist from the 1930s to early 1950s who is known as one of the best guitarists of all time."
  },
  {
    question: "Which architectural pattern does Django follow?",
    answer: "Django follows Model-View-Template (MVT) architectural pattern. User requests a resource, Django acts as controller, checks URL, calls view that interacts with model and template, then renders template as response."
  },
  {
    question: "Explain Django architecture.",
    answer: "Django follows MVT pattern: Model (data access layer, defines data structure), View (business logic, accesses model and defers to template), Template (presentation layer, defines how content is displayed)."
  },
  {
    question: "Is Django a high-level web framework or low-level framework?",
    answer: "Django is a high-level Python web framework designed for rapid development and clean, realistic design."
  },
  {
    question: "How would you pronounce Django?",
    answer: "Django is pronounced JANG-oh (D is silent)."
  },
  {
    question: "How does Django work?",
    answer: "When a visitor lands on a Django page, Django checks URL patterns, retrieves the view, processes the request (querying database if needed), passes information to a template, which renders the data and displays the page."
  },
  {
    question: "Which foundation manages the Django web framework?",
    answer: "Django is managed and maintained by the Django Software Foundation (DSF), a non-profit organization that promotes, supports, and advances Django."
  },
  {
    question: "Is Django stable?",
    answer: "Yes, Django is quite stable. Many companies like Disqus, Instagram, Pinterest, and Mozilla have been using Django for many years."
  },
  {
    question: "What are the features available in Django web framework?",
    answer: "Admin Interface (CRUD), Templating, Form handling, Internationalization, Session management, user management & role-based permissions, Object-relational mapping (ORM), Testing Framework, Fantastic Documentation."
  },
  {
    question: "Explain the advantages of Django.",
    answer: "Django is easy to learn (Python-based), clear and readable, versatile, fast to write, has no design loopholes, secure, scalable, and versatile."
  },
  {
    question: "What are the disadvantages of Django?",
    answer: "Django's modules are bulky, completely based on Django ORM, components are deployed together, and you must know the full system to work with it."
  },
  {
    question: "What are the inheritance styles in Django?",
    answer: "1) Abstract base classes: parent holds information for child models. 2) Multi-table Inheritance: each model has its own database table. 3) Proxy models: modify Python-level behavior without changing model fields."
  },
  {
    question: "Is Django a content management system (CMS)?",
    answer: "No, Django is not a CMS. It is a Web framework and programming tool that enables you to build websites."
  },
  {
    question: "How can you set up static files in Django?",
    answer: "1) Set STATIC_ROOT in settings.py, 2) run manage.py collectstatic, 3) set up a Static Files entry on the PythonAnywhere web tab (or similar for your hosting)."
  },
  {
    question: "What is some typical usage of middlewares in Django?",
    answer: "Session management, authentication, cross-site request forgery protection, content gzipping."
  },
  {
    question: "What does Django field class types do?",
    answer: "They specify: database column type, default HTML widget for form fields, minimal validation requirements for admin, and behavior for auto-generated forms."
  },
  {
    question: "What is the usage of Django-admin.py and manage.py?",
    answer: "Django-admin.py is command line utility for administrative tasks. manage.py is created in each Django project; it wraps django-admin.py, puts project on sys.path, sets DJANGO_SETTINGS_MODULE to point to settings.py."
  },
  {
    question: "What are signals in Django?",
    answer: "Signals are pieces of code containing information about what is happening. A dispatcher sends signals and listens for those signals."
  },
  {
    question: "What are the two important parameters in signals?",
    answer: "Receiver (callback function connected to signal) and Sender (specific sender from which signal is received)."
  },
  {
    question: "How to handle URLs in Django?",
    answer: "Django uses django.urls module. In urls.py, the urlpatterns list maps routes to view functions using path() or re_path()."
  },
  {
    question: "What is Django Exception?",
    answer: "An exception is an abnormal event leading to program failure. Django uses its exception classes (django.core.exceptions) and supports all core Python exceptions."
  },
  {
    question: "What are the different types of Django Exception Classes?",
    answer: "AppRegistryNotReady, ObjectDoesNotExist, EmptyResultSet, FieldDoesNotExist, MultipleObjectsReturned, SuspiciousOperation, PermissionDenied, ViewDoesNotExist, MiddlewareNotUsed, ImproperlyConfigured, FieldError, ValidationError."
  },
  {
    question: "What is Django Session?",
    answer: "A session is a mechanism to store information on the server side during interaction with a web application. By default, sessions are stored in the database, but file-based and cache-based sessions are also supported."
  },
  {
    question: "What is the role of Cookie in Django?",
    answer: "A cookie is stored in the client browser to persist user data for a specified time. Django provides set_cookie() to set a cookie and request.COOKIES to retrieve it."
  }
];