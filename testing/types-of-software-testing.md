# Types of software testing
Maybe a guide/section specifically about types of Angular tests?

Some types of testing are not relevant to Angular projects, but maybe there are
parallels to be drawn.

## Suggested resources
- [Angular.io: Testing guide](https://angular.io/guide/testing)
- [Types Of Software Testing: Different Testing Types With Details](https://www.softwaretestinghelp.com/types-of-software-testing/)
- [Software Testing Help: Types of testing category](https://www.softwaretestinghelp.com/category/types-of-testing/)

## Suggested topics
- UI component testing
  - Isolated component tests
  - Shallow component tests
  - Integrated component tests
- Mutation testing
  - [Stryker](../libraries-and-frameworks/stryker.md)
- End-to-end testing
- Unit testing
- Integration testing
- Contract testing
  - [JSCheck](../libraries-and-frameworks/jscheck.md)

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
database should be correct and valid.  Hence, the format, type, value etc.,
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
