# Day 01

- Learned the differences between Angular and React
- Setup Angular CLI
- Learned about Angular and created a basic Hello World Project to get started with Angular
- Started learning typescript

# Day 02

## Module 01 - Getting Started with Angular :-

- Introduction to what is Angular and why should we use it
- Evolution of Angular
- Setting up Angular Project and running it
- Learned about the folder structure of Angular and the starting generated code given by default

## Module 18 - The Basics :-

- Learned about angular App is loading and starting phase
- Learned about components
- Learned to create a component both manually and through Angular CLI
- Learned to use our own custom Components
- Learned about Data binding and property binding
- Created some basic components and played around to get used to Angular Components

# Day 03

## Module 18 - The Basics :-

- Practised String interpolation
- Practised Property Binding
- Practised Event Binding and passing events
- Practised 2 Way Binding and what is the difference between it and 1 way binding
- Learned about directives
- Created a Login Form Component.
- Created a Counter Component
- Practiced Directives -> ngFor , ngClass , ngStyle , ngIf

## Module 19 - Course Project - The Basics :-

- Learned how to approach breaking UI into various components
- Learned basic structuring for angular projects file system
- Learned how to manage various components and nest them according to use
- Rest Basic HTML , CSS , TS usage in a program and some minor bootstrap tutorials
- Learned how to make models and researched about services and what are those.

## Module 20 - Debugging :-

- Learned how to find code error lines
- Learned how to add breakpoints and debug angular project

## Module 21 - Components & Databinding - Deep Dive :-

- Property and event binding overview
- Learned how to create our own Custom events to send events from one component to another
- Learned how to create our own properties to send data from one component to another
- Also learned about aliasing custom properties and events
- Practised data and event passing between various parent, child and sibling components
- Learned about View Encapsulation
- Learned about usage of Template Reference and @ViewChild() Decoration
- Learned about the component lifecycle and check its Hooks given
- Learned about ng-content and @ContentChild(). Additional - ng-container, ng-template

# Day 04

## Module 22 - Course Project - Components & Databinding :-

- How to use ng Directives in a project
- How to use our custom events and custom properties in project
- How to create dynamic and reusable components
- What's the use of ng tags like ng-content and ng-template
- How to handle some basic forms in the Angular Project

## Module 23 - Directives Deep Dive :-

- Recap on old directives Used in the course
- How to manually create our custom directives
- How to create custom directives through the angular cli
- How to access the properties from directives and changing the CSS
- Efficient way to handle changing the DOM via Rendered
- How the HostBinding and HostListener works
- How to pass data to the directives from the parent
- Understood how to create a structural directive
- Understood about the ngSwitch and ngSwitchCase directives

## Module 24 - Course Project :-

- Learned how to create a directive for our projects
- Created a drop down directive

## Module 25 - Using Services & Dependency Injection :-

- Learned about services (What are they and why should we use those)
- Learned about dependency injection and Hierarchical Injcetor
- Learned how to create a Service and then inject it to the components
- How can we use service for event and data propagation
- Learned how to inject a Service on another service
- Practices creating services and created a basic Todo Application using that

## Module 26 - Course Project - Services & Dependency Injection :-

- Basic Folder structure for creating and keeping Services
- Learned to break the whole business logic into services layers and separatedly create them
- Learned the basic thought process of creating a service layer while creating a project
- Created a basic project to implement services and its concepts
- Created a basic TODO Application using Services

## Module 27 - Changing Pages with Routing :-

- Introduction to Routing and how to enable routing
- Why is routing required rather than having the traditional a href links
- How the Router Link Navigation Work
- How to navigate programatically between two pages
- Learned about Relative and absolute paths
- Learned how to pass params , query and fragments between components
- Learned about nested routing and how to implement wild card for Error page
- Learned about guards (canActivate , canActivateChild , canDeactivate)
- Learned how to outsource guards logic to the components using interfaces
- Learned static and dynamic data passing between components
- Learned how to load data using a resolver
- Significance of Hash Route and why should we use it

## Module 28 - Course Project - Routing :-

- Learned how to build routing for a project
- Created a basic project for more understanding over routing
- Implemented various concepts of routing in the project

# Day 05

## Module 29 - Understanding Observables :-

- What are observables and how to use them
- How to create our own custom observables
- Why should we unsubscribe our custom made observables
- Different types of event that can be passed from a observable
- Operators in observables
- What are subjects and when to use subjects
- Subjects vs Event Emitters

## Module 30 - Course Project - Observables :-

- How to implement observables and subjects in a project
- Question -> What is the use case of operators and why not use basic filter methods / Refer to the subject-testing component

## Project Work :-

- Created a simple project using simple routing and services

## React Router vs Angular Router

- Router Difference Read : https://medium.com/@therealchrisrutherford/spa-routing-comparing-react-and-angular-c709ae69cc80
- React Router is 3rd party and support for angular router is native and it comes with guards and other features which needs to be implemented by the developer in react

# Day 06

## Module 31 - Handling Forms in Angular Apps

- Why should we not use the traditional form submittion method
- The two ways to handle form in Angular (Template Driven & Reactive)
- How to handle form in template driven approach
- How can we validate the form during template driven approach && Reactive forms approach
- How can we show error messages when the form is invalid or keep the submit button disabled
- How to play around with local reference and ViewChild() and when to use one way binding and two way binding
- How to use validators and what are the various types of validators that can be used for reactive form approach
- How to create our own validation logics and run them along with angular reactive form approach.

## Module 32 - Course Project - Forms

- Implemented the reactive forms in a project and learned how it works
- Implemented various concepts of forms like validation, custom validation , form groups etc.

## Random Project Work :-

- Created a project to demonstrate the use of forms.

# Day 07

## Module 33 - Using Pipes to Transform Output

- Learned what are pipes and why should we use them.
- Learned to create our own pipes and use them
- Learned about the various different types of pipes present

# Day 08

## Module 34 - Making HTTP Requests

- Learned about HTTP Requests
- Learned how to run basic HTTP Requests like get , post , put , delete , etc.
- Learned how to add custom headers to the requests
- Learned about interceptors and how to implement our own interceptors
- Learned how the data is passed to the component from HTTP Requests

## Module 35 - Course Project - HTTP

- Created a Firebase project in the firebase console and used its database services
- Implemented HTTP Requests in a real project and learned how we can fetch and post data
- Implemented our own Interceptors and custom headers
- Trying to modularize the whole process with a generic wrapper function for data and error handling.

## Module 36 - Authentication and Route

- Learned how routes works
- What are the different form of routes (public , private routes)
- How to handle error
- How to manage roles during routing.
