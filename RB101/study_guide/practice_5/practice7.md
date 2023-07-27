```ruby
def test
  puts "written assessment"
end

var = test

if var
  puts "written assessment"
else
  puts "interview"
end
```

this code will output the string objects `"written assessment"` and `"interview"` and return `nil`.

`line 2` is the method defintion for `test`, `line 3` the `puts` method is called on the string object `"written assessment"`. 

`line 6` the local variable `var` is initialized and assigned to the the return value on the `test` method. Because the `puts` method was called on the string object `"written assessment"` the return value is `nil`. 

`line 8` the `if/else` statement is asking if the `var` variable evaluates to `true` which it doesnt because the value is `nil`. Everything in ruby is truthy but `nil` and `false`. So the `else` statment run and the `puts` method is called on the string object `"interview"`. 

This demonstrates rubys concept of truthiness.