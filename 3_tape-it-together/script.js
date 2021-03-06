var tape = require('tape'),
    fancify = require(process.argv[2]);

tape('fancify function', function(t) {
  t.equal(fancify('Hello'), '~*~Hello~*~', 'wraps string in ~*~~*~');
  t.equal(fancify('Hello', true), '~*~HELLO~*~', 'converts string to uppercase, wraps in ~*~~*~');
  t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'wraps string in ~[third arg submitted]~~[third arg submitted]~');
  t.end();
});

/*
PROBLEM
# Tape it together
Write tests that output TAP, that tests the following properties of a function
fancify. The function will be provided in process.argv[2].

1 fancify(str) returns the str wrapped in ~*~
  Example: fancify('Hello') returns ~*~Hello~*~
2 It takes an optional second argument that converts the string into ALLCAPS
  Example: fancify('Hello', true) returns ~*~HELLO~*~
3 It takes a third optional argument that determines the character in the middle
  Example: fancify('Hello', false, '!') returns ~!~Hello~!~

## Hints
Testing with assert still has some downsides. Even though we don't have to
check all the values ourself like in the first level, but now we only get not
very readable errors when something is wrong. Otherwise our tests don't do
anything. Maybe we still would like to see some information that everything is
ok.

There is a standard for outputting data from tests called TAP, the 
Test Anything Protocol. It is nicely readable for humans as well as for our
robotic friends.

One module for testing that outputs TAP is tape (another one is tap, duh).
It takes a description of what you are testing and a callback function, with a
parameter t that works quite similar to assert. You use it to write your 
assertions. However it also has a function t.end(), that you call when you are
done with your assertions.

The tape module is not included in Node, so you need to install them in your
project folder (where you keep your exercise files) with npm install tape.

Here is an example how to test the last function with tape


     var test = require('tape')
     var isCoolNumber = require('./cool.js')
   
     test('isCoolNumber accepts only cool numbers', function (t) {
       t.ok(isCoolNumber(42), '42 should be cool')
       t.end()
     })

## Resources

    * TAP on Wikipedia http://en.wikipedia.org/wiki/Test_Anything_Protocol
    * The tape module https://www.npmjs.org/package/tape
*/

/*
SOLUTION
TAP version 13
# (anonymous)
ok 1 wrong function not accepted
ok 2 wrong function not accepted
ok 3 wrong function not accepted
ok 4 correct function accepted

1..4
# tests 4
# pass  4

# ok


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@     YOUR SOLUTION IS CORRECT!     @@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



   var test = require('tape')
   var fancify = require(process.argv[2])
   
   test('fancify', function (t) {
     t.equal(fancify('Wat'), '~*~Wat~*~', 'Wraps a string in ~*~')
     t.equal(fancify('Wat', true), '~*~WAT~*~', 'Optionally makes it allcaps')
     t.equal(fancify('Wat', false, '%'), '~%~Wat~%~', 'Optionally allows to set the character')
     t.end()
   })
*/