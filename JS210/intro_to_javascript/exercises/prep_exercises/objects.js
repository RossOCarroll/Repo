function foo(bar) {
  console.log(bar());
}



foo(function() { return "Welcome"});    // Should print 'Welcome'
foo();    // Should print 3.1415
foo();    // Should print [1, 2, 3]