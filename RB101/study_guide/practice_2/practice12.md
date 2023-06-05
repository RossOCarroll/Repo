```ruby
[1, 2, 3].any? do |num|
  num > 2
end
```

In this code snipet the any? method is called on an array data collection [1, 2, 3]. The any? method returns true if the block ever returns a value other than false or nil. The block has a parameter |num| and the code on line 3 is asking if any element in the collection is greater than the integer 2 using the > operator. 

This code will n ot output anything but will return true as the integer 3 in the collection is greater than 2 as per the blocks code num > 2.