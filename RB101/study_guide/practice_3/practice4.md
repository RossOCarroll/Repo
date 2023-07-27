```ruby
animal = "dog"

loop do |animal|
  animal = "cat"
  break
end

puts animal
```

On `line 2` we have the local variable `animal` inizialized in the outer scope and is assigned to the string `"dog"`. On `line 4` a `loop` method is invoked with  `do..end` block passed to it as an argument. `|animal|` is set ass a parameter for the `do...end` block in the inner scope. On `line 5` the local variable `animal` is re assigned to the string object `cat` also in the inner scope. `Line 6` we have a `break` statement which takes us out of the `loop`. `line 9` the `puts` method is called with `animal` passed to it as an argument.

This code will output the string `dog` and return `nil`. The reasignment on `line 5` doesnt occur beacuse the parameter `|animal|` shares the same name as the local variable `animal` on `line 2`. This is known as variable shadowning. The inner scope of the `do..end` block doesnt have access to the outer scope beacuse the parameter `|animal|` is 'showdowing' it.