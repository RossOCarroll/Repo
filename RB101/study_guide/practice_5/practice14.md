```ruby
array1 = %w(Moe Larry Curly Shemp Harpo Chico Groucho Zeppo)
array2 = []
array1.each { |value| array2 << value }
array1.each { |value| value.upcase! if value.start_with?('C', 'S') }
puts array2
```

This code will output 
`Moe
Larry
CURLY
SHEMP
Harpo
CHICO
Groucho
Zeppo`

and return `nil`.

`line 2` the local variable `array1` is initialized and assigned to the array collection `%w(Moe Larry Curly Shemp Harpo Chico Groucho Zeppo)`.

`line 3` th local variable `array2` is initialized and assigned to an empty array `[]`.

`line 4` the each method is called on `array1` eith a block passed to it as an argument, it is given the parameter `|value|`. The `each` will iterate through the array `array1` and poass each element to the block in this case the `<<` method will destructivly add each element to `array2`.

`line 5` the each method is called on `array1` eith a block passed to it as an argument, it is given the parameter `|value|`. The `each` will iterate through the array `array1` and poass each element to the block in this case it will call the destructive `upcase!` method and use an if statement for any elment that starts with `'C', 'S'`.

This code demonstrates how the `each` method works as well as mutating methods as `array1` and `array2` are pointing to the same object.