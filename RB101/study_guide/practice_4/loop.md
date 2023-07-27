```ruby
array = [2, 4, 6, 8]

# Can add code here

index = 0
loop do
  puts (array[index] - 2)
  another_num = array[index] - 2
  index += 1
  break if (array.size) == index
end

puts another_num
```

In this program we get the output `0,2,4,6` and it returns `nil`. 
We get an error raised for undefined local variable or method `another_num`.

This error is raised because of rubys variable scopeing rules when it comes to blocks. On `line 9` the local variable `another_num` is initialized in the `do..end` block on `lines 7 - 12`. This local  variable initialized from in side the block cannot be access outside the block. 

To Fix this we can initialize the local variable `another_num = ''` on `line 4`` and set it to an empty string. this demonstrates rubys scoping rules in blocks. Variables initialized in the inner scope cannot be accessed by the outer scope but variables in the outer scope can be accessed by the inner scope.