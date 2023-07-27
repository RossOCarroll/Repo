```ruby
a = 7

def my_value(b)
  a = b
end

my_value(a + 5)
puts a
```


This code will output the integer `7` and return `nil`.

`line 2` the local variable `a` is initialized and assigned to the integer `7`.

`line 8` the `my_value` method is invoked and it is given an argument of variable `a` + the integer 5.

`line 4` we see the method definition for `my_value` and it is given one parameter `b`. `line 5` we have reassignment of the variable `a` to the value of `b`. The value of `a` in this method is `12` . In ruby methods have theyre own selfe contianed scope so when the `puts` method is called on the variable `a`  on `line 9` it outputs its value of `7`.

This deomontrates rubys concept of methods haveing they're own self contianed scope.

