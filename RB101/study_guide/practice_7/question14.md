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

`line 6` the local variable `var` is initialized and assigned to the return value of the `test` method.

`line 2` through `line 4` is the method definition for the `test` method. `line3` the `puts` method is called on the string object `"written assesment"`. The return value if the `test` method is `nil` because the return is always the last evaluated statment of the method. the `puts` method always returns `nil`, so `var` is assigned to `nil`.

`line 8` through `line 12` is an `if/else` statment asking if `var` is truthy then the code on `line 9` will execute. Else the `puts` called on the string object `"interview"` on `line 11`. Because everything in Ruby evaluates to true but `false` and `nil` the code on `line 11` will execute outputing the string object "interview".

This deonstrate Rubys concept of truthiness.