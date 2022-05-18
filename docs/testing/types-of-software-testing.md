---
contributors: Christian Janker
---

Have in mind. This is a first draft. That covers mainly thoughts that popped into my mind.
Transcript from my talk about testing.

If you are not yet a convert to testing, you may have heard your colleagues banging the drum about the value of testing, tried it and found it slow,
complex and distracting or even unnecessary.

And yet, there is this little nagging voice that asks: Are you missing something? Should you push yourself again and master this domain?

YES! Try it! We will guide you.

If you have alreday some experience with testing tools like Jasmine or Jest, then you are most likely familiar with the key words:

- Describe
- It
- Expect

If you make that into a three letter acronym you get: DIE

This is how many people feel when it comes to testing. It feels something like a little death!

Let's try to change that.

Why do we write tests at all?
Ever had this thought? Me too :)
But more often that is just the conclusion we come up when we don't know how test a certain piece of code.
We then often say: This can't be tested followed by
There is nothing to test here.

This is wrong, and let's be honest. Every responsible and professional developer knows that automated testing
is part of the job. That's how we have learned it. Right?
Closing a given task without having written a single test for it? We don't do this. Right?
We want to professionals!
We want to be good developers!
We want to be heros.
[hero](https://images.unsplash.com/photo-1531907700752-62799b2a3e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)

# Motivation to testing

Before we deep dive into the technical bits an pieces of testing your Angular application, we have to go through some
basic points.

- If you ever have to convince somebody to write tests? Colleagues, yourself. Please read on.
- If you ever have to convince your managers that testing is important? Please read on.
- If you think testing is a waste of time? Please read on.
- If you hate your tests? Please read on.
- If you don't know what to test? Please read on.
- If you do testing, but it doesn't feel quite right the way you do it. Please read on.

It seems testing is not very popular amongst us (frontend) developers. At least I made this experience,
basically with every project I was involed in. But why is this the case?

Why is testing such a burden for us? Why do we test at all?

Every professional developer knows, at least somewhere back in his/her mind, that testing and writing test is a essential part of their daily development life.
That's what we have learned.

Good developers write tests!

NOPE

Good developers write good tests

What are good tests?

Testing behaviour not implementation details!

Clean, readable test!

Good Case
Bad Case
Edge Case

Avoid False Positives
Avoid False Negatives

## Confidence

The most important point. Not only during development we assure that we develop our application correctly

## Speed

# Types of software testing

Some types of testing are not relevant to Angular projects, but maybe there are
parallels to be drawn.

## Unit Testing

## Integration Testing

## End to End Testing

## Suggested resources

- [Angular.io: Testing guide](https://angular.io/guide/testing)
- [Types Of Software Testing: Different Testing Types With Details](https://www.softwaretestinghelp.com/types-of-software-testing/)
- [Software Testing Help: Types of testing category](https://www.softwaretestinghelp.com/category/types-of-testing/)

## Suggested topics

- Mutation testing
  - [Stryker](../libraries-and-frameworks/stryker)
- End-to-end testing
- Unit testing
- Integration testing
- Contract testing
  - [JSCheck](../libraries-and-frameworks/jscheck)

## Notes

- Function testing types
  - Unit testing
  - Integration testing
  - System testing
  - Sanity testing
  - Smoke testing
  - Interface testing
  - Regression testing
  - Beta/Acceptance testing
- Non-function testing types

  - Performance Testing
  - Load testing
  - Stress testing
  - Volume testing
  - Security testing
  - Compatibility testing
  - Install/uninstall testing
  - Recovery testing
  - Reliability testing
  - Usability testing
  - Compliance testing
  - Localization testing

- Ad-hoc testing
- Manual testing vs. automated testing
- Accessibility testing
- Back-end testing
- Browser compatibility testing
- Backwards compatibility testing
- Boundary value testing
- Branch testing
- (Software) component testing
- Equivalence Partitioning
- Example testing
- Exploratory testing
- GUI testing
- Gorilla testing
- Happy path testing
- Incremental integration testing
- Monkey testing
- Negative testing
- Risk-based Testing (RBT)
- Static testing
- Vulnerability testing

### Black box testing

Internal system design is not considered in this type of testing. Tests are
based on requirements and functionality.

### White box testing

This testing is based on knowledge of the internal logic of an application’s
code. Also known as Glass box Testing. Internal software and code working should
be known for this type of testing. Tests are based on coverage of code
statements, branches, paths, conditions.

### Unit testing

Testing of individual software components or modules. Typically done by the
programmer and not by testers, as it requires detailed knowledge of the internal
program design and code. may require developing test driver modules or test
harnesses.

### Incremental integration testing

Bottom up approach for testing i.e continuous testing of an application as new
functionality is added; Application functionality and modules should be
independent enough to test separately. done by programmers or by testers.

### Integration testing

Testing of integrated modules to verify combined functionality after
integration. Modules are typically code modules, individual applications, client
and server applications on a network, etc. This type of testing is especially
relevant to client/server and distributed systems.

### Functional testing

This type of testing ignores the internal parts and focus on the output is as
per requirement or not. Black-box type testing geared to functional requirements
of an application.

### System testing

Entire system is tested as per the requirements. Black-box type testing that is
based on overall requirements specifications, covers all combined parts of a
system.

### End-to-end testing

Similar to system testing, involves testing of a complete application
environment in a situation that mimics real-world use, such as interacting with
a database, using network communications, or interacting with other hardware,
applications, or systems if appropriate.

### Sanity testing

Testing to determine if a new software version is performing well enough to
accept it for a major testing effort. If application is crashing for initial use
then system is not stable enough for further testing and build or application is
assigned to fix.

### Regression testing

Testing the application as a whole for the modification in any module or
functionality. Difficult to cover all the system in regression testing so
typically automation tools are used for these testing types.

### Acceptance testing

Normally this type of testing is done to verify if system meets the customer
specified requirements. User or customer do this testing to determine whether to
accept application.

### Load testing

Its a performance testing to check system behavior under load. Testing an
application under heavy loads, such as testing of a web site under a range of
loads to determine at what point the system’s response time degrades or fails.

### Stress testing

System is stressed beyond its specifications to check how and when it fails.
Performed under heavy load like putting large number beyond storage capacity,
complex database queries, continuous input to system or database load.

### Performance testing

Term often used interchangeably with ‘stress’ and ‘load’ testing. To check
whether system meets performance requirements. Used different performance and
load tools to do this.

### Usability testing

User-friendliness check. Application flow is tested, Can new user understand the
application easily, Proper help documented whenever user stuck at any point.
Basically system navigation is checked in this testing.

### Install/uninstall testing

Tested for full, partial, or upgrade install/uninstall processes on different
operating systems under different hardware, software environment.

### Recovery testing

Testing how well a system recovers from crashes, hardware failures, or other
catastrophic problems.

### Security testing

Can system be penetrated by any hacking way. Testing how well the system
protects against unauthorized internal or external access. Checked if system,
database is safe from external attacks.

### Compatibility testing

Testing how well software performs in a particular hardware/software/operating
system/network environment and different combination s of above.

### Comparison testing

Comparison of product strengths and weaknesses with previous versions or other
similar products.

### Alpha testing

In house virtual user environment can be created for this type of testing.
Testing is done at the end of development. Still minor design changes may be
made as a result of such testing.

### Beta testing

Testing typically done by end-users or others. Final testing before releasing
application for commercial purpose.

### Migration testing

- http://www.softwaretestinghelp.com/migration-testing-types/
  Migration Testing is a verification process of migration of the legacy system to
  the new system with minimal disruption/downtime, with data integrity and no loss
  of data, while ensuring that all the specified functional and non-functional
  aspects of the application are met post-migration.

#### Application migration

Application migration is a type where entire application is migrated from one
environment or platform to another.

#### Database migration

Database migration is a type of migration where all the data in the database of
an application is migrated to another database.

For this type of migration, the application should be stable and the data in the
database should be correct and valid. Hence, the format, type, value etc.,
matters while migrating between databases.

#### Server migration

Server migration is a type of migration where the server data is moved from one
server to another server. Here configuration also gets migrated to the new
server along with the server data.

#### OS migration

OS Migration is a type of migration where an application is migrated from one
operating system to another. This involves a lot of challenges as the base
platform itself is changed and there is a huge risk of compatibility. Even
network, configurations, interfaces, and a lot more components require
re-designing.
