```ruby
animal = "dog"

loop do |_|
  animal = "cat"
  var = "ball"
  break
end

puts animal
puts var
```

This code will output the string object `"cat"` and return `nil`. It will also raise an error for undefined local variable or method `var`

On `line 2` local variable `animal` is initialized and assigned to the string object `"dog"`. 

`line 4` the `loop` method is invoked and `do..end` passed to it as an arggument. `line 5` we see reassignment off the local `animal` to `"cat"`. `line 6` local variable `var` is initialized and assigned to the string object `"ball"`. `line 7` a `break` take us out of the `loop`.

This error is raise due to Rubys scoping rules with blocks. The variable `var` initialized in the `do..end` block is in the inner scope. According Rubys variable scoping rules the outter scope does not have access to the inners scope. This is why we get an error on `line 11` when the `puts` method is invoked on `var`