```ruby
def plus(x, y)
  x = x + y
end

a = 3
b = plus(a, 2)

puts a
puts b
```

This code will output `3` and `5` and return `nil`. On `line 6` we have the local variable `a` initiated and assigned the integer `3`. On `line 7` local variable `b` is initialized and assigned to the return value of the `plus` method with `a` and the integer `2` passed to it as an argument. \

`line 2` is the `plus` method definition that takes two parameters `x` and `y`. When the `plus` method is invoked on `line 7` it passes `a` which is pointing to `3` and the integer `2`. The parameters `x` and `y` are now pointing to the objects `3` and `2`. `line 3` `x` is reassigned to `x + y` the `plus` is returning `5`, `b` is now assigned to that return `5`. 

This demonstrates ruby's concept of object passing and variables as pointers. 