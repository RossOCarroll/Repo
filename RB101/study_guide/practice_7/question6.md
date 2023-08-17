```ruby
array = [0, 1, 2, 3, 4, 5]

1.times { index = 0 }

loop do
  puts array[index]
  index += 1
  break if index >= array.length
end
```

This code will raise an error because of rubys scoping rules when it comes to local variables and blocks. `line 3` the local variable `index` is initialed withing the block of the `times` method called on the integer `1`. This created a inner scope and `index` cannot be accessed in the `loop` methods `do..end` block on `lines 6 - 10`. 

local variable initiaed with in the inner scope cant be accessed in the outer scope but local variables initialed in the outer scope can be access in the inner scope.