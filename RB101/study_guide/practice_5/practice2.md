```ruby
a = 10

while true do
  a = 5
  break
end

puts a
```

This code will output the integer `5` and return `nil`.

On `line 2` the local variable `a` is initialized and assigned to the integer `10`. 

`line 4` a `do/while` loop that is given the conditional boolean `true`. A `do..end` block is given as an argument on `lines 4-7`. `line 5` the local variable a is reassigned to the integer `5`. `line 6` a `break` statment takes us out of the `loop`.

The code demonstrate rubys scoping rules with blocks. the inner scope of the `do..end` block was able to access the variable initialized in the outer scope on `line 2`.