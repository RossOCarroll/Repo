```ruby
arr = [1, 2, 3, 4]

counter = 0
sum = 0

loop do
  sum += arr[counter]
  counter += 1
  break if counter == arr.size
end 

puts "Your total is #{sum}"
```

This code on line 13 will output the string "Your total is 10" with the use of string interpolation with #{sum} effectively displaying the value of the 'sum' local variable. This code will return nil as the puts method will always return nil. 

 On line 2 local variable 'arr' is pointing to the array data collection of [1, 2, 3, 4]. A loop do method is invoked with a do..end block from lines 7 to 11. Within the block the sum variable is being reassigned with the += operater to variable sum plus the arr array indexed at the value of the counter. The counter is then being reassigned with the += operator incrementing the counter each time the loop repeats. On line 10 we have a break if statement stating when the counter has reached the size of the array to break out of the loop using the == equal to operator and the size method invoked on the arr array.

This loop will add each element in the arr and reassign that to the sum variable. This code demonstrates rubys concept of varible scope when using blocks. Within a block ruby can access varibles initialized out side of a block but the outer scope cannot access the inner scope of the block. Hench why the variables were initialized on line 4 and 5. 