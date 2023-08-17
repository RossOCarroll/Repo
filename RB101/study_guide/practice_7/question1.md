```ruby
arr = [1, 2, 3, 4]

arr.each do |x|
  a = x
end

puts a
```

Given this context of the `each` method invocation the `do..end` block defines an argument, in this case the local variable `a` being initialized and assigned to the parameter `x`. This `do..end` block also creates an inner scope. 

`line 7` when the puts method is called on the local variable `a` we get an error because `a` was intialized on `line 4` putting it out of scope. Ruby rules state the local variables initialized withing the inner scope cannot be accessed in the outer scope. But local variables initalized in the outer scope can be accessed in the inner scope.

To fix this we can initialized the local variable `a` in the outer scope and assign it to an empty string. 
