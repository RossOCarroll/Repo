```ruby
arr = [1, 2, 3, 4]

for x in arr do
  last_num = x
end

puts last_num

loop do
  first_num = arr[0]
  break
end

puts first_num
```

On `line 15` the `puts` method is called on the local variable `first_num`. This will raise an error beacuse of rubys local variable scoping rules when it comes to methods with blocks. `line 11` the local variable `first_num` is initiated and assigned to the `[0]` index of the `arr` array which is the integer `1`. Beacuse `first_num` is intiated in the inner scope of the `do..end` block on `line 10` to `line 13` we do not have access to it in the outer scope. 

`line 4` the local variable `last_num` is initated and assigned to the value of `x` within the `do..end` structure between `line 3` to `line 5`. `line 7` will output the integer `4`, we are able to do this because the `for` loop is not implemented as a method therefore not creating its own scope. 

To fix this code we could initiated the `first_num` variable on `line 8` in the outer scope and assign it to an empty string. That way we have access to reassign `first_num` on `line 10` and we can also call the `puts` method on `first-num` on `line 15`.


