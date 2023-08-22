```ruby
a = 10

while true do
  a = 5
  break
end

puts a
```

`line 2` the local variable `a` is initialized and assigned to the integer `10`.

`line 4` through `line 7` a `while` `loop` is called with  a `do..end` structure as an arguments. The `while` is given the parameter of the boolean `true`. `line 5` the local variable `a` is being reassigned to the integer `5`. `line 6` a `break` statement takes us out of the `while` `loop`. A `while` `loop` is not implemented as a method so the `do..end` block does not create an inner scope.

`line 9` the puts methos is invoked on the local variable `a`, this code will output the integer 5 and return `nil`.

