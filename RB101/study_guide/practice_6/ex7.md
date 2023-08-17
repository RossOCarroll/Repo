```ruby
total = 0
[1, 2, 3].each do |number|
  total += number
end
puts total # 6
```

`line 1` the local variable `total` is intialized and assigned to the integer `0`.

`line 3` the `ech` method is called on an array collection `[1, 2, 3]` with a `do..end` block as an argument. The `do..end` block is given one parameter `|number|`. 

`Line 4` the `total` variable is being reassigned using thr `+=` operator to `number + number`. The each method will iterate through the array passing it to the block. For each object the method will add it to itself and reassign that value to the `total` variable.

`line 6` the `puts` method is called on the local variable `total` which now has a value of `6` as the last iteration in the `each` method is `total = number + number`. This program will also return `nil`.

 