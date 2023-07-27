```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = arr.select do |n| 
  n + 1
  puts n
end
p new_array
```

On `line 2` the local variable `arr` is initialized and assigned to the array collection `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

On `line 4` the local variable `new_array` is initialized and assigned to the return value of the `select` method invoked on `arr`. A `do..end` block is then passed as an argument for the `select` method it is given a parameter of `|n|`. `line 6` the `puts` method is called on `n`. 

The `select` method well iterate through each value in the `arr` array and it will determine if the argument is true or not then return that element and also the `puts n` will output every element and return `nil`. 

`line 8` when the `p` method is called on `new_array` it will return an empty array as the `select` return a new array based on the value of the block.