```ruby
words = %w(jump trip laugh run talk)

new_array = words.map do |word|
  word.start_with?("t")
end

p new_array
```

This code will output the [false, true, false, false, true] and return the value of the object new_array passed to the p method. 

On line to we have the local variable word initiated and its assigned to the array %w(jump trip laugh run talk). On line 4 we have the new_array variable assigned to the value on the map method called on the words array. We then have a do..end block initiated with a parameter of |word|. Line 5 the start_with? method is called on word with the argument of "t" string. The map method creates a new array containing the values returned by the block. This map method will iterate through each line of code and return true or false if the object in the array starts with "t". new_array is assigned to that value. This shows the usefulness of the map method in iterating over arrays in ruby.