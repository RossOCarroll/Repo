```ruby
def increment(x)
  x << 'b'
end

y = 'a'
increment(y) 

puts y
```
This code will output `ab` and return `nil`.

`line 6` the local variable `y` is being assigned to the string object `a`. `line 7` the `increment` method is invoked and `y` is being passed in as an argument. `line 2` we have the method definition foe `increment` and the parameter `x`. `x` snd `y` are now pointing to the same object `a`. `line 3` the method `<<` is being called on `x` with `b` being passed as an argument. The `<<` method will append `b` to `a` destructly.
The `incement` method will return `ab`

`y` is now pointing to the same string object `ab`. This shows rubys concepts of rubys variables as pointers as now pointing to the same object.

