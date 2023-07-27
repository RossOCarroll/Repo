```ruby
a = "Xyzzy"

def my_value(b)
  b[2] = '-'
end

my_value(a)
puts a
```

This code will output the string `"Xy-zy"` and return `nil`.

On `line 2` local variable `a` is initialized and assigned to the string object `"Xyzzy"`. 

On `line 8` the `my_value` method is invoked and the variable `a` is passed to it as an argument. 

On `lines 4 - 6` is the method defintion foe `my_value` and it is given one parameter `b`. `line 5` we have the reassigment on the 2nd index to the string object `'-'`. When the string object `"Xyzzy"` is passed to the `my-value` method it mutate the value of the string to `"Xy-zy"` as we see when the `puts` method is called on the local variable `a` on `line 9`. 

`my_value` is a mutating method and this code illustrates a mutating method in ruby. 