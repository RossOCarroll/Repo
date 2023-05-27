```ruby
a = 4

loop do
  a = 5
  b = 3


  break
end

puts a
puts b
```

On line 1 we have local variable 'a' assigned to the integer 4. On line 4 we have a loop method invocation and the beginning of a do..end block. On line 5 the variable a is reassigned to the integer 5. on line 6 we have a new variable assigned to the integer 3. The loop the breaks out at line 9. The puts method is called on variable a as an argument and 5 output and nil is returned as the puts method returns nil. We then have puts method on variable b as an argument but this raises an undefined local variable error. The variable was initialized with in the block on lines 4 through 10. Because of ruby scoping rules b cannot be accessed beacuse its in the inner scope of the block. A blocks inner scope can acess the outter hence the reasignment of 'a' but the outter scope cannot access the variable b intialized in the outer scope.

