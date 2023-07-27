```ruby
a = "Xyzzy"

def my_value(b)
  b = 'yzzyX'
end

my_value(a)
puts a
```

This code will output the string object `'Xyzzy'` and return `nil`.

On `line 2` the local variable `a` is initialized and assigned to the string object `"Xyzzy"`.

`line 8` the `my_value` method is invoked and the variable `a` is passed to it as an argument. 

`line 4` we see the method definition for `my_value` that is given the parameter `b`. `line 5` the local variable `b` is initialized and assigned to the string object `'yzzyx'`.

When we pass the variable `a` to the `my_value` method this does not changes the value of variable `a`. `my_value` is a none mutating method, so when the `puts` methos is called on `a` it outputs `'Xyzzy'`.