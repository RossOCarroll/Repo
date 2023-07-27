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

On `line 10` we have the `puts` method being called on the variable `a` as an argument. This will output 5 and retuen `nil`. on `line 11` we hav ethe 1`puts` method called on the varible `b` as an argument and it will raise an error undefinted local variable error.

`Line 2` we have variable `a` being initialized and assigned to the variable `4` .There is  `loop` method invoked on line 4 with a `do..en` block passed as an argument.  `line 5` the local variable a is beinging reassigned to the integer `5`. `line 6` we have the local variable `b` being initiazed and pointing to the integer `3`. 

The error is raised because the `puts` method on `line 11` doesnt have access to the varriable `b` initialized with in the block on lines 4 through 8. This initization on `line 6` is in the inner scope and the outter scope doesnt have access to variable initialized within  the inner scope of blocks. Althpough `a` is able to be reassigned on `line 5` beacuse the inner scope of the block has access to variable initialized in the outter scope.