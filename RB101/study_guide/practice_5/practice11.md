```ruby
a = "Xyzzy"

def my_value(b)
  b = 'yzzyX'
end

my_value(a)
puts a
```

This code will output the string object `"Xyzzy"` and return `nil`.

`line 2` the local variable `a` is initialized assigned to the string object `"Xyzzy"`,

`line 8` the `my_value` method is invoked and passed an argument `b`.

`line 4` we see the method definition for `my_value`, it is given on parameter `b`. `line 5` `b` is being reassigned to the string `'yzzyX'`. 

`line 9` the `puts` method is called on the variable `a` and `"Xyzzy"` is output. Because methods have theyre own self contianed scope the variable `a` in the outer scope remains ``"Xyzzy"`. 