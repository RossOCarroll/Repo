```ruby
a = 7

def my_value(a)
  a += 10
end

my_value(a)
puts a
```

This code will output the integer `7` and return `nil`.

`line 2` the local variable `a` is initialised and assigned to the integer `7`.

`line 4` we see the method definition for `my_value` and it is given one parameter `a`. `line 5` the local variable `a` is being reassigned to `a + 10` using `+=` operator.

`line 8` the `my_value` method is invoked and the local vsrosble `a` is passed to it as an argument. The code in the method definition for `my_value` on `line 5` does not mutate the value of the variable `a` that is passed to it. The program outputs `7` as the `puts` method is called on `a` on `line 9`. 

This illustrates a non-mutating method in ruby and how variables are pointers. 