```ruby
array = [1, 2, 3, 4, 5]

array.select do |num|
   puts num if num.odd?
end
```

`line 1` we have the local variable `array` initialized and assigned to an array of integers `[1, 2, 3, 4, 5]`. 

`line 4` the `select` method is called on `array` we then have a `do..end` block on `line 4` through `line 6` passed to it as an argument. Within the `do..end` block with have a paramater `|num|`. `line 5` the `puts` method is called on `num` then follows an `if` conditional followed by `odd?` method called on `num`.

This code will output `1, 3, 5` and return `nil`. The `select` method will iterate through the array and return a true or false depending on the argument passed to it. The code on `line 5` is asking if the element is odd? If thats true it will output that element. 

This demonstrates rubys `select` method and rubys concept of truthiness. 