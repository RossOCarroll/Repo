```ruby
a = "Hello"

if a
  puts "Hello is truthy"
else
  puts "Hello is falsey"
end
```

This code will output the string `"Hello is truthy"` and return `nil`.

On `line 1` the local variable `a` is assigned to the string object `"Hello"`. 

On `line 4` we begin a `if/else` statement stating `if` the variable `a` is truthy then on `line 5` the `puts` method is called on the string object `"Hello is truthy"`. `line 6` There is the statement `else` and `line 7` the `puts` method is called on the string object `"Hello is falsy"`. 

This code will always output `"Hello is truthy"` because everything in ruby is considered truthy but `nil` and `false`. Because the value of the variable `a` is `"Hello"` this evaluates to `true` the `if` statement will always run.