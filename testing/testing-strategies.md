# Testing strategies

Deciding what to test and how to test it.

## Suggested resources
- [Magic Tricks of Testing at Ancient City Ruby 2013 by Sandi Metz](https://youtu.be/qPfQM4w4I04)

## Suggested topics
- The Unit Testing Minimalist strategy by Sandi Metz

## The Unit Testing Minimalist strategy
### Notes for this section
Incoming messages are the OUT's (Object Under Test) public API.

To unit test an incoming query message, i.e. a getter or a method that returns
data, we should assert on the result of the returned data.

To unit test an incoming command message, i.e. a setter or a method that doesn't
return any data, we should assert on the direct public side effects, i.e. the
public state of the OUT.

Outgoing messages are the messages that the OUT send to other objects, i.e. the
parts of the public API of the dependencies that the OUT uses.

It's redundant to unit test the outgoing query messages as this should be
covered in the unit tests of the dependency itself.

To unit test an outgoing command message, i.e. notifying an observer, emitting
an event or a lower level of abstraction, e.g. a Data Access Layer, we should
expect that the outgoing message is sent by using a mock. Verify that the
outgoing command message has been sent with expected parameters and that it has
only been sent once.