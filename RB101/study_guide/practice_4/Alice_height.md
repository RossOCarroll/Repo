```ruby
CAKE_MULTIPLIER = 2.16 # more then double to get to 9 ft (== 108 in) tall

def bigger(height)
  bigger_height = height * CAKE_MULTIPLIER
end

alice_height = 50 #ft
p bigger(alice_height)

p bigger_height

p alice_height
```

On `line 8` the `p` method is called on the return value of the `bigger` method with `alice_height` passed to it as an argument. This code will output `108.0`

On line `10` the `p` method is called on the local variable `bigger_height` and this raises an error for undefined local variable. Because the `bigger_height` variable is initialized within the method definition `bigger` it is not accessible in the outer scope.

On `line 12` the `p` method is called on the local `alice_height`. If the error were not raised the snippet of code would output `50`.

This demonstrates ruby scoping rules when it comes to method definition as method have a self contained scope. 