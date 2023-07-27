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

This code outputs `3` and `2`. On `line 1` the variable `a` is iniaiaized and is assigned to the integer `4`. `line 2` the local variable `b`1 is initialized and assigned to the integer `2`

`line 5` there is a `loop` method invocation and a `do..end` block passed to it as an argument. `line 6` we have the local variable `c` being in initialized and assigned to the variable `3` within the inner scope. `line 7` local variable `a` is being reassigned to `c`. `c` and `a` are now pointing to the same object `3`. This block has acess to the variable `a` in the outer scope. 

The `puts` method is called on the varibable `a` and beacuse it was reassigned it putputs `3` and returns `nil`. `Line 12` the puts method is called on `b` as an argument and outputs `2` as it was unchanged and will return `nil`.