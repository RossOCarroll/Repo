```ruby
a = 4
b = 2

loop do
  c = 3
  a = c
  break
end

puts a
puts b
```

On line 11 the puts method is called on the variable 'a' and the return is nil as the puts method always returns nil. On line 12 the puts method is called the variable b and the output is 2 and the output is again nil. On line 2 we have the local variable 'a' initialized and being assigned to the integer 4. on line 5 we have the loop method invoked with a do..end block containing an argument. Line 6 a variable 'c' is assigned to integer 3 and then on line 7 we have a reassigned to the value of c. Variable a is now pointing to 3. This reassignment was aloud because a blocks inner scope can access the variable a in the outer scope but not vice versa.