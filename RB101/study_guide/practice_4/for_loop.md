```ruby
array = [2, 4, 6, 8]

for num in array do
  puts num
  a_num = num
end

puts a_num
```

This code will output `2,4,6,8,8` and return `nil`. 

On `line 2`  the local variable `array` is intialized and assigned to the array colletion of `[2, 4, 6, 8]`.

`line 4` a `for` loop is used given the parameter `num`. This loop will iterate through the `array` and the `puts` method on `line 5` will output each element. 

`line 6` we have the local variable `a_num` iniizalized and being assigned to `num`. by the end of the iteration `a_num` will be pointing at `8`.

The `for` loop is different from the previous `loop` as its not implemented as a method and therfore doesnt create a new scope. We are able to access `a_num` when the `puts` method is called on `line 9`. The `for` `loop` aslo doesnt need a `break` statement to exit the `loop`.