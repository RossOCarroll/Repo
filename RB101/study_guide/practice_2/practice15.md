```ruby
animal = "dog"

loop do |animal|
  animal = "cat"
  break
end

puts animal
```

On line 9 the puts method invoked on the variable animal which is pointing to the string "dog". Thsi code outputs the string "dog" and returns nil as the puts method always returns nil. 

On line 4 we have a loop method involked followed by a do..end block from lines 4 through 7. We have a  parameter |animal| used as an alesis. Line five the animal variable is being reassigned to the string "cat". On line 6 we have a break statement taking the program out of the loop. 

The reassignment on line 5 doesnt work as the paramater animal with the same name is 'shadowing', a concept in ruby called varible shadowing. 