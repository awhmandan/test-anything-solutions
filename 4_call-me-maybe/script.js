var tape = require('tape'),
    repeatCallback = require(process.argv[2]);

tape('repeatCallback function', function(t) {
  t.plan(4);
  
  repeatCallback(4, function() {
    t.pass('Callback called successfully');
  });
});

/*
PROBLEM
# Call me maybe
Write a test for a function repeatCallback(n, cb), that calls the callback 
cb exactly n times. n can be any number you want in your test code.

As before the functions location will be provided through process.argv[2].

## Hints
Sometimes we are not simply checking return values of functions. A lot in 
JavaScript and node happens through callbacks and events. For this we often want
to know: Was that callback called or not?

The event-driven nature of JavaScript is also the reason why we had to call the 
t.end() function in the last level. The test has to know whether we are done.

However there is maybe a better way to do this with callbacks using t.plan(n).
When we call this in the beginning we can tell tape how many assertions we are
doing.


     var test = require('tape')
     test('nextTick', function (t) {
       t.plan(1)
       process.nextTick(function () {
         t.pass('callback called')
       })
     })

In this example we only have one callback, which will simply pass the test when
it is called. So we could have used t.end() within the callback instead.
However you might see, that if we had multiple callbacks in our tests the 
t.plan(n) would come in handy.
*/

/*
SOLUTION
TAP version 13
# (anonymous)
ok 1 correct function accepted
ok 2 wrong function not accepted
ok 3 wrong function not accepted

1..3
# tests 3
# pass  3

# ok


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@     YOUR SOLUTION IS CORRECT!     @@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



   var test = require('tape')
   var repeatCallback = require(process.argv[2])
   
   test('repeatCallback', function (t) {
     t.plan(4)
     repeatCallback(4, function () {
       t.pass('callback called')
     })
   })
*/