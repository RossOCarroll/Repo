```ruby
def include?(arr, search_item)
  !arr.each { |item| return true if item == search_item }
end

include?([1, 2, 3, 4, 5], 6)
```

`line 6` the `include?` method is invoked and its given two arguments; the array collection of integers `[1, 2, 3, 4, 5]` and integer `6`.

`line 2` through `line 4` is the method definition for `include?`, it is given two parameters `arr` and `serach_item`.

`line 3` the `each`  method is called on `arr` prepemnded by the `!` operator which returns the opposite of a boolean expression. The `each` method is given a block as an argument with one parameter `|item|`. Then the expression `return` `true` `if` `item` is equal to the `search_item`. The `each` will iterate through the array passing each object to the block and `return` `true` if the `search_item` is in the array.

the `include?` method will return `false` as the integer `6` does not appear in the array `[1, 2, 3, 4, 5]`. The `each ` will return the array when it finishes the iteration. Beacuse the return is a truthy value the `!` operator will return the oppsite `false`. 