```ruby
a = 7
array = \[1, 2, 3]

array.each do |element|
  a = element
end

puts a
```

This code will output the integer `3` and return `nil`.

`line 1` the local variable `a` is initialized and assigned to the integer `7`.

`line 3` the local variable `array` is initialized and assigned to the array collection `[1, 2, 3]`.

`line 5` the `each` method is called on `array` and a `do..end` bloack is passed to it as an argument, it is given a parameter `|element|`. `line 6` we have `a` being reassigned to the value og element. The `each` method will iterate through the `array` and pass each element to the block. In this case its reassigning the variable `a`, the last number in the array is `3`. When the `puts` method is called on the variable `a` on `line 9` it will output `3`.  The `each`  method will return the orginal array.