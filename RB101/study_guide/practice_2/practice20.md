```ruby
[1, 2, 3].each_with_index do |num, index|
  puts "The index of #{num} is #{index}."
end
```

This code will output 
The index of 1 is 0.
The index of 2 is 1.
The index of 3 is 2.

And will return nil as the puts method always returns nil. On line 2 each_with_index method is called the array [1, 2, 3]. we then have a do..end block with num and index as parameters. The each_with_index method calls a block with two arguments, the itiem and its index. The puts method on line 3 is called on the string "The index of #{num} is #{index}.". With string interpolation we are able to output the string displaying each item in the array and which index the item is in that array. This shows the usfulness of methods in ruby on data collections.
