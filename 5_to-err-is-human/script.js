var tape = require('tape'),
    feedCat = require(process.argv[2]);



tape('feedCat function', function(t) {
  t.plan(3);
  
  t.equal(feedCat('fish'), 'yum', 'will return str "yum"');
  
  t.equal(feedCat('chicken'), 'yum', 'will return str "yum"');
    
  t.throws(function() {
    feedCat('chocolate');
  });  
});
 
/*
PROBLEM
# To err is human
A function feedCat takes any kind of food as a String argument and returns
'yum' for everything you feed them. However if you try to feed the cat
'chocolate', the function will throw an error.

Write tests for feedCat to be sure kittens can be fed yummy food without
being harmed.

The function will be provided through process.argv[2].

## Hints

   To err is human, to purr feline. - Robert Byrne

Chocolate is awesome and so are cats. However they do not make a wonderful
combination. The Caffeine and Theobromine in the chocolate can harm cats as well
as dogs.

Feeding chocolate to cats would therefore be considered an error. One way in
JavaScript to deal with errors is to throw them (even though in Node this is
probably not the best way).

If we want to deal with these errors, we can use try and catch like this:


   try {
     petDog('bordercollie')
   }
   catch(err) {
     console.error('It seems like it doesn\'t like that.')
   }

When we test things, we often say that we want to make sure that there are no
errors. Well, that is not entirely true. We certainly want error-free code.
However if someone else tries to do something weird with our functions, it
still might be good to see an error. So good that we might want to test this
behavior, e.g. to make sure there is no chocolate fed to cats.

So maybe we know that a dachshund does not like to be petted. Well we could test
this behavior like this:


   t.throws(function () {
     petDog('dachshund')
   })

Now the test expects an error and throws an error if there is no error. Mind
boggling, right?

By the way, if you are familiar with functional javascript, you might already
know that you could also write it in one line:


   t.throws(petDog.bind(null, 'dachhund'))
*/

/*
SOLUTION
TAP version 13
# (anonymous)
ok 1 wrong function not accepted
ok 2 correct function accepted
ok 3 wrong function not accepted

1..3
# tests 3
# pass  3

# ok


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@     YOUR SOLUTION IS CORRECT!     @@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



   var test = require('tape')
   var feedCat = require(process.argv[2])
   
   test('cat feeding', function (t) {
     t.plan(2)
     t.equal(feedCat('food'), 'yum')
     t.throws(feedCat.bind(null, 'chocolate'))
   })
*/