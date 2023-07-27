```ruby
animal = "dog"

loop do |animal|
  animal = "cat"
  var = "ball"
  break
end

puts animal
puts var
```
This code will output the string object `"dog"` and return `nil`. We also get error for undefined local variable `var`.

`line 2` the local variable `animal ` is initialized and assigned to the string object `"dog"`.

`line 4` a `loop` method is invoked with ` do..end` block as an argument, it is given a parameter `|animal|`. `line 5` reassignment for the variable `animal` to the string object `"cat"`. `line 6` local variable `var` is initialized and assigned to the string `"ball"`. `line 7` a break statment takes us out of the loop.

When the `puts` method is called on the local variable animal it outputs `"dog"`, the reassginemeth on `line 5` doesnt happen because of runys concept of variable shodowning. the parameter `|animal|` in the inner scope of the `do..end` block is sharing the same name as the varable `animal` in the outer scope preventing this reassigment.

The Error is occuring when the `puts` method is called on the `var` variable on `line 11`. This in the outer scope and doesnt have access to variable initialized in the inner scope.
