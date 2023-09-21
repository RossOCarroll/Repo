```ruby
[1, 2, 3].any? do |num|
  puts num
  num.odd?
end
```

The return value of the block in this code will be the last line evaluated. the `any?` method looks at the trutiness of the blocks return value. Here is using the `odd?` method
to determine if the lement is an odd  number as it iterates through the array. This method should return true as 1 and 3 are odd numbers. This code will output 1. 